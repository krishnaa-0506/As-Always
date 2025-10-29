const defaultTemplates = [
  // Romantic Templates (10)
  {
    name: 'Romantic Classic',
    description: 'Elegant and timeless romantic design',
    category: 'romantic',
    suitableFor: ['lover', 'spouse', 'partner'],
    previewImages: ['/templates/romantic-classic.jpg'],
    layouts: [{ id: 'center', name: 'Centered Layout' }],
    animations: ['fadeIn', 'heartBeat', 'slideUp'],
    colorSchemes: ['pink-rose', 'red-pink']
  },
  {
    name: 'Modern Love',
    description: 'Contemporary romantic expression',
    category: 'romantic',
    suitableFor: ['lover', 'spouse', 'partner'],
    previewImages: ['/templates/modern-love.jpg'],
    layouts: [{ id: 'modern', name: 'Modern Layout' }],
    animations: ['slideIn', 'fade', 'modern'],
    colorSchemes: ['blue-pink', 'purple-pink']
  },
  {
    name: 'Passionate Hearts',
    description: 'Bold and passionate love design',
    category: 'romantic',
    suitableFor: ['lover', 'spouse'],
    previewImages: ['/templates/passionate-hearts.jpg'],
    layouts: [{ id: 'hearts', name: 'Hearts Layout' }],
    animations: ['pulse', 'float', 'glow'],
    colorSchemes: ['red-pink', 'purple-red']
  },
  {
    name: 'Sweet Romance',
    description: 'Soft and sweet romantic theme',
    category: 'romantic',
    suitableFor: ['lover', 'spouse'],
    previewImages: ['/templates/sweet-romance.jpg'],
    layouts: [{ id: 'sweet', name: 'Sweet Layout' }],
    animations: ['gentle', 'float', 'sparkle'],
    colorSchemes: ['pink-purple', 'rose-gold']
  },
  {
    name: 'Eternal Love',
    description: 'Timeless love expression',
    category: 'romantic',
    suitableFor: ['lover', 'spouse'],
    previewImages: ['/templates/eternal-love.jpg'],
    layouts: [{ id: 'eternal', name: 'Eternal Layout' }],
    animations: ['infinity', 'fade', 'glow'],
    colorSchemes: ['gold-red', 'silver-blue']
  },
  
  // Family Templates (5)
  {
    name: 'Family Warmth',
    description: 'Warm and cozy family design',
    category: 'family',
    suitableFor: ['family', 'parent', 'child'],
    previewImages: ['/templates/family-warmth.jpg'],
    layouts: [{ id: 'family', name: 'Family Layout' }],
    animations: ['warm', 'gentle', 'rise'],
    colorSchemes: ['orange-yellow', 'brown-gold']
  },
  {
    name: 'Family Tree',
    description: 'Connected family memories',
    category: 'family',
    suitableFor: ['family', 'parent', 'child'],
    previewImages: ['/templates/family-tree.jpg'],
    layouts: [{ id: 'tree', name: 'Tree Layout' }],
    animations: ['grow', 'branch', 'leaf'],
    colorSchemes: ['green-brown', 'earth-tones']
  },
  {
    name: 'Parent Love',
    description: 'Parental love and care theme',
    category: 'family',
    suitableFor: ['parent', 'child'],
    previewImages: ['/templates/parent-love.jpg'],
    layouts: [{ id: 'care', name: 'Care Layout' }],
    animations: ['nurture', 'grow', 'protect'],
    colorSchemes: ['blue-green', 'soft-yellow']
  },
  
  // Special Occasions (5)
  {
    name: 'Birthday Joy',
    description: 'Celebratory birthday theme',
    category: 'celebration',
    suitableFor: ['all'],
    previewImages: ['/templates/birthday-joy.jpg'],
    layouts: [{ id: 'party', name: 'Party Layout' }],
    animations: ['confetti', 'pop', 'shine'],
    colorSchemes: ['rainbow', 'party-colors']
  },
  {
    name: 'Anniversary Gold',
    description: 'Elegant anniversary celebration',
    category: 'celebration',
    suitableFor: ['spouse', 'partner'],
    previewImages: ['/templates/anniversary-gold.jpg'],
    layouts: [{ id: 'elegant', name: 'Elegant Layout' }],
    animations: ['shine', 'sparkle', 'glow'],
    colorSchemes: ['gold-white', 'silver-gold']
  },
  
  // Modern Templates (5)
  {
    name: 'Minimalist Modern',
    description: 'Clean and contemporary design',
    category: 'modern',
    suitableFor: ['all'],
    previewImages: ['/templates/minimalist-modern.jpg'],
    layouts: [{ id: 'minimal', name: 'Minimal Layout' }],
    animations: ['slide', 'fade', 'clean'],
    colorSchemes: ['monochrome', 'grayscale']
  },
  {
    name: 'Urban Style',
    description: 'Contemporary urban aesthetics',
    category: 'modern',
    suitableFor: ['all'],
    previewImages: ['/templates/urban-style.jpg'],
    layouts: [{ id: 'urban', name: 'Urban Layout' }],
    animations: ['street', 'flow', 'pulse'],
    colorSchemes: ['city-night', 'urban-day']
  }
];

const defaultThemes = [
  // Romantic Themes (10)
  {
    name: 'Sunset Romance',
    description: 'Warm sunset colors with romantic vibes',
    category: 'romantic',
    backgrounds: ['from-orange-400 to-pink-500'],
    gradients: ['sunset'],
    colors: {
      primary: '#ff6b6b',
      secondary: '#ffa726',
      accent: '#ff8a80',
      text: '#ffffff'
    },
    emotions: ['love', 'romance', 'warmth'],
    mood: 'romantic',
    previewImage: '/themes/sunset-romance.jpg'
  },
  {
    name: 'Moonlight Serenade',
    description: 'Dreamy nighttime theme with stars',
    category: 'romantic',
    backgrounds: ['from-indigo-900 to-purple-800'],
    gradients: ['night'],
    colors: {
      primary: '#3949ab',
      secondary: '#7e57c2',
      accent: '#b39ddb',
      text: '#ffffff'
    },
    emotions: ['dreamy', 'romantic', 'peaceful'],
    mood: 'dreamy',
    previewImage: '/themes/moonlight-serenade.jpg'
  },
  {
    name: 'Rose Garden',
    description: 'Romantic theme with rose motifs',
    category: 'romantic',
    backgrounds: ['from-pink-400 to-red-500'],
    gradients: ['rose'],
    colors: {
      primary: '#e91e63',
      secondary: '#ff4081',
      accent: '#ff80ab',
      text: '#ffffff'
    },
    emotions: ['love', 'passion', 'beauty'],
    mood: 'romantic',
    previewImage: '/themes/rose-garden.jpg'
  },
  
  // Modern Themes (5)
  {
    name: 'Modern Minimal',
    description: 'Clean and modern design',
    category: 'modern',
    backgrounds: ['from-gray-900 to-gray-800'],
    gradients: ['minimal'],
    colors: {
      primary: '#212121',
      secondary: '#424242',
      accent: '#ff4081',
      text: '#ffffff'
    },
    emotions: ['clean', 'modern', 'minimal'],
    mood: 'modern',
    previewImage: '/themes/modern-minimal.jpg'
  },
  {
    name: 'Urban Edge',
    description: 'Contemporary urban style',
    category: 'modern',
    backgrounds: ['from-slate-800 to-zinc-900'],
    gradients: ['urban'],
    colors: {
      primary: '#37474f',
      secondary: '#546e7a',
      accent: '#90a4ae',
      text: '#ffffff'
    },
    emotions: ['urban', 'cool', 'edgy'],
    mood: 'urban',
    previewImage: '/themes/urban-edge.jpg'
  },
  
  // Nature Themes (5)
  {
    name: 'Forest Dreams',
    description: 'Peaceful forest-inspired theme',
    category: 'nature',
    backgrounds: ['from-green-700 to-green-900'],
    gradients: ['forest'],
    colors: {
      primary: '#2e7d32',
      secondary: '#388e3c',
      accent: '#81c784',
      text: '#ffffff'
    },
    emotions: ['peaceful', 'natural', 'serene'],
    mood: 'peaceful',
    previewImage: '/themes/forest-dreams.jpg'
  },
  {
    name: 'Ocean Waves',
    description: 'Calming ocean-inspired theme',
    category: 'nature',
    backgrounds: ['from-blue-400 to-cyan-600'],
    gradients: ['ocean'],
    colors: {
      primary: '#0288d1',
      secondary: '#03a9f4',
      accent: '#4fc3f7',
      text: '#ffffff'
    },
    emotions: ['calm', 'peaceful', 'serene'],
    mood: 'calm',
    previewImage: '/themes/ocean-waves.jpg'
  },
  
  // Classic Themes (5)
  {
    name: 'Vintage Charm',
    description: 'Classic vintage-inspired design',
    category: 'classic',
    backgrounds: ['from-amber-700 to-amber-900'],
    gradients: ['vintage'],
    colors: {
      primary: '#8d6e63',
      secondary: '#a1887f',
      accent: '#d7ccc8',
      text: '#ffffff'
    },
    emotions: ['nostalgic', 'classic', 'timeless'],
    mood: 'nostalgic',
    previewImage: '/themes/vintage-charm.jpg'
  },
  {
    name: 'Royal Elegance',
    description: 'Elegant and regal theme',
    category: 'classic',
    backgrounds: ['from-purple-900 to-indigo-900'],
    gradients: ['royal'],
    colors: {
      primary: '#4a148c',
      secondary: '#6a1b9a',
      accent: '#ce93d8',
      text: '#ffffff'
    },
    emotions: ['elegant', 'royal', 'sophisticated'],
    mood: 'elegant',
    previewImage: '/themes/royal-elegance.jpg'
  },
  
  // Celebration Themes (5)
  {
    name: 'Golden Jubilee',
    description: 'Luxurious celebration theme',
    category: 'celebration',
    backgrounds: ['from-yellow-600 to-amber-500'],
    gradients: ['golden'],
    colors: {
      primary: '#ffd700',
      secondary: '#daa520',
      accent: '#f0e68c',
      text: '#000000'
    },
    emotions: ['joyful', 'celebratory', 'festive'],
    mood: 'celebratory',
    previewImage: '/themes/golden-jubilee.jpg'
  },
  {
    name: 'Party Pop',
    description: 'Fun and vibrant celebration theme',
    category: 'celebration',
    backgrounds: ['from-pink-500 to-purple-500'],
    gradients: ['party'],
    colors: {
      primary: '#e91e63',
      secondary: '#9c27b0',
      accent: '#ce93d8',
      text: '#ffffff'
    },
    emotions: ['fun', 'energetic', 'lively'],
    mood: 'party',
    previewImage: '/themes/party-pop.jpg'
  }
];

module.exports = {
  defaultTemplates,
  defaultThemes
};
