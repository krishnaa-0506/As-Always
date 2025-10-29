'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import CinematicBackground from '@/components/CinematicBackground'
import Navigation from '@/components/Navigation'
import { 
  HeartIcon, 
  PhotoIcon, 
  SpeakerWaveIcon, 
  SparklesIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PlayIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function LandingPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const statsRef = useRef(null)
  const ctaRef = useRef(null)
  
  const statsInView = useInView(statsRef)
  const ctaInView = useInView(ctaRef)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleGetStarted = () => {
    router.push('/role-selection')
  }

  const handleExploreTemplates = () => {
    router.push('/auth')
  }

  const features = [
    {
      icon: PhotoIcon,
      title: "Memory Integration",
      description: "Transform your photos, videos, and voice notes into beautiful experiences",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: SparklesIcon,
      title: "AI-Powered Content",
      description: "Unique quotes and messages tailored to your relationship and tone",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: SpeakerWaveIcon,
      title: "Immersive Audio",
      description: "Background music and voice messages create emotional connections",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const stats = [
    { number: "10K+", label: "Love Stories Shared" },
    { number: "50+", label: "Beautiful Templates" },
    { number: "99%", label: "Happiness Rate" },
    { number: "24/7", label: "Available Always" }
  ]

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
        
        {/* Mouse tracking gradient overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168,85,247,0.15), transparent 50%)`
          }}
        />
        
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
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(168,85,247,0.5)",
                    "0 0 40px rgba(236,72,153,0.5)",
                    "0 0 20px rgba(168,85,247,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                AsAlways
              </motion.span>
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
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xl px-12 py-4 rounded-full font-medium hover:shadow-xl transition-all mb-16 relative group"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">💌 Create Your Memory</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity
                  }}
                >
                  📸
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white relative z-10">Capture Memories</h3>
                <p className="text-white/60 text-sm relative z-10">Photos, videos, voice notes, and heartfelt messages</p>
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-pink-400 rounded-full"
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  animate={{ 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  🎨
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white relative z-10">AI Magic</h3>
                <p className="text-white/60 text-sm relative z-10">AI creates beautiful emotional experiences</p>
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full"
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
              </motion.div>

              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 group relative overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div 
                  className="text-4xl mb-4 relative z-10"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 2
                  }}
                >
                  💝
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-white relative z-10">Share Securely</h3>
                <p className="text-white/60 text-sm relative z-10">Private codes for intimate memory sharing</p>
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
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

      {/* Templates Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-950/30 via-black to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              50+ Professional <span className="text-gradient">Templates</span>
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Choose from our collection of beautifully designed templates. Each template features unique themes, 
              color palettes, and interactive elements tailored for different relationships and occasions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                name: "Romantic Classic", 
                category: "Romantic Partner", 
                screens: "15 screens",
                gradient: "from-pink-500 to-red-500",
                icon: "💕"
              },
              { 
                name: "Friendship Forever", 
                category: "Best Friend", 
                screens: "10 screens",
                gradient: "from-blue-500 to-purple-500",
                icon: "👫"
              },
              { 
                name: "Family Bonds", 
                category: "Family Member", 
                screens: "20 screens",
                gradient: "from-green-500 to-teal-500",
                icon: "👨‍👩‍👧‍👦"
              },
              { 
                name: "Professional Thanks", 
                category: "Colleague", 
                screens: "5 screens",
                gradient: "from-indigo-500 to-blue-500",
                icon: "🤝"
              }
            ].map((template, index) => (
              <motion.div
                key={template.name}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${template.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {template.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{template.name}</h3>
                  <p className="text-white/60 text-sm mb-1">{template.category}</p>
                  <p className="text-pink-400 text-xs">{template.screens}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/auth">
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore All Templates →
                </motion.button>
              </Link>
              <p className="text-white/40 text-sm mt-3">Sign in to browse our complete collection of 50+ templates</p>
            </motion.div>
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
            <h3 className="text-2xl font-bold text-white mb-4">Free for Everyone</h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-4">
              ₹0
            </div>
            <p className="text-white/70 mb-6">AsAlways is completely free for all users</p>
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

      {/* Statistics Section */}
      <section ref={statsRef} className="py-12 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Join our growing community of love story creators
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2"
                    animate={statsInView ? {
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    } : {}}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section ref={ctaRef} className="py-12 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Create Magic?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already creating unforgettable digital memories
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Start Creating Now
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                onClick={handleExploreTemplates}
                className="px-8 py-4 border border-purple-400 text-purple-300 hover:text-white font-semibold rounded-full text-lg hover:bg-purple-400/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgb(196 181 253)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                View Templates
              </motion.button>
            </motion.div>
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