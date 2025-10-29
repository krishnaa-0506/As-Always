import { NextRequest, NextResponse } from 'next/server'
import { productionRAG } from '@/lib/rag/ProductionRAG'

interface AIRequest {
  // Original fields
  message?: string
  relationship: string
  receiverGender: string
  receiverAge?: string
  
  // Extended fields for content generation
  emotionTag?: string
  occasion?: string
  personalityTraits?: string[]
  contentTone?: string
  preferredStyle?: string
  specialMemories?: string
  sharedInterests?: string
  receiverName?: string
  senderName?: string
  textContent?: string
}

export async function POST(request: NextRequest) {
  try {
    const data: AIRequest = await request.json()
    
    // Check if this is a content generation request (has receiverName/senderName)
    if (data.receiverName && data.senderName) {
      const content = generatePersonalizedContent(data)
      return NextResponse.json({
        success: true,
        content
      })
    }
    
    // Original template suggestion logic
    const { message, relationship, receiverGender, receiverAge } = data
    const emotion = await productionRAG.analyzeEmotion(message || '')
    const suggestedTemplate = getSuggestedTemplate(relationship, emotion, receiverAge)
    const suggestedTheme = getSuggestedTheme(relationship, emotion, receiverGender)
    
    return NextResponse.json({
      success: true,
      suggestions: {
        template: suggestedTemplate,
        theme: suggestedTheme,
        emotion,
        reasoning: `Based on your ${relationship} relationship and ${emotion} tone, we recommend these options.`
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to generate suggestions'
    }, { status: 500 })
  }
}

function getSuggestedTemplate(relationship: string, emotion: string, age?: string) {
  const templateMap: Record<string, Record<string, string>> = {
    'romantic': { 'happy': 'romantic-sunset', 'nostalgic': 'anniversary-love', 'grateful': 'valentines-day' },
    'family': { 'happy': 'family-memories', 'nostalgic': 'childhood-memories', 'grateful': age === 'senior' ? 'retirement-celebration' : 'mothers-day' },
    'friendship': { 'happy': 'friendship-fun', 'nostalgic': 'travel-adventures', 'grateful': 'thank-you-note' }
  }
  return templateMap[relationship]?.[emotion] || 'thank-you-note'
}

function getSuggestedTheme(relationship: string, emotion: string, gender?: string) {
  const themeMap: Record<string, Record<string, string>> = {
    'romantic': { 'happy': 'romantic-sunset', 'nostalgic': 'golden-memories', 'grateful': 'romantic-sunset' },
    'family': { 'happy': 'golden-memories', 'nostalgic': 'golden-memories', 'grateful': 'ocean-serenity' },
    'friendship': { 'happy': 'ocean-serenity', 'nostalgic': 'golden-memories', 'grateful': 'ocean-serenity' }
  }
  return themeMap[relationship]?.[emotion] || 'ocean-serenity'
}

function generatePersonalizedContent(data: AIRequest) {
  const { relationship, receiverName, senderName, emotionTag, occasion, contentTone, specialMemories, personalityTraits } = data
  
  // Base content templates
  const relationshipTemplates = {
    lover: {
      quotes: [
        `"Every day with you feels like a beautiful dream, ${receiverName}."`,
        `"You are the poetry my heart has been writing all along."`,
        `"In your eyes, I found my home and my adventure."`,
        `"Your love is the soundtrack to my soul's favorite song."`,
        `"With you, every moment is a love story worth telling."`,
        `"You are my today and all of my tomorrows, ${receiverName}."`,
        `"In this chaos of life, you are my peaceful certainty."`,
        `"Your smile is the reason I believe in magic."`,
        `"Together, we create our own infinity."`,
        `"You are my favorite notification, my best surprise, my everything."`
      ],
      notes: [
        `A love letter written with memories for ${receiverName}`,
        `Celebrating the beautiful romance between ${senderName} and ${receiverName}`,
        `Every photo captures a moment of your love story`,
        `These memories are proof that soulmates exist`,
        `Your love creates magic in ordinary moments`,
        `A collection of all the reasons why you're perfect together`,
        `Thank you for being my person, my love, my everything`,
        `Each memory is a testament to your incredible bond`,
        `These moments will be treasured for a lifetime`,
        `A heartfelt reminder of your beautiful journey together`
      ]
    },
    mom: {
      quotes: [
        `"Thank you for being my first teacher, my biggest supporter, and my forever friend, Mom."`,
        `"Your love has been my shelter in every storm of life."`,
        `"In your hugs, I find comfort. In your words, I find wisdom."`,
        `"You didn't just give me life, you taught me how to live it beautifully."`,
        `"Your strength has been my inspiration, your love my foundation."`,
        `"Every lesson you taught me was wrapped in unconditional love."`,
        `"You are the heart of our family and the soul of my courage."`,
        `"Your sacrifices became my opportunities, your dreams my possibilities."`,
        `"In this world of temporary things, your love is my constant."`,
        `"Thank you for believing in me even when I didn't believe in myself."`
      ],
      notes: [
        `A heartfelt tribute to the most amazing mom, ${receiverName}`,
        `Celebrating the unconditional love of motherhood`,
        `Every memory shows the depth of a mother's love`,
        `These moments capture the essence of family bonds`,
        `Your love has shaped who I am today`,
        `A collection of gratitude for all you've given me`,
        `Thank you for being my guiding light and safe harbor`,
        `Each memory is a reminder of your endless love`,
        `These moments represent a lifetime of care and devotion`,
        `A loving reminder of the beautiful mother you are`
      ]
    },
    friend: {
      quotes: [
        `"${receiverName}, you're not just my friend, you're my chosen family."`,
        `"In the story of my life, you are my favorite chapter."`,
        `"Thank you for being the friend who stays when everyone else leaves."`,
        `"Your friendship is the gift that keeps giving joy to my life."`,
        `"With you, I can be completely myself and feel completely accepted."`,
        `"You're the friend who makes ordinary moments extraordinary."`,
        `"In this world of acquaintances, you are my true connection."`,
        `"Your laughter is my favorite sound, your happiness my greatest wish."`,
        `"Thank you for being my partner in all adventures, big and small."`,
        `"Friends like you are rare treasures that make life beautiful."`
      ],
      notes: [
        `A celebration of an incredible friendship with ${receiverName}`,
        `Honoring the special bond between best friends`,
        `Every memory shows the joy of true friendship`,
        `These moments capture years of laughter and support`,
        `Your friendship has been one of life's greatest blessings`,
        `A collection of all our amazing adventures together`,
        `Thank you for being the friend everyone wishes they had`,
        `Each memory represents the strength of our connection`,
        `These moments will be cherished for years to come`,
        `A reminder of the beautiful friendship we share`
      ]
    },
    spouse: {
      quotes: [
        `"${receiverName}, you are my partner in all of life's adventures."`,
        `"Together we have built a love that time only makes stronger."`,
        `"You are my best friend, my greatest love, my chosen family."`,
        `"In marriage, I found not just a partner, but my other half."`,
        `"Every day with you is a new page in our love story."`,
        `"You make me want to be the best version of myself."`,
        `"Our love is the foundation upon which we build our dreams."`,
        `"Thank you for choosing to walk through life hand in hand with me."`,
        `"In your love, I found my home, my peace, my everything."`,
        `"Together, we create a love that inspires others to believe."`
      ],
      notes: [
        `A love letter to my amazing spouse, ${receiverName}`,
        `Celebrating the beautiful bond of marriage`,
        `Every memory represents our journey as partners`,
        `These moments capture the depth of married love`,
        `Your love continues to be my greatest blessing`,
        `A collection of memories from our life together`,
        `Thank you for being my partner in everything`,
        `Each memory shows the strength of our commitment`,
        `These moments represent our shared dreams and hopes`,
        `A reminder of the beautiful marriage we've built together`
      ]
    }
  }

  // Get base content for relationship
  const baseContent = relationshipTemplates[relationship as keyof typeof relationshipTemplates] || relationshipTemplates.friend

  // Customize based on emotion tag and tone
  let quotes = [...baseContent.quotes]
  let notes = [...baseContent.notes]

  // Add occasion-specific content
  if (occasion === 'birthday') {
    quotes.unshift(`"Happy Birthday, ${receiverName}! May this year bring you endless joy and beautiful memories."`)
    notes.unshift(`Celebrating your special day with love and best wishes`)
  } else if (occasion === 'anniversary') {
    quotes.unshift(`"Celebrating another year of our beautiful journey together, ${receiverName}."`)
    notes.unshift(`Commemorating this special milestone in your relationship`)
  } else if (occasion === 'valentines') {
    quotes.unshift(`"On this day of love, I want you to know how much you mean to me, ${receiverName}."`)
    notes.unshift(`A Valentine's message filled with love and appreciation`)
  }

  // Add personality-based customizations
  if (personalityTraits?.includes('Funny')) {
    quotes.push(`"Life with you is like a comedy show where every episode makes me laugh until my cheeks hurt."`)
  }
  if (personalityTraits?.includes('Wise')) {
    quotes.push(`"Your wisdom lights up even the darkest moments of confusion in my life."`)
  }
  if (personalityTraits?.includes('Creative')) {
    quotes.push(`"You paint the world in colors I never knew existed."`)
  }

  // Add content tone adjustments
  if (contentTone === 'playful') {
    quotes.push(`"You're like my favorite song on repeat - I never get tired of you!"`)
  } else if (contentTone === 'poetic') {
    quotes.push(`"In the symphony of my life, you are the most beautiful melody."`)
  } else if (contentTone === 'humorous') {
    quotes.push(`"Thanks for being the reason I smile at my phone like an idiot sometimes."`)
  }

  // Include special memories if provided
  if (specialMemories) {
    quotes.push(`"${specialMemories} - This memory will forever hold a special place in my heart."`)
    notes.push(`Remembering the special moment: ${specialMemories.substring(0, 50)}...`)
  }

  // Create transition phrases
  const transitions = [
    "Let's take a journey through our precious memories...",
    "Here's a moment that perfectly captures who you are...",
    "This memory always brings a smile to my face...",
    "Your voice and presence bring such warmth to every moment...",
    "Looking back on all the beautiful times we've shared...",
    "Every picture tells a story of our connection...",
    "These are the moments I treasure most deeply...",
    "Thank you for all the joy you bring into my life...",
    "Our journey together continues to be amazing...",
    "Until we create even more beautiful memories together..."
  ]

  return {
    quotes: quotes.slice(0, 12), // Limit to 12 quotes
    notes: notes.slice(0, 10),   // Limit to 10 notes
    transitions: transitions
  }
}