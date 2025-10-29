'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { defaultTemplates, type Template } from '@/lib/data/templates'

interface EnhancedTemplateSelectorProps {
  onComplete: (data: { selectedTemplate?: string }) => void
  userData: any
}

interface FilterOptions {
  category: string
  style: string
  screenCount: string
  mediaType: string
}

export default function EnhancedTemplateSelector({ onComplete, userData }: EnhancedTemplateSelectorProps) {
  const [templates, setTemplates] = useState<Template[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'all',
    style: 'all',
    screenCount: 'all',
    mediaType: 'all'
  })

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const templatesRes = await fetch('/api/templates')
      
      if (templatesRes.ok) {
        const templatesData = await templatesRes.json()
        setTemplates(templatesData.templates || defaultTemplates)
      } else {
        setTemplates(defaultTemplates)
      }
    } catch (error) {
      console.error('Failed to fetch templates:', error)
      setTemplates(defaultTemplates)
    } finally {
      setLoading(false)
    }
  }

  // Generate AI suggestions based on user data
  const aiSuggestions = useMemo(() => {
    if (!userData.relationship) return []
    
    const relationship = userData.relationship.toLowerCase()
    const suggestions = templates.filter(template => 
      template.suitableFor.some(category => 
        relationship.includes(category.replace(/\s+/g, '').toLowerCase()) ||
        category.replace(/\s+/g, '').toLowerCase().includes(relationship)
      )
    ).slice(0, 3)
    
    return suggestions
  }, [templates, userData.relationship])

  // Filter templates based on current filters and search
  const filteredTemplates = useMemo(() => {
    let filtered = templates

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.appTheme.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.suitableFor.some(category => 
          category.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(template =>
        template.suitableFor.includes(filters.category)
      )
    }

    // Apply style filter
    if (filters.style !== 'all') {
      filtered = filtered.filter(template =>
        template.style === filters.style
      )
    }

    // Apply screen count filter
    if (filters.screenCount !== 'all') {
      const screenRange = filters.screenCount
      filtered = filtered.filter(template => {
        const count = template.screenCount
        switch (screenRange) {
          case '5': return count === 5
          case '10': return count === 10
          case '15': return count === 15
          case '20+': return count >= 20
          default: return true
        }
      })
    }

    // Apply media type filter
    if (filters.mediaType !== 'all') {
      filtered = filtered.filter(template => {
        // Check if template has slides with the specified media type
        if (!template.slides || template.slides.length === 0) {
          return false
        }
        return template.slides.some(slide => 
          slide.imageUsage && slide.imageUsage.toLowerCase().includes(filters.mediaType.toLowerCase())
        )
      })
    }

    return filtered
  }, [templates, searchQuery, filters])

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(templates.flatMap(t => t.suitableFor)))
    const styles = Array.from(new Set(templates.map(t => t.style)))
    const screenCounts = ['5', '10', '15', '20+']
    const mediaTypes = ['text', 'photo', 'video', 'audio', 'memory', 'song']
    
    return { categories, styles, screenCounts, mediaTypes }
  }, [templates])

  const handleContinue = () => {
    onComplete({ 
      selectedTemplate: selectedTemplate || undefined
    })
  }

  const handleSkip = () => {
    onComplete({ selectedTemplate: undefined })
  }

  const openPreview = (template: Template) => {
    setPreviewTemplate(template)
  }

  const getTemplatePreview = (template: Template) => {
    // Debug logging
    console.log('Template preview debug:', {
      id: template.id,
      name: template.name,
      hasSlides: !!template.slides,
      slidesLength: template.slides?.length,
      slidesType: typeof template.slides
    })
    
    // Extract color palette from first slide
    if (!template.slides || template.slides.length === 0) {
      console.log('Using fallback colors for template:', template.name)
      return {
        gradient: 'linear-gradient(135deg, #74b9ff, #0984e3)',
        primaryColor: '#74b9ff'
      }
    }
    
    const firstSlide = template.slides[0]
    const colors = firstSlide?.colorPalette || 'Gradient from #74b9ff to #0984e3'
    
    return {
      gradient: colors.includes('Gradient') ? colors : `Gradient ${colors}`,
      primaryColor: colors.includes('#') ? colors.match(/#[a-fA-F0-9]{6}/)?.[0] || '#74b9ff' : '#74b9ff'
    }
  }

  if (loading) {
    return (
      <motion.div 
        className="glass-panel p-8 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-4xl mb-4">📱</div>
        <h2 className="text-xl text-white mb-4">Loading Template Collection...</h2>
        <div className="loading-spinner mx-auto"></div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
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
        <h2 className="text-3xl font-cinematic text-white mb-2">Choose Your Perfect Template</h2>
        <p className="text-white/70">Discover from our collection of {templates.length} professionally designed templates</p>
      </div>

      {/* AI Suggestions */}
      {aiSuggestions.length > 0 && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center mb-4">
            <h3 className="text-xl text-white mb-2">🤖 AI Suggestions for You</h3>
            <p className="text-white/60 text-sm">Based on your relationship: {userData.relationship}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {aiSuggestions.map((template) => {
              const preview = getTemplatePreview(template)
              return (
                <motion.div
                  key={template.id}
                  className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-4 border border-pink-500/30 cursor-pointer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-pink-300">✨ AI Pick</div>
                    <div className="text-xs text-white/60">{template.screenCount} screens</div>
                  </div>
                  <h4 className="text-white font-semibold mb-1">{template.name}</h4>
                  <p className="text-white/70 text-sm mb-2">{template.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.suitableFor.slice(0, 2).map((category) => (
                      <span key={category} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                        {category}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedTemplate(template.id)
                    }}
                    className={`w-full py-2 rounded-lg text-sm transition-all ${
                      selectedTemplate === template.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {selectedTemplate === template.id ? '✓ Selected' : 'Select This'}
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Search and Filters */}
      <motion.div
        className="mb-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
            🔍
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="all">All Categories</option>
            {filterOptions.categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Style Filter */}
          <select
            value={filters.style}
            onChange={(e) => setFilters(prev => ({ ...prev, style: e.target.value }))}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="all">All Styles</option>
            {filterOptions.styles.map(style => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>

          {/* Screen Count Filter */}
          <select
            value={filters.screenCount}
            onChange={(e) => setFilters(prev => ({ ...prev, screenCount: e.target.value }))}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="all">All Screen Counts</option>
            {filterOptions.screenCounts.map(count => (
              <option key={count} value={count}>{count} screens</option>
            ))}
          </select>

          {/* Media Type Filter */}
          <select
            value={filters.mediaType}
            onChange={(e) => setFilters(prev => ({ ...prev, mediaType: e.target.value }))}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="all">All Media Types</option>
            {filterOptions.mediaTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-white/60 text-sm">
          Showing {filteredTemplates.length} of {templates.length} templates
        </p>
      </div>

      {/* Templates Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredTemplates.map((template) => {
          const preview = getTemplatePreview(template)
          return (
            <motion.div
              key={template.id}
              className={`bg-white/5 rounded-xl p-4 border cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? 'border-pink-500 bg-pink-500/10 shadow-lg ring-2 ring-pink-500/50'
                  : 'border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              {/* Template Preview */}
              <div 
                className="rounded-lg p-4 mb-4 min-h-[120px] flex items-center justify-center text-white relative overflow-hidden"
                style={{
                  background: preview.gradient.includes('Gradient') 
                    ? preview.gradient.replace('Gradient ', 'linear-gradient(135deg, ').replace(' to ', ', ') + ')'
                    : `linear-gradient(135deg, ${preview.primaryColor}, ${preview.primaryColor}88)`
                }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <div className="text-sm font-semibold">{template.name}</div>
                </div>
                
                {/* Slide Count Indicator */}
                <div className="absolute top-2 right-2 bg-black/30 rounded-full px-2 py-1 text-xs">
                  {template.screenCount} screens
                </div>
              </div>

              {/* Template Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{template.name}</h3>
                <p className="text-white/60 text-sm mb-3 line-clamp-2">{template.description}</p>
                
                <div className="mb-3">
                  <div className="text-xs text-pink-400 mb-1">Theme</div>
                  <div className="text-sm text-white font-medium">{template.appTheme}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-purple-400 mb-1">Style</div>
                  <div className="text-sm text-white capitalize">{template.style}</div>
                </div>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
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
                    className="btn-secondary text-xs px-3 py-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    👁️ Preview
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
                    className={`text-xs px-3 py-2 rounded-lg transition-all ${
                      selectedTemplate === template.id
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {selectedTemplate === template.id ? '✓ Selected' : 'Select'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* No Results Message */}
      {filteredTemplates.length === 0 && (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl text-white mb-2">No templates found</h3>
          <p className="text-white/60 mb-4">Try adjusting your filters or search terms</p>
          <motion.button
            onClick={() => {
              setSearchQuery('')
              setFilters({
                category: 'all',
                style: 'all',
                screenCount: 'all',
                mediaType: 'all'
              })
            }}
            className="btn-secondary px-6 py-3"
            whileHover={{ scale: 1.05 }}
          >
            Clear All Filters
          </motion.button>
        </motion.div>
      )}

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
              {templates.find(t => t.id === selectedTemplate)?.name}
            </div>
            <div className="text-white/70 text-sm">
              {templates.find(t => t.id === selectedTemplate)?.appTheme} • {templates.find(t => t.id === selectedTemplate)?.screenCount} screens
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
                  <h4 className="text-xl mb-2">Template Preview</h4>
                  <p className="text-white/80 mb-4">This template includes {previewTemplate.screenCount} unique screens</p>
                  
                  {/* Slide Preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {previewTemplate.slides.slice(0, 4).map((slide, index) => (
                      <div key={slide.id} className="bg-white/20 rounded-lg p-4">
                        <div className="text-sm font-semibold mb-2">Slide {slide.slideNumber}</div>
                        <div className="text-xs text-white/80 mb-2">{slide.name}</div>
                        <div className="text-xs text-white/60">{slide.layout}</div>
                      </div>
                    ))}
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
                    setSelectedTemplate(previewTemplate.id)
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