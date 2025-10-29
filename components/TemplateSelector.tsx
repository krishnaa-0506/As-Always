'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Template {
  _id: string
  name: string
  description: string
  appTheme: string
  suitableFor: string[]
  screenCount: number
  style: string
  previewImages?: string[]
}

interface TemplateSelectorProps {
  onComplete: (data: { selectedTemplate?: string }) => void
  userData: any
}

export default function TemplateSelector({ onComplete, userData }: TemplateSelectorProps) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const templatesRes = await fetch('/api/templates')
      
      if (templatesRes.ok) {
        const templatesData = await templatesRes.json()
        setTemplates(templatesData.templates || [])
      }
    } catch (error) {
      console.error('Failed to fetch templates:', error)
      // Initialize with default data if API fails
      initializeDefaultData()
    } finally {
      setLoading(false)
    }
  }

  const initializeDefaultData = () => {
    const defaultTemplates = [
      {
        _id: '1',
        name: 'Fashion Store Premium',
        description: 'Luxury fashion e-commerce app with premium feel',
        appTheme: 'E-commerce Fashion',
        suitableFor: ['fashion', 'shopping', 'luxury'],
        screenCount: 5,
        style: 'luxury'
      },
      {
        _id: '2',
        name: 'Fitness Tracker Pro',
        description: 'Health and fitness tracking application',
        appTheme: 'Health & Fitness',
        suitableFor: ['health', 'fitness', 'wellness'],
        screenCount: 5,
        style: 'energetic'
      },
      {
        _id: '3',
        name: 'Learning Platform',
        description: 'Educational app for online courses and skills',
        appTheme: 'Education & Learning',
        suitableFor: ['education', 'learning', 'courses'],
        screenCount: 5,
        style: 'academic'
      }
    ]
    setTemplates(defaultTemplates)
  }

  const handleContinue = () => {
    onComplete({ 
      selectedTemplate: selectedTemplate || undefined
    })
  }

  const handleSkip = () => {
    onComplete({ selectedTemplate: undefined })
  }

  const filteredTemplates = templates.filter(template => 
    template.suitableFor.some(suitable => 
      userData.relationship?.toLowerCase().includes(suitable.toLowerCase()) ||
      suitable === 'all'
    ) || templates.length <= 6 // Show all if limited templates
  )

  const openPreview = (template: Template) => {
    setPreviewTemplate(template)
  }

  if (loading) {
    return (
      <motion.div 
        className="glass-panel p-8 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-4xl mb-4">📱</div>
        <h2 className="text-xl text-white mb-4">Loading Mobile App Templates...</h2>
        <div className="loading-spinner mx-auto"></div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          📱
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">Choose Your App Template</h2>
        <p className="text-white/70">Select a mobile app template that matches your vision</p>
      </div>

      {/* Templates Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filteredTemplates.map((template) => (
          <motion.div
            key={template._id}
            className={`bg-white/5 rounded-xl p-6 border cursor-pointer transition-all ${
              selectedTemplate === template._id
                ? 'border-pink-500 bg-pink-500/10 shadow-lg'
                : 'border-white/10 hover:border-white/30 hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
              <p className="text-white/60 text-sm mb-3">{template.description}</p>
              
              <div className="mb-3">
                <div className="text-xs text-pink-400 mb-1">App Theme</div>
                <div className="text-sm text-white font-semibold">{template.appTheme}</div>
              </div>
              
              <div className="mb-3">
                <div className="text-xs text-purple-400 mb-1">Screens</div>
                <div className="text-sm text-white">{template.screenCount} screens</div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {template.suitableFor.slice(0, 3).map((suitable) => (
                  <span key={suitable} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                    {suitable}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2 justify-center">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation()
                    openPreview(template)
                  }}
                  className="btn-secondary text-xs px-3 py-1"
                  whileHover={{ scale: 1.05 }}
                >
                  👁️ Preview
                </motion.button>
                <motion.button
                  onClick={() => setSelectedTemplate(selectedTemplate === template._id ? null : template._id)}
                  className={`text-xs px-3 py-1 rounded-lg transition-all ${
                    selectedTemplate === template._id
                      ? 'bg-pink-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {selectedTemplate === template._id ? '✓ Selected' : 'Select'}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Selection Summary */}
      {selectedTemplate && (
        <motion.div
          className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-8 border border-pink-500/30"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="text-center">
            <div className="text-pink-300 text-sm mb-3">🎯 Your Selection</div>
            <div className="text-white font-semibold">
              {templates.find(t => t._id === selectedTemplate)?.name}
            </div>
            <div className="text-white/70 text-sm">
              {templates.find(t => t._id === selectedTemplate)?.appTheme} • {templates.find(t => t._id === selectedTemplate)?.screenCount} screens
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <motion.button
          onClick={handleSkip}
          className="btn-secondary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Template
        </motion.button>
        
        <motion.button
          onClick={handleContinue}
          className="btn-primary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {selectedTemplate ? 'Continue with Template →' : 'Continue without Template →'}
        </motion.button>
      </div>

      {/* Template Preview Modal */}
      <AnimatePresence>
        {previewTemplate && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewTemplate(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-cinematic text-white mb-2">{previewTemplate.name}</h3>
                <p className="text-white/70">{previewTemplate.description}</p>
                <div className="text-sm text-pink-400 mt-2">{previewTemplate.appTheme}</div>
              </div>
              
              {/* Template Preview Content */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-8 mb-6 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📱</div>
                  <h4 className="text-xl mb-2">Mobile App Template Preview</h4>
                  <p className="text-white/80 mb-4">This template includes {previewTemplate.screenCount} unique screens</p>
                  <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
                    <div className="text-lg font-semibold mb-2">{previewTemplate.appTheme}</div>
                    <div className="text-sm opacity-80">
                      Your app will feature {previewTemplate.screenCount} beautifully designed screens with {previewTemplate.style} styling and smooth user interactions.
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {previewTemplate.suitableFor.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/30 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => {
                    setSelectedTemplate(previewTemplate._id)
                    setPreviewTemplate(null)
                  }}
                  className="btn-primary px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  ✓ Select This Template
                </motion.button>
                <motion.button
                  onClick={() => setPreviewTemplate(null)}
                  className="btn-secondary px-6 py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Close Preview
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}