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
  // TEMPLATES 1-5: 5 SLIDES EACH (25 TOTAL SLIDES)
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
  }
];

export default defaultTemplates;