'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'

interface MemoryUploadProps {
  onComplete: (data: { memories: File[], textMemories: string[] }) => void
  initialMemories?: File[]
}

interface TextMemory {
  id: string
  content: string
}

export default function MemoryUpload({ onComplete, initialMemories = [] }: MemoryUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(initialMemories)
  const [textMemories, setTextMemories] = useState<TextMemory[]>([])
  const [newTextMemory, setNewTextMemory] = useState('')
  const [activeTab, setActiveTab] = useState<'files' | 'text'>('files')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi'],
    },
    maxSize: 50 * 1024 * 1024, // 50MB
  })

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const addTextMemory = () => {
    if (newTextMemory.trim()) {
      setTextMemories(prev => [...prev, {
        id: Date.now().toString(),
        content: newTextMemory.trim()
      }])
      setNewTextMemory('')
    }
  }

  const removeTextMemory = (id: string) => {
    setTextMemories(prev => prev.filter(memory => memory.id !== id))
  }

  const handleContinue = () => {
    onComplete({ 
      memories: uploadedFiles, 
      textMemories: textMemories.map(tm => tm.content) 
    })
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return '📷'
    if (file.type.startsWith('video/')) return '🎬'
    return '📄'
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📸
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">Upload Your Memories</h2>
        <p className="text-white/70">Photos, videos, and written memories to include in your message</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 rounded-xl p-1 inline-flex">
          <button
            onClick={() => setActiveTab('files')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'files' 
                ? 'bg-pink-500 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            📁 Files ({uploadedFiles.length})
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'text' 
                ? 'bg-pink-500 text-white' 
                : 'text-white/70 hover:text-white'
            }`}
          >
            📝 Text Memories ({textMemories.length})
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'files' ? (
          <motion.div
            key="files"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* File Upload Area */}
            <motion.div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                isDragActive 
                  ? 'border-pink-400 bg-pink-500/10' 
                  : 'border-white/30 bg-white/5 hover:border-white/50 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <input {...getInputProps()} />
              <motion.div 
                className="text-4xl mb-4"
                animate={isDragActive ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                {isDragActive ? '🎯' : '📤'}
              </motion.div>
              <p className="text-white text-lg mb-2">
                {isDragActive 
                  ? 'Drop your memories here!' 
                  : 'Drag & drop photos and videos here'
                }
              </p>
              <p className="text-white/60">or click to select files</p>
              <p className="text-white/40 text-sm mt-2">
                Supports: JPG, PNG, GIF, MP4, MOV (max 50MB each)
              </p>
            </motion.div>

            {/* Uploaded Files Grid */}
            {uploadedFiles.length > 0 && (
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-white font-semibold mb-4">Uploaded Files ({uploadedFiles.length})</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <AnimatePresence>
                    {uploadedFiles.map((file, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 rounded-xl p-4 relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        layout
                      >
                        <div className="text-2xl mb-2 text-center">
                          {getFileIcon(file)}
                        </div>
                        <p className="text-white text-sm text-center truncate">
                          {file.name}
                        </p>
                        <p className="text-white/60 text-xs text-center">
                          {(file.size / 1024 / 1024).toFixed(1)} MB
                        </p>
                        
                        <motion.button
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          ×
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="text"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Text Memory Input */}
            <div className="space-y-4 mb-6">
              <label className="text-white font-medium">Add a written memory</label>
              <div className="flex gap-3">
                <textarea
                  value={newTextMemory}
                  onChange={(e) => setNewTextMemory(e.target.value)}
                  className="flex-1 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all resize-none"
                  placeholder="Share a special memory, story, or message..."
                  rows={3}
                />
                <motion.button
                  onClick={addTextMemory}
                  className="px-6 py-2 bg-pink-500 rounded-xl text-white hover:bg-pink-600 transition-colors self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!newTextMemory.trim()}
                >
                  Add
                </motion.button>
              </div>
            </div>

            {/* Text Memories List */}
            {textMemories.length > 0 && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-white font-semibold">Written Memories ({textMemories.length})</h3>
                <AnimatePresence>
                  {textMemories.map((memory) => (
                    <motion.div
                      key={memory.id}
                      className="bg-white/10 rounded-xl p-4 relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      layout
                    >
                      <p className="text-white leading-relaxed pr-8">
                        {memory.content}
                      </p>
                      <motion.button
                        onClick={() => removeTextMemory(memory.id)}
                        className="absolute top-3 right-3 w-6 h-6 bg-red-500 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        ×
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue Button */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.button
          onClick={handleContinue}
          className="btn-primary text-lg px-8 py-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue to Voice Note →
        </motion.button>
        <p className="text-white/60 text-sm mt-2">
          {uploadedFiles.length + textMemories.length} memories added (optional)
        </p>
      </motion.div>
    </motion.div>
  )
}