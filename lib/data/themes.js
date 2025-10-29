"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultThemes = void 0;
exports.defaultThemes = [
    // ROMANTIC THEMES (6)
    {
        name: 'Sunset Romance',
        description: 'Warm sunset colors with romantic vibes',
        category: 'romantic',
        backgrounds: ['/assets/themes/sunset-romance.jpg'],
        gradients: ['from-orange-400 to-pink-500'],
        colors: {
            primary: '#ff6b6b',
            secondary: '#ff8e53',
            accent: '#ff6b9d',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Inter'
        },
        emotions: ['love', 'passion', 'warmth'],
        mood: 'romantic',
        previewImage: '/assets/themes/sunset-romance.jpg',
        isActive: true
    },
    {
        name: 'Mystical Dreams',
        description: 'Dreamy purples and pinks for a magical feel',
        category: 'fantasy',
        backgrounds: ['/assets/themes/mystical-dreams.jpg'],
        gradients: ['from-purple-400 to-pink-500'],
        colors: {
            primary: '#ff9ff3',
            secondary: '#f368e0',
            accent: '#ff3838',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Quicksand'
        },
        emotions: ['dreamy', 'magical', 'enchanting'],
        mood: 'mystical',
        previewImage: '/assets/themes/mystical-dreams.jpg',
        isActive: true
    },
    {
        name: 'Midnight Cosmos',
        description: 'Deep blues and purples for a cosmic experience',
        category: 'cosmic',
        backgrounds: ['/assets/themes/midnight-cosmos.jpg'],
        gradients: ['from-blue-900 to-purple-900'],
        colors: {
            primary: '#2c2c54',
            secondary: '#40407a',
            accent: '#706fd3',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Space Grotesk',
            body: 'Inter'
        },
        emotions: ['mysterious', 'cosmic', 'deep'],
        mood: 'celestial',
        previewImage: '/assets/themes/midnight-cosmos.jpg',
        isActive: true
    },
    {
        name: 'Cherry Blossom',
        description: 'Soft pinks for a delicate spring feel',
        category: 'nature',
        backgrounds: ['/assets/themes/cherry-blossom.jpg'],
        gradients: ['from-pink-200 to-pink-400'],
        colors: {
            primary: '#ffb3d1',
            secondary: '#ff9ff3',
            accent: '#f368e0',
            text: '#4a4a4a'
        },
        fonts: {
            heading: 'Cormorant Garamond',
            body: 'Nunito'
        },
        emotions: ['gentle', 'joyful', 'peaceful'],
        mood: 'serene',
        previewImage: '/assets/themes/cherry-blossom.jpg',
        isActive: true
    },
    {
        name: 'Golden Hour',
        description: 'Warm golden light for magical moments',
        category: 'nature',
        backgrounds: ['/assets/themes/golden-hour.jpg'],
        gradients: ['from-yellow-500 to-orange-400'],
        colors: {
            primary: '#feca57',
            secondary: '#ff9ff3',
            accent: '#ff6348',
            text: '#2d3436'
        },
        fonts: {
            heading: 'Italiana',
            body: 'Source Sans Pro'
        },
        emotions: ['magic', 'warmth', 'golden'],
        mood: 'enchanting',
        previewImage: '/assets/themes/golden-hour.jpg',
        isActive: true
    },
    {
        name: 'Starry Night',
        description: 'Deep night sky with twinkling stars',
        category: 'cosmic',
        backgrounds: ['/assets/themes/starry-night.jpg'],
        gradients: ['from-blue-900 to-indigo-900'],
        colors: {
            primary: '#2f3542',
            secondary: '#57606f',
            accent: '#a4b0be',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Lato'
        },
        emotions: ['wonder', 'infinite', 'dreamy'],
        mood: 'mysterious',
        previewImage: '/assets/themes/starry-night.jpg',
        isActive: true
    },
    // NATURE THEMES (5)
    {
        name: 'Ocean Serenity',
        description: 'Calm blue tones for peaceful memories',
        category: 'nature',
        backgrounds: ['/assets/themes/ocean-serenity.jpg'],
        gradients: ['from-blue-400 to-cyan-300'],
        colors: {
            primary: '#4ecdc4',
            secondary: '#45b7d1',
            accent: '#96ceb4',
            text: '#2d3436'
        },
        fonts: {
            heading: 'Crimson Text',
            body: 'Work Sans'
        },
        emotions: ['peace', 'calm', 'serenity'],
        mood: 'tranquil',
        previewImage: '/assets/themes/ocean-serenity.jpg',
        isActive: true
    },
    {
        name: 'Forest Whisper',
        description: 'Deep greens and earth tones',
        category: 'nature',
        backgrounds: ['/assets/themes/forest-whisper.jpg'],
        gradients: ['from-green-700 to-green-500'],
        colors: {
            primary: '#27ae60',
            secondary: '#2ecc71',
            accent: '#58d68d',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Philosopher',
            body: 'Merriweather'
        },
        emotions: ['nature', 'growth', 'tranquility'],
        mood: 'peaceful',
        previewImage: '/assets/themes/forest-whisper.jpg',
        isActive: true
    },
    {
        name: 'Mountain Majesty',
        description: 'Majestic mountain landscapes',
        category: 'nature',
        backgrounds: ['/assets/themes/mountain-majesty.jpg'],
        gradients: ['from-gray-700 to-gray-900'],
        colors: {
            primary: '#34495e',
            secondary: '#5d6d7e',
            accent: '#85929e',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Fjalla One',
            body: 'Open Sans'
        },
        emotions: ['strength', 'majesty', 'adventure'],
        mood: 'powerful',
        previewImage: '/assets/themes/mountain-majesty.jpg',
        isActive: true
    },
    {
        name: 'Autumn Leaves',
        description: 'Warm autumn colors and falling leaves',
        category: 'nature',
        backgrounds: ['/assets/themes/autumn-leaves.jpg'],
        gradients: ['from-orange-600 to-yellow-500'],
        colors: {
            primary: '#e67e22',
            secondary: '#d35400',
            accent: '#f39c12',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Vollkorn',
            body: 'Source Serif Pro'
        },
        emotions: ['change', 'warmth', 'nostalgia'],
        mood: 'nostalgic',
        previewImage: '/assets/themes/autumn-leaves.jpg',
        isActive: true
    },
    {
        name: 'Spring Bloom',
        description: 'Fresh spring colors and blooming flowers',
        category: 'nature',
        backgrounds: ['/assets/themes/spring-bloom.jpg'],
        gradients: ['from-green-400 to-blue-300'],
        colors: {
            primary: '#2ecc71',
            secondary: '#58d68d',
            accent: '#85c1e9',
            text: '#2d3436'
        },
        fonts: {
            heading: 'Josefin Slab',
            body: 'Karla'
        },
        emotions: ['renewal', 'fresh', 'hope'],
        mood: 'refreshing',
        previewImage: '/assets/themes/spring-bloom.jpg',
        isActive: true
    },
    // WARM THEMES (4)
    {
        name: 'Golden Memories',
        description: 'Warm golden hues for cherished moments',
        category: 'warm',
        backgrounds: ['/assets/themes/golden-memories.jpg'],
        gradients: ['from-yellow-600 to-yellow-400'],
        colors: {
            primary: '#f7b731',
            secondary: '#fa8231',
            accent: '#f0932b',
            text: '#2d3436'
        },
        fonts: {
            heading: 'Cardo',
            body: 'Lora'
        },
        emotions: ['nostalgia', 'warmth', 'joy'],
        mood: 'nostalgic',
        previewImage: '/assets/themes/golden-memories.jpg',
        isActive: true
    },
    {
        name: 'Cozy Fireplace',
        description: 'Warm oranges and reds for comfort',
        category: 'warm',
        backgrounds: ['/assets/themes/cozy-fireplace.jpg'],
        gradients: ['from-red-500 to-orange-500'],
        colors: {
            primary: '#e55039',
            secondary: '#fa983a',
            accent: '#f8b500',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Amatic SC',
            body: 'Quattrocento'
        },
        emotions: ['comfort', 'cozy', 'home'],
        mood: 'cozy',
        previewImage: '/assets/themes/cozy-fireplace.jpg',
        isActive: true
    },
    {
        name: 'Summer Sunset',
        description: 'Vibrant summer evening colors',
        category: 'warm',
        backgrounds: ['/assets/themes/summer-sunset.jpg'],
        gradients: ['from-red-400 to-yellow-400'],
        colors: {
            primary: '#ff6348',
            secondary: '#ff7675',
            accent: '#fdcb6e',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Pacifico',
            body: 'Raleway'
        },
        emotions: ['vibrant', 'summer', 'joy'],
        mood: 'energetic',
        previewImage: '/assets/themes/summer-sunset.jpg',
        isActive: true
    },
    {
        name: 'Coffee Warmth',
        description: 'Rich browns and warm coffee tones',
        category: 'warm',
        backgrounds: ['/assets/themes/coffee-warmth.jpg'],
        gradients: ['from-yellow-900 to-yellow-700'],
        colors: {
            primary: '#8b4513',
            secondary: '#a0522d',
            accent: '#cd853f',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Rozha One',
            body: 'Martel'
        },
        emotions: ['comfort', 'rich', 'intimate'],
        mood: 'cozy',
        previewImage: '/assets/themes/coffee-warmth.jpg',
        isActive: true
    },
    // COOL THEMES (3)
    {
        name: 'Purple Dreams',
        description: 'Mystical purple gradients for deep connections',
        category: 'cool',
        backgrounds: ['/assets/themes/purple-dreams.jpg'],
        gradients: ['from-purple-600 to-blue-600'],
        colors: {
            primary: '#a55eea',
            secondary: '#8854d0',
            accent: '#3742fa',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Spectral',
            body: 'Alice'
        },
        emotions: ['mystery', 'deep', 'spiritual'],
        mood: 'mystical',
        previewImage: '/assets/themes/purple-dreams.jpg',
        isActive: true
    },
    {
        name: 'Arctic Aurora',
        description: 'Cool blues and greens like northern lights',
        category: 'cool',
        backgrounds: ['/assets/themes/arctic-aurora.jpg'],
        gradients: ['from-cyan-400 to-blue-500'],
        colors: {
            primary: '#00d2d3',
            secondary: '#01a3a4',
            accent: '#2c2c54',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Julius Sans One',
            body: 'Assistant'
        },
        emotions: ['wonder', 'magical', 'ethereal'],
        mood: 'ethereal',
        previewImage: '/assets/themes/arctic-aurora.jpg',
        isActive: true
    },
    {
        name: 'Silver Moonlight',
        description: 'Elegant silver and blue moonlit theme',
        category: 'cool',
        backgrounds: ['/assets/themes/silver-moonlight.jpg'],
        gradients: ['from-gray-300 to-blue-gray-400'],
        colors: {
            primary: '#c0c0c0',
            secondary: '#778ca3',
            accent: '#4b6584',
            text: '#2d3436'
        },
        fonts: {
            heading: 'Cormorant',
            body: 'Montserrat'
        },
        emotions: ['elegant', 'peaceful', 'serene'],
        mood: 'elegant',
        previewImage: '/assets/themes/silver-moonlight.jpg',
        isActive: true
    },
    // MODERN THEMES (2)
    {
        name: 'Neon Nights',
        description: 'Vibrant neon colors for modern love',
        category: 'modern',
        backgrounds: ['/assets/themes/neon-nights.jpg'],
        gradients: ['from-pink-600 to-blue-600'],
        colors: {
            primary: '#ff006e',
            secondary: '#8338ec',
            accent: '#3a86ff',
            text: '#ffffff'
        },
        fonts: {
            heading: 'Audiowide',
            body: 'Space Grotesk'
        },
        emotions: ['modern', 'electric', 'vibrant'],
        mood: 'energetic',
        previewImage: '/assets/themes/neon-nights.jpg',
        isActive: true
    },
    {
        name: 'Minimalist Zen',
        description: 'Clean whites and soft grays',
        category: 'modern',
        backgrounds: ['/assets/themes/minimalist-zen.jpg'],
        gradients: ['from-white to-gray-200'],
        colors: {
            primary: '#ffffff',
            secondary: '#f8f9fa',
            accent: '#e9ecef',
            text: '#222f3e'
        },
        fonts: {
            heading: 'Roboto',
            body: 'Open Sans'
        },
        emotions: ['clean', 'peaceful', 'minimal'],
        mood: 'minimal',
        previewImage: '/assets/themes/minimalist-zen.jpg',
        isActive: true
    }
];
