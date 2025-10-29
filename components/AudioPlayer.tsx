'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-3 glass-panel p-3">
        {/* Audio Element - Using a placeholder ambient track */}
        <audio 
          ref={audioRef}
          src="/audio/ambient-background.mp3" // You'll need to add this file
          preload="auto"
        />

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>

        {/* Audio Visualizer */}
        {isPlaying && !isMuted && (
          <div className="audio-visualizer">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="audio-bar" />
            ))}
          </div>
        )}

        {/* Mute Button */}
        <motion.button
          onClick={toggleMute}
          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.7 13.66A1.98 1.98 0 003.91 13H2a1 1 0 01-1-1V8a1 1 0 011-1h1.91c.242 0 .48-.068.685-.197l3.683-3.134zM12.707 4.293a1 1 0 010 1.414L10.414 8l2.293 2.293a1 1 0 11-1.414 1.414L9 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L7.586 8 5.293 5.707a1 1 0 011.414-1.414L9 6.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.7 13.66A1.98 1.98 0 013.91 13H2a1 1 0 01-1-1V8a1 1 0 011-1h1.91c.242 0 .48-.068.685-.197l3.683-3.134z" clipRule="evenodd" />
              <path d="M12 8a2 2 0 012 2v0a2 2 0 01-2 2" />
              <path d="M14 6a4 4 0 014 4v0a4 4 0 01-4 4" />
            </svg>
          )}
        </motion.button>

        {/* Music Note */}
        <motion.div
          className="text-white/60"
          animate={{ 
            rotate: isPlaying ? [0, 10, -10, 0] : 0,
            scale: isPlaying ? [1, 1.1, 1] : 1
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🎵
        </motion.div>
      </div>
    </div>
  )
}