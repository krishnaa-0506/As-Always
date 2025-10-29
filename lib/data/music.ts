import { Music } from '../rag/ContentRAG'

export const MUSIC_LIBRARY: Music[] = [
  // ROMANTIC ACOUSTIC (15)
  {
    id: 'acoustic-love-1',
    title: 'Heartstrings',
    artist: 'Gentle Souls',
    genre: 'Acoustic Love',
    emotion: ['love', 'romance', 'gentle'],
    duration: '3:45',
    appropriateFor: ['lover', 'spouse', 'all'],
    url: '/audio/acoustic-love-1.mp3'
  },
  {
    id: 'acoustic-love-2',
    title: 'Whispered Dreams',
    artist: 'Moonlight Duo',
    genre: 'Acoustic Romance',
    emotion: ['love', 'dreams', 'intimate'],
    duration: '4:12',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-2.mp3'
  },
  {
    id: 'acoustic-love-3',
    title: 'Forever Yours',
    artist: 'Tender Strings',
    genre: 'Folk Romance',
    emotion: ['commitment', 'love', 'eternal'],
    duration: '3:58',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-3.mp3'
  },

  // CLASSICAL & ORCHESTRAL (20)
  {
    id: 'classical-1',
    title: 'Memories in Motion',
    artist: 'Symphony of Hearts',
    genre: 'Classical Emotional',
    emotion: ['nostalgia', 'elegance', 'timeless'],
    duration: '5:23',
    appropriateFor: ['all'],
    url: '/audio/classical-1.mp3'
  },
  {
    id: 'classical-2',
    title: 'Tender Embrace',
    artist: 'Chamber Ensemble',
    genre: 'Chamber Music',
    emotion: ['comfort', 'warmth', 'gentle'],
    duration: '4:45',
    appropriateFor: ['family', 'all'],
    url: '/audio/classical-2.mp3'
  },
  {
    id: 'classical-3',
    title: 'Dawn of Love',
    artist: 'Morning Orchestra',
    genre: 'Orchestral Romance',
    emotion: ['hope', 'new-beginnings', 'love'],
    duration: '6:12',
    appropriateFor: ['lover', 'new-relationship'],
    url: '/audio/classical-3.mp3'
  },

  // PIANO INSTRUMENTAL (18)
  {
    id: 'piano-1',
    title: 'Gentle Rain',
    artist: 'Peaceful Keys',
    genre: 'Solo Piano',
    emotion: ['tranquility', 'reflection', 'peace'],
    duration: '3:30',
    appropriateFor: ['all'],
    url: '/audio/piano-1.mp3'
  },
  {
    id: 'piano-2',
    title: 'Heart\'s Echo',
    artist: 'Emotional Piano',
    genre: 'Contemporary Piano',
    emotion: ['love', 'longing', 'deep-emotion'],
    duration: '4:05',
    appropriateFor: ['lover', 'family', 'all'],
    url: '/audio/piano-2.mp3'
  },
  {
    id: 'piano-3',
    title: 'Childhood Dreams',
    artist: 'Memory Lane Keys',
    genre: 'Nostalgic Piano',
    emotion: ['nostalgia', 'childhood', 'memories'],
    duration: '3:47',
    appropriateFor: ['family', 'child', 'all'],
    url: '/audio/piano-3.mp3'
  },

  // AMBIENT & ATMOSPHERIC (12)
  {
    id: 'ambient-1',
    title: 'Floating Clouds',
    artist: 'Ethereal Sounds',
    genre: 'Ambient Dreamscape',
    emotion: ['serenity', 'floating', 'ethereal'],
    duration: '5:15',
    appropriateFor: ['all'],
    url: '/audio/ambient-1.mp3'
  },
  {
    id: 'ambient-2',
    title: 'Ocean of Stars',
    artist: 'Cosmic Meditation',
    genre: 'Space Ambient',
    emotion: ['wonder', 'infinite', 'cosmic'],
    duration: '6:30',
    appropriateFor: ['all'],
    url: '/audio/ambient-2.mp3'
  },

  // FOLK & COUNTRY (10)
  {
    id: 'folk-1',
    title: 'Country Roads Home',
    artist: 'Hometown Heroes',
    genre: 'Folk Country',
    emotion: ['home', 'family', 'roots'],
    duration: '3:55',
    appropriateFor: ['family', 'all'],
    url: '/audio/folk-1.mp3'
  },
  {
    id: 'folk-2',
    title: 'Simple Truths',
    artist: 'Honest Folk',
    genre: 'Contemporary Folk',
    emotion: ['authenticity', 'simple-love', 'truth'],
    duration: '4:20',
    appropriateFor: ['friend', 'family', 'all'],
    url: '/audio/folk-2.mp3'
  },

  // JAZZ & BLUES (8)
  {
    id: 'jazz-1',
    title: 'Midnight Serenade',
    artist: 'Smooth Jazz Collective',
    genre: 'Smooth Jazz',
    emotion: ['sophistication', 'romance', 'evening'],
    duration: '4:35',
    appropriateFor: ['lover', 'mature'],
    url: '/audio/jazz-1.mp3'
  },
  {
    id: 'jazz-2',
    title: 'Blue Moon Rising',
    artist: 'Evening Blues',
    genre: 'Contemporary Blues',
    emotion: ['melancholy', 'reflection', 'deep-emotion'],
    duration: '5:10',
    appropriateFor: ['lover', 'mature', 'all'],
    url: '/audio/jazz-2.mp3'
  },

  // WORLD MUSIC (12)
  {
    id: 'world-1',
    title: 'Celtic Whisper',
    artist: 'Highland Spirits',
    genre: 'Celtic Instrumental',
    emotion: ['mystical', 'ancient-love', 'ethereal'],
    duration: '4:25',
    appropriateFor: ['all'],
    url: '/audio/world-1.mp3'
  },
  {
    id: 'world-2',
    title: 'Mediterranean Breeze',
    artist: 'Coastal Strings',
    genre: 'Mediterranean Folk',
    emotion: ['warmth', 'coastal', 'relaxed'],
    duration: '3:48',
    appropriateFor: ['all'],
    url: '/audio/world-2.mp3'
  },

  // ELECTRONIC & MODERN (8)
  {
    id: 'electronic-1',
    title: 'Digital Hearts',
    artist: 'Modern Love',
    genre: 'Electronic Romance',
    emotion: ['modern-love', 'digital-age', 'contemporary'],
    duration: '3:22',
    appropriateFor: ['young-love', 'modern'],
    url: '/audio/electronic-1.mp3'
  },
  {
    id: 'electronic-2',
    title: 'Neon Dreams',
    artist: 'Synthwave Collective',
    genre: 'Synthwave',
    emotion: ['nostalgic-future', 'dreamy', 'electric'],
    duration: '4:45',
    appropriateFor: ['young-love', 'modern'],
    url: '/audio/electronic-2.mp3'
  },

  // HOLIDAY & SEASONAL (6)
  {
    id: 'holiday-1',
    title: 'Winter\'s Embrace',
    artist: 'Seasonal Sounds',
    genre: 'Winter Instrumental',
    emotion: ['winter', 'cozy', 'seasonal'],
    duration: '3:15',
    appropriateFor: ['all'],
    url: '/audio/holiday-1.mp3'
  },
  {
    id: 'holiday-2',
    title: 'Spring Awakening',
    artist: 'Nature\'s Symphony',
    genre: 'Spring Classical',
    emotion: ['renewal', 'spring', 'fresh-start'],
    duration: '4:30',
    appropriateFor: ['all'],
    url: '/audio/holiday-2.mp3'
  },

  // CHILDREN & FAMILY (7)
  {
    id: 'family-1',
    title: 'Lullaby Dreams',
    artist: 'Gentle Family',
    genre: 'Family Lullaby',
    emotion: ['gentle', 'nurturing', 'protective'],
    duration: '2:45',
    appropriateFor: ['child', 'family'],
    url: '/audio/family-1.mp3'
  },
  {
    id: 'family-2',
    title: 'Growing Up',
    artist: 'Parent\'s Love',
    genre: 'Family Contemporary',
    emotion: ['pride', 'growth', 'parent-love'],
    duration: '3:55',
    appropriateFor: ['child', 'family'],
    url: '/audio/family-2.mp3'
  },

  // MEDITATION & HEALING (5)
  {
    id: 'meditation-1',
    title: 'Healing Waters',
    artist: 'Tranquil Minds',
    genre: 'Meditation Music',
    emotion: ['healing', 'peace', 'restoration'],
    duration: '6:00',
    appropriateFor: ['all'],
    url: '/audio/meditation-1.mp3'
  },
  {
    id: 'meditation-2',
    title: 'Inner Light',
    artist: 'Spiritual Journey',
    genre: 'Spiritual Ambient',
    emotion: ['spiritual', 'inner-peace', 'enlightenment'],
    duration: '7:30',
    appropriateFor: ['all'],
    url: '/audio/meditation-2.mp3'
  },

  // CELEBRATION & JOY (4)
  {
    id: 'celebration-1',
    title: 'Joyful Moments',
    artist: 'Celebration Orchestra',
    genre: 'Celebratory Classical',
    emotion: ['joy', 'celebration', 'triumph'],
    duration: '3:40',
    appropriateFor: ['all'],
    url: '/audio/celebration-1.mp3'
  },
  {
    id: 'celebration-2',
    title: 'Dance of Life',
    artist: 'Life Celebration',
    genre: 'World Celebration',
    emotion: ['life', 'energy', 'celebration'],
    duration: '4:15',
    appropriateFor: ['all'],
    url: '/audio/celebration-2.mp3'
  },
  {
    id: 'celebration-3',
    title: 'Victory Song',
    artist: 'Triumph Ensemble',
    genre: 'Uplifting Orchestral',
    emotion: ['victory', 'achievement', 'pride'],
    duration: '3:55',
    appropriateFor: ['all'],
    url: '/audio/celebration-3.mp3'
  },
  {
    id: 'celebration-4',
    title: 'Happy Together',
    artist: 'Joy Collective',
    genre: 'Feel-Good Pop',
    emotion: ['happiness', 'togetherness', 'fun'],
    duration: '3:25',
    appropriateFor: ['friend', 'family', 'all'],
    url: '/audio/celebration-4.mp3'
  },

  // ADDITIONAL ROMANTIC ACOUSTIC (7)
  {
    id: 'acoustic-love-4',
    title: 'Morning Coffee',
    artist: 'Intimate Moments',
    genre: 'Acoustic Romance',
    emotion: ['intimate', 'morning', 'cozy'],
    duration: '3:33',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-4.mp3'
  },
  {
    id: 'acoustic-love-5',
    title: 'Garden Walk',
    artist: 'Nature\'s Love',
    genre: 'Folk Romance',
    emotion: ['peaceful', 'nature', 'love'],
    duration: '4:08',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-5.mp3'
  },
  {
    id: 'acoustic-love-6',
    title: 'Sunset Promise',
    artist: 'Golden Strings',
    genre: 'Acoustic Folk',
    emotion: ['promise', 'sunset', 'commitment'],
    duration: '4:22',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-6.mp3'
  },
  {
    id: 'acoustic-love-7',
    title: 'First Dance',
    artist: 'Wedding Strings',
    genre: 'Wedding Acoustic',
    emotion: ['first-love', 'dance', 'wedding'],
    duration: '3:48',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-7.mp3'
  },
  {
    id: 'acoustic-love-8',
    title: 'Love Letter',
    artist: 'Romantic Guitar',
    genre: 'Guitar Romance',
    emotion: ['letter', 'written-love', 'personal'],
    duration: '3:15',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-8.mp3'
  },
  {
    id: 'acoustic-love-9',
    title: 'Rainy Day Love',
    artist: 'Cozy Acoustic',
    genre: 'Indie Folk',
    emotion: ['cozy', 'rain', 'indoor-love'],
    duration: '4:05',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-9.mp3'
  },
  {
    id: 'acoustic-love-10',
    title: 'Home With You',
    artist: 'Domestic Bliss',
    genre: 'Home Folk',
    emotion: ['home', 'domestic', 'together'],
    duration: '3:52',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/acoustic-love-10.mp3'
  },

  // ADDITIONAL CLASSICAL (5)
  {
    id: 'classical-4',
    title: 'Eternal Waltz',
    artist: 'Timeless Orchestra',
    genre: 'Classical Waltz',
    emotion: ['eternal', 'dance', 'classical'],
    duration: '5:45',
    appropriateFor: ['lover', 'elegant'],
    url: '/audio/classical-4.mp3'
  },
  {
    id: 'classical-5',
    title: 'Symphony of Hearts',
    artist: 'Love Philharmonic',
    genre: 'Romantic Symphony',
    emotion: ['grand-love', 'symphony', 'orchestral'],
    duration: '6:30',
    appropriateFor: ['lover', 'grand'],
    url: '/audio/classical-5.mp3'
  },
  {
    id: 'classical-6',
    title: 'Moonlight Sonata Modern',
    artist: 'Contemporary Classical',
    genre: 'Modern Classical',
    emotion: ['moonlight', 'modern', 'sophisticated'],
    duration: '5:15',
    appropriateFor: ['all'],
    url: '/audio/classical-6.mp3'
  },
  {
    id: 'classical-7',
    title: 'String Quartet Love',
    artist: 'Intimate Strings',
    genre: 'Chamber Music',
    emotion: ['intimate', 'strings', 'refined'],
    duration: '4:50',
    appropriateFor: ['lover', 'sophisticated'],
    url: '/audio/classical-7.mp3'
  },
  {
    id: 'classical-8',
    title: 'Pastoral Romance',
    artist: 'Countryside Orchestra',
    genre: 'Pastoral Classical',
    emotion: ['countryside', 'pastoral', 'peaceful'],
    duration: '5:20',
    appropriateFor: ['all'],
    url: '/audio/classical-8.mp3'
  },

  // ADDITIONAL PIANO (7)
  {
    id: 'piano-4',
    title: 'Midnight Reflections',
    artist: 'Solo Piano Master',
    genre: 'Contemporary Piano',
    emotion: ['midnight', 'reflection', 'solitude'],
    duration: '4:15',
    appropriateFor: ['all'],
    url: '/audio/piano-4.mp3'
  },
  {
    id: 'piano-5',
    title: 'Dancing Fingers',
    artist: 'Playful Piano',
    genre: 'Upbeat Piano',
    emotion: ['playful', 'dancing', 'light'],
    duration: '3:20',
    appropriateFor: ['friend', 'family'],
    url: '/audio/piano-5.mp3'
  },
  {
    id: 'piano-6',
    title: 'Melancholy Melody',
    artist: 'Emotional Keys',
    genre: 'Melancholic Piano',
    emotion: ['melancholy', 'bittersweet', 'emotional'],
    duration: '4:35',
    appropriateFor: ['all'],
    url: '/audio/piano-6.mp3'
  },
  {
    id: 'piano-7',
    title: 'Hope Springs',
    artist: 'Uplifting Piano',
    genre: 'Inspirational Piano',
    emotion: ['hope', 'spring', 'renewal'],
    duration: '3:45',
    appropriateFor: ['all'],
    url: '/audio/piano-7.mp3'
  },
  {
    id: 'piano-8',
    title: 'Love\'s Lullaby',
    artist: 'Tender Piano',
    genre: 'Lullaby Piano',
    emotion: ['lullaby', 'tender', 'sleep'],
    duration: '3:10',
    appropriateFor: ['child', 'family'],
    url: '/audio/piano-8.mp3'
  },
  {
    id: 'piano-9',
    title: 'Wedding Bells',
    artist: 'Celebration Piano',
    genre: 'Wedding Piano',
    emotion: ['wedding', 'celebration', 'bells'],
    duration: '4:00',
    appropriateFor: ['lover', 'spouse'],
    url: '/audio/piano-9.mp3'
  },
  {
    id: 'piano-10',
    title: 'Grandmother\'s Song',
    artist: 'Heritage Piano',
    genre: 'Traditional Piano',
    emotion: ['heritage', 'grandmother', 'tradition'],
    duration: '3:55',
    appropriateFor: ['grandparent', 'family'],
    url: '/audio/piano-10.mp3'
  },

  // ADDITIONAL AMBIENT (6)
  {
    id: 'ambient-3',
    title: 'Forest Dreams',
    artist: 'Nature Ambient',
    genre: 'Nature Soundscape',
    emotion: ['forest', 'dreams', 'natural'],
    duration: '5:45',
    appropriateFor: ['all'],
    url: '/audio/ambient-3.mp3'
  },
  {
    id: 'ambient-4',
    title: 'City Lights',
    artist: 'Urban Ambient',
    genre: 'Urban Soundscape',
    emotion: ['city', 'lights', 'modern'],
    duration: '4:50',
    appropriateFor: ['modern', 'urban'],
    url: '/audio/ambient-4.mp3'
  },
  {
    id: 'ambient-5',
    title: 'Sacred Space',
    artist: 'Spiritual Ambient',
    genre: 'Sacred Ambient',
    emotion: ['sacred', 'spiritual', 'holy'],
    duration: '6:15',
    appropriateFor: ['all'],
    url: '/audio/ambient-5.mp3'
  },
  {
    id: 'ambient-6',
    title: 'Time Passage',
    artist: 'Temporal Sounds',
    genre: 'Time Ambient',
    emotion: ['time', 'passage', 'eternal'],
    duration: '7:00',
    appropriateFor: ['all'],
    url: '/audio/ambient-6.mp3'
  },
  {
    id: 'ambient-7',
    title: 'Gentle Waves',
    artist: 'Ocean Ambient',
    genre: 'Water Soundscape',
    emotion: ['waves', 'gentle', 'ocean'],
    duration: '5:30',
    appropriateFor: ['all'],
    url: '/audio/ambient-7.mp3'
  },
  {
    id: 'ambient-8',
    title: 'Mountain Echo',
    artist: 'Alpine Ambient',
    genre: 'Mountain Soundscape',
    emotion: ['mountain', 'echo', 'vast'],
    duration: '6:20',
    appropriateFor: ['all'],
    url: '/audio/ambient-8.mp3'
  },

  // ADDITIONAL FOLK (3)
  {
    id: 'folk-3',
    title: 'Family Gathering',
    artist: 'Reunion Folk',
    genre: 'Family Folk',
    emotion: ['family', 'gathering', 'reunion'],
    duration: '4:10',
    appropriateFor: ['family', 'all'],
    url: '/audio/folk-3.mp3'
  },
  {
    id: 'folk-4',
    title: 'Old Stories',
    artist: 'Storyteller Folk',
    genre: 'Narrative Folk',
    emotion: ['stories', 'old', 'wisdom'],
    duration: '4:45',
    appropriateFor: ['grandparent', 'family'],
    url: '/audio/folk-4.mp3'
  },
  {
    id: 'folk-5',
    title: 'Campfire Songs',
    artist: 'Adventure Folk',
    genre: 'Campfire Folk',
    emotion: ['campfire', 'adventure', 'friendship'],
    duration: '3:35',
    appropriateFor: ['friend', 'family'],
    url: '/audio/folk-5.mp3'
  },

  // ADDITIONAL JAZZ (2)
  {
    id: 'jazz-3',
    title: 'Sophisticated Love',
    artist: 'Elegant Jazz',
    genre: 'Sophisticated Jazz',
    emotion: ['sophisticated', 'elegant', 'mature'],
    duration: '4:25',
    appropriateFor: ['lover', 'mature'],
    url: '/audio/jazz-3.mp3'
  },
  {
    id: 'jazz-4',
    title: 'Coffee Shop Romance',
    artist: 'Café Jazz',
    genre: 'Café Jazz',
    emotion: ['café', 'casual', 'romance'],
    duration: '3:50',
    appropriateFor: ['lover', 'casual'],
    url: '/audio/jazz-4.mp3'
  },

  // ADDITIONAL WORLD MUSIC (4)
  {
    id: 'world-3',
    title: 'Indian Raga Love',
    artist: 'Eastern Romance',
    genre: 'Indian Classical',
    emotion: ['eastern', 'raga', 'spiritual-love'],
    duration: '5:10',
    appropriateFor: ['all'],
    url: '/audio/world-3.mp3'
  },
  {
    id: 'world-4',
    title: 'African Sunset',
    artist: 'Tribal Harmony',
    genre: 'African Folk',
    emotion: ['african', 'sunset', 'tribal'],
    duration: '4:30',
    appropriateFor: ['all'],
    url: '/audio/world-4.mp3'
  },
  {
    id: 'world-5',
    title: 'Japanese Garden',
    artist: 'Zen Masters',
    genre: 'Japanese Traditional',
    emotion: ['zen', 'garden', 'peaceful'],
    duration: '4:15',
    appropriateFor: ['all'],
    url: '/audio/world-5.mp3'
  },
  {
    id: 'world-6',
    title: 'Latin Passion',
    artist: 'Fuego Latino',
    genre: 'Latin Romance',
    emotion: ['latin', 'passion', 'fire'],
    duration: '3:40',
    appropriateFor: ['lover', 'passionate'],
    url: '/audio/world-6.mp3'
  },

  // ADDITIONAL ELECTRONIC (2)
  {
    id: 'electronic-3',
    title: 'Future Love',
    artist: 'Cyber Romance',
    genre: 'Future Bass',
    emotion: ['future', 'cyber', 'modern-love'],
    duration: '3:55',
    appropriateFor: ['young-love', 'modern'],
    url: '/audio/electronic-3.mp3'
  },
  {
    id: 'electronic-4',
    title: 'Ambient Techno Love',
    artist: 'Electronic Hearts',
    genre: 'Ambient Techno',
    emotion: ['ambient', 'techno', 'electronic-love'],
    duration: '4:20',
    appropriateFor: ['modern', 'electronic'],
    url: '/audio/electronic-4.mp3'
  }
]