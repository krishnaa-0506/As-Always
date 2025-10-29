'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { safeRender } from '@/lib/utils/contentUtils'

interface MemoryScreen {
  id: number
  type: 'intro' | 'photo' | 'video' | 'audio' | 'text' | 'voice' | 'memory' | 'final'
  content: string
  background: string
  animation: string
  duration: number
  emotion: string
  mediaContent?: {
    type: string
    url: string
    filename?: string
    caption?: string
  }
  templateStyle?: any
  themeColors?: any
}

export default function MemoryExperience({ params }: { params: { code: string } }) {
  const router = useRouter()
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [messageData, setMessageData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [backgroundMusic, setBackgroundMusic] = useState<HTMLAudioElement | null>(null)
  const [memoryScreens, setMemoryScreens] = useState<MemoryScreen[]>([])

  useEffect(() => {
    // Fetch real message data from API
    const fetchMessageData = async () => {
      try {
        const response = await fetch(`/api/messages/${params.code}`)
        const result = await response.json()
        
        if (result.success && result.message) {
          setMessageData(result.message)
          
          // Initialize background music if available
          if (result.message.selectedSong) {
            const audio = new Audio(`/audio/${result.message.selectedSong}.mp3`)
            audio.loop = true
            audio.volume = 0.3
            setBackgroundMusic(audio)
          }
          
          // Use real screens from database if available
          if (result.message.screens && result.message.screens.length > 0) {
            const realScreens = result.message.screens.map((screen: any, index: number) => ({
              id: index + 1,
              type: screen.type || (index === 0 ? 'intro' : index === result.message.screens.length - 1 ? 'final' : 'memory'),
              content: screen.content,
              background: screen.background,
              animation: screen.animation,
              duration: screen.duration,
              emotion: screen.emotion,
              mediaContent: screen.mediaContent
            }))
            setMemoryScreens(realScreens)
          } else {
            // Fallback screens if no screens in database
            setMemoryScreens([
              {
                id: 1,
                type: 'intro',
                content: `Hey ${result.message.receiverName}! ❤️\n\n${result.message.senderName} created this just for you.\n\nGet ready for a journey through beautiful memories...`,
                background: 'from-pink-500 to-purple-600',
                animation: 'fadeIn',
                duration: 6000,
                emotion: 'anticipation'
              },
              {
                id: 2,
                type: 'final',
                content: `Thank you for being amazing.\n\nWith all my love,\n${result.message.senderName} 💕`,
                background: 'from-purple-600 to-pink-600',
                animation: 'sparkle',
                duration: 8000,
                emotion: 'completion'
              }
            ])
          }
        } else {
          router.push('/receiver?error=invalid-code')
          return
        }
      } catch (error) {
        console.error('Failed to fetch message:', error)
        router.push('/receiver?error=server-error')
        return
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchMessageData()
  }, [params.code, router])

  useEffect(() => {
    if (!isPlaying || isLoading) return

    const timer = setTimeout(() => {
      if (currentScreen < memoryScreens.length - 1) {
        setCurrentScreen(prev => prev + 1)
      } else {
        setIsPlaying(false)
        setShowControls(true)
      }
    }, memoryScreens[currentScreen]?.duration || 4000)

    return () => clearTimeout(timer)
  }, [currentScreen, isPlaying, isLoading, memoryScreens])

  const startExperience = () => {
    setIsPlaying(true)
    setCurrentScreen(0)
    // Start background music
    if (backgroundMusic) {
      backgroundMusic.play().catch(console.error)
    }
  }

  const pauseExperience = () => {
    setIsPlaying(!isPlaying)
    // Pause/resume background music
    if (backgroundMusic) {
      if (isPlaying) {
        backgroundMusic.pause()
      } else {
        backgroundMusic.play().catch(console.error)
      }
    }
  }

  const nextScreen = () => {
    if (currentScreen < memoryScreens.length - 1) {
      setCurrentScreen(prev => prev + 1)
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(prev => prev - 1)
    }
  }

  const restartExperience = () => {
    setCurrentScreen(0)
    setIsPlaying(true)
    setShowControls(false)
    // Restart background music
    if (backgroundMusic) {
      backgroundMusic.currentTime = 0
      backgroundMusic.play().catch(console.error)
    }
  }

  // Cleanup background music on unmount
  useEffect(() => {
    return () => {
      if (backgroundMusic) {
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0
      }
    }
  }, [backgroundMusic])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="text-6xl mb-6"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💝
          </motion.div>
          <h2 className="text-2xl text-white font-cinematic mb-4">
            Preparing Your Memory Experience
          </h2>
          <div className="loading-spinner mx-auto"></div>
          <p className="text-white/60 mt-4">Loading {memoryScreens.length || 'personalized'} AI-generated screens...</p>
        </motion.div>
      </div>
    )
  }

  const currentScreenData = memoryScreens[currentScreen]

  if (!isPlaying && currentScreen === 0 && !showControls) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900" />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="text-8xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💌
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-cinematic text-white mb-6">
              Your Memory Journey Awaits
            </h1>
            
            <p className="text-xl text-white/80 mb-4">
              {messageData?.senderName} created something beautiful for you
            </p>
            
            <p className="text-lg text-white/60 mb-8">
              {memoryScreens.length} AI-powered personalized screens filled with love and memories
            </p>

            <div className="space-y-4 mb-8">
              <div className="glass-panel p-4 text-left">
                <div className="text-white/70 text-sm mb-1">Message Code:</div>
                <div className="text-white font-mono text-lg">{params.code}</div>
              </div>
              <div className="glass-panel p-4 text-left">
                <div className="text-white/70 text-sm mb-1">From:</div>
                <div className="text-white">{messageData?.senderName}</div>
              </div>
            </div>

            <motion.button
              onClick={startExperience}
              className="btn-primary text-xl px-12 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                ▶️ Begin Experience
              </span>
            </motion.button>

            <p className="text-white/50 text-sm mt-4">
              Best experienced in a quiet, comfortable space 🎧
            </p>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${currentScreenData.background}`}
        key={`bg-${currentScreen}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Screen Content */}
            <motion.div
              className="mb-8"
              animate={currentScreenData.animation === 'heartBeat' ? {
                scale: [1, 1.05, 1]
              } : currentScreenData.animation === 'pulse' ? {
                opacity: [0.8, 1, 0.8]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Media Content */}
              {currentScreenData.mediaContent && (
                <div className="mb-6">
                  {currentScreenData.mediaContent.type === 'image' && (
                    <motion.img
                      src={currentScreenData.mediaContent.url}
                      alt={currentScreenData.mediaContent.caption || 'Memory'}
                      className="max-w-md mx-auto rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  {currentScreenData.mediaContent.type === 'video' && (
                    <motion.video
                      src={currentScreenData.mediaContent.url}
                      controls
                      autoPlay
                      muted
                      className="max-w-md mx-auto rounded-2xl shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  {currentScreenData.mediaContent.type === 'audio' && (
                    <motion.div
                      className="bg-white/10 rounded-2xl p-6 max-w-md mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="text-4xl mb-4">🎵</div>
                      <audio
                        src={currentScreenData.mediaContent.url}
                        controls
                        autoPlay
                        className="w-full"
                      />
                    </motion.div>
                  )}
                </div>
              )}
              
              {/* Text Content */}
              <div className="text-white text-2xl md:text-4xl font-soft leading-relaxed whitespace-pre-line">
                {safeRender(currentScreenData.content)}
              </div>
            </motion.div>

            {/* Progress Indicator */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <span className="text-white/80 text-sm">
                  {currentScreen + 1} of {memoryScreens.length}
                </span>
              </div>
            </div>

            {/* Auto-progress bar */}
            {isPlaying && (
              <motion.div
                className="w-full max-w-md mx-auto h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ 
                    duration: (currentScreenData.duration || 4000) / 1000, 
                    ease: "linear" 
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="glass-panel px-6 py-3">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={prevScreen}
              disabled={currentScreen === 0}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ⏮️
            </motion.button>
            
            <motion.button
              onClick={pauseExperience}
              className="w-12 h-12 rounded-full bg-white/30 hover:bg-white/40 flex items-center justify-center text-white text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </motion.button>
            
            <motion.button
              onClick={nextScreen}
              disabled={currentScreen === memoryScreens.length - 1}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ⏭️
            </motion.button>
          </div>
        </div>
      </div>

      {/* Completion Screen */}
      {showControls && currentScreen === memoryScreens.length - 1 && (
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-center glass-panel p-8 max-w-lg mx-4">
            <motion.div 
              className="text-6xl mb-6"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.div>
            <h2 className="text-2xl font-cinematic text-white mb-4">
              Journey Complete
            </h2>
            <p className="text-white/70 mb-6">
              Thank you for experiencing this beautiful memory with {messageData?.senderName}
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                onClick={restartExperience}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🔄 Watch Again
              </motion.button>
              <motion.button
                onClick={() => router.push('/receiver')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ❤️ Send Love Back
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}