'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { defaultTemplates, type Template } from '@/lib/data/templates'

interface FilterOptions {
  category: string
  style: string
  screenCount: string
  mediaType: string
}

export default function TemplateShowcasePage() {
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
    // Redirect to simplified template selection
    window.location.href = '/templates/simple'
  }

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

  const openPreview = (template: Template) => {
    setPreviewTemplate(template)
  }

  const getTemplatePreview = (template: Template) => {
    // Safety check for slides array
    if (!template.slides || template.slides.length === 0) {
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

  const handleUseTemplate = (templateId: string) => {
    // Navigate to sender page with template selected
    window.location.href = `/sender/create?template=${templateId}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <motion.div 
            className="glass-panel p-8 max-w-7xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-4xl mb-4">📱</div>
            <h2 className="text-xl text-white mb-4">Loading Template Collection...</h2>
            <div className="loading-spinner mx-auto"></div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-cinematic text-white mb-6">
              Template <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Showcase</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Explore our collection of {templates.length} professionally designed templates. 
              Each template is crafted with unique themes, styles, and interactive elements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="glass-panel p-8 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search and Filters */}
            <motion.div
              className="mb-8 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
                <select
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: 'white' }}
                >
                  <option value="all" style={{ color: 'black', backgroundColor: 'white' }}>All Categories</option>
                  {filterOptions.categories.map(category => (
                    <option key={category} value={category} style={{ color: 'black', backgroundColor: 'white' }}>{category}</option>
                  ))}
                </select>

                <select
                  value={filters.style}
                  onChange={(e) => setFilters(prev => ({ ...prev, style: e.target.value }))}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: 'white' }}
                >
                  <option value="all" style={{ color: 'black', backgroundColor: 'white' }}>All Styles</option>
                  {filterOptions.styles.map(style => (
                    <option key={style} value={style} style={{ color: 'black', backgroundColor: 'white' }}>{style}</option>
                  ))}
                </select>

                <select
                  value={filters.screenCount}
                  onChange={(e) => setFilters(prev => ({ ...prev, screenCount: e.target.value }))}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: 'white' }}
                >
                  <option value="all" style={{ color: 'black', backgroundColor: 'white' }}>All Screen Counts</option>
                  {filterOptions.screenCounts.map(count => (
                    <option key={count} value={count} style={{ color: 'black', backgroundColor: 'white' }}>{count} screens</option>
                  ))}
                </select>

                <select
                  value={filters.mediaType}
                  onChange={(e) => setFilters(prev => ({ ...prev, mediaType: e.target.value }))}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: 'white' }}
                >
                  <option value="all" style={{ color: 'black', backgroundColor: 'white' }}>All Media Types</option>
                  {filterOptions.mediaTypes.map(type => (
                    <option key={type} value={type} style={{ color: 'black', backgroundColor: 'white' }}>{type}</option>
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {filteredTemplates.map((template) => {
                const preview = getTemplatePreview(template)
                return (
                  <motion.div
                    key={template.id}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.02, y: -5 }}
                    layout
                  >
                    {/* Template Preview */}
                    <div 
                      className="rounded-lg p-4 mb-4 min-h-[120px] flex items-center justify-center text-white relative overflow-hidden cursor-pointer"
                      style={{
                        background: preview.gradient.includes('Gradient') 
                          ? preview.gradient.replace('Gradient ', 'linear-gradient(135deg, ').replace(' to ', ', ') + ')'
                          : `linear-gradient(135deg, ${preview.primaryColor}, ${preview.primaryColor}88)`
                      }}
                      onClick={() => openPreview(template)}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">📱</div>
                        <div className="text-sm font-semibold">{template.name}</div>
                      </div>
                      
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
                          onClick={() => openPreview(template)}
                          className="btn-secondary text-xs px-3 py-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          👁️ Preview
                        </motion.button>
                        <motion.button
                          onClick={() => handleUseTemplate(template.id)}
                          className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-3 py-2 rounded-lg transition-all"
                          whileHover={{ scale: 1.05 }}
                        >
                          Use Template
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
          </motion.div>
        </div>
      </section>

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
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-5xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="text-3xl font-cinematic text-white mb-2">{previewTemplate.name}</h3>
                <p className="text-white/70 text-lg">{previewTemplate.description}</p>
                <div className="text-sm text-pink-400 mt-2">{previewTemplate.appTheme}</div>
              </div>
              
              {/* Template Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{previewTemplate.screenCount}</div>
                  <div className="text-sm text-white/60">Screens</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white capitalize">{previewTemplate.style}</div>
                  <div className="text-sm text-white/60">Style</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{previewTemplate.slides?.length || 0}</div>
                  <div className="text-sm text-white/60">Total Slides</div>
                </div>
              </div>
              
              {/* Slide Previews */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">Template Slides</h4>
                {previewTemplate.slides && previewTemplate.slides.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto">
                      {previewTemplate.slides.slice(0, 9).map((slide, index) => (
                        <div key={slide.id} className="bg-white/10 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-semibold text-white">Slide {slide.slideNumber}</div>
                            <div className="text-xs text-pink-400">{slide.layout.split(' ')[0]}</div>
                          </div>
                          <div className="text-xs text-white/80 mb-2">{slide.name}</div>
                          <div className="text-xs text-white/60 line-clamp-2">{slide.content}</div>
                        </div>
                      ))}
                    </div>
                    {previewTemplate.slides.length > 9 && (
                      <div className="text-center mt-4">
                        <span className="text-white/60 text-sm">
                          + {previewTemplate.slides.length - 9} more slides
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-2">📱</div>
                    <p>Template slides will be generated when you select this template</p>
                  </div>
                )}
              </div>
              
              {/* Categories */}
              <div className="text-center mb-6">
                <div className="text-sm text-white/60 mb-2">Suitable For:</div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {previewTemplate.suitableFor.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  onClick={() => handleUseTemplate(previewTemplate.id)}
                  className="btn-primary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  ✓ Use This Template
                </motion.button>
                <motion.button
                  onClick={() => setPreviewTemplate(null)}
                  className="btn-secondary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                >
                  Close Preview
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}