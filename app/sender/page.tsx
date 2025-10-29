'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import CinematicBackground from '@/components/CinematicBackground'

interface DashboardOption {
  id: string
  title: string
  description: string
  icon: string
  path: string
  color: string
}

const dashboardOptions: DashboardOption[] = [
  {
    id: 'create',
    title: 'Create New Message',
    description: 'Start crafting a beautiful memory for someone special',
    icon: '✨',
    path: '/sender/create',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'history',
    title: 'Message History',
    description: 'View and manage your previously created messages',
    icon: '📚',
    path: '/sender/history',
    color: 'from-purple-500 to-indigo-500'
  }
]

export default function SenderDashboard() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({ messages: 0, viewed: 0, hearts: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          fetchUserStats(data.user.id);
        } else {
          router.push('/auth');
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        router.push('/auth');
      }
    };
    fetchUser();
  }, [router]);

  const fetchUserStats = async (userId: string) => {
    try {
      const response = await fetch(`/api/messages?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        const messages = data.messages || []
        const viewedCount = messages.filter((msg: any) => msg.isViewed).length
        const heartsCount = messages.reduce((acc: number, msg: any) => acc + (msg.reactions?.length || 0), 0)
        
        setStats({
          messages: messages.length,
          viewed: viewedCount,
          hearts: heartsCount
        })
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
      setStats({ messages: 0, viewed: 0, hearts: 0 })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <CinematicBackground />
        <div className="relative z-10 text-white text-xl">Loading...</div>
      </div>
    )
  }

  const handleOptionSelect = (option: DashboardOption) => {
    router.push(option.path)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CinematicBackground />
      
      {/* Header */}
      <div className="relative z-10 pt-8 px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-cinematic text-white mb-2">
                Welcome, {user?.name || 'Sender'}
              </h1>
              <p className="text-white/70 font-soft text-lg">
                Create unforgettable memories for your loved ones
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={handleLogout}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
              <motion.button
                onClick={() => router.push('/role-selection')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Switch Role
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Quick Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl text-emotional-love mb-2">💌</div>
              <div className="text-2xl font-bold text-white">{stats.messages}</div>
              <div className="text-white/60 text-sm">Messages Created</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl text-emotional-serenity mb-2">👀</div>
              <div className="text-2xl font-bold text-white">{stats.viewed}</div>
              <div className="text-white/60 text-sm">Messages Viewed</div>
            </div>
            <div className="glass-panel p-6 text-center">
              <div className="text-3xl text-emotional-memory mb-2">❤️</div>
              <div className="text-2xl font-bold text-white">{stats.hearts}</div>
              <div className="text-white/60 text-sm">Hearts Received</div>
            </div>
          </motion.div>

          {/* Dashboard Options */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {dashboardOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredCard(option.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleOptionSelect(option)}
              >
                <div className="glass-panel p-8 h-full relative overflow-hidden group-hover:bg-white/15 transition-all duration-500">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className="text-4xl mb-4"
                      animate={hoveredCard === option.id ? { 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {option.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-cinematic text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-all duration-300">
                      {option.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 font-soft leading-relaxed mb-6">
                      {option.description}
                    </p>

                    {/* Arrow */}
                    <motion.div
                      className="flex items-center text-white/50 group-hover:text-white transition-colors duration-300"
                      animate={hoveredCard === option.id ? { x: [0, 10, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <span className="mr-2">Let's go</span>
                      <span>→</span>
                    </motion.div>
                  </div>

                  {/* Floating Sparkles */}
                  {hoveredCard === option.id && (
                    <>
                      <motion.div
                        className="absolute top-4 right-4 text-white/30"
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      >
                        ✨
                      </motion.div>
                      <motion.div
                        className="absolute bottom-6 left-6 text-pink-300/40"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💫
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-cinematic text-white mb-6">Get Started</h2>
            <div className="glass-panel p-6">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-cinematic text-white mb-2">Ready to create magic?</h3>
                <p className="text-white/70 mb-6">Start by creating your first memory message</p>
                <motion.button
                  onClick={() => router.push('/sender/create')}
                  className="btn-primary px-8 py-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Your First Message
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}