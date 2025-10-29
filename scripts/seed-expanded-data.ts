// This script will seed 30 templates and 30 themes
import { dbService } from '../lib/db/mongodb';

const templates = [
  // Love & Romance (6)
  {
    name: 'Romantic Sunset',
    description: 'A dreamy sunset-themed template for expressing deep love',
    category: 'romantic',
    suitableFor: ['lover', 'spouse'],
    layouts: [{ name: 'Classic', type: 'centered' }],
    animations: ['fadeIn', 'heartBeat'],
    colorSchemes: ['sunset', 'romance'],
    isActive: true
  },
  {
    name: 'Eternal Love',
    description: 'Timeless template for expressing everlasting love',
    category: 'romantic',
    suitableFor: ['lover', 'spouse'],
    layouts: [{ name: 'Modern', type: 'grid' }],
    animations: ['float', 'gentle'],
    colorSchemes: ['deep-love', 'passion'],
    isActive: true
  },
  
  // Family (6)
  {
    name: 'Family Bonds',
    description: 'Celebrate the special bond between family members',
    category: 'family',
    suitableFor: ['family', 'mom', 'dad', 'sibling'],
    layouts: [{ name: 'Family', type: 'mosaic' }],
    animations: ['warmFade', 'gentle'],
    colorSchemes: ['warm', 'family'],
    isActive: true
  },
  
  // Friendship (6)
  {
    name: 'Friendship Forever',
    description: 'Celebrate lasting friendships',
    category: 'friendship',
    suitableFor: ['friend', 'bestfriend'],
    layouts: [{ name: 'Fun', type: 'dynamic' }],
    animations: ['bounce', 'playful'],
    colorSchemes: ['friendship', 'joy'],
    isActive: true
  },
  
  // Celebration (6)
  {
    name: 'Birthday Joy',
    description: 'Make birthdays extra special',
    category: 'celebration',
    suitableFor: ['all'],
    layouts: [{ name: 'Party', type: 'confetti' }],
    animations: ['party', 'bounce'],
    colorSchemes: ['celebration', 'fun'],
    isActive: true
  },
  
  // Special Occasions (6)
  {
    name: 'Wedding Bliss',
    description: 'Celebrate marriage and commitment',
    category: 'wedding',
    suitableFor: ['spouse', 'lover'],
    layouts: [{ name: 'Elegant', type: 'formal' }],
    animations: ['elegant', 'romantic'],
    colorSchemes: ['wedding', 'love'],
    isActive: true
  }
  // ... Add more templates to reach 30
];

const themes = [
  // Romantic (6)
  {
    name: 'Sunset Romance',
    description: 'Warm sunset colors for romantic messages',
    category: 'romantic',
    gradients: ['from-orange-400 to-pink-500'],
    colors: {
      primary: '#FF6B6B',
      secondary: '#FFA726',
      accent: '#FF8A80',
      text: '#FFFFFF'
    },
    emotions: ['love', 'romance', 'passion'],
    isActive: true
  },
  {
    name: 'Deep Love',
    description: 'Deep, rich colors for intense emotions',
    category: 'romantic',
    gradients: ['from-red-600 to-purple-600'],
    colors: {
      primary: '#DC2626',
      secondary: '#7C3AED',
      accent: '#F87171',
      text: '#FFFFFF'
    },
    emotions: ['love', 'passion', 'devotion'],
    isActive: true
  },
  
  // Nature (6)
  {
    name: 'Ocean Serenity',
    description: 'Calming ocean blues',
    category: 'nature',
    gradients: ['from-blue-400 to-cyan-300'],
    colors: {
      primary: '#60A5FA',
      secondary: '#67E8F9',
      accent: '#93C5FD',
      text: '#FFFFFF'
    },
    emotions: ['peace', 'calm', 'serenity'],
    isActive: true
  },
  
  // Modern (6)
  {
    name: 'Modern Minimal',
    description: 'Clean, modern aesthetic',
    category: 'modern',
    gradients: ['from-gray-900 to-gray-800'],
    colors: {
      primary: '#111827',
      secondary: '#374151',
      accent: '#6B7280',
      text: '#FFFFFF'
    },
    emotions: ['sophisticated', 'clean', 'modern'],
    isActive: true
  },
  
  // Celebration (6)
  {
    name: 'Party Vibes',
    description: 'Vibrant celebration colors',
    category: 'celebration',
    gradients: ['from-yellow-400 to-purple-500'],
    colors: {
      primary: '#FBBF24',
      secondary: '#8B5CF6',
      accent: '#F59E0B',
      text: '#FFFFFF'
    },
    emotions: ['joy', 'excitement', 'celebration'],
    isActive: true
  },
  
  // Classic (6)
  {
    name: 'Timeless Elegance',
    description: 'Classic and elegant',
    category: 'classic',
    gradients: ['from-gray-700 to-gray-900'],
    colors: {
      primary: '#1F2937',
      secondary: '#4B5563',
      accent: '#9CA3AF',
      text: '#FFFFFF'
    },
    emotions: ['elegant', 'timeless', 'sophisticated'],
    isActive: true
  }
  // ... Add more themes to reach 30
];

async function seedTemplatesAndThemes() {
  try {
    // Clear existing data first
    console.log('Clearing existing templates and themes...');
    await Promise.all([
      dbService.clearTemplates(),
      dbService.clearThemes()
    ]);

    console.log('Adding new templates...');
    for (const template of templates) {
      await dbService.createTemplate(template);
    }

    console.log('Adding new themes...');
    for (const theme of themes) {
      await dbService.createTheme(theme);
    }

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

// Run the seeding
seedTemplatesAndThemes();
