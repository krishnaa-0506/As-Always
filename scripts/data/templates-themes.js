// Export template and theme data for use in other scripts
function getDefaultTemplates() {
  return [
    // Romantic Templates (10)
    {
      id: 'romantic-sunset',
      name: 'Romantic Sunset',
      category: 'romantic',
      description: 'A beautiful sunset-themed template for expressing love',
      previewImage: '/assets/templates/romantic-sunset.jpg',
      layouts: [{ name: 'Default', type: 'centered' }]
    },
    {
      id: 'love-letters',
      name: 'Love Letters',
      category: 'romantic',
      description: 'Classic love letter style with elegant typography',
      previewImage: '/assets/templates/love-letters.jpg',
      layouts: [{ name: 'Letter', type: 'paper' }]
    },
    {
      id: 'heart-collage',
      name: 'Heart Collage',
      category: 'romantic',
      description: 'Heart-shaped photo collage with romantic elements',
      previewImage: '/assets/templates/heart-collage.jpg',
      layouts: [{ name: 'Collage', type: 'grid' }]
    },
    {
      id: 'eternal-love',
      name: 'Eternal Love',
      category: 'romantic',
      description: 'Express timeless and eternal love',
      previewImage: '/assets/templates/eternal-love.jpg',
      layouts: [{ name: 'Timeless', type: 'elegant' }]
    },
    {
      id: 'love-story',
      name: 'Love Story',
      category: 'romantic',
      description: 'Tell your unique love story',
      previewImage: '/assets/templates/love-story.jpg',
      layouts: [{ name: 'Story', type: 'narrative' }]
    },
    {
      id: 'romantic-memories',
      name: 'Romantic Memories',
      category: 'romantic',
      description: 'Share your most cherished romantic moments',
      previewImage: '/assets/templates/romantic-memories.jpg',
      layouts: [{ name: 'Memory', type: 'collage' }]
    },
    // Anniversary Templates (5)
    {
      id: 'golden-anniversary',
      name: 'Golden Anniversary',
      category: 'anniversary',
      description: 'Elegant golden theme for celebrating anniversaries',
      previewImage: '/assets/templates/golden-anniversary.jpg',
      layouts: [{ name: 'Celebration', type: 'formal' }]
    },
    {
      id: 'years-together',
      name: 'Years Together',
      category: 'anniversary',
      description: 'Timeline of memories and milestones',
      previewImage: '/assets/templates/years-together.jpg',
      layouts: [{ name: 'Timeline', type: 'horizontal' }]
    },
    {
      id: 'silver-anniversary',
      name: 'Silver Anniversary',
      category: 'anniversary',
      description: 'Celebrate 25 years of love and commitment',
      previewImage: '/assets/templates/silver-anniversary.jpg',
      layouts: [{ name: 'Silver', type: 'formal' }]
    },
    {
      id: 'anniversary-journey',
      name: 'Anniversary Journey',
      category: 'anniversary',
      description: 'Celebrate the journey of love',
      previewImage: '/assets/templates/anniversary-journey.jpg',
      layouts: [{ name: 'Journey', type: 'timeline' }]
    },
    // Birthday Templates (5)
    {
      id: 'birthday-celebration',
      name: 'Birthday Celebration',
      category: 'birthday',
      description: 'Vibrant birthday celebration theme',
      previewImage: '/assets/templates/birthday-celebration.jpg',
      layouts: [{ name: 'Party', type: 'festive' }]
    },
    {
      id: 'age-milestone',
      name: 'Age Milestone',
      category: 'birthday',
      description: 'Special milestone birthday celebration',
      previewImage: '/assets/templates/age-milestone.jpg',
      layouts: [{ name: 'Milestone', type: 'special' }]
    },
    {
      id: 'birthday-wishes',
      name: 'Birthday Wishes',
      category: 'birthday',
      description: 'Send heartfelt birthday wishes',
      previewImage: '/assets/templates/birthday-wishes.jpg',
      layouts: [{ name: 'Wishes', type: 'fun' }]
    },
    {
      id: 'surprise-birthday',
      name: 'Surprise Birthday',
      category: 'birthday',
      description: 'Create a surprising birthday message',
      previewImage: '/assets/templates/surprise-birthday.jpg',
      layouts: [{ name: 'Surprise', type: 'playful' }]
    },
    // Family Templates (5)
    {
      id: 'family-ties',
      name: 'Family Ties',
      category: 'family',
      description: 'Celebrate family bonds and connections',
      previewImage: '/assets/templates/family-ties.jpg',
      layouts: [{ name: 'Bonds', type: 'warm' }]
    },
    {
      id: 'family-memories',
      name: 'Family Memories',
      category: 'family',
      description: 'Share cherished family memories',
      previewImage: '/assets/templates/family-memories.jpg',
      layouts: [{ name: 'Memories', type: 'photo-grid' }]
    },
    // Celebration Templates (5)
    {
      id: 'milestone-moments',
      name: 'Milestone Moments',
      category: 'celebration',
      description: 'Celebrate life\'s important milestones',
      previewImage: '/assets/templates/milestone-moments.jpg',
      layouts: [{ name: 'Milestone', type: 'formal' }]
    },
    {
      id: 'congratulations',
      name: 'Congratulations',
      category: 'celebration',
      description: 'Share in the joy of achievements',
      previewImage: '/assets/templates/congratulations.jpg',
      layouts: [{ name: 'Success', type: 'celebration' }]
    },
    // Seasonal Templates (5)
    {
      id: 'spring-blossoms',
      name: 'Spring Blossoms',
      category: 'seasonal',
      description: 'Celebrate spring and new beginnings',
      previewImage: '/assets/templates/spring-blossoms.jpg',
      layouts: [{ name: 'Spring', type: 'natural' }]
    },
    {
      id: 'summer-memories',
      name: 'Summer Memories',
      category: 'seasonal',
      description: 'Capture summer moments and adventures',
      previewImage: '/assets/templates/summer-memories.jpg',
      layouts: [{ name: 'Summer', type: 'bright' }]
    },
    // Special Occasion Templates (5)
    {
      id: 'wedding-day',
      name: 'Wedding Day',
      category: 'special',
      description: 'Celebrate the perfect wedding day',
      previewImage: '/assets/templates/wedding-day.jpg',
      layouts: [{ name: 'Wedding', type: 'elegant' }]
    },
    {
      id: 'graduation-joy',
      name: 'Graduation Joy',
      category: 'special',
      description: 'Celebrate academic achievements',
      previewImage: '/assets/templates/graduation-joy.jpg',
      layouts: [{ name: 'Graduate', type: 'formal' }]
    },
    // Motivation Templates (5)
    {
      id: 'inspiration',
      name: 'Inspiration',
      category: 'motivation',
      description: 'Share inspiring messages and thoughts',
      previewImage: '/assets/templates/inspiration.jpg',
      layouts: [{ name: 'Inspire', type: 'quote' }]
    },
    {
      id: 'dream-big',
      name: 'Dream Big',
      category: 'motivation',
      description: 'Encourage and inspire dreams',
      previewImage: '/assets/templates/dream-big.jpg',
      layouts: [{ name: 'Dreams', type: 'motivational' }]
    },
    // Modern Templates (5)
    {
      id: 'modern-minimalist',
      name: 'Modern Minimalist',
      category: 'modern',
      description: 'Clean and contemporary design',
      previewImage: '/assets/templates/modern-minimalist.jpg',
      layouts: [{ name: 'Minimal', type: 'clean' }]
    },
    {
      id: 'urban-style',
      name: 'Urban Style',
      category: 'modern',
      description: 'Contemporary urban aesthetics',
      previewImage: '/assets/templates/urban-style.jpg',
      layouts: [{ name: 'Urban', type: 'contemporary' }]
    },
    // Classic Templates (5)
    {
      id: 'timeless-elegance',
      name: 'Timeless Elegance',
      category: 'classic',
      description: 'Traditional and elegant design',
      previewImage: '/assets/templates/timeless-elegance.jpg',
      layouts: [{ name: 'Classic', type: 'traditional' }]
    },
    {
      id: 'vintage-grace',
      name: 'Vintage Grace',
      category: 'classic',
      description: 'Graceful vintage-inspired design',
      previewImage: '/assets/templates/vintage-grace.jpg',
      layouts: [{ name: 'Vintage', type: 'retro' }]
    },
    // Nature Templates (5)
    {
      id: 'garden-serenity',
      name: 'Garden Serenity',
      category: 'nature',
      description: 'Peaceful garden-themed design',
      previewImage: '/assets/templates/garden-serenity.jpg',
      layouts: [{ name: 'Garden', type: 'natural' }]
    },
    {
      id: 'mountain-majesty',
      name: 'Mountain Majesty',
      category: 'nature',
      description: 'Majestic mountain-inspired design',
      previewImage: '/assets/templates/mountain-majesty.jpg',
      layouts: [{ name: 'Mountain', type: 'scenic' }]
    }
  ];
}

function getDefaultThemes() {
  return [
    // Romance Themes (10)
    {
      id: 'sunset-romance',
      name: 'Sunset Romance',
      category: 'romantic',
      description: 'Warm sunset colors perfect for romantic messages',
      previewImage: '/assets/themes/sunset-romance.jpg',
      gradients: ['from-orange-400 to-pink-500'],
      colors: {
        primary: '#FF6B6B',
        secondary: '#FFA726',
        accent: '#FF8A80',
        text: '#FFFFFF'
      }
    },
    {
      id: 'moonlight-serenade',
      name: 'Moonlight Serenade',
      category: 'romantic',
      description: 'Dreamy nighttime theme with stars',
      previewImage: '/assets/themes/moonlight-serenade.jpg',
      gradients: ['from-indigo-900 to-purple-800'],
      colors: {
        primary: '#3949AB',
        secondary: '#7E57C2',
        accent: '#B388FF',
        text: '#FFFFFF'
      }
    },
    {
      id: 'rose-garden',
      name: 'Rose Garden',
      category: 'romantic',
      description: 'Romantic theme with rose motifs',
      previewImage: '/assets/themes/rose-garden.jpg',
      gradients: ['from-pink-400 to-red-500'],
      colors: {
        primary: '#E91E63',
        secondary: '#FF4081',
        accent: '#FF80AB',
        text: '#FFFFFF'
      }
    },
    {
      id: 'starlight-romance',
      name: 'Starlight Romance',
      category: 'romantic',
      description: 'Romantic theme with starry night elements',
      previewImage: '/assets/themes/starlight-romance.jpg',
      gradients: ['from-indigo-800 to-purple-900'],
      colors: {
        primary: '#311B92',
        secondary: '#512DA8',
        accent: '#D1C4E9',
        text: '#FFFFFF'
      }
    },
    // Modern Themes (5)
    {
      id: 'minimal-modern',
      name: 'Minimal Modern',
      category: 'modern',
      description: 'Clean, minimalist design with bold accents',
      previewImage: '/assets/themes/minimal-modern.jpg',
      gradients: ['from-gray-900 to-gray-800'],
      colors: {
        primary: '#212121',
        secondary: '#757575',
        accent: '#FF4081',
        text: '#FFFFFF'
      }
    },
    {
      id: 'urban-minimalist',
      name: 'Urban Minimalist',
      category: 'modern',
      description: 'Clean, modern design with urban elements',
      previewImage: '/assets/themes/urban-minimalist.jpg',
      gradients: ['from-gray-800 to-gray-900'],
      colors: {
        primary: '#424242',
        secondary: '#616161',
        accent: '#90A4AE',
        text: '#FFFFFF'
      }
    },
    {
      id: 'tech-modern',
      name: 'Tech Modern',
      category: 'modern',
      description: 'Modern theme with tech-inspired elements',
      previewImage: '/assets/themes/tech-modern.jpg',
      gradients: ['from-blue-900 to-gray-900'],
      colors: {
        primary: '#0D47A1',
        secondary: '#1976D2',
        accent: '#82B1FF',
        text: '#FFFFFF'
      }
    },
    // Nature Themes (5)
    {
      id: 'spring-bloom',
      name: 'Spring Bloom',
      category: 'nature',
      description: 'Fresh spring colors with floral accents',
      previewImage: '/assets/themes/spring-bloom.jpg',
      gradients: ['from-green-400 to-pink-300'],
      colors: {
        primary: '#4CAF50',
        secondary: '#FF9E80',
        accent: '#E1BEE7',
        text: '#000000'
      }
    },
    {
      id: 'forest-serenity',
      name: 'Forest Serenity',
      category: 'nature',
      description: 'Peaceful forest-inspired theme',
      previewImage: '/assets/themes/forest-serenity.jpg',
      gradients: ['from-green-700 to-green-900'],
      colors: {
        primary: '#2E7D32',
        secondary: '#388E3C',
        accent: '#A5D6A7',
        text: '#FFFFFF'
      }
    },
    {
      id: 'ocean-breeze',
      name: 'Ocean Breeze',
      category: 'nature',
      description: 'Refreshing ocean-inspired theme',
      previewImage: '/assets/themes/ocean-breeze.jpg',
      gradients: ['from-cyan-500 to-blue-600'],
      colors: {
        primary: '#0097A7',
        secondary: '#00ACC1',
        accent: '#80DEEA',
        text: '#FFFFFF'
      }
    },
    // Classic Themes (5)
    {
      id: 'vintage-charm',
      name: 'Vintage Charm',
      category: 'classic',
      description: 'Timeless vintage design with classic elements',
      previewImage: '/assets/themes/vintage-charm.jpg',
      gradients: ['from-amber-700 to-amber-500'],
      colors: {
        primary: '#8D6E63',
        secondary: '#A1887F',
        accent: '#D7CCC8',
        text: '#FFFFFF'
      }
    },
    {
      id: 'royal-elegance',
      name: 'Royal Elegance',
      category: 'classic',
      description: 'Elegant theme with royal elements',
      previewImage: '/assets/themes/royal-elegance.jpg',
      gradients: ['from-purple-900 to-indigo-900'],
      colors: {
        primary: '#4A148C',
        secondary: '#6A1B9A',
        accent: '#CE93D8',
        text: '#FFFFFF'
      }
    },
    {
      id: 'timeless-grace',
      name: 'Timeless Grace',
      category: 'classic',
      description: 'Graceful and timeless design',
      previewImage: '/assets/themes/timeless-grace.jpg',
      gradients: ['from-gray-700 to-gray-800'],
      colors: {
        primary: '#455A64',
        secondary: '#607D8B',
        accent: '#B0BEC5',
        text: '#FFFFFF'
      }
    },
    // Celebration Themes (5)
    {
      id: 'golden-jubilee',
      name: 'Golden Jubilee',
      category: 'celebration',
      description: 'Luxurious gold and cream celebration theme',
      previewImage: '/assets/themes/golden-jubilee.jpg',
      gradients: ['from-yellow-600 to-yellow-300'],
      colors: {
        primary: '#FFD700',
        secondary: '#DAA520',
        accent: '#F0E68C',
        text: '#000000'
      }
    },
    {
      id: 'festive-joy',
      name: 'Festive Joy',
      category: 'celebration',
      description: 'Bright and joyful celebration theme',
      previewImage: '/assets/themes/festive-joy.jpg',
      gradients: ['from-yellow-500 to-orange-500'],
      colors: {
        primary: '#F9A825',
        secondary: '#FFB300',
        accent: '#FFE082',
        text: '#000000'
      }
    },
    {
      id: 'celebration-sparkle',
      name: 'Celebration Sparkle',
      category: 'celebration',
      description: 'Sparkling celebration theme',
      previewImage: '/assets/themes/celebration-sparkle.jpg',
      gradients: ['from-purple-500 to-pink-500'],
      colors: {
        primary: '#8E24AA',
        secondary: '#AB47BC',
        accent: '#E1BEE7',
        text: '#FFFFFF'
      }
    }
  ];
}

module.exports = {
  getDefaultTemplates,
  getDefaultThemes
};
