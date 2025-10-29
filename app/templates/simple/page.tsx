'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ChevronDownIcon, CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Navigation from '@/components/Navigation'

interface Template {
  id: string
  name: string
  category: string
  description: string
  emoji: string
  bgColor?: string
  backgroundColor?: string
  bgImage?: string
  screenCount: number
}

export default function SimpleTemplatesPage() {
  const router = useRouter()
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [templatesLoading, setTemplatesLoading] = useState(true)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/templates')
      const data = await response.json()
      setTemplates(data)
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setTemplatesLoading(false)
    }
  }

  const getScreenCount = (category: string): number => {
    switch (category) {
      case 'Romantic': return 25
      case 'Family': return 20
      case 'Friendship': return 15
      case 'Celebration': return 30
      default: return 20
    }
  }

  const filteredTemplates = templates.filter(template => 
    selectedCategory === 'All Categories' || template.category === selectedCategory
  )

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template)
  }

  const handleContinue = async () => {
    if (!selectedTemplate) return
    
    setIsLoading(true)
    try {
      // Store selected template in localStorage for the creation flow
      localStorage.setItem('selectedTemplate', JSON.stringify(selectedTemplate))
      
      // Navigate to sender create page
      router.push('/sender/create')
    } catch (error) {
      console.error('Error continuing with template:', error)
      setIsLoading(false)
    }
  }

  if (templatesLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading templates...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Choose Your Perfect Template
            </motion.h1>
            <motion.p 
              className="text-xl text-white/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Each template creates a unique experience with different screen counts and styles
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-800/50 border border-white/20 text-white px-6 py-3 pr-10 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-sm min-w-[250px]"
              >
                <option value="All Categories" className="bg-gray-800 text-white">
                  All Categories ({templates.length})
                </option>
                <option value="Romantic" className="bg-gray-800 text-white">
                  💕 Romantic ({templates.filter(t => t.category === 'Romantic').length})
                </option>
                <option value="Family" className="bg-gray-800 text-white">
                  👨‍👩‍👧‍👦 Family ({templates.filter(t => t.category === 'Family').length})
                </option>
                <option value="Friendship" className="bg-gray-800 text-white">
                  👫 Friendship ({templates.filter(t => t.category === 'Friendship').length})
                </option>
                <option value="Celebration" className="bg-gray-800 text-white">
                  🎉 Celebration ({templates.filter(t => t.category === 'Celebration').length})
                </option>
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 pointer-events-none" />
            </div>
          </motion.div>

          {/* Templates Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedTemplate?.id === template.id
                    ? 'ring-3 ring-pink-500 ring-offset-4 ring-offset-gray-900 shadow-2xl shadow-pink-500/50'
                    : 'hover:shadow-xl'
                }`}
                onClick={() => handleTemplateSelect(template)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 relative">
                  <div 
                    className="w-full h-full flex flex-col justify-between p-4 relative overflow-hidden"
                    style={{
                      background: template.bgColor || template.backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      backgroundImage: template.bgImage ? `url(${template.bgImage})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Background overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Template Header */}
                    <div className="text-center relative z-10">
                      <div className="text-3xl mb-2 filter drop-shadow-lg">{template.emoji}</div>
                      <h3 className="font-bold text-lg text-white drop-shadow-lg mb-1">
                        {template.name}
                      </h3>
                      <p className="text-sm text-white/90 drop-shadow font-medium">
                        {template.category}
                      </p>
                    </div>

                    {/* Screen Count Badge */}
                    <div className="text-center relative z-10">
                      <div className="inline-block bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                        <span className="text-white font-semibold text-sm">
                          {getScreenCount(template.category)} Screens
                        </span>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedTemplate?.id === template.id && (
                      <motion.div 
                        className="absolute top-3 right-3 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <CheckIcon className="w-5 h-5 text-white" />
                      </motion.div>
                    )}

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Template Description */}
                <div className="mt-3 text-center">
                  <p className="text-white/70 text-sm leading-relaxed">
                    {template.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No templates message */}
          {filteredTemplates.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl text-white mb-2">No templates found</h3>
              <p className="text-white/60">Try selecting a different category</p>
            </motion.div>
          )}
        </div>

        {/* Fixed Continue Button */}
        {selectedTemplate && (
          <motion.div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <button
              onClick={handleContinue}
              disabled={isLoading}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 border border-white/20"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Continue with {selectedTemplate.name}</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}