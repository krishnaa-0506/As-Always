'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GeneratingScreensProps {
  messageData: any
  onComplete: (code: string) => void
}

interface GenerationStep {
  id: string
  title: string
  description: string
  emoji: string
  duration: number
}

const generationSteps: GenerationStep[] = [
  {
    id: 'analyzing',
    title: 'Analyzing Your Content',
    description: 'Reading your memories and understanding emotions...',
    emoji: '🔍',
    duration: 3000
  },
  {
    id: 'emotions', 
    title: 'Detecting Emotions',
    description: 'Identifying love, joy, nostalgia, and connection...',
    emoji: '💕',
    duration: 2500
  },
  {
    id: 'themes',
    title: 'Creating Visual Themes',
    description: 'Selecting colors, animations, and transitions...',
    emoji: '🎨',
    duration: 3500
  },
  {
    id: 'screens',
    title: 'Generating 20 AI Screens',
    description: 'Crafting personalized content using embeddings, vector search, and LLM...',
    emoji: '✨',
    duration: 4000
  },
  {
    id: 'music',
    title: 'Syncing with Music',
    description: 'Timing visuals with your selected soundtrack...',
    emoji: '🎵',
    duration: 2000
  },
  {
    id: 'personalizing',
    title: 'Adding Personal Touch',
    description: 'Incorporating your voice and relationship dynamics...',
    emoji: '💝',
    duration: 3000
  },
  {
    id: 'optimizing',
    title: 'Optimizing Experience',
    description: 'Ensuring smooth transitions and emotional flow...',
    emoji: '⚡',
    duration: 2500
  },
  {
    id: 'finalizing',
    title: 'Creating Access Code',
    description: 'Generating secure code for your loved one...',
    emoji: '🔐',
    duration: 2000
  }
]

export default function GeneratingScreens({ messageData, onComplete }: GeneratingScreensProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [generatedScreens, setGeneratedScreens] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stepTimer: NodeJS.Timeout
    let progressTimer: NodeJS.Timeout
    let screenTimer: NodeJS.Timeout

    const processSteps = () => {
      if (currentStep < generationSteps.length) {
        const step = generationSteps[currentStep]
        
        // Update progress
        const progressIncrement = 100 / generationSteps.length
        const targetProgress = (currentStep + 1) * progressIncrement

        progressTimer = setInterval(() => {
          setProgress(prev => {
            const newProgress = prev + 1
            return newProgress >= targetProgress ? targetProgress : newProgress
          })
        }, step.duration / (targetProgress - (currentStep * progressIncrement)))

        // Update screen count during screen generation step
        if (step.id === 'screens') {
          screenTimer = setInterval(() => {
            setGeneratedScreens(prev => {
              const newCount = prev + 1
              return newCount >= 20 ? 20 : newCount
            })
          }, 200)
        }

        // Move to next step
        stepTimer = setTimeout(async () => {
          if (currentStep === generationSteps.length - 1) {
            setIsComplete(true)
            // Call real API to generate content
            try {
              const userResponse = await fetch('/api/auth/me');
              const userData = await userResponse.json();
              const currentUser = userData.user || { id: 'anonymous' };

              const response = await fetch('/api/generate-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...messageData, currentUser })
              })
              const result = await response.json()
              if (result.success) {
                setTimeout(() => onComplete(result.data.code), 2000)
              } else {
                setError(result.error || 'Failed to generate content');
              }
            } catch (error) {
              console.error('Content generation failed:', error)
              setError('An unexpected error occurred.');
            }
          } else {
            setCurrentStep(prev => prev + 1)
          }
        }, step.duration)
      }
    }

    processSteps()

    return () => {
      clearTimeout(stepTimer)
      clearInterval(progressTimer)
      clearInterval(screenTimer)
    }
  }, [currentStep, onComplete, messageData])

  const currentStepData = generationSteps[currentStep]

  if (error) {
    return (
      <motion.div
        className="glass-panel p-8 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl mb-4">😢</div>
        <h2 className="text-2xl font-cinematic text-white mb-3">Something Went Wrong</h2>
        <p className="text-white/70 text-lg mb-6">{error}</p>
        <button onClick={() => setCurrentStep(0)} className="btn-primary">Try Again</button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {!isComplete ? (
        <>
          {/* AI Brain Animation */}
          <motion.div 
            className="text-8xl mb-8"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧠
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-white/70 text-sm mt-2">
              {Math.round(progress)}% complete
            </p>
          </div>

          {/* Current Step */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {currentStepData?.emoji}
              </motion.div>
              <h2 className="text-2xl font-cinematic text-white mb-3">
                {currentStepData?.title}
              </h2>
              <p className="text-white/70 text-lg">
                {currentStepData?.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Screen Counter (only during screen generation) */}
          {currentStepData?.id === 'screens' && (
            <motion.div
              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-8 border border-pink-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <motion.div 
                className="text-4xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                {generatedScreens} / 20
              </motion.div>
              <p className="text-pink-300">Emotional screens created</p>
            </motion.div>
          )}

          {/* AI Insights */}
          <motion.div 
            className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-blue-300 text-sm font-semibold mb-3">🤖 AI Insights</div>
            <div className="text-blue-200/80 space-y-2">
              <p>• Relationship: {messageData.relationship} ({messageData.receiverGender})</p>
              <p>• Emotional tone: {messageData.emotionTag || 'Mixed emotions'}</p>
              <p>• Memories: {messageData.memories?.length || 0} files uploaded</p>
              <p>• Voice note: {messageData.voiceNote ? 'Included' : 'Not included'}</p>
              <p>• Background music: {messageData.selectedSong ? 'Selected' : 'None'}</p>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 pointer-events-none">
            <motion.div
              className="text-pink-300 text-2xl"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💖
            </motion.div>
          </div>

          <div className="absolute top-20 right-10 pointer-events-none">
            <motion.div
              className="text-yellow-300 text-2xl"
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.div>
          </div>

          <div className="absolute bottom-20 left-20 pointer-events-none">
            <motion.div
              className="text-purple-300 text-xl"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              🌟
            </motion.div>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-8xl mb-6"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360]
            }}
            transition={{ duration: 2 }}
          >
            🎉
          </motion.div>
          <h2 className="text-3xl font-cinematic text-white mb-4">
            AI Magic Complete!
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Your emotional journey is ready with 20 high-quality AI-powered screens
          </p>
          
          <motion.div 
            className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(34, 197, 94, 0.4)',
                '0 0 0 20px rgba(34, 197, 94, 0)',
                '0 0 0 0 rgba(34, 197, 94, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-green-300 text-sm mb-2">✅ Generation Complete</div>
            <div className="text-white text-lg">
              Creating your unique sharing code...
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}