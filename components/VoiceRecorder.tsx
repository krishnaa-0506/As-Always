'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VoiceRecorderProps {
  onComplete: (data: { voiceNote?: Blob }) => void
  initialVoice?: Blob
}

export default function VoiceRecorder({ onComplete, initialVoice }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(initialVoice || null)
  const [recordingTime, setRecordingTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (initialVoice) {
      const url = URL.createObjectURL(initialVoice)
      setAudioUrl(url)
    }
    
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      const chunks: Blob[] = []
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' })
        setRecordedBlob(blob)
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)

    } catch (error) {
      console.error('Error accessing microphone:', error)
      alert('Unable to access microphone. Please check permissions.')
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }

  const playRecording = () => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const deleteRecording = () => {
    setRecordedBlob(null)
    setAudioUrl(null)
    setRecordingTime(0)
    setIsPlaying(false)
    
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleContinue = () => {
    onComplete({ voiceNote: recordedBlob || undefined })
  }

  const handleSkip = () => {
    onComplete({ voiceNote: undefined })
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ 
            rotate: isRecording ? [0, 10, -10, 0] : 0,
            scale: isRecording ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 1, repeat: isRecording ? Infinity : 0 }}
        >
          🎤
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">Record Your Voice</h2>
        <p className="text-white/70">Add a personal touch with your voice (optional)</p>
      </div>

      <div className="space-y-6">
        {/* Recording Interface */}
        <div className="text-center">
          {!recordedBlob ? (
            <div className="space-y-6">
              {/* Recording Button */}
              <motion.button
                onClick={isRecording ? stopRecording : startRecording}
                className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold transition-all shadow-2xl ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
                    : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={isRecording ? {
                  boxShadow: [
                    '0 0 0 0 rgba(239, 68, 68, 0.7)',
                    '0 0 0 20px rgba(239, 68, 68, 0)',
                    '0 0 0 0 rgba(239, 68, 68, 0.7)'
                  ]
                } : {}}
                transition={{ duration: 1.5, repeat: isRecording ? Infinity : 0 }}
              >
                {isRecording ? '⏸️' : '🎙️'}
              </motion.button>

              {/* Recording Status */}
              <AnimatePresence>
                {isRecording && (
                  <motion.div
                    className="text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="text-red-400 font-semibold mb-2">● Recording...</div>
                    <div className="text-2xl font-mono">
                      {formatTime(recordingTime)}
                    </div>
                    <div className="mt-4">
                      {/* Audio Wave Animation */}
                      <div className="audio-visualizer">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="audio-bar" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isRecording && (
                <div className="text-white/70">
                  <p>Tap the microphone to start recording</p>
                  <p className="text-sm mt-1">Share your thoughts, feelings, or a special message</p>
                </div>
              )}
            </div>
          ) : (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {/* Playback Interface */}
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-green-400 mb-4">✅ Voice note recorded!</div>
                
                <div className="flex items-center justify-center gap-4">
                  <motion.button
                    onClick={playRecording}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-xl text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? '⏸️' : '▶️'}
                  </motion.button>
                  
                  <div className="text-white">
                    <div className="font-mono text-lg">{formatTime(recordingTime)}</div>
                    <div className="text-sm text-white/70">Your voice note</div>
                  </div>
                  
                  <motion.button
                    onClick={deleteRecording}
                    className="w-12 h-12 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center text-red-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🗑️
                  </motion.button>
                </div>

                {/* Audio Element */}
                {audioUrl && (
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onEnded={() => setIsPlaying(false)}
                    style={{ display: 'none' }}
                  />
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Tips */}
        <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
          <div className="text-blue-300 text-sm">
            <div className="font-semibold mb-2">💡 Voice Note Tips:</div>
            <ul className="space-y-1 text-blue-200/80">
              <li>• Speak clearly and from the heart</li>
              <li>• Share a favorite memory or feeling</li>
              <li>• Keep it personal and authentic</li>
              <li>• This will be part of their emotional journey</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <motion.button
            onClick={handleSkip}
            className="btn-secondary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skip Voice Note
          </motion.button>
          
          <motion.button
            onClick={handleContinue}
            className="btn-primary px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {recordedBlob ? 'Continue with Voice →' : 'Continue without Voice →'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}