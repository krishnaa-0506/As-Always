'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface EnhancedMessageFormProps {
  onComplete: (data: any) => void
  initialData?: any
}

const relationships = [
  { value: 'lover', label: 'Lover/Partner', emoji: '💕' },
  { value: 'spouse', label: 'Spouse', emoji: '💑' },
  { value: 'mom', label: 'Mom', emoji: '👩' },
  { value: 'dad', label: 'Dad', emoji: '👨' },
  { value: 'child', label: 'Child', emoji: '👶' },
  { value: 'friend', label: 'Friend', emoji: '👫' },
  { value: 'sibling', label: 'Sibling', emoji: '👫' },
  { value: 'grandparent', label: 'Grandparent', emoji: '👴' },
  { value: 'other', label: 'Other', emoji: '❤️' }
]

const emotionTags = [
  { value: 'love', label: 'Love & Romance', color: 'from-pink-500 to-red-500' },
  { value: 'gratitude', label: 'Gratitude', color: 'from-yellow-500 to-orange-500' },
  { value: 'apology', label: 'Apology', color: 'from-blue-500 to-indigo-500' },
  { value: 'celebration', label: 'Celebration', color: 'from-purple-500 to-pink-500' },
  { value: 'farewell', label: 'Farewell', color: 'from-gray-500 to-slate-500' },
  { value: 'encouragement', label: 'Encouragement', color: 'from-green-500 to-emerald-500' },
  { value: 'nostalgia', label: 'Nostalgia', color: 'from-amber-500 to-orange-600' },
  { value: 'comfort', label: 'Comfort & Support', color: 'from-teal-500 to-cyan-500' }
]

const ageRanges = [
  { value: '0-12', label: 'Child (0-12)' },
  { value: '13-17', label: 'Teen (13-17)' },
  { value: '18-25', label: 'Young Adult (18-25)' },
  { value: '26-40', label: 'Adult (26-40)' },
  { value: '41-60', label: 'Middle Age (41-60)' },
  { value: '60+', label: 'Senior (60+)' }
]

const occasions = [
  { value: 'birthday', label: 'Birthday', emoji: '🎂' },
  { value: 'anniversary', label: 'Anniversary', emoji: '💒' },
  { value: 'valentines', label: 'Valentine\'s Day', emoji: '💝' },
  { value: 'christmas', label: 'Christmas', emoji: '🎄' },
  { value: 'graduation', label: 'Graduation', emoji: '🎓' },
  { value: 'apology', label: 'Apology', emoji: '🙏' },
  { value: 'farewell', label: 'Farewell', emoji: '👋' },
  { value: 'just-because', label: 'Just Because', emoji: '✨' }
]

export default function EnhancedMessageForm({ onComplete, initialData }: EnhancedMessageFormProps) {
  const [formData, setFormData] = useState({
    // Basic Info
    senderName: initialData?.senderName || '',
    senderAge: initialData?.senderAge || '',
    receiverName: initialData?.receiverName || '',
    receiverAge: initialData?.receiverAge || '',
    relationship: initialData?.relationship || '',
    receiverGender: initialData?.receiverGender || '',
    
    // Enhanced Context
    occasion: initialData?.occasion || '',
    emotionTag: initialData?.emotionTag || '',
    relationshipDuration: initialData?.relationshipDuration || '',
    personalityTraits: initialData?.personalityTraits || [],
    sharedInterests: initialData?.sharedInterests || '',
    specialMemories: initialData?.specialMemories || '',
    
    // Message Content
    textContent: initialData?.textContent || '',
    
    // AI Preferences
    preferredStyle: initialData?.preferredStyle || '',
    contentTone: initialData?.contentTone || ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const steps = [
    { id: 1, title: 'Basic Information', icon: '👤' },
    { id: 2, title: 'Relationship Details', icon: '💭' },
    { id: 3, title: 'Personalization', icon: '✨' }
  ]

  const personalityOptions = [
    'Romantic', 'Funny', 'Serious', 'Creative', 'Adventurous', 
    'Gentle', 'Energetic', 'Thoughtful', 'Playful', 'Wise'
  ]

  const styleOptions = [
    { value: 'romantic', label: 'Romantic & Passionate' },
    { value: 'family-warm', label: 'Family Warmth' },
    { value: 'friendship', label: 'Friendship Bond' },
    { value: 'grateful', label: 'Grateful & Appreciative' },
    { value: 'nostalgic', label: 'Nostalgic Memories' },
    { value: 'modern', label: 'Modern & Contemporary' }
  ]

  const toneOptions = [
    { value: 'heartfelt', label: 'Heartfelt & Sincere' },
    { value: 'playful', label: 'Playful & Fun' },
    { value: 'poetic', label: 'Poetic & Artistic' },
    { value: 'simple', label: 'Simple & Direct' },
    { value: 'humorous', label: 'Light & Humorous' },
    { value: 'deep', label: 'Deep & Philosophical' }
  ]

  const handleNext = () => {
    if (validateCurrentStep()) {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const validateCurrentStep = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.senderName.trim()) newErrors.senderName = 'Please enter your name'
      if (!formData.receiverName.trim()) newErrors.receiverName = 'Please enter receiver name'
      if (!formData.relationship) newErrors.relationship = 'Please select a relationship'
      if (!formData.receiverGender) newErrors.receiverGender = 'Please select gender'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return false
    }

    setErrors({})
    return true
  }

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      onComplete(formData)
    }
  }

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const togglePersonalityTrait = (trait: string) => {
    const currentTraits = formData.personalityTraits || []
    if (currentTraits.includes(trait)) {
      updateField('personalityTraits', currentTraits.filter(t => t !== trait))
    } else {
      updateField('personalityTraits', [...currentTraits, trait])
    }
  }

  return (
    <motion.div 
      className="glass-panel p-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div 
          className="text-5xl mb-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🤖
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">AI-Powered Memory Creation</h2>
        <p className="text-white/70">Help our AI understand your relationship for personalized content</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              currentStep >= step.id 
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white' 
                : 'bg-white/20 text-white/60'
            }`}>
              <span className="text-lg">{step.icon}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                currentStep > step.id ? 'bg-purple-500' : 'bg-white/20'
              }`} />
            )}
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl text-white font-semibold">
          {steps[currentStep - 1].title}
        </h3>
        <p className="text-white/60">Step {currentStep} of {steps.length}</p>
      </div>

      {/* Step Content */}
      <div className="space-y-6">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Sender Info */}
            <div className="space-y-4">
              <h4 className="text-white font-medium text-lg">About You (Sender)</h4>
              
              <div>
                <label className="text-white font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.senderName}
                  onChange={(e) => updateField('senderName', e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all"
                  placeholder="Enter your name..."
                />
                {errors.senderName && <p className="text-red-400 text-sm">{errors.senderName}</p>}
              </div>

              <div>
                <label className="text-white font-medium">Your Age Range</label>
                <select
                  value={formData.senderAge}
                  onChange={(e) => updateField('senderAge', e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:border-pink-500 transition-all"
                >
                  <option value="" className="bg-gray-800">Select age range...</option>
                  {ageRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Receiver Info */}
            <div className="space-y-4">
              <h4 className="text-white font-medium text-lg">About Them (Receiver)</h4>
              
              <div>
                <label className="text-white font-medium">Receiver's Name</label>
                <input
                  type="text"
                  value={formData.receiverName}
                  onChange={(e) => updateField('receiverName', e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all"
                  placeholder="Who is this for?"
                />
                {errors.receiverName && <p className="text-red-400 text-sm">{errors.receiverName}</p>}
              </div>

              <div>
                <label className="text-white font-medium">Their Age Range</label>
                <select
                  value={formData.receiverAge}
                  onChange={(e) => updateField('receiverAge', e.target.value)}
                  className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:border-pink-500 transition-all"
                >
                  <option value="" className="bg-gray-800">Select age range...</option>
                  {ageRanges.map(range => (
                    <option key={range.value} value={range.value} className="bg-gray-800">
                      {range.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-white font-medium">Gender</label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {['male', 'female', 'other'].map((gender) => (
                    <motion.button
                      key={gender}
                      type="button"
                      onClick={() => updateField('receiverGender', gender)}
                      className={`p-3 rounded-xl border transition-all ${
                        formData.receiverGender === gender
                          ? 'bg-pink-500 border-pink-400 text-white'
                          : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="text-xl mb-1">
                        {gender === 'male' ? '👨' : gender === 'female' ? '👩' : '👤'}
                      </div>
                      <div className="capitalize text-sm">{gender}</div>
                    </motion.button>
                  ))}
                </div>
                {errors.receiverGender && <p className="text-red-400 text-sm">{errors.receiverGender}</p>}
              </div>
            </div>

            {/* Relationship */}
            <div className="md:col-span-2">
              <label className="text-white font-medium">Your Relationship</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-3">
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
                    <div className="text-xl mb-1">{rel.emoji}</div>
                    <div className="text-xs">{rel.label}</div>
                  </motion.button>
                ))}
              </div>
              {errors.relationship && <p className="text-red-400 text-sm">{errors.relationship}</p>}
            </div>
          </motion.div>
        )}

        {/* Step 2: Relationship Details */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Occasion */}
            <div>
              <label className="text-white font-medium">Special Occasion (Optional)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {occasions.map((occ) => (
                  <motion.button
                    key={occ.value}
                    type="button"
                    onClick={() => updateField('occasion', 
                      formData.occasion === occ.value ? '' : occ.value
                    )}
                    className={`p-3 rounded-xl border transition-all ${
                      formData.occasion === occ.value
                        ? 'bg-purple-500 border-purple-400 text-white'
                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl mb-1">{occ.emoji}</div>
                    <div className="text-xs">{occ.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Emotion Theme */}
            <div>
              <label className="text-white font-medium">Emotional Theme</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
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
                    <div className="text-xs font-medium">{emotion.label}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Relationship Duration */}
            <div>
              <label className="text-white font-medium">How long have you known each other?</label>
              <input
                type="text"
                value={formData.relationshipDuration}
                onChange={(e) => updateField('relationshipDuration', e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all mt-2"
                placeholder="e.g., 5 years, since childhood, 6 months..."
              />
            </div>

            {/* Personality Traits */}
            <div>
              <label className="text-white font-medium">Their Personality (Select all that apply)</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-3">
                {personalityOptions.map((trait) => (
                  <motion.button
                    key={trait}
                    type="button"
                    onClick={() => togglePersonalityTrait(trait)}
                    className={`p-2 rounded-lg text-sm transition-all ${
                      formData.personalityTraits.includes(trait)
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {trait}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Shared Interests */}
            <div>
              <label className="text-white font-medium">Shared Interests & Hobbies</label>
              <textarea
                value={formData.sharedInterests}
                onChange={(e) => updateField('sharedInterests', e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all mt-2 h-20 resize-none"
                placeholder="What do you both enjoy? Music, movies, travel, cooking..."
              />
            </div>
          </motion.div>
        )}

        {/* Step 3: Personalization */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Special Memories */}
            <div>
              <label className="text-white font-medium">Special Memory or Story</label>
              <textarea
                value={formData.specialMemories}
                onChange={(e) => updateField('specialMemories', e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all mt-2 h-24 resize-none"
                placeholder="Share a special memory, inside joke, or meaningful moment you'd like to include..."
              />
            </div>

            {/* Content Style */}
            <div>
              <label className="text-white font-medium">Preferred Style</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {styleOptions.map((style) => (
                  <motion.button
                    key={style.value}
                    type="button"
                    onClick={() => updateField('preferredStyle', style.value)}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      formData.preferredStyle === style.value
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white'
                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {style.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Tone */}
            <div>
              <label className="text-white font-medium">Content Tone</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {toneOptions.map((tone) => (
                  <motion.button
                    key={tone.value}
                    type="button"
                    onClick={() => updateField('contentTone', tone.value)}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      formData.contentTone === tone.value
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent text-white'
                        : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tone.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <label className="text-white font-medium">Personal Message (Optional)</label>
              <textarea
                value={formData.textContent}
                onChange={(e) => updateField('textContent', e.target.value)}
                className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:border-pink-500 transition-all mt-2 h-24 resize-none"
                placeholder="Add a personal message that will be woven into the experience..."
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <motion.button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="btn-secondary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={currentStep > 1 ? { scale: 1.05 } : {}}
          whileTap={currentStep > 1 ? { scale: 0.95 } : {}}
        >
          ← Previous
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="btn-primary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {currentStep === 3 ? (
            <>🚀 Generate AI Experience</>
          ) : (
            <>Next →</>
          )}
        </motion.button>
      </div>
    </motion.div>
  )
}