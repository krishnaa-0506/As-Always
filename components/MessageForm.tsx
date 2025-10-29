'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface MessageFormProps {
  onComplete: (data: any) => void
  initialData?: any
}

const relationships = [
  { value: 'lover', label: 'Lover', emoji: '💕' },
  { value: 'mom', label: 'Mom', emoji: '👩' },
  { value: 'dad', label: 'Dad', emoji: '👨' },
  { value: 'friend', label: 'Friend', emoji: '👫' },
  { value: 'sibling', label: 'Sibling', emoji: '👫' },
  { value: 'child', label: 'Child', emoji: '👶' },
  { value: 'grandparent', label: 'Grandparent', emoji: '👴' },
  { value: 'other', label: 'Other', emoji: '❤️' }
]

const emotionTags = [
  { value: 'love', label: 'Love', color: 'from-pink-500 to-red-500' },
  { value: 'gratitude', label: 'Gratitude', color: 'from-yellow-500 to-orange-500' },
  { value: 'apology', label: 'Apology', color: 'from-blue-500 to-indigo-500' },
  { value: 'celebration', label: 'Celebration', color: 'from-purple-500 to-pink-500' },
  { value: 'farewell', label: 'Farewell', color: 'from-gray-500 to-slate-500' },
  { value: 'encouragement', label: 'Encouragement', color: 'from-green-500 to-emerald-500' }
]

export default function MessageForm({ onComplete, initialData }: MessageFormProps) {
  const [formData, setFormData] = useState({
    senderName: initialData?.senderName || '',
    receiverName: initialData?.receiverName || '',
    relationship: initialData?.relationship || '',
    receiverGender: initialData?.receiverGender || '',
    emotionTag: initialData?.emotionTag || '',
    textContent: initialData?.textContent || ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.senderName.trim()) newErrors.senderName = 'Please enter your name'
    if (!formData.receiverName.trim()) newErrors.receiverName = 'Please enter receiver name'
    if (!formData.relationship) newErrors.relationship = 'Please select a relationship'
    if (!formData.receiverGender) newErrors.receiverGender = 'Please select gender'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onComplete(formData)
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          📝
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">Tell Us About Your Message</h2>
        <p className="text-white/70">Let's start with the basics</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Sender Name */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="text-white font-medium">Your Name</label>
          <input
            type="text"
            value={formData.senderName}
            onChange={(e) => updateField('senderName', e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all"
            placeholder="Enter your name..."
          />
          {errors.senderName && (
            <p className="text-red-400 text-sm">{errors.senderName}</p>
          )}
        </motion.div>

        {/* Receiver Name */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="text-white font-medium">Receiver's Name</label>
          <input
            type="text"
            value={formData.receiverName}
            onChange={(e) => updateField('receiverName', e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all"
            placeholder="Who is this message for?"
          />
          {errors.receiverName && (
            <p className="text-red-400 text-sm">{errors.receiverName}</p>
          )}
        </motion.div>

        {/* Relationship */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="text-white font-medium">Your Relationship</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relationships.map((rel) => (
              <motion.button
                key={rel.value}
                type="button"
                onClick={() => updateField('relationship', rel.value)}
                className={`p-3 rounded-xl border transition-all ${
                  formData.relationship === rel.value
                    ? 'bg-pink-500 border-pink-400 text-white'
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-1">{rel.emoji}</div>
                <div className="text-sm">{rel.label}</div>
              </motion.button>
            ))}
          </div>
          {errors.relationship && (
            <p className="text-red-400 text-sm">{errors.relationship}</p>
          )}
        </motion.div>

        {/* Receiver Gender */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="text-white font-medium">Receiver's Gender</label>
          <div className="grid grid-cols-3 gap-4">
            {['male', 'female', 'other'].map((gender) => (
              <motion.button
                key={gender}
                type="button"
                onClick={() => updateField('receiverGender', gender)}
                className={`p-4 rounded-xl border transition-all ${
                  formData.receiverGender === gender
                    ? 'bg-pink-500 border-pink-400 text-white'
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-2">
                  {gender === 'male' ? '👨' : gender === 'female' ? '👩' : '👤'}
                </div>
                <div className="capitalize">{gender}</div>
              </motion.button>
            ))}
          </div>
          {errors.receiverGender && (
            <p className="text-red-400 text-sm">{errors.receiverGender}</p>
          )}
        </motion.div>

        {/* Emotion Tag (Optional) */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="text-white font-medium">Emotion Theme (Optional)</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {emotionTags.map((emotion) => (
              <motion.button
                key={emotion.value}
                type="button"
                onClick={() => updateField('emotionTag', 
                  formData.emotionTag === emotion.value ? '' : emotion.value
                )}
                className={`p-3 rounded-xl border transition-all ${
                  formData.emotionTag === emotion.value
                    ? `bg-gradient-to-r ${emotion.color} border-transparent text-white`
                    : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {emotion.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Text Message (Optional) */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="text-white font-medium">Personal Message (Optional)</label>
          <textarea
            value={formData.textContent}
            onChange={(e) => updateField('textContent', e.target.value)}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all h-24 resize-none"
            placeholder="Write a heartfelt message..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full btn-primary text-lg py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Continue to Memories →
        </motion.button>
      </form>
    </motion.div>
  )
}