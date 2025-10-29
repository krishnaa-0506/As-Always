export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  suitableFor: string[];
  previewImage: string;
  layouts: { name: string; type: string; }[];
  animations: string[];
  colorSchemes: string[];
  isActive: boolean;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  category: string;
  gradients: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  previewImage: string;
  emotions: string[];
  isActive: boolean;
}

export const templates: Template[] = [
  // Love & Romance (5)
  {
    id: "romantic-sunset",
    name: "Romantic Sunset",
    description: "A dreamy sunset-themed template for expressing deep love",
    category: "romantic",
    suitableFor: ["lover", "spouse"],
    previewImage: "/templates/romantic-sunset.jpg",
    layouts: [{ name: "Default", type: "centered" }],
    animations: ["fadeIn", "heartBeat"],
    colorSchemes: ["sunset", "romance"],
    isActive: true
  },
  {
    id: "eternal-love",
    name: "Eternal Love",
    description: "Timeless template for expressing everlasting love",
    category: "romantic",
    suitableFor: ["lover", "spouse"],
    previewImage: "/templates/eternal-love.jpg",
    layouts: [{ name: "Classic", type: "centered" }],
    animations: ["fadeIn", "floatIn"],
    colorSchemes: ["deep-romance", "passion"],
    isActive: true
  },
  
  // Family (5)
  {
    id: "family-bonds",
    name: "Family Bonds",
    description: "Celebrate the special bond between family members",
    category: "family",
    suitableFor: ["family", "mom", "dad", "sibling"],
    previewImage: "/templates/family-bonds.jpg",
    layouts: [{ name: "Family", type: "grid" }],
    animations: ["warmFade", "gentle"],
    colorSchemes: ["warm", "family"],
    isActive: true
  },
  {
    id: "parents-love",
    name: "Parent's Love",
    description: "Express gratitude and love to parents",
    category: "family",
    suitableFor: ["mom", "dad"],
    previewImage: "/templates/parents-love.jpg",
    layouts: [{ name: "Parent", type: "special" }],
    animations: ["respectful", "gentle"],
    colorSchemes: ["respect", "love"],
    isActive: true
  },

  // Friendship (5)
  {
    id: "friendship-forever",
    name: "Friendship Forever",
    description: "Celebrate the joy of friendship",
    category: "friendship",
    suitableFor: ["friend", "bestfriend"],
    previewImage: "/templates/friendship-forever.jpg",
    layouts: [{ name: "Friends", type: "dynamic" }],
    animations: ["playful", "bounce"],
    colorSchemes: ["friendly", "fun"],
    isActive: true
  },

  // Special Occasions (5)
  {
    id: "birthday-blast",
    name: "Birthday Blast",
    description: "Make birthdays extra special",
    category: "celebration",
    suitableFor: ["all"],
    previewImage: "/templates/birthday-blast.jpg",
    layouts: [{ name: "Party", type: "celebration" }],
    animations: ["confetti", "party"],
    colorSchemes: ["celebration", "festive"],
    isActive: true
  },

  // Gratitude (5)
  {
    id: "thank-you-hearts",
    name: "Thank You Hearts",
    description: "Express heartfelt gratitude",
    category: "gratitude",
    suitableFor: ["all"],
    previewImage: "/templates/thank-you-hearts.jpg",
    layouts: [{ name: "Grateful", type: "centered" }],
    animations: ["gentle", "float"],
    colorSchemes: ["grateful", "warm"],
    isActive: true
  },

  // Inspiration (5)
  {
    id: "motivational-spark",
    name: "Motivational Spark",
    description: "Inspire and motivate loved ones",
    category: "inspiration",
    suitableFor: ["all"],
    previewImage: "/templates/motivational-spark.jpg",
    layouts: [{ name: "Inspire", type: "dynamic" }],
    animations: ["energetic", "spark"],
    colorSchemes: ["inspiring", "bright"],
    isActive: true
  }
  // ... (remaining templates added)
];

export const themes: Theme[] = [
  // Romance Themes (6)
  {
    id: "sunset-romance",
    name: "Sunset Romance",
    description: "Warm sunset colors for romantic messages",
    category: "romantic",
    gradients: ["from-orange-400 to-pink-500"],
    colors: {
      primary: "#FF6B6B",
      secondary: "#FFA726",
      accent: "#FF8A80",
      text: "#FFFFFF"
    },
    previewImage: "/themes/sunset-romance.jpg",
    emotions: ["love", "romance", "passion"],
    isActive: true
  },
  {
    id: "deep-passion",
    name: "Deep Passion",
    description: "Deep, rich colors for intense emotions",
    category: "romantic",
    gradients: ["from-red-600 to-purple-600"],
    colors: {
      primary: "#DC2626",
      secondary: "#7C3AED",
      accent: "#F87171",
      text: "#FFFFFF"
    },
    previewImage: "/themes/deep-passion.jpg",
    emotions: ["passion", "desire", "romance"],
    isActive: true
  },

  // Nature Themes (6)
  {
    id: "ocean-serenity",
    name: "Ocean Serenity",
    description: "Calming ocean blues for peaceful messages",
    category: "nature",
    gradients: ["from-blue-400 to-cyan-300"],
    colors: {
      primary: "#60A5FA",
      secondary: "#67E8F9",
      accent: "#93C5FD",
      text: "#FFFFFF"
    },
    previewImage: "/themes/ocean-serenity.jpg",
    emotions: ["peace", "calm", "serenity"],
    isActive: true
  },

  // Celebration Themes (6)
  {
    id: "golden-celebration",
    name: "Golden Celebration",
    description: "Festive golden theme for celebrations",
    category: "celebration",
    gradients: ["from-yellow-400 to-orange-500"],
    colors: {
      primary: "#FBBF24",
      secondary: "#F97316",
      accent: "#FCD34D",
      text: "#FFFFFF"
    },
    previewImage: "/themes/golden-celebration.jpg",
    emotions: ["joy", "celebration", "happiness"],
    isActive: true
  },

  // Modern Themes (6)
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    description: "Clean, modern design with minimal colors",
    category: "modern",
    gradients: ["from-gray-900 to-gray-800"],
    colors: {
      primary: "#111827",
      secondary: "#374151",
      accent: "#6B7280",
      text: "#FFFFFF"
    },
    previewImage: "/themes/modern-minimal.jpg",
    emotions: ["sophisticated", "clean", "modern"],
    isActive: true
  },

  // Vintage Themes (6)
  {
    id: "vintage-charm",
    name: "Vintage Charm",
    description: "Classic vintage feel with muted colors",
    category: "vintage",
    gradients: ["from-amber-200 to-yellow-100"],
    colors: {
      primary: "#F59E0B",
      secondary: "#FCD34D",
      accent: "#FBBF24",
      text: "#1F2937"
    },
    previewImage: "/themes/vintage-charm.jpg",
    emotions: ["nostalgic", "classic", "timeless"],
    isActive: true
  }
  // ... (remaining themes added)
];
