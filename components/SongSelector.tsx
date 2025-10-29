'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MUSIC_LIBRARY } from '@/lib/data/music'

interface SongSelectorProps {
  onComplete: (data: { selectedSong?: string }) => void
  initialSong?: string
  relationship?: string
}

const genres = [
  { value: 'all', label: 'All Genres', color: 'from-gray-500 to-gray-600' },
  { value: 'acoustic', label: 'Acoustic', color: 'from-amber-500 to-orange-500' },
  { value: 'classical', label: 'Classical', color: 'from-purple-500 to-violet-500' },
  { value: 'piano', label: 'Piano', color: 'from-blue-500 to-indigo-500' },
  { value: 'ambient', label: 'Ambient', color: 'from-teal-500 to-cyan-500' },
  { value: 'folk', label: 'Folk', color: 'from-green-500 to-emerald-500' },
  { value: 'jazz', label: 'Jazz', color: 'from-yellow-500 to-orange-500' },
  { value: 'world', label: 'World', color: 'from-red-500 to-pink-500' },
  { value: 'electronic', label: 'Electronic', color: 'from-cyan-500 to-blue-500' }
]

const emotions = [
  { value: 'all', label: 'All Emotions', color: 'from-gray-500 to-gray-600' },
  { value: 'love', label: 'Love', color: 'from-pink-500 to-red-500' },
  { value: 'family', label: 'Family', color: 'from-green-500 to-emerald-500' },
  { value: 'friendship', label: 'Friendship', color: 'from-blue-500 to-indigo-500' },
  { value: 'peace', label: 'Peace', color: 'from-indigo-500 to-blue-500' },
  { value: 'joy', label: 'Joy', color: 'from-yellow-500 to-orange-500' },
  { value: 'nostalgia', label: 'Nostalgia', color: 'from-purple-500 to-violet-500' },
  { value: 'hope', label: 'Hope', color: 'from-emerald-500 to-teal-500' }
]

export default function SongSelector({ onComplete, initialSong, relationship }: SongSelectorProps) {
  const [selectedSong, setSelectedSong] = useState<string | null>(initialSong || null)
  const [filterEmotion, setFilterEmotion] = useState('all')
  const [isPlaying, setIsPlaying] = useState<string | null>(null)
  const [showUpload, setShowUpload] = useState(false)

  const [filterGenre, setFilterGenre] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSongs = MUSIC_LIBRARY.filter(song => {
    const matchesEmotion = filterEmotion === 'all' || 
      song.emotion.some(e => e.toLowerCase().includes(filterEmotion.toLowerCase()))
    
    const matchesGenre = filterGenre === 'all' || 
      song.genre.toLowerCase().includes(filterGenre.toLowerCase())
    
    const matchesSearch = searchTerm === '' || 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesEmotion && matchesGenre && matchesSearch
  })

  const handleSongSelect = (songId: string) => {
    setSelectedSong(selectedSong === songId ? null : songId)
  }

  const handlePlay = (songId: string) => {
    // Toggle play/pause for demo purposes
    setIsPlaying(isPlaying === songId ? null : songId)
    // In real implementation, you would play the actual audio preview
  }

  const handleContinue = () => {
    onComplete({ selectedSong: selectedSong || undefined })
  }

  const handleSkip = () => {
    onComplete({ selectedSong: undefined })
  }

  const selectedSongData = MUSIC_LIBRARY.find(song => song.id === selectedSong)

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
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎵
        </motion.div>
        <h2 className="text-2xl font-cinematic text-white mb-2">Choose Background Music</h2>
        <p className="text-white/70">Select a song that captures the emotion of your message (optional)</p>
      </div>

      {/* Selected Song Display */}
      <AnimatePresence>
        {selectedSong && (
          <motion.div
            className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-8 border border-pink-500/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="text-center">
              <div className="text-pink-300 text-sm mb-2">🎶 Selected Song</div>
              <div className="text-xl font-semibold text-white">{selectedSongData?.title}</div>
              <div className="text-white/70">{selectedSongData?.artist}</div>
              <div className="flex justify-center items-center gap-4 mt-3">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                  {selectedSongData?.emotion[0] || 'Music'}
                </span>
                <span className="text-white/60 text-sm">{selectedSongData?.duration}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search songs or artists..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-500 focus:bg-white/15"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50">
            🔍
          </div>
        </div>
      </div>

      {/* Genre Filter */}
      <div className="mb-6">
        <h3 className="text-white font-semibold mb-4 text-center">Filter by Genre</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {genres.map((genre) => (
            <motion.button
              key={genre.value}
              onClick={() => setFilterGenre(genre.value)}
              className={`px-3 py-2 rounded-full text-sm transition-all ${
                filterGenre === genre.value
                  ? `bg-gradient-to-r ${genre.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {genre.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Emotion Filter */}
      <div className="mb-8">
        <h3 className="text-white font-semibold mb-4 text-center">Filter by Emotion</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {emotions.map((emotion) => (
            <motion.button
              key={emotion.value}
              onClick={() => setFilterEmotion(emotion.value)}
              className={`px-3 py-2 rounded-full text-sm transition-all ${
                filterEmotion === emotion.value
                  ? `bg-gradient-to-r ${emotion.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {emotion.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Songs Grid */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-semibold">
            Music Library ({filteredSongs.length} of {MUSIC_LIBRARY.length} songs)
          </h3>
          <div className="flex gap-2">
            {(searchTerm || filterGenre !== 'all' || filterEmotion !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('')
                  setFilterGenre('all')
                  setFilterEmotion('all')
                }}
                className="text-white/60 hover:text-white text-sm px-3 py-1 bg-white/10 rounded-lg"
              >
                Clear all ✕
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
          <AnimatePresence>
            {filteredSongs.map((song) => (
              <motion.div
                key={song.id}
                className={`bg-white/5 rounded-xl p-4 border cursor-pointer transition-all ${
                  selectedSong === song.id
                    ? 'border-pink-500 bg-pink-500/10'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleSongSelect(song.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        {selectedSong === song.id ? '✓' : '♪'}
                      </motion.div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{song.title}</h4>
                        <p className="text-white/60 text-xs">{song.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                        {song.genre}
                      </span>
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                        {song.emotion[0]}
                      </span>
                      <span className="text-white/60 text-xs">{song.duration}</span>
                    </div>
                  </div>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlay(song.id)
                    }}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying === song.id ? '⏸️' : '▶️'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Upload Option */}
      <div className="mb-8">
        <motion.button
          onClick={() => setShowUpload(!showUpload)}
          className="w-full bg-white/10 hover:bg-white/20 rounded-xl p-4 border border-dashed border-white/30 text-white/70 hover:text-white transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-2xl mb-2">📤</div>
          <div>Upload Your Own Song</div>
          <div className="text-sm text-white/50 mt-1">
            {showUpload ? 'Click to hide upload options' : 'Have a special song in mind?'}
          </div>
        </motion.button>

        <AnimatePresence>
          {showUpload && (
            <motion.div
              className="mt-4 p-4 bg-white/5 rounded-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <input
                type="file"
                accept="audio/*"
                className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white"
              />
              <p className="text-white/60 text-sm mt-2">
                Supported formats: MP3, WAV, FLAC (max 10MB)
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <motion.button
          onClick={handleSkip}
          className="btn-secondary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Music
        </motion.button>
        
        <motion.button
          onClick={handleContinue}
          className="btn-primary px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {selectedSong ? 'Continue with Song →' : 'Continue without Music →'}
        </motion.button>
      </div>

      {/* Music Note */}
      <div className="text-center mt-6">
        <p className="text-white/60 text-sm">
          🎵 Music will play softly in the background during the memory experience
        </p>
      </div>
    </motion.div>
  )
}