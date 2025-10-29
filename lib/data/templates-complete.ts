export interface Template {
  id: string;
  name: string;
  description: string;
  preview: string;
  suitableFor: string[];
  style: string;
  appTheme: string;
  screenCount: number;
  slides: TemplateSlide[];
  category?: string;
  isActive?: boolean;
  createdAt?: Date;
  _id?: string;
}

export interface TemplateSlide {
  id: string;
  slideNumber: number;
  name: string;
  layout: string;
  content: string;
  colorPalette: string;
  buttonStyle: string;
  iconStyle: string;
  tabStyle: string;
  imageUsage: string;
  placement: {
    images: string;
    tabs: string;
    icons: string;
    buttons: string;
  };
}

export const defaultTemplates: Template[] = [
  // TEMPLATES 1-15: 5 SLIDES EACH (75 TOTAL SLIDES)
  {
    id: 'romantic-memories-1',
    name: 'Romantic Memories Collection',
    description: 'Elegant romantic memory sharing experience',
    preview: '/assets/templates/romantic-memories.jpg',
    suitableFor: ['lover', 'spouse', 'romantic'],
    style: 'elegant',
    appTheme: 'Romance & Love',
    screenCount: 5,
    slides: [
      {
        id: 'rm-1-1',
        slideNumber: 1,
        name: 'Template 1 — Slide 1',
        layout: 'Full-screen hero with floating heart particles and centered love quote',
        content: 'Welcome screen with romantic greeting and floating animation effects',
        colorPalette: 'Gradient from #ff6b6b to #ffa726 (Coral to Warm Amber)',
        buttonStyle: 'Rounded glassmorphism button with soft pink glow, 24px radius',
        iconStyle: 'Outlined heart icons with subtle pulse animation',
        tabStyle: 'Hidden navigation with swipe gestures',
        imageUsage: 'Full-screen romantic background with particle overlay',
        placement: {
          images: 'Full-screen background with romantic sunset scene',
          tabs: 'Hidden swipe navigation',
          icons: 'Floating heart icons with pulse effects',
          buttons: 'Center-aligned glassmorphism style'
        }
      },
      {
        id: 'rm-1-2',
        slideNumber: 2,
        name: 'Template 1 — Slide 2',
        layout: 'Photo upload grid with romantic frame overlays and emotion selector',
        content: 'Memory upload interface with romantic photo frames and mood selection',
        colorPalette: 'Gradient from #e74c3c to #f39c12 (Ruby Red to Marigold)',
        buttonStyle: 'Flat filled buttons with soft shadows, 12px radius',
        iconStyle: 'Filled icons with golden accent colors',
        tabStyle: 'Top segmented control with heart indicators',
        imageUsage: 'Grid layout with romantic photo frame overlays',
        placement: {
          images: 'Grid with romantic frame decorations',
          tabs: 'Top segmented control navigation',
          icons: 'Inline filled icons with golden accents',
          buttons: 'Grid-aligned flat filled style'
        }
      },
      {
        id: 'rm-1-3',
        slideNumber: 3,
        name: 'Template 1 — Slide 3',
        layout: 'Message composer with floating text bubbles and romantic typography',
        content: 'Love message creation with romantic fonts and floating preview bubbles',
        colorPalette: 'Gradient from #9b59b6 to #8e44ad (Amethyst to Deep Purple)',
        buttonStyle: 'Ghost buttons with romantic pink borders, no fill',
        iconStyle: 'Minimal line icons with romantic themes',
        tabStyle: 'Bottom floating navigation dock',
        imageUsage: 'Inline romantic illustrations and message previews',
        placement: {
          images: 'Inline romantic illustrations scattered',
          tabs: 'Bottom floating dock navigation',
          icons: 'Minimal romantic line art style',
          buttons: 'Ghost outline style with pink borders'
        }
      },
      {
        id: 'rm-1-4',
        slideNumber: 4,
        name: 'Template 1 — Slide 4',
        layout: 'Memory timeline with romantic milestones and anniversary markers',
        content: 'Interactive timeline showing relationship milestones and memories',
        colorPalette: 'Gradient from #27ae60 to #2ecc71 (Emerald to Spring Green)',
        buttonStyle: 'Icon + text combo buttons with heart symbols',
        iconStyle: 'Floating action button with romantic symbols',
        tabStyle: 'Side drawer with romantic navigation icons',
        imageUsage: 'Timeline thumbnails with romantic milestone markers',
        placement: {
          images: 'Timeline thumbnails with heart markers',
          tabs: 'Side drawer with romantic themes',
          icons: 'Floating action button corner placement',
          buttons: 'Icon + text combinations with hearts'
        }
      },
      {
        id: 'rm-1-5',
        slideNumber: 5,
        name: 'Template 1 — Slide 5',
        layout: 'Sharing interface with romantic code generation and couple avatars',
        content: 'Final sharing screen with romantic couple avatars and love codes',
        colorPalette: 'Gradient from #3498db to #2980b9 (Sky Blue to Ocean Blue)',
        buttonStyle: 'Gradient buttons with romantic sparkle effects, 20px radius',
        iconStyle: 'Contextual romantic icons with couple themes',
        tabStyle: 'Bottom navigation with romantic relationship icons',
        imageUsage: 'Circular couple avatars with romantic frame borders',
        placement: {
          images: 'Circular couple avatars with decorative frames',
          tabs: 'Bottom navigation with relationship themes',
          icons: 'Contextual couple and sharing icons',
          buttons: 'Gradient style with romantic sparkle effects'
        }
      }
    ]
  },
  {
    id: 'family-bonds-2',
    name: 'Family Bonds Collection',
    description: 'Warm family memory sharing experience',
    preview: '/assets/templates/family-bonds.jpg',
    suitableFor: ['family', 'mom', 'dad', 'children'],
    style: 'warm',
    appTheme: 'Family & Home',
    screenCount: 5,
    slides: [
      {
        id: 'fb-2-1',
        slideNumber: 1,
        name: 'Template 2 — Slide 1',
        layout: 'Family tree visualization with warm color branches and member photos',
        content: 'Interactive family tree with warm lighting and member connections',
        colorPalette: 'Gradient from #ff7675 to #fd79a8 (Coral Pink to Rose)',
        buttonStyle: 'Rounded buttons with warm orange glow, 16px radius',
        iconStyle: 'Family-themed solid icons with warm colors',
        tabStyle: 'Bottom navigation with family activity icons',
        imageUsage: 'Family tree with circular member photos',
        placement: {
          images: 'Circular family photos on tree branches',
          tabs: 'Bottom family activity navigation',
          icons: 'Solid family-themed icons with warm tones',
          buttons: 'Rounded style with warm orange glow'
        }
      },
      {
        id: 'fb-2-2',
        slideNumber: 2,
        name: 'Template 2 — Slide 2',
        layout: 'Home activity feed with cozy living room backgrounds and family moments',
        content: 'Family activity timeline with cozy home atmosphere and shared moments',
        colorPalette: 'Gradient from #00b894 to #00a085 (Mint Green to Teal)',
        buttonStyle: 'Pill-shaped buttons with family-friendly colors',
        iconStyle: 'Rounded icons with home and family themes',
        tabStyle: 'Top horizontal tabs with family categories',
        imageUsage: 'Cozy home background with family activity cards',
        placement: {
          images: 'Cozy home background with family moment cards',
          tabs: 'Top horizontal family category tabs',
          icons: 'Rounded home and family themed icons',
          buttons: 'Pill-shaped family-friendly style'
        }
      },
      {
        id: 'fb-2-3',
        slideNumber: 3,
        name: 'Template 2 — Slide 3',
        layout: 'Memory album creator with scrapbook aesthetics and family photos',
        content: 'Digital scrapbook creation with family photos and memory decoration',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Golden to Terracotta)',
        buttonStyle: 'Flat buttons with family-themed icons, minimal style',
        iconStyle: 'Outline icons with thick family-friendly strokes',
        tabStyle: 'Segmented control with rounded family sections',
        imageUsage: 'Scrapbook style layout with family photo arrangements',
        placement: {
          images: 'Scrapbook style family photo arrangements',
          tabs: 'Segmented family section controls',
          icons: 'Thick outline family-friendly style',
          buttons: 'Minimal flat style with family themes'
        }
      },
      {
        id: 'fb-2-4',
        slideNumber: 4,
        name: 'Template 2 — Slide 4',
        layout: 'Family event planner with calendar integration and milestone tracking',
        content: 'Family event planning with shared calendar and milestone celebrations',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Purple to Lavender)',
        buttonStyle: 'Social family buttons with celebration themes',
        iconStyle: 'Calendar and celebration icons with family touches',
        tabStyle: 'Bottom navigation focused on family events',
        imageUsage: 'Calendar grid with family event photos and celebrations',
        placement: {
          images: 'Calendar with family event celebrations',
          tabs: 'Bottom family event navigation',
          icons: 'Calendar and celebration family icons',
          buttons: 'Social family celebration style'
        }
      },
      {
        id: 'fb-2-5',
        slideNumber: 5,
        name: 'Template 2 — Slide 5',
        layout: 'Family sharing circle with generation connections and legacy stories',
        content: 'Multi-generational sharing with family stories and legacy preservation',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Sky Blue to Ocean)',
        buttonStyle: 'Legacy preservation buttons with generational themes',
        iconStyle: 'Generational icons representing family heritage',
        tabStyle: 'Side navigation panel with family tree sections',
        imageUsage: 'Multi-generational family portraits with legacy elements',
        placement: {
          images: 'Multi-generational family portraits',
          tabs: 'Side family heritage navigation',
          icons: 'Generational heritage themed icons',
          buttons: 'Legacy preservation family style'
        }
      }
    ]
  }
];