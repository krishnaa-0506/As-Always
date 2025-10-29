'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { safeRender } from '@/lib/utils/contentUtils'

interface SlideContent {
  type: 'title' | 'quote' | 'photo' | 'voice' | 'message' | 'closing'
  content: string
  subtitle?: string
  note?: string
  quote?: string
  transition?: string
}

interface MemoryPreviewProps {
  messageData: any
  onComplete: (data: any) => void
}

interface AIGeneratedContent {
  quotes: string[]
  notes: string[]
  transitions: string[]
}

export default function MemoryPreview({ messageData, onComplete }: MemoryPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [aiContent, setAiContent] = useState<AIGeneratedContent>({ quotes: [], notes: [], transitions: [] })
  const [loading, setLoading] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const voiceAudioRef = useRef<HTMLAudioElement>(null)

  // Generate AI content based on user data
  useEffect(() => {
    generateAIContent()
    loadSelectedTemplate()
  }, [messageData])

  const generateAIContent = async () => {
    setLoading(true)
    try {
      // Generate AI quotes and notes based on the collected data
      const response = await fetch('/api/ai-suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          relationship: messageData.relationship,
          receiverGender: messageData.receiverGender,
          emotionTag: messageData.emotionTag,
          occasion: messageData.occasion,
          personalityTraits: messageData.personalityTraits,
          contentTone: messageData.contentTone,
          preferredStyle: messageData.preferredStyle,
          specialMemories: messageData.specialMemories,
          sharedInterests: messageData.sharedInterests,
          receiverName: messageData.receiverName,
          senderName: messageData.senderName,
          textContent: messageData.textContent
        })
      })

      if (response.ok) {
        const data = await response.json()
        setAiContent(data.content)
      } else {
        // Fallback content
        generateFallbackContent()
      }
    } catch (error) {
      console.error('Failed to generate AI content:', error)
      generateFallbackContent()
    } finally {
      setLoading(false)
    }
  }

  const generateFallbackContent = () => {
    const { relationship, receiverName, emotionTag, contentTone } = messageData
    
    const quotes = [
      `"Every moment with you is a treasure, ${receiverName}."`,
      `"Our ${relationship} bond means everything to me."`,
      `"In this journey of life, having you makes all the difference."`,
      `"Your presence brings light to my darkest days."`,
      `"Thank you for being such an amazing ${relationship}."`,
      `"The memories we've created are my most precious possessions."`,
      `"Your kindness and love inspire me every day."`,
      `"I'm grateful for every laugh, every conversation, every moment."`,
      `"You make ordinary moments feel extraordinary."`,
      `"Our connection is one of life's greatest gifts."`
    ]

    const notes = [
      `A special message created with love for ${receiverName}`,
      `Celebrating the beautiful bond of ${relationship}`,
      `Every photo tells a story of our journey together`,
      `These memories capture the essence of our relationship`,
      `Your voice brings warmth to every moment`,
      `This collection represents years of shared experiences`,
      `Thank you for being part of my story`,
      `Each memory is a testament to our connection`,
      `These moments will be treasured forever`,
      `A heartfelt tribute to our special relationship`
    ]

    const transitions = [
      "Let's take a journey through our memories...",
      "Here's a moment that captures who you are...",
      "This memory always makes me smile...",
      "Your voice carries so much warmth...",
      "Looking back on all we've shared...",
      "Every picture tells our story...",
      "These are the moments I treasure most...",
      "Thank you for being you...",
      "Our journey continues...",
      "Until we meet again..."
    ]

    setAiContent({ quotes, notes, transitions })
  }

  const loadSelectedTemplate = async () => {
    try {
      const response = await fetch('/api/templates')
      if (response.ok) {
        const data = await response.json()
        const template = data.templates.find((t: any) => t.id === messageData.selectedTemplate)
        setSelectedTemplate(template)
      }
    } catch (error) {
      console.error('Failed to load template:', error)
    }
  }

  // Create slides based on content
  const createSlides = (): SlideContent[] => {
    const slides: SlideContent[] = []

    // Title slide
    slides.push({
      type: 'title',
      content: aiContent.quotes[0] || `A Special Message for ${messageData.receiverName}`,
      subtitle: aiContent.notes[0] || `From ${messageData.senderName} with love`
    })

    // Quote slides
    aiContent.quotes.slice(1, 4).forEach((quote, index) => {
      slides.push({
        type: 'quote',
        content: quote,
        note: aiContent.notes[index + 1] || ''
      })
    })

    // Photo slides
    if (messageData.memories && messageData.memories.length > 0) {
      messageData.memories.slice(0, 3).forEach((memory: File, index: number) => {
        slides.push({
          type: 'photo',
          content: URL.createObjectURL(memory),
          quote: aiContent.quotes[index + 4] || "A moment captured in time",
          transition: aiContent.transitions[index] || "This memory holds a special place..."
        })
      })
    }

    // Voice note slide
    if (messageData.voiceNote) {
      slides.push({
        type: 'voice',
        content: URL.createObjectURL(messageData.voiceNote),
        quote: "Your voice, your heart, your message",
        note: "Listen to a personal message just for you"
      })
    }

    // Personal message slide
    if (messageData.textContent) {
      slides.push({
        type: 'message',
        content: messageData.textContent,
        note: `A personal note from ${messageData.senderName}`
      })
    }

    // Final quote slides
    aiContent.quotes.slice(-3).forEach((quote, index) => {
      slides.push({
        type: 'quote',
        content: quote,
        note: aiContent.notes[aiContent.notes.length - 3 + index] || ''
      })
    })

    // Closing slide
    slides.push({
      type: 'closing',
      content: `Thank you for being amazing, ${messageData.receiverName}`,
      subtitle: `With all my love, ${messageData.senderName}`
    })

    return slides
  }

  const slides = createSlides()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
    }
  }

  const playVoiceNote = () => {
    if (voiceAudioRef.current && slides[currentSlide]?.type === 'voice') {
      voiceAudioRef.current.play()
    }
  }

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        nextSlide()
      }, 4000) // 4 seconds per slide
      return () => clearInterval(timer)
    }
  }, [isPlaying, currentSlide])

  // Get template styling
  const getTemplateStyle = () => {
    if (!selectedTemplate) return {}
    
    const slide = selectedTemplate.slides?.[0]
    if (!slide) return {}

    return {
      background: slide.colorPalette?.primary || '#1a1a1a',
      color: slide.colorPalette?.text || '#ffffff',
      fontFamily: slide.name?.includes('Classic') ? 'serif' : 'sans-serif'
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="glass-panel p-8 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-4xl mb-4">🤖</div>
        <h2 className="text-2xl font-cinematic text-white mb-4">
          AI is crafting your personalized experience...
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-white/70 mt-4">
          Generating quotes, notes, and personalizing content based on your relationship details...
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Preview Header */}
      <div className="text-center mb-8">
        <motion.div 
          className="text-4xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👀
        </motion.div>
        <h2 className="text-3xl font-cinematic text-white mb-2">Preview Your Memory Experience</h2>
        <p className="text-white/70">
          See how your personalized content will appear with AI-generated quotes and notes
        </p>
      </div>

      {/* Slide Counter & Controls */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-white/60">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={togglePlayback}
            className={`px-4 py-2 rounded-lg transition-all ${
              isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            } text-white`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? '⏸️ Pause' : '▶️ Play Auto'}
          </motion.button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div 
        className="relative w-full h-96 rounded-2xl overflow-hidden border-2 border-white/20 mb-6"
        style={getTemplateStyle()}
      >
        {/* Background Music */}
        {messageData.selectedSong && (
          <audio
            ref={audioRef}
            loop
            src={`/audio/${messageData.selectedSong}.mp3`}
            onLoadedData={() => {
              if (audioRef.current) {
                audioRef.current.volume = 0.3 // Lower volume for background
              }
            }}
          />
        )}

        {/* Voice Audio */}
        {slides[currentSlide]?.type === 'voice' && (
          <audio
            ref={voiceAudioRef}
            src={slides[currentSlide].content}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            {/* Render different slide types */}
            {slides[currentSlide]?.type === 'title' && (
              <div className="text-center">
                <motion.h1 
                  className="text-4xl md:text-6xl font-cinematic mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slides[currentSlide].content}
                </motion.h1>
                <motion.p 
                  className="text-xl opacity-80"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            )}

            {slides[currentSlide]?.type === 'quote' && (
              <div className="text-center max-w-3xl">
                <motion.blockquote 
                  className="text-2xl md:text-4xl font-light leading-relaxed mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  {safeRender(slides[currentSlide].content)}
                </motion.blockquote>
                {slides[currentSlide].note && (
                  <motion.p 
                    className="text-lg opacity-70"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {safeRender(slides[currentSlide].note)}
                  </motion.p>
                )}
              </div>
            )}

            {slides[currentSlide]?.type === 'photo' && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <motion.div 
                  className="relative w-80 h-60 mb-4 rounded-xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <Image
                    src={slides[currentSlide].content}
                    alt="Memory"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-xl"
                  />
                </motion.div>
                <motion.p 
                  className="text-xl text-center mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].quote || '')}
                </motion.p>
                <motion.p 
                  className="text-sm opacity-70 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].transition || '')}
                </motion.p>
              </div>
            )}

            {slides[currentSlide]?.type === 'voice' && (
              <div className="text-center">
                <motion.div 
                  className="text-8xl mb-6"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎤
                </motion.div>
                <motion.h2 
                  className="text-3xl mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].quote || '')}
                </motion.h2>
                <motion.p 
                  className="text-lg opacity-70 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].note || '')}
                </motion.p>
                <motion.button
                  onClick={playVoiceNote}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  🔊 Play Voice Message
                </motion.button>
              </div>
            )}

            {slides[currentSlide]?.type === 'message' && (
              <div className="text-center max-w-4xl">
                <motion.div 
                  className="text-6xl mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  💌
                </motion.div>
                <motion.div 
                  className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <p className="text-xl leading-relaxed mb-4">
                    {safeRender(slides[currentSlide].content)}
                  </p>
                  <p className="text-sm opacity-70">
                    {safeRender(slides[currentSlide].note || '')}
                  </p>
                </motion.div>
              </div>
            )}

            {slides[currentSlide]?.type === 'closing' && (
              <div className="text-center">
                <motion.h1 
                  className="text-4xl md:text-5xl font-cinematic mb-6"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].content)}
                </motion.h1>
                <motion.p 
                  className="text-xl opacity-80 mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {safeRender(slides[currentSlide].subtitle || '')}
                </motion.p>
                <motion.div 
                  className="text-6xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all"
        >
          →
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-pink-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* AI Content Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2">🤖 AI Generated Quotes</h3>
          <p className="text-white/70 text-sm">{aiContent.quotes.length} personalized quotes</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2">📝 Smart Notes</h3>
          <p className="text-white/70 text-sm">{aiContent.notes.length} contextual notes</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-white font-semibold mb-2">🎨 Template Applied</h3>
          <p className="text-white/70 text-sm">{selectedTemplate?.name || 'Default template'}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <motion.button
          onClick={() => window.history.back()}
          className="btn-secondary px-6 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Edit
        </motion.button>

        <motion.button
          onClick={() => onComplete({ previewApproved: true })}
          className="btn-primary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ✨ Looks Perfect! Generate Final Experience
        </motion.button>
      </div>
    </motion.div>
  )
}