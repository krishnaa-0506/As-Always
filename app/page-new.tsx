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
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-cinematic text-white"
            whileHover={{ scale: 1.05 }}
          >
            AsAlways
          </motion.h1>
          <motion.button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </nav>
      
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
            <motion.h1 
              className="text-7xl md:text-9xl font-cinematic text-white mb-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              AsAlways
            </motion.h1>

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

            <motion.button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xl px-12 py-4 rounded-full font-medium hover:shadow-xl transition-all mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💌 Create Your Memory
            </motion.button>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Capture Memories</h3>
                <p className="text-white/60 text-sm">Photos, videos, voice notes, and heartfelt messages</p>
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2 text-white">AI Magic</h3>
                <p className="text-white/60 text-sm">AI creates beautiful emotional experiences</p>
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-lg font-semibold mb-2 text-white">Share Securely</h3>
                <p className="text-white/60 text-sm">Private codes for intimate memory sharing</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
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
                description: "Our AI creates beautiful emotional screens with your memories",
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
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full">
                  <div className="text-6xl mb-6">{item.icon}</div>
                  <div className="text-sm text-pink-500 font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎵", title: "Background Music", desc: "Beautiful soundtracks for your memories" },
              { icon: "🎭", title: "Multiple Themes", desc: "Choose from romantic, celebration, and more" },
              { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on all devices" },
              { icon: "🔒", title: "100% Private", desc: "Your memories are secure and encrypted" },
              { icon: "⚡", title: "Instant Sharing", desc: "Share with just a simple code" },
              { icon: "🎨", title: "AI Powered", desc: "Smart content generation and layout" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-950/20 via-black to-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Pricing
            </h2>
            <p className="text-xl text-white/70">
              Start creating memories today
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Free to Start</h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-4">
              $0
            </div>
            <p className="text-white/70 mb-6">Create your first memory experience</p>
            <ul className="text-left text-white/60 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Upload photos & videos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Voice messages</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>AI generated screens</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <span>Secure sharing</span>
              </li>
            </ul>
            <motion.button
              onClick={handleGetStarted}
              className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white py-3 rounded-full font-medium hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Creating
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              We're here to help you create amazing memories
            </p>
            <div className="space-y-4">
              <Link href="/help" className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all">
                📚 Help Center
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white/60 text-sm">
            <p className="mb-2">Made with ❤️ by Hynex | Developed by HK</p>
            <div className="flex justify-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}