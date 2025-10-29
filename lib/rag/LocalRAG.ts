import * as natural from 'natural'
import * as compromise from 'compromise'
import * as sentiment from 'sentiment'

interface TrainingData {
  relationships: Record<string, any>
  emotions: Record<string, any>
  templates: Record<string, any>
  memories: Record<string, any>
  screenTemplates: Record<string, any>
}

interface AIScreen {
  type: string
  content: string
  background?: string
  animation?: string
  duration: number
  emotion?: string
  media?: string
  style?: Record<string, any>
}

interface GeneratedContent {
  screens: AIScreen[]
  emotion: string
  suggestions: string[]
  totalScreens: number
}

export class LocalRAG {
  private trainingData: TrainingData
  private tokenizer: any
  private stemmer: any
  private isInitialized = false

  constructor() {
    this.tokenizer = new natural.WordTokenizer()
    this.stemmer = natural.PorterStemmer
    this.initializeData()
  }

  private initializeData() {
    this.trainingData = {
      relationships: {
        romantic: {
          keywords: ['love', 'heart', 'soul', 'forever', 'together', 'darling', 'sweetheart'],
          emotions: ['passionate', 'tender', 'devoted', 'romantic', 'intimate'],
          templates: ['romantic_sunset', 'heart_collage', 'love_story', 'couple_journey'],
          colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DC143C']
        },
        family: {
          keywords: ['family', 'home', 'memories', 'childhood', 'parents', 'siblings', 'generations'],
          emotions: ['warm', 'nostalgic', 'grateful', 'loving', 'protective'],
          templates: ['family_tree', 'childhood_memories', 'home_sweet_home', 'family_bonds'],
          colors: ['#8B4513', '#D2691E', '#CD853F', '#DEB887', '#F4A460']
        },
        friendship: {
          keywords: ['friend', 'buddy', 'companion', 'support', 'fun', 'adventure', 'loyalty'],
          emotions: ['joyful', 'supportive', 'grateful', 'cheerful', 'adventurous'],
          templates: ['friendship_collage', 'adventure_memories', 'support_system', 'fun_times'],
          colors: ['#32CD32', '#00FF7F', '#98FB98', '#90EE90', '#00FA9A']
        }
      },
      emotions: {
        happy: {
          colors: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
          animations: ['bounce', 'fadeIn', 'slideUp', 'zoomIn', 'pulse'],
          backgrounds: ['sunny_day', 'bright_colors', 'celebration', 'joy_burst']
        },
        nostalgic: {
          colors: ['#D4A574', '#8B7355', '#F4E4BC', '#DDD6C0', '#C7B299'],
          animations: ['fadeIn', 'slideLeft', 'gentle', 'sepia_fade'],
          backgrounds: ['vintage_paper', 'old_photos', 'sepia_tone', 'memory_lane']
        },
        romantic: {
          colors: ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DC143C'],
          animations: ['heartbeat', 'fadeIn', 'gentle', 'romantic_glow'],
          backgrounds: ['romantic_sunset', 'heart_pattern', 'rose_petals', 'candlelight']
        },
        grateful: {
          colors: ['#DAA520', '#B8860B', '#CD853F', '#D2691E', '#F4A460'],
          animations: ['warm_glow', 'fadeIn', 'gentle_rise'],
          backgrounds: ['warm_light', 'golden_hour', 'gratitude_glow']
        }
      },
      templates: {},
      memories: {},
      screenTemplates: {
        opening: [
          'Dear {receiverName}, this is for you...',
          'A special message for {receiverName}',
          '{receiverName}, you mean the world to me',
          'For someone very special: {receiverName}'
        ],
        emotional: {
          romantic: [
            'You make my heart skip a beat',
            'Every moment with you is a treasure',
            'Our love story is my favorite',
            'You are my everything',
            'In your eyes, I found my home',
            'You complete me in every way'
          ],
          family: [
            'Family is where love never ends',
            'These memories warm my heart',
            'Grateful for every moment together',
            'You mean the world to me',
            'Home is wherever you are',
            'Our bond grows stronger each day'
          ],
          friendship: [
            'Friends like you are rare gems',
            'Thank you for being amazing',
            'Our friendship is priceless',
            'You bring joy to my life',
            'Through thick and thin, you\'re there',
            'Laughter is better when shared with you'
          ]
        },
        closing: [
          'With all my love, {senderName} 💝',
          'Forever yours, {senderName}',
          'Thank you for being you. Love, {senderName}',
          'Until we meet again... {senderName}'
        ]
      }
    }
    this.isInitialized = true
  }

  async generateScreens(messageData: {
    senderName: string
    receiverName: string
    relationship: string
    memories: any[]
    emotionTag?: string
    textContent?: string
  }): Promise<AIScreen[]> {
    const screens: AIScreen[] = []
    const relationship = messageData.relationship.toLowerCase()
    const relationshipData = this.trainingData.relationships[relationship] || this.trainingData.relationships.romantic
    const emotion = messageData.emotionTag || await this.analyzeEmotion(messageData.textContent || '')
    const emotionData = this.trainingData.emotions[emotion] || this.trainingData.emotions.happy

    // Generate 150 screens total
    screens.push(...this.generateOpeningScreens(messageData, relationshipData, emotionData))
    screens.push(...this.generateMemoryScreens(messageData, relationshipData, emotionData))
    screens.push(...this.generateEmotionalJourneyScreens(messageData, relationshipData, emotionData))
    
    if (messageData.textContent) {
      screens.push(...this.generateTextBasedScreens(messageData, relationshipData, emotionData))
    }
    
    screens.push(...this.generateClosingScreens(messageData, relationshipData, emotionData))

    return this.normalizeScreenCount(screens, 150)
  }

  private generateOpeningScreens(messageData: any, relationshipData: any, emotionData: any): AIScreen[] {
    const screens: AIScreen[] = []
    
    screens.push({
      type: 'opening',
      content: `Dear ${messageData.receiverName}, this is for you...`,
      background: emotionData.backgrounds[0],
      animation: 'fadeIn',
      duration: 4000,
      emotion: messageData.emotionTag
    })

    screens.push({
      type: 'intro',
      content: `${messageData.senderName} has created something special for you...`,
      background: emotionData.backgrounds[1] || emotionData.backgrounds[0],
      animation: 'slideUp',
      duration: 4000
    })

    return screens
  }

  private generateMemoryScreens(messageData: any, relationshipData: any, emotionData: any): AIScreen[] {
    const screens: AIScreen[] = []
    const memories = messageData.memories || []
    
    memories.forEach((memory, index) => {
      screens.push({
        type: 'memory',
        content: memory.caption || memory.content || 'A precious memory',
        media: memory.filename,
        background: this.selectBackground(relationshipData, emotionData),
        animation: this.selectAnimation(index),
        duration: 6000
      })
    })

    return screens
  }

  private generateEmotionalJourneyScreens(messageData: any, relationshipData: any, emotionData: any): AIScreen[] {
    const screens: AIScreen[] = []
    const relationship = messageData.relationship.toLowerCase()
    const emotionalMessages = this.trainingData.screenTemplates.emotional[relationship] || 
                             this.trainingData.screenTemplates.emotional.romantic
    
    // Generate 100+ emotional screens
    for (let i = 0; i < 100; i++) {
      const messageIndex = i % emotionalMessages.length
      const message = emotionalMessages[messageIndex]
      
      screens.push({
        type: 'emotional',
        content: message,
        background: this.selectBackground(relationshipData, emotionData),
        animation: this.selectAnimation(i),
        duration: 4000,
        emotion: messageData.emotionTag
      })
    }

    return screens
  }

  private generateTextBasedScreens(messageData: any, relationshipData: any, emotionData: any): AIScreen[] {
    const screens: AIScreen[] = []
    const text = messageData.textContent || ''
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
    
    sentences.forEach((sentence, index) => {
      if (sentence.trim()) {
        screens.push({
          type: 'personal_message',
          content: sentence.trim(),
          background: this.selectBackground(relationshipData, emotionData),
          animation: this.selectAnimation(index),
          duration: Math.max(3000, sentence.length * 100),
          emotion: messageData.emotionTag
        })
      }
    })

    return screens
  }

  private generateClosingScreens(messageData: any, relationshipData: any, emotionData: any): AIScreen[] {
    const screens: AIScreen[] = []
    
    screens.push({
      type: 'closing',
      content: `With all my love, ${messageData.senderName} 💝`,
      background: emotionData.backgrounds[0],
      animation: 'heartbeat',
      duration: 5000
    })

    return screens
  }

  private normalizeScreenCount(screens: AIScreen[], targetCount: number): AIScreen[] {
    if (screens.length >= targetCount) {
      return screens.slice(0, targetCount)
    }
    
    // Add filler screens to reach target count
    const fillerMessages = [
      'Every moment is a gift',
      'Love grows in the little moments',
      'Memories are the treasures of the heart',
      'You bring light to my world',
      'Together we create magic',
      'In your smile, I find my happiness'
    ]
    
    while (screens.length < targetCount) {
      const index = screens.length % fillerMessages.length
      screens.push({
        type: 'filler',
        content: fillerMessages[index],
        background: 'gentle_gradient',
        animation: 'fadeIn',
        duration: 3500
      })
    }
    
    return screens
  }

  private selectBackground(relationshipData: any, emotionData: any): string {
    const backgrounds = [...(emotionData.backgrounds || []), ...(relationshipData.colors || [])]
    return backgrounds[Math.floor(Math.random() * backgrounds.length)] || 'default_gradient'
  }

  private selectAnimation(index: number): string {
    const animations = ['fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'zoomIn', 'gentle', 'bounce', 'pulse']
    return animations[index % animations.length]
  }

  async analyzeEmotion(text: string): Promise<string> {
    if (!text || text.trim().length === 0) return 'happy'
    
    const tokens = this.tokenizer.tokenize(text.toLowerCase())
    const emotionScores = {
      happy: 0,
      romantic: 0,
      nostalgic: 0,
      grateful: 0
    }

    const emotionKeywords = {
      happy: ['happy', 'joy', 'smile', 'laugh', 'fun', 'excited', 'amazing', 'wonderful'],
      romantic: ['love', 'heart', 'kiss', 'romance', 'passion', 'soul', 'forever', 'darling'],
      nostalgic: ['remember', 'past', 'childhood', 'old', 'memory', 'time', 'used', 'back'],
      grateful: ['thank', 'grateful', 'appreciate', 'blessed', 'lucky', 'thankful']
    }

    tokens.forEach(word => {
      Object.entries(emotionKeywords).forEach(([emotion, keywords]) => {
        if (keywords.includes(word)) {
          emotionScores[emotion]++
        }
      })
    })

    const dominantEmotion = Object.entries(emotionScores)
      .reduce((a, b) => emotionScores[a[0]] > emotionScores[b[0]] ? a : b)[0]

    return dominantEmotion || 'happy'
  }

  async generatePersonalizedContent(messageData: any): Promise<GeneratedContent> {
    const emotion = await this.analyzeEmotion(
      `${messageData.textContent || ''} ${messageData.memories?.map(m => m.caption || '').join(' ') || ''}`
    )
    
    const screens = await this.generateScreens({ ...messageData, emotionTag: emotion })
    const suggestions = this.generateSuggestions(messageData.relationship, emotion)
    
    return {
      screens,
      emotion,
      suggestions,
      totalScreens: screens.length
    }
  }

  private generateSuggestions(relationship: string, emotion: string): string[] {
    const suggestions = {
      romantic: {
        happy: ['Add a photo from your first date', 'Include your favorite song together'],
        nostalgic: ['Share a memory from when you first met', 'Add photos from special trips'],
        grateful: ['Express what you love most about them', 'Share how they changed your life']
      },
      family: {
        happy: ['Include family celebration photos', 'Add childhood memories'],
        nostalgic: ['Share old family traditions', 'Include photos from family gatherings'],
        grateful: ['Express appreciation for their support', 'Share lessons they taught you']
      },
      friendship: {
        happy: ['Add photos from fun adventures', 'Include inside jokes or memories'],
        nostalgic: ['Share how your friendship began', 'Include photos from school days'],
        grateful: ['Thank them for being there', 'Share how they helped you grow']
      }
    }

    return suggestions[relationship]?.[emotion] || suggestions.romantic.happy
  }
}

export const localRAG = new LocalRAG()