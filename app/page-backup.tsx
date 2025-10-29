'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import CinematicBackground from '@/components/CinematicBackground'
import AudioPlayer from '@/components/AudioPlayer'

export default function LandingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleGetStarted = () => {
    router.push('/role-selection')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-cinematic text-gradient mb-8"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            AsAlways
          </motion.h1>
          <motion.div 
            className="loading-spinner mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p 
            className="text-white/70 mt-6 text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Creating magical memories...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <CinematicBackground />
        <AudioPlayer />
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo */}
            <motion.h1 
              className="text-7xl md:text-9xl font-cinematic text-white mb-6 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              AsAlways
              <div className="floating-hearts"></div>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-4 font-soft leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Create lasting digital memories for those you love
            </motion.p>

            <motion.p 
              className="text-lg text-white/60 mb-12 font-soft"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Every moment, every memory, preserved forever
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                onClick={handleGetStarted}
                className="btn-primary text-xl px-12 py-4 relative group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  💌 Get Started Free
                  <motion.span 
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <Link
                href="/features"
                className="btn-secondary text-lg px-8 py-4 hover:bg-white/30"
              >
                ✨ See Features
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/60 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-pink-500">♥</span>
                <span>10,000+ memories created</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-violet-500">⭐</span>
                <span>4.9/5 user rating</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">🛡️</span>
                <span>100% secure & private</span>
              </div>
            </motion.div>

            {/* Features Preview */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div 
                className="memory-card text-center group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 group-hover:animate-heart-beat">📸</div>
                <h3 className="text-lg font-semibold mb-2">Capture Memories</h3>
                <p className="text-white/60 text-sm">Photos, videos, voice notes, and heartfelt messages</p>
              </motion.div>

              <motion.div 
                className="memory-card text-center group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 group-hover:animate-memory-float">🎨</div>
                <h3 className="text-lg font-semibold mb-2">AI Magic</h3>
                <p className="text-white/60 text-sm">20 personalized emotional screens created by AI</p>
              </motion.div>

              <motion.div 
                className="memory-card text-center group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 group-hover:animate-heart-beat">💝</div>
                <h3 className="text-lg font-semibold mb-2">Share Forever</h3>
                <p className="text-white/60 text-sm">Secure codes for private, emotional experiences</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-1 h-8 bg-white/30 rounded-full mx-auto">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How AsAlways Works
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Three simple steps to create unforgettable digital memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create & Upload",
                description: "Upload photos, videos, write messages, and record voice notes",
                icon: "📱"
              },
              {
                step: "02", 
                title: "AI Generation",
                description: "Our AI creates 20 personalized emotional screens with your memories",
                icon: "🤖"
              },
              {
                step: "03",
                title: "Share & Experience",
                description: "Send a secure code to your loved one for a cinematic memory journey",
                icon: "💝"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="memory-card p-8 relative overflow-hidden">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="text-sm text-pink-500 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                  
                  {/* Connecting Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 opacity-50"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "10K+", label: "Memories Created" },
              { number: "95%", label: "Happy Users" },
              { number: "20", label: "AI Screens Per Memory" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AboutSection />

      <Footer />
    </div>
  )
}