'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import CinematicBackground from '@/components/CinematicBackground'

interface Message {
  id: string
  code: string
  receiverName: string
  relationship: string
  status: 'created' | 'sent' | 'viewed' | 'completed' | 'generated'
  createdAt: string
  viewedAt?: string
  screens?: number
}

export default function MessageHistory() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'viewed' | 'pending'>('all')

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const userData = localStorage.getItem('user')
        if (!userData) {
          router.push('/auth')
          return
        }
        
        const user = JSON.parse(userData)
        const response = await fetch(`/api/messages?userId=${user.id}`)
        if (response.ok) {
          const data = await response.json()
          const formattedMessages = data.messages.map((msg: any) => ({
            id: msg._id,
            code: msg.code,
            receiverName: msg.receiverName,
            relationship: msg.relationship,
            status: msg.status.toLowerCase(),
            createdAt: msg.createdAt,
            viewedAt: msg.viewedAt,
            screens: msg.screens?.length || 0
          }))
          setMessages(formattedMessages)
        } else {
          console.error('Failed to fetch messages')
          setMessages([])
        }
      } catch (error) {
        console.error('Error fetching messages:', error)
        setMessages([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessages()
  }, [router])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'viewed': return 'text-green-400 bg-green-400/20'
      case 'sent': return 'text-blue-400 bg-blue-400/20'
      case 'completed': return 'text-purple-400 bg-purple-400/20'
      case 'created': return 'text-orange-400 bg-orange-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'viewed': return '👀'
      case 'sent': return '📤'
      case 'completed': return '✅'
      case 'created': return '⏳'
      default: return '📝'
    }
  }

  const getRelationshipEmoji = (relationship: string) => {
    switch (relationship) {
      case 'lover': return '💕'
      case 'mom': return '👩'
      case 'dad': return '👨'
      case 'friend': return '👫'
      case 'sibling': return '👫'
      default: return '❤️'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const filteredMessages = messages.filter(message => {
    if (selectedFilter === 'all') return true
    if (selectedFilter === 'viewed') return message.status === 'viewed' || message.status === 'completed'
    if (selectedFilter === 'pending') return message.status === 'created' || message.status === 'sent'
    return true
  })

  const handleShareMessage = (code: string) => {
    const shareUrl = `${window.location.origin}/receiver`
    const shareText = `I created something special for you on AsAlways. Use code: ${code} to unlock your memory experience. Visit: ${shareUrl}`
    
    if (navigator.share) {
      navigator.share({
        title: 'AsAlways Memory',
        text: shareText,
        url: shareUrl
      })
    } else {
      navigator.clipboard.writeText(shareText)
      // You could add a toast notification here
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <CinematicBackground />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="text-6xl mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              📚
            </motion.div>
            <h2 className="text-2xl text-white font-cinematic mb-4">Loading Your Messages</h2>
            <div className="loading-spinner mx-auto"></div>
          </motion.div>
        </div>
      </div>
    )
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
            <div className="flex items-center gap-4">
              <motion.div 
                className="text-4xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                📚
              </motion.div>
              <div>
                <h1 className="text-4xl md:text-5xl font-cinematic text-white mb-2">
                  Message History
                </h1>
                <p className="text-white/70 font-soft">
                  Your beautiful memories shared with loved ones
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={() => router.push('/sender/create')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ✨ Create New
              </motion.button>
              <motion.button
                onClick={() => router.push('/sender')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Dashboard
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter Tabs */}
          <motion.div 
            className="flex gap-4 mb-8 bg-white/10 rounded-2xl p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { id: 'all', label: 'All Messages', count: messages.length },
              { id: 'viewed', label: 'Viewed', count: messages.filter(m => m.status === 'viewed' || m.status === 'completed').length },
              { id: 'pending', label: 'Pending', count: messages.filter(m => m.status === 'created' || m.status === 'sent').length }
            ].map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id as any)}
                className={`px-6 py-3 rounded-xl transition-all flex items-center gap-3 ${
                  selectedFilter === filter.id
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{filter.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Messages Grid */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatePresence>
              {filteredMessages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className="glass-panel p-6 hover:bg-white/15 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1">
                      {/* Recipient Info */}
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">
                          {getRelationshipEmoji(message.relationship)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {message.receiverName}
                          </h3>
                          <p className="text-white/60 text-sm capitalize">
                            {message.relationship}
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(message.status)}`}>
                        <span>{getStatusIcon(message.status)}</span>
                        <span className="capitalize">{message.status}</span>
                      </div>

                      {/* Code */}
                      <div className="bg-white/10 px-4 py-2 rounded-lg">
                        <div className="text-white/60 text-xs">Code</div>
                        <div className="text-white font-mono font-bold">
                          {message.code}
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="text-right">
                        <div className="text-white/60 text-xs">Created</div>
                        <div className="text-white text-sm">
                          {formatDate(message.createdAt)}
                        </div>
                        {message.viewedAt && (
                          <>
                            <div className="text-green-400/60 text-xs mt-1">Viewed</div>
                            <div className="text-green-400 text-sm">
                              {formatDate(message.viewedAt)}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => handleShareMessage(message.code)}
                        className="btn-secondary text-sm px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📤 Share
                      </motion.button>
                      <motion.button
                        className="btn-secondary text-sm px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📊 Analytics
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredMessages.length === 0 && (
            <motion.div 
              className="text-center glass-panel p-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-xl font-cinematic text-white mb-3">
                No messages found
              </h3>
              <p className="text-white/70 mb-6">
                {selectedFilter === 'all' 
                  ? "You haven't created any messages yet. Start sharing beautiful memories!"
                  : `No ${selectedFilter} messages found.`}
              </p>
              <motion.button
                onClick={() => router.push('/sender/create')}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Your First Message
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}