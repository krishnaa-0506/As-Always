'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import CinematicBackground from '@/components/CinematicBackground'
import UsersPanel from './components/UsersPanel'
import MessagesPanel from './components/MessagesPanel'
import AnalyticsPanel from './components/AnalyticsPanel'
import SettingsPanel from './components/SettingsPanel'

interface DashboardStats {
  totalUsers: number
  totalMessages: number
  messagesViewed: number
  activeToday: number
  totalMemories: number
  contentSessions?: number
  uniqueRelationships?: number
  averageSessionReuse?: number
}

interface ContentAnalytics {
  totalSessions: number
  uniqueUserCombinations: number
  averageSessionReuse: number
  relationshipBreakdown: { [key: string]: number }
  tonePreferences: { [key: string]: number }
  contentUsageStats: {
    totalQuotesUsed: number
    averageQuotesPerSession: number
    quotesReuseRate: number
  }
}

interface RecentActivity {
  id: string
  action: string
  user: string
  timestamp: string
  type: 'message' | 'user' | 'system' | 'content'
}

export default function AdminDashboard() {
  const router = useRouter()
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalMessages: 0,
    messagesViewed: 0,
    activeToday: 0,
    totalMemories: 0,
    contentSessions: 0,
    uniqueRelationships: 0,
    averageSessionReuse: 0
  })

  const [contentAnalytics, setContentAnalytics] = useState<ContentAnalytics>({
    totalSessions: 0,
    uniqueUserCombinations: 0,
    averageSessionReuse: 0,
    relationshipBreakdown: {},
    tonePreferences: {},
    contentUsageStats: {
      totalQuotesUsed: 0,
      averageQuotesPerSession: 0,
      quotesReuseRate: 0
    }
  })

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [isLoadingStats, setIsLoadingStats] = useState(true)
  const [isLoadingContent, setIsLoadingContent] = useState(true)

  const [selectedTab, setSelectedTab] = useState<'overview' | 'users' | 'messages' | 'analytics' | 'settings'>('overview')
  const [users, setUsers] = useState<any[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const [isLoadingMessages, setIsLoadingMessages] = useState(false)

  useEffect(() => {
    // Check admin authentication
    const adminAuth = sessionStorage.getItem('asalways-admin')
    if (adminAuth !== 'authenticated') {
      router.push('/admin/login')
      return
    }

    // Fetch real analytics data
    const fetchAnalytics = async () => {
      try {
        const response = await fetch('/api/admin/analytics')
        if (response.ok) {
          const data = await response.json()
          setStats({
            totalUsers: data.totalUsers || 0,
            totalMessages: data.totalMessages || 0,
            messagesViewed: data.viewedMessages || 0,
            activeToday: data.recentUsers || 0,
            totalMemories: data.totalMemories || 0,
            contentSessions: data.contentAnalytics?.totalSessions || 0,
            uniqueRelationships: Object.keys(data.contentAnalytics?.relationshipBreakdown || {}).length,
            averageSessionReuse: data.contentAnalytics?.averageSessionReuse || 0
          })
          
          // Set content analytics
          if (data.contentAnalytics) {
            setContentAnalytics(data.contentAnalytics)
          }

          // Generate recent activity from real data
          const activities: RecentActivity[] = []
          if (data.recentMessages > 0) {
            activities.push({
              id: '1',
              action: `${data.recentMessages} new messages created`,
              user: 'System',
              timestamp: 'Today',
              type: 'message'
            })
          }
          if (data.recentUsers > 0) {
            activities.push({
              id: '2',
              action: `${data.recentUsers} new users registered`,
              user: 'System',
              timestamp: 'Today',
              type: 'user'
            })
          }
          if (data.viewedMessages > 0) {
            activities.push({
              id: '3',
              action: `${data.viewedMessages} messages viewed`,
              user: 'System',
              timestamp: 'Total',
              type: 'message'
            })
          }
          if (data.contentAnalytics?.totalSessions > 0) {
            activities.push({
              id: '4',
              action: `${data.contentAnalytics.totalSessions} content sessions tracked`,
              user: 'System',
              timestamp: 'Total',
              type: 'content'
            })
          }
          setRecentActivity(activities)
        }
      } catch (error) {
        console.error('Error fetching analytics:', error)
      } finally {
        setIsLoadingStats(false)
        setIsLoadingContent(false)
      }
    }

    fetchAnalytics()
  }, [router])

  const fetchUsers = async () => {
    setIsLoadingUsers(true)
    try {
      const response = await fetch('/api/admin/users', {
        headers: {
          'x-admin-code': '306206'
        }
      })
      if (response.ok) {
        const data = await response.json()
        setUsers(data.users || [])
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setIsLoadingUsers(false)
    }
  }

  const fetchMessages = async () => {
    setIsLoadingMessages(true)
    try {
      const response = await fetch('/api/admin/messages', {
        headers: {
          'x-admin-code': '306206'
        }
      })
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setIsLoadingMessages(false)
    }
  }

  const deleteMessage = async (messageId: string) => {
    if (!window.confirm('Are you sure you want to delete this message? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch('/api/admin/messages', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-code': '306206'
        },
        body: JSON.stringify({ messageId })
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message)
        fetchMessages() // Refresh the list
      } else {
        const errorData = await response.json()
        alert('Error: ' + errorData.error)
      }
    } catch (error) {
      alert('Failed to delete message')
    }
  }

  const blockUser = async (userId: string, action: 'block' | 'unblock') => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-code': '306206'
        },
        body: JSON.stringify({ userId, action })
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message)
        fetchUsers() // Refresh the list
      } else {
        const errorData = await response.json()
        alert('Error: ' + errorData.error)
      }
    } catch (error) {
      alert('Failed to update user')
    }
  }

  const deleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user and ALL their data? This action cannot be undone.')) {
      return
    }

    try {
      const response = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-code': '306206'
        },
        body: JSON.stringify({ userId })
      })
      
      if (response.ok) {
        const data = await response.json()
        alert(data.message)
        fetchUsers() // Refresh the list
        // Refresh analytics by calling the original function
        window.location.reload() // Simple way to refresh all data
      } else {
        const errorData = await response.json()
        alert('Error: ' + errorData.error)
      }
    } catch (error) {
      alert('Failed to delete user')
    }
  }

  useEffect(() => {
    if (selectedTab === 'users') {
      fetchUsers()
    } else if (selectedTab === 'messages') {
      fetchMessages()
    }
  }, [selectedTab])

  const handleLogout = () => {
    sessionStorage.removeItem('asalways-admin')
    router.push('/role-selection')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'messages', label: 'Messages', icon: '💌' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'message': return '💌'
      case 'user': return '👤'
      case 'system': return '⚡'
      default: return '📝'
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <CinematicBackground />
      
      {/* Header */}
      <div className="relative z-10 pt-6 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ⚙️
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-4xl font-cinematic text-white">
                  Admin Dashboard
                </h1>
                <p className="text-white/70">AsAlways Platform Management</p>
              </div>
            </div>
            <motion.button
              onClick={handleLogout}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚪 Logout
            </motion.button>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8 bg-white/10 rounded-2xl p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`px-6 py-3 rounded-xl transition-all flex items-center gap-2 ${
                  selectedTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          {selectedTab === 'overview' && (
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-blue-400 mb-2">👥</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingStats ? '...' : stats.totalUsers.toLocaleString()}
                  </div>
                  <div className="text-white/60 text-sm">Total Users</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-pink-400 mb-2">💌</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingStats ? '...' : stats.totalMessages.toLocaleString()}
                  </div>
                  <div className="text-white/60 text-sm">Messages Created</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-green-400 mb-2">👀</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingStats ? '...' : stats.messagesViewed.toLocaleString()}
                  </div>
                  <div className="text-white/60 text-sm">Messages Viewed</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-orange-400 mb-2">⚡</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingStats ? '...' : stats.activeToday}
                  </div>
                  <div className="text-white/60 text-sm">New Users Today</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-purple-400 mb-2">💝</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingStats ? '...' : stats.totalMemories || 0}
                  </div>
                  <div className="text-white/60 text-sm">Total Memories</div>
                </motion.div>
              </div>

              {/* Content Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-cyan-400 mb-2">🔄</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingContent ? '...' : stats.contentSessions?.toLocaleString() || '0'}
                  </div>
                  <div className="text-white/60 text-sm">Content Sessions</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-amber-400 mb-2">🔗</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingContent ? '...' : stats.uniqueRelationships || '0'}
                  </div>
                  <div className="text-white/60 text-sm">Relationship Types</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-emerald-400 mb-2">📊</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingContent ? '...' : (stats.averageSessionReuse || 0).toFixed(1)}
                  </div>
                  <div className="text-white/60 text-sm">Avg Session Reuse</div>
                </motion.div>

                <motion.div 
                  className="glass-panel p-6 text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl text-rose-400 mb-2">💬</div>
                  <div className="text-2xl font-bold text-white">
                    {isLoadingContent ? '...' : contentAnalytics.contentUsageStats.totalQuotesUsed.toLocaleString()}
                  </div>
                  <div className="text-white/60 text-sm">Quotes Used</div>
                </motion.div>
              </div>

              {/* Detailed Analytics Panels */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-cinematic text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">💕</span>
                    Relationship Breakdown
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(contentAnalytics.relationshipBreakdown).map(([relationship, count]) => (
                      <div key={relationship} className="flex justify-between items-center">
                        <span className="text-white/70 capitalize">{relationship}</span>
                        <div className="flex items-center gap-2">
                          <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full" 
                               style={{ width: `${(count / Math.max(...Object.values(contentAnalytics.relationshipBreakdown))) * 100}px` }}></div>
                          <span className="text-white font-semibold min-w-[2rem] text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="text-xl font-cinematic text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">🎭</span>
                    Tone Preferences
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(contentAnalytics.tonePreferences).map(([tone, count]) => (
                      <div key={tone} className="flex justify-between items-center">
                        <span className="text-white/70 capitalize">{tone}</span>
                        <div className="flex items-center gap-2">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" 
                               style={{ width: `${(count / Math.max(...Object.values(contentAnalytics.tonePreferences))) * 100}px` }}></div>
                          <span className="text-white font-semibold min-w-[2rem] text-right">{count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-cinematic text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">🔔</span>
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    {isLoadingStats ? (
                      <div className="text-center text-white/60 py-8">
                        <div className="text-2xl mb-2">⏳</div>
                        Loading activity...
                      </div>
                    ) : recentActivity.length > 0 ? (
                      recentActivity.map((activity, index) => (
                        <motion.div
                          key={activity.id}
                          className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                          <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                          <div className="flex-1">
                            <div className="text-white font-medium">{activity.action}</div>
                            <div className="text-white/60 text-sm">by {activity.user}</div>
                          </div>
                          <div className="text-white/50 text-xs">{activity.timestamp}</div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center text-white/60 py-8">
                        <div className="text-2xl mb-2">📭</div>
                        No recent activity
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-panel p-6">
                  <h3 className="text-xl font-cinematic text-white mb-6 flex items-center gap-3">
                    <span className="text-2xl">⚡</span>
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { action: 'View All Users', icon: '👥', color: 'from-blue-500 to-cyan-500' },
                      { action: 'Message Analytics', icon: '📊', color: 'from-purple-500 to-pink-500' },
                      { action: 'System Settings', icon: '⚙️', color: 'from-green-500 to-emerald-500' },
                      { action: 'Export Data', icon: '📥', color: 'from-orange-500 to-red-500' },
                    ].map((item, index) => (
                      <motion.button
                        key={index}
                        className={`bg-gradient-to-r ${item.color} text-white p-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-shadow`}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-xl mb-2">{item.icon}</div>
                        {item.action}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="glass-panel p-6">
                <h3 className="text-xl font-cinematic text-white mb-6 flex items-center gap-3">
                  <span className="text-2xl">💓</span>
                  System Health
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { metric: 'Server Uptime', value: '99.97%', status: 'excellent', color: 'text-green-400' },
                    { metric: 'Response Time', value: '145ms', status: 'good', color: 'text-blue-400' },
                    { metric: 'Error Rate', value: '0.02%', status: 'excellent', color: 'text-green-400' },
                  ].map((health, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white/5 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className={`text-lg font-bold ${health.color}`}>{health.value}</div>
                      <div className="text-white/70 text-sm">{health.metric}</div>
                      <div className={`text-xs mt-1 ${health.color} capitalize`}>● {health.status}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <UsersPanel />
            </motion.div>
          )}
          {selectedTab === 'messages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <MessagesPanel />
            </motion.div>
          )}
          {selectedTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnalyticsPanel />
            </motion.div>
          )}
          {selectedTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SettingsPanel />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}