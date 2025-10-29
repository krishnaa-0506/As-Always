import { NextRequest, NextResponse } from 'next/server'
import { cloudRAG } from '@/lib/rag/CloudRAG'
import { dbService } from '@/lib/db/mongodb'
import { Memory } from '@/lib/types'
import { SecuritySanitizer } from '@/lib/security/sanitizer'
import { ErrorLogger, ErrorType } from '@/lib/logging/logger'
import { ContentUniquenessService } from '@/lib/services/contentUniqueness'

import { rateLimiter } from '@/lib/middleware/rateLimiter';
import { generateContentSchema, GenerateContentInput } from '@/lib/validations/contentGeneration';

export async function POST(request: NextRequest) {
  let validatedData: GenerateContentInput | undefined;
  
  try {
    // Check rate limit
    const rateLimitResponse = rateLimiter(request);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    const rawUserData = await request.json();
    
    // Validate input data
    const validationResult = generateContentSchema.safeParse(rawUserData);
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.format());
      return NextResponse.json({
        success: false,
        error: 'Invalid input data',
        message: validationResult.error.format()
      }, { status: 400 });
    }

    validatedData = validationResult.data;
    
    // Sanitize input data
    const userData = {
      senderName: SecuritySanitizer.sanitizeContent(validatedData.senderName),
      receiverName: SecuritySanitizer.sanitizeContent(validatedData.receiverName),
      relationship: SecuritySanitizer.sanitizeContent(validatedData.relationship),
      receiverGender: SecuritySanitizer.sanitizeContent(validatedData.receiverGender || 'other'),
      emotionTag: validatedData.emotionTag ? SecuritySanitizer.sanitizeContent(validatedData.emotionTag) : undefined,
      selectedSong: validatedData.selectedSong ? SecuritySanitizer.sanitizeString(validatedData.selectedSong) : undefined,
      voiceNote: validatedData.voiceNote ? SecuritySanitizer.sanitizeString(validatedData.voiceNote) : undefined,
      textContent: validatedData.textContent ? SecuritySanitizer.sanitizeContent(validatedData.textContent) : undefined,
      currentUser: validatedData.currentUser || { id: 'anonymous' }
    }
    
    // Get user from localStorage context (passed in request)
    const currentUser = userData.currentUser
    
    // Generate unique code
    const code = await generateUniqueCode()
    
    // Create message in database first
    const now = new Date()
    const message = await dbService.createMessage({
      code,
      senderName: userData.senderName,
      receiverName: userData.receiverName,
      relationship: userData.relationship,
      receiverGender: userData.receiverGender,
      emotionTag: userData.emotionTag,
      selectedSong: userData.selectedSong,
      voiceNote: userData.voiceNote ? 'uploaded' : undefined,
      textContent: userData.textContent,
      status: 'GENERATED',
      isViewed: false,
      senderId: currentUser.id,
      reactions: [],
      memories: [],
      screens: [],
      createdAt: now,
      updatedAt: now
    })

    // Get memories for the message
    let memories: Memory[] = [];
    try {
      if (!message._id) {
        throw new Error('Message ID is required to fetch memories');
      }
      const fetchedMemories = await dbService.getMemoriesByMessageId(message._id.toString());
      memories = fetchedMemories.map(memory => {
        if (!memory) {
          throw new Error('Invalid memory object received');
        }
        
        // Map database types to frontend types
        let memoryType: 'image' | 'video' | 'audio' = 'image';
        if (memory.type === 'PHOTO') memoryType = 'image';
        else if (memory.type === 'VIDEO') memoryType = 'video';
        else if (memory.type === 'VOICE') memoryType = 'audio';
        else if (memory.type === 'TEXT') memoryType = 'image'; // Treat text as image for display
        
        return {
          id: memory._id?.toString() || 'unknown',
          type: memoryType,
          content: memory.content,
          caption: memory.caption,
          filename: memory.filename,
          url: memory.url
        };
      }).map(memory => SecuritySanitizer.sanitizeMemory(memory));
    } catch (error) {
      console.error('Error fetching memories:', error);
      // Continue without memories if there's an error
    }
    
    // Prepare data for RAG
    const ragData = {
      ...userData,
      memories: memories.map(m => ({
        type: m.type,
        content: m.content,
        caption: m.caption,
        filename: m.filename
      }))
    }

    // Generate personalized content using Cloud RAG with vector DB and LLM API
    let generatedContent;
    try {
      generatedContent = await cloudRAG.generatePersonalizedContent(ragData)
    } catch (error) {
      console.error('CloudRAG failed, using fallback content generation:', error)
      // Fallback content generation
      generatedContent = await generateFallbackContent(ragData)
    }

    // Store generated screens in database
    const screensData = generatedContent.screens.map((screen: any, index: number) => ({
      messageId: message._id!.toString(),
      screenIndex: index,
      content: screen.content,
      background: screen.background,
      animation: screen.animation,
      duration: screen.duration || 5000, // Default 5 seconds if not specified
      emotion: screen.emotion,
      createdAt: new Date()
    }))
    
    const screens = await dbService.addScreens(screensData)
    
    // Update the message with the new screens
    await dbService.updateMessage(message._id!.toString(), {
      screens,
      status: 'GENERATED',
      updatedAt: new Date()
    })
    
    return NextResponse.json({
      success: true,
      data: {
        ...generatedContent,
        messageId: message._id!.toString(),
        code: message.code
      },
      message: 'Content generated successfully'
    })
    
  } catch (error) {
    const errorDetails = {
      userId: validatedData?.currentUser?.id || 'anonymous',
      senderName: validatedData?.senderName || 'unknown',
      receiverName: validatedData?.receiverName || 'unknown'
    };

    // Simple console error instead of complex logging to avoid worker issues
    console.error('Content generation error:', error, errorDetails);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({
      success: false,
      error: 'Failed to generate content',
      message: process.env.NODE_ENV === 'development' ? errorMessage : 'Content generation failed'
    }, { status: 500 });
  }
}

async function generateUniqueCode(): Promise<string> {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Removed confusing characters like 0,O,1,I
  let code: string;
  let attempts = 0;
  const maxAttempts = 50; // Increased max attempts
  
  do {
    // Generate a code with better uniqueness
    const timestamp = Date.now().toString(36).slice(-2).toUpperCase();
    const random = Array(4).fill(0).map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    code = `${random}${timestamp}`.slice(0, 6);
    
    attempts++;
    
    try {
      // Check if code already exists
      const existingMessage = await dbService.findMessageByCode(code);
      if (!existingMessage) {
        console.log('Generated unique code:', code);
        return code;
      }
    } catch (error) {
      console.error('Error checking code existence:', error);
      // If there's a database error, try another code
      continue;
    }
  } while (attempts < maxAttempts);
  
  throw new Error('Failed to generate unique code');
}

// Fallback content generation when CloudRAG fails
async function generateFallbackContent(ragData: any) {
  const { 
    senderName, 
    receiverName, 
    relationship, 
    emotionTag, 
    selectedTemplate,
    selectedSong,
    memories,
    textContent,
    voiceNote 
  } = ragData;
  
  // Get or create content session for uniqueness tracking
  const contentTone = emotionTag || 'casual';
  const contentSession = await ContentUniquenessService.getContentSession(
    senderName, 
    receiverName, 
    relationship,
    contentTone
  );
  
  // Load template to determine screen count
  let templateData = null;
  let targetScreenCount = 20; // Default
  
  try {
    // Try to load template data (you might need to adjust this path)
    if (selectedTemplate) {
      // In a real scenario, you'd load this from your templates file
      // For now, we'll set screen counts based on template names
      if (selectedTemplate.includes('romantic')) targetScreenCount = 25;
      else if (selectedTemplate.includes('family')) targetScreenCount = 20;
      else if (selectedTemplate.includes('friend')) targetScreenCount = 15;
      else if (selectedTemplate.includes('celebration')) targetScreenCount = 30;
      else targetScreenCount = 20;
    }
  } catch (error) {
    console.error('Could not load template data:', error);
  }

  const screens = [];
  
  // 1. Opening screen
  screens.push({
    content: `Dear ${receiverName},\n\n${senderName} created something beautiful just for you.\n\nGet ready for a journey through precious memories...`,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    animation: 'fadeIn',
    duration: 6000,
    emotion: 'anticipation',
    type: 'intro'
  });

  // 2. Relationship introduction
  screens.push({
    content: `Our ${relationship} bond is something truly special.\n\nEvery moment we've shared has been a gift.`,
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    animation: 'slideInUp',
    duration: 5000,
    emotion: emotionTag || 'love',
    type: 'relationship'
  });

  // 3-4. Memory screens with user uploads
  if (memories && memories.length > 0) {
    memories.slice(0, 2).forEach((memory: any, index: number) => {
      screens.push({
        content: `Remember this beautiful moment?\n\n${memory.caption || 'A treasured memory we share...'}`,
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        animation: 'zoomIn',
        duration: 7000,
        emotion: 'nostalgia',
        type: 'memory',
        mediaContent: {
          type: memory.type === 'PHOTO' ? 'image' : memory.type === 'VIDEO' ? 'video' : 'audio',
          url: memory.url,
          caption: memory.caption,
          filename: memory.filename
        }
      });
    });
  } else {
    // Default memory screens if no uploads
    screens.push({
      content: `Every photo tells a story...\n\nEvery moment captures a feeling...\n\nEvery memory builds our bond.`,
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      animation: 'slideInLeft',
      duration: 6000,
      emotion: 'nostalgia',
      type: 'memory'
    });
    
    screens.push({
      content: `In my heart, I keep all our precious moments...\n\nLike treasures in a secret garden.`,
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      animation: 'slideInRight',
      duration: 6000,
      emotion: 'tenderness',
      type: 'memory'
    });
  }

  // 5. Voice message screen (if exists)
  if (voiceNote) {
    screens.push({
      content: `🎤 A special message from ${senderName}\n\nClose your eyes and listen to these words from the heart...`,
      background: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
      animation: 'pulse',
      duration: 10000,
      emotion: 'intimacy',
      type: 'voice',
      mediaContent: {
        type: 'audio',
        url: voiceNote,
        caption: `Voice message from ${senderName}`
      }
    });
  }

  // 6. Personal text message (if exists)
  if (textContent) {
    screens.push({
      content: `💌 A personal note:\n\n"${textContent}"\n\n- ${senderName}`,
      background: 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
      animation: 'typewriter',
      duration: 8000,
      emotion: 'heartfelt',
      type: 'text'
    });
  }

  // Generate additional screens based on relationship type
  const relationshipQuotes = {
    lover: [
      `You are my today and all of my tomorrows, ${receiverName}.`,
      `In your eyes, I found my home and my adventure.`,
      `Every love story is beautiful, but ours is my favorite.`,
      `You are the poetry my heart has been writing all along.`,
      `With you, every moment is a love story worth telling.`,
      `You are my sunshine on the cloudiest days.`,
      `In this chaos of life, you are my peaceful certainty.`,
      `Your love is the soundtrack to my soul's favorite song.`,
      `Together, we create our own infinity.`,
      `You are my favorite notification, my best surprise.`
    ],
    mom: [
      `Thank you for being my first teacher and forever friend.`,
      `Your love has been my shelter in every storm.`,
      `In your hugs, I find comfort. In your words, wisdom.`,
      `You didn't just give me life, you taught me how to live.`,
      `Your strength has been my inspiration always.`,
      `Every lesson was wrapped in unconditional love.`,
      `You are the heart of our family.`,
      `Your sacrifices became my opportunities.`,
      `In this world of temporary things, your love is constant.`,
      `Thank you for believing in me when I didn't believe in myself.`
    ],
    dad: [
      `You taught me that strength comes with kindness.`,
      `Your guidance has been my compass through life.`,
      `In your footsteps, I learned to walk with integrity.`,
      `You showed me what it means to be strong and caring.`,
      `Your quiet strength has been my loudest inspiration.`,
      `Thank you for being my hero without a cape.`,
      `Your advice echoes in my mind, your love in my heart.`,
      `You lived your lessons as examples.`,
      `In your presence, I learned unconditional support.`,
      `Your love gave me roots and wings.`
    ],
    friend: [
      `You're not just my friend, you're my chosen family.`,
      `In the story of my life, you are my favorite chapter.`,
      `Thank you for being the friend who always stays.`,
      `Your friendship is the gift that keeps giving.`,
      `With you, I can be completely myself.`,
      `You make ordinary moments extraordinary.`,
      `In this world of acquaintances, you are my true connection.`,
      `Your laughter is my favorite sound.`,
      `Thank you for being my partner in all adventures.`,
      `Friends like you make life beautiful.`
    ],
    spouse: [
      `You are my partner in all of life's adventures.`,
      `Together we've built a love that time strengthens.`,
      `You are my best friend and greatest love.`,
      `In marriage, I found my other half.`,
      `Every day with you is a new page in our story.`,
      `You make me want to be my best self.`,
      `Our love is the foundation of our dreams.`,
      `Thank you for choosing to walk through life with me.`,
      `In your love, I found my home and peace.`,
      `Together, we create a love that inspires others.`
    ]
  };

  const allQuotes = relationshipQuotes[relationship as keyof typeof relationshipQuotes] || relationshipQuotes.friend;
  
  // Get unique quotes that haven't been used for this user combination
  const quotesToUse = ContentUniquenessService.getUniqueQuotes(
    allQuotes, 
    contentSession.usedQuotes || [], 
    Math.min(targetScreenCount - screens.length - 2, 15) // Limit quotes to reasonable number
  );
  
  // Track used quotes for this session
  const usedQuotesInThisSession = quotesToUse.slice();
  
  // Add quote screens to reach target count
  const remainingScreens = targetScreenCount - screens.length - 2; // Reserve 2 for ending
  const quotesToShow = Math.min(remainingScreens, quotesToUse.length);
  
  const backgrounds = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)'
  ];

  const animations = ['fadeIn', 'slideInLeft', 'slideInRight', 'slideInUp', 'zoomIn', 'heartBeat', 'pulse'];

  for (let i = 0; i < quotesToShow; i++) {
    const quote = quotesToUse[i];
    const toneVariedQuote = ContentUniquenessService.generateToneVariations(quote, contentTone);
    
    screens.push({
      content: toneVariedQuote,
      background: backgrounds[i % backgrounds.length],
      animation: animations[i % animations.length],
      duration: 5000 + (Math.random() * 2000), // 5-7 seconds
      emotion: emotionTag || ['love', 'grateful', 'happy', 'nostalgic', 'heartfelt'][i % 5],
      type: 'quote'
    });
  }

  // Add music reference screen if song selected
  if (selectedSong) {
    screens.push({
      content: `🎵 Listen closely...\n\nThis song plays for you\nbecause it reminds me of us.\n\nEvery note, every word... it's our story.`,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      animation: 'pulse',
      duration: 8000,
      emotion: 'romantic',
      type: 'music',
      backgroundMusic: selectedSong
    });
  }

  // Final screen
  screens.push({
    content: `Thank you for this incredible journey together.\n\nYou mean everything to me.\n\nAs Always... 💕\n\n- ${senderName}`,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    animation: 'sparkle',
    duration: 10000,
    emotion: 'completion',
    type: 'final'
  });

  // Update content session with used content for uniqueness tracking
  try {
    await ContentUniquenessService.updateUsedContent(
      contentSession.sessionId,
      [...(contentSession.usedQuotes || []), ...usedQuotesInThisSession],
      contentSession.usedNotes || [],
      contentSession.usedTransitions || []
    );
  } catch (error) {
    console.error('Error updating content session:', error);
  }

  return {
    screens,
    emotion: emotionTag || 'love',
    suggestions: [`Perfect for ${relationship}`, 'Heartfelt and personalized', 'AI-enhanced with memories'],
    totalScreens: screens.length,
    backgroundMusic: selectedSong
  };
}