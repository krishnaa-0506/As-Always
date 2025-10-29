'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import CinematicBackground from '@/components/CinematicBackground'
import EnhancedMessageForm from '@/components/EnhancedMessageForm'
import EnhancedTemplateSelector from '@/components/EnhancedTemplateSelector'
import MemoryUpload from '@/components/MemoryUpload'
import VoiceRecorder from '@/components/VoiceRecorder'
import SongSelector from '@/components/SongSelector'
import MemoryPreview from '@/components/MemoryPreview'
import GeneratingScreens from '@/components/GeneratingScreens'

type Step = 'form' | 'templates' | 'memories' | 'voice' | 'song' | 'preview' | 'generating' | 'complete'

interface MessageData {
  senderName: string
  senderAge?: string
  receiverName: string
  receiverAge?: string
  relationship: string
  receiverGender: string
  emotionTag?: string
  occasion?: string
  personalityTraits?: string[]
  selectedTemplate?: string
  selectedTheme?: string
  memories: File[]
  voiceNote?: Blob
  selectedSong?: string
  textContent?: string
}

export default function CreateMessage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<Step>('form')
  const [messageData, setMessageData] = useState<MessageData>({
    senderName: '',
    receiverName: '',
    relationship: '',
    receiverGender: '',
    memories: []
  })

  const [generatedCode, setGeneratedCode] = useState<string>('')

  // Handle template parameter from URL
  useEffect(() => {
    const templateId = searchParams.get('template')
    if (templateId) {
      setMessageData(prev => ({ ...prev, selectedTemplate: templateId }))
    }
  }, [searchParams])

  const steps = [
    { id: 'form', title: 'Details', emoji: '📝' },
    { id: 'templates', title: 'AI Suggestions', emoji: '🤖' },
    { id: 'memories', title: 'Memories', emoji: '📸' },
    { id: 'voice', title: 'Voice Note', emoji: '🎤' },
    { id: 'song', title: 'Music', emoji: '🎵' },
    { id: 'preview', title: 'Preview', emoji: '👀' },
    { id: 'generating', title: 'AI Magic', emoji: '✨' },
    { id: 'complete', title: 'Ready!', emoji: '🎉' }
  ]

  const handleStepComplete = (stepData: any) => {
    setMessageData(prev => ({ ...prev, ...stepData }))
    
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as Step)
    }
  }

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as Step)
    } else {
      router.push('/sender')
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'form':
        return <EnhancedMessageForm onComplete={handleStepComplete} initialData={messageData} />
      case 'templates':
        return <EnhancedTemplateSelector onComplete={handleStepComplete} userData={messageData} />
      case 'memories':
        return <MemoryUpload onComplete={handleStepComplete} initialMemories={messageData.memories} />
      case 'voice':
        return <VoiceRecorder onComplete={handleStepComplete} initialVoice={messageData.voiceNote} />
      case 'song':
        return <SongSelector onComplete={handleStepComplete} initialSong={messageData.selectedSong} />
      case 'preview':
        return <MemoryPreview messageData={messageData} onComplete={handleStepComplete} />
      case 'generating':
        return <GeneratingScreens messageData={messageData} onComplete={(code) => {
          setGeneratedCode(code)
          setCurrentStep('complete')
        }} />
      case 'complete':
        return <CompletionScreen code={generatedCode} messageData={messageData} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CinematicBackground />
      
      {/* Header with Progress */}
      <div className="relative z-10 pt-6 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const isActive = step.id === currentStep
                const isCompleted = steps.findIndex(s => s.id === currentStep) > index
                
                return (
                  <div key={step.id} className="flex items-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg scale-110' 
                          : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-white/20 text-white/60'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      animate={isActive ? { 
                        boxShadow: ['0 0 0 0 rgba(244, 63, 94, 0.4)', '0 0 0 10px rgba(244, 63, 94, 0)', '0 0 0 0 rgba(244, 63, 94, 0.4)']
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {isCompleted ? '✓' : step.emoji}
                    </motion.div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                        isCompleted ? 'bg-green-500' : 'bg-white/20'
                      }`} />
                    )}
                  </div>
                )
              })}
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-cinematic text-white mb-1">
                {steps.find(step => step.id === currentStep)?.title}
              </h2>
              <p className="text-white/60">
                Step {steps.findIndex(step => step.id === currentStep) + 1} of {steps.length}
              </p>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Step Content */}
      <div className="relative z-10 flex-1 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {renderCurrentStep()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

// Completion Screen Component
function CompletionScreen({ code, messageData }: { code: string, messageData: MessageData }) {
  const router = useRouter()

  const handleShare = async (method: 'email' | 'sms' | 'copy' | 'whatsapp') => {
    const shareText = `Hey ${messageData.receiverName}! I created something special for you on AsAlways. Use code: ${code} to unlock your memory experience. Visit: ${window.location.origin}/receiver`
    
    switch (method) {
      case 'email':
        window.location.href = `mailto:?subject=You have a special message waiting&body=${encodeURIComponent(shareText)}`
        break
      case 'sms':
        window.location.href = `sms:?body=${encodeURIComponent(shareText)}`
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank')
        break
      case 'copy':
        await navigator.clipboard.writeText(shareText)
        alert('Link copied to clipboard!')
        break
    }
  }

  return (
    <motion.div 
      className="text-center glass-panel p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-6xl mb-6"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🎉
      </motion.div>
      
      <h2 className="text-3xl font-cinematic text-white mb-4">
        Your Message is Ready!
      </h2>
      
      <p className="text-white/70 mb-8">
        We've created 20 high-quality AI-powered emotional screens for {messageData.receiverName} using advanced embeddings and LLM. 
        Share the code below to let them experience your memory journey.
      </p>

      {/* Generated Code */}
      <motion.div 
        className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 mb-8"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="text-white/80 text-sm mb-2">Your Memory Code</div>
        <div className="text-4xl font-bold text-white tracking-widest font-mono">
          {code}
        </div>
      </motion.div>

      {/* Share Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.button
          onClick={() => handleShare('whatsapp')}
          className="btn-primary flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📱 WhatsApp
        </motion.button>
        <motion.button
          onClick={() => handleShare('copy')}
          className="btn-secondary flex items-center justify-center gap-2 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📋 Copy Link
        </motion.button>
        <motion.button
          onClick={() => handleShare('email')}
          className="btn-secondary flex items-center justify-center gap-2 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📧 Email
        </motion.button>
        <motion.button
          onClick={() => handleShare('sms')}
          className="btn-secondary flex items-center justify-center gap-2 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💬 SMS
        </motion.button>
      </div>

      {/* Actions */}
      <div className="flex justify-center">
        <motion.button
          onClick={() => router.push('/sender')}
          className="btn-primary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏠 Back to Dashboard
        </motion.button>
      </div>
    </motion.div>
  )
}