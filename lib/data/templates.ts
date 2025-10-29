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
  },

  // TEMPLATE 2: Mom/Mother - Text + Caring tone (5 slides)
  {
    id: 'mother-care-2',
    name: 'Mother\'s Love Collection',
    description: 'Warm caring messages for mothers with text focus',
    preview: '/assets/templates/mother-care.jpg',
    suitableFor: ['mom', 'mother', 'parent'],
    style: 'caring',
    appTheme: 'Family & Care',
    screenCount: 5,
    slides: [
      {
        id: 'mc-2-1',
        slideNumber: 1,
        name: 'Template 2 — Slide 1',
        layout: 'Text-focused welcome with caring typography and warm colors',
        content: 'Gentle welcome screen with motherly care themes and warm greetings',
        colorPalette: 'Gradient from #ffeaa7 to #fab1a0 (Warm Yellow to Soft Peach)',
        buttonStyle: 'Soft rounded buttons with caring warmth, 18px radius',
        iconStyle: 'Warm family icons with gentle curves',
        tabStyle: 'Nurturing bottom navigation with care icons',
        imageUsage: 'Subtle background patterns with family themes',
        placement: {
          images: 'Gentle background patterns with family motifs',
          tabs: 'Caring bottom navigation with warmth',
          icons: 'Warm family care icons throughout',
          buttons: 'Soft caring style with warm colors'
        }
      },
      {
        id: 'mc-2-2',
        slideNumber: 2,
        name: 'Template 2 — Slide 2',
        layout: 'Text composition interface with caring prompts and family suggestions',
        content: 'Text message creation with caring prompts and family-oriented suggestions',
        colorPalette: 'Gradient from #81ecec to #74b9ff (Soft Cyan to Light Blue)',
        buttonStyle: 'Gentle filled buttons with caring themes, 14px radius',
        iconStyle: 'Outlined caring icons with soft edges',
        tabStyle: 'Top caring tabs with family categories',
        imageUsage: 'None - pure text focus with caring backgrounds',
        placement: {
          images: 'No images - text-focused caring interface',
          tabs: 'Top family category tabs',
          icons: 'Caring outline icons with soft styling',
          buttons: 'Gentle caring button style'
        }
      },
      {
        id: 'mc-2-3',
        slideNumber: 3,
        name: 'Template 2 — Slide 3',
        layout: 'Message preview with caring fonts and maternal warmth styling',
        content: 'Text message preview with caring typography and maternal styling',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Soft Pink to Warm Yellow)',
        buttonStyle: 'Caring ghost buttons with maternal borders',
        iconStyle: 'Filled caring icons with warmth',
        tabStyle: 'Hidden navigation with caring gestures',
        imageUsage: 'Caring decorative elements and text embellishments',
        placement: {
          images: 'Decorative caring elements around text',
          tabs: 'Hidden gesture-based navigation',
          icons: 'Filled caring icons with maternal warmth',
          buttons: 'Ghost caring style with warm borders'
        }
      },
      {
        id: 'mc-2-4',
        slideNumber: 4,
        name: 'Template 2 — Slide 4',
        layout: 'Message customization with caring fonts and maternal decorations',
        content: 'Text customization with caring fonts and maternal decoration options',
        colorPalette: 'Gradient from #55a3ff to #003d82 (Light Blue to Deep Blue)',
        buttonStyle: 'Caring icon+text buttons with maternal symbols',
        iconStyle: 'Floating caring action with maternal themes',
        tabStyle: 'Side caring drawer with family options',
        imageUsage: 'Maternal decoration options and caring embellishments',
        placement: {
          images: 'Maternal decorative options gallery',
          tabs: 'Side caring family options drawer',
          icons: 'Floating maternal care action button',
          buttons: 'Caring icon+text with maternal symbols'
        }
      },
      {
        id: 'mc-2-5',
        slideNumber: 5,
        name: 'Template 2 — Slide 5',
        layout: 'Sharing interface with caring codes and maternal connection themes',
        content: 'Final caring message sharing with maternal connection and family codes',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Soft Purple to Purple)',
        buttonStyle: 'Caring gradient buttons with maternal sparkle, 16px radius',
        iconStyle: 'Contextual caring family icons',
        tabStyle: 'Bottom caring navigation with family bonds',
        imageUsage: 'Circular family avatars with caring maternal frames',
        placement: {
          images: 'Circular family photos with caring frames',
          tabs: 'Bottom family bond navigation',
          icons: 'Contextual caring family connection icons',
          buttons: 'Caring gradient with maternal sparkle effects'
        }
      }
    ]
  },

  // TEMPLATE 3: Dad/Father - Photo + Motivational tone (5 slides)
  {
    id: 'father-motivation-3',
    name: 'Father\'s Strength Collection',
    description: 'Motivational photo-based messages for fathers',
    preview: '/assets/templates/father-motivation.jpg',
    suitableFor: ['dad', 'father', 'parent'],
    style: 'motivational',
    appTheme: 'Strength & Guidance',
    screenCount: 5,
    slides: [
      {
        id: 'fm-3-1',
        slideNumber: 1,
        name: 'Template 3 — Slide 1',
        layout: 'Photo-hero with motivational quotes and strong typography',
        content: 'Powerful photo display with motivational father-themed quotes and strong design',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Dark Charcoal to Steel Gray)',
        buttonStyle: 'Strong solid buttons with motivational power, 8px radius',
        iconStyle: 'Bold strong icons with leadership themes',
        tabStyle: 'Bottom strong navigation with leadership icons',
        imageUsage: 'Large hero photos with motivational father themes',
        placement: {
          images: 'Prominent hero photos with father/leadership themes',
          tabs: 'Strong bottom navigation with leadership',
          icons: 'Bold leadership and strength icons',
          buttons: 'Strong motivational button styling'
        }
      },
      {
        id: 'fm-3-2',
        slideNumber: 2,
        name: 'Template 3 — Slide 2',
        layout: 'Photo upload with motivational categories and strength-based organization',
        content: 'Photo upload interface with motivational categories and strength-based themes',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Strong Blue to Light Blue)',
        buttonStyle: 'Motivational filled buttons with strength themes, 10px radius',
        iconStyle: 'Outlined strength icons with bold edges',
        tabStyle: 'Top motivational tabs with strength categories',
        imageUsage: 'Photo grid with motivational strength-based overlays',
        placement: {
          images: 'Grid photos with strength-themed overlays',
          tabs: 'Top strength category navigation',
          icons: 'Bold outline strength icons',
          buttons: 'Motivational strength button style'
        }
      },
      {
        id: 'fm-3-3',
        slideNumber: 3,
        name: 'Template 3 — Slide 3',
        layout: 'Photo editing with motivational filters and strength-based effects',
        content: 'Photo editing interface with motivational filters and paternal strength effects',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Strong Green to Light Green)',
        buttonStyle: 'Motivational ghost buttons with strength borders',
        iconStyle: 'Filled strength icons with motivational themes',
        tabStyle: 'Hidden navigation with strong gesture control',
        imageUsage: 'Photo editing with motivational filter previews',
        placement: {
          images: 'Photo editing with strength filter previews',
          tabs: 'Hidden strong gesture navigation',
          icons: 'Filled motivational strength icons',
          buttons: 'Ghost strength style with bold borders'
        }
      },
      {
        id: 'fm-3-4',
        slideNumber: 4,
        name: 'Template 3 — Slide 4',
        layout: 'Photo message composition with motivational text overlays',
        content: 'Photo-text composition with motivational overlays and paternal guidance themes',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Strong Orange to Light Orange)',
        buttonStyle: 'Motivational icon+text buttons with leadership symbols',
        iconStyle: 'Floating strength action with paternal themes',
        tabStyle: 'Side strength drawer with motivational options',
        imageUsage: 'Photo backgrounds with motivational text overlay options',
        placement: {
          images: 'Photo backgrounds with motivational text overlays',
          tabs: 'Side motivational options drawer',
          icons: 'Floating paternal strength action button',
          buttons: 'Motivational icon+text with leadership symbols'
        }
      },
      {
        id: 'fm-3-5',
        slideNumber: 5,
        name: 'Template 3 — Slide 5',
        layout: 'Photo sharing with motivational codes and paternal strength connection',
        content: 'Final photo message sharing with motivational codes and father-child connection',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Strong Purple to Light Purple)',
        buttonStyle: 'Motivational gradient buttons with strength sparkle, 12px radius',
        iconStyle: 'Contextual strength family icons',
        tabStyle: 'Bottom motivational navigation with family strength',
        imageUsage: 'Circular family photos with motivational strength frames',
        placement: {
          images: 'Circular family photos with strength frames',
          tabs: 'Bottom family strength navigation',
          icons: 'Contextual motivational family icons',
          buttons: 'Motivational gradient with strength sparkle'
        }
      }
    ]
  },

  // TEMPLATE 4: Friend - Video + Fun tone (5 slides)
  {
    id: 'friend-fun-4',
    name: 'Friendship Fun Collection',
    description: 'Fun video-based messages for friends',
    preview: '/assets/templates/friend-fun.jpg',
    suitableFor: ['friend', 'buddy', 'pal'],
    style: 'fun',
    appTheme: 'Friendship & Joy',
    screenCount: 5,
    slides: [
      {
        id: 'ff-4-1',
        slideNumber: 1,
        name: 'Template 4 — Slide 1',
        layout: 'Video player interface with fun animations and playful controls',
        content: 'Fun video player with playful animations and friendship-themed controls',
        colorPalette: 'Gradient from #ff7675 to #fd79a8 (Bright Red to Pink)',
        buttonStyle: 'Playful rounded buttons with fun animations, 20px radius',
        iconStyle: 'Fun playful icons with bounce animations',
        tabStyle: 'Bottom fun navigation with friendship icons',
        imageUsage: 'Video thumbnails with fun friendship overlays',
        placement: {
          images: 'Video thumbnails with playful friend overlays',
          tabs: 'Fun bottom navigation with friendship themes',
          icons: 'Playful bounce animation icons',
          buttons: 'Fun animated button styling'
        }
      },
      {
        id: 'ff-4-2',
        slideNumber: 2,
        name: 'Template 4 — Slide 2',
        layout: 'Video upload with fun categories and friendship-based organization',
        content: 'Video upload interface with fun categories and friendship organization',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Fun Cyan to Light Cyan)',
        buttonStyle: 'Fun filled buttons with friendship themes, 16px radius',
        iconStyle: 'Outlined fun icons with playful edges',
        tabStyle: 'Top fun tabs with friendship categories',
        imageUsage: 'Video grid with fun friendship-based previews',
        placement: {
          images: 'Video grid with fun friendship previews',
          tabs: 'Top friendship category navigation',
          icons: 'Playful outline friendship icons',
          buttons: 'Fun friendship button style'
        }
      },
      {
        id: 'ff-4-3',
        slideNumber: 3,
        name: 'Template 4 — Slide 3',
        layout: 'Video editing with fun filters and friendship-based effects',
        content: 'Video editing interface with fun filters and playful friendship effects',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Fun Yellow to Orange)',
        buttonStyle: 'Fun ghost buttons with playful borders',
        iconStyle: 'Filled fun icons with friendship themes',
        tabStyle: 'Hidden navigation with playful gesture control',
        imageUsage: 'Video editing with fun filter previews and friendship stickers',
        placement: {
          images: 'Video editing with fun filter and sticker previews',
          tabs: 'Hidden playful gesture navigation',
          icons: 'Filled fun friendship icons',
          buttons: 'Ghost fun style with playful borders'
        }
      },
      {
        id: 'ff-4-4',
        slideNumber: 4,
        name: 'Template 4 — Slide 4',
        layout: 'Video message composition with fun overlays and friendship elements',
        content: 'Video-text composition with fun overlays and playful friendship elements',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Fun Purple to Deep Purple)',
        buttonStyle: 'Fun icon+text buttons with friendship symbols',
        iconStyle: 'Floating fun action with friendship themes',
        tabStyle: 'Side fun drawer with playful options',
        imageUsage: 'Video backgrounds with fun text overlay and friendship stickers',
        placement: {
          images: 'Video backgrounds with fun overlays and stickers',
          tabs: 'Side fun options drawer',
          icons: 'Floating playful friendship action button',
          buttons: 'Fun icon+text with friendship symbols'
        }
      },
      {
        id: 'ff-4-5',
        slideNumber: 5,
        name: 'Template 4 — Slide 5',
        layout: 'Video sharing with fun codes and friendship connection themes',
        content: 'Final video message sharing with fun codes and friendship connection',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Fun Blue to Deep Blue)',
        buttonStyle: 'Fun gradient buttons with friendship sparkle, 18px radius',
        iconStyle: 'Contextual fun friendship icons',
        tabStyle: 'Bottom fun navigation with friendship bonds',
        imageUsage: 'Circular friend avatars with fun playful frames',
        placement: {
          images: 'Circular friend photos with fun frames',
          tabs: 'Bottom friendship bond navigation',
          icons: 'Contextual fun friendship icons',
          buttons: 'Fun gradient with friendship sparkle'
        }
      }
    ]
  },

  // TEMPLATE 5: Brother - Audio + Supportive tone (5 slides)
  {
    id: 'brother-support-5',
    name: 'Brother Support Collection',
    description: 'Supportive audio-based messages for brothers',
    preview: '/assets/templates/brother-support.jpg',
    suitableFor: ['brother', 'bro', 'sibling'],
    style: 'supportive',
    appTheme: 'Brotherhood & Support',
    screenCount: 5,
    slides: [
      {
        id: 'bs-5-1',
        slideNumber: 1,
        name: 'Template 5 — Slide 1',
        layout: 'Audio player interface with supportive themes and brotherhood styling',
        content: 'Supportive audio player with brotherhood themes and encouraging design',
        colorPalette: 'Gradient from #00b894 to #00a085 (Supportive Green to Deep Green)',
        buttonStyle: 'Supportive solid buttons with brotherhood strength, 12px radius',
        iconStyle: 'Supportive brother icons with encouraging themes',
        tabStyle: 'Bottom supportive navigation with brotherhood icons',
        imageUsage: 'Audio waveforms with supportive brotherhood visualizations',
        placement: {
          images: 'Audio waveforms with brotherhood support visuals',
          tabs: 'Supportive bottom navigation with brotherhood',
          icons: 'Encouraging brotherhood support icons',
          buttons: 'Supportive brotherhood button styling'
        }
      },
      {
        id: 'bs-5-2',
        slideNumber: 2,
        name: 'Template 5 — Slide 2',
        layout: 'Audio recording with supportive prompts and brotherhood guidance',
        content: 'Audio recording interface with supportive prompts and brotherhood guidance',
        colorPalette: 'Gradient from #3d5af1 to #ff006e (Supportive Blue to Encouraging Pink)',
        buttonStyle: 'Supportive filled buttons with brotherhood themes, 14px radius',
        iconStyle: 'Outlined supportive icons with brotherhood edges',
        tabStyle: 'Top supportive tabs with brotherhood categories',
        imageUsage: 'Audio recording interface with supportive brotherhood elements',
        placement: {
          images: 'Audio recording with brotherhood support elements',
          tabs: 'Top brotherhood category navigation',
          icons: 'Supportive outline brotherhood icons',
          buttons: 'Encouraging brotherhood button style'
        }
      },
      {
        id: 'bs-5-3',
        slideNumber: 3,
        name: 'Template 5 — Slide 3',
        layout: 'Audio editing with supportive effects and brotherhood enhancement tools',
        content: 'Audio editing interface with supportive effects and brotherhood enhancement',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Supportive Magenta to Encouraging Red)',
        buttonStyle: 'Supportive ghost buttons with brotherhood borders',
        iconStyle: 'Filled supportive icons with brotherhood themes',
        tabStyle: 'Hidden navigation with supportive gesture control',
        imageUsage: 'Audio editing with supportive effect previews and brotherhood tools',
        placement: {
          images: 'Audio editing with brotherhood effect previews',
          tabs: 'Hidden supportive gesture navigation',
          icons: 'Filled supportive brotherhood icons',
          buttons: 'Ghost supportive style with brotherhood borders'
        }
      },
      {
        id: 'bs-5-4',
        slideNumber: 4,
        name: 'Template 5 — Slide 4',
        layout: 'Audio message composition with supportive overlays and brotherhood elements',
        content: 'Audio-text composition with supportive overlays and encouraging brotherhood',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Supportive Green to Encouraging Orange)',
        buttonStyle: 'Supportive icon+text buttons with brotherhood symbols',
        iconStyle: 'Floating supportive action with brotherhood themes',
        tabStyle: 'Side supportive drawer with brotherhood options',
        imageUsage: 'Audio waveforms with supportive text overlay and brotherhood elements',
        placement: {
          images: 'Audio waveforms with supportive overlays',
          tabs: 'Side supportive brotherhood options drawer',
          icons: 'Floating supportive brotherhood action button',
          buttons: 'Supportive icon+text with brotherhood symbols'
        }
      },
      {
        id: 'bs-5-5',
        slideNumber: 5,
        name: 'Template 5 — Slide 5',
        layout: 'Audio sharing with supportive codes and brotherhood connection themes',
        content: 'Final audio message sharing with supportive codes and brotherhood connection',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Supportive Red to Encouraging Yellow)',
        buttonStyle: 'Supportive gradient buttons with brotherhood sparkle, 16px radius',
        iconStyle: 'Contextual supportive brotherhood icons',
        tabStyle: 'Bottom supportive navigation with brotherhood bonds',
        imageUsage: 'Circular brother avatars with supportive encouraging frames',
        placement: {
          images: 'Circular brother photos with supportive frames',
          tabs: 'Bottom brotherhood bond navigation',
          icons: 'Contextual supportive brotherhood icons',
          buttons: 'Supportive gradient with brotherhood sparkle'
        }
      }
    ]
  },

  // TEMPLATES 6-15: 10 SLIDES EACH (100 TOTAL SLIDES)

  // TEMPLATE 6: Sister - Memory + Nostalgic tone (10 slides)
  {
    id: 'sister-nostalgia-6',
    name: 'Sister Memories Collection',
    description: 'Nostalgic memory-based messages for sisters',
    preview: '/assets/templates/sister-nostalgia.jpg',
    suitableFor: ['sister', 'sis', 'sibling'],
    style: 'nostalgic',
    appTheme: 'Sisterhood & Memories',
    screenCount: 10,
    slides: [
      {
        id: 'sn-6-1',
        slideNumber: 1,
        name: 'Template 6 — Slide 1',
        layout: 'Memory album welcome with nostalgic timeline and sisterhood themes',
        content: 'Nostalgic memory album interface with sisterhood timeline and vintage styling',
        colorPalette: 'Gradient from #dda0dd to #e6e6fa (Plum to Lavender)',
        buttonStyle: 'Nostalgic vintage buttons with sisterhood warmth, 15px radius',
        iconStyle: 'Vintage sisterhood icons with nostalgic themes',
        tabStyle: 'Bottom nostalgic navigation with sister bond icons',
        imageUsage: 'Vintage photo album with nostalgic sister memory overlays',
        placement: {
          images: 'Vintage album layout with nostalgic sister overlays',
          tabs: 'Nostalgic bottom navigation with sisterhood',
          icons: 'Vintage sisterhood memory icons',
          buttons: 'Nostalgic vintage sister button styling'
        }
      },
      {
        id: 'sn-6-2',
        slideNumber: 2,
        name: 'Template 6 — Slide 2',
        layout: 'Memory collection interface with nostalgic categories and sister moments',
        content: 'Memory collection with nostalgic categories and precious sister moments',
        colorPalette: 'Gradient from #f8bbd9 to #f4a6cd (Soft Pink to Rose Pink)',
        buttonStyle: 'Nostalgic filled buttons with sister bond themes, 12px radius',
        iconStyle: 'Outlined nostalgic icons with sisterhood edges',
        tabStyle: 'Top nostalgic tabs with sister memory categories',
        imageUsage: 'Memory grid with nostalgic sister moment previews',
        placement: {
          images: 'Memory grid with nostalgic sister previews',
          tabs: 'Top sister memory category navigation',
          icons: 'Nostalgic outline sisterhood icons',
          buttons: 'Vintage sister bond button style'
        }
      },
      {
        id: 'sn-6-3',
        slideNumber: 3,
        name: 'Template 6 — Slide 3',
        layout: 'Memory editing with nostalgic filters and sisterhood enhancement',
        content: 'Memory editing interface with nostalgic filters and sisterhood enhancement',
        colorPalette: 'Gradient from #c8a2c8 to #d8bfd8 (Light Purple to Thistle)',
        buttonStyle: 'Nostalgic ghost buttons with sisterhood borders',
        iconStyle: 'Filled nostalgic icons with sister bond themes',
        tabStyle: 'Hidden navigation with nostalgic gesture control',
        imageUsage: 'Memory editing with nostalgic filter previews and sister elements',
        placement: {
          images: 'Memory editing with nostalgic sister filter previews',
          tabs: 'Hidden nostalgic gesture navigation',
          icons: 'Filled nostalgic sisterhood icons',
          buttons: 'Ghost nostalgic style with sister borders'
        }
      },
      {
        id: 'sn-6-4',
        slideNumber: 4,
        name: 'Template 6 — Slide 4',
        layout: 'Memory storytelling with nostalgic narrative and sister journey themes',
        content: 'Memory storytelling interface with nostalgic narrative and sister journey',
        colorPalette: 'Gradient from #ffc0cb to #ffb6c1 (Pink to Light Pink)',
        buttonStyle: 'Nostalgic icon+text buttons with sisterhood symbols',
        iconStyle: 'Floating nostalgic action with sister bond themes',
        tabStyle: 'Side nostalgic drawer with sisterhood options',
        imageUsage: 'Memory backgrounds with nostalgic text overlay and sister journey',
        placement: {
          images: 'Memory backgrounds with nostalgic sister overlays',
          tabs: 'Side nostalgic sisterhood options drawer',
          icons: 'Floating nostalgic sisterhood action button',
          buttons: 'Nostalgic icon+text with sisterhood symbols'
        }
      },
      {
        id: 'sn-6-5',
        slideNumber: 5,
        name: 'Template 6 — Slide 5',
        layout: 'Memory timeline with nostalgic milestones and sister bond markers',
        content: 'Memory timeline with nostalgic milestones and precious sister bond markers',
        colorPalette: 'Gradient from #e0b4d6 to #dda0dd (Mauve to Plum)',
        buttonStyle: 'Nostalgic timeline buttons with sister milestone themes',
        iconStyle: 'Timeline nostalgic icons with sisterhood markers',
        tabStyle: 'Timeline navigation with nostalgic sister periods',
        imageUsage: 'Timeline photos with nostalgic sister milestone overlays',
        placement: {
          images: 'Timeline photos with nostalgic sister milestones',
          tabs: 'Timeline period navigation with sisterhood',
          icons: 'Timeline nostalgic sisterhood markers',
          buttons: 'Nostalgic timeline sister milestone style'
        }
      },
      {
        id: 'sn-6-6',
        slideNumber: 6,
        name: 'Template 6 — Slide 6',
        layout: 'Memory sharing preview with nostalgic presentation and sister bond themes',
        content: 'Memory sharing preview with nostalgic presentation and sister connection',
        colorPalette: 'Gradient from #f0e68c to #fffacd (Khaki to Lemon Chiffon)',
        buttonStyle: 'Nostalgic preview buttons with sisterhood presentation',
        iconStyle: 'Preview nostalgic icons with sister sharing themes',
        tabStyle: 'Preview tabs with nostalgic sister presentation',
        imageUsage: 'Memory preview with nostalgic sister presentation layout',
        placement: {
          images: 'Memory preview with nostalgic sister layout',
          tabs: 'Preview nostalgic sister presentation tabs',
          icons: 'Preview nostalgic sisterhood sharing icons',
          buttons: 'Nostalgic preview sister presentation style'
        }
      },
      {
        id: 'sn-6-7',
        slideNumber: 7,
        name: 'Template 6 — Slide 7',
        layout: 'Memory customization with nostalgic themes and sister personalization',
        content: 'Memory customization with nostalgic themes and personal sister touches',
        colorPalette: 'Gradient from #deb887 to #f5deb3 (Burlywood to Wheat)',
        buttonStyle: 'Nostalgic customization buttons with sister personalization',
        iconStyle: 'Customization nostalgic icons with sisterhood themes',
        tabStyle: 'Customization tabs with nostalgic sister options',
        imageUsage: 'Customization options with nostalgic sister theme previews',
        placement: {
          images: 'Customization options with nostalgic sister previews',
          tabs: 'Customization nostalgic sister option tabs',
          icons: 'Customization nostalgic sisterhood icons',
          buttons: 'Nostalgic customization sister style'
        }
      },
      {
        id: 'sn-6-8',
        slideNumber: 8,
        name: 'Template 6 — Slide 8',
        layout: 'Memory album finalization with nostalgic completion and sister bond',
        content: 'Memory album finalization with nostalgic completion and sister bond sealing',
        colorPalette: 'Gradient from #cd853f to #daa520 (Peru to Goldenrod)',
        buttonStyle: 'Nostalgic finalization buttons with sister completion themes',
        iconStyle: 'Finalization nostalgic icons with sisterhood completion',
        tabStyle: 'Finalization tabs with nostalgic sister completion',
        imageUsage: 'Album finalization with nostalgic sister completion visuals',
        placement: {
          images: 'Album finalization with nostalgic sister visuals',
          tabs: 'Finalization nostalgic sister completion tabs',
          icons: 'Finalization nostalgic sisterhood icons',
          buttons: 'Nostalgic finalization sister completion style'
        }
      },
      {
        id: 'sn-6-9',
        slideNumber: 9,
        name: 'Template 6 — Slide 9',
        layout: 'Memory sharing options with nostalgic delivery and sister connection',
        content: 'Memory sharing options with nostalgic delivery methods and sister connection',
        colorPalette: 'Gradient from #bc8f8f to #f5deb3 (Rosy Brown to Wheat)',
        buttonStyle: 'Nostalgic sharing buttons with sister delivery options',
        iconStyle: 'Sharing nostalgic icons with sisterhood delivery themes',
        tabStyle: 'Sharing tabs with nostalgic sister delivery methods',
        imageUsage: 'Sharing options with nostalgic sister delivery previews',
        placement: {
          images: 'Sharing options with nostalgic sister delivery',
          tabs: 'Sharing nostalgic sister delivery tabs',
          icons: 'Sharing nostalgic sisterhood delivery icons',
          buttons: 'Nostalgic sharing sister delivery style'
        }
      },
      {
        id: 'sn-6-10',
        slideNumber: 10,
        name: 'Template 6 — Slide 10',
        layout: 'Memory sharing completion with nostalgic codes and eternal sister bond',
        content: 'Final memory sharing with nostalgic codes and eternal sisterhood connection',
        colorPalette: 'Gradient from #d2b48c to #f4a460 (Tan to Sandy Brown)',
        buttonStyle: 'Nostalgic gradient buttons with eternal sister sparkle, 20px radius',
        iconStyle: 'Contextual nostalgic sisterhood eternal icons',
        tabStyle: 'Bottom nostalgic navigation with eternal sister bonds',
        imageUsage: 'Circular sister avatars with nostalgic eternal bond frames',
        placement: {
          images: 'Circular sister photos with nostalgic eternal frames',
          tabs: 'Bottom eternal sister bond navigation',
          icons: 'Contextual nostalgic eternal sisterhood icons',
          buttons: 'Nostalgic gradient with eternal sister sparkle'
        }
      }
    ]
  },

  // TEMPLATE 7: Child - Song + Emotional tone (5 slides)
  {
    id: 'child-emotional-7',
    name: 'Child Emotions Collection',
    description: 'Emotional song-based messages for children',
    preview: '/assets/templates/child-emotional.jpg',
    suitableFor: ['child', 'kid', 'son', 'daughter'],
    style: 'emotional',
    appTheme: 'Childhood & Emotions',
    screenCount: 5,
    slides: [
      {
        id: 'ce-7-1',
        slideNumber: 1,
        name: 'Template 7 — Slide 1',
        layout: 'Music player with emotional childhood themes and gentle song interface',
        content: 'Emotional music player with childhood themes and gentle song interface',
        colorPalette: 'Gradient from #ffeaa7 to #fab1a0 (Warm Yellow to Soft Peach)',
        buttonStyle: 'Gentle rounded buttons with childhood warmth, 22px radius',
        iconStyle: 'Childlike emotional icons with gentle themes',
        tabStyle: 'Bottom gentle navigation with childhood icons',
        imageUsage: 'Music waveforms with emotional childhood visualizations',
        placement: {
          images: 'Music waveforms with gentle childhood visuals',
          tabs: 'Gentle bottom navigation with child themes',
          icons: 'Emotional childhood music icons',
          buttons: 'Gentle childhood emotional button styling'
        }
      },
      {
        id: 'ce-7-2',
        slideNumber: 2,
        name: 'Template 7 — Slide 2',
        layout: 'Song selection with emotional categories and childhood favorites',
        content: 'Song selection interface with emotional categories and beloved childhood songs',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Soft Purple to Purple)',
        buttonStyle: 'Emotional filled buttons with childhood themes, 18px radius',
        iconStyle: 'Outlined emotional icons with childhood edges',
        tabStyle: 'Top emotional tabs with childhood song categories',
        imageUsage: 'Song covers with emotional childhood-themed overlays',
        placement: {
          images: 'Song covers with emotional childhood overlays',
          tabs: 'Top childhood song category navigation',
          icons: 'Emotional outline childhood icons',
          buttons: 'Gentle emotional childhood button style'
        }
      },
      {
        id: 'ce-7-3',
        slideNumber: 3,
        name: 'Template 7 — Slide 3',
        layout: 'Song customization with emotional effects and childhood personalization',
        content: 'Song customization with emotional effects and personal childhood touches',
        colorPalette: 'Gradient from #81ecec to #74b9ff (Soft Cyan to Light Blue)',
        buttonStyle: 'Emotional ghost buttons with childhood borders',
        iconStyle: 'Filled emotional icons with childhood themes',
        tabStyle: 'Hidden navigation with gentle gesture control',
        imageUsage: 'Song editing with emotional effect previews and childhood elements',
        placement: {
          images: 'Song editing with gentle childhood effect previews',
          tabs: 'Hidden gentle gesture navigation',
          icons: 'Filled emotional childhood icons',
          buttons: 'Ghost emotional style with gentle borders'
        }
      },
      {
        id: 'ce-7-4',
        slideNumber: 4,
        name: 'Template 7 — Slide 4',
        layout: 'Song message composition with emotional overlays and childhood elements',
        content: 'Song-text composition with emotional overlays and precious childhood elements',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Soft Pink to Warm Yellow)',
        buttonStyle: 'Emotional icon+text buttons with childhood symbols',
        iconStyle: 'Floating emotional action with childhood themes',
        tabStyle: 'Side emotional drawer with childhood options',
        imageUsage: 'Song backgrounds with emotional text overlay and childhood decorations',
        placement: {
          images: 'Song backgrounds with emotional childhood overlays',
          tabs: 'Side emotional childhood options drawer',
          icons: 'Floating emotional childhood action button',
          buttons: 'Emotional icon+text with childhood symbols'
        }
      },
      {
        id: 'ce-7-5',
        slideNumber: 5,
        name: 'Template 7 — Slide 5',
        layout: 'Song sharing with emotional codes and childhood connection themes',
        content: 'Final song message sharing with emotional codes and precious childhood connection',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Soft Cyan to Light Cyan)',
        buttonStyle: 'Emotional gradient buttons with childhood sparkle, 20px radius',
        iconStyle: 'Contextual emotional childhood icons',
        tabStyle: 'Bottom emotional navigation with childhood bonds',
        imageUsage: 'Circular child avatars with emotional gentle frames',
        placement: {
          images: 'Circular child photos with emotional gentle frames',
          tabs: 'Bottom childhood bond navigation',
          icons: 'Contextual emotional childhood icons',
          buttons: 'Emotional gradient with childhood sparkle'
        }
      }
    ]
  },

  // TEMPLATE 8: Teacher - Text + Formal tone (5 slides)
  {
    id: 'teacher-formal-8',
    name: 'Teacher Formal Collection',
    description: 'Formal text-based messages for teachers',
    preview: '/assets/templates/teacher-formal.jpg',
    suitableFor: ['teacher', 'educator', 'mentor'],
    style: 'formal',
    appTheme: 'Education & Respect',
    screenCount: 5,
    slides: [
      {
        id: 'tf-8-1',
        slideNumber: 1,
        name: 'Template 8 — Slide 1',
        layout: 'Professional text interface with formal educational themes and respect',
        content: 'Formal text interface with professional educational themes and respectful design',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Dark to Gray)',
        buttonStyle: 'Professional formal buttons with educational respect, 8px radius',
        iconStyle: 'Formal educational icons with professional themes',
        tabStyle: 'Bottom formal navigation with educational icons',
        imageUsage: 'Professional backgrounds with formal educational elements',
        placement: {
          images: 'Professional backgrounds with educational elements',
          tabs: 'Formal bottom navigation with education themes',
          icons: 'Professional educational respect icons',
          buttons: 'Formal professional educational button styling'
        }
      },
      {
        id: 'tf-8-2',
        slideNumber: 2,
        name: 'Template 8 — Slide 2',
        layout: 'Text composition with formal templates and educational message structure',
        content: 'Formal text composition with educational templates and professional structure',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Professional Blue to Light Blue)',
        buttonStyle: 'Formal filled buttons with educational themes, 6px radius',
        iconStyle: 'Outlined formal icons with educational edges',
        tabStyle: 'Top formal tabs with educational message categories',
        imageUsage: 'None - pure formal text focus with professional backgrounds',
        placement: {
          images: 'No images - formal text-focused interface',
          tabs: 'Top educational message category navigation',
          icons: 'Formal outline educational icons',
          buttons: 'Professional formal educational button style'
        }
      },
      {
        id: 'tf-8-3',
        slideNumber: 3,
        name: 'Template 8 — Slide 3',
        layout: 'Message preview with formal typography and educational presentation',
        content: 'Formal message preview with professional typography and educational presentation',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Professional Green to Light Green)',
        buttonStyle: 'Formal ghost buttons with educational borders',
        iconStyle: 'Filled formal icons with educational themes',
        tabStyle: 'Hidden navigation with professional gesture control',
        imageUsage: 'Formal decorative elements and educational embellishments',
        placement: {
          images: 'Formal decorative elements around text',
          tabs: 'Hidden professional gesture navigation',
          icons: 'Filled formal educational icons',
          buttons: 'Ghost formal style with professional borders'
        }
      },
      {
        id: 'tf-8-4',
        slideNumber: 4,
        name: 'Template 8 — Slide 4',
        layout: 'Message customization with formal options and educational personalization',
        content: 'Formal message customization with professional options and educational touches',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Professional Orange to Light Orange)',
        buttonStyle: 'Formal icon+text buttons with educational symbols',
        iconStyle: 'Floating formal action with educational themes',
        tabStyle: 'Side formal drawer with educational options',
        imageUsage: 'Professional decoration options and formal embellishments',
        placement: {
          images: 'Professional decorative options gallery',
          tabs: 'Side formal educational options drawer',
          icons: 'Floating professional educational action button',
          buttons: 'Formal icon+text with educational symbols'
        }
      },
      {
        id: 'tf-8-5',
        slideNumber: 5,
        name: 'Template 8 — Slide 5',
        layout: 'Message sharing with formal codes and educational respect connection',
        content: 'Final formal message sharing with professional codes and educational respect',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Professional Purple to Light Purple)',
        buttonStyle: 'Formal gradient buttons with educational sparkle, 10px radius',
        iconStyle: 'Contextual formal educational icons',
        tabStyle: 'Bottom formal navigation with educational respect',
        imageUsage: 'Professional avatars with formal educational frames',
        placement: {
          images: 'Professional photos with formal educational frames',
          tabs: 'Bottom educational respect navigation',
          icons: 'Contextual formal educational icons',
          buttons: 'Formal gradient with educational sparkle'
        }
      }
    ]
  },

  // TEMPLATE 9: Colleague - Photo + Professional tone (5 slides)
  {
    id: 'colleague-professional-9',
    name: 'Colleague Professional Collection',
    description: 'Professional photo-based messages for colleagues',
    preview: '/assets/templates/colleague-professional.jpg',
    suitableFor: ['colleague', 'coworker', 'teammate'],
    style: 'professional',
    appTheme: 'Workplace & Collaboration',
    screenCount: 5,
    slides: [
      {
        id: 'cp-9-1',
        slideNumber: 1,
        name: 'Template 9 — Slide 1',
        layout: 'Professional photo interface with workplace themes and collaboration focus',
        content: 'Professional photo interface with workplace themes and team collaboration',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Charcoal to Gray)',
        buttonStyle: 'Clean professional buttons with workplace themes, 6px radius',
        iconStyle: 'Professional workplace icons with collaboration themes',
        tabStyle: 'Bottom professional navigation with workplace icons',
        imageUsage: 'Professional workplace photos with collaboration overlays',
        placement: {
          images: 'Professional workplace photos with team overlays',
          tabs: 'Professional bottom navigation with workplace',
          icons: 'Workplace collaboration professional icons',
          buttons: 'Clean professional workplace button styling'
        }
      },
      {
        id: 'cp-9-2',
        slideNumber: 2,
        name: 'Template 9 — Slide 2',
        layout: 'Photo upload with professional categories and workplace organization',
        content: 'Professional photo upload with workplace categories and team organization',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Corporate Blue to Light Blue)',
        buttonStyle: 'Professional filled buttons with workplace themes, 8px radius',
        iconStyle: 'Outlined professional icons with workplace edges',
        tabStyle: 'Top professional tabs with workplace categories',
        imageUsage: 'Photo grid with professional workplace-themed previews',
        placement: {
          images: 'Photo grid with professional workplace previews',
          tabs: 'Top workplace category navigation',
          icons: 'Professional outline workplace icons',
          buttons: 'Clean professional workplace button style'
        }
      },
      {
        id: 'cp-9-3',
        slideNumber: 3,
        name: 'Template 9 — Slide 3',
        layout: 'Photo editing with professional filters and workplace enhancement',
        content: 'Professional photo editing with workplace filters and team enhancement',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Professional Green to Light Green)',
        buttonStyle: 'Professional ghost buttons with workplace borders',
        iconStyle: 'Filled professional icons with workplace themes',
        tabStyle: 'Hidden navigation with professional gesture control',
        imageUsage: 'Photo editing with professional filter previews and workplace elements',
        placement: {
          images: 'Photo editing with professional workplace previews',
          tabs: 'Hidden professional gesture navigation',
          icons: 'Filled professional workplace icons',
          buttons: 'Ghost professional style with workplace borders'
        }
      },
      {
        id: 'cp-9-4',
        slideNumber: 4,
        name: 'Template 9 — Slide 4',
        layout: 'Photo message composition with professional overlays and workplace elements',
        content: 'Professional photo-text composition with workplace overlays and team elements',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Professional Orange to Light Orange)',
        buttonStyle: 'Professional icon+text buttons with workplace symbols',
        iconStyle: 'Floating professional action with workplace themes',
        tabStyle: 'Side professional drawer with workplace options',
        imageUsage: 'Photo backgrounds with professional text overlay and workplace elements',
        placement: {
          images: 'Photo backgrounds with professional workplace overlays',
          tabs: 'Side professional workplace options drawer',
          icons: 'Floating professional workplace action button',
          buttons: 'Professional icon+text with workplace symbols'
        }
      },
      {
        id: 'cp-9-5',
        slideNumber: 5,
        name: 'Template 9 — Slide 5',
        layout: 'Photo sharing with professional codes and workplace connection themes',
        content: 'Final professional photo sharing with workplace codes and team connection',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Professional Purple to Light Purple)',
        buttonStyle: 'Professional gradient buttons with workplace sparkle, 8px radius',
        iconStyle: 'Contextual professional workplace icons',
        tabStyle: 'Bottom professional navigation with workplace bonds',
        imageUsage: 'Professional team avatars with workplace collaboration frames',
        placement: {
          images: 'Professional team photos with workplace frames',
          tabs: 'Bottom workplace collaboration navigation',
          icons: 'Contextual professional workplace icons',
          buttons: 'Professional gradient with workplace sparkle'
        }
      }
    ]
  },

  // TEMPLATE 10: Grandparent - Video + Caring tone (5 slides)
  {
    id: 'grandparent-caring-10',
    name: 'Grandparent Caring Collection',
    description: 'Caring video-based messages for grandparents',
    preview: '/assets/templates/grandparent-caring.jpg',
    suitableFor: ['grandparent', 'grandma', 'grandpa'],
    style: 'caring',
    appTheme: 'Generations & Wisdom',
    screenCount: 5,
    slides: [
      {
        id: 'gc-10-1',
        slideNumber: 1,
        name: 'Template 10 — Slide 1',
        layout: 'Video player with caring grandparent themes and wisdom-focused interface',
        content: 'Caring video player with grandparent themes and wisdom-sharing interface',
        colorPalette: 'Gradient from #dda0dd to #e6e6fa (Warm Plum to Lavender)',
        buttonStyle: 'Gentle caring buttons with grandparent warmth, 20px radius',
        iconStyle: 'Caring grandparent icons with wisdom themes',
        tabStyle: 'Bottom caring navigation with generational icons',
        imageUsage: 'Video thumbnails with caring grandparent overlays and wisdom elements',
        placement: {
          images: 'Video thumbnails with caring grandparent overlays',
          tabs: 'Caring bottom navigation with generational themes',
          icons: 'Wisdom-focused caring grandparent icons',
          buttons: 'Gentle caring grandparent button styling'
        }
      },
      {
        id: 'gc-10-2',
        slideNumber: 2,
        name: 'Template 10 — Slide 2',
        layout: 'Video upload with caring categories and grandparent wisdom organization',
        content: 'Caring video upload with wisdom categories and grandparent organization',
        colorPalette: 'Gradient from #f8bbd9 to #f4a6cd (Gentle Pink to Rose Pink)',
        buttonStyle: 'Caring filled buttons with grandparent themes, 16px radius',
        iconStyle: 'Outlined caring icons with grandparent wisdom edges',
        tabStyle: 'Top caring tabs with grandparent wisdom categories',
        imageUsage: 'Video grid with caring grandparent wisdom-themed previews',
        placement: {
          images: 'Video grid with caring grandparent previews',
          tabs: 'Top grandparent wisdom category navigation',
          icons: 'Caring outline grandparent wisdom icons',
          buttons: 'Gentle caring grandparent button style'
        }
      },
      {
        id: 'gc-10-3',
        slideNumber: 3,
        name: 'Template 10 — Slide 3',
        layout: 'Video editing with caring filters and grandparent wisdom enhancement',
        content: 'Caring video editing with wisdom filters and grandparent enhancement',
        colorPalette: 'Gradient from #c8a2c8 to #d8bfd8 (Gentle Purple to Thistle)',
        buttonStyle: 'Caring ghost buttons with grandparent borders',
        iconStyle: 'Filled caring icons with grandparent wisdom themes',
        tabStyle: 'Hidden navigation with caring gesture control',
        imageUsage: 'Video editing with caring filter previews and grandparent wisdom elements',
        placement: {
          images: 'Video editing with caring grandparent previews',
          tabs: 'Hidden caring gesture navigation',
          icons: 'Filled caring grandparent wisdom icons',
          buttons: 'Ghost caring style with grandparent borders'
        }
      },
      {
        id: 'gc-10-4',
        slideNumber: 4,
        name: 'Template 10 — Slide 4',
        layout: 'Video message composition with caring overlays and grandparent wisdom',
        content: 'Caring video-text composition with wisdom overlays and grandparent elements',
        colorPalette: 'Gradient from #ffc0cb to #ffb6c1 (Soft Pink to Light Pink)',
        buttonStyle: 'Caring icon+text buttons with grandparent symbols',
        iconStyle: 'Floating caring action with grandparent wisdom themes',
        tabStyle: 'Side caring drawer with grandparent options',
        imageUsage: 'Video backgrounds with caring text overlay and grandparent wisdom',
        placement: {
          images: 'Video backgrounds with caring grandparent overlays',
          tabs: 'Side caring grandparent options drawer',
          icons: 'Floating caring grandparent wisdom action button',
          buttons: 'Caring icon+text with grandparent symbols'
        }
      },
      {
        id: 'gc-10-5',
        slideNumber: 5,
        name: 'Template 10 — Slide 5',
        layout: 'Video sharing with caring codes and grandparent wisdom connection',
        content: 'Final caring video sharing with wisdom codes and grandparent connection',
        colorPalette: 'Gradient from #e0b4d6 to #dda0dd (Gentle Mauve to Plum)',
        buttonStyle: 'Caring gradient buttons with grandparent sparkle, 18px radius',
        iconStyle: 'Contextual caring grandparent wisdom icons',
        tabStyle: 'Bottom caring navigation with generational bonds',
        imageUsage: 'Circular grandparent avatars with caring wisdom frames',
        placement: {
          images: 'Circular grandparent photos with caring frames',
          tabs: 'Bottom generational bond navigation',
          icons: 'Contextual caring grandparent icons',
          buttons: 'Caring gradient with grandparent sparkle'
        }
      }
    ]
  },

  // TEMPLATE 11: Mentor - Audio + Motivational tone (5 slides)
  {
    id: 'mentor-motivational-11',
    name: 'Mentor Motivation Collection',
    description: 'Motivational audio-based messages for mentors',
    preview: '/assets/templates/mentor-motivational.jpg',
    suitableFor: ['mentor', 'guide', 'coach'],
    style: 'motivational',
    appTheme: 'Guidance & Growth',
    screenCount: 5,
    slides: [
      {
        id: 'mm-11-1',
        slideNumber: 1,
        name: 'Template 11 — Slide 1',
        layout: 'Audio player with motivational mentor themes and growth-focused interface',
        content: 'Motivational audio player with mentor themes and growth-inspiring interface',
        colorPalette: 'Gradient from #f39c12 to #e67e22 (Motivational Orange to Deep Orange)',
        buttonStyle: 'Strong motivational buttons with mentor power, 10px radius',
        iconStyle: 'Motivational mentor icons with growth themes',
        tabStyle: 'Bottom motivational navigation with mentor icons',
        imageUsage: 'Audio waveforms with motivational mentor visualizations and growth elements',
        placement: {
          images: 'Audio waveforms with motivational mentor visuals',
          tabs: 'Motivational bottom navigation with mentor themes',
          icons: 'Growth-focused motivational mentor icons',
          buttons: 'Strong motivational mentor button styling'
        }
      },
      {
        id: 'mm-11-2',
        slideNumber: 2,
        name: 'Template 11 — Slide 2',
        layout: 'Audio recording with motivational prompts and mentor guidance categories',
        content: 'Motivational audio recording with growth prompts and mentor guidance',
        colorPalette: 'Gradient from #27ae60 to #2ecc71 (Motivational Green to Light Green)',
        buttonStyle: 'Motivational filled buttons with mentor themes, 12px radius',
        iconStyle: 'Outlined motivational icons with mentor growth edges',
        tabStyle: 'Top motivational tabs with mentor guidance categories',
        imageUsage: 'Audio recording interface with motivational mentor elements',
        placement: {
          images: 'Audio recording with motivational mentor elements',
          tabs: 'Top mentor guidance category navigation',
          icons: 'Motivational outline mentor growth icons',
          buttons: 'Strong motivational mentor button style'
        }
      },
      {
        id: 'mm-11-3',
        slideNumber: 3,
        name: 'Template 11 — Slide 3',
        layout: 'Audio editing with motivational effects and mentor growth enhancement',
        content: 'Motivational audio editing with growth effects and mentor enhancement',
        colorPalette: 'Gradient from #3498db to #2980b9 (Motivational Blue to Deep Blue)',
        buttonStyle: 'Motivational ghost buttons with mentor borders',
        iconStyle: 'Filled motivational icons with mentor growth themes',
        tabStyle: 'Hidden navigation with motivational gesture control',
        imageUsage: 'Audio editing with motivational effect previews and mentor growth tools',
        placement: {
          images: 'Audio editing with motivational mentor previews',
          tabs: 'Hidden motivational gesture navigation',
          icons: 'Filled motivational mentor growth icons',
          buttons: 'Ghost motivational style with mentor borders'
        }
      },
      {
        id: 'mm-11-4',
        slideNumber: 4,
        name: 'Template 11 — Slide 4',
        layout: 'Audio message composition with motivational overlays and mentor wisdom',
        content: 'Motivational audio-text composition with growth overlays and mentor wisdom',
        colorPalette: 'Gradient from #9b59b6 to #8e44ad (Motivational Purple to Deep Purple)',
        buttonStyle: 'Motivational icon+text buttons with mentor symbols',
        iconStyle: 'Floating motivational action with mentor growth themes',
        tabStyle: 'Side motivational drawer with mentor options',
        imageUsage: 'Audio waveforms with motivational text overlay and mentor wisdom',
        placement: {
          images: 'Audio waveforms with motivational mentor overlays',
          tabs: 'Side motivational mentor options drawer',
          icons: 'Floating motivational mentor growth action button',
          buttons: 'Motivational icon+text with mentor symbols'
        }
      },
      {
        id: 'mm-11-5',
        slideNumber: 5,
        name: 'Template 11 — Slide 5',
        layout: 'Audio sharing with motivational codes and mentor growth connection',
        content: 'Final motivational audio sharing with growth codes and mentor connection',
        colorPalette: 'Gradient from #e74c3c to #c0392b (Motivational Red to Deep Red)',
        buttonStyle: 'Motivational gradient buttons with mentor sparkle, 14px radius',
        iconStyle: 'Contextual motivational mentor growth icons',
        tabStyle: 'Bottom motivational navigation with mentor bonds',
        imageUsage: 'Circular mentor avatars with motivational growth frames',
        placement: {
          images: 'Circular mentor photos with motivational frames',
          tabs: 'Bottom mentor growth bond navigation',
          icons: 'Contextual motivational mentor icons',
          buttons: 'Motivational gradient with mentor sparkle'
        }
      }
    ]
  },

  // TEMPLATE 12: Partner - Memory + Romantic tone (5 slides)
  {
    id: 'partner-romantic-12',
    name: 'Partner Romance Collection',
    description: 'Romantic memory-based messages for partners',
    preview: '/assets/templates/partner-romantic.jpg',
    suitableFor: ['partner', 'soulmate', 'beloved'],
    style: 'romantic',
    appTheme: 'Partnership & Love',
    screenCount: 5,
    slides: [
      {
        id: 'pr-12-1',
        slideNumber: 1,
        name: 'Template 12 — Slide 1',
        layout: 'Memory album with romantic partner themes and love-focused interface',
        content: 'Romantic memory album with partner themes and love-sharing interface',
        colorPalette: 'Gradient from #ff6b6b to #ffa726 (Romantic Coral to Warm Amber)',
        buttonStyle: 'Romantic soft buttons with partner love, 24px radius',
        iconStyle: 'Romantic partner icons with love themes',
        tabStyle: 'Bottom romantic navigation with partnership icons',
        imageUsage: 'Memory album with romantic partner overlays and love elements',
        placement: {
          images: 'Memory album with romantic partner overlays',
          tabs: 'Romantic bottom navigation with partnership themes',
          icons: 'Love-focused romantic partner icons',
          buttons: 'Soft romantic partner button styling'
        }
      },
      {
        id: 'pr-12-2',
        slideNumber: 2,
        name: 'Template 12 — Slide 2',
        layout: 'Memory collection with romantic categories and partner milestone organization',
        content: 'Romantic memory collection with love categories and partner milestone organization',
        colorPalette: 'Gradient from #e74c3c to #f39c12 (Romantic Red to Warm Orange)',
        buttonStyle: 'Romantic filled buttons with partner themes, 20px radius',
        iconStyle: 'Outlined romantic icons with partner love edges',
        tabStyle: 'Top romantic tabs with partner milestone categories',
        imageUsage: 'Memory grid with romantic partner milestone-themed previews',
        placement: {
          images: 'Memory grid with romantic partner previews',
          tabs: 'Top partner milestone category navigation',
          icons: 'Romantic outline partner love icons',
          buttons: 'Soft romantic partner button style'
        }
      },
      {
        id: 'pr-12-3',
        slideNumber: 3,
        name: 'Template 12 — Slide 3',
        layout: 'Memory editing with romantic filters and partner love enhancement',
        content: 'Romantic memory editing with love filters and partner enhancement',
        colorPalette: 'Gradient from #9b59b6 to #8e44ad (Romantic Purple to Deep Purple)',
        buttonStyle: 'Romantic ghost buttons with partner borders',
        iconStyle: 'Filled romantic icons with partner love themes',
        tabStyle: 'Hidden navigation with romantic gesture control',
        imageUsage: 'Memory editing with romantic filter previews and partner love elements',
        placement: {
          images: 'Memory editing with romantic partner previews',
          tabs: 'Hidden romantic gesture navigation',
          icons: 'Filled romantic partner love icons',
          buttons: 'Ghost romantic style with partner borders'
        }
      },
      {
        id: 'pr-12-4',
        slideNumber: 4,
        name: 'Template 12 — Slide 4',
        layout: 'Memory storytelling with romantic narrative and partner journey elements',
        content: 'Romantic memory storytelling with love narrative and partner journey',
        colorPalette: 'Gradient from #27ae60 to #2ecc71 (Romantic Green to Light Green)',
        buttonStyle: 'Romantic icon+text buttons with partner symbols',
        iconStyle: 'Floating romantic action with partner love themes',
        tabStyle: 'Side romantic drawer with partner options',
        imageUsage: 'Memory backgrounds with romantic text overlay and partner journey',
        placement: {
          images: 'Memory backgrounds with romantic partner overlays',
          tabs: 'Side romantic partner options drawer',
          icons: 'Floating romantic partner love action button',
          buttons: 'Romantic icon+text with partner symbols'
        }
      },
      {
        id: 'pr-12-5',
        slideNumber: 5,
        name: 'Template 12 — Slide 5',
        layout: 'Memory sharing with romantic codes and partner love connection',
        content: 'Final romantic memory sharing with love codes and eternal partner connection',
        colorPalette: 'Gradient from #3498db to #2980b9 (Romantic Blue to Deep Blue)',
        buttonStyle: 'Romantic gradient buttons with partner sparkle, 22px radius',
        iconStyle: 'Contextual romantic partner love icons',
        tabStyle: 'Bottom romantic navigation with partnership bonds',
        imageUsage: 'Circular partner avatars with romantic love frames',
        placement: {
          images: 'Circular partner photos with romantic frames',
          tabs: 'Bottom partnership love bond navigation',
          icons: 'Contextual romantic partner icons',
          buttons: 'Romantic gradient with partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 13: Pet - Photo + Fun tone (5 slides)
  {
    id: 'pet-fun-13',
    name: 'Pet Fun Collection',
    description: 'Fun photo-based messages for pets',
    preview: '/assets/templates/pet-fun.jpg',
    suitableFor: ['pet', 'dog', 'cat', 'companion'],
    style: 'fun',
    appTheme: 'Pets & Joy',
    screenCount: 5,
    slides: [
      {
        id: 'pf-13-1',
        slideNumber: 1,
        name: 'Template 13 — Slide 1',
        layout: 'Photo interface with fun pet themes and playful companion-focused design',
        content: 'Fun photo interface with pet themes and playful companion design',
        colorPalette: 'Gradient from #ff7675 to #fd79a8 (Fun Coral to Playful Pink)',
        buttonStyle: 'Playful fun buttons with pet charm, 25px radius',
        iconStyle: 'Fun pet icons with playful themes',
        tabStyle: 'Bottom fun navigation with pet companion icons',
        imageUsage: 'Pet photos with fun playful overlays and companion elements',
        placement: {
          images: 'Pet photos with fun playful overlays',
          tabs: 'Fun bottom navigation with pet companion themes',
          icons: 'Playful fun pet companion icons',
          buttons: 'Playful fun pet button styling'
        }
      },
      {
        id: 'pf-13-2',
        slideNumber: 2,
        name: 'Template 13 — Slide 2',
        layout: 'Photo upload with fun categories and pet companion organization',
        content: 'Fun photo upload with playful categories and pet companion organization',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Fun Cyan to Playful Light Cyan)',
        buttonStyle: 'Fun filled buttons with pet themes, 20px radius',
        iconStyle: 'Outlined fun icons with pet playful edges',
        tabStyle: 'Top fun tabs with pet companion categories',
        imageUsage: 'Photo grid with fun pet companion-themed previews',
        placement: {
          images: 'Photo grid with fun pet companion previews',
          tabs: 'Top pet companion category navigation',
          icons: 'Fun outline pet playful icons',
          buttons: 'Playful fun pet button style'
        }
      },
      {
        id: 'pf-13-3',
        slideNumber: 3,
        name: 'Template 13 — Slide 3',
        layout: 'Photo editing with fun filters and pet companion enhancement',
        content: 'Fun photo editing with playful filters and pet companion enhancement',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Fun Yellow to Playful Orange)',
        buttonStyle: 'Fun ghost buttons with pet borders',
        iconStyle: 'Filled fun icons with pet companion themes',
        tabStyle: 'Hidden navigation with fun gesture control',
        imageUsage: 'Photo editing with fun filter previews and pet companion elements',
        placement: {
          images: 'Photo editing with fun pet companion previews',
          tabs: 'Hidden fun gesture navigation',
          icons: 'Filled fun pet companion icons',
          buttons: 'Ghost fun style with pet borders'
        }
      },
      {
        id: 'pf-13-4',
        slideNumber: 4,
        name: 'Template 13 — Slide 4',
        layout: 'Photo message composition with fun overlays and pet companion elements',
        content: 'Fun photo-text composition with playful overlays and pet companion elements',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Fun Purple to Playful Deep Purple)',
        buttonStyle: 'Fun icon+text buttons with pet symbols',
        iconStyle: 'Floating fun action with pet companion themes',
        tabStyle: 'Side fun drawer with pet options',
        imageUsage: 'Photo backgrounds with fun text overlay and pet companion decorations',
        placement: {
          images: 'Photo backgrounds with fun pet companion overlays',
          tabs: 'Side fun pet companion options drawer',
          icons: 'Floating fun pet companion action button',
          buttons: 'Fun icon+text with pet symbols'
        }
      },
      {
        id: 'pf-13-5',
        slideNumber: 5,
        name: 'Template 13 — Slide 5',
        layout: 'Photo sharing with fun codes and pet companion connection',
        content: 'Final fun photo sharing with playful codes and beloved pet companion connection',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Fun Blue to Playful Deep Blue)',
        buttonStyle: 'Fun gradient buttons with pet sparkle, 22px radius',
        iconStyle: 'Contextual fun pet companion icons',
        tabStyle: 'Bottom fun navigation with pet companion bonds',
        imageUsage: 'Circular pet avatars with fun playful frames',
        placement: {
          images: 'Circular pet photos with fun frames',
          tabs: 'Bottom pet companion bond navigation',
          icons: 'Contextual fun pet companion icons',
          buttons: 'Fun gradient with pet sparkle'
        }
      }
    ]
  },

  // TEMPLATE 14: Best Friend - Video + Supportive tone (5 slides)
  {
    id: 'bestfriend-supportive-14',
    name: 'Best Friend Support Collection',
    description: 'Supportive video-based messages for best friends',
    preview: '/assets/templates/bestfriend-supportive.jpg',
    suitableFor: ['bestfriend', 'bff', 'closest friend'],
    style: 'supportive',
    appTheme: 'Best Friendship & Support',
    screenCount: 5,
    slides: [
      {
        id: 'bs-14-1',
        slideNumber: 1,
        name: 'Template 14 — Slide 1',
        layout: 'Video player with supportive best friend themes and loyalty-focused interface',
        content: 'Supportive video player with best friend themes and loyalty-inspiring interface',
        colorPalette: 'Gradient from #00b894 to #00a085 (Supportive Teal to Deep Teal)',
        buttonStyle: 'Strong supportive buttons with best friend loyalty, 16px radius',
        iconStyle: 'Supportive best friend icons with loyalty themes',
        tabStyle: 'Bottom supportive navigation with best friendship icons',
        imageUsage: 'Video thumbnails with supportive best friend overlays and loyalty elements',
        placement: {
          images: 'Video thumbnails with supportive best friend overlays',
          tabs: 'Supportive bottom navigation with best friendship themes',
          icons: 'Loyalty-focused supportive best friend icons',
          buttons: 'Strong supportive best friend button styling'
        }
      },
      {
        id: 'bs-14-2',
        slideNumber: 2,
        name: 'Template 14 — Slide 2',
        layout: 'Video upload with supportive categories and best friend loyalty organization',
        content: 'Supportive video upload with loyalty categories and best friend organization',
        colorPalette: 'Gradient from #3d5af1 to #ff006e (Supportive Blue to Encouraging Pink)',
        buttonStyle: 'Supportive filled buttons with best friend themes, 14px radius',
        iconStyle: 'Outlined supportive icons with best friend loyalty edges',
        tabStyle: 'Top supportive tabs with best friend loyalty categories',
        imageUsage: 'Video grid with supportive best friend loyalty-themed previews',
        placement: {
          images: 'Video grid with supportive best friend previews',
          tabs: 'Top best friend loyalty category navigation',
          icons: 'Supportive outline best friend loyalty icons',
          buttons: 'Strong supportive best friend button style'
        }
      },
      {
        id: 'bs-14-3',
        slideNumber: 3,
        name: 'Template 14 — Slide 3',
        layout: 'Video editing with supportive effects and best friend loyalty enhancement',
        content: 'Supportive video editing with loyalty effects and best friend enhancement',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Supportive Magenta to Encouraging Red)',
        buttonStyle: 'Supportive ghost buttons with best friend borders',
        iconStyle: 'Filled supportive icons with best friend loyalty themes',
        tabStyle: 'Hidden navigation with supportive gesture control',
        imageUsage: 'Video editing with supportive effect previews and best friend loyalty tools',
        placement: {
          images: 'Video editing with supportive best friend previews',
          tabs: 'Hidden supportive gesture navigation',
          icons: 'Filled supportive best friend loyalty icons',
          buttons: 'Ghost supportive style with best friend borders'
        }
      },
      {
        id: 'bs-14-4',
        slideNumber: 4,
        name: 'Template 14 — Slide 4',
        layout: 'Video message composition with supportive overlays and best friend loyalty',
        content: 'Supportive video-text composition with loyalty overlays and best friend elements',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Supportive Green to Encouraging Orange)',
        buttonStyle: 'Supportive icon+text buttons with best friend symbols',
        iconStyle: 'Floating supportive action with best friend loyalty themes',
        tabStyle: 'Side supportive drawer with best friend options',
        imageUsage: 'Video backgrounds with supportive text overlay and best friend loyalty',
        placement: {
          images: 'Video backgrounds with supportive best friend overlays',
          tabs: 'Side supportive best friend options drawer',
          icons: 'Floating supportive best friend loyalty action button',
          buttons: 'Supportive icon+text with best friend symbols'
        }
      },
      {
        id: 'bs-14-5',
        slideNumber: 5,
        name: 'Template 14 — Slide 5',
        layout: 'Video sharing with supportive codes and best friend loyalty connection',
        content: 'Final supportive video sharing with loyalty codes and eternal best friend connection',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Supportive Red to Encouraging Yellow)',
        buttonStyle: 'Supportive gradient buttons with best friend sparkle, 18px radius',
        iconStyle: 'Contextual supportive best friend loyalty icons',
        tabStyle: 'Bottom supportive navigation with best friendship bonds',
        imageUsage: 'Circular best friend avatars with supportive loyalty frames',
        placement: {
          images: 'Circular best friend photos with supportive frames',
          tabs: 'Bottom best friendship loyalty bond navigation',
          icons: 'Contextual supportive best friend icons',
          buttons: 'Supportive gradient with best friend sparkle'
        }
      }
    ]
  },

  // TEMPLATE 15: Spouse - Song + Emotional tone (5 slides)
  {
    id: 'spouse-emotional-15',
    name: 'Spouse Emotional Collection',
    description: 'Emotional song-based messages for spouses',
    preview: '/assets/templates/spouse-emotional.jpg',
    suitableFor: ['spouse', 'husband', 'wife'],
    style: 'emotional',
    appTheme: 'Marriage & Deep Connection',
    screenCount: 5,
    slides: [
      {
        id: 'se-15-1',
        slideNumber: 1,
        name: 'Template 15 — Slide 1',
        layout: 'Music player with emotional spouse themes and deep connection-focused interface',
        content: 'Emotional music player with spouse themes and deep connection-inspiring interface',
        colorPalette: 'Gradient from #ffeaa7 to #fab1a0 (Emotional Warm Yellow to Soft Peach)',
        buttonStyle: 'Deeply emotional buttons with spouse connection, 24px radius',
        iconStyle: 'Emotional spouse icons with deep connection themes',
        tabStyle: 'Bottom emotional navigation with marriage icons',
        imageUsage: 'Music waveforms with emotional spouse overlays and connection elements',
        placement: {
          images: 'Music waveforms with emotional spouse overlays',
          tabs: 'Emotional bottom navigation with marriage themes',
          icons: 'Deep connection-focused emotional spouse icons',
          buttons: 'Deeply emotional spouse button styling'
        }
      },
      {
        id: 'se-15-2',
        slideNumber: 2,
        name: 'Template 15 — Slide 2',
        layout: 'Song selection with emotional categories and spouse connection organization',
        content: 'Emotional song selection with connection categories and spouse organization',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Emotional Purple to Deep Purple)',
        buttonStyle: 'Emotional filled buttons with spouse themes, 20px radius',
        iconStyle: 'Outlined emotional icons with spouse connection edges',
        tabStyle: 'Top emotional tabs with spouse connection categories',
        imageUsage: 'Song covers with emotional spouse connection-themed overlays',
        placement: {
          images: 'Song covers with emotional spouse previews',
          tabs: 'Top spouse connection category navigation',
          icons: 'Emotional outline spouse connection icons',
          buttons: 'Deeply emotional spouse button style'
        }
      },
      {
        id: 'se-15-3',
        slideNumber: 3,
        name: 'Template 15 — Slide 3',
        layout: 'Song customization with emotional effects and spouse connection enhancement',
        content: 'Emotional song customization with connection effects and spouse enhancement',
        colorPalette: 'Gradient from #81ecec to #74b9ff (Emotional Cyan to Light Blue)',
        buttonStyle: 'Emotional ghost buttons with spouse borders',
        iconStyle: 'Filled emotional icons with spouse connection themes',
        tabStyle: 'Hidden navigation with emotional gesture control',
        imageUsage: 'Song editing with emotional effect previews and spouse connection tools',
        placement: {
          images: 'Song editing with emotional spouse previews',
          tabs: 'Hidden emotional gesture navigation',
          icons: 'Filled emotional spouse connection icons',
          buttons: 'Ghost emotional style with spouse borders'
        }
      },
      {
        id: 'se-15-4',
        slideNumber: 4,
        name: 'Template 15 — Slide 4',
        layout: 'Song message composition with emotional overlays and spouse connection',
        content: 'Emotional song-text composition with connection overlays and spouse elements',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Emotional Pink to Warm Yellow)',
        buttonStyle: 'Emotional icon+text buttons with spouse symbols',
        iconStyle: 'Floating emotional action with spouse connection themes',
        tabStyle: 'Side emotional drawer with spouse options',
        imageUsage: 'Song backgrounds with emotional text overlay and spouse connection',
        placement: {
          images: 'Song backgrounds with emotional spouse overlays',
          tabs: 'Side emotional spouse options drawer',
          icons: 'Floating emotional spouse connection action button',
          buttons: 'Emotional icon+text with spouse symbols'
        }
      },
      {
        id: 'se-15-5',
        slideNumber: 5,
        name: 'Template 15 — Slide 5',
        layout: 'Song sharing with emotional codes and spouse connection bond',
        content: 'Final emotional song sharing with connection codes and eternal spouse bond',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Emotional Cyan to Light Cyan)',
        buttonStyle: 'Emotional gradient buttons with spouse sparkle, 22px radius',
        iconStyle: 'Contextual emotional spouse connection icons',
        tabStyle: 'Bottom emotional navigation with marriage bonds',
        imageUsage: 'Circular spouse avatars with emotional connection frames',
        placement: {
          images: 'Circular spouse photos with emotional frames',
          tabs: 'Bottom marriage connection bond navigation',
          icons: 'Contextual emotional spouse icons',
          buttons: 'Emotional gradient with spouse sparkle'
        }
      }
    ]
  },

  // TEMPLATES 16-30: 10 SLIDES EACH (150 TOTAL SLIDES)

  // TEMPLATE 16: Gaming Friend - Text + Fun tone (10 slides)
  {
    id: 'gaming-friend-16',
    name: 'Gaming Friend Fun Collection',
    description: 'Fun text-based messages for gaming friends',
    preview: '/assets/templates/gaming-friend.jpg',
    suitableFor: ['gaming friend', 'gamer', 'team mate'],
    style: 'fun',
    appTheme: 'Gaming & Competition',
    screenCount: 10,
    slides: [
      {
        id: 'gf-16-1',
        slideNumber: 1,
        name: 'Template 16 — Slide 1',
        layout: 'Gaming text interface with fun competition themes and victory-focused design',
        content: 'Fun gaming text interface with competition themes and victory design',
        colorPalette: 'Gradient from #ff006e to #8338ec (Gaming Magenta to Purple)',
        buttonStyle: 'Gaming action buttons with neon glow effects, 15px radius',
        iconStyle: 'Gaming fun icons (controller, trophy, power)',
        tabStyle: 'Bottom gaming navigation with competition themes',
        imageUsage: 'Gaming backgrounds with neon text overlays and competition elements',
        placement: {
          images: 'Gaming backgrounds with neon competition overlays',
          tabs: 'Gaming-focused bottom navigation',
          icons: 'Neon-style gaming competition icons',
          buttons: 'Glowing gaming action button styling'
        }
      },
      {
        id: 'gf-16-2',
        slideNumber: 2,
        name: 'Template 16 — Slide 2',
        layout: 'Text composition with gaming prompts and competition message templates',
        content: 'Gaming text composition with competition prompts and victory message templates',
        colorPalette: 'Gradient from #fb8500 to #ffb703 (Gaming Orange to Yellow)',
        buttonStyle: 'Gaming filled buttons with competition themes, 12px radius',
        iconStyle: 'Gaming genre icons (action, RPG, strategy)',
        tabStyle: 'Top gaming tabs with competition categories',
        imageUsage: 'None - pure gaming text focus with neon backgrounds',
        placement: {
          images: 'No images - gaming text-focused interface',
          tabs: 'Top gaming competition category navigation',
          icons: 'Gaming genre and competition icons',
          buttons: 'Gaming competition button style'
        }
      },
      {
        id: 'gf-16-3',
        slideNumber: 3,
        name: 'Template 16 — Slide 3',
        layout: 'Message preview with gaming typography and competition styling',
        content: 'Gaming message preview with competition typography and victory styling',
        colorPalette: 'Gradient from #06ffa5 to #3b82f6 (Gaming Cyan to Blue)',
        buttonStyle: 'Gaming ghost buttons with competition borders',
        iconStyle: 'Gaming achievement icons (medal, crown, star)',
        tabStyle: 'Hidden navigation with gaming gesture control',
        imageUsage: 'Gaming decorative elements and competition embellishments',
        placement: {
          images: 'Gaming decorative elements around text',
          tabs: 'Hidden gaming gesture navigation',
          icons: 'Gaming achievement and competition icons',
          buttons: 'Ghost gaming style with neon borders'
        }
      },
      {
        id: 'gf-16-4',
        slideNumber: 4,
        name: 'Template 16 — Slide 4',
        layout: 'Text customization with gaming fonts and competition personalization',
        content: 'Gaming text customization with competition fonts and victory personalization',
        colorPalette: 'Gradient from #ef476f to #ffd166 (Gaming Pink to Yellow)',
        buttonStyle: 'Gaming icon+text buttons with competition symbols',
        iconStyle: 'Gaming streaming icons (camera, microphone, chat)',
        tabStyle: 'Side gaming drawer with competition options',
        imageUsage: 'Gaming decoration options and competition embellishments',
        placement: {
          images: 'Gaming decorative options gallery',
          tabs: 'Side gaming competition options drawer',
          icons: 'Gaming streaming and competition icons',
          buttons: 'Gaming icon+text with competition symbols'
        }
      },
      {
        id: 'gf-16-5',
        slideNumber: 5,
        name: 'Template 16 — Slide 5',
        layout: 'Gaming achievement showcase with competition stats and victory displays',
        content: 'Gaming achievement showcase with competition statistics and victory displays',
        colorPalette: 'Gradient from #7209b7 to #560bad (Gaming Purple to Dark Purple)',
        buttonStyle: 'Gaming achievement buttons with victory themes',
        iconStyle: 'Gaming news icons (article, comment, share)',
        tabStyle: 'Gaming achievement tabs with competition categories',
        imageUsage: 'Gaming achievement banners and competition highlights',
        placement: {
          images: 'Gaming achievement banners and victory displays',
          tabs: 'Gaming achievement category navigation',
          icons: 'Gaming achievement and victory icons',
          buttons: 'Gaming achievement showcase style'
        }
      },
      {
        id: 'gf-16-6',
        slideNumber: 6,
        name: 'Template 16 — Slide 6',
        layout: 'Team formation with gaming collaboration and competition team building',
        content: 'Gaming team formation with collaboration and competition team building',
        colorPalette: 'Gradient from #f72585 to #b5179e (Gaming Pink to Magenta)',
        buttonStyle: 'Gaming team buttons with collaboration themes',
        iconStyle: 'Gaming competition icons (bracket, trophy, timer)',
        tabStyle: 'Gaming team tabs with collaboration categories',
        imageUsage: 'Gaming team banners and collaboration highlights',
        placement: {
          images: 'Gaming team banners and collaboration displays',
          tabs: 'Gaming team collaboration navigation',
          icons: 'Gaming team and collaboration icons',
          buttons: 'Gaming team building style'
        }
      },
      {
        id: 'gf-16-7',
        slideNumber: 7,
        name: 'Template 16 — Slide 7',
        layout: 'Strategy planning with gaming tactics and competition preparation',
        content: 'Gaming strategy planning with tactical discussion and competition preparation',
        colorPalette: 'Gradient from #4361ee to #7209b7 (Gaming Blue to Purple)',
        buttonStyle: 'Gaming strategy buttons with tactical themes',
        iconStyle: 'Gaming analytics icons (chart, graph, trending)',
        tabStyle: 'Gaming strategy tabs with tactical categories',
        imageUsage: 'Gaming strategy charts and tactical visualizations',
        placement: {
          images: 'Gaming strategy charts and tactical displays',
          tabs: 'Gaming strategy tactical navigation',
          icons: 'Gaming analytics and strategy icons',
          buttons: 'Gaming strategic planning style'
        }
      },
      {
        id: 'gf-16-8',
        slideNumber: 8,
        name: 'Template 16 — Slide 8',
        layout: 'Victory celebration with gaming triumph and competition success themes',
        content: 'Gaming victory celebration with triumph display and competition success',
        colorPalette: 'Gradient from #f77f00 to #fcbf49 (Gaming Orange to Light Orange)',
        buttonStyle: 'Gaming victory buttons with triumph themes',
        iconStyle: 'Gaming marketplace icons (coin, trade, cart)',
        tabStyle: 'Gaming victory tabs with triumph categories',
        imageUsage: 'Gaming victory banners and triumph celebrations',
        placement: {
          images: 'Gaming victory banners and triumph displays',
          tabs: 'Gaming victory triumph navigation',
          icons: 'Gaming victory and celebration icons',
          buttons: 'Gaming triumph celebration style'
        }
      },
      {
        id: 'gf-16-9',
        slideNumber: 9,
        name: 'Template 16 — Slide 9',
        layout: 'Gaming community with friendship bonds and competition camaraderie',
        content: 'Gaming community building with friendship bonds and competition camaraderie',
        colorPalette: 'Gradient from #003566 to #0077b6 (Gaming Navy to Blue)',
        buttonStyle: 'Gaming community buttons with friendship themes',
        iconStyle: 'Gaming team management icons (group, leader, member)',
        tabStyle: 'Gaming community tabs with friendship categories',
        imageUsage: 'Gaming community banners and friendship celebrations',
        placement: {
          images: 'Gaming community banners and friendship displays',
          tabs: 'Gaming community friendship navigation',
          icons: 'Gaming community and friendship icons',
          buttons: 'Gaming community building style'
        }
      },
      {
        id: 'gf-16-10',
        slideNumber: 10,
        name: 'Template 16 — Slide 10',
        layout: 'Message sharing with gaming codes and competition friend connection',
        content: 'Final gaming message sharing with competition codes and gaming friend connection',
        colorPalette: 'Gradient from #9d4edd to #c77dff (Gaming Purple to Light Purple)',
        buttonStyle: 'Gaming gradient buttons with friend sparkle, 16px radius',
        iconStyle: 'Contextual gaming friend icons',
        tabStyle: 'Bottom gaming navigation with friend bonds',
        imageUsage: 'Circular gamer avatars with competition friend frames',
        placement: {
          images: 'Circular gamer photos with competition frames',
          tabs: 'Bottom gaming friend bond navigation',
          icons: 'Contextual gaming friend icons',
          buttons: 'Gaming gradient with friend sparkle'
        }
      }
    ]
  },

  // TEMPLATE 17: Work Colleague - Photo + Professional tone (10 slides)
  {
    id: 'work-colleague-17',
    name: 'Work Colleague Professional Collection',
    description: 'Professional photo-based messages for work colleagues',
    preview: '/assets/templates/work-colleague.jpg',
    suitableFor: ['work colleague', 'coworker', 'professional contact'],
    style: 'professional',
    appTheme: 'Business & Professional Network',
    screenCount: 10,
    slides: [
      {
        id: 'wc-17-1',
        slideNumber: 1,
        name: 'Template 17 — Slide 1',
        layout: 'Professional photo portfolio with workplace achievement displays',
        content: 'Professional photo portfolio showcasing workplace achievements and collaboration',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Charcoal to Gray)',
        buttonStyle: 'Clean corporate buttons with business themes, 4px radius',
        iconStyle: 'Corporate professional icons with business themes',
        tabStyle: 'Bottom corporate navigation with business icons',
        imageUsage: 'Professional workplace photos with achievement overlays',
        placement: {
          images: 'Professional workplace achievement photo displays',
          tabs: 'Corporate bottom navigation with business themes',
          icons: 'Professional business achievement icons',
          buttons: 'Clean corporate business button styling'
        }
      },
      {
        id: 'wc-17-2',
        slideNumber: 2,
        name: 'Template 17 — Slide 2',
        layout: 'Team collaboration showcase with professional project highlights',
        content: 'Team collaboration showcase featuring professional project achievements',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Corporate Blue to Light Blue)',
        buttonStyle: 'Professional collaboration buttons with teamwork themes, 6px radius',
        iconStyle: 'Team collaboration icons with professional edges',
        tabStyle: 'Top professional tabs with collaboration categories',
        imageUsage: 'Team collaboration photos with professional project overlays',
        placement: {
          images: 'Team collaboration professional project displays',
          tabs: 'Top professional collaboration navigation',
          icons: 'Professional teamwork collaboration icons',
          buttons: 'Professional collaboration button style'
        }
      },
      {
        id: 'wc-17-3',
        slideNumber: 3,
        name: 'Template 17 — Slide 3',
        layout: 'Professional milestone documentation with achievement timeline',
        content: 'Professional milestone documentation featuring career achievement timeline',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Professional Green to Light Green)',
        buttonStyle: 'Professional milestone buttons with achievement themes',
        iconStyle: 'Professional milestone icons with career progression',
        tabStyle: 'Professional timeline tabs with milestone categories',
        imageUsage: 'Professional milestone photos with achievement timeline overlays',
        placement: {
          images: 'Professional milestone achievement displays',
          tabs: 'Professional milestone timeline navigation',
          icons: 'Professional career progression icons',
          buttons: 'Professional milestone achievement style'
        }
      },
      {
        id: 'wc-17-4',
        slideNumber: 4,
        name: 'Template 17 — Slide 4',
        layout: 'Professional recognition showcase with award and appreciation displays',
        content: 'Professional recognition showcase featuring awards and team appreciation',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Professional Orange to Light Orange)',
        buttonStyle: 'Professional recognition buttons with award themes',
        iconStyle: 'Professional recognition icons with award symbols',
        tabStyle: 'Professional recognition tabs with award categories',
        imageUsage: 'Professional recognition photos with award ceremony overlays',
        placement: {
          images: 'Professional award recognition displays',
          tabs: 'Professional recognition award navigation',
          icons: 'Professional award recognition icons',
          buttons: 'Professional recognition award style'
        }
      },
      {
        id: 'wc-17-5',
        slideNumber: 5,
        name: 'Template 17 — Slide 5',
        layout: 'Professional networking showcase with industry connection displays',
        content: 'Professional networking showcase featuring industry connections and partnerships',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Professional Purple to Light Purple)',
        buttonStyle: 'Professional networking buttons with connection themes',
        iconStyle: 'Professional networking icons with partnership symbols',
        tabStyle: 'Professional networking tabs with connection categories',
        imageUsage: 'Professional networking photos with industry partnership overlays',
        placement: {
          images: 'Professional networking connection displays',
          tabs: 'Professional networking partnership navigation',
          icons: 'Professional networking connection icons',
          buttons: 'Professional networking partnership style'
        }
      },
      {
        id: 'wc-17-6',
        slideNumber: 6,
        name: 'Template 17 — Slide 6',
        layout: 'Professional development showcase with skill enhancement displays',
        content: 'Professional development showcase featuring skill enhancement and learning',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Professional Light Blue to Blue)',
        buttonStyle: 'Professional development buttons with learning themes',
        iconStyle: 'Professional development icons with education symbols',
        tabStyle: 'Professional development tabs with learning categories',
        imageUsage: 'Professional development photos with education enhancement overlays',
        placement: {
          images: 'Professional development learning displays',
          tabs: 'Professional development education navigation',
          icons: 'Professional learning development icons',
          buttons: 'Professional development learning style'
        }
      },
      {
        id: 'wc-17-7',
        slideNumber: 7,
        name: 'Template 17 — Slide 7',
        layout: 'Professional leadership showcase with management achievement displays',
        content: 'Professional leadership showcase featuring management achievements and guidance',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Professional Cyan to Light Cyan)',
        buttonStyle: 'Professional leadership buttons with management themes',
        iconStyle: 'Professional leadership icons with management symbols',
        tabStyle: 'Professional leadership tabs with management categories',
        imageUsage: 'Professional leadership photos with management achievement overlays',
        placement: {
          images: 'Professional leadership management displays',
          tabs: 'Professional leadership management navigation',
          icons: 'Professional management leadership icons',
          buttons: 'Professional leadership management style'
        }
      },
      {
        id: 'wc-17-8',
        slideNumber: 8,
        name: 'Template 17 — Slide 8',
        layout: 'Professional innovation showcase with creative solution displays',
        content: 'Professional innovation showcase featuring creative solutions and breakthroughs',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Professional Light Purple to Purple)',
        buttonStyle: 'Professional innovation buttons with creativity themes',
        iconStyle: 'Professional innovation icons with creative symbols',
        tabStyle: 'Professional innovation tabs with creativity categories',
        imageUsage: 'Professional innovation photos with creative solution overlays',
        placement: {
          images: 'Professional innovation creativity displays',
          tabs: 'Professional innovation creativity navigation',
          icons: 'Professional creative innovation icons',
          buttons: 'Professional innovation creativity style'
        }
      },
      {
        id: 'wc-17-9',
        slideNumber: 9,
        name: 'Template 17 — Slide 9',
        layout: 'Professional appreciation showcase with gratitude and respect displays',
        content: 'Professional appreciation showcase featuring gratitude expressions and respect',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Dark to Gray)',
        buttonStyle: 'Professional appreciation buttons with gratitude themes',
        iconStyle: 'Professional appreciation icons with respect symbols',
        tabStyle: 'Professional appreciation tabs with gratitude categories',
        imageUsage: 'Professional appreciation photos with gratitude expression overlays',
        placement: {
          images: 'Professional appreciation gratitude displays',
          tabs: 'Professional appreciation gratitude navigation',
          icons: 'Professional gratitude appreciation icons',
          buttons: 'Professional appreciation gratitude style'
        }
      },
      {
        id: 'wc-17-10',
        slideNumber: 10,
        name: 'Template 17 — Slide 10',
        layout: 'Professional message sharing with business codes and colleague connection',
        content: 'Final professional message sharing with business codes and colleague connection',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Professional Blue to Light Blue)',
        buttonStyle: 'Professional gradient buttons with colleague sparkle, 6px radius',
        iconStyle: 'Contextual professional colleague icons',
        tabStyle: 'Bottom professional navigation with colleague bonds',
        imageUsage: 'Professional colleague avatars with business connection frames',
        placement: {
          images: 'Professional colleague photos with business frames',
          tabs: 'Bottom professional colleague bond navigation',
          icons: 'Contextual professional colleague icons',
          buttons: 'Professional gradient with colleague sparkle'
        }
      }
    ]
  },

  // TEMPLATE 18: Childhood Friend - Memory + Nostalgic tone (10 slides)
  {
    id: 'childhood-friend-18',
    name: 'Childhood Friend Nostalgia Collection',
    description: 'Nostalgic memory-based messages for childhood friends',
    preview: '/assets/templates/childhood-friend.jpg',
    suitableFor: ['childhood friend', 'old friend', 'longtime buddy'],
    style: 'nostalgic',
    appTheme: 'Childhood Memories & Friendship',
    screenCount: 10,
    slides: [
      {
        id: 'cf-18-1',
        slideNumber: 1,
        name: 'Template 18 — Slide 1',
        layout: 'Childhood memory album with nostalgic playground and friendship themes',
        content: 'Nostalgic childhood memory album featuring playground memories and friendship',
        colorPalette: 'Gradient from #ffeaa7 to #fab1a0 (Nostalgic Warm Yellow to Soft Peach)',
        buttonStyle: 'Nostalgic vintage buttons with childhood warmth, 20px radius',
        iconStyle: 'Nostalgic childhood icons with playground themes',
        tabStyle: 'Bottom nostalgic navigation with childhood friendship icons',
        imageUsage: 'Vintage childhood photos with nostalgic playground overlays',
        placement: {
          images: 'Vintage childhood playground memory displays',
          tabs: 'Nostalgic bottom navigation with childhood themes',
          icons: 'Childhood playground nostalgic friendship icons',
          buttons: 'Nostalgic vintage childhood button styling'
        }
      },
      {
        id: 'cf-18-2',
        slideNumber: 2,
        name: 'Template 18 — Slide 2',
        layout: 'School days collection with nostalgic classroom and learning memories',
        content: 'Nostalgic school days collection featuring classroom memories and learning',
        colorPalette: 'Gradient from #81ecec to #74b9ff (Nostalgic Cyan to Light Blue)',
        buttonStyle: 'Nostalgic school buttons with learning themes, 16px radius',
        iconStyle: 'Nostalgic school icons with education symbols',
        tabStyle: 'Top nostalgic tabs with school memory categories',
        imageUsage: 'Nostalgic school photos with classroom memory overlays',
        placement: {
          images: 'Nostalgic school classroom memory displays',
          tabs: 'Top nostalgic school memory navigation',
          icons: 'Nostalgic school education icons',
          buttons: 'Nostalgic school learning style'
        }
      },
      {
        id: 'cf-18-3',
        slideNumber: 3,
        name: 'Template 18 — Slide 3',
        layout: 'Summer adventures collection with nostalgic outdoor and exploration memories',
        content: 'Nostalgic summer adventures featuring outdoor exploration and friendship adventures',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Nostalgic Pink to Warm Yellow)',
        buttonStyle: 'Nostalgic adventure buttons with exploration themes',
        iconStyle: 'Nostalgic adventure icons with outdoor symbols',
        tabStyle: 'Nostalgic adventure tabs with exploration categories',
        imageUsage: 'Nostalgic summer photos with adventure exploration overlays',
        placement: {
          images: 'Nostalgic summer adventure memory displays',
          tabs: 'Nostalgic adventure exploration navigation',
          icons: 'Nostalgic outdoor adventure icons',
          buttons: 'Nostalgic adventure exploration style'
        }
      },
      {
        id: 'cf-18-4',
        slideNumber: 4,
        name: 'Template 18 — Slide 4',
        layout: 'Birthday celebrations collection with nostalgic party and joy memories',
        content: 'Nostalgic birthday celebrations featuring party memories and joyful moments',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Nostalgic Purple to Deep Purple)',
        buttonStyle: 'Nostalgic celebration buttons with party themes',
        iconStyle: 'Nostalgic celebration icons with party symbols',
        tabStyle: 'Nostalgic celebration tabs with party categories',
        imageUsage: 'Nostalgic birthday photos with party celebration overlays',
        placement: {
          images: 'Nostalgic birthday party memory displays',
          tabs: 'Nostalgic celebration party navigation',
          icons: 'Nostalgic party celebration icons',
          buttons: 'Nostalgic celebration party style'
        }
      },
      {
        id: 'cf-18-5',
        slideNumber: 5,
        name: 'Template 18 — Slide 5',
        layout: 'Growing up timeline with nostalgic transition and change memories',
        content: 'Nostalgic growing up timeline featuring transition memories and friendship evolution',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Nostalgic Cyan to Light Cyan)',
        buttonStyle: 'Nostalgic timeline buttons with growth themes',
        iconStyle: 'Nostalgic timeline icons with transition symbols',
        tabStyle: 'Nostalgic timeline tabs with growth categories',
        imageUsage: 'Nostalgic timeline photos with growth transition overlays',
        placement: {
          images: 'Nostalgic growth timeline memory displays',
          tabs: 'Nostalgic timeline transition navigation',
          icons: 'Nostalgic growth transition icons',
          buttons: 'Nostalgic timeline growth style'
        }
      },
      {
        id: 'cf-18-6',
        slideNumber: 6,
        name: 'Template 18 — Slide 6',
        layout: 'Secret hideouts collection with nostalgic special places and friendship spots',
        content: 'Nostalgic secret hideouts featuring special friendship places and bonding spots',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Nostalgic Orange to Light Orange)',
        buttonStyle: 'Nostalgic hideout buttons with special place themes',
        iconStyle: 'Nostalgic hideout icons with secret symbols',
        tabStyle: 'Nostalgic hideout tabs with special place categories',
        imageUsage: 'Nostalgic hideout photos with special place overlays',
        placement: {
          images: 'Nostalgic special place hideout displays',
          tabs: 'Nostalgic hideout special place navigation',
          icons: 'Nostalgic secret hideout icons',
          buttons: 'Nostalgic hideout special place style'
        }
      },
      {
        id: 'cf-18-7',
        slideNumber: 7,
        name: 'Template 18 — Slide 7',
        layout: 'Childhood dreams collection with nostalgic aspirations and imagination memories',
        content: 'Nostalgic childhood dreams featuring shared aspirations and imagination adventures',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Nostalgic Purple to Light Purple)',
        buttonStyle: 'Nostalgic dreams buttons with imagination themes',
        iconStyle: 'Nostalgic dreams icons with aspiration symbols',
        tabStyle: 'Nostalgic dreams tabs with imagination categories',
        imageUsage: 'Nostalgic dreams photos with imagination aspiration overlays',
        placement: {
          images: 'Nostalgic childhood dreams memory displays',
          tabs: 'Nostalgic dreams imagination navigation',
          icons: 'Nostalgic imagination aspiration icons',
          buttons: 'Nostalgic dreams imagination style'
        }
      },
      {
        id: 'cf-18-8',
        slideNumber: 8,
        name: 'Template 18 — Slide 8',
        layout: 'Friendship promises collection with nostalgic vows and commitment memories',
        content: 'Nostalgic friendship promises featuring childhood vows and loyalty commitments',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Nostalgic Light Blue to Blue)',
        buttonStyle: 'Nostalgic promise buttons with commitment themes',
        iconStyle: 'Nostalgic promise icons with loyalty symbols',
        tabStyle: 'Nostalgic promise tabs with commitment categories',
        imageUsage: 'Nostalgic promise photos with commitment loyalty overlays',
        placement: {
          images: 'Nostalgic friendship promise memory displays',
          tabs: 'Nostalgic promise commitment navigation',
          icons: 'Nostalgic loyalty commitment icons',
          buttons: 'Nostalgic promise commitment style'
        }
      },
      {
        id: 'cf-18-9',
        slideNumber: 9,
        name: 'Template 18 — Slide 9',
        layout: 'Childhood mischief collection with nostalgic adventures and funny memories',
        content: 'Nostalgic childhood mischief featuring adventure memories and funny moments',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Nostalgic Dark to Gray)',
        buttonStyle: 'Nostalgic mischief buttons with adventure themes',
        iconStyle: 'Nostalgic mischief icons with adventure symbols',
        tabStyle: 'Nostalgic mischief tabs with adventure categories',
        imageUsage: 'Nostalgic mischief photos with adventure funny overlays',
        placement: {
          images: 'Nostalgic childhood mischief memory displays',
          tabs: 'Nostalgic mischief adventure navigation',
          icons: 'Nostalgic adventure mischief icons',
          buttons: 'Nostalgic mischief adventure style'
        }
      },
      {
        id: 'cf-18-10',
        slideNumber: 10,
        name: 'Template 18 — Slide 10',
        layout: 'Memory sharing with nostalgic codes and eternal childhood friendship connection',
        content: 'Final nostalgic memory sharing with childhood codes and eternal friendship connection',
        colorPalette: 'Gradient from #dda0dd to #e6e6fa (Nostalgic Plum to Lavender)',
        buttonStyle: 'Nostalgic gradient buttons with childhood sparkle, 18px radius',
        iconStyle: 'Contextual nostalgic childhood friendship icons',
        tabStyle: 'Bottom nostalgic navigation with eternal friendship bonds',
        imageUsage: 'Circular childhood friend avatars with nostalgic eternal frames',
        placement: {
          images: 'Circular childhood friend photos with nostalgic frames',
          tabs: 'Bottom eternal childhood friendship navigation',
          icons: 'Contextual nostalgic childhood friend icons',
          buttons: 'Nostalgic gradient with childhood friendship sparkle'
        }
      }
    ]
  },

  // TEMPLATE 19: Study Buddy - Audio + Motivational tone (10 slides)
  {
    id: 'study-buddy-19',
    name: 'Study Buddy Motivation Collection',
    description: 'Motivational audio-based messages for study buddies',
    preview: '/assets/templates/study-buddy.jpg',
    suitableFor: ['study buddy', 'classmate', 'academic partner'],
    style: 'motivational',
    appTheme: 'Education & Academic Support',
    screenCount: 10,
    slides: [
      {
        id: 'sb-19-1',
        slideNumber: 1,
        name: 'Template 19 — Slide 1',
        layout: 'Study motivation audio with academic achievement themes',
        content: 'Motivational study audio interface with academic achievement and learning focus',
        colorPalette: 'Gradient from #3498db to #2980b9 (Academic Blue to Deep Blue)',
        buttonStyle: 'Academic motivation buttons with study themes, 12px radius',
        iconStyle: 'Academic study icons with motivation symbols',
        tabStyle: 'Bottom academic navigation with study icons',
        imageUsage: 'Audio waveforms with academic study visualizations',
        placement: {
          images: 'Audio waveforms with academic study visuals',
          tabs: 'Academic bottom navigation with study themes',
          icons: 'Motivational academic study icons',
          buttons: 'Academic motivation study button styling'
        }
      },
      {
        id: 'sb-19-2',
        slideNumber: 2,
        name: 'Template 19 — Slide 2',
        layout: 'Study session recording with motivational academic prompts',
        content: 'Academic study session recording with motivational learning prompts',
        colorPalette: 'Gradient from #27ae60 to #2ecc71 (Study Green to Light Green)',
        buttonStyle: 'Study motivation buttons with academic themes, 10px radius',
        iconStyle: 'Study session icons with academic symbols',
        tabStyle: 'Top study tabs with academic categories',
        imageUsage: 'Study session interface with academic motivation elements',
        placement: {
          images: 'Study session with academic motivation elements',
          tabs: 'Top academic study category navigation',
          icons: 'Academic study session icons',
          buttons: 'Study motivation academic style'
        }
      },
      {
        id: 'sb-19-3',
        slideNumber: 3,
        name: 'Template 19 — Slide 3',
        layout: 'Academic progress tracking with motivational milestone displays',
        content: 'Academic progress tracking featuring motivational learning milestones',
        colorPalette: 'Gradient from #9b59b6 to #8e44ad (Academic Purple to Deep Purple)',
        buttonStyle: 'Academic progress buttons with milestone themes',
        iconStyle: 'Academic progress icons with achievement symbols',
        tabStyle: 'Academic progress tabs with milestone categories',
        imageUsage: 'Academic progress charts with motivational milestone overlays',
        placement: {
          images: 'Academic progress milestone displays',
          tabs: 'Academic progress milestone navigation',
          icons: 'Academic achievement progress icons',
          buttons: 'Academic progress milestone style'
        }
      },
      {
        id: 'sb-19-4',
        slideNumber: 4,
        name: 'Template 19 — Slide 4',
        layout: 'Study goal setting with motivational academic achievement planning',
        content: 'Study goal setting featuring motivational academic achievement and planning',
        colorPalette: 'Gradient from #e74c3c to #c0392b (Motivation Red to Deep Red)',
        buttonStyle: 'Study goal buttons with achievement themes',
        iconStyle: 'Study goal icons with planning symbols',
        tabStyle: 'Study goal tabs with achievement categories',
        imageUsage: 'Study goal visualizations with achievement planning overlays',
        placement: {
          images: 'Study goal achievement planning displays',
          tabs: 'Study goal achievement navigation',
          icons: 'Academic goal planning icons',
          buttons: 'Study goal achievement style'
        }
      },
      {
        id: 'sb-19-5',
        slideNumber: 5,
        name: 'Template 19 — Slide 5',
        layout: 'Exam preparation with motivational study strategy and confidence building',
        content: 'Exam preparation featuring motivational study strategies and confidence building',
        colorPalette: 'Gradient from #f39c12 to #e67e22 (Confidence Orange to Deep Orange)',
        buttonStyle: 'Exam prep buttons with confidence themes',
        iconStyle: 'Exam preparation icons with strategy symbols',
        tabStyle: 'Exam prep tabs with strategy categories',
        imageUsage: 'Exam preparation materials with confidence strategy overlays',
        placement: {
          images: 'Exam preparation confidence strategy displays',
          tabs: 'Exam prep strategy navigation',
          icons: 'Exam preparation confidence icons',
          buttons: 'Exam prep confidence style'
        }
      },
      {
        id: 'sb-19-6',
        slideNumber: 6,
        name: 'Template 19 — Slide 6',
        layout: 'Knowledge sharing with collaborative learning and peer support',
        content: 'Knowledge sharing featuring collaborative learning and academic peer support',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Knowledge Green to Light Green)',
        buttonStyle: 'Knowledge sharing buttons with collaboration themes',
        iconStyle: 'Knowledge sharing icons with collaboration symbols',
        tabStyle: 'Knowledge sharing tabs with collaboration categories',
        imageUsage: 'Knowledge sharing displays with collaborative learning overlays',
        placement: {
          images: 'Knowledge sharing collaboration displays',
          tabs: 'Knowledge sharing collaboration navigation',
          icons: 'Collaborative learning icons',
          buttons: 'Knowledge sharing collaboration style'
        }
      },
      {
        id: 'sb-19-7',
        slideNumber: 7,
        name: 'Template 19 — Slide 7',
        layout: 'Study motivation with academic encouragement and peer support messages',
        content: 'Study motivation featuring academic encouragement and supportive peer messages',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Motivation Purple to Light Purple)',
        buttonStyle: 'Study encouragement buttons with support themes',
        iconStyle: 'Study encouragement icons with support symbols',
        tabStyle: 'Study encouragement tabs with support categories',
        imageUsage: 'Study encouragement displays with peer support overlays',
        placement: {
          images: 'Study encouragement peer support displays',
          tabs: 'Study encouragement support navigation',
          icons: 'Academic encouragement support icons',
          buttons: 'Study encouragement support style'
        }
      },
      {
        id: 'sb-19-8',
        slideNumber: 8,
        name: 'Template 19 — Slide 8',
        layout: 'Academic achievement celebration with success recognition and pride',
        content: 'Academic achievement celebration featuring success recognition and academic pride',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Achievement Pink to Success Yellow)',
        buttonStyle: 'Achievement celebration buttons with success themes',
        iconStyle: 'Achievement celebration icons with success symbols',
        tabStyle: 'Achievement celebration tabs with success categories',
        imageUsage: 'Achievement celebration displays with success recognition overlays',
        placement: {
          images: 'Achievement celebration success displays',
          tabs: 'Achievement celebration navigation',
          icons: 'Academic success celebration icons',
          buttons: 'Achievement celebration style'
        }
      },
      {
        id: 'sb-19-9',
        slideNumber: 9,
        name: 'Template 19 — Slide 9',
        layout: 'Study partnership with academic collaboration and mutual support',
        content: 'Study partnership featuring academic collaboration and mutual learning support',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Partnership Blue to Deep Blue)',
        buttonStyle: 'Study partnership buttons with collaboration themes',
        iconStyle: 'Study partnership icons with collaboration symbols',
        tabStyle: 'Study partnership tabs with collaboration categories',
        imageUsage: 'Study partnership displays with academic collaboration overlays',
        placement: {
          images: 'Study partnership collaboration displays',
          tabs: 'Study partnership navigation',
          icons: 'Academic partnership collaboration icons',
          buttons: 'Study partnership collaboration style'
        }
      },
      {
        id: 'sb-19-10',
        slideNumber: 10,
        name: 'Template 19 — Slide 10',
        layout: 'Academic message sharing with study codes and educational bond connection',
        content: 'Final academic message sharing with study codes and educational partnership connection',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Academic Cyan to Light Cyan)',
        buttonStyle: 'Academic gradient buttons with study sparkle, 14px radius',
        iconStyle: 'Contextual academic study partnership icons',
        tabStyle: 'Bottom academic navigation with study partnership bonds',
        imageUsage: 'Circular study buddy avatars with academic partnership frames',
        placement: {
          images: 'Circular study buddy photos with academic frames',
          tabs: 'Bottom academic partnership navigation',
          icons: 'Contextual academic study buddy icons',
          buttons: 'Academic gradient with study partnership sparkle'
        }
      }
    ]
  },

  // TEMPLATE 20: Workout Partner - Video + Supportive tone (10 slides)
  {
    id: 'workout-partner-20',
    name: 'Workout Partner Support Collection',
    description: 'Supportive video-based messages for workout partners',
    preview: '/assets/templates/workout-partner.jpg',
    suitableFor: ['workout partner', 'gym buddy', 'fitness friend'],
    style: 'supportive',
    appTheme: 'Fitness & Mutual Support',
    screenCount: 10,
    slides: [
      {
        id: 'wp-20-1',
        slideNumber: 1,
        name: 'Template 20 — Slide 1',
        layout: 'Fitness video with supportive workout themes and motivation',
        content: 'Supportive fitness video interface with workout motivation and encouragement',
        colorPalette: 'Gradient from #ff7675 to #fd79a8 (Fitness Red to Supportive Pink)',
        buttonStyle: 'Fitness support buttons with workout themes, 16px radius',
        iconStyle: 'Fitness support icons with workout symbols',
        tabStyle: 'Bottom fitness navigation with workout icons',
        imageUsage: 'Video thumbnails with supportive fitness overlays',
        placement: {
          images: 'Video thumbnails with supportive workout overlays',
          tabs: 'Fitness bottom navigation with workout themes',
          icons: 'Supportive fitness workout icons',
          buttons: 'Fitness support workout button styling'
        }
      },
      {
        id: 'wp-20-2',
        slideNumber: 2,
        name: 'Template 20 — Slide 2',
        layout: 'Workout session recording with supportive fitness encouragement',
        content: 'Workout session recording featuring supportive fitness encouragement and motivation',
        colorPalette: 'Gradient from #00b894 to #00a085 (Support Green to Deep Green)',
        buttonStyle: 'Workout support buttons with encouragement themes, 14px radius',
        iconStyle: 'Workout support icons with encouragement symbols',
        tabStyle: 'Top workout tabs with support categories',
        imageUsage: 'Workout session videos with supportive encouragement elements',
        placement: {
          images: 'Workout session with supportive encouragement elements',
          tabs: 'Top workout support category navigation',
          icons: 'Supportive workout encouragement icons',
          buttons: 'Workout support encouragement style'
        }
      },
      {
        id: 'wp-20-3',
        slideNumber: 3,
        name: 'Template 20 — Slide 3',
        layout: 'Fitness progress tracking with supportive milestone celebration',
        content: 'Fitness progress tracking featuring supportive milestone celebration and achievements',
        colorPalette: 'Gradient from #3d5af1 to #ff006e (Progress Blue to Achievement Pink)',
        buttonStyle: 'Fitness progress buttons with celebration themes',
        iconStyle: 'Fitness progress icons with achievement symbols',
        tabStyle: 'Fitness progress tabs with celebration categories',
        imageUsage: 'Fitness progress videos with supportive achievement overlays',
        placement: {
          images: 'Fitness progress achievement displays',
          tabs: 'Fitness progress celebration navigation',
          icons: 'Fitness achievement progress icons',
          buttons: 'Fitness progress celebration style'
        }
      },
      {
        id: 'wp-20-4',
        slideNumber: 4,
        name: 'Template 20 — Slide 4',
        layout: 'Workout motivation with supportive encouragement and strength building',
        content: 'Workout motivation featuring supportive encouragement and mental strength building',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Motivation Magenta to Strength Red)',
        buttonStyle: 'Workout motivation buttons with strength themes',
        iconStyle: 'Workout motivation icons with strength symbols',
        tabStyle: 'Workout motivation tabs with strength categories',
        imageUsage: 'Workout motivation videos with strength encouragement overlays',
        placement: {
          images: 'Workout motivation strength displays',
          tabs: 'Workout motivation navigation',
          icons: 'Workout strength motivation icons',
          buttons: 'Workout motivation strength style'
        }
      },
      {
        id: 'wp-20-5',
        slideNumber: 5,
        name: 'Template 20 — Slide 5',
        layout: 'Exercise technique sharing with supportive guidance and form correction',
        content: 'Exercise technique sharing featuring supportive guidance and helpful form correction',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Guidance Green to Correction Orange)',
        buttonStyle: 'Exercise guidance buttons with technique themes',
        iconStyle: 'Exercise guidance icons with technique symbols',
        tabStyle: 'Exercise guidance tabs with technique categories',
        imageUsage: 'Exercise technique videos with supportive guidance overlays',
        placement: {
          images: 'Exercise technique guidance displays',
          tabs: 'Exercise technique navigation',
          icons: 'Exercise guidance technique icons',
          buttons: 'Exercise guidance technique style'
        }
      },
      {
        id: 'wp-20-6',
        slideNumber: 6,
        name: 'Template 20 — Slide 6',
        layout: 'Recovery support with supportive rest and wellness encouragement',
        content: 'Recovery support featuring supportive rest encouragement and wellness guidance',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Recovery Red to Wellness Yellow)',
        buttonStyle: 'Recovery support buttons with wellness themes',
        iconStyle: 'Recovery support icons with wellness symbols',
        tabStyle: 'Recovery support tabs with wellness categories',
        imageUsage: 'Recovery videos with supportive wellness overlays',
        placement: {
          images: 'Recovery wellness support displays',
          tabs: 'Recovery wellness navigation',
          icons: 'Recovery wellness support icons',
          buttons: 'Recovery wellness support style'
        }
      },
      {
        id: 'wp-20-7',
        slideNumber: 7,
        name: 'Template 20 — Slide 7',
        layout: 'Challenge completion with supportive celebration and achievement recognition',
        content: 'Challenge completion featuring supportive celebration and fitness achievement recognition',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Challenge Purple to Achievement Purple)',
        buttonStyle: 'Challenge completion buttons with celebration themes',
        iconStyle: 'Challenge completion icons with celebration symbols',
        tabStyle: 'Challenge completion tabs with celebration categories',
        imageUsage: 'Challenge completion videos with supportive celebration overlays',
        placement: {
          images: 'Challenge completion celebration displays',
          tabs: 'Challenge completion navigation',
          icons: 'Challenge celebration completion icons',
          buttons: 'Challenge completion celebration style'
        }
      },
      {
        id: 'wp-20-8',
        slideNumber: 8,
        name: 'Template 20 — Slide 8',
        layout: 'Fitness journey documentation with supportive transformation showcase',
        content: 'Fitness journey documentation featuring supportive transformation and growth showcase',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Journey Blue to Transformation Blue)',
        buttonStyle: 'Fitness journey buttons with transformation themes',
        iconStyle: 'Fitness journey icons with transformation symbols',
        tabStyle: 'Fitness journey tabs with transformation categories',
        imageUsage: 'Fitness journey videos with supportive transformation overlays',
        placement: {
          images: 'Fitness journey transformation displays',
          tabs: 'Fitness journey navigation',
          icons: 'Fitness transformation journey icons',
          buttons: 'Fitness journey transformation style'
        }
      },
      {
        id: 'wp-20-9',
        slideNumber: 9,
        name: 'Template 20 — Slide 9',
        layout: 'Workout partnership with supportive team building and mutual encouragement',
        content: 'Workout partnership featuring supportive team building and mutual fitness encouragement',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Partnership Cyan to Team Cyan)',
        buttonStyle: 'Workout partnership buttons with team themes',
        iconStyle: 'Workout partnership icons with team symbols',
        tabStyle: 'Workout partnership tabs with team categories',
        imageUsage: 'Workout partnership videos with supportive team overlays',
        placement: {
          images: 'Workout partnership team displays',
          tabs: 'Workout partnership navigation',
          icons: 'Workout team partnership icons',
          buttons: 'Workout partnership team style'
        }
      },
      {
        id: 'wp-20-10',
        slideNumber: 10,
        name: 'Template 20 — Slide 10',
        layout: 'Fitness message sharing with workout codes and supportive partner connection',
        content: 'Final fitness message sharing with workout codes and supportive partner connection',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Fitness Orange to Support Orange)',
        buttonStyle: 'Fitness gradient buttons with partner sparkle, 16px radius',
        iconStyle: 'Contextual fitness workout partner icons',
        tabStyle: 'Bottom fitness navigation with workout partner bonds',
        imageUsage: 'Circular workout partner avatars with supportive fitness frames',
        placement: {
          images: 'Circular workout partner photos with fitness frames',
          tabs: 'Bottom workout partnership navigation',
          icons: 'Contextual fitness workout partner icons',
          buttons: 'Fitness gradient with workout partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 21: Travel Companion - Song + Fun tone (10 slides)
  {
    id: 'travel-companion-21',
    name: 'Travel Companion Fun Collection',
    description: 'Fun song-based messages for travel companions',
    preview: '/assets/templates/travel-companion.jpg',
    suitableFor: ['travel companion', 'adventure buddy', 'travel friend'],
    style: 'fun',
    appTheme: 'Travel & Adventure Fun',
    screenCount: 10,
    slides: [
      {
        id: 'tc-21-1',
        slideNumber: 1,
        name: 'Template 21 — Slide 1',
        layout: 'Travel song interface with fun adventure themes and wanderlust',
        content: 'Fun travel song interface with adventure themes and wanderlust excitement',
        colorPalette: 'Gradient from #ff9f43 to #feca57 (Adventure Orange to Fun Yellow)',
        buttonStyle: 'Travel fun buttons with adventure themes, 18px radius',
        iconStyle: 'Travel fun icons with adventure symbols',
        tabStyle: 'Bottom travel navigation with adventure icons',
        imageUsage: 'Song albums with fun travel adventure overlays',
        placement: {
          images: 'Song albums with fun travel adventure overlays',
          tabs: 'Travel bottom navigation with adventure themes',
          icons: 'Fun travel adventure icons',
          buttons: 'Travel fun adventure button styling'
        }
      },
      {
        id: 'tc-21-2',
        slideNumber: 2,
        name: 'Template 21 — Slide 2',
        layout: 'Road trip playlist with fun travel songs and journey excitement',
        content: 'Road trip playlist featuring fun travel songs and exciting journey moments',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Journey Teal to Fun Blue)',
        buttonStyle: 'Road trip buttons with journey themes, 16px radius',
        iconStyle: 'Road trip icons with journey symbols',
        tabStyle: 'Top travel tabs with journey categories',
        imageUsage: 'Road trip playlists with fun journey elements',
        placement: {
          images: 'Road trip playlists with fun journey elements',
          tabs: 'Top travel journey category navigation',
          icons: 'Fun road trip journey icons',
          buttons: 'Road trip journey fun style'
        }
      },
      {
        id: 'tc-21-3',
        slideNumber: 3,
        name: 'Template 21 — Slide 3',
        layout: 'Travel memory soundtrack with fun destination themes and exploration',
        content: 'Travel memory soundtrack featuring fun destination themes and exploration excitement',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Memory Red to Exploration Red)',
        buttonStyle: 'Travel memory buttons with exploration themes',
        iconStyle: 'Travel memory icons with exploration symbols',
        tabStyle: 'Travel memory tabs with exploration categories',
        imageUsage: 'Travel memory soundtracks with fun exploration overlays',
        placement: {
          images: 'Travel memory exploration displays',
          tabs: 'Travel memory exploration navigation',
          icons: 'Travel exploration memory icons',
          buttons: 'Travel memory exploration style'
        }
      },
      {
        id: 'tc-21-4',
        slideNumber: 4,
        name: 'Template 21 — Slide 4',
        layout: 'Adventure anthem sharing with fun travel spirit and discovery joy',
        content: 'Adventure anthem sharing featuring fun travel spirit and discovery joy moments',
        colorPalette: 'Gradient from #48dbfb to #0abde3 (Adventure Cyan to Discovery Blue)',
        buttonStyle: 'Adventure anthem buttons with discovery themes',
        iconStyle: 'Adventure anthem icons with discovery symbols',
        tabStyle: 'Adventure anthem tabs with discovery categories',
        imageUsage: 'Adventure anthems with fun discovery overlays',
        placement: {
          images: 'Adventure anthem discovery displays',
          tabs: 'Adventure anthem navigation',
          icons: 'Adventure discovery anthem icons',
          buttons: 'Adventure anthem discovery style'
        }
      },
      {
        id: 'tc-21-5',
        slideNumber: 5,
        name: 'Template 21 — Slide 5',
        layout: 'Destination celebration with fun arrival songs and achievement excitement',
        content: 'Destination celebration featuring fun arrival songs and travel achievement excitement',
        colorPalette: 'Gradient from #ff9ff3 to #f368e0 (Celebration Pink to Achievement Magenta)',
        buttonStyle: 'Destination celebration buttons with achievement themes',
        iconStyle: 'Destination celebration icons with achievement symbols',
        tabStyle: 'Destination celebration tabs with achievement categories',
        imageUsage: 'Destination celebration songs with fun achievement overlays',
        placement: {
          images: 'Destination celebration achievement displays',
          tabs: 'Destination celebration navigation',
          icons: 'Destination achievement celebration icons',
          buttons: 'Destination celebration achievement style'
        }
      },
      {
        id: 'tc-21-6',
        slideNumber: 6,
        name: 'Template 21 — Slide 6',
        layout: 'Travel bonding with fun companion songs and friendship celebration',
        content: 'Travel bonding featuring fun companion songs and travel friendship celebration',
        colorPalette: 'Gradient from #7bed9f to #70a1ff (Bonding Green to Friendship Blue)',
        buttonStyle: 'Travel bonding buttons with friendship themes',
        iconStyle: 'Travel bonding icons with friendship symbols',
        tabStyle: 'Travel bonding tabs with friendship categories',
        imageUsage: 'Travel bonding songs with fun friendship overlays',
        placement: {
          images: 'Travel bonding friendship displays',
          tabs: 'Travel bonding navigation',
          icons: 'Travel friendship bonding icons',
          buttons: 'Travel bonding friendship style'
        }
      },
      {
        id: 'tc-21-7',
        slideNumber: 7,
        name: 'Template 21 — Slide 7',
        layout: 'Cultural exploration with fun world music and diversity celebration',
        content: 'Cultural exploration featuring fun world music and cultural diversity celebration',
        colorPalette: 'Gradient from #ffa726 to #ff7043 (Cultural Orange to Diversity Orange)',
        buttonStyle: 'Cultural exploration buttons with diversity themes',
        iconStyle: 'Cultural exploration icons with diversity symbols',
        tabStyle: 'Cultural exploration tabs with diversity categories',
        imageUsage: 'Cultural exploration music with fun diversity overlays',
        placement: {
          images: 'Cultural exploration diversity displays',
          tabs: 'Cultural exploration navigation',
          icons: 'Cultural diversity exploration icons',
          buttons: 'Cultural exploration diversity style'
        }
      },
      {
        id: 'tc-21-8',
        slideNumber: 8,
        name: 'Template 21 — Slide 8',
        layout: 'Journey soundtrack with fun travel progression and milestone music',
        content: 'Journey soundtrack featuring fun travel progression and exciting milestone music',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Journey Purple to Milestone Purple)',
        buttonStyle: 'Journey soundtrack buttons with milestone themes',
        iconStyle: 'Journey soundtrack icons with milestone symbols',
        tabStyle: 'Journey soundtrack tabs with milestone categories',
        imageUsage: 'Journey soundtracks with fun milestone overlays',
        placement: {
          images: 'Journey soundtrack milestone displays',
          tabs: 'Journey soundtrack navigation',
          icons: 'Journey milestone soundtrack icons',
          buttons: 'Journey soundtrack milestone style'
        }
      },
      {
        id: 'tc-21-9',
        slideNumber: 9,
        name: 'Template 21 — Slide 9',
        layout: 'Travel memories compilation with fun retrospective songs and nostalgia',
        content: 'Travel memories compilation featuring fun retrospective songs and travel nostalgia',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Memory Pink to Nostalgia Yellow)',
        buttonStyle: 'Travel memories buttons with nostalgia themes',
        iconStyle: 'Travel memories icons with nostalgia symbols',
        tabStyle: 'Travel memories tabs with nostalgia categories',
        imageUsage: 'Travel memory compilations with fun nostalgia overlays',
        placement: {
          images: 'Travel memory nostalgia displays',
          tabs: 'Travel memories navigation',
          icons: 'Travel nostalgia memory icons',
          buttons: 'Travel memories nostalgia style'
        }
      },
      {
        id: 'tc-21-10',
        slideNumber: 10,
        name: 'Template 21 — Slide 10',
        layout: 'Travel companion message sharing with journey codes and adventure connection',
        content: 'Final travel companion message sharing with journey codes and adventure bond connection',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Travel Cyan to Adventure Cyan)',
        buttonStyle: 'Travel gradient buttons with companion sparkle, 18px radius',
        iconStyle: 'Contextual travel adventure companion icons',
        tabStyle: 'Bottom travel navigation with adventure companion bonds',
        imageUsage: 'Circular travel companion avatars with fun adventure frames',
        placement: {
          images: 'Circular travel companion photos with adventure frames',
          tabs: 'Bottom travel companionship navigation',
          icons: 'Contextual travel adventure companion icons',
          buttons: 'Travel gradient with adventure companion sparkle'
        }
      }
    ]
  },

  // TEMPLATE 22: Gaming Teammate - Memory + Fun tone (10 slides)
  {
    id: 'gaming-teammate-22',
    name: 'Gaming Teammate Fun Collection',
    description: 'Fun memory-based messages for gaming teammates',
    preview: '/assets/templates/gaming-teammate.jpg',
    suitableFor: ['gaming teammate', 'squad mate', 'gaming partner'],
    style: 'fun',
    appTheme: 'Gaming & Team Fun',
    screenCount: 10,
    slides: [
      {
        id: 'gt-22-1',
        slideNumber: 1,
        name: 'Template 22 — Slide 1',
        layout: 'Gaming memory interface with fun team themes and victory celebration',
        content: 'Fun gaming memory interface with team themes and victory celebration excitement',
        colorPalette: 'Gradient from #00ff88 to #00d4aa (Victory Green to Team Green)',
        buttonStyle: 'Gaming fun buttons with victory themes, 20px radius',
        iconStyle: 'Gaming fun icons with victory symbols',
        tabStyle: 'Bottom gaming navigation with victory icons',
        imageUsage: 'Gaming memories with fun victory celebration overlays',
        placement: {
          images: 'Gaming memories with fun victory celebration overlays',
          tabs: 'Gaming bottom navigation with victory themes',
          icons: 'Fun gaming victory icons',
          buttons: 'Gaming fun victory button styling'
        }
      },
      {
        id: 'gt-22-2',
        slideNumber: 2,
        name: 'Template 22 — Slide 2',
        layout: 'Epic moments recap with fun gaming highlights and team achievements',
        content: 'Epic moments recap featuring fun gaming highlights and exciting team achievements',
        colorPalette: 'Gradient from #ff3838 to #ff006e (Epic Red to Achievement Pink)',
        buttonStyle: 'Epic moments buttons with achievement themes, 18px radius',
        iconStyle: 'Epic moments icons with achievement symbols',
        tabStyle: 'Top gaming tabs with achievement categories',
        imageUsage: 'Epic gaming moments with fun achievement elements',
        placement: {
          images: 'Epic gaming moments with fun achievement elements',
          tabs: 'Top gaming achievement category navigation',
          icons: 'Fun epic gaming achievement icons',
          buttons: 'Epic moments achievement fun style'
        }
      },
      {
        id: 'gt-22-3',
        slideNumber: 3,
        name: 'Template 22 — Slide 3',
        layout: 'Gaming session memories with fun strategy sharing and tactical bonding',
        content: 'Gaming session memories featuring fun strategy sharing and exciting tactical bonding',
        colorPalette: 'Gradient from #3742fa to #2f3542 (Strategy Blue to Tactical Dark)',
        buttonStyle: 'Gaming strategy buttons with tactical themes',
        iconStyle: 'Gaming strategy icons with tactical symbols',
        tabStyle: 'Gaming strategy tabs with tactical categories',
        imageUsage: 'Gaming session memories with fun tactical overlays',
        placement: {
          images: 'Gaming session tactical displays',
          tabs: 'Gaming strategy tactical navigation',
          icons: 'Gaming tactical strategy icons',
          buttons: 'Gaming strategy tactical style'
        }
      },
      {
        id: 'gt-22-4',
        slideNumber: 4,
        name: 'Template 22 — Slide 4',
        layout: 'Team coordination memories with fun communication and synergy celebration',
        content: 'Team coordination memories featuring fun communication and gaming synergy celebration',
        colorPalette: 'Gradient from #ffa502 to #ff6348 (Communication Orange to Synergy Red)',
        buttonStyle: 'Team coordination buttons with synergy themes',
        iconStyle: 'Team coordination icons with synergy symbols',
        tabStyle: 'Team coordination tabs with synergy categories',
        imageUsage: 'Team coordination memories with fun synergy overlays',
        placement: {
          images: 'Team coordination synergy displays',
          tabs: 'Team coordination navigation',
          icons: 'Team synergy coordination icons',
          buttons: 'Team coordination synergy style'
        }
      },
      {
        id: 'gt-22-5',
        slideNumber: 5,
        name: 'Template 22 — Slide 5',
        layout: 'Challenge completion memories with fun boss defeats and progression pride',
        content: 'Challenge completion memories featuring fun boss defeats and gaming progression pride',
        colorPalette: 'Gradient from #7d5fff to #9980FA (Challenge Purple to Progress Purple)',
        buttonStyle: 'Challenge completion buttons with progression themes',
        iconStyle: 'Challenge completion icons with progression symbols',
        tabStyle: 'Challenge completion tabs with progression categories',
        imageUsage: 'Challenge completion memories with fun progression overlays',
        placement: {
          images: 'Challenge completion progression displays',
          tabs: 'Challenge completion navigation',
          icons: 'Challenge progression completion icons',
          buttons: 'Challenge completion progression style'
        }
      },
      {
        id: 'gt-22-6',
        slideNumber: 6,
        name: 'Template 22 — Slide 6',
        layout: 'Funny gaming moments with fun fail compilations and laugh sharing',
        content: 'Funny gaming moments featuring fun fail compilations and hilarious laugh sharing',
        colorPalette: 'Gradient from #ffdd59 to #ffa726 (Funny Yellow to Laugh Orange)',
        buttonStyle: 'Funny moments buttons with laugh themes',
        iconStyle: 'Funny moments icons with laugh symbols',
        tabStyle: 'Funny moments tabs with laugh categories',
        imageUsage: 'Funny gaming memories with fun laugh overlays',
        placement: {
          images: 'Funny gaming laugh displays',
          tabs: 'Funny moments navigation',
          icons: 'Funny laugh gaming icons',
          buttons: 'Funny moments laugh style'
        }
      },
      {
        id: 'gt-22-7',
        slideNumber: 7,
        name: 'Template 22 — Slide 7',
        layout: 'Gaming friendship memories with fun bond building and team spirit',
        content: 'Gaming friendship memories featuring fun bond building and strong team spirit',
        colorPalette: 'Gradient from #26de81 to #20bf6b (Friendship Green to Team Green)',
        buttonStyle: 'Gaming friendship buttons with team spirit themes',
        iconStyle: 'Gaming friendship icons with team spirit symbols',
        tabStyle: 'Gaming friendship tabs with team spirit categories',
        imageUsage: 'Gaming friendship memories with fun team spirit overlays',
        placement: {
          images: 'Gaming friendship team spirit displays',
          tabs: 'Gaming friendship navigation',
          icons: 'Gaming team spirit friendship icons',
          buttons: 'Gaming friendship team spirit style'
        }
      },
      {
        id: 'gt-22-8',
        slideNumber: 8,
        name: 'Template 22 — Slide 8',
        layout: 'Tournament memories with fun competitive spirit and championship celebration',
        content: 'Tournament memories featuring fun competitive spirit and exciting championship celebration',
        colorPalette: 'Gradient from #f368e0 to #ff006e (Tournament Pink to Championship Pink)',
        buttonStyle: 'Tournament buttons with championship themes',
        iconStyle: 'Tournament icons with championship symbols',
        tabStyle: 'Tournament tabs with championship categories',
        imageUsage: 'Tournament memories with fun championship overlays',
        placement: {
          images: 'Tournament championship displays',
          tabs: 'Tournament navigation',
          icons: 'Tournament championship icons',
          buttons: 'Tournament championship style'
        }
      },
      {
        id: 'gt-22-9',
        slideNumber: 9,
        name: 'Template 22 — Slide 9',
        layout: 'Gaming progression memories with fun level achievements and skill development',
        content: 'Gaming progression memories featuring fun level achievements and exciting skill development',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Progression Teal to Skill Blue)',
        buttonStyle: 'Gaming progression buttons with skill themes',
        iconStyle: 'Gaming progression icons with skill symbols',
        tabStyle: 'Gaming progression tabs with skill categories',
        imageUsage: 'Gaming progression memories with fun skill overlays',
        placement: {
          images: 'Gaming progression skill displays',
          tabs: 'Gaming progression navigation',
          icons: 'Gaming skill progression icons',
          buttons: 'Gaming progression skill style'
        }
      },
      {
        id: 'gt-22-10',
        slideNumber: 10,
        name: 'Template 22 — Slide 10',
        layout: 'Gaming teammate message sharing with game codes and squad connection',
        content: 'Final gaming teammate message sharing with game codes and squad bond connection',
        colorPalette: 'Gradient from #ff9f43 to #feca57 (Gaming Orange to Squad Yellow)',
        buttonStyle: 'Gaming gradient buttons with teammate sparkle, 20px radius',
        iconStyle: 'Contextual gaming squad teammate icons',
        tabStyle: 'Bottom gaming navigation with squad teammate bonds',
        imageUsage: 'Circular gaming teammate avatars with fun squad frames',
        placement: {
          images: 'Circular gaming teammate photos with squad frames',
          tabs: 'Bottom gaming squad navigation',
          icons: 'Contextual gaming squad teammate icons',
          buttons: 'Gaming gradient with squad teammate sparkle'
        }
      }
    ]
  },

  // TEMPLATE 23: Pet Owner Bond - Text + Caring tone (10 slides)
  {
    id: 'pet-owner-23',
    name: 'Pet Owner Caring Collection',
    description: 'Caring text-based messages for pet owners',
    preview: '/assets/templates/pet-owner.jpg',
    suitableFor: ['pet owner', 'animal lover', 'pet parent'],
    style: 'caring',
    appTheme: 'Pet Care & Animal Love',
    screenCount: 10,
    slides: [
      {
        id: 'po-23-1',
        slideNumber: 1,
        name: 'Template 23 — Slide 1',
        layout: 'Pet care text interface with caring animal themes and unconditional love',
        content: 'Caring pet care text interface with animal themes and unconditional love expression',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Pet Gold to Caring Orange)',
        buttonStyle: 'Pet caring buttons with love themes, 14px radius',
        iconStyle: 'Pet caring icons with love symbols',
        tabStyle: 'Bottom pet navigation with love icons',
        imageUsage: 'Text layouts with caring pet love overlays',
        placement: {
          images: 'Text layouts with caring pet love overlays',
          tabs: 'Pet bottom navigation with love themes',
          icons: 'Caring pet love icons',
          buttons: 'Pet caring love button styling'
        }
      },
      {
        id: 'po-23-2',
        slideNumber: 2,
        name: 'Template 23 — Slide 2',
        layout: 'Daily pet care messages with caring routine sharing and wellness focus',
        content: 'Daily pet care messages featuring caring routine sharing and pet wellness focus',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Care Blue to Wellness Blue)',
        buttonStyle: 'Daily care buttons with wellness themes, 12px radius',
        iconStyle: 'Daily care icons with wellness symbols',
        tabStyle: 'Top pet tabs with wellness categories',
        imageUsage: 'Daily care texts with caring wellness elements',
        placement: {
          images: 'Daily care texts with caring wellness elements',
          tabs: 'Top pet wellness category navigation',
          icons: 'Caring daily pet wellness icons',
          buttons: 'Daily care wellness caring style'
        }
      },
      {
        id: 'po-23-3',
        slideNumber: 3,
        name: 'Template 23 — Slide 3',
        layout: 'Pet milestone celebration with caring achievement recognition and pride sharing',
        content: 'Pet milestone celebration featuring caring achievement recognition and pet pride sharing',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Achievement Green to Pride Cyan)',
        buttonStyle: 'Pet milestone buttons with pride themes',
        iconStyle: 'Pet milestone icons with pride symbols',
        tabStyle: 'Pet milestone tabs with pride categories',
        imageUsage: 'Pet milestone texts with caring pride overlays',
        placement: {
          images: 'Pet milestone pride displays',
          tabs: 'Pet milestone pride navigation',
          icons: 'Pet pride milestone icons',
          buttons: 'Pet milestone pride style'
        }
      },
      {
        id: 'po-23-4',
        slideNumber: 4,
        name: 'Template 23 — Slide 4',
        layout: 'Pet health updates with caring medical support and recovery encouragement',
        content: 'Pet health updates featuring caring medical support and encouraging recovery messages',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Health Purple to Medical Purple)',
        buttonStyle: 'Pet health buttons with recovery themes',
        iconStyle: 'Pet health icons with recovery symbols',
        tabStyle: 'Pet health tabs with recovery categories',
        imageUsage: 'Pet health texts with caring recovery overlays',
        placement: {
          images: 'Pet health recovery displays',
          tabs: 'Pet health recovery navigation',
          icons: 'Pet recovery health icons',
          buttons: 'Pet health recovery style'
        }
      },
      {
        id: 'po-23-5',
        slideNumber: 5,
        name: 'Template 23 — Slide 5',
        layout: 'Training progress sharing with caring patience and positive reinforcement',
        content: 'Training progress sharing featuring caring patience and loving positive reinforcement',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Training Mint to Progress Green)',
        buttonStyle: 'Training progress buttons with reinforcement themes',
        iconStyle: 'Training progress icons with reinforcement symbols',
        tabStyle: 'Training progress tabs with reinforcement categories',
        imageUsage: 'Training progress texts with caring reinforcement overlays',
        placement: {
          images: 'Training progress reinforcement displays',
          tabs: 'Training progress navigation',
          icons: 'Training reinforcement progress icons',
          buttons: 'Training progress reinforcement style'
        }
      },
      {
        id: 'po-23-6',
        slideNumber: 6,
        name: 'Template 23 — Slide 6',
        layout: 'Pet personality sharing with caring character appreciation and unique trait celebration',
        content: 'Pet personality sharing featuring caring character appreciation and unique trait celebration',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Personality Pink to Character Yellow)',
        buttonStyle: 'Pet personality buttons with character themes',
        iconStyle: 'Pet personality icons with character symbols',
        tabStyle: 'Pet personality tabs with character categories',
        imageUsage: 'Pet personality texts with caring character overlays',
        placement: {
          images: 'Pet personality character displays',
          tabs: 'Pet personality navigation',
          icons: 'Pet character personality icons',
          buttons: 'Pet personality character style'
        }
      },
      {
        id: 'po-23-7',
        slideNumber: 7,
        name: 'Template 23 — Slide 7',
        layout: 'Pet adventure stories with caring exploration sharing and safety reminders',
        content: 'Pet adventure stories featuring caring exploration sharing and loving safety reminders',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Adventure Red to Safety Orange)',
        buttonStyle: 'Pet adventure buttons with safety themes',
        iconStyle: 'Pet adventure icons with safety symbols',
        tabStyle: 'Pet adventure tabs with safety categories',
        imageUsage: 'Pet adventure texts with caring safety overlays',
        placement: {
          images: 'Pet adventure safety displays',
          tabs: 'Pet adventure navigation',
          icons: 'Pet safety adventure icons',
          buttons: 'Pet adventure safety style'
        }
      },
      {
        id: 'po-23-8',
        slideNumber: 8,
        name: 'Template 23 — Slide 8',
        layout: 'Pet bonding moments with caring emotional connection and trust building',
        content: 'Pet bonding moments featuring caring emotional connection and deep trust building',
        colorPalette: 'Gradient from #e17055 to #d63031 (Bonding Orange to Trust Red)',
        buttonStyle: 'Pet bonding buttons with trust themes',
        iconStyle: 'Pet bonding icons with trust symbols',
        tabStyle: 'Pet bonding tabs with trust categories',
        imageUsage: 'Pet bonding texts with caring trust overlays',
        placement: {
          images: 'Pet bonding trust displays',
          tabs: 'Pet bonding navigation',
          icons: 'Pet trust bonding icons',
          buttons: 'Pet bonding trust style'
        }
      },
      {
        id: 'po-23-9',
        slideNumber: 9,
        name: 'Template 23 — Slide 9',
        layout: 'Pet care community with caring support sharing and advice exchange',
        content: 'Pet care community featuring caring support sharing and helpful advice exchange',
        colorPalette: 'Gradient from #00cec9 to #74b9ff (Community Cyan to Support Blue)',
        buttonStyle: 'Pet community buttons with support themes',
        iconStyle: 'Pet community icons with support symbols',
        tabStyle: 'Pet community tabs with support categories',
        imageUsage: 'Pet community texts with caring support overlays',
        placement: {
          images: 'Pet community support displays',
          tabs: 'Pet community navigation',
          icons: 'Pet support community icons',
          buttons: 'Pet community support style'
        }
      },
      {
        id: 'po-23-10',
        slideNumber: 10,
        name: 'Template 23 — Slide 10',
        layout: 'Pet owner message sharing with care codes and animal love connection',
        content: 'Final pet owner message sharing with care codes and deep animal love connection',
        colorPalette: 'Gradient from #fab1a0 to #e17055 (Pet Orange to Love Orange)',
        buttonStyle: 'Pet gradient buttons with owner sparkle, 14px radius',
        iconStyle: 'Contextual pet care owner icons',
        tabStyle: 'Bottom pet navigation with owner love bonds',
        imageUsage: 'Circular pet owner avatars with caring love frames',
        placement: {
          images: 'Circular pet owner photos with love frames',
          tabs: 'Bottom pet ownership navigation',
          icons: 'Contextual pet care owner icons',
          buttons: 'Pet gradient with owner love sparkle'
        }
      }
    ]
  },

  // TEMPLATE 24: Neighbor Friend - Photo + Caring tone (10 slides)
  {
    id: 'neighbor-friend-24',
    name: 'Neighbor Friend Caring Collection',
    description: 'Caring photo-based messages for neighbor friends',
    preview: '/assets/templates/neighbor-friend.jpg',
    suitableFor: ['neighbor friend', 'community friend', 'local buddy'],
    style: 'caring',
    appTheme: 'Neighborhood & Community Care',
    screenCount: 10,
    slides: [
      {
        id: 'nf-24-1',
        slideNumber: 1,
        name: 'Template 24 — Slide 1',
        layout: 'Community photo interface with caring neighbor themes and local support',
        content: 'Caring community photo interface with neighbor themes and local support expression',
        colorPalette: 'Gradient from #81ecec to #74b9ff (Community Cyan to Neighbor Blue)',
        buttonStyle: 'Neighbor caring buttons with community themes, 15px radius',
        iconStyle: 'Neighbor caring icons with community symbols',
        tabStyle: 'Bottom neighbor navigation with community icons',
        imageUsage: 'Community photos with caring neighbor support overlays',
        placement: {
          images: 'Community photos with caring neighbor support overlays',
          tabs: 'Neighbor bottom navigation with community themes',
          icons: 'Caring neighbor community icons',
          buttons: 'Neighbor caring community button styling'
        }
      },
      {
        id: 'nf-24-2',
        slideNumber: 2,
        name: 'Template 24 — Slide 2',
        layout: 'Neighborhood events sharing with caring participation and community bonding',
        content: 'Neighborhood events sharing featuring caring participation and strong community bonding',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Event Green to Participation Cyan)',
        buttonStyle: 'Neighborhood event buttons with bonding themes, 13px radius',
        iconStyle: 'Neighborhood event icons with bonding symbols',
        tabStyle: 'Top neighbor tabs with bonding categories',
        imageUsage: 'Neighborhood event photos with caring bonding elements',
        placement: {
          images: 'Neighborhood event photos with caring bonding elements',
          tabs: 'Top neighbor bonding category navigation',
          icons: 'Caring neighborhood bonding icons',
          buttons: 'Neighborhood event bonding caring style'
        }
      },
      {
        id: 'nf-24-3',
        slideNumber: 3,
        name: 'Template 24 — Slide 3',
        layout: 'Seasonal neighbor greetings with caring holiday sharing and festive community spirit',
        content: 'Seasonal neighbor greetings featuring caring holiday sharing and warm festive community spirit',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Holiday Pink to Festive Yellow)',
        buttonStyle: 'Seasonal greeting buttons with festive themes',
        iconStyle: 'Seasonal greeting icons with festive symbols',
        tabStyle: 'Seasonal greeting tabs with festive categories',
        imageUsage: 'Seasonal greeting photos with caring festive overlays',
        placement: {
          images: 'Seasonal greeting festive displays',
          tabs: 'Seasonal greeting festive navigation',
          icons: 'Seasonal festive greeting icons',
          buttons: 'Seasonal greeting festive style'
        }
      },
      {
        id: 'nf-24-4',
        slideNumber: 4,
        name: 'Template 24 — Slide 4',
        layout: 'Mutual support sharing with caring assistance offers and community help',
        content: 'Mutual support sharing featuring caring assistance offers and helpful community support',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Support Purple to Assistance Purple)',
        buttonStyle: 'Mutual support buttons with assistance themes',
        iconStyle: 'Mutual support icons with assistance symbols',
        tabStyle: 'Mutual support tabs with assistance categories',
        imageUsage: 'Mutual support photos with caring assistance overlays',
        placement: {
          images: 'Mutual support assistance displays',
          tabs: 'Mutual support assistance navigation',
          icons: 'Mutual assistance support icons',
          buttons: 'Mutual support assistance style'
        }
      },
      {
        id: 'nf-24-5',
        slideNumber: 5,
        name: 'Template 24 — Slide 5',
        layout: 'Garden sharing updates with caring harvest celebration and growing together',
        content: 'Garden sharing updates featuring caring harvest celebration and growing together moments',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Garden Mint to Harvest Green)',
        buttonStyle: 'Garden sharing buttons with harvest themes',
        iconStyle: 'Garden sharing icons with harvest symbols',
        tabStyle: 'Garden sharing tabs with harvest categories',
        imageUsage: 'Garden sharing photos with caring harvest overlays',
        placement: {
          images: 'Garden sharing harvest displays',
          tabs: 'Garden sharing navigation',
          icons: 'Garden harvest sharing icons',
          buttons: 'Garden sharing harvest style'
        }
      },
      {
        id: 'nf-24-6',
        slideNumber: 6,
        name: 'Template 24 — Slide 6',
        layout: 'Safety watch updates with caring security awareness and neighborhood protection',
        content: 'Safety watch updates featuring caring security awareness and neighborhood protection spirit',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Safety Red to Protection Orange)',
        buttonStyle: 'Safety watch buttons with protection themes',
        iconStyle: 'Safety watch icons with protection symbols',
        tabStyle: 'Safety watch tabs with protection categories',
        imageUsage: 'Safety watch photos with caring protection overlays',
        placement: {
          images: 'Safety watch protection displays',
          tabs: 'Safety watch navigation',
          icons: 'Safety protection watch icons',
          buttons: 'Safety watch protection style'
        }
      },
      {
        id: 'nf-24-7',
        slideNumber: 7,
        name: 'Template 24 — Slide 7',
        layout: 'Local recommendations with caring business support and community growth',
        content: 'Local recommendations featuring caring business support and positive community growth',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Recommendation Yellow to Business Orange)',
        buttonStyle: 'Local recommendation buttons with business themes',
        iconStyle: 'Local recommendation icons with business symbols',
        tabStyle: 'Local recommendation tabs with business categories',
        imageUsage: 'Local recommendation photos with caring business overlays',
        placement: {
          images: 'Local recommendation business displays',
          tabs: 'Local recommendation navigation',
          icons: 'Local business recommendation icons',
          buttons: 'Local recommendation business style'
        }
      },
      {
        id: 'nf-24-8',
        slideNumber: 8,
        name: 'Template 24 — Slide 8',
        layout: 'Neighborhood milestone celebrations with caring achievement recognition and pride sharing',
        content: 'Neighborhood milestone celebrations featuring caring achievement recognition and community pride sharing',
        colorPalette: 'Gradient from #e17055 to #d63031 (Milestone Orange to Achievement Red)',
        buttonStyle: 'Neighborhood milestone buttons with achievement themes',
        iconStyle: 'Neighborhood milestone icons with achievement symbols',
        tabStyle: 'Neighborhood milestone tabs with achievement categories',
        imageUsage: 'Neighborhood milestone photos with caring achievement overlays',
        placement: {
          images: 'Neighborhood milestone achievement displays',
          tabs: 'Neighborhood milestone navigation',
          icons: 'Neighborhood achievement milestone icons',
          buttons: 'Neighborhood milestone achievement style'
        }
      },
      {
        id: 'nf-24-9',
        slideNumber: 9,
        name: 'Template 24 — Slide 9',
        layout: 'Community friendship growth with caring relationship building and lasting bonds',
        content: 'Community friendship growth featuring caring relationship building and creating lasting bonds',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Friendship Blue to Bond Blue)',
        buttonStyle: 'Community friendship buttons with bond themes',
        iconStyle: 'Community friendship icons with bond symbols',
        tabStyle: 'Community friendship tabs with bond categories',
        imageUsage: 'Community friendship photos with caring bond overlays',
        placement: {
          images: 'Community friendship bond displays',
          tabs: 'Community friendship navigation',
          icons: 'Community bond friendship icons',
          buttons: 'Community friendship bond style'
        }
      },
      {
        id: 'nf-24-10',
        slideNumber: 10,
        name: 'Template 24 — Slide 10',
        layout: 'Neighbor friend message sharing with community codes and local connection',
        content: 'Final neighbor friend message sharing with community codes and deep local connection',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Community Cyan to Local Cyan)',
        buttonStyle: 'Neighbor gradient buttons with friend sparkle, 15px radius',
        iconStyle: 'Contextual neighbor community friend icons',
        tabStyle: 'Bottom neighbor navigation with friend bonds',
        imageUsage: 'Circular neighbor friend avatars with caring community frames',
        placement: {
          images: 'Circular neighbor friend photos with community frames',
          tabs: 'Bottom neighbor friendship navigation',
          icons: 'Contextual neighbor community friend icons',
          buttons: 'Neighbor gradient with friend sparkle'
        }
      }
    ]
  },

  // TEMPLATE 25: Book Club Member - Video + Formal tone (10 slides)
  {
    id: 'book-club-25',
    name: 'Book Club Member Formal Collection',
    description: 'Formal video-based messages for book club members',
    preview: '/assets/templates/book-club.jpg',
    suitableFor: ['book club member', 'reading group friend', 'literary companion'],
    style: 'formal',
    appTheme: 'Literature & Intellectual Exchange',
    screenCount: 10,
    slides: [
      {
        id: 'bc-25-1',
        slideNumber: 1,
        name: 'Template 25 — Slide 1',
        layout: 'Literary video interface with formal academic themes and intellectual discourse',
        content: 'Formal literary video interface with academic themes and intellectual discourse presentation',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Academic Dark to Formal Gray)',
        buttonStyle: 'Literary formal buttons with academic themes, 8px radius',
        iconStyle: 'Literary formal icons with academic symbols',
        tabStyle: 'Bottom literary navigation with academic icons',
        imageUsage: 'Literary videos with formal academic discourse overlays',
        placement: {
          images: 'Literary videos with formal academic discourse overlays',
          tabs: 'Literary bottom navigation with academic themes',
          icons: 'Formal literary academic icons',
          buttons: 'Literary formal academic button styling'
        }
      },
      {
        id: 'bc-25-2',
        slideNumber: 2,
        name: 'Template 25 — Slide 2',
        layout: 'Book analysis discussion with formal critique sharing and scholarly interpretation',
        content: 'Book analysis discussion featuring formal critique sharing and scholarly literary interpretation',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Analysis Blue to Scholarly Blue)',
        buttonStyle: 'Book analysis buttons with scholarly themes, 6px radius',
        iconStyle: 'Book analysis icons with scholarly symbols',
        tabStyle: 'Top literary tabs with scholarly categories',
        imageUsage: 'Book analysis videos with formal scholarly elements',
        placement: {
          images: 'Book analysis videos with formal scholarly elements',
          tabs: 'Top literary scholarly category navigation',
          icons: 'Formal book analysis scholarly icons',
          buttons: 'Book analysis scholarly formal style'
        }
      },
      {
        id: 'bc-25-3',
        slideNumber: 3,
        name: 'Template 25 — Slide 3',
        layout: 'Reading progress updates with formal milestone tracking and academic achievement',
        content: 'Reading progress updates featuring formal milestone tracking and literary academic achievement',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Progress Green to Academic Cyan)',
        buttonStyle: 'Reading progress buttons with academic themes',
        iconStyle: 'Reading progress icons with academic symbols',
        tabStyle: 'Reading progress tabs with academic categories',
        imageUsage: 'Reading progress videos with formal academic overlays',
        placement: {
          images: 'Reading progress academic displays',
          tabs: 'Reading progress academic navigation',
          icons: 'Reading academic progress icons',
          buttons: 'Reading progress academic style'
        }
      },
      {
        id: 'bc-25-4',
        slideNumber: 4,
        name: 'Template 25 — Slide 4',
        layout: 'Author study presentations with formal biographical research and literary context',
        content: 'Author study presentations featuring formal biographical research and comprehensive literary context',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Research Purple to Context Purple)',
        buttonStyle: 'Author study buttons with research themes',
        iconStyle: 'Author study icons with research symbols',
        tabStyle: 'Author study tabs with research categories',
        imageUsage: 'Author study videos with formal research overlays',
        placement: {
          images: 'Author study research displays',
          tabs: 'Author study research navigation',
          icons: 'Author research study icons',
          buttons: 'Author study research style'
        }
      },
      {
        id: 'bc-25-5',
        slideNumber: 5,
        name: 'Template 25 — Slide 5',
        layout: 'Genre exploration with formal literary analysis and classification discussion',
        content: 'Genre exploration featuring formal literary analysis and comprehensive classification discussion',
        colorPalette: 'Gradient from #e17055 to #d63031 (Genre Orange to Classification Red)',
        buttonStyle: 'Genre exploration buttons with classification themes',
        iconStyle: 'Genre exploration icons with classification symbols',
        tabStyle: 'Genre exploration tabs with classification categories',
        imageUsage: 'Genre exploration videos with formal classification overlays',
        placement: {
          images: 'Genre exploration classification displays',
          tabs: 'Genre exploration navigation',
          icons: 'Genre classification exploration icons',
          buttons: 'Genre exploration classification style'
        }
      },
      {
        id: 'bc-25-6',
        slideNumber: 6,
        name: 'Template 25 — Slide 6',
        layout: 'Reading recommendation sharing with formal review criteria and quality assessment',
        content: 'Reading recommendation sharing featuring formal review criteria and comprehensive quality assessment',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Recommendation Gold to Quality Orange)',
        buttonStyle: 'Reading recommendation buttons with quality themes',
        iconStyle: 'Reading recommendation icons with quality symbols',
        tabStyle: 'Reading recommendation tabs with quality categories',
        imageUsage: 'Reading recommendation videos with formal quality overlays',
        placement: {
          images: 'Reading recommendation quality displays',
          tabs: 'Reading recommendation navigation',
          icons: 'Reading quality recommendation icons',
          buttons: 'Reading recommendation quality style'
        }
      },
      {
        id: 'bc-25-7',
        slideNumber: 7,
        name: 'Template 25 — Slide 7',
        layout: 'Literary theory discussion with formal academic framework and scholarly debate',
        content: 'Literary theory discussion featuring formal academic framework and engaging scholarly debate',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Theory Mint to Academic Green)',
        buttonStyle: 'Literary theory buttons with scholarly themes',
        iconStyle: 'Literary theory icons with scholarly symbols',
        tabStyle: 'Literary theory tabs with scholarly categories',
        imageUsage: 'Literary theory videos with formal scholarly overlays',
        placement: {
          images: 'Literary theory scholarly displays',
          tabs: 'Literary theory navigation',
          icons: 'Literary scholarly theory icons',
          buttons: 'Literary theory scholarly style'
        }
      },
      {
        id: 'bc-25-8',
        slideNumber: 8,
        name: 'Template 25 — Slide 8',
        layout: 'Book club meeting summaries with formal discussion points and action items',
        content: 'Book club meeting summaries featuring formal discussion points and structured action items',
        colorPalette: 'Gradient from #fab1a0 to #e17055 (Meeting Orange to Discussion Orange)',
        buttonStyle: 'Book club meeting buttons with discussion themes',
        iconStyle: 'Book club meeting icons with discussion symbols',
        tabStyle: 'Book club meeting tabs with discussion categories',
        imageUsage: 'Book club meeting videos with formal discussion overlays',
        placement: {
          images: 'Book club meeting discussion displays',
          tabs: 'Book club meeting navigation',
          icons: 'Book club discussion meeting icons',
          buttons: 'Book club meeting discussion style'
        }
      },
      {
        id: 'bc-25-9',
        slideNumber: 9,
        name: 'Template 25 — Slide 9',
        layout: 'Literary achievement recognition with formal accomplishment celebration and scholarly honor',
        content: 'Literary achievement recognition featuring formal accomplishment celebration and scholarly honor acknowledgment',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Achievement Pink to Honor Yellow)',
        buttonStyle: 'Literary achievement buttons with honor themes',
        iconStyle: 'Literary achievement icons with honor symbols',
        tabStyle: 'Literary achievement tabs with honor categories',
        imageUsage: 'Literary achievement videos with formal honor overlays',
        placement: {
          images: 'Literary achievement honor displays',
          tabs: 'Literary achievement navigation',
          icons: 'Literary honor achievement icons',
          buttons: 'Literary achievement honor style'
        }
      },
      {
        id: 'bc-25-10',
        slideNumber: 10,
        name: 'Template 25 — Slide 10',
        layout: 'Book club member message sharing with literary codes and intellectual connection',
        content: 'Final book club member message sharing with literary codes and deep intellectual connection',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Literary Blue to Intellectual Blue)',
        buttonStyle: 'Literary gradient buttons with member sparkle, 8px radius',
        iconStyle: 'Contextual book club literary member icons',
        tabStyle: 'Bottom literary navigation with member bonds',
        imageUsage: 'Circular book club member avatars with formal literary frames',
        placement: {
          images: 'Circular book club member photos with literary frames',
          tabs: 'Bottom book club membership navigation',
          icons: 'Contextual book club literary member icons',
          buttons: 'Literary gradient with member sparkle'
        }
      }
    ]
  },

  // TEMPLATE 26: Language Exchange Partner - Audio + Supportive tone (10 slides)
  {
    id: 'language-exchange-26',
    name: 'Language Exchange Partner Supportive Collection',
    description: 'Supportive audio-based messages for language exchange partners',
    preview: '/assets/templates/language-exchange.jpg',
    suitableFor: ['language exchange partner', 'conversation partner', 'language buddy'],
    style: 'supportive',
    appTheme: 'Language Learning & Cultural Exchange',
    screenCount: 10,
    slides: [
      {
        id: 'le-26-1',
        slideNumber: 1,
        name: 'Template 26 — Slide 1',
        layout: 'Language learning audio interface with supportive cultural themes and encouragement',
        content: 'Supportive language learning audio interface with cultural themes and learning encouragement',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Learning Cyan to Supportive Mint)',
        buttonStyle: 'Language learning buttons with support themes, 16px radius',
        iconStyle: 'Language learning icons with support symbols',
        tabStyle: 'Bottom language navigation with support icons',
        imageUsage: 'Audio waveforms with supportive language learning overlays',
        placement: {
          images: 'Audio waveforms with supportive language learning overlays',
          tabs: 'Language bottom navigation with support themes',
          icons: 'Supportive language learning icons',
          buttons: 'Language learning supportive button styling'
        }
      },
      {
        id: 'le-26-2',
        slideNumber: 2,
        name: 'Template 26 — Slide 2',
        layout: 'Pronunciation practice with supportive correction and positive reinforcement',
        content: 'Pronunciation practice featuring supportive correction and encouraging positive reinforcement',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Practice Blue to Correction Blue)',
        buttonStyle: 'Pronunciation buttons with reinforcement themes, 14px radius',
        iconStyle: 'Pronunciation icons with reinforcement symbols',
        tabStyle: 'Top language tabs with reinforcement categories',
        imageUsage: 'Pronunciation audio with supportive correction elements',
        placement: {
          images: 'Pronunciation audio with supportive correction elements',
          tabs: 'Top language reinforcement category navigation',
          icons: 'Supportive pronunciation correction icons',
          buttons: 'Pronunciation correction supportive style'
        }
      },
      {
        id: 'le-26-3',
        slideNumber: 3,
        name: 'Template 26 — Slide 3',
        layout: 'Cultural sharing sessions with supportive understanding and respectful exchange',
        content: 'Cultural sharing sessions featuring supportive understanding and respectful cultural exchange',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Cultural Pink to Exchange Yellow)',
        buttonStyle: 'Cultural sharing buttons with respect themes',
        iconStyle: 'Cultural sharing icons with respect symbols',
        tabStyle: 'Cultural sharing tabs with respect categories',
        imageUsage: 'Cultural sharing audio with supportive respect overlays',
        placement: {
          images: 'Cultural sharing respect displays',
          tabs: 'Cultural sharing respect navigation',
          icons: 'Cultural respect sharing icons',
          buttons: 'Cultural sharing respect style'
        }
      },
      {
        id: 'le-26-4',
        slideNumber: 4,
        name: 'Template 26 — Slide 4',
        layout: 'Progress celebration with supportive milestone recognition and achievement praise',
        content: 'Progress celebration featuring supportive milestone recognition and encouraging achievement praise',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Progress Green to Achievement Cyan)',
        buttonStyle: 'Progress celebration buttons with praise themes',
        iconStyle: 'Progress celebration icons with praise symbols',
        tabStyle: 'Progress celebration tabs with praise categories',
        imageUsage: 'Progress celebration audio with supportive praise overlays',
        placement: {
          images: 'Progress celebration praise displays',
          tabs: 'Progress celebration navigation',
          icons: 'Progress praise celebration icons',
          buttons: 'Progress celebration praise style'
        }
      },
      {
        id: 'le-26-5',
        slideNumber: 5,
        name: 'Template 26 — Slide 5',
        layout: 'Conversation practice with supportive guidance and confidence building',
        content: 'Conversation practice featuring supportive guidance and steady confidence building techniques',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Conversation Purple to Confidence Purple)',
        buttonStyle: 'Conversation practice buttons with confidence themes',
        iconStyle: 'Conversation practice icons with confidence symbols',
        tabStyle: 'Conversation practice tabs with confidence categories',
        imageUsage: 'Conversation practice audio with supportive confidence overlays',
        placement: {
          images: 'Conversation practice confidence displays',
          tabs: 'Conversation practice navigation',
          icons: 'Conversation confidence practice icons',
          buttons: 'Conversation practice confidence style'
        }
      },
      {
        id: 'le-26-6',
        slideNumber: 6,
        name: 'Template 26 — Slide 6',
        layout: 'Grammar assistance with supportive explanation and patient teaching approach',
        content: 'Grammar assistance featuring supportive explanation and patient teaching approach methods',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Grammar Red to Teaching Orange)',
        buttonStyle: 'Grammar assistance buttons with teaching themes',
        iconStyle: 'Grammar assistance icons with teaching symbols',
        tabStyle: 'Grammar assistance tabs with teaching categories',
        imageUsage: 'Grammar assistance audio with supportive teaching overlays',
        placement: {
          images: 'Grammar assistance teaching displays',
          tabs: 'Grammar assistance navigation',
          icons: 'Grammar teaching assistance icons',
          buttons: 'Grammar assistance teaching style'
        }
      },
      {
        id: 'le-26-7',
        slideNumber: 7,
        name: 'Template 26 — Slide 7',
        layout: 'Vocabulary building with supportive memory techniques and retention strategies',
        content: 'Vocabulary building featuring supportive memory techniques and effective retention strategies',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Vocabulary Yellow to Memory Orange)',
        buttonStyle: 'Vocabulary building buttons with memory themes',
        iconStyle: 'Vocabulary building icons with memory symbols',
        tabStyle: 'Vocabulary building tabs with memory categories',
        imageUsage: 'Vocabulary building audio with supportive memory overlays',
        placement: {
          images: 'Vocabulary building memory displays',
          tabs: 'Vocabulary building navigation',
          icons: 'Vocabulary memory building icons',
          buttons: 'Vocabulary building memory style'
        }
      },
      {
        id: 'le-26-8',
        slideNumber: 8,
        name: 'Template 26 — Slide 8',
        layout: 'Language challenge completion with supportive achievement recognition and growth celebration',
        content: 'Language challenge completion featuring supportive achievement recognition and personal growth celebration',
        colorPalette: 'Gradient from #e17055 to #d63031 (Challenge Orange to Growth Red)',
        buttonStyle: 'Language challenge buttons with growth themes',
        iconStyle: 'Language challenge icons with growth symbols',
        tabStyle: 'Language challenge tabs with growth categories',
        imageUsage: 'Language challenge audio with supportive growth overlays',
        placement: {
          images: 'Language challenge growth displays',
          tabs: 'Language challenge navigation',
          icons: 'Language growth challenge icons',
          buttons: 'Language challenge growth style'
        }
      },
      {
        id: 'le-26-9',
        slideNumber: 9,
        name: 'Template 26 — Slide 9',
        layout: 'Exchange partnership bonding with supportive friendship building and mutual learning',
        content: 'Exchange partnership bonding featuring supportive friendship building and enriching mutual learning',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Partnership Mint to Learning Green)',
        buttonStyle: 'Exchange partnership buttons with learning themes',
        iconStyle: 'Exchange partnership icons with learning symbols',
        tabStyle: 'Exchange partnership tabs with learning categories',
        imageUsage: 'Exchange partnership audio with supportive learning overlays',
        placement: {
          images: 'Exchange partnership learning displays',
          tabs: 'Exchange partnership navigation',
          icons: 'Exchange learning partnership icons',
          buttons: 'Exchange partnership learning style'
        }
      },
      {
        id: 'le-26-10',
        slideNumber: 10,
        name: 'Template 26 — Slide 10',
        layout: 'Language exchange message sharing with cultural codes and learning connection',
        content: 'Final language exchange message sharing with cultural codes and deep learning connection',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Exchange Blue to Learning Blue)',
        buttonStyle: 'Language gradient buttons with exchange sparkle, 16px radius',
        iconStyle: 'Contextual language exchange partner icons',
        tabStyle: 'Bottom language navigation with exchange bonds',
        imageUsage: 'Circular language exchange partner avatars with supportive learning frames',
        placement: {
          images: 'Circular language exchange partner photos with learning frames',
          tabs: 'Bottom language exchange navigation',
          icons: 'Contextual language exchange partner icons',
          buttons: 'Language gradient with exchange sparkle'
        }
      }
    ]
  },

  // TEMPLATE 27: Recipe Exchange Friend - Memory + Fun tone (10 slides)
  {
    id: 'recipe-exchange-27',
    name: 'Recipe Exchange Friend Fun Collection',
    description: 'Fun memory-based messages for recipe exchange friends',
    preview: '/assets/templates/recipe-exchange.jpg',
    suitableFor: ['recipe exchange friend', 'cooking buddy', 'culinary companion'],
    style: 'fun',
    appTheme: 'Culinary Adventures & Recipe Sharing',
    screenCount: 10,
    slides: [
      {
        id: 're-27-1',
        slideNumber: 1,
        name: 'Template 27 — Slide 1',
        layout: 'Culinary memory interface with fun cooking themes and flavor adventures',
        content: 'Fun culinary memory interface with cooking themes and exciting flavor adventures',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Culinary Red to Fun Red)',
        buttonStyle: 'Culinary fun buttons with cooking themes, 18px radius',
        iconStyle: 'Culinary fun icons with cooking symbols',
        tabStyle: 'Bottom cooking navigation with culinary icons',
        imageUsage: 'Cooking memories with fun culinary adventure overlays',
        placement: {
          images: 'Cooking memories with fun culinary adventure overlays',
          tabs: 'Cooking bottom navigation with culinary themes',
          icons: 'Fun culinary cooking icons',
          buttons: 'Culinary fun cooking button styling'
        }
      },
      {
        id: 're-27-2',
        slideNumber: 2,
        name: 'Template 27 — Slide 2',
        layout: 'Recipe success stories with fun cooking triumph sharing and flavor celebration',
        content: 'Recipe success stories featuring fun cooking triumph sharing and delicious flavor celebration',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Success Yellow to Triumph Orange)',
        buttonStyle: 'Recipe success buttons with triumph themes, 16px radius',
        iconStyle: 'Recipe success icons with triumph symbols',
        tabStyle: 'Top cooking tabs with triumph categories',
        imageUsage: 'Recipe success memories with fun triumph elements',
        placement: {
          images: 'Recipe success memories with fun triumph elements',
          tabs: 'Top cooking triumph category navigation',
          icons: 'Fun recipe success triumph icons',
          buttons: 'Recipe success triumph fun style'
        }
      },
      {
        id: 're-27-3',
        slideNumber: 3,
        name: 'Template 27 — Slide 3',
        layout: 'Cooking disaster recovery with fun failure stories and learning laughter',
        content: 'Cooking disaster recovery featuring fun failure stories and encouraging learning laughter',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Disaster Red to Recovery Orange)',
        buttonStyle: 'Cooking disaster buttons with recovery themes',
        iconStyle: 'Cooking disaster icons with recovery symbols',
        tabStyle: 'Cooking disaster tabs with recovery categories',
        imageUsage: 'Cooking disaster memories with fun recovery overlays',
        placement: {
          images: 'Cooking disaster recovery displays',
          tabs: 'Cooking disaster recovery navigation',
          icons: 'Cooking recovery disaster icons',
          buttons: 'Cooking disaster recovery style'
        }
      },
      {
        id: 're-27-4',
        slideNumber: 4,
        name: 'Template 27 — Slide 4',
        layout: 'Family recipe sharing with fun tradition stories and heritage celebration',
        content: 'Family recipe sharing featuring fun tradition stories and warm heritage celebration',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Tradition Pink to Heritage Yellow)',
        buttonStyle: 'Family recipe buttons with heritage themes',
        iconStyle: 'Family recipe icons with heritage symbols',
        tabStyle: 'Family recipe tabs with heritage categories',
        imageUsage: 'Family recipe memories with fun heritage overlays',
        placement: {
          images: 'Family recipe heritage displays',
          tabs: 'Family recipe heritage navigation',
          icons: 'Family heritage recipe icons',
          buttons: 'Family recipe heritage style'
        }
      },
      {
        id: 're-27-5',
        slideNumber: 5,
        name: 'Template 27 — Slide 5',
        layout: 'Cooking experiment documentation with fun innovation attempts and creative exploration',
        content: 'Cooking experiment documentation featuring fun innovation attempts and exciting creative exploration',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Experiment Purple to Innovation Purple)',
        buttonStyle: 'Cooking experiment buttons with innovation themes',
        iconStyle: 'Cooking experiment icons with innovation symbols',
        tabStyle: 'Cooking experiment tabs with innovation categories',
        imageUsage: 'Cooking experiment memories with fun innovation overlays',
        placement: {
          images: 'Cooking experiment innovation displays',
          tabs: 'Cooking experiment navigation',
          icons: 'Cooking innovation experiment icons',
          buttons: 'Cooking experiment innovation style'
        }
      },
      {
        id: 're-27-6',
        slideNumber: 6,
        name: 'Template 27 — Slide 6',
        layout: 'Seasonal cooking memories with fun holiday traditions and festive preparation',
        content: 'Seasonal cooking memories featuring fun holiday traditions and joyful festive preparation',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Seasonal Green to Festive Cyan)',
        buttonStyle: 'Seasonal cooking buttons with festive themes',
        iconStyle: 'Seasonal cooking icons with festive symbols',
        tabStyle: 'Seasonal cooking tabs with festive categories',
        imageUsage: 'Seasonal cooking memories with fun festive overlays',
        placement: {
          images: 'Seasonal cooking festive displays',
          tabs: 'Seasonal cooking navigation',
          icons: 'Seasonal festive cooking icons',
          buttons: 'Seasonal cooking festive style'
        }
      },
      {
        id: 're-27-7',
        slideNumber: 7,
        name: 'Template 27 — Slide 7',
        layout: 'Cooking skill development with fun technique mastery and progress celebration',
        content: 'Cooking skill development featuring fun technique mastery and exciting progress celebration',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Skill Blue to Mastery Blue)',
        buttonStyle: 'Cooking skill buttons with mastery themes',
        iconStyle: 'Cooking skill icons with mastery symbols',
        tabStyle: 'Cooking skill tabs with mastery categories',
        imageUsage: 'Cooking skill memories with fun mastery overlays',
        placement: {
          images: 'Cooking skill mastery displays',
          tabs: 'Cooking skill navigation',
          icons: 'Cooking mastery skill icons',
          buttons: 'Cooking skill mastery style'
        }
      },
      {
        id: 're-27-8',
        slideNumber: 8,
        name: 'Template 27 — Slide 8',
        layout: 'Taste testing adventures with fun flavor exploration and palate discovery',
        content: 'Taste testing adventures featuring fun flavor exploration and exciting palate discovery journeys',
        colorPalette: 'Gradient from #e17055 to #d63031 (Taste Orange to Flavor Red)',
        buttonStyle: 'Taste testing buttons with discovery themes',
        iconStyle: 'Taste testing icons with discovery symbols',
        tabStyle: 'Taste testing tabs with discovery categories',
        imageUsage: 'Taste testing memories with fun discovery overlays',
        placement: {
          images: 'Taste testing discovery displays',
          tabs: 'Taste testing navigation',
          icons: 'Taste discovery testing icons',
          buttons: 'Taste testing discovery style'
        }
      },
      {
        id: 're-27-9',
        slideNumber: 9,
        name: 'Template 27 — Slide 9',
        layout: 'Culinary friendship bonding with fun cooking together memories and shared meals',
        content: 'Culinary friendship bonding featuring fun cooking together memories and cherished shared meals',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Friendship Mint to Bonding Green)',
        buttonStyle: 'Culinary friendship buttons with bonding themes',
        iconStyle: 'Culinary friendship icons with bonding symbols',
        tabStyle: 'Culinary friendship tabs with bonding categories',
        imageUsage: 'Culinary friendship memories with fun bonding overlays',
        placement: {
          images: 'Culinary friendship bonding displays',
          tabs: 'Culinary friendship navigation',
          icons: 'Culinary bonding friendship icons',
          buttons: 'Culinary friendship bonding style'
        }
      },
      {
        id: 're-27-10',
        slideNumber: 10,
        name: 'Template 27 — Slide 10',
        layout: 'Recipe exchange message sharing with culinary codes and cooking connection',
        content: 'Final recipe exchange message sharing with culinary codes and deep cooking connection',
        colorPalette: 'Gradient from #ff9f43 to #feca57 (Recipe Orange to Cooking Yellow)',
        buttonStyle: 'Recipe gradient buttons with exchange sparkle, 18px radius',
        iconStyle: 'Contextual recipe exchange cooking icons',
        tabStyle: 'Bottom cooking navigation with exchange bonds',
        imageUsage: 'Circular recipe exchange friend avatars with fun cooking frames',
        placement: {
          images: 'Circular recipe exchange friend photos with cooking frames',
          tabs: 'Bottom recipe exchange navigation',
          icons: 'Contextual recipe exchange cooking icons',
          buttons: 'Recipe gradient with exchange sparkle'
        }
      }
    ]
  },

  // TEMPLATE 28: Hobby Group Member - Song + Emotional tone (10 slides)
  {
    id: 'hobby-group-28',
    name: 'Hobby Group Member Emotional Collection',
    description: 'Emotional song-based messages for hobby group members',
    preview: '/assets/templates/hobby-group.jpg',
    suitableFor: ['hobby group member', 'craft circle friend', 'interest group buddy'],
    style: 'emotional',
    appTheme: 'Shared Interests & Creative Passion',
    screenCount: 10,
    slides: [
      {
        id: 'hg-28-1',
        slideNumber: 1,
        name: 'Template 28 — Slide 1',
        layout: 'Creative passion song interface with emotional hobby themes and artistic connection',
        content: 'Emotional creative passion song interface with hobby themes and deep artistic connection',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Passion Purple to Creative Purple)',
        buttonStyle: 'Creative passion buttons with emotional themes, 17px radius',
        iconStyle: 'Creative passion icons with emotional symbols',
        tabStyle: 'Bottom hobby navigation with passion icons',
        imageUsage: 'Song albums with emotional creative passion overlays',
        placement: {
          images: 'Song albums with emotional creative passion overlays',
          tabs: 'Hobby bottom navigation with passion themes',
          icons: 'Emotional creative passion icons',
          buttons: 'Creative passion emotional button styling'
        }
      },
      {
        id: 'hg-28-2',
        slideNumber: 2,
        name: 'Template 28 — Slide 2',
        layout: 'Shared creation moments with emotional collaboration songs and artistic unity',
        content: 'Shared creation moments featuring emotional collaboration songs and profound artistic unity',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Creation Pink to Unity Yellow)',
        buttonStyle: 'Shared creation buttons with unity themes, 15px radius',
        iconStyle: 'Shared creation icons with unity symbols',
        tabStyle: 'Top hobby tabs with unity categories',
        imageUsage: 'Shared creation songs with emotional unity elements',
        placement: {
          images: 'Shared creation songs with emotional unity elements',
          tabs: 'Top hobby unity category navigation',
          icons: 'Emotional shared creation unity icons',
          buttons: 'Shared creation unity emotional style'
        }
      },
      {
        id: 'hg-28-3',
        slideNumber: 3,
        name: 'Template 28 — Slide 3',
        layout: 'Artistic breakthrough celebration with emotional achievement recognition and creative joy',
        content: 'Artistic breakthrough celebration featuring emotional achievement recognition and overwhelming creative joy',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Breakthrough Teal to Joy Blue)',
        buttonStyle: 'Artistic breakthrough buttons with joy themes',
        iconStyle: 'Artistic breakthrough icons with joy symbols',
        tabStyle: 'Artistic breakthrough tabs with joy categories',
        imageUsage: 'Artistic breakthrough songs with emotional joy overlays',
        placement: {
          images: 'Artistic breakthrough joy displays',
          tabs: 'Artistic breakthrough joy navigation',
          icons: 'Artistic joy breakthrough icons',
          buttons: 'Artistic breakthrough joy style'
        }
      },
      {
        id: 'hg-28-4',
        slideNumber: 4,
        name: 'Template 28 — Slide 4',
        layout: 'Creative struggle support with emotional encouragement songs and perseverance motivation',
        content: 'Creative struggle support featuring emotional encouragement songs and inspiring perseverance motivation',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Struggle Red to Support Orange)',
        buttonStyle: 'Creative struggle buttons with perseverance themes',
        iconStyle: 'Creative struggle icons with perseverance symbols',
        tabStyle: 'Creative struggle tabs with perseverance categories',
        imageUsage: 'Creative struggle songs with emotional perseverance overlays',
        placement: {
          images: 'Creative struggle perseverance displays',
          tabs: 'Creative struggle navigation',
          icons: 'Creative perseverance struggle icons',
          buttons: 'Creative struggle perseverance style'
        }
      },
      {
        id: 'hg-28-5',
        slideNumber: 5,
        name: 'Template 28 — Slide 5',
        layout: 'Skill sharing moments with emotional teaching songs and knowledge transfer',
        content: 'Skill sharing moments featuring emotional teaching songs and meaningful knowledge transfer experiences',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Skill Green to Teaching Cyan)',
        buttonStyle: 'Skill sharing buttons with teaching themes',
        iconStyle: 'Skill sharing icons with teaching symbols',
        tabStyle: 'Skill sharing tabs with teaching categories',
        imageUsage: 'Skill sharing songs with emotional teaching overlays',
        placement: {
          images: 'Skill sharing teaching displays',
          tabs: 'Skill sharing navigation',
          icons: 'Skill teaching sharing icons',
          buttons: 'Skill sharing teaching style'
        }
      },
      {
        id: 'hg-28-6',
        slideNumber: 6,
        name: 'Template 28 — Slide 6',
        layout: 'Group project completion with emotional accomplishment songs and collective pride',
        content: 'Group project completion featuring emotional accomplishment songs and deep collective pride',
        colorPalette: 'Gradient from #e17055 to #d63031 (Project Orange to Pride Red)',
        buttonStyle: 'Group project buttons with pride themes',
        iconStyle: 'Group project icons with pride symbols',
        tabStyle: 'Group project tabs with pride categories',
        imageUsage: 'Group project songs with emotional pride overlays',
        placement: {
          images: 'Group project pride displays',
          tabs: 'Group project navigation',
          icons: 'Group pride project icons',
          buttons: 'Group project pride style'
        }
      },
      {
        id: 'hg-28-7',
        slideNumber: 7,
        name: 'Template 28 — Slide 7',
        layout: 'Creative inspiration sharing with emotional muse songs and artistic awakening',
        content: 'Creative inspiration sharing featuring emotional muse songs and transformative artistic awakening',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Inspiration Yellow to Muse Orange)',
        buttonStyle: 'Creative inspiration buttons with awakening themes',
        iconStyle: 'Creative inspiration icons with awakening symbols',
        tabStyle: 'Creative inspiration tabs with awakening categories',
        imageUsage: 'Creative inspiration songs with emotional awakening overlays',
        placement: {
          images: 'Creative inspiration awakening displays',
          tabs: 'Creative inspiration navigation',
          icons: 'Creative awakening inspiration icons',
          buttons: 'Creative inspiration awakening style'
        }
      },
      {
        id: 'hg-28-8',
        slideNumber: 8,
        name: 'Template 28 — Slide 8',
        layout: 'Hobby evolution journey with emotional growth songs and passion development',
        content: 'Hobby evolution journey featuring emotional growth songs and deepening passion development',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Evolution Blue to Growth Blue)',
        buttonStyle: 'Hobby evolution buttons with development themes',
        iconStyle: 'Hobby evolution icons with development symbols',
        tabStyle: 'Hobby evolution tabs with development categories',
        imageUsage: 'Hobby evolution songs with emotional development overlays',
        placement: {
          images: 'Hobby evolution development displays',
          tabs: 'Hobby evolution navigation',
          icons: 'Hobby development evolution icons',
          buttons: 'Hobby evolution development style'
        }
      },
      {
        id: 'hg-28-9',
        slideNumber: 9,
        name: 'Template 28 — Slide 9',
        layout: 'Creative community bonding with emotional fellowship songs and artistic family',
        content: 'Creative community bonding featuring emotional fellowship songs and nurturing artistic family connections',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Community Mint to Fellowship Green)',
        buttonStyle: 'Creative community buttons with fellowship themes',
        iconStyle: 'Creative community icons with fellowship symbols',
        tabStyle: 'Creative community tabs with fellowship categories',
        imageUsage: 'Creative community songs with emotional fellowship overlays',
        placement: {
          images: 'Creative community fellowship displays',
          tabs: 'Creative community navigation',
          icons: 'Creative fellowship community icons',
          buttons: 'Creative community fellowship style'
        }
      },
      {
        id: 'hg-28-10',
        slideNumber: 10,
        name: 'Template 28 — Slide 10',
        layout: 'Hobby group message sharing with creative codes and artistic connection',
        content: 'Final hobby group message sharing with creative codes and deep artistic connection',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Hobby Pink to Creative Yellow)',
        buttonStyle: 'Hobby gradient buttons with group sparkle, 17px radius',
        iconStyle: 'Contextual hobby group creative icons',
        tabStyle: 'Bottom hobby navigation with group bonds',
        imageUsage: 'Circular hobby group member avatars with emotional creative frames',
        placement: {
          images: 'Circular hobby group member photos with creative frames',
          tabs: 'Bottom hobby group navigation',
          icons: 'Contextual hobby group creative icons',
          buttons: 'Hobby gradient with group sparkle'
        }
      }
    ]
  },

  // TEMPLATE 29: Dance Partner - Video + Professional tone (10 slides)
  {
    id: 'dance-partner-29',
    name: 'Dance Partner Professional Collection',
    description: 'Professional video-based messages for dance partners',
    preview: '/assets/templates/dance-partner.jpg',
    suitableFor: ['dance partner', 'ballroom partner', 'performance partner'],
    style: 'professional',
    appTheme: 'Dance Excellence & Partnership Artistry',
    screenCount: 10,
    slides: [
      {
        id: 'dp-29-1',
        slideNumber: 1,
        name: 'Template 29 — Slide 1',
        layout: 'Professional dance video interface with partnership themes and performance excellence',
        content: 'Professional dance video interface with partnership themes and artistic performance excellence',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Dark to Performance Gray)',
        buttonStyle: 'Professional dance buttons with excellence themes, 10px radius',
        iconStyle: 'Professional dance icons with excellence symbols',
        tabStyle: 'Bottom dance navigation with professional icons',
        imageUsage: 'Dance videos with professional excellence overlays',
        placement: {
          images: 'Dance videos with professional excellence overlays',
          tabs: 'Dance bottom navigation with professional themes',
          icons: 'Professional dance excellence icons',
          buttons: 'Dance professional excellence button styling'
        }
      },
      {
        id: 'dp-29-2',
        slideNumber: 2,
        name: 'Template 29 — Slide 2',
        layout: 'Choreography development with professional technique refinement and artistic precision',
        content: 'Choreography development featuring professional technique refinement and meticulous artistic precision',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Technique Blue to Precision Blue)',
        buttonStyle: 'Choreography buttons with precision themes, 8px radius',
        iconStyle: 'Choreography icons with precision symbols',
        tabStyle: 'Top dance tabs with precision categories',
        imageUsage: 'Choreography videos with professional precision elements',
        placement: {
          images: 'Choreography videos with professional precision elements',
          tabs: 'Top dance precision category navigation',
          icons: 'Professional choreography precision icons',
          buttons: 'Choreography precision professional style'
        }
      },
      {
        id: 'dp-29-3',
        slideNumber: 3,
        name: 'Template 29 — Slide 3',
        layout: 'Performance preparation with professional rehearsal discipline and competitive readiness',
        content: 'Performance preparation featuring professional rehearsal discipline and comprehensive competitive readiness',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Preparation Green to Readiness Cyan)',
        buttonStyle: 'Performance preparation buttons with readiness themes',
        iconStyle: 'Performance preparation icons with readiness symbols',
        tabStyle: 'Performance preparation tabs with readiness categories',
        imageUsage: 'Performance preparation videos with professional readiness overlays',
        placement: {
          images: 'Performance preparation readiness displays',
          tabs: 'Performance preparation navigation',
          icons: 'Performance readiness preparation icons',
          buttons: 'Performance preparation readiness style'
        }
      },
      {
        id: 'dp-29-4',
        slideNumber: 4,
        name: 'Template 29 — Slide 4',
        layout: 'Competition analysis with professional technique assessment and improvement strategy',
        content: 'Competition analysis featuring professional technique assessment and strategic improvement methodology',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Analysis Purple to Strategy Purple)',
        buttonStyle: 'Competition analysis buttons with strategy themes',
        iconStyle: 'Competition analysis icons with strategy symbols',
        tabStyle: 'Competition analysis tabs with strategy categories',
        imageUsage: 'Competition analysis videos with professional strategy overlays',
        placement: {
          images: 'Competition analysis strategy displays',
          tabs: 'Competition analysis navigation',
          icons: 'Competition strategy analysis icons',
          buttons: 'Competition analysis strategy style'
        }
      },
      {
        id: 'dp-29-5',
        slideNumber: 5,
        name: 'Template 29 — Slide 5',
        layout: 'Partnership synchronization with professional timing mastery and connection refinement',
        content: 'Partnership synchronization featuring professional timing mastery and precise connection refinement',
        colorPalette: 'Gradient from #e17055 to #d63031 (Partnership Orange to Connection Red)',
        buttonStyle: 'Partnership sync buttons with connection themes',
        iconStyle: 'Partnership sync icons with connection symbols',
        tabStyle: 'Partnership sync tabs with connection categories',
        imageUsage: 'Partnership sync videos with professional connection overlays',
        placement: {
          images: 'Partnership sync connection displays',
          tabs: 'Partnership sync navigation',
          icons: 'Partnership connection sync icons',
          buttons: 'Partnership sync connection style'
        }
      },
      {
        id: 'dp-29-6',
        slideNumber: 6,
        name: 'Template 29 — Slide 6',
        layout: 'Technical skill documentation with professional form analysis and movement precision',
        content: 'Technical skill documentation featuring professional form analysis and detailed movement precision',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Technical Gold to Skill Orange)',
        buttonStyle: 'Technical skill buttons with precision themes',
        iconStyle: 'Technical skill icons with precision symbols',
        tabStyle: 'Technical skill tabs with precision categories',
        imageUsage: 'Technical skill videos with professional precision overlays',
        placement: {
          images: 'Technical skill precision displays',
          tabs: 'Technical skill navigation',
          icons: 'Technical precision skill icons',
          buttons: 'Technical skill precision style'
        }
      },
      {
        id: 'dp-29-7',
        slideNumber: 7,
        name: 'Template 29 — Slide 7',
        layout: 'Artistic expression development with professional interpretation and emotional storytelling',
        content: 'Artistic expression development featuring professional interpretation and compelling emotional storytelling',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Expression Red to Artistry Orange)',
        buttonStyle: 'Artistic expression buttons with storytelling themes',
        iconStyle: 'Artistic expression icons with storytelling symbols',
        tabStyle: 'Artistic expression tabs with storytelling categories',
        imageUsage: 'Artistic expression videos with professional storytelling overlays',
        placement: {
          images: 'Artistic expression storytelling displays',
          tabs: 'Artistic expression navigation',
          icons: 'Artistic storytelling expression icons',
          buttons: 'Artistic expression storytelling style'
        }
      },
      {
        id: 'dp-29-8',
        slideNumber: 8,
        name: 'Template 29 — Slide 8',
        layout: 'Competition performance review with professional achievement analysis and goal setting',
        content: 'Competition performance review featuring professional achievement analysis and strategic goal setting',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Review Blue to Achievement Blue)',
        buttonStyle: 'Competition review buttons with achievement themes',
        iconStyle: 'Competition review icons with achievement symbols',
        tabStyle: 'Competition review tabs with achievement categories',
        imageUsage: 'Competition review videos with professional achievement overlays',
        placement: {
          images: 'Competition review achievement displays',
          tabs: 'Competition review navigation',
          icons: 'Competition achievement review icons',
          buttons: 'Competition review achievement style'
        }
      },
      {
        id: 'dp-29-9',
        slideNumber: 9,
        name: 'Template 29 — Slide 9',
        layout: 'Professional partnership evolution with artistic growth documentation and legacy building',
        content: 'Professional partnership evolution featuring artistic growth documentation and meaningful legacy building',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Evolution Mint to Legacy Green)',
        buttonStyle: 'Partnership evolution buttons with legacy themes',
        iconStyle: 'Partnership evolution icons with legacy symbols',
        tabStyle: 'Partnership evolution tabs with legacy categories',
        imageUsage: 'Partnership evolution videos with professional legacy overlays',
        placement: {
          images: 'Partnership evolution legacy displays',
          tabs: 'Partnership evolution navigation',
          icons: 'Partnership legacy evolution icons',
          buttons: 'Partnership evolution legacy style'
        }
      },
      {
        id: 'dp-29-10',
        slideNumber: 10,
        name: 'Template 29 — Slide 10',
        layout: 'Dance partner message sharing with performance codes and artistic connection',
        content: 'Final dance partner message sharing with performance codes and deep artistic connection',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Dance Dark to Professional Gray)',
        buttonStyle: 'Dance gradient buttons with partner sparkle, 10px radius',
        iconStyle: 'Contextual dance performance partner icons',
        tabStyle: 'Bottom dance navigation with partner bonds',
        imageUsage: 'Circular dance partner avatars with professional performance frames',
        placement: {
          images: 'Circular dance partner photos with performance frames',
          tabs: 'Bottom dance partnership navigation',
          icons: 'Contextual dance performance partner icons',
          buttons: 'Dance gradient with partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 30: Volunteer Teammate - Text + Supportive tone (10 slides)
  {
    id: 'volunteer-teammate-30',
    name: 'Volunteer Teammate Supportive Collection',
    description: 'Supportive text-based messages for volunteer teammates',
    preview: '/assets/templates/volunteer-teammate.jpg',
    suitableFor: ['volunteer teammate', 'charity partner', 'service buddy'],
    style: 'supportive',
    appTheme: 'Community Service & Social Impact',
    screenCount: 10,
    slides: [
      {
        id: 'vt-30-1',
        slideNumber: 1,
        name: 'Template 30 — Slide 1',
        layout: 'Community service text interface with supportive volunteer themes and impact focus',
        content: 'Supportive community service text interface with volunteer themes and meaningful impact focus',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Service Green to Impact Cyan)',
        buttonStyle: 'Community service buttons with impact themes, 12px radius',
        iconStyle: 'Community service icons with impact symbols',
        tabStyle: 'Bottom volunteer navigation with service icons',
        imageUsage: 'Text layouts with supportive community service overlays',
        placement: {
          images: 'Text layouts with supportive community service overlays',
          tabs: 'Volunteer bottom navigation with service themes',
          icons: 'Supportive community service icons',
          buttons: 'Community service supportive button styling'
        }
      },
      {
        id: 'vt-30-2',
        slideNumber: 2,
        name: 'Template 30 — Slide 2',
        layout: 'Mission accomplishment sharing with supportive achievement recognition and collective pride',
        content: 'Mission accomplishment sharing featuring supportive achievement recognition and inspiring collective pride',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Mission Blue to Achievement Blue)',
        buttonStyle: 'Mission achievement buttons with pride themes, 10px radius',
        iconStyle: 'Mission achievement icons with pride symbols',
        tabStyle: 'Top volunteer tabs with pride categories',
        imageUsage: 'Mission achievement texts with supportive pride elements',
        placement: {
          images: 'Mission achievement texts with supportive pride elements',
          tabs: 'Top volunteer pride category navigation',
          icons: 'Supportive mission achievement pride icons',
          buttons: 'Mission achievement pride supportive style'
        }
      },
      {
        id: 'vt-30-3',
        slideNumber: 3,
        name: 'Template 30 — Slide 3',
        layout: 'Impact celebration updates with supportive community change recognition and progress highlighting',
        content: 'Impact celebration updates featuring supportive community change recognition and meaningful progress highlighting',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Impact Pink to Progress Yellow)',
        buttonStyle: 'Impact celebration buttons with progress themes',
        iconStyle: 'Impact celebration icons with progress symbols',
        tabStyle: 'Impact celebration tabs with progress categories',
        imageUsage: 'Impact celebration texts with supportive progress overlays',
        placement: {
          images: 'Impact celebration progress displays',
          tabs: 'Impact celebration progress navigation',
          icons: 'Impact progress celebration icons',
          buttons: 'Impact celebration progress style'
        }
      },
      {
        id: 'vt-30-4',
        slideNumber: 4,
        name: 'Template 30 — Slide 4',
        layout: 'Volunteer coordination messages with supportive team organization and efficient collaboration',
        content: 'Volunteer coordination messages featuring supportive team organization and highly efficient collaboration',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Coordination Purple to Organization Purple)',
        buttonStyle: 'Volunteer coordination buttons with collaboration themes',
        iconStyle: 'Volunteer coordination icons with collaboration symbols',
        tabStyle: 'Volunteer coordination tabs with collaboration categories',
        imageUsage: 'Volunteer coordination texts with supportive collaboration overlays',
        placement: {
          images: 'Volunteer coordination collaboration displays',
          tabs: 'Volunteer coordination navigation',
          icons: 'Volunteer collaboration coordination icons',
          buttons: 'Volunteer coordination collaboration style'
        }
      },
      {
        id: 'vt-30-5',
        slideNumber: 5,
        name: 'Template 30 — Slide 5',
        layout: 'Beneficiary story sharing with supportive impact testimonials and heartwarming success stories',
        content: 'Beneficiary story sharing featuring supportive impact testimonials and deeply heartwarming success stories',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Story Mint to Success Green)',
        buttonStyle: 'Beneficiary story buttons with success themes',
        iconStyle: 'Beneficiary story icons with success symbols',
        tabStyle: 'Beneficiary story tabs with success categories',
        imageUsage: 'Beneficiary story texts with supportive success overlays',
        placement: {
          images: 'Beneficiary story success displays',
          tabs: 'Beneficiary story navigation',
          icons: 'Beneficiary success story icons',
          buttons: 'Beneficiary story success style'
        }
      },
      {
        id: 'vt-30-6',
        slideNumber: 6,
        name: 'Template 30 — Slide 6',
        layout: 'Fundraising milestone updates with supportive donor appreciation and gratitude expression',
        content: 'Fundraising milestone updates featuring supportive donor appreciation and heartfelt gratitude expression',
        colorPalette: 'Gradient from #e17055 to #d63031 (Fundraising Orange to Gratitude Red)',
        buttonStyle: 'Fundraising milestone buttons with gratitude themes',
        iconStyle: 'Fundraising milestone icons with gratitude symbols',
        tabStyle: 'Fundraising milestone tabs with gratitude categories',
        imageUsage: 'Fundraising milestone texts with supportive gratitude overlays',
        placement: {
          images: 'Fundraising milestone gratitude displays',
          tabs: 'Fundraising milestone navigation',
          icons: 'Fundraising gratitude milestone icons',
          buttons: 'Fundraising milestone gratitude style'
        }
      },
      {
        id: 'vt-30-7',
        slideNumber: 7,
        name: 'Template 30 — Slide 7',
        layout: 'Skill sharing initiatives with supportive knowledge transfer and capacity building',
        content: 'Skill sharing initiatives featuring supportive knowledge transfer and meaningful capacity building efforts',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Skill Yellow to Knowledge Orange)',
        buttonStyle: 'Skill sharing buttons with capacity themes',
        iconStyle: 'Skill sharing icons with capacity symbols',
        tabStyle: 'Skill sharing tabs with capacity categories',
        imageUsage: 'Skill sharing texts with supportive capacity overlays',
        placement: {
          images: 'Skill sharing capacity displays',
          tabs: 'Skill sharing navigation',
          icons: 'Skill capacity sharing icons',
          buttons: 'Skill sharing capacity style'
        }
      },
      {
        id: 'vt-30-8',
        slideNumber: 8,
        name: 'Template 30 — Slide 8',
        layout: 'Community outreach updates with supportive engagement strategies and relationship building',
        content: 'Community outreach updates featuring supportive engagement strategies and strong relationship building',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Outreach Red to Engagement Orange)',
        buttonStyle: 'Community outreach buttons with engagement themes',
        iconStyle: 'Community outreach icons with engagement symbols',
        tabStyle: 'Community outreach tabs with engagement categories',
        imageUsage: 'Community outreach texts with supportive engagement overlays',
        placement: {
          images: 'Community outreach engagement displays',
          tabs: 'Community outreach navigation',
          icons: 'Community engagement outreach icons',
          buttons: 'Community outreach engagement style'
        }
      },
      {
        id: 'vt-30-9',
        slideNumber: 9,
        name: 'Template 30 — Slide 9',
        layout: 'Volunteer appreciation messages with supportive recognition and team spirit celebration',
        content: 'Volunteer appreciation messages featuring supportive recognition and uplifting team spirit celebration',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Appreciation Blue to Spirit Blue)',
        buttonStyle: 'Volunteer appreciation buttons with spirit themes',
        iconStyle: 'Volunteer appreciation icons with spirit symbols',
        tabStyle: 'Volunteer appreciation tabs with spirit categories',
        imageUsage: 'Volunteer appreciation texts with supportive spirit overlays',
        placement: {
          images: 'Volunteer appreciation spirit displays',
          tabs: 'Volunteer appreciation navigation',
          icons: 'Volunteer spirit appreciation icons',
          buttons: 'Volunteer appreciation spirit style'
        }
      },
      {
        id: 'vt-30-10',
        slideNumber: 10,
        name: 'Template 30 — Slide 10',
        layout: 'Volunteer teammate message sharing with service codes and community connection',
        content: 'Final volunteer teammate message sharing with service codes and deep community connection',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Service Cyan to Community Cyan)',
        buttonStyle: 'Volunteer gradient buttons with teammate sparkle, 12px radius',
        iconStyle: 'Contextual volunteer community teammate icons',
        tabStyle: 'Bottom volunteer navigation with teammate bonds',
        imageUsage: 'Circular volunteer teammate avatars with supportive community frames',
        placement: {
          images: 'Circular volunteer teammate photos with community frames',
          tabs: 'Bottom volunteer teamwork navigation',
          icons: 'Contextual volunteer community teammate icons',
          buttons: 'Volunteer gradient with teammate sparkle'
        }
      }
    ]
  },

  // TEMPLATE 31: Sports Team Member - Photo + Motivational tone (15 slides)
  {
    id: 'sports-team-31',
    name: 'Sports Team Member Motivational Collection',
    description: 'Motivational photo-based messages for sports team members',
    preview: '/assets/templates/sports-team.jpg',
    suitableFor: ['sports team member', 'teammate', 'athletic partner'],
    style: 'motivational',
    appTheme: 'Athletic Excellence & Team Spirit',
    screenCount: 15,
    slides: [
      {
        id: 'st-31-1',
        slideNumber: 1,
        name: 'Template 31 — Slide 1',
        layout: 'Athletic team photo interface with motivational sports themes and victory pursuit',
        content: 'Motivational athletic team photo interface with sports themes and relentless victory pursuit',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Athletic Red to Victory Red)',
        buttonStyle: 'Athletic team buttons with victory themes, 16px radius',
        iconStyle: 'Athletic team icons with victory symbols',
        tabStyle: 'Bottom sports navigation with victory icons',
        imageUsage: 'Team photos with motivational victory pursuit overlays',
        placement: {
          images: 'Team photos with motivational victory pursuit overlays',
          tabs: 'Sports bottom navigation with victory themes',
          icons: 'Motivational athletic victory icons',
          buttons: 'Athletic team victory button styling'
        }
      },
      {
        id: 'st-31-2',
        slideNumber: 2,
        name: 'Template 31 — Slide 2',
        layout: 'Training dedication showcase with motivational effort recognition and commitment celebration',
        content: 'Training dedication showcase featuring motivational effort recognition and unwavering commitment celebration',
        colorPalette: 'Gradient from #3d5af1 to #ff006e (Training Blue to Dedication Pink)',
        buttonStyle: 'Training dedication buttons with commitment themes, 14px radius',
        iconStyle: 'Training dedication icons with commitment symbols',
        tabStyle: 'Top sports tabs with commitment categories',
        imageUsage: 'Training dedication photos with motivational commitment elements',
        placement: {
          images: 'Training dedication photos with motivational commitment elements',
          tabs: 'Top sports commitment category navigation',
          icons: 'Motivational training dedication commitment icons',
          buttons: 'Training dedication commitment motivational style'
        }
      },
      {
        id: 'st-31-3',
        slideNumber: 3,
        name: 'Template 31 — Slide 3',
        layout: 'Game performance highlights with motivational skill demonstration and excellence showcase',
        content: 'Game performance highlights featuring motivational skill demonstration and athletic excellence showcase',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Performance Teal to Excellence Blue)',
        buttonStyle: 'Game performance buttons with excellence themes',
        iconStyle: 'Game performance icons with excellence symbols',
        tabStyle: 'Game performance tabs with excellence categories',
        imageUsage: 'Game performance photos with motivational excellence overlays',
        placement: {
          images: 'Game performance excellence displays',
          tabs: 'Game performance excellence navigation',
          icons: 'Game excellence performance icons',
          buttons: 'Game performance excellence style'
        }
      },
      {
        id: 'st-31-4',
        slideNumber: 4,
        name: 'Template 31 — Slide 4',
        layout: 'Team strategy sessions with motivational tactical planning and competitive preparation',
        content: 'Team strategy sessions featuring motivational tactical planning and intensive competitive preparation',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Strategy Green to Tactical Orange)',
        buttonStyle: 'Team strategy buttons with preparation themes',
        iconStyle: 'Team strategy icons with preparation symbols',
        tabStyle: 'Team strategy tabs with preparation categories',
        imageUsage: 'Team strategy photos with motivational preparation overlays',
        placement: {
          images: 'Team strategy preparation displays',
          tabs: 'Team strategy navigation',
          icons: 'Team preparation strategy icons',
          buttons: 'Team strategy preparation style'
        }
      },
      {
        id: 'st-31-5',
        slideNumber: 5,
        name: 'Template 31 — Slide 5',
        layout: 'Championship pursuit documentation with motivational goal achievement and title chase',
        content: 'Championship pursuit documentation featuring motivational goal achievement and relentless title chase',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Championship Magenta to Title Red)',
        buttonStyle: 'Championship pursuit buttons with achievement themes',
        iconStyle: 'Championship pursuit icons with achievement symbols',
        tabStyle: 'Championship pursuit tabs with achievement categories',
        imageUsage: 'Championship pursuit photos with motivational achievement overlays',
        placement: {
          images: 'Championship pursuit achievement displays',
          tabs: 'Championship pursuit navigation',
          icons: 'Championship achievement pursuit icons',
          buttons: 'Championship pursuit achievement style'
        }
      },
      {
        id: 'st-31-6',
        slideNumber: 6,
        name: 'Template 31 — Slide 6',
        layout: 'Injury recovery journey with motivational comeback spirit and resilience demonstration',
        content: 'Injury recovery journey featuring motivational comeback spirit and powerful resilience demonstration',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Recovery Red to Resilience Yellow)',
        buttonStyle: 'Injury recovery buttons with resilience themes',
        iconStyle: 'Injury recovery icons with resilience symbols',
        tabStyle: 'Injury recovery tabs with resilience categories',
        imageUsage: 'Injury recovery photos with motivational resilience overlays',
        placement: {
          images: 'Injury recovery resilience displays',
          tabs: 'Injury recovery navigation',
          icons: 'Injury resilience recovery icons',
          buttons: 'Injury recovery resilience style'
        }
      },
      {
        id: 'st-31-7',
        slideNumber: 7,
        name: 'Template 31 — Slide 7',
        layout: 'Team bonding moments with motivational unity building and camaraderie strengthening',
        content: 'Team bonding moments featuring motivational unity building and deep camaraderie strengthening',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Unity Purple to Camaraderie Purple)',
        buttonStyle: 'Team bonding buttons with unity themes',
        iconStyle: 'Team bonding icons with unity symbols',
        tabStyle: 'Team bonding tabs with unity categories',
        imageUsage: 'Team bonding photos with motivational unity overlays',
        placement: {
          images: 'Team bonding unity displays',
          tabs: 'Team bonding navigation',
          icons: 'Team unity bonding icons',
          buttons: 'Team bonding unity style'
        }
      },
      {
        id: 'st-31-8',
        slideNumber: 8,
        name: 'Template 31 — Slide 8',
        layout: 'Personal best achievements with motivational record breaking and limit pushing',
        content: 'Personal best achievements featuring motivational record breaking and boundary limit pushing',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Achievement Blue to Record Blue)',
        buttonStyle: 'Personal best buttons with record themes',
        iconStyle: 'Personal best icons with record symbols',
        tabStyle: 'Personal best tabs with record categories',
        imageUsage: 'Personal best photos with motivational record overlays',
        placement: {
          images: 'Personal best record displays',
          tabs: 'Personal best navigation',
          icons: 'Personal record best icons',
          buttons: 'Personal best record style'
        }
      },
      {
        id: 'st-31-9',
        slideNumber: 9,
        name: 'Template 31 — Slide 9',
        layout: 'Mentorship moments with motivational leadership development and guidance sharing',
        content: 'Mentorship moments featuring motivational leadership development and valuable guidance sharing',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Mentorship Cyan to Leadership Mint)',
        buttonStyle: 'Mentorship buttons with leadership themes',
        iconStyle: 'Mentorship icons with leadership symbols',
        tabStyle: 'Mentorship tabs with leadership categories',
        imageUsage: 'Mentorship photos with motivational leadership overlays',
        placement: {
          images: 'Mentorship leadership displays',
          tabs: 'Mentorship navigation',
          icons: 'Mentorship leadership icons',
          buttons: 'Mentorship leadership style'
        }
      },
      {
        id: 'st-31-10',
        slideNumber: 10,
        name: 'Template 31 — Slide 10',
        layout: 'Season progression tracking with motivational growth documentation and improvement celebration',
        content: 'Season progression tracking featuring motivational growth documentation and consistent improvement celebration',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Season Orange to Growth Orange)',
        buttonStyle: 'Season progression buttons with growth themes',
        iconStyle: 'Season progression icons with growth symbols',
        tabStyle: 'Season progression tabs with growth categories',
        imageUsage: 'Season progression photos with motivational growth overlays',
        placement: {
          images: 'Season progression growth displays',
          tabs: 'Season progression navigation',
          icons: 'Season growth progression icons',
          buttons: 'Season progression growth style'
        }
      },
      {
        id: 'st-31-11',
        slideNumber: 11,
        name: 'Template 31 — Slide 11',
        layout: 'Victory celebration documentation with motivational triumph recognition and success sharing',
        content: 'Victory celebration documentation featuring motivational triumph recognition and well-earned success sharing',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Victory Pink to Success Yellow)',
        buttonStyle: 'Victory celebration buttons with triumph themes',
        iconStyle: 'Victory celebration icons with triumph symbols',
        tabStyle: 'Victory celebration tabs with triumph categories',
        imageUsage: 'Victory celebration photos with motivational triumph overlays',
        placement: {
          images: 'Victory celebration triumph displays',
          tabs: 'Victory celebration navigation',
          icons: 'Victory triumph celebration icons',
          buttons: 'Victory celebration triumph style'
        }
      },
      {
        id: 'st-31-12',
        slideNumber: 12,
        name: 'Template 31 — Slide 12',
        layout: 'Competitive spirit showcase with motivational rivalry respect and sportsmanship demonstration',
        content: 'Competitive spirit showcase featuring motivational rivalry respect and exemplary sportsmanship demonstration',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Spirit Mint to Sportsmanship Green)',
        buttonStyle: 'Competitive spirit buttons with sportsmanship themes',
        iconStyle: 'Competitive spirit icons with sportsmanship symbols',
        tabStyle: 'Competitive spirit tabs with sportsmanship categories',
        imageUsage: 'Competitive spirit photos with motivational sportsmanship overlays',
        placement: {
          images: 'Competitive spirit sportsmanship displays',
          tabs: 'Competitive spirit navigation',
          icons: 'Competitive sportsmanship spirit icons',
          buttons: 'Competitive spirit sportsmanship style'
        }
      },
      {
        id: 'st-31-13',
        slideNumber: 13,
        name: 'Template 31 — Slide 13',
        layout: 'Fan appreciation moments with motivational supporter recognition and community connection',
        content: 'Fan appreciation moments featuring motivational supporter recognition and strong community connection',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Fan Red to Appreciation Orange)',
        buttonStyle: 'Fan appreciation buttons with community themes',
        iconStyle: 'Fan appreciation icons with community symbols',
        tabStyle: 'Fan appreciation tabs with community categories',
        imageUsage: 'Fan appreciation photos with motivational community overlays',
        placement: {
          images: 'Fan appreciation community displays',
          tabs: 'Fan appreciation navigation',
          icons: 'Fan community appreciation icons',
          buttons: 'Fan appreciation community style'
        }
      },
      {
        id: 'st-31-14',
        slideNumber: 14,
        name: 'Template 31 — Slide 14',
        layout: 'Legacy building documentation with motivational impact creation and future inspiration',
        content: 'Legacy building documentation featuring motivational impact creation and lasting future inspiration',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Legacy Blue to Impact Blue)',
        buttonStyle: 'Legacy building buttons with impact themes',
        iconStyle: 'Legacy building icons with impact symbols',
        tabStyle: 'Legacy building tabs with impact categories',
        imageUsage: 'Legacy building photos with motivational impact overlays',
        placement: {
          images: 'Legacy building impact displays',
          tabs: 'Legacy building navigation',
          icons: 'Legacy impact building icons',
          buttons: 'Legacy building impact style'
        }
      },
      {
        id: 'st-31-15',
        slideNumber: 15,
        name: 'Template 31 — Slide 15',
        layout: 'Sports team message sharing with athletic codes and competitive connection',
        content: 'Final sports team message sharing with athletic codes and deep competitive connection',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Sports Red to Team Red)',
        buttonStyle: 'Sports gradient buttons with team sparkle, 16px radius',
        iconStyle: 'Contextual sports athletic team icons',
        tabStyle: 'Bottom sports navigation with team bonds',
        imageUsage: 'Circular sports team member avatars with motivational athletic frames',
        placement: {
          images: 'Circular sports team member photos with athletic frames',
          tabs: 'Bottom sports team navigation',
          icons: 'Contextual sports athletic team icons',
          buttons: 'Sports gradient with team sparkle'
        }
      }
    ]
  },

  // TEMPLATE 32: Art Class Partner - Audio + Emotional tone (15 slides)
  {
    id: 'art-class-32',
    name: 'Art Class Partner Emotional Collection',
    description: 'Emotional audio-based messages for art class partners',
    preview: '/assets/templates/art-class.jpg',
    suitableFor: ['art class partner', 'creative buddy', 'studio companion'],
    style: 'emotional',
    appTheme: 'Artistic Expression & Creative Journey',
    screenCount: 15,
    slides: [
      {
        id: 'ac-32-1',
        slideNumber: 1,
        name: 'Template 32 — Slide 1',
        layout: 'Creative art audio interface with emotional artistic themes and passion expression',
        content: 'Emotional creative art audio interface with artistic themes and deep passion expression',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Creative Purple to Artistic Purple)',
        buttonStyle: 'Creative art buttons with passion themes, 15px radius',
        iconStyle: 'Creative art icons with passion symbols',
        tabStyle: 'Bottom art navigation with passion icons',
        imageUsage: 'Audio waveforms with emotional artistic passion overlays',
        placement: {
          images: 'Audio waveforms with emotional artistic passion overlays',
          tabs: 'Art bottom navigation with passion themes',
          icons: 'Emotional creative artistic passion icons',
          buttons: 'Creative art passion button styling'
        }
      },
      {
        id: 'ac-32-2',
        slideNumber: 2,
        name: 'Template 32 — Slide 2',
        layout: 'Artistic breakthrough moments with emotional inspiration capture and creative awakening',
        content: 'Artistic breakthrough moments featuring emotional inspiration capture and profound creative awakening',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Breakthrough Pink to Awakening Yellow)',
        buttonStyle: 'Artistic breakthrough buttons with awakening themes, 13px radius',
        iconStyle: 'Artistic breakthrough icons with awakening symbols',
        tabStyle: 'Top art tabs with awakening categories',
        imageUsage: 'Artistic breakthrough audio with emotional awakening elements',
        placement: {
          images: 'Artistic breakthrough audio with emotional awakening elements',
          tabs: 'Top art awakening category navigation',
          icons: 'Emotional artistic breakthrough awakening icons',
          buttons: 'Artistic breakthrough awakening emotional style'
        }
      },
      {
        id: 'ac-32-3',
        slideNumber: 3,
        name: 'Template 32 — Slide 3',
        layout: 'Creative struggle sharing with emotional vulnerability expression and artistic growth',
        content: 'Creative struggle sharing featuring emotional vulnerability expression and meaningful artistic growth',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Struggle Red to Vulnerability Orange)',
        buttonStyle: 'Creative struggle buttons with growth themes',
        iconStyle: 'Creative struggle icons with growth symbols',
        tabStyle: 'Creative struggle tabs with growth categories',
        imageUsage: 'Creative struggle audio with emotional growth overlays',
        placement: {
          images: 'Creative struggle growth displays',
          tabs: 'Creative struggle growth navigation',
          icons: 'Creative growth struggle icons',
          buttons: 'Creative struggle growth style'
        }
      },
      {
        id: 'ac-32-4',
        slideNumber: 4,
        name: 'Template 32 — Slide 4',
        layout: 'Color emotion exploration with emotional palette discovery and feeling translation',
        content: 'Color emotion exploration featuring emotional palette discovery and deep feeling translation techniques',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Color Teal to Emotion Blue)',
        buttonStyle: 'Color emotion buttons with translation themes',
        iconStyle: 'Color emotion icons with translation symbols',
        tabStyle: 'Color emotion tabs with translation categories',
        imageUsage: 'Color emotion audio with emotional translation overlays',
        placement: {
          images: 'Color emotion translation displays',
          tabs: 'Color emotion navigation',
          icons: 'Color translation emotion icons',
          buttons: 'Color emotion translation style'
        }
      },
      {
        id: 'ac-32-5',
        slideNumber: 5,
        name: 'Template 32 — Slide 5',
        layout: 'Medium mastery journey with emotional technique development and skill evolution',
        content: 'Medium mastery journey featuring emotional technique development and progressive skill evolution',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Medium Green to Mastery Orange)',
        buttonStyle: 'Medium mastery buttons with evolution themes',
        iconStyle: 'Medium mastery icons with evolution symbols',
        tabStyle: 'Medium mastery tabs with evolution categories',
        imageUsage: 'Medium mastery audio with emotional evolution overlays',
        placement: {
          images: 'Medium mastery evolution displays',
          tabs: 'Medium mastery navigation',
          icons: 'Medium evolution mastery icons',
          buttons: 'Medium mastery evolution style'
        }
      },
      {
        id: 'ac-32-6',
        slideNumber: 6,
        name: 'Template 32 — Slide 6',
        layout: 'Artistic collaboration moments with emotional creative synergy and partnership magic',
        content: 'Artistic collaboration moments featuring emotional creative synergy and magical partnership dynamics',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Collaboration Magenta to Synergy Red)',
        buttonStyle: 'Artistic collaboration buttons with synergy themes',
        iconStyle: 'Artistic collaboration icons with synergy symbols',
        tabStyle: 'Artistic collaboration tabs with synergy categories',
        imageUsage: 'Artistic collaboration audio with emotional synergy overlays',
        placement: {
          images: 'Artistic collaboration synergy displays',
          tabs: 'Artistic collaboration navigation',
          icons: 'Artistic synergy collaboration icons',
          buttons: 'Artistic collaboration synergy style'
        }
      },
      {
        id: 'ac-32-7',
        slideNumber: 7,
        name: 'Template 32 — Slide 7',
        layout: 'Portfolio development sharing with emotional growth documentation and progress celebration',
        content: 'Portfolio development sharing featuring emotional growth documentation and meaningful progress celebration',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Portfolio Red to Development Yellow)',
        buttonStyle: 'Portfolio development buttons with progress themes',
        iconStyle: 'Portfolio development icons with progress symbols',
        tabStyle: 'Portfolio development tabs with progress categories',
        imageUsage: 'Portfolio development audio with emotional progress overlays',
        placement: {
          images: 'Portfolio development progress displays',
          tabs: 'Portfolio development navigation',
          icons: 'Portfolio progress development icons',
          buttons: 'Portfolio development progress style'
        }
      },
      {
        id: 'ac-32-8',
        slideNumber: 8,
        name: 'Template 32 — Slide 8',
        layout: 'Creative critique sessions with emotional feedback processing and improvement guidance',
        content: 'Creative critique sessions featuring emotional feedback processing and constructive improvement guidance',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Critique Purple to Feedback Purple)',
        buttonStyle: 'Creative critique buttons with improvement themes',
        iconStyle: 'Creative critique icons with improvement symbols',
        tabStyle: 'Creative critique tabs with improvement categories',
        imageUsage: 'Creative critique audio with emotional improvement overlays',
        placement: {
          images: 'Creative critique improvement displays',
          tabs: 'Creative critique navigation',
          icons: 'Creative improvement critique icons',
          buttons: 'Creative critique improvement style'
        }
      },
      {
        id: 'ac-32-9',
        slideNumber: 9,
        name: 'Template 32 — Slide 9',
        layout: 'Exhibition preparation with emotional showcase anticipation and artistic pride',
        content: 'Exhibition preparation featuring emotional showcase anticipation and deep artistic pride moments',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Exhibition Blue to Showcase Blue)',
        buttonStyle: 'Exhibition preparation buttons with pride themes',
        iconStyle: 'Exhibition preparation icons with pride symbols',
        tabStyle: 'Exhibition preparation tabs with pride categories',
        imageUsage: 'Exhibition preparation audio with emotional pride overlays',
        placement: {
          images: 'Exhibition preparation pride displays',
          tabs: 'Exhibition preparation navigation',
          icons: 'Exhibition pride preparation icons',
          buttons: 'Exhibition preparation pride style'
        }
      },
      {
        id: 'ac-32-10',
        slideNumber: 10,
        name: 'Template 32 — Slide 10',
        layout: 'Creative inspiration sharing with emotional muse discovery and artistic influence',
        content: 'Creative inspiration sharing featuring emotional muse discovery and profound artistic influence experiences',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Inspiration Cyan to Muse Mint)',
        buttonStyle: 'Creative inspiration buttons with influence themes',
        iconStyle: 'Creative inspiration icons with influence symbols',
        tabStyle: 'Creative inspiration tabs with influence categories',
        imageUsage: 'Creative inspiration audio with emotional influence overlays',
        placement: {
          images: 'Creative inspiration influence displays',
          tabs: 'Creative inspiration navigation',
          icons: 'Creative influence inspiration icons',
          buttons: 'Creative inspiration influence style'
        }
      },
      {
        id: 'ac-32-11',
        slideNumber: 11,
        name: 'Template 32 — Slide 11',
        layout: 'Artistic style evolution with emotional identity development and signature discovery',
        content: 'Artistic style evolution featuring emotional identity development and unique signature discovery journey',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Style Orange to Identity Orange)',
        buttonStyle: 'Artistic style buttons with identity themes',
        iconStyle: 'Artistic style icons with identity symbols',
        tabStyle: 'Artistic style tabs with identity categories',
        imageUsage: 'Artistic style audio with emotional identity overlays',
        placement: {
          images: 'Artistic style identity displays',
          tabs: 'Artistic style navigation',
          icons: 'Artistic identity style icons',
          buttons: 'Artistic style identity style'
        }
      },
      {
        id: 'ac-32-12',
        slideNumber: 12,
        name: 'Template 32 — Slide 12',
        layout: 'Creative mentorship moments with emotional guidance receiving and wisdom absorption',
        content: 'Creative mentorship moments featuring emotional guidance receiving and profound wisdom absorption',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Mentorship Pink to Wisdom Yellow)',
        buttonStyle: 'Creative mentorship buttons with wisdom themes',
        iconStyle: 'Creative mentorship icons with wisdom symbols',
        tabStyle: 'Creative mentorship tabs with wisdom categories',
        imageUsage: 'Creative mentorship audio with emotional wisdom overlays',
        placement: {
          images: 'Creative mentorship wisdom displays',
          tabs: 'Creative mentorship navigation',
          icons: 'Creative wisdom mentorship icons',
          buttons: 'Creative mentorship wisdom style'
        }
      },
      {
        id: 'ac-32-13',
        slideNumber: 13,
        name: 'Template 32 — Slide 13',
        layout: 'Art therapy sessions with emotional healing expression and therapeutic creativity',
        content: 'Art therapy sessions featuring emotional healing expression and deeply therapeutic creativity practices',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Therapy Mint to Healing Green)',
        buttonStyle: 'Art therapy buttons with healing themes',
        iconStyle: 'Art therapy icons with healing symbols',
        tabStyle: 'Art therapy tabs with healing categories',
        imageUsage: 'Art therapy audio with emotional healing overlays',
        placement: {
          images: 'Art therapy healing displays',
          tabs: 'Art therapy navigation',
          icons: 'Art healing therapy icons',
          buttons: 'Art therapy healing style'
        }
      },
      {
        id: 'ac-32-14',
        slideNumber: 14,
        name: 'Template 32 — Slide 14',
        layout: 'Creative community bonding with emotional fellowship building and artistic family',
        content: 'Creative community bonding featuring emotional fellowship building and nurturing artistic family connections',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Community Red to Fellowship Orange)',
        buttonStyle: 'Creative community buttons with fellowship themes',
        iconStyle: 'Creative community icons with fellowship symbols',
        tabStyle: 'Creative community tabs with fellowship categories',
        imageUsage: 'Creative community audio with emotional fellowship overlays',
        placement: {
          images: 'Creative community fellowship displays',
          tabs: 'Creative community navigation',
          icons: 'Creative fellowship community icons',
          buttons: 'Creative community fellowship style'
        }
      },
      {
        id: 'ac-32-15',
        slideNumber: 15,
        name: 'Template 32 — Slide 15',
        layout: 'Art class partner message sharing with creative codes and artistic connection',
        content: 'Final art class partner message sharing with creative codes and profound artistic connection',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Art Purple to Creative Purple)',
        buttonStyle: 'Art gradient buttons with partner sparkle, 15px radius',
        iconStyle: 'Contextual art creative class partner icons',
        tabStyle: 'Bottom art navigation with partner bonds',
        imageUsage: 'Circular art class partner avatars with emotional creative frames',
        placement: {
          images: 'Circular art class partner photos with creative frames',
          tabs: 'Bottom art class partnership navigation',
          icons: 'Contextual art creative class partner icons',
          buttons: 'Art gradient with partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 33: Music Band Member - Song + Romantic tone (15 slides)
  {
    id: 'music-band-33',
    name: 'Music Band Member Romantic Collection',
    description: 'Romantic song-based messages for music band members',
    preview: '/assets/templates/music-band.jpg',
    suitableFor: ['music band member', 'musical partner', 'harmony companion'],
    style: 'romantic',
    appTheme: 'Musical Romance & Harmonic Connection',
    screenCount: 15,
    slides: [
      {
        id: 'mb-33-1',
        slideNumber: 1,
        name: 'Template 33 — Slide 1',
        layout: 'Musical romance song interface with romantic harmony themes and melodic love',
        content: 'Romantic musical song interface with harmony themes and beautiful melodic love expression',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Musical Pink to Romantic Yellow)',
        buttonStyle: 'Musical romance buttons with harmony themes, 16px radius',
        iconStyle: 'Musical romance icons with harmony symbols',
        tabStyle: 'Bottom music navigation with romance icons',
        imageUsage: 'Song albums with romantic musical harmony overlays',
        placement: {
          images: 'Song albums with romantic musical harmony overlays',
          tabs: 'Music bottom navigation with romance themes',
          icons: 'Romantic musical harmony icons',
          buttons: 'Musical romance harmony button styling'
        }
      },
      {
        id: 'mb-33-2',
        slideNumber: 2,
        name: 'Template 33 — Slide 2',
        layout: 'Love song creation sharing with romantic composition process and emotional melody',
        content: 'Love song creation sharing featuring romantic composition process and deeply emotional melody crafting',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Love Red to Emotion Red)',
        buttonStyle: 'Love song creation buttons with melody themes, 14px radius',
        iconStyle: 'Love song creation icons with melody symbols',
        tabStyle: 'Top music tabs with melody categories',
        imageUsage: 'Love song creation with romantic melody elements',
        placement: {
          images: 'Love song creation with romantic melody elements',
          tabs: 'Top music melody category navigation',
          icons: 'Romantic love song creation melody icons',
          buttons: 'Love song creation melody romantic style'
        }
      },
      {
        id: 'mb-33-3',
        slideNumber: 3,
        name: 'Template 33 — Slide 3',
        layout: 'Duet performance moments with romantic musical connection and synchronized hearts',
        content: 'Duet performance moments featuring romantic musical connection and beautifully synchronized hearts',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Duet Teal to Connection Blue)',
        buttonStyle: 'Duet performance buttons with synchronization themes',
        iconStyle: 'Duet performance icons with synchronization symbols',
        tabStyle: 'Duet performance tabs with synchronization categories',
        imageUsage: 'Duet performance songs with romantic synchronization overlays',
        placement: {
          images: 'Duet performance synchronization displays',
          tabs: 'Duet performance synchronization navigation',
          icons: 'Duet synchronization performance icons',
          buttons: 'Duet performance synchronization style'
        }
      },
      {
        id: 'mb-33-4',
        slideNumber: 4,
        name: 'Template 33 — Slide 4',
        layout: 'Musical inspiration sharing with romantic muse discovery and creative passion',
        content: 'Musical inspiration sharing featuring romantic muse discovery and ignited creative passion moments',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Inspiration Green to Passion Orange)',
        buttonStyle: 'Musical inspiration buttons with passion themes',
        iconStyle: 'Musical inspiration icons with passion symbols',
        tabStyle: 'Musical inspiration tabs with passion categories',
        imageUsage: 'Musical inspiration songs with romantic passion overlays',
        placement: {
          images: 'Musical inspiration passion displays',
          tabs: 'Musical inspiration navigation',
          icons: 'Musical passion inspiration icons',
          buttons: 'Musical inspiration passion style'
        }
      },
      {
        id: 'mb-33-5',
        slideNumber: 5,
        name: 'Template 33 — Slide 5',
        layout: 'Rehearsal intimacy with romantic practice sessions and musical bonding',
        content: 'Rehearsal intimacy featuring romantic practice sessions and deep musical bonding experiences',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Intimacy Magenta to Bonding Red)',
        buttonStyle: 'Rehearsal intimacy buttons with bonding themes',
        iconStyle: 'Rehearsal intimacy icons with bonding symbols',
        tabStyle: 'Rehearsal intimacy tabs with bonding categories',
        imageUsage: 'Rehearsal intimacy songs with romantic bonding overlays',
        placement: {
          images: 'Rehearsal intimacy bonding displays',
          tabs: 'Rehearsal intimacy navigation',
          icons: 'Rehearsal bonding intimacy icons',
          buttons: 'Rehearsal intimacy bonding style'
        }
      },
      {
        id: 'mb-33-6',
        slideNumber: 6,
        name: 'Template 33 — Slide 6',
        layout: 'Concert performance romance with romantic stage chemistry and audience enchantment',
        content: 'Concert performance romance featuring romantic stage chemistry and magical audience enchantment',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Performance Red to Enchantment Yellow)',
        buttonStyle: 'Concert performance buttons with chemistry themes',
        iconStyle: 'Concert performance icons with chemistry symbols',
        tabStyle: 'Concert performance tabs with chemistry categories',
        imageUsage: 'Concert performance songs with romantic chemistry overlays',
        placement: {
          images: 'Concert performance chemistry displays',
          tabs: 'Concert performance navigation',
          icons: 'Concert chemistry performance icons',
          buttons: 'Concert performance chemistry style'
        }
      },
      {
        id: 'mb-33-7',
        slideNumber: 7,
        name: 'Template 33 — Slide 7',
        layout: 'Songwriting collaboration with romantic lyrical intimacy and emotional vulnerability',
        content: 'Songwriting collaboration featuring romantic lyrical intimacy and beautiful emotional vulnerability',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Songwriting Purple to Intimacy Purple)',
        buttonStyle: 'Songwriting collaboration buttons with vulnerability themes',
        iconStyle: 'Songwriting collaboration icons with vulnerability symbols',
        tabStyle: 'Songwriting collaboration tabs with vulnerability categories',
        imageUsage: 'Songwriting collaboration songs with romantic vulnerability overlays',
        placement: {
          images: 'Songwriting collaboration vulnerability displays',
          tabs: 'Songwriting collaboration navigation',
          icons: 'Songwriting vulnerability collaboration icons',
          buttons: 'Songwriting collaboration vulnerability style'
        }
      },
      {
        id: 'mb-33-8',
        slideNumber: 8,
        name: 'Template 33 — Slide 8',
        layout: 'Musical journey documentation with romantic milestone celebration and harmony evolution',
        content: 'Musical journey documentation featuring romantic milestone celebration and beautiful harmony evolution',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Journey Blue to Evolution Blue)',
        buttonStyle: 'Musical journey buttons with evolution themes',
        iconStyle: 'Musical journey icons with evolution symbols',
        tabStyle: 'Musical journey tabs with evolution categories',
        imageUsage: 'Musical journey songs with romantic evolution overlays',
        placement: {
          images: 'Musical journey evolution displays',
          tabs: 'Musical journey navigation',
          icons: 'Musical evolution journey icons',
          buttons: 'Musical journey evolution style'
        }
      },
      {
        id: 'mb-33-9',
        slideNumber: 9,
        name: 'Template 33 — Slide 9',
        layout: 'Recording studio romance with romantic creative intimacy and sonic exploration',
        content: 'Recording studio romance featuring romantic creative intimacy and adventurous sonic exploration',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Studio Cyan to Romance Mint)',
        buttonStyle: 'Recording studio buttons with intimacy themes',
        iconStyle: 'Recording studio icons with intimacy symbols',
        tabStyle: 'Recording studio tabs with intimacy categories',
        imageUsage: 'Recording studio songs with romantic intimacy overlays',
        placement: {
          images: 'Recording studio intimacy displays',
          tabs: 'Recording studio navigation',
          icons: 'Recording intimacy studio icons',
          buttons: 'Recording studio intimacy style'
        }
      },
      {
        id: 'mb-33-10',
        slideNumber: 10,
        name: 'Template 33 — Slide 10',
        layout: 'Musical memory creation with romantic nostalgic melodies and timeless moments',
        content: 'Musical memory creation featuring romantic nostalgic melodies and beautifully timeless moments',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Memory Orange to Nostalgia Orange)',
        buttonStyle: 'Musical memory buttons with nostalgia themes',
        iconStyle: 'Musical memory icons with nostalgia symbols',
        tabStyle: 'Musical memory tabs with nostalgia categories',
        imageUsage: 'Musical memory songs with romantic nostalgia overlays',
        placement: {
          images: 'Musical memory nostalgia displays',
          tabs: 'Musical memory navigation',
          icons: 'Musical nostalgia memory icons',
          buttons: 'Musical memory nostalgia style'
        }
      },
      {
        id: 'mb-33-11',
        slideNumber: 11,
        name: 'Template 33 — Slide 11',
        layout: 'Fan appreciation romance with romantic audience connection and shared musical love',
        content: 'Fan appreciation romance featuring romantic audience connection and deeply shared musical love',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Appreciation Pink to Love Yellow)',
        buttonStyle: 'Fan appreciation buttons with love themes',
        iconStyle: 'Fan appreciation icons with love symbols',
        tabStyle: 'Fan appreciation tabs with love categories',
        imageUsage: 'Fan appreciation songs with romantic love overlays',
        placement: {
          images: 'Fan appreciation love displays',
          tabs: 'Fan appreciation navigation',
          icons: 'Fan love appreciation icons',
          buttons: 'Fan appreciation love style'
        }
      },
      {
        id: 'mb-33-12',
        slideNumber: 12,
        name: 'Template 33 — Slide 12',
        layout: 'Musical partnership evolution with romantic artistic growth and creative maturation',
        content: 'Musical partnership evolution featuring romantic artistic growth and beautiful creative maturation',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Partnership Mint to Growth Green)',
        buttonStyle: 'Musical partnership buttons with growth themes',
        iconStyle: 'Musical partnership icons with growth symbols',
        tabStyle: 'Musical partnership tabs with growth categories',
        imageUsage: 'Musical partnership songs with romantic growth overlays',
        placement: {
          images: 'Musical partnership growth displays',
          tabs: 'Musical partnership navigation',
          icons: 'Musical growth partnership icons',
          buttons: 'Musical partnership growth style'
        }
      },
      {
        id: 'mb-33-13',
        slideNumber: 13,
        name: 'Template 33 — Slide 13',
        layout: 'Love ballad dedication with romantic emotional expression and heartfelt musical poetry',
        content: 'Love ballad dedication featuring romantic emotional expression and deeply heartfelt musical poetry',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Ballad Red to Poetry Orange)',
        buttonStyle: 'Love ballad buttons with poetry themes',
        iconStyle: 'Love ballad icons with poetry symbols',
        tabStyle: 'Love ballad tabs with poetry categories',
        imageUsage: 'Love ballad songs with romantic poetry overlays',
        placement: {
          images: 'Love ballad poetry displays',
          tabs: 'Love ballad navigation',
          icons: 'Love poetry ballad icons',
          buttons: 'Love ballad poetry style'
        }
      },
      {
        id: 'mb-33-14',
        slideNumber: 14,
        name: 'Template 33 — Slide 14',
        layout: 'Musical legacy building with romantic timeless creation and eternal harmony',
        content: 'Musical legacy building featuring romantic timeless creation and beautiful eternal harmony',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Legacy Blue to Eternity Blue)',
        buttonStyle: 'Musical legacy buttons with eternity themes',
        iconStyle: 'Musical legacy icons with eternity symbols',
        tabStyle: 'Musical legacy tabs with eternity categories',
        imageUsage: 'Musical legacy songs with romantic eternity overlays',
        placement: {
          images: 'Musical legacy eternity displays',
          tabs: 'Musical legacy navigation',
          icons: 'Musical eternity legacy icons',
          buttons: 'Musical legacy eternity style'
        }
      },
      {
        id: 'mb-33-15',
        slideNumber: 15,
        name: 'Template 33 — Slide 15',
        layout: 'Music band partner message sharing with harmonic codes and romantic connection',
        content: 'Final music band partner message sharing with harmonic codes and deep romantic connection',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Music Pink to Harmony Yellow)',
        buttonStyle: 'Music gradient buttons with band sparkle, 16px radius',
        iconStyle: 'Contextual music romantic band partner icons',
        tabStyle: 'Bottom music navigation with partner bonds',
        imageUsage: 'Circular music band partner avatars with romantic harmony frames',
        placement: {
          images: 'Circular music band partner photos with harmony frames',
          tabs: 'Bottom music band partnership navigation',
          icons: 'Contextual music romantic band partner icons',
          buttons: 'Music gradient with band partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 34: Photography Club Member - Video + Nostalgic tone (15 slides)
  {
    id: 'photography-club-34',
    name: 'Photography Club Member Nostalgic Collection',
    description: 'Nostalgic video-based messages for photography club members',
    preview: '/assets/templates/photography-club.jpg',
    suitableFor: ['photography club member', 'camera companion', 'visual storyteller'],
    style: 'nostalgic',
    appTheme: 'Visual Memories & Captured Moments',
    screenCount: 15,
    slides: [
      {
        id: 'pc-34-1',
        slideNumber: 1,
        name: 'Template 34 — Slide 1',
        layout: 'Nostalgic photography video interface with vintage themes and memory capture',
        content: 'Nostalgic photography video interface with vintage themes and beautiful memory capture essence',
        colorPalette: 'Gradient from #d63031 to #e17055 (Vintage Red to Nostalgic Orange)',
        buttonStyle: 'Photography nostalgic buttons with vintage themes, 14px radius',
        iconStyle: 'Photography nostalgic icons with vintage symbols',
        tabStyle: 'Bottom photography navigation with vintage icons',
        imageUsage: 'Photography videos with nostalgic vintage memory overlays',
        placement: {
          images: 'Photography videos with nostalgic vintage memory overlays',
          tabs: 'Photography bottom navigation with vintage themes',
          icons: 'Nostalgic photography vintage icons',
          buttons: 'Photography nostalgic vintage button styling'
        }
      },
      {
        id: 'pc-34-2',
        slideNumber: 2,
        name: 'Template 34 — Slide 2',
        layout: 'Memory lane photo walks with nostalgic location revisiting and time reflection',
        content: 'Memory lane photo walks featuring nostalgic location revisiting and deep time reflection moments',
        colorPalette: 'Gradient from #fab1a0 to #e17055 (Memory Orange to Reflection Orange)',
        buttonStyle: 'Memory lane buttons with reflection themes, 12px radius',
        iconStyle: 'Memory lane icons with reflection symbols',
        tabStyle: 'Top photography tabs with reflection categories',
        imageUsage: 'Memory lane videos with nostalgic reflection elements',
        placement: {
          images: 'Memory lane videos with nostalgic reflection elements',
          tabs: 'Top photography reflection category navigation',
          icons: 'Nostalgic memory lane reflection icons',
          buttons: 'Memory lane reflection nostalgic style'
        }
      },
      {
        id: 'pc-34-3',
        slideNumber: 3,
        name: 'Template 34 — Slide 3',
        layout: 'Vintage camera exploration with nostalgic equipment appreciation and craftsmanship honor',
        content: 'Vintage camera exploration featuring nostalgic equipment appreciation and timeless craftsmanship honor',
        colorPalette: 'Gradient from #636e72 to #2d3436 (Vintage Gray to Classic Dark)',
        buttonStyle: 'Vintage camera buttons with craftsmanship themes',
        iconStyle: 'Vintage camera icons with craftsmanship symbols',
        tabStyle: 'Vintage camera tabs with craftsmanship categories',
        imageUsage: 'Vintage camera videos with nostalgic craftsmanship overlays',
        placement: {
          images: 'Vintage camera craftsmanship displays',
          tabs: 'Vintage camera craftsmanship navigation',
          icons: 'Vintage craftsmanship camera icons',
          buttons: 'Vintage camera craftsmanship style'
        }
      },
      {
        id: 'pc-34-4',
        slideNumber: 4,
        name: 'Template 34 — Slide 4',
        layout: 'Golden hour sessions with nostalgic light appreciation and magical moment capture',
        content: 'Golden hour sessions featuring nostalgic light appreciation and enchanting magical moment capture',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Golden Yellow to Hour Orange)',
        buttonStyle: 'Golden hour buttons with magic themes',
        iconStyle: 'Golden hour icons with magic symbols',
        tabStyle: 'Golden hour tabs with magic categories',
        imageUsage: 'Golden hour videos with nostalgic magic overlays',
        placement: {
          images: 'Golden hour magic displays',
          tabs: 'Golden hour magic navigation',
          icons: 'Golden magic hour icons',
          buttons: 'Golden hour magic style'
        }
      },
      {
        id: 'pc-34-5',
        slideNumber: 5,
        name: 'Template 34 — Slide 5',
        layout: 'Old technique mastery with nostalgic film development and darkroom reminiscence',
        content: 'Old technique mastery featuring nostalgic film development and deeply atmospheric darkroom reminiscence',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Darkroom Dark to Film Gray)',
        buttonStyle: 'Old technique buttons with reminiscence themes',
        iconStyle: 'Old technique icons with reminiscence symbols',
        tabStyle: 'Old technique tabs with reminiscence categories',
        imageUsage: 'Old technique videos with nostalgic reminiscence overlays',
        placement: {
          images: 'Old technique reminiscence displays',
          tabs: 'Old technique navigation',
          icons: 'Old reminiscence technique icons',
          buttons: 'Old technique reminiscence style'
        }
      },
      {
        id: 'pc-34-6',
        slideNumber: 6,
        name: 'Template 34 — Slide 6',
        layout: 'Photo story creation with nostalgic narrative building and emotional timeline',
        content: 'Photo story creation featuring nostalgic narrative building and deeply emotional timeline construction',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Story Blue to Narrative Blue)',
        buttonStyle: 'Photo story buttons with timeline themes',
        iconStyle: 'Photo story icons with timeline symbols',
        tabStyle: 'Photo story tabs with timeline categories',
        imageUsage: 'Photo story videos with nostalgic timeline overlays',
        placement: {
          images: 'Photo story timeline displays',
          tabs: 'Photo story navigation',
          icons: 'Photo timeline story icons',
          buttons: 'Photo story timeline style'
        }
      },
      {
        id: 'pc-34-7',
        slideNumber: 7,
        name: 'Template 34 — Slide 7',
        layout: 'Photography milestone memories with nostalgic achievement documentation and growth celebration',
        content: 'Photography milestone memories featuring nostalgic achievement documentation and meaningful growth celebration',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Milestone Green to Achievement Cyan)',
        buttonStyle: 'Photography milestone buttons with growth themes',
        iconStyle: 'Photography milestone icons with growth symbols',
        tabStyle: 'Photography milestone tabs with growth categories',
        imageUsage: 'Photography milestone videos with nostalgic growth overlays',
        placement: {
          images: 'Photography milestone growth displays',
          tabs: 'Photography milestone navigation',
          icons: 'Photography growth milestone icons',
          buttons: 'Photography milestone growth style'
        }
      },
      {
        id: 'pc-34-8',
        slideNumber: 8,
        name: 'Template 34 — Slide 8',
        layout: 'Exhibition preparation reminiscence with nostalgic curation process and legacy building',
        content: 'Exhibition preparation reminiscence featuring nostalgic curation process and meaningful legacy building',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Exhibition Purple to Curation Purple)',
        buttonStyle: 'Exhibition preparation buttons with legacy themes',
        iconStyle: 'Exhibition preparation icons with legacy symbols',
        tabStyle: 'Exhibition preparation tabs with legacy categories',
        imageUsage: 'Exhibition preparation videos with nostalgic legacy overlays',
        placement: {
          images: 'Exhibition preparation legacy displays',
          tabs: 'Exhibition preparation navigation',
          icons: 'Exhibition legacy preparation icons',
          buttons: 'Exhibition preparation legacy style'
        }
      },
      {
        id: 'pc-34-9',
        slideNumber: 9,
        name: 'Template 34 — Slide 9',
        layout: 'Seasonal photography cycles with nostalgic year documentation and natural rhythm',
        content: 'Seasonal photography cycles featuring nostalgic year documentation and beautiful natural rhythm capture',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Seasonal Mint to Nature Green)',
        buttonStyle: 'Seasonal photography buttons with rhythm themes',
        iconStyle: 'Seasonal photography icons with rhythm symbols',
        tabStyle: 'Seasonal photography tabs with rhythm categories',
        imageUsage: 'Seasonal photography videos with nostalgic rhythm overlays',
        placement: {
          images: 'Seasonal photography rhythm displays',
          tabs: 'Seasonal photography navigation',
          icons: 'Seasonal rhythm photography icons',
          buttons: 'Seasonal photography rhythm style'
        }
      },
      {
        id: 'pc-34-10',
        slideNumber: 10,
        name: 'Template 34 — Slide 10',
        layout: 'Photography friendship bonding with nostalgic shared adventures and creative companionship',
        content: 'Photography friendship bonding featuring nostalgic shared adventures and enriching creative companionship',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Friendship Pink to Companionship Yellow)',
        buttonStyle: 'Photography friendship buttons with companionship themes',
        iconStyle: 'Photography friendship icons with companionship symbols',
        tabStyle: 'Photography friendship tabs with companionship categories',
        imageUsage: 'Photography friendship videos with nostalgic companionship overlays',
        placement: {
          images: 'Photography friendship companionship displays',
          tabs: 'Photography friendship navigation',
          icons: 'Photography companionship friendship icons',
          buttons: 'Photography friendship companionship style'
        }
      },
      {
        id: 'pc-34-11',
        slideNumber: 11,
        name: 'Template 34 — Slide 11',
        layout: 'Street photography expeditions with nostalgic urban exploration and cultural documentation',
        content: 'Street photography expeditions featuring nostalgic urban exploration and rich cultural documentation',
        colorPalette: 'Gradient from #e17055 to #d63031 (Street Orange to Urban Red)',
        buttonStyle: 'Street photography buttons with cultural themes',
        iconStyle: 'Street photography icons with cultural symbols',
        tabStyle: 'Street photography tabs with cultural categories',
        imageUsage: 'Street photography videos with nostalgic cultural overlays',
        placement: {
          images: 'Street photography cultural displays',
          tabs: 'Street photography navigation',
          icons: 'Street cultural photography icons',
          buttons: 'Street photography cultural style'
        }
      },
      {
        id: 'pc-34-12',
        slideNumber: 12,
        name: 'Template 34 — Slide 12',
        layout: 'Portfolio development journey with nostalgic artistic evolution and style maturation',
        content: 'Portfolio development journey featuring nostalgic artistic evolution and beautiful style maturation',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Portfolio Red to Evolution Orange)',
        buttonStyle: 'Portfolio development buttons with evolution themes',
        iconStyle: 'Portfolio development icons with evolution symbols',
        tabStyle: 'Portfolio development tabs with evolution categories',
        imageUsage: 'Portfolio development videos with nostalgic evolution overlays',
        placement: {
          images: 'Portfolio development evolution displays',
          tabs: 'Portfolio development navigation',
          icons: 'Portfolio evolution development icons',
          buttons: 'Portfolio development evolution style'
        }
      },
      {
        id: 'pc-34-13',
        slideNumber: 13,
        name: 'Template 34 — Slide 13',
        layout: 'Photography mentorship memories with nostalgic wisdom sharing and guidance appreciation',
        content: 'Photography mentorship memories featuring nostalgic wisdom sharing and deep guidance appreciation',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Mentorship Yellow to Wisdom Orange)',
        buttonStyle: 'Photography mentorship buttons with wisdom themes',
        iconStyle: 'Photography mentorship icons with wisdom symbols',
        tabStyle: 'Photography mentorship tabs with wisdom categories',
        imageUsage: 'Photography mentorship videos with nostalgic wisdom overlays',
        placement: {
          images: 'Photography mentorship wisdom displays',
          tabs: 'Photography mentorship navigation',
          icons: 'Photography wisdom mentorship icons',
          buttons: 'Photography mentorship wisdom style'
        }
      },
      {
        id: 'pc-34-14',
        slideNumber: 14,
        name: 'Template 34 — Slide 14',
        layout: 'Photography legacy documentation with nostalgic impact reflection and timeless influence',
        content: 'Photography legacy documentation featuring nostalgic impact reflection and enduring timeless influence',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Legacy Blue to Impact Blue)',
        buttonStyle: 'Photography legacy buttons with impact themes',
        iconStyle: 'Photography legacy icons with impact symbols',
        tabStyle: 'Photography legacy tabs with impact categories',
        imageUsage: 'Photography legacy videos with nostalgic impact overlays',
        placement: {
          images: 'Photography legacy impact displays',
          tabs: 'Photography legacy navigation',
          icons: 'Photography impact legacy icons',
          buttons: 'Photography legacy impact style'
        }
      },
      {
        id: 'pc-34-15',
        slideNumber: 15,
        name: 'Template 34 — Slide 15',
        layout: 'Photography club message sharing with visual codes and nostalgic connection',
        content: 'Final photography club message sharing with visual codes and deep nostalgic connection',
        colorPalette: 'Gradient from #d63031 to #e17055 (Photography Red to Club Orange)',
        buttonStyle: 'Photography gradient buttons with club sparkle, 14px radius',
        iconStyle: 'Contextual photography nostalgic club member icons',
        tabStyle: 'Bottom photography navigation with member bonds',
        imageUsage: 'Circular photography club member avatars with nostalgic visual frames',
        placement: {
          images: 'Circular photography club member photos with visual frames',
          tabs: 'Bottom photography club membership navigation',
          icons: 'Contextual photography nostalgic club member icons',
          buttons: 'Photography gradient with club sparkle'
        }
      }
    ]
  },

  // TEMPLATE 35: Drama Club Partner - Memory + Caring tone (15 slides)
  {
    id: 'drama-club-35',
    name: 'Drama Club Partner Caring Collection',
    description: 'Caring memory-based messages for drama club partners',
    preview: '/assets/templates/drama-club.jpg',
    suitableFor: ['drama club partner', 'theater companion', 'acting buddy'],
    style: 'caring',
    appTheme: 'Theatrical Care & Performance Bond',
    screenCount: 15,
    slides: [
      {
        id: 'dc-35-1',
        slideNumber: 1,
        name: 'Template 35 — Slide 1',
        layout: 'Theatrical care memory interface with caring performance themes and supportive partnership',
        content: 'Caring theatrical memory interface with performance themes and deeply supportive partnership bonds',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Theatrical Purple to Caring Purple)',
        buttonStyle: 'Theatrical care buttons with support themes, 15px radius',
        iconStyle: 'Theatrical care icons with support symbols',
        tabStyle: 'Bottom theater navigation with care icons',
        imageUsage: 'Theater memories with caring supportive partnership overlays',
        placement: {
          images: 'Theater memories with caring supportive partnership overlays',
          tabs: 'Theater bottom navigation with care themes',
          icons: 'Caring theatrical supportive icons',
          buttons: 'Theatrical care supportive button styling'
        }
      },
      {
        id: 'dc-35-2',
        slideNumber: 2,
        name: 'Template 35 — Slide 2',
        layout: 'Rehearsal support memories with caring encouragement sharing and confidence building',
        content: 'Rehearsal support memories featuring caring encouragement sharing and gentle confidence building',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Support Blue to Encouragement Blue)',
        buttonStyle: 'Rehearsal support buttons with confidence themes, 13px radius',
        iconStyle: 'Rehearsal support icons with confidence symbols',
        tabStyle: 'Top theater tabs with confidence categories',
        imageUsage: 'Rehearsal support memories with caring confidence elements',
        placement: {
          images: 'Rehearsal support memories with caring confidence elements',
          tabs: 'Top theater confidence category navigation',
          icons: 'Caring rehearsal support confidence icons',
          buttons: 'Rehearsal support confidence caring style'
        }
      },
      {
        id: 'dc-35-3',
        slideNumber: 3,
        name: 'Template 35 — Slide 3',
        layout: 'Performance anxiety comfort with caring reassurance sharing and emotional support',
        content: 'Performance anxiety comfort featuring caring reassurance sharing and gentle emotional support',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Comfort Green to Reassurance Cyan)',
        buttonStyle: 'Performance comfort buttons with reassurance themes',
        iconStyle: 'Performance comfort icons with reassurance symbols',
        tabStyle: 'Performance comfort tabs with reassurance categories',
        imageUsage: 'Performance comfort memories with caring reassurance overlays',
        placement: {
          images: 'Performance comfort reassurance displays',
          tabs: 'Performance comfort reassurance navigation',
          icons: 'Performance reassurance comfort icons',
          buttons: 'Performance comfort reassurance style'
        }
      },
      {
        id: 'dc-35-4',
        slideNumber: 4,
        name: 'Template 35 — Slide 4',
        layout: 'Character development guidance with caring coaching moments and growth nurturing',
        content: 'Character development guidance featuring caring coaching moments and thoughtful growth nurturing',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Development Pink to Guidance Yellow)',
        buttonStyle: 'Character development buttons with nurturing themes',
        iconStyle: 'Character development icons with nurturing symbols',
        tabStyle: 'Character development tabs with nurturing categories',
        imageUsage: 'Character development memories with caring nurturing overlays',
        placement: {
          images: 'Character development nurturing displays',
          tabs: 'Character development navigation',
          icons: 'Character nurturing development icons',
          buttons: 'Character development nurturing style'
        }
      },
      {
        id: 'dc-35-5',
        slideNumber: 5,
        name: 'Template 35 — Slide 5',
        layout: 'Line learning sessions with caring patience demonstration and memory support',
        content: 'Line learning sessions featuring caring patience demonstration and gentle memory support techniques',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Learning Mint to Patience Green)',
        buttonStyle: 'Line learning buttons with patience themes',
        iconStyle: 'Line learning icons with patience symbols',
        tabStyle: 'Line learning tabs with patience categories',
        imageUsage: 'Line learning memories with caring patience overlays',
        placement: {
          images: 'Line learning patience displays',
          tabs: 'Line learning navigation',
          icons: 'Line patience learning icons',
          buttons: 'Line learning patience style'
        }
      },
      {
        id: 'dc-35-6',
        slideNumber: 6,
        name: 'Template 35 — Slide 6',
        layout: 'Backstage bonding moments with caring friendship building and trust development',
        content: 'Backstage bonding moments featuring caring friendship building and deep trust development',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Backstage Orange to Bonding Orange)',
        buttonStyle: 'Backstage bonding buttons with trust themes',
        iconStyle: 'Backstage bonding icons with trust symbols',
        tabStyle: 'Backstage bonding tabs with trust categories',
        imageUsage: 'Backstage bonding memories with caring trust overlays',
        placement: {
          images: 'Backstage bonding trust displays',
          tabs: 'Backstage bonding navigation',
          icons: 'Backstage trust bonding icons',
          buttons: 'Backstage bonding trust style'
        }
      },
      {
        id: 'dc-35-7',
        slideNumber: 7,
        name: 'Template 35 — Slide 7',
        layout: 'Opening night preparation with caring pre-show rituals and emotional support',
        content: 'Opening night preparation featuring caring pre-show rituals and comprehensive emotional support',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Opening Red to Preparation Orange)',
        buttonStyle: 'Opening night buttons with support themes',
        iconStyle: 'Opening night icons with support symbols',
        tabStyle: 'Opening night tabs with support categories',
        imageUsage: 'Opening night memories with caring support overlays',
        placement: {
          images: 'Opening night support displays',
          tabs: 'Opening night navigation',
          icons: 'Opening support night icons',
          buttons: 'Opening night support style'
        }
      },
      {
        id: 'dc-35-8',
        slideNumber: 8,
        name: 'Template 35 — Slide 8',
        layout: 'Post-performance reflection with caring achievement celebration and growth recognition',
        content: 'Post-performance reflection featuring caring achievement celebration and meaningful growth recognition',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Reflection Purple to Achievement Purple)',
        buttonStyle: 'Post-performance buttons with recognition themes',
        iconStyle: 'Post-performance icons with recognition symbols',
        tabStyle: 'Post-performance tabs with recognition categories',
        imageUsage: 'Post-performance memories with caring recognition overlays',
        placement: {
          images: 'Post-performance recognition displays',
          tabs: 'Post-performance navigation',
          icons: 'Post-performance recognition icons',
          buttons: 'Post-performance recognition style'
        }
      },
      {
        id: 'dc-35-9',
        slideNumber: 9,
        name: 'Template 35 — Slide 9',
        layout: 'Character chemistry development with caring partnership exploration and scene intimacy',
        content: 'Character chemistry development featuring caring partnership exploration and authentic scene intimacy',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Chemistry Blue to Partnership Blue)',
        buttonStyle: 'Character chemistry buttons with partnership themes',
        iconStyle: 'Character chemistry icons with partnership symbols',
        tabStyle: 'Character chemistry tabs with partnership categories',
        imageUsage: 'Character chemistry memories with caring partnership overlays',
        placement: {
          images: 'Character chemistry partnership displays',
          tabs: 'Character chemistry navigation',
          icons: 'Character partnership chemistry icons',
          buttons: 'Character chemistry partnership style'
        }
      },
      {
        id: 'dc-35-10',
        slideNumber: 10,
        name: 'Template 35 — Slide 10',
        layout: 'Drama competition memories with caring team spirit and collective support',
        content: 'Drama competition memories featuring caring team spirit and unwavering collective support',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Competition Cyan to Team Mint)',
        buttonStyle: 'Drama competition buttons with spirit themes',
        iconStyle: 'Drama competition icons with spirit symbols',
        tabStyle: 'Drama competition tabs with spirit categories',
        imageUsage: 'Drama competition memories with caring spirit overlays',
        placement: {
          images: 'Drama competition spirit displays',
          tabs: 'Drama competition navigation',
          icons: 'Drama spirit competition icons',
          buttons: 'Drama competition spirit style'
        }
      },
      {
        id: 'dc-35-11',
        slideNumber: 11,
        name: 'Template 35 — Slide 11',
        layout: 'Technical rehearsal support with caring problem-solving and collaborative troubleshooting',
        content: 'Technical rehearsal support featuring caring problem-solving and effective collaborative troubleshooting',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Technical Yellow to Support Orange)',
        buttonStyle: 'Technical rehearsal buttons with collaboration themes',
        iconStyle: 'Technical rehearsal icons with collaboration symbols',
        tabStyle: 'Technical rehearsal tabs with collaboration categories',
        imageUsage: 'Technical rehearsal memories with caring collaboration overlays',
        placement: {
          images: 'Technical rehearsal collaboration displays',
          tabs: 'Technical rehearsal navigation',
          icons: 'Technical collaboration rehearsal icons',
          buttons: 'Technical rehearsal collaboration style'
        }
      },
      {
        id: 'dc-35-12',
        slideNumber: 12,
        name: 'Template 35 — Slide 12',
        layout: 'Acting workshop memories with caring skill sharing and technique development',
        content: 'Acting workshop memories featuring caring skill sharing and progressive technique development',
        colorPalette: 'Gradient from #e17055 to #d63031 (Workshop Orange to Skill Red)',
        buttonStyle: 'Acting workshop buttons with development themes',
        iconStyle: 'Acting workshop icons with development symbols',
        tabStyle: 'Acting workshop tabs with development categories',
        imageUsage: 'Acting workshop memories with caring development overlays',
        placement: {
          images: 'Acting workshop development displays',
          tabs: 'Acting workshop navigation',
          icons: 'Acting development workshop icons',
          buttons: 'Acting workshop development style'
        }
      },
      {
        id: 'dc-35-13',
        slideNumber: 13,
        name: 'Template 35 — Slide 13',
        layout: 'Theater family bonding with caring community building and artistic fellowship',
        content: 'Theater family bonding featuring caring community building and enriching artistic fellowship',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Family Pink to Fellowship Yellow)',
        buttonStyle: 'Theater family buttons with fellowship themes',
        iconStyle: 'Theater family icons with fellowship symbols',
        tabStyle: 'Theater family tabs with fellowship categories',
        imageUsage: 'Theater family memories with caring fellowship overlays',
        placement: {
          images: 'Theater family fellowship displays',
          tabs: 'Theater family navigation',
          icons: 'Theater fellowship family icons',
          buttons: 'Theater family fellowship style'
        }
      },
      {
        id: 'dc-35-14',
        slideNumber: 14,
        name: 'Template 35 — Slide 14',
        layout: 'Performance legacy creation with caring tradition preservation and future inspiration',
        content: 'Performance legacy creation featuring caring tradition preservation and meaningful future inspiration',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Legacy Mint to Tradition Green)',
        buttonStyle: 'Performance legacy buttons with tradition themes',
        iconStyle: 'Performance legacy icons with tradition symbols',
        tabStyle: 'Performance legacy tabs with tradition categories',
        imageUsage: 'Performance legacy memories with caring tradition overlays',
        placement: {
          images: 'Performance legacy tradition displays',
          tabs: 'Performance legacy navigation',
          icons: 'Performance tradition legacy icons',
          buttons: 'Performance legacy tradition style'
        }
      },
      {
        id: 'dc-35-15',
        slideNumber: 15,
        name: 'Template 35 — Slide 15',
        layout: 'Drama club partner message sharing with theatrical codes and caring connection',
        content: 'Final drama club partner message sharing with theatrical codes and deep caring connection',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Drama Purple to Club Purple)',
        buttonStyle: 'Drama gradient buttons with partner sparkle, 15px radius',
        iconStyle: 'Contextual drama caring club partner icons',
        tabStyle: 'Bottom theater navigation with partner bonds',
        imageUsage: 'Circular drama club partner avatars with caring theatrical frames',
        placement: {
          images: 'Circular drama club partner photos with theatrical frames',
          tabs: 'Bottom drama club partnership navigation',
          icons: 'Contextual drama caring club partner icons',
          buttons: 'Drama gradient with partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 36: Online Course Buddy - Text + Professional tone (15 slides)
  {
    id: 'online-course-36',
    name: 'Online Course Buddy Professional Collection',
    description: 'Professional text-based messages for online course buddies',
    preview: '/assets/templates/online-course.jpg',
    suitableFor: ['online course buddy', 'learning partner', 'study companion'],
    style: 'professional',
    appTheme: 'Digital Learning & Academic Excellence',
    screenCount: 15,
    slides: [
      {
        id: 'oc-36-1',
        slideNumber: 1,
        name: 'Template 36 — Slide 1',
        layout: 'Professional learning text interface with academic themes and knowledge focus',
        content: 'Professional learning text interface with academic themes and comprehensive knowledge acquisition focus',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Professional Dark to Academic Gray)',
        buttonStyle: 'Professional learning buttons with academic themes, 8px radius',
        iconStyle: 'Professional learning icons with academic symbols',
        tabStyle: 'Bottom learning navigation with academic icons',
        imageUsage: 'Text layouts with professional academic learning overlays',
        placement: {
          images: 'Text layouts with professional academic learning overlays',
          tabs: 'Learning bottom navigation with academic themes',
          icons: 'Professional academic learning icons',
          buttons: 'Learning professional academic button styling'
        }
      },
      {
        id: 'oc-36-2',
        slideNumber: 2,
        name: 'Template 36 — Slide 2',
        layout: 'Course milestone tracking with professional progress documentation and achievement recognition',
        content: 'Course milestone tracking featuring professional progress documentation and systematic achievement recognition',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Progress Blue to Achievement Blue)',
        buttonStyle: 'Course milestone buttons with achievement themes, 6px radius',
        iconStyle: 'Course milestone icons with achievement symbols',
        tabStyle: 'Top learning tabs with achievement categories',
        imageUsage: 'Course milestone texts with professional achievement elements',
        placement: {
          images: 'Course milestone texts with professional achievement elements',
          tabs: 'Top learning achievement category navigation',
          icons: 'Professional course milestone achievement icons',
          buttons: 'Course milestone achievement professional style'
        }
      },
      {
        id: 'oc-36-3',
        slideNumber: 3,
        name: 'Template 36 — Slide 3',
        layout: 'Assignment collaboration with professional peer review and quality assurance',
        content: 'Assignment collaboration featuring professional peer review processes and comprehensive quality assurance',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Collaboration Green to Quality Cyan)',
        buttonStyle: 'Assignment collaboration buttons with quality themes',
        iconStyle: 'Assignment collaboration icons with quality symbols',
        tabStyle: 'Assignment collaboration tabs with quality categories',
        imageUsage: 'Assignment collaboration texts with professional quality overlays',
        placement: {
          images: 'Assignment collaboration quality displays',
          tabs: 'Assignment collaboration quality navigation',
          icons: 'Assignment quality collaboration icons',
          buttons: 'Assignment collaboration quality style'
        }
      },
      {
        id: 'oc-36-4',
        slideNumber: 4,
        name: 'Template 36 — Slide 4',
        layout: 'Study schedule coordination with professional time management and efficiency optimization',
        content: 'Study schedule coordination featuring professional time management strategies and efficiency optimization techniques',
        colorPalette: 'Gradient from #6c5ce7 to #a29bfe (Schedule Purple to Efficiency Purple)',
        buttonStyle: 'Study schedule buttons with efficiency themes',
        iconStyle: 'Study schedule icons with efficiency symbols',
        tabStyle: 'Study schedule tabs with efficiency categories',
        imageUsage: 'Study schedule texts with professional efficiency overlays',
        placement: {
          images: 'Study schedule efficiency displays',
          tabs: 'Study schedule navigation',
          icons: 'Study efficiency schedule icons',
          buttons: 'Study schedule efficiency style'
        }
      },
      {
        id: 'oc-36-5',
        slideNumber: 5,
        name: 'Template 36 — Slide 5',
        layout: 'Resource sharing network with professional knowledge exchange and academic collaboration',
        content: 'Resource sharing network featuring professional knowledge exchange protocols and structured academic collaboration',
        colorPalette: 'Gradient from #e17055 to #d63031 (Resource Orange to Knowledge Red)',
        buttonStyle: 'Resource sharing buttons with collaboration themes',
        iconStyle: 'Resource sharing icons with collaboration symbols',
        tabStyle: 'Resource sharing tabs with collaboration categories',
        imageUsage: 'Resource sharing texts with professional collaboration overlays',
        placement: {
          images: 'Resource sharing collaboration displays',
          tabs: 'Resource sharing navigation',
          icons: 'Resource collaboration sharing icons',
          buttons: 'Resource sharing collaboration style'
        }
      },
      {
        id: 'oc-36-6',
        slideNumber: 6,
        name: 'Template 36 — Slide 6',
        layout: 'Course completion certification with professional achievement documentation and credential validation',
        content: 'Course completion certification featuring professional achievement documentation and comprehensive credential validation',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Completion Gold to Certification Orange)',
        buttonStyle: 'Course completion buttons with certification themes',
        iconStyle: 'Course completion icons with certification symbols',
        tabStyle: 'Course completion tabs with certification categories',
        imageUsage: 'Course completion texts with professional certification overlays',
        placement: {
          images: 'Course completion certification displays',
          tabs: 'Course completion navigation',
          icons: 'Course certification completion icons',
          buttons: 'Course completion certification style'
        }
      },
      {
        id: 'oc-36-7',
        slideNumber: 7,
        name: 'Template 36 — Slide 7',
        layout: 'Discussion forum participation with professional discourse engagement and intellectual contribution',
        content: 'Discussion forum participation featuring professional discourse engagement and meaningful intellectual contribution',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Discussion Mint to Discourse Green)',
        buttonStyle: 'Discussion forum buttons with discourse themes',
        iconStyle: 'Discussion forum icons with discourse symbols',
        tabStyle: 'Discussion forum tabs with discourse categories',
        imageUsage: 'Discussion forum texts with professional discourse overlays',
        placement: {
          images: 'Discussion forum discourse displays',
          tabs: 'Discussion forum navigation',
          icons: 'Discussion discourse forum icons',
          buttons: 'Discussion forum discourse style'
        }
      },
      {
        id: 'oc-36-8',
        slideNumber: 8,
        name: 'Template 36 — Slide 8',
        layout: 'Expert webinar analysis with professional speaker evaluation and content synthesis',
        content: 'Expert webinar analysis featuring professional speaker evaluation and comprehensive content synthesis',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Webinar Red to Analysis Orange)',
        buttonStyle: 'Expert webinar buttons with analysis themes',
        iconStyle: 'Expert webinar icons with analysis symbols',
        tabStyle: 'Expert webinar tabs with analysis categories',
        imageUsage: 'Expert webinar texts with professional analysis overlays',
        placement: {
          images: 'Expert webinar analysis displays',
          tabs: 'Expert webinar navigation',
          icons: 'Expert analysis webinar icons',
          buttons: 'Expert webinar analysis style'
        }
      },
      {
        id: 'oc-36-9',
        slideNumber: 9,
        name: 'Template 36 — Slide 9',
        layout: 'Professional networking within course community and career development focus',
        content: 'Professional networking within course community featuring career development focus and industry connection building',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Networking Blue to Career Blue)',
        buttonStyle: 'Professional networking buttons with career themes',
        iconStyle: 'Professional networking icons with career symbols',
        tabStyle: 'Professional networking tabs with career categories',
        imageUsage: 'Professional networking texts with career development overlays',
        placement: {
          images: 'Professional networking career displays',
          tabs: 'Professional networking navigation',
          icons: 'Professional career networking icons',
          buttons: 'Professional networking career style'
        }
      },
      {
        id: 'oc-36-10',
        slideNumber: 10,
        name: 'Template 36 — Slide 10',
        layout: 'Capstone project collaboration with professional teamwork and deliverable excellence',
        content: 'Capstone project collaboration featuring professional teamwork methodologies and deliverable excellence standards',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Capstone Cyan to Excellence Mint)',
        buttonStyle: 'Capstone project buttons with excellence themes',
        iconStyle: 'Capstone project icons with excellence symbols',
        tabStyle: 'Capstone project tabs with excellence categories',
        imageUsage: 'Capstone project texts with professional excellence overlays',
        placement: {
          images: 'Capstone project excellence displays',
          tabs: 'Capstone project navigation',
          icons: 'Capstone excellence project icons',
          buttons: 'Capstone project excellence style'
        }
      },
      {
        id: 'oc-36-11',
        slideNumber: 11,
        name: 'Template 36 — Slide 11',
        layout: 'Industry application projects with professional real-world integration and practical implementation',
        content: 'Industry application projects featuring professional real-world integration and comprehensive practical implementation',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Industry Orange to Application Orange)',
        buttonStyle: 'Industry application buttons with implementation themes',
        iconStyle: 'Industry application icons with implementation symbols',
        tabStyle: 'Industry application tabs with implementation categories',
        imageUsage: 'Industry application texts with professional implementation overlays',
        placement: {
          images: 'Industry application implementation displays',
          tabs: 'Industry application navigation',
          icons: 'Industry implementation application icons',
          buttons: 'Industry application implementation style'
        }
      },
      {
        id: 'oc-36-12',
        slideNumber: 12,
        name: 'Template 36 — Slide 12',
        layout: 'Peer mentorship programs with professional guidance provision and knowledge transfer',
        content: 'Peer mentorship programs featuring professional guidance provision and structured knowledge transfer protocols',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Mentorship Pink to Guidance Yellow)',
        buttonStyle: 'Peer mentorship buttons with guidance themes',
        iconStyle: 'Peer mentorship icons with guidance symbols',
        tabStyle: 'Peer mentorship tabs with guidance categories',
        imageUsage: 'Peer mentorship texts with professional guidance overlays',
        placement: {
          images: 'Peer mentorship guidance displays',
          tabs: 'Peer mentorship navigation',
          icons: 'Peer guidance mentorship icons',
          buttons: 'Peer mentorship guidance style'
        }
      },
      {
        id: 'oc-36-13',
        slideNumber: 13,
        name: 'Template 36 — Slide 13',
        layout: 'Continuous learning pathway with professional development planning and skill advancement',
        content: 'Continuous learning pathway featuring professional development planning and systematic skill advancement strategies',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Learning Mint to Development Green)',
        buttonStyle: 'Continuous learning buttons with advancement themes',
        iconStyle: 'Continuous learning icons with advancement symbols',
        tabStyle: 'Continuous learning tabs with advancement categories',
        imageUsage: 'Continuous learning texts with professional advancement overlays',
        placement: {
          images: 'Continuous learning advancement displays',
          tabs: 'Continuous learning navigation',
          icons: 'Continuous advancement learning icons',
          buttons: 'Continuous learning advancement style'
        }
      },
      {
        id: 'oc-36-14',
        slideNumber: 14,
        name: 'Template 36 — Slide 14',
        layout: 'Academic excellence recognition with professional achievement showcase and credential portfolio',
        content: 'Academic excellence recognition featuring professional achievement showcase and comprehensive credential portfolio development',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Excellence Red to Achievement Orange)',
        buttonStyle: 'Academic excellence buttons with portfolio themes',
        iconStyle: 'Academic excellence icons with portfolio symbols',
        tabStyle: 'Academic excellence tabs with portfolio categories',
        imageUsage: 'Academic excellence texts with professional portfolio overlays',
        placement: {
          images: 'Academic excellence portfolio displays',
          tabs: 'Academic excellence navigation',
          icons: 'Academic portfolio excellence icons',
          buttons: 'Academic excellence portfolio style'
        }
      },
      {
        id: 'oc-36-15',
        slideNumber: 15,
        name: 'Template 36 — Slide 15',
        layout: 'Online course buddy message sharing with academic codes and professional connection',
        content: 'Final online course buddy message sharing with academic codes and deep professional learning connection',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Course Dark to Professional Gray)',
        buttonStyle: 'Course gradient buttons with buddy sparkle, 8px radius',
        iconStyle: 'Contextual online course professional buddy icons',
        tabStyle: 'Bottom learning navigation with buddy bonds',
        imageUsage: 'Circular online course buddy avatars with professional academic frames',
        placement: {
          images: 'Circular online course buddy photos with academic frames',
          tabs: 'Bottom online course buddy navigation',
          icons: 'Contextual online course professional buddy icons',
          buttons: 'Course gradient with buddy sparkle'
        }
      }
    ]
  },

  // TEMPLATE 37: Fitness Challenge Partner - Video + Motivational tone (15 slides)
  {
    id: 'fitness-challenge-37',
    name: 'Fitness Challenge Partner Motivational Collection',
    description: 'Motivational video-based messages for fitness challenge partners',
    preview: '/assets/templates/fitness-challenge.jpg',
    suitableFor: ['fitness challenge partner', 'workout challenger', 'fitness motivator'],
    style: 'motivational',
    appTheme: 'Fitness Challenges & Motivational Push',
    screenCount: 15,
    slides: [
      {
        id: 'fc-37-1',
        slideNumber: 1,
        name: 'Template 37 — Slide 1',
        layout: 'Motivational fitness video interface with challenge themes and goal achievement',
        content: 'Motivational fitness video interface with challenge themes and relentless goal achievement pursuit',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Challenge Red to Motivation Red)',
        buttonStyle: 'Motivational fitness buttons with challenge themes, 18px radius',
        iconStyle: 'Motivational fitness icons with challenge symbols',
        tabStyle: 'Bottom fitness navigation with challenge icons',
        imageUsage: 'Fitness videos with motivational challenge achievement overlays',
        placement: {
          images: 'Fitness videos with motivational challenge achievement overlays',
          tabs: 'Fitness bottom navigation with challenge themes',
          icons: 'Motivational fitness challenge icons',
          buttons: 'Fitness motivational challenge button styling'
        }
      },
      {
        id: 'fc-37-2',
        slideNumber: 2,
        name: 'Template 37 — Slide 2',
        layout: 'Challenge kickoff motivation with motivational commitment ceremony and goal setting',
        content: 'Challenge kickoff motivation featuring motivational commitment ceremony and powerful goal setting rituals',
        colorPalette: 'Gradient from #3d5af1 to #ff006e (Kickoff Blue to Commitment Pink)',
        buttonStyle: 'Challenge kickoff buttons with commitment themes, 16px radius',
        iconStyle: 'Challenge kickoff icons with commitment symbols',
        tabStyle: 'Top fitness tabs with commitment categories',
        imageUsage: 'Challenge kickoff videos with motivational commitment elements',
        placement: {
          images: 'Challenge kickoff videos with motivational commitment elements',
          tabs: 'Top fitness commitment category navigation',
          icons: 'Motivational challenge kickoff commitment icons',
          buttons: 'Challenge kickoff commitment motivational style'
        }
      },
      {
        id: 'fc-37-3',
        slideNumber: 3,
        name: 'Template 37 — Slide 3',
        layout: 'Daily progress tracking with motivational milestone celebration and consistency building',
        content: 'Daily progress tracking featuring motivational milestone celebration and unwavering consistency building',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Progress Teal to Consistency Blue)',
        buttonStyle: 'Daily progress buttons with consistency themes',
        iconStyle: 'Daily progress icons with consistency symbols',
        tabStyle: 'Daily progress tabs with consistency categories',
        imageUsage: 'Daily progress videos with motivational consistency overlays',
        placement: {
          images: 'Daily progress consistency displays',
          tabs: 'Daily progress consistency navigation',
          icons: 'Daily consistency progress icons',
          buttons: 'Daily progress consistency style'
        }
      },
      {
        id: 'fc-37-4',
        slideNumber: 4,
        name: 'Template 37 — Slide 4',
        layout: 'Workout intensity escalation with motivational challenge progression and limit pushing',
        content: 'Workout intensity escalation featuring motivational challenge progression and boundary limit pushing techniques',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Intensity Green to Escalation Orange)',
        buttonStyle: 'Workout intensity buttons with progression themes',
        iconStyle: 'Workout intensity icons with progression symbols',
        tabStyle: 'Workout intensity tabs with progression categories',
        imageUsage: 'Workout intensity videos with motivational progression overlays',
        placement: {
          images: 'Workout intensity progression displays',
          tabs: 'Workout intensity navigation',
          icons: 'Workout progression intensity icons',
          buttons: 'Workout intensity progression style'
        }
      },
      {
        id: 'fc-37-5',
        slideNumber: 5,
        name: 'Template 37 — Slide 5',
        layout: 'Competition preparation with motivational training intensification and performance optimization',
        content: 'Competition preparation featuring motivational training intensification and comprehensive performance optimization',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Competition Magenta to Performance Red)',
        buttonStyle: 'Competition preparation buttons with optimization themes',
        iconStyle: 'Competition preparation icons with optimization symbols',
        tabStyle: 'Competition preparation tabs with optimization categories',
        imageUsage: 'Competition preparation videos with motivational optimization overlays',
        placement: {
          images: 'Competition preparation optimization displays',
          tabs: 'Competition preparation navigation',
          icons: 'Competition optimization preparation icons',
          buttons: 'Competition preparation optimization style'
        }
      },
      {
        id: 'fc-37-6',
        slideNumber: 6,
        name: 'Template 37 — Slide 6',
        layout: 'Obstacle overcome documentation with motivational barrier breaking and resilience demonstration',
        content: 'Obstacle overcome documentation featuring motivational barrier breaking and powerful resilience demonstration',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Obstacle Red to Resilience Yellow)',
        buttonStyle: 'Obstacle overcome buttons with resilience themes',
        iconStyle: 'Obstacle overcome icons with resilience symbols',
        tabStyle: 'Obstacle overcome tabs with resilience categories',
        imageUsage: 'Obstacle overcome videos with motivational resilience overlays',
        placement: {
          images: 'Obstacle overcome resilience displays',
          tabs: 'Obstacle overcome navigation',
          icons: 'Obstacle resilience overcome icons',
          buttons: 'Obstacle overcome resilience style'
        }
      },
      {
        id: 'fc-37-7',
        slideNumber: 7,
        name: 'Template 37 — Slide 7',
        layout: 'Transformation showcase with motivational before-after comparison and growth celebration',
        content: 'Transformation showcase featuring motivational before-after comparison and profound growth celebration',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Transformation Purple to Growth Purple)',
        buttonStyle: 'Transformation showcase buttons with growth themes',
        iconStyle: 'Transformation showcase icons with growth symbols',
        tabStyle: 'Transformation showcase tabs with growth categories',
        imageUsage: 'Transformation showcase videos with motivational growth overlays',
        placement: {
          images: 'Transformation showcase growth displays',
          tabs: 'Transformation showcase navigation',
          icons: 'Transformation growth showcase icons',
          buttons: 'Transformation showcase growth style'
        }
      },
      {
        id: 'fc-37-8',
        slideNumber: 8,
        name: 'Template 37 — Slide 8',
        layout: 'Nutrition challenge integration with motivational lifestyle change and holistic wellness',
        content: 'Nutrition challenge integration featuring motivational lifestyle change and comprehensive holistic wellness approach',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Nutrition Blue to Wellness Blue)',
        buttonStyle: 'Nutrition challenge buttons with wellness themes',
        iconStyle: 'Nutrition challenge icons with wellness symbols',
        tabStyle: 'Nutrition challenge tabs with wellness categories',
        imageUsage: 'Nutrition challenge videos with motivational wellness overlays',
        placement: {
          images: 'Nutrition challenge wellness displays',
          tabs: 'Nutrition challenge navigation',
          icons: 'Nutrition wellness challenge icons',
          buttons: 'Nutrition challenge wellness style'
        }
      },
      {
        id: 'fc-37-9',
        slideNumber: 9,
        name: 'Template 37 — Slide 9',
        layout: 'Team challenge participation with motivational group dynamics and collective motivation',
        content: 'Team challenge participation featuring motivational group dynamics and powerful collective motivation strategies',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Team Cyan to Collective Mint)',
        buttonStyle: 'Team challenge buttons with collective themes',
        iconStyle: 'Team challenge icons with collective symbols',
        tabStyle: 'Team challenge tabs with collective categories',
        imageUsage: 'Team challenge videos with motivational collective overlays',
        placement: {
          images: 'Team challenge collective displays',
          tabs: 'Team challenge navigation',
          icons: 'Team collective challenge icons',
          buttons: 'Team challenge collective style'
        }
      },
      {
        id: 'fc-37-10',
        slideNumber: 10,
        name: 'Template 37 — Slide 10',
        layout: 'Personal record breaking with motivational achievement celebration and milestone recognition',
        content: 'Personal record breaking featuring motivational achievement celebration and significant milestone recognition',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Record Orange to Achievement Orange)',
        buttonStyle: 'Personal record buttons with milestone themes',
        iconStyle: 'Personal record icons with milestone symbols',
        tabStyle: 'Personal record tabs with milestone categories',
        imageUsage: 'Personal record videos with motivational milestone overlays',
        placement: {
          images: 'Personal record milestone displays',
          tabs: 'Personal record navigation',
          icons: 'Personal milestone record icons',
          buttons: 'Personal record milestone style'
        }
      },
      {
        id: 'fc-37-11',
        slideNumber: 11,
        name: 'Template 37 — Slide 11',
        layout: 'Recovery and rest optimization with motivational balance education and wellness integration',
        content: 'Recovery and rest optimization featuring motivational balance education and comprehensive wellness integration',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Recovery Pink to Balance Yellow)',
        buttonStyle: 'Recovery optimization buttons with balance themes',
        iconStyle: 'Recovery optimization icons with balance symbols',
        tabStyle: 'Recovery optimization tabs with balance categories',
        imageUsage: 'Recovery optimization videos with motivational balance overlays',
        placement: {
          images: 'Recovery optimization balance displays',
          tabs: 'Recovery optimization navigation',
          icons: 'Recovery balance optimization icons',
          buttons: 'Recovery optimization balance style'
        }
      },
      {
        id: 'fc-37-12',
        slideNumber: 12,
        name: 'Template 37 — Slide 12',
        layout: 'Challenge completion celebration with motivational victory recognition and accomplishment pride',
        content: 'Challenge completion celebration featuring motivational victory recognition and well-earned accomplishment pride',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Completion Mint to Victory Green)',
        buttonStyle: 'Challenge completion buttons with victory themes',
        iconStyle: 'Challenge completion icons with victory symbols',
        tabStyle: 'Challenge completion tabs with victory categories',
        imageUsage: 'Challenge completion videos with motivational victory overlays',
        placement: {
          images: 'Challenge completion victory displays',
          tabs: 'Challenge completion navigation',
          icons: 'Challenge victory completion icons',
          buttons: 'Challenge completion victory style'
        }
      },
      {
        id: 'fc-37-13',
        slideNumber: 13,
        name: 'Template 37 — Slide 13',
        layout: 'Mentor and mentee dynamics with motivational guidance sharing and inspiration transfer',
        content: 'Mentor and mentee dynamics featuring motivational guidance sharing and powerful inspiration transfer',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Mentor Red to Guidance Orange)',
        buttonStyle: 'Mentor mentee buttons with inspiration themes',
        iconStyle: 'Mentor mentee icons with inspiration symbols',
        tabStyle: 'Mentor mentee tabs with inspiration categories',
        imageUsage: 'Mentor mentee videos with motivational inspiration overlays',
        placement: {
          images: 'Mentor mentee inspiration displays',
          tabs: 'Mentor mentee navigation',
          icons: 'Mentor inspiration mentee icons',
          buttons: 'Mentor mentee inspiration style'
        }
      },
      {
        id: 'fc-37-14',
        slideNumber: 14,
        name: 'Template 37 — Slide 14',
        layout: 'Fitness lifestyle integration with motivational long-term commitment and sustainable habits',
        content: 'Fitness lifestyle integration featuring motivational long-term commitment and sustainable healthy habits development',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Lifestyle Blue to Commitment Blue)',
        buttonStyle: 'Fitness lifestyle buttons with commitment themes',
        iconStyle: 'Fitness lifestyle icons with commitment symbols',
        tabStyle: 'Fitness lifestyle tabs with commitment categories',
        imageUsage: 'Fitness lifestyle videos with motivational commitment overlays',
        placement: {
          images: 'Fitness lifestyle commitment displays',
          tabs: 'Fitness lifestyle navigation',
          icons: 'Fitness commitment lifestyle icons',
          buttons: 'Fitness lifestyle commitment style'
        }
      },
      {
        id: 'fc-37-15',
        slideNumber: 15,
        name: 'Template 37 — Slide 15',
        layout: 'Fitness challenge partner message sharing with motivational codes and training connection',
        content: 'Final fitness challenge partner message sharing with motivational codes and deep training connection',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Fitness Red to Challenge Red)',
        buttonStyle: 'Fitness gradient buttons with partner sparkle, 18px radius',
        iconStyle: 'Contextual fitness motivational challenge partner icons',
        tabStyle: 'Bottom fitness navigation with partner bonds',
        imageUsage: 'Circular fitness challenge partner avatars with motivational training frames',
        placement: {
          images: 'Circular fitness challenge partner photos with training frames',
          tabs: 'Bottom fitness challenge partnership navigation',
          icons: 'Contextual fitness motivational challenge partner icons',
          buttons: 'Fitness gradient with challenge partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 38: Podcast Co-host - Audio + Fun tone (15 slides)
  {
    id: 'podcast-cohost-38',
    name: 'Podcast Co-host Fun Collection',
    description: 'Fun audio-based messages for podcast co-hosts',
    preview: '/assets/templates/podcast-cohost.jpg',
    suitableFor: ['podcast co-host', 'audio partner', 'show companion'],
    style: 'fun',
    appTheme: 'Podcasting Fun & Audio Adventures',
    screenCount: 15,
    slides: [
      {
        id: 'pc-38-1',
        slideNumber: 1,
        name: 'Template 38 — Slide 1',
        layout: 'Fun podcast audio interface with entertaining themes and comedy focus',
        content: 'Fun podcast audio interface with entertaining themes and hilarious comedy focus for engaging shows',
        colorPalette: 'Gradient from #ff9f43 to #feca57 (Fun Orange to Comedy Yellow)',
        buttonStyle: 'Fun podcast buttons with comedy themes, 16px radius',
        iconStyle: 'Fun podcast icons with comedy symbols',
        tabStyle: 'Bottom podcast navigation with fun icons',
        imageUsage: 'Audio waveforms with fun entertaining comedy overlays',
        placement: {
          images: 'Audio waveforms with fun entertaining comedy overlays',
          tabs: 'Podcast bottom navigation with fun themes',
          icons: 'Fun podcast comedy icons',
          buttons: 'Podcast fun comedy button styling'
        }
      },
      {
        id: 'pc-38-2',
        slideNumber: 2,
        name: 'Template 38 — Slide 2',
        layout: 'Episode brainstorming sessions with fun idea generation and creative collaboration',
        content: 'Episode brainstorming sessions featuring fun idea generation and wildly creative collaboration moments',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Brainstorm Teal to Creative Blue)',
        buttonStyle: 'Episode brainstorm buttons with creativity themes, 14px radius',
        iconStyle: 'Episode brainstorm icons with creativity symbols',
        tabStyle: 'Top podcast tabs with creativity categories',
        imageUsage: 'Episode brainstorm audio with fun creativity elements',
        placement: {
          images: 'Episode brainstorm audio with fun creativity elements',
          tabs: 'Top podcast creativity category navigation',
          icons: 'Fun episode brainstorm creativity icons',
          buttons: 'Episode brainstorm creativity fun style'
        }
      },
      {
        id: 'pc-38-3',
        slideNumber: 3,
        name: 'Template 38 — Slide 3',
        layout: 'Recording session fun with fun blooper moments and spontaneous laughter',
        content: 'Recording session fun featuring fun blooper moments and contagious spontaneous laughter sharing',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Recording Red to Laughter Red)',
        buttonStyle: 'Recording session buttons with laughter themes',
        iconStyle: 'Recording session icons with laughter symbols',
        tabStyle: 'Recording session tabs with laughter categories',
        imageUsage: 'Recording session audio with fun laughter overlays',
        placement: {
          images: 'Recording session laughter displays',
          tabs: 'Recording session laughter navigation',
          icons: 'Recording laughter session icons',
          buttons: 'Recording session laughter style'
        }
      },
      {
        id: 'pc-38-4',
        slideNumber: 4,
        name: 'Template 38 — Slide 4',
        layout: 'Guest interview chemistry with fun conversation flow and entertaining banter',
        content: 'Guest interview chemistry featuring fun conversation flow and highly entertaining guest banter',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Interview Green to Banter Orange)',
        buttonStyle: 'Guest interview buttons with banter themes',
        iconStyle: 'Guest interview icons with banter symbols',
        tabStyle: 'Guest interview tabs with banter categories',
        imageUsage: 'Guest interview audio with fun banter overlays',
        placement: {
          images: 'Guest interview banter displays',
          tabs: 'Guest interview navigation',
          icons: 'Guest banter interview icons',
          buttons: 'Guest interview banter style'
        }
      },
      {
        id: 'pc-38-5',
        slideNumber: 5,
        name: 'Template 38 — Slide 5',
        layout: 'Audience engagement fun with fun listener interaction and community building',
        content: 'Audience engagement fun featuring fun listener interaction and vibrant community building activities',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Engagement Magenta to Community Red)',
        buttonStyle: 'Audience engagement buttons with community themes',
        iconStyle: 'Audience engagement icons with community symbols',
        tabStyle: 'Audience engagement tabs with community categories',
        imageUsage: 'Audience engagement audio with fun community overlays',
        placement: {
          images: 'Audience engagement community displays',
          tabs: 'Audience engagement navigation',
          icons: 'Audience community engagement icons',
          buttons: 'Audience engagement community style'
        }
      },
      {
        id: 'pc-38-6',
        slideNumber: 6,
        name: 'Template 38 — Slide 6',
        layout: 'Behind-the-scenes fun with fun production stories and equipment adventures',
        content: 'Behind-the-scenes fun featuring fun production stories and hilarious equipment adventures',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Behind-scenes Red to Production Yellow)',
        buttonStyle: 'Behind-scenes buttons with production themes',
        iconStyle: 'Behind-scenes icons with production symbols',
        tabStyle: 'Behind-scenes tabs with production categories',
        imageUsage: 'Behind-scenes audio with fun production overlays',
        placement: {
          images: 'Behind-scenes production displays',
          tabs: 'Behind-scenes navigation',
          icons: 'Behind production scenes icons',
          buttons: 'Behind-scenes production style'
        }
      },
      {
        id: 'pc-38-7',
        slideNumber: 7,
        name: 'Template 38 — Slide 7',
        layout: 'Podcast milestone celebration with fun achievement recognition and growth sharing',
        content: 'Podcast milestone celebration featuring fun achievement recognition and exciting growth milestone sharing',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Milestone Purple to Achievement Purple)',
        buttonStyle: 'Podcast milestone buttons with achievement themes',
        iconStyle: 'Podcast milestone icons with achievement symbols',
        tabStyle: 'Podcast milestone tabs with achievement categories',
        imageUsage: 'Podcast milestone audio with fun achievement overlays',
        placement: {
          images: 'Podcast milestone achievement displays',
          tabs: 'Podcast milestone navigation',
          icons: 'Podcast achievement milestone icons',
          buttons: 'Podcast milestone achievement style'
        }
      },
      {
        id: 'pc-38-8',
        slideNumber: 8,
        name: 'Template 38 — Slide 8',
        layout: 'Live show energy with fun real-time interaction and spontaneous entertainment',
        content: 'Live show energy featuring fun real-time interaction and absolutely spontaneous entertainment moments',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Live Blue to Energy Blue)',
        buttonStyle: 'Live show buttons with energy themes',
        iconStyle: 'Live show icons with energy symbols',
        tabStyle: 'Live show tabs with energy categories',
        imageUsage: 'Live show audio with fun energy overlays',
        placement: {
          images: 'Live show energy displays',
          tabs: 'Live show navigation',
          icons: 'Live energy show icons',
          buttons: 'Live show energy style'
        }
      },
      {
        id: 'pc-38-9',
        slideNumber: 9,
        name: 'Template 38 — Slide 9',
        layout: 'Content series development with fun storytelling arcs and narrative adventure',
        content: 'Content series development featuring fun storytelling arcs and captivating narrative adventure journeys',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Content Cyan to Story Mint)',
        buttonStyle: 'Content series buttons with storytelling themes',
        iconStyle: 'Content series icons with storytelling symbols',
        tabStyle: 'Content series tabs with storytelling categories',
        imageUsage: 'Content series audio with fun storytelling overlays',
        placement: {
          images: 'Content series storytelling displays',
          tabs: 'Content series navigation',
          icons: 'Content storytelling series icons',
          buttons: 'Content series storytelling style'
        }
      },
      {
        id: 'pc-38-10',
        slideNumber: 10,
        name: 'Template 38 — Slide 10',
        layout: 'Comedy segment creation with fun humor development and joke crafting',
        content: 'Comedy segment creation featuring fun humor development and expert joke crafting techniques',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Comedy Orange to Humor Orange)',
        buttonStyle: 'Comedy segment buttons with humor themes',
        iconStyle: 'Comedy segment icons with humor symbols',
        tabStyle: 'Comedy segment tabs with humor categories',
        imageUsage: 'Comedy segment audio with fun humor overlays',
        placement: {
          images: 'Comedy segment humor displays',
          tabs: 'Comedy segment navigation',
          icons: 'Comedy humor segment icons',
          buttons: 'Comedy segment humor style'
        }
      },
      {
        id: 'pc-38-11',
        slideNumber: 11,
        name: 'Template 38 — Slide 11',
        layout: 'Fan mail responses with fun listener appreciation and community connection',
        content: 'Fan mail responses featuring fun listener appreciation and heartwarming community connection moments',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Fan Pink to Appreciation Yellow)',
        buttonStyle: 'Fan mail buttons with appreciation themes',
        iconStyle: 'Fan mail icons with appreciation symbols',
        tabStyle: 'Fan mail tabs with appreciation categories',
        imageUsage: 'Fan mail audio with fun appreciation overlays',
        placement: {
          images: 'Fan mail appreciation displays',
          tabs: 'Fan mail navigation',
          icons: 'Fan appreciation mail icons',
          buttons: 'Fan mail appreciation style'
        }
      },
      {
        id: 'pc-38-12',
        slideNumber: 12,
        name: 'Template 38 — Slide 12',
        layout: 'Podcast tour adventures with fun travel experiences and live event energy',
        content: 'Podcast tour adventures featuring fun travel experiences and electrifying live event energy',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Tour Mint to Adventure Green)',
        buttonStyle: 'Podcast tour buttons with adventure themes',
        iconStyle: 'Podcast tour icons with adventure symbols',
        tabStyle: 'Podcast tour tabs with adventure categories',
        imageUsage: 'Podcast tour audio with fun adventure overlays',
        placement: {
          images: 'Podcast tour adventure displays',
          tabs: 'Podcast tour navigation',
          icons: 'Podcast adventure tour icons',
          buttons: 'Podcast tour adventure style'
        }
      },
      {
        id: 'pc-38-13',
        slideNumber: 13,
        name: 'Template 38 — Slide 13',
        layout: 'Crossover episode collaboration with fun show partnerships and creative fusion',
        content: 'Crossover episode collaboration featuring fun show partnerships and innovative creative fusion projects',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Crossover Red to Collaboration Orange)',
        buttonStyle: 'Crossover episode buttons with fusion themes',
        iconStyle: 'Crossover episode icons with fusion symbols',
        tabStyle: 'Crossover episode tabs with fusion categories',
        imageUsage: 'Crossover episode audio with fun fusion overlays',
        placement: {
          images: 'Crossover episode fusion displays',
          tabs: 'Crossover episode navigation',
          icons: 'Crossover fusion episode icons',
          buttons: 'Crossover episode fusion style'
        }
      },
      {
        id: 'pc-38-14',
        slideNumber: 14,
        name: 'Template 38 — Slide 14',
        layout: 'Podcast legacy building with fun impact creation and entertainment heritage',
        content: 'Podcast legacy building featuring fun impact creation and lasting entertainment heritage development',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Legacy Blue to Impact Blue)',
        buttonStyle: 'Podcast legacy buttons with impact themes',
        iconStyle: 'Podcast legacy icons with impact symbols',
        tabStyle: 'Podcast legacy tabs with impact categories',
        imageUsage: 'Podcast legacy audio with fun impact overlays',
        placement: {
          images: 'Podcast legacy impact displays',
          tabs: 'Podcast legacy navigation',
          icons: 'Podcast impact legacy icons',
          buttons: 'Podcast legacy impact style'
        }
      },
      {
        id: 'pc-38-15',
        slideNumber: 15,
        name: 'Template 38 — Slide 15',
        layout: 'Podcast co-host message sharing with audio codes and entertainment connection',
        content: 'Final podcast co-host message sharing with audio codes and deep entertainment connection',
        colorPalette: 'Gradient from #ff9f43 to #feca57 (Podcast Orange to Host Yellow)',
        buttonStyle: 'Podcast gradient buttons with co-host sparkle, 16px radius',
        iconStyle: 'Contextual podcast fun co-host icons',
        tabStyle: 'Bottom podcast navigation with co-host bonds',
        imageUsage: 'Circular podcast co-host avatars with fun entertainment frames',
        placement: {
          images: 'Circular podcast co-host photos with entertainment frames',
          tabs: 'Bottom podcast co-host navigation',
          icons: 'Contextual podcast fun co-host icons',
          buttons: 'Podcast gradient with co-host sparkle'
        }
      }
    ]
  },

  // TEMPLATE 39: Blog Collaboration Partner - Memory + Nostalgic tone (15 slides)
  {
    id: 'blog-collaboration-39',
    name: 'Blog Collaboration Partner Nostalgic Collection',
    description: 'Nostalgic memory-based messages for blog collaboration partners',
    preview: '/assets/templates/blog-collaboration.jpg',
    suitableFor: ['blog collaboration partner', 'writing companion', 'content creator buddy'],
    style: 'nostalgic',
    appTheme: 'Writing Memories & Creative Collaboration',
    screenCount: 15,
    slides: [
      {
        id: 'bc-39-1',
        slideNumber: 1,
        name: 'Template 39 — Slide 1',
        layout: 'Nostalgic writing memory interface with vintage themes and creative reminiscence',
        content: 'Nostalgic writing memory interface with vintage themes and beautiful creative reminiscence elements',
        colorPalette: 'Gradient from #d63031 to #e17055 (Vintage Red to Nostalgic Orange)',
        buttonStyle: 'Nostalgic writing buttons with vintage themes, 13px radius',
        iconStyle: 'Nostalgic writing icons with vintage symbols',
        tabStyle: 'Bottom writing navigation with nostalgic icons',
        imageUsage: 'Writing memories with nostalgic vintage creative overlays',
        placement: {
          images: 'Writing memories with nostalgic vintage creative overlays',
          tabs: 'Writing bottom navigation with nostalgic themes',
          icons: 'Nostalgic writing vintage icons',
          buttons: 'Writing nostalgic vintage button styling'
        }
      },
      {
        id: 'bc-39-2',
        slideNumber: 2,
        name: 'Template 39 — Slide 2',
        layout: 'First collaboration memories with nostalgic partnership beginning and creative bond formation',
        content: 'First collaboration memories featuring nostalgic partnership beginning and meaningful creative bond formation',
        colorPalette: 'Gradient from #fab1a0 to #e17055 (Memory Orange to Bond Orange)',
        buttonStyle: 'First collaboration buttons with bond themes, 11px radius',
        iconStyle: 'First collaboration icons with bond symbols',
        tabStyle: 'Top writing tabs with bond categories',
        imageUsage: 'First collaboration memories with nostalgic bond elements',
        placement: {
          images: 'First collaboration memories with nostalgic bond elements',
          tabs: 'Top writing bond category navigation',
          icons: 'Nostalgic first collaboration bond icons',
          buttons: 'First collaboration bond nostalgic style'
        }
      },
      {
        id: 'bc-39-3',
        slideNumber: 3,
        name: 'Template 39 — Slide 3',
        layout: 'Writing session reminiscence with nostalgic creative flow and inspiration moments',
        content: 'Writing session reminiscence featuring nostalgic creative flow and deeply inspiring collaborative moments',
        colorPalette: 'Gradient from #636e72 to #2d3436 (Session Gray to Creative Dark)',
        buttonStyle: 'Writing session buttons with flow themes',
        iconStyle: 'Writing session icons with flow symbols',
        tabStyle: 'Writing session tabs with flow categories',
        imageUsage: 'Writing session memories with nostalgic flow overlays',
        placement: {
          images: 'Writing session flow displays',
          tabs: 'Writing session flow navigation',
          icons: 'Writing flow session icons',
          buttons: 'Writing session flow style'
        }
      },
      {
        id: 'bc-39-4',
        slideNumber: 4,
        name: 'Template 39 — Slide 4',
        layout: 'Story development journey with nostalgic plot creation and character evolution',
        content: 'Story development journey featuring nostalgic plot creation and beautiful character evolution memories',
        colorPalette: 'Gradient from #fdcb6e to #f39c12 (Story Yellow to Development Orange)',
        buttonStyle: 'Story development buttons with evolution themes',
        iconStyle: 'Story development icons with evolution symbols',
        tabStyle: 'Story development tabs with evolution categories',
        imageUsage: 'Story development memories with nostalgic evolution overlays',
        placement: {
          images: 'Story development evolution displays',
          tabs: 'Story development navigation',
          icons: 'Story evolution development icons',
          buttons: 'Story development evolution style'
        }
      },
      {
        id: 'bc-39-5',
        slideNumber: 5,
        name: 'Template 39 — Slide 5',
        layout: 'Publishing milestone memories with nostalgic achievement celebration and success sharing',
        content: 'Publishing milestone memories featuring nostalgic achievement celebration and heartwarming success sharing',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Publishing Blue to Success Blue)',
        buttonStyle: 'Publishing milestone buttons with success themes',
        iconStyle: 'Publishing milestone icons with success symbols',
        tabStyle: 'Publishing milestone tabs with success categories',
        imageUsage: 'Publishing milestone memories with nostalgic success overlays',
        placement: {
          images: 'Publishing milestone success displays',
          tabs: 'Publishing milestone navigation',
          icons: 'Publishing success milestone icons',
          buttons: 'Publishing milestone success style'
        }
      },
      {
        id: 'bc-39-6',
        slideNumber: 6,
        name: 'Template 39 — Slide 6',
        layout: 'Reader feedback sharing with nostalgic response appreciation and community building',
        content: 'Reader feedback sharing featuring nostalgic response appreciation and meaningful community building moments',
        colorPalette: 'Gradient from #00b894 to #00cec9 (Feedback Green to Community Cyan)',
        buttonStyle: 'Reader feedback buttons with community themes',
        iconStyle: 'Reader feedback icons with community symbols',
        tabStyle: 'Reader feedback tabs with community categories',
        imageUsage: 'Reader feedback memories with nostalgic community overlays',
        placement: {
          images: 'Reader feedback community displays',
          tabs: 'Reader feedback navigation',
          icons: 'Reader community feedback icons',
          buttons: 'Reader feedback community style'
        }
      },
      {
        id: 'bc-39-7',
        slideNumber: 7,
        name: 'Template 39 — Slide 7',
        layout: 'Creative breakthrough documentation with nostalgic inspiration moments and artistic growth',
        content: 'Creative breakthrough documentation featuring nostalgic inspiration moments and profound artistic growth experiences',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Breakthrough Purple to Inspiration Purple)',
        buttonStyle: 'Creative breakthrough buttons with growth themes',
        iconStyle: 'Creative breakthrough icons with growth symbols',
        tabStyle: 'Creative breakthrough tabs with growth categories',
        imageUsage: 'Creative breakthrough memories with nostalgic growth overlays',
        placement: {
          images: 'Creative breakthrough growth displays',
          tabs: 'Creative breakthrough navigation',
          icons: 'Creative growth breakthrough icons',
          buttons: 'Creative breakthrough growth style'
        }
      },
      {
        id: 'bc-39-8',
        slideNumber: 8,
        name: 'Template 39 — Slide 8',
        layout: 'Editorial process memories with nostalgic revision sessions and perfectionist collaboration',
        content: 'Editorial process memories featuring nostalgic revision sessions and dedicated perfectionist collaboration',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Editorial Mint to Revision Green)',
        buttonStyle: 'Editorial process buttons with revision themes',
        iconStyle: 'Editorial process icons with revision symbols',
        tabStyle: 'Editorial process tabs with revision categories',
        imageUsage: 'Editorial process memories with nostalgic revision overlays',
        placement: {
          images: 'Editorial process revision displays',
          tabs: 'Editorial process navigation',
          icons: 'Editorial revision process icons',
          buttons: 'Editorial process revision style'
        }
      },
      {
        id: 'bc-39-9',
        slideNumber: 9,
        name: 'Template 39 — Slide 9',
        layout: 'Writing retreat experiences with nostalgic creative immersion and focused collaboration',
        content: 'Writing retreat experiences featuring nostalgic creative immersion and deeply focused collaborative work',
        colorPalette: 'Gradient from #e17055 to #d63031 (Retreat Orange to Immersion Red)',
        buttonStyle: 'Writing retreat buttons with immersion themes',
        iconStyle: 'Writing retreat icons with immersion symbols',
        tabStyle: 'Writing retreat tabs with immersion categories',
        imageUsage: 'Writing retreat memories with nostalgic immersion overlays',
        placement: {
          images: 'Writing retreat immersion displays',
          tabs: 'Writing retreat navigation',
          icons: 'Writing immersion retreat icons',
          buttons: 'Writing retreat immersion style'
        }
      },
      {
        id: 'bc-39-10',
        slideNumber: 10,
        name: 'Template 39 — Slide 10',
        layout: 'Blog series evolution with nostalgic content development and audience growth',
        content: 'Blog series evolution featuring nostalgic content development and exciting audience growth journey',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Series Pink to Evolution Yellow)',
        buttonStyle: 'Blog series buttons with growth themes',
        iconStyle: 'Blog series icons with growth symbols',
        tabStyle: 'Blog series tabs with growth categories',
        imageUsage: 'Blog series memories with nostalgic growth overlays',
        placement: {
          images: 'Blog series growth displays',
          tabs: 'Blog series navigation',
          icons: 'Blog growth series icons',
          buttons: 'Blog series growth style'
        }
      },
      {
        id: 'bc-39-11',
        slideNumber: 11,
        name: 'Template 39 — Slide 11',
        layout: 'Writing style evolution with nostalgic voice development and creative maturation',
        content: 'Writing style evolution featuring nostalgic voice development and beautiful creative maturation process',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Style Red to Voice Orange)',
        buttonStyle: 'Writing style buttons with voice themes',
        iconStyle: 'Writing style icons with voice symbols',
        tabStyle: 'Writing style tabs with voice categories',
        imageUsage: 'Writing style memories with nostalgic voice overlays',
        placement: {
          images: 'Writing style voice displays',
          tabs: 'Writing style navigation',
          icons: 'Writing voice style icons',
          buttons: 'Writing style voice style'
        }
      },
      {
        id: 'bc-39-12',
        slideNumber: 12,
        name: 'Template 39 — Slide 12',
        layout: 'Collaborative project completion with nostalgic achievement satisfaction and partnership pride',
        content: 'Collaborative project completion featuring nostalgic achievement satisfaction and deep partnership pride',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Project Blue to Completion Blue)',
        buttonStyle: 'Collaborative project buttons with pride themes',
        iconStyle: 'Collaborative project icons with pride symbols',
        tabStyle: 'Collaborative project tabs with pride categories',
        imageUsage: 'Collaborative project memories with nostalgic pride overlays',
        placement: {
          images: 'Collaborative project pride displays',
          tabs: 'Collaborative project navigation',
          icons: 'Collaborative pride project icons',
          buttons: 'Collaborative project pride style'
        }
      },
      {
        id: 'bc-39-13',
        slideNumber: 13,
        name: 'Template 39 — Slide 13',
        layout: 'Writing friendship growth with nostalgic bond deepening and creative kinship',
        content: 'Writing friendship growth featuring nostalgic bond deepening and meaningful creative kinship development',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Friendship Cyan to Bond Mint)',
        buttonStyle: 'Writing friendship buttons with kinship themes',
        iconStyle: 'Writing friendship icons with kinship symbols',
        tabStyle: 'Writing friendship tabs with kinship categories',
        imageUsage: 'Writing friendship memories with nostalgic kinship overlays',
        placement: {
          images: 'Writing friendship kinship displays',
          tabs: 'Writing friendship navigation',
          icons: 'Writing kinship friendship icons',
          buttons: 'Writing friendship kinship style'
        }
      },
      {
        id: 'bc-39-14',
        slideNumber: 14,
        name: 'Template 39 — Slide 14',
        layout: 'Literary legacy creation with nostalgic impact reflection and timeless contribution',
        content: 'Literary legacy creation featuring nostalgic impact reflection and enduring timeless contribution to writing',
        colorPalette: 'Gradient from #feca57 to #ff9f43 (Legacy Yellow to Impact Orange)',
        buttonStyle: 'Literary legacy buttons with impact themes',
        iconStyle: 'Literary legacy icons with impact symbols',
        tabStyle: 'Literary legacy tabs with impact categories',
        imageUsage: 'Literary legacy memories with nostalgic impact overlays',
        placement: {
          images: 'Literary legacy impact displays',
          tabs: 'Literary legacy navigation',
          icons: 'Literary impact legacy icons',
          buttons: 'Literary legacy impact style'
        }
      },
      {
        id: 'bc-39-15',
        slideNumber: 15,
        name: 'Template 39 — Slide 15',
        layout: 'Blog collaboration partner message sharing with creative codes and nostalgic connection',
        content: 'Final blog collaboration partner message sharing with creative codes and deep nostalgic connection',
        colorPalette: 'Gradient from #d63031 to #e17055 (Blog Red to Collaboration Orange)',
        buttonStyle: 'Blog gradient buttons with partner sparkle, 13px radius',
        iconStyle: 'Contextual blog nostalgic collaboration partner icons',
        tabStyle: 'Bottom writing navigation with partner bonds',
        imageUsage: 'Circular blog collaboration partner avatars with nostalgic creative frames',
        placement: {
          images: 'Circular blog collaboration partner photos with creative frames',
          tabs: 'Bottom blog collaboration partnership navigation',
          icons: 'Contextual blog nostalgic collaboration partner icons',
          buttons: 'Blog gradient with collaboration partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 40: Social Media Partner - Song + Emotional tone (15 slides)
  {
    id: 'social-media-40',
    name: 'Social Media Partner Emotional Collection',
    description: 'Emotional song-based messages for social media partners',
    preview: '/assets/templates/social-media.jpg',
    suitableFor: ['social media partner', 'content creator', 'digital companion'],
    style: 'emotional',
    appTheme: 'Digital Connection & Social Emotions',
    screenCount: 15,
    slides: [
      {
        id: 'sm-40-1',
        slideNumber: 1,
        name: 'Template 40 — Slide 1',
        layout: 'Emotional social media song interface with digital themes and connection focus',
        content: 'Emotional social media song interface with digital themes and deep human connection focus',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Social Pink to Connection Yellow)',
        buttonStyle: 'Emotional social buttons with connection themes, 14px radius',
        iconStyle: 'Emotional social icons with connection symbols',
        tabStyle: 'Bottom social navigation with emotional icons',
        imageUsage: 'Song albums with emotional social connection overlays',
        placement: {
          images: 'Song albums with emotional social connection overlays',
          tabs: 'Social bottom navigation with emotional themes',
          icons: 'Emotional social connection icons',
          buttons: 'Social emotional connection button styling'
        }
      },
      {
        id: 'sm-40-2',
        slideNumber: 2,
        name: 'Template 40 — Slide 2',
        layout: 'Viral content creation with emotional impact sharing and audience resonance',
        content: 'Viral content creation featuring emotional impact sharing and powerful audience resonance moments',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Viral Red to Impact Red)',
        buttonStyle: 'Viral content buttons with impact themes, 12px radius',
        iconStyle: 'Viral content icons with impact symbols',
        tabStyle: 'Top social tabs with impact categories',
        imageUsage: 'Viral content songs with emotional impact elements',
        placement: {
          images: 'Viral content songs with emotional impact elements',
          tabs: 'Top social impact category navigation',
          icons: 'Emotional viral content impact icons',
          buttons: 'Viral content impact emotional style'
        }
      },
      {
        id: 'sm-40-3',
        slideNumber: 3,
        name: 'Template 40 — Slide 3',
        layout: 'Community building journey with emotional follower connection and digital family',
        content: 'Community building journey featuring emotional follower connection and nurturing digital family bonds',
        colorPalette: 'Gradient from #00d2d3 to #54a0ff (Community Teal to Family Blue)',
        buttonStyle: 'Community building buttons with family themes',
        iconStyle: 'Community building icons with family symbols',
        tabStyle: 'Community building tabs with family categories',
        imageUsage: 'Community building songs with emotional family overlays',
        placement: {
          images: 'Community building family displays',
          tabs: 'Community building family navigation',
          icons: 'Community family building icons',
          buttons: 'Community building family style'
        }
      },
      {
        id: 'sm-40-4',
        slideNumber: 4,
        name: 'Template 40 — Slide 4',
        layout: 'Collaboration campaign memories with emotional partnership success and shared victories',
        content: 'Collaboration campaign memories featuring emotional partnership success and meaningful shared victories',
        colorPalette: 'Gradient from #2ed573 to #ffa502 (Collaboration Green to Victory Orange)',
        buttonStyle: 'Collaboration campaign buttons with victory themes',
        iconStyle: 'Collaboration campaign icons with victory symbols',
        tabStyle: 'Collaboration campaign tabs with victory categories',
        imageUsage: 'Collaboration campaign songs with emotional victory overlays',
        placement: {
          images: 'Collaboration campaign victory displays',
          tabs: 'Collaboration campaign navigation',
          icons: 'Collaboration victory campaign icons',
          buttons: 'Collaboration campaign victory style'
        }
      },
      {
        id: 'sm-40-5',
        slideNumber: 5,
        name: 'Template 40 — Slide 5',
        layout: 'Brand partnership growth with emotional authenticity maintenance and value alignment',
        content: 'Brand partnership growth featuring emotional authenticity maintenance and deep value alignment',
        colorPalette: 'Gradient from #f368e0 to #ff3838 (Brand Magenta to Authenticity Red)',
        buttonStyle: 'Brand partnership buttons with authenticity themes',
        iconStyle: 'Brand partnership icons with authenticity symbols',
        tabStyle: 'Brand partnership tabs with authenticity categories',
        imageUsage: 'Brand partnership songs with emotional authenticity overlays',
        placement: {
          images: 'Brand partnership authenticity displays',
          tabs: 'Brand partnership navigation',
          icons: 'Brand authenticity partnership icons',
          buttons: 'Brand partnership authenticity style'
        }
      },
      {
        id: 'sm-40-6',
        slideNumber: 6,
        name: 'Template 40 — Slide 6',
        layout: 'Crisis management support with emotional solidarity and community resilience',
        content: 'Crisis management support featuring emotional solidarity and inspiring community resilience strength',
        colorPalette: 'Gradient from #ff6348 to #ffbe0b (Crisis Red to Resilience Yellow)',
        buttonStyle: 'Crisis management buttons with resilience themes',
        iconStyle: 'Crisis management icons with resilience symbols',
        tabStyle: 'Crisis management tabs with resilience categories',
        imageUsage: 'Crisis management songs with emotional resilience overlays',
        placement: {
          images: 'Crisis management resilience displays',
          tabs: 'Crisis management navigation',
          icons: 'Crisis resilience management icons',
          buttons: 'Crisis management resilience style'
        }
      },
      {
        id: 'sm-40-7',
        slideNumber: 7,
        name: 'Template 40 — Slide 7',
        layout: 'Milestone achievement celebration with emotional gratitude expression and success sharing',
        content: 'Milestone achievement celebration featuring emotional gratitude expression and heartfelt success sharing',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Milestone Purple to Gratitude Purple)',
        buttonStyle: 'Milestone achievement buttons with gratitude themes',
        iconStyle: 'Milestone achievement icons with gratitude symbols',
        tabStyle: 'Milestone achievement tabs with gratitude categories',
        imageUsage: 'Milestone achievement songs with emotional gratitude overlays',
        placement: {
          images: 'Milestone achievement gratitude displays',
          tabs: 'Milestone achievement navigation',
          icons: 'Milestone gratitude achievement icons',
          buttons: 'Milestone achievement gratitude style'
        }
      },
      {
        id: 'sm-40-8',
        slideNumber: 8,
        name: 'Template 40 — Slide 8',
        layout: 'Digital burnout recovery with emotional wellness prioritization and self-care advocacy',
        content: 'Digital burnout recovery featuring emotional wellness prioritization and important self-care advocacy',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Recovery Blue to Wellness Blue)',
        buttonStyle: 'Digital burnout buttons with wellness themes',
        iconStyle: 'Digital burnout icons with wellness symbols',
        tabStyle: 'Digital burnout tabs with wellness categories',
        imageUsage: 'Digital burnout songs with emotional wellness overlays',
        placement: {
          images: 'Digital burnout wellness displays',
          tabs: 'Digital burnout navigation',
          icons: 'Digital wellness burnout icons',
          buttons: 'Digital burnout wellness style'
        }
      },
      {
        id: 'sm-40-9',
        slideNumber: 9,
        name: 'Template 40 — Slide 9',
        layout: 'Content evolution journey with emotional growth documentation and creative maturation',
        content: 'Content evolution journey featuring emotional growth documentation and beautiful creative maturation',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Content Cyan to Evolution Mint)',
        buttonStyle: 'Content evolution buttons with maturation themes',
        iconStyle: 'Content evolution icons with maturation symbols',
        tabStyle: 'Content evolution tabs with maturation categories',
        imageUsage: 'Content evolution songs with emotional maturation overlays',
        placement: {
          images: 'Content evolution maturation displays',
          tabs: 'Content evolution navigation',
          icons: 'Content maturation evolution icons',
          buttons: 'Content evolution maturation style'
        }
      },
      {
        id: 'sm-40-10',
        slideNumber: 10,
        name: 'Template 40 — Slide 10',
        layout: 'Fan interaction memories with emotional appreciation and community love',
        content: 'Fan interaction memories featuring emotional appreciation and overwhelming community love expression',
        colorPalette: 'Gradient from #e17055 to #fab1a0 (Fan Orange to Love Orange)',
        buttonStyle: 'Fan interaction buttons with love themes',
        iconStyle: 'Fan interaction icons with love symbols',
        tabStyle: 'Fan interaction tabs with love categories',
        imageUsage: 'Fan interaction songs with emotional love overlays',
        placement: {
          images: 'Fan interaction love displays',
          tabs: 'Fan interaction navigation',
          icons: 'Fan love interaction icons',
          buttons: 'Fan interaction love style'
        }
      },
      {
        id: 'sm-40-11',
        slideNumber: 11,
        name: 'Template 40 — Slide 11',
        layout: 'Platform transition challenges with emotional adaptation and audience retention',
        content: 'Platform transition challenges featuring emotional adaptation processes and loyal audience retention',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Transition Pink to Adaptation Yellow)',
        buttonStyle: 'Platform transition buttons with adaptation themes',
        iconStyle: 'Platform transition icons with adaptation symbols',
        tabStyle: 'Platform transition tabs with adaptation categories',
        imageUsage: 'Platform transition songs with emotional adaptation overlays',
        placement: {
          images: 'Platform transition adaptation displays',
          tabs: 'Platform transition navigation',
          icons: 'Platform adaptation transition icons',
          buttons: 'Platform transition adaptation style'
        }
      },
      {
        id: 'sm-40-12',
        slideNumber: 12,
        name: 'Template 40 — Slide 12',
        layout: 'Digital friendship bonds with emotional virtual connection and authentic relationship',
        content: 'Digital friendship bonds featuring emotional virtual connection and genuinely authentic relationship building',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Digital Mint to Friendship Green)',
        buttonStyle: 'Digital friendship buttons with authentic themes',
        iconStyle: 'Digital friendship icons with authentic symbols',
        tabStyle: 'Digital friendship tabs with authentic categories',
        imageUsage: 'Digital friendship songs with emotional authentic overlays',
        placement: {
          images: 'Digital friendship authentic displays',
          tabs: 'Digital friendship navigation',
          icons: 'Digital authentic friendship icons',
          buttons: 'Digital friendship authentic style'
        }
      },
      {
        id: 'sm-40-13',
        slideNumber: 13,
        name: 'Template 40 — Slide 13',
        layout: 'Creative inspiration sharing with emotional artistic influence and motivational impact',
        content: 'Creative inspiration sharing featuring emotional artistic influence and powerful motivational impact',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Inspiration Red to Influence Orange)',
        buttonStyle: 'Creative inspiration buttons with influence themes',
        iconStyle: 'Creative inspiration icons with influence symbols',
        tabStyle: 'Creative inspiration tabs with influence categories',
        imageUsage: 'Creative inspiration songs with emotional influence overlays',
        placement: {
          images: 'Creative inspiration influence displays',
          tabs: 'Creative inspiration navigation',
          icons: 'Creative influence inspiration icons',
          buttons: 'Creative inspiration influence style'
        }
      },
      {
        id: 'sm-40-14',
        slideNumber: 14,
        name: 'Template 40 — Slide 14',
        layout: 'Social impact advocacy with emotional cause championing and positive change',
        content: 'Social impact advocacy featuring emotional cause championing and meaningful positive change creation',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Impact Blue to Change Blue)',
        buttonStyle: 'Social impact buttons with change themes',
        iconStyle: 'Social impact icons with change symbols',
        tabStyle: 'Social impact tabs with change categories',
        imageUsage: 'Social impact songs with emotional change overlays',
        placement: {
          images: 'Social impact change displays',
          tabs: 'Social impact navigation',
          icons: 'Social change impact icons',
          buttons: 'Social impact change style'
        }
      },
      {
        id: 'sm-40-15',
        slideNumber: 15,
        name: 'Template 40 — Slide 15',
        layout: 'Social media partner message sharing with digital codes and emotional connection',
        content: 'Final social media partner message sharing with digital codes and deep emotional connection',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Social Pink to Media Yellow)',
        buttonStyle: 'Social gradient buttons with partner sparkle, 14px radius',
        iconStyle: 'Contextual social media emotional partner icons',
        tabStyle: 'Bottom social navigation with partner bonds',
        imageUsage: 'Circular social media partner avatars with emotional digital frames',
        placement: {
          images: 'Circular social media partner photos with digital frames',
          tabs: 'Bottom social media partnership navigation',
          icons: 'Contextual social media emotional partner icons',
          buttons: 'Social gradient with media partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 41: Gaming Teammate - Memory + Professional tone (15 slides)
  {
    id: 'gaming-teammate-41',
    name: 'Gaming Teammate Professional Collection',
    description: 'Professional memory-based messages for gaming teammates',
    preview: '/assets/templates/gaming-teammate.jpg',
    suitableFor: ['gaming teammate', 'esports partner', 'competitive companion'],
    style: 'professional',
    appTheme: 'Gaming Excellence & Team Achievement',
    screenCount: 15,
    slides: [
      {
        id: 'gt-41-1',
        slideNumber: 1,
        name: 'Template 41 — Slide 1',
        layout: 'Professional gaming memory interface with esports themes and competitive focus',
        content: 'Professional gaming memory interface with esports themes and strategic competitive focus',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Gaming Black to Steel Gray)',
        buttonStyle: 'Professional gaming buttons with competitive themes, 8px radius',
        iconStyle: 'Professional gaming icons with competitive symbols',
        tabStyle: 'Top gaming navigation with professional categories',
        imageUsage: 'Gaming memories with professional competitive overlays',
        placement: {
          images: 'Gaming memories with professional competitive overlays',
          tabs: 'Top gaming navigation with professional themes',
          icons: 'Professional gaming competitive icons',
          buttons: 'Professional gaming competitive button styling'
        }
      },
      {
        id: 'gt-41-2',
        slideNumber: 2,
        name: 'Template 41 — Slide 2',
        layout: 'Competitive tournament memories with professional strategy analysis and tactical review',
        content: 'Competitive tournament memories featuring professional strategy analysis and comprehensive tactical review',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Strategy Blue to Competitive Blue)',
        buttonStyle: 'Tournament competition buttons with strategy themes',
        iconStyle: 'Tournament competition icons with strategy symbols',
        tabStyle: 'Tournament competition tabs with strategy categories',
        imageUsage: 'Tournament competition memories with professional strategy overlays',
        placement: {
          images: 'Tournament competition strategy displays',
          tabs: 'Tournament competition navigation',
          icons: 'Tournament strategy competition icons',
          buttons: 'Tournament competition strategy style'
        }
      },
      {
        id: 'gt-41-3',
        slideNumber: 3,
        name: 'Template 41 — Slide 3',
        layout: 'Team coordination excellence with professional communication and leadership development',
        content: 'Team coordination excellence featuring professional communication skills and advanced leadership development',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Coordination Green to Excellence Mint)',
        buttonStyle: 'Team coordination buttons with leadership themes',
        iconStyle: 'Team coordination icons with leadership symbols',
        tabStyle: 'Team coordination tabs with leadership categories',
        imageUsage: 'Team coordination memories with professional leadership overlays',
        placement: {
          images: 'Team coordination leadership displays',
          tabs: 'Team coordination navigation',
          icons: 'Team leadership coordination icons',
          buttons: 'Team coordination leadership style'
        }
      },
      {
        id: 'gt-41-4',
        slideNumber: 4,
        name: 'Template 41 — Slide 4',
        layout: 'Victory celebration analysis with professional performance metrics and achievement tracking',
        content: 'Victory celebration analysis featuring professional performance metrics and detailed achievement tracking',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Victory Gold to Achievement Orange)',
        buttonStyle: 'Victory celebration buttons with achievement themes',
        iconStyle: 'Victory celebration icons with achievement symbols',
        tabStyle: 'Victory celebration tabs with achievement categories',
        imageUsage: 'Victory celebration memories with professional achievement overlays',
        placement: {
          images: 'Victory celebration achievement displays',
          tabs: 'Victory celebration navigation',
          icons: 'Victory achievement celebration icons',
          buttons: 'Victory celebration achievement style'
        }
      },
      {
        id: 'gt-41-5',
        slideNumber: 5,
        name: 'Template 41 — Slide 5',
        layout: 'Skill development progress with professional training documentation and improvement tracking',
        content: 'Skill development progress featuring professional training documentation and systematic improvement tracking',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Development Purple to Progress Purple)',
        buttonStyle: 'Skill development buttons with training themes',
        iconStyle: 'Skill development icons with training symbols',
        tabStyle: 'Skill development tabs with training categories',
        imageUsage: 'Skill development memories with professional training overlays',
        placement: {
          images: 'Skill development training displays',
          tabs: 'Skill development navigation',
          icons: 'Skill training development icons',
          buttons: 'Skill development training style'
        }
      },
      {
        id: 'gt-41-6',
        slideNumber: 6,
        name: 'Template 41 — Slide 6',
        layout: 'Meta-game analysis memories with professional research methodology and strategic insights',
        content: 'Meta-game analysis memories featuring professional research methodology and valuable strategic insights',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Analysis Red to Research Orange)',
        buttonStyle: 'Meta-game analysis buttons with research themes',
        iconStyle: 'Meta-game analysis icons with research symbols',
        tabStyle: 'Meta-game analysis tabs with research categories',
        imageUsage: 'Meta-game analysis memories with professional research overlays',
        placement: {
          images: 'Meta-game analysis research displays',
          tabs: 'Meta-game analysis navigation',
          icons: 'Meta-game research analysis icons',
          buttons: 'Meta-game analysis research style'
        }
      },
      {
        id: 'gt-41-7',
        slideNumber: 7,
        name: 'Template 41 — Slide 7',
        layout: 'Coaching session documentation with professional mentorship and skill transfer',
        content: 'Coaching session documentation featuring professional mentorship approaches and effective skill transfer',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Coaching Cyan to Mentorship Mint)',
        buttonStyle: 'Coaching session buttons with mentorship themes',
        iconStyle: 'Coaching session icons with mentorship symbols',
        tabStyle: 'Coaching session tabs with mentorship categories',
        imageUsage: 'Coaching session memories with professional mentorship overlays',
        placement: {
          images: 'Coaching session mentorship displays',
          tabs: 'Coaching session navigation',
          icons: 'Coaching mentorship session icons',
          buttons: 'Coaching session mentorship style'
        }
      },
      {
        id: 'gt-41-8',
        slideNumber: 8,
        name: 'Template 41 — Slide 8',
        layout: 'Equipment optimization records with professional hardware analysis and performance enhancement',
        content: 'Equipment optimization records featuring professional hardware analysis and systematic performance enhancement',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Equipment Black to Optimization Gray)',
        buttonStyle: 'Equipment optimization buttons with hardware themes',
        iconStyle: 'Equipment optimization icons with hardware symbols',
        tabStyle: 'Equipment optimization tabs with hardware categories',
        imageUsage: 'Equipment optimization memories with professional hardware overlays',
        placement: {
          images: 'Equipment optimization hardware displays',
          tabs: 'Equipment optimization navigation',
          icons: 'Equipment hardware optimization icons',
          buttons: 'Equipment optimization hardware style'
        }
      },
      {
        id: 'gt-41-9',
        slideNumber: 9,
        name: 'Template 41 — Slide 9',
        layout: 'Scrim practice analysis with professional team dynamics and communication refinement',
        content: 'Scrim practice analysis featuring professional team dynamics evaluation and strategic communication refinement',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Practice Magenta to Analysis Pink)',
        buttonStyle: 'Scrim practice buttons with dynamics themes',
        iconStyle: 'Scrim practice icons with dynamics symbols',
        tabStyle: 'Scrim practice tabs with dynamics categories',
        imageUsage: 'Scrim practice memories with professional dynamics overlays',
        placement: {
          images: 'Scrim practice dynamics displays',
          tabs: 'Scrim practice navigation',
          icons: 'Scrim dynamics practice icons',
          buttons: 'Scrim practice dynamics style'
        }
      },
      {
        id: 'gt-41-10',
        slideNumber: 10,
        name: 'Template 41 — Slide 10',
        layout: 'Mental preparation memories with professional mindset coaching and performance psychology',
        content: 'Mental preparation memories featuring professional mindset coaching and advanced performance psychology',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Mental Blue to Psychology Blue)',
        buttonStyle: 'Mental preparation buttons with mindset themes',
        iconStyle: 'Mental preparation icons with mindset symbols',
        tabStyle: 'Mental preparation tabs with mindset categories',
        imageUsage: 'Mental preparation memories with professional mindset overlays',
        placement: {
          images: 'Mental preparation mindset displays',
          tabs: 'Mental preparation navigation',
          icons: 'Mental mindset preparation icons',
          buttons: 'Mental preparation mindset style'
        }
      },
      {
        id: 'gt-41-11',
        slideNumber: 11,
        name: 'Template 41 — Slide 11',
        layout: 'League progression tracking with professional ranking analysis and competitive journey',
        content: 'League progression tracking featuring professional ranking analysis and comprehensive competitive journey',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (League Gold to Progression Orange)',
        buttonStyle: 'League progression buttons with ranking themes',
        iconStyle: 'League progression icons with ranking symbols',
        tabStyle: 'League progression tabs with ranking categories',
        imageUsage: 'League progression memories with professional ranking overlays',
        placement: {
          images: 'League progression ranking displays',
          tabs: 'League progression navigation',
          icons: 'League ranking progression icons',
          buttons: 'League progression ranking style'
        }
      },
      {
        id: 'gt-41-12',
        slideNumber: 12,
        name: 'Template 41 — Slide 12',
        layout: 'Team building activities with professional trust development and synergy creation',
        content: 'Team building activities featuring professional trust development and powerful synergy creation',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Building Green to Synergy Mint)',
        buttonStyle: 'Team building buttons with trust themes',
        iconStyle: 'Team building icons with trust symbols',
        tabStyle: 'Team building tabs with trust categories',
        imageUsage: 'Team building memories with professional trust overlays',
        placement: {
          images: 'Team building trust displays',
          tabs: 'Team building navigation',
          icons: 'Team trust building icons',
          buttons: 'Team building trust style'
        }
      },
      {
        id: 'gt-41-13',
        slideNumber: 13,
        name: 'Template 41 — Slide 13',
        layout: 'Defeat analysis reconstruction with professional learning methodology and improvement strategies',
        content: 'Defeat analysis reconstruction featuring professional learning methodology and strategic improvement strategies',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Analysis Red to Learning Red)',
        buttonStyle: 'Defeat analysis buttons with learning themes',
        iconStyle: 'Defeat analysis icons with learning symbols',
        tabStyle: 'Defeat analysis tabs with learning categories',
        imageUsage: 'Defeat analysis memories with professional learning overlays',
        placement: {
          images: 'Defeat analysis learning displays',
          tabs: 'Defeat analysis navigation',
          icons: 'Defeat learning analysis icons',
          buttons: 'Defeat analysis learning style'
        }
      },
      {
        id: 'gt-41-14',
        slideNumber: 14,
        name: 'Template 41 — Slide 14',
        layout: 'Championship aspiration planning with professional goal setting and achievement roadmap',
        content: 'Championship aspiration planning featuring professional goal setting and comprehensive achievement roadmap',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Aspiration Purple to Championship Purple)',
        buttonStyle: 'Championship aspiration buttons with goal themes',
        iconStyle: 'Championship aspiration icons with goal symbols',
        tabStyle: 'Championship aspiration tabs with goal categories',
        imageUsage: 'Championship aspiration memories with professional goal overlays',
        placement: {
          images: 'Championship aspiration goal displays',
          tabs: 'Championship aspiration navigation',
          icons: 'Championship goal aspiration icons',
          buttons: 'Championship aspiration goal style'
        }
      },
      {
        id: 'gt-41-15',
        slideNumber: 15,
        name: 'Template 41 — Slide 15',
        layout: 'Gaming teammate memory sharing with professional codes and competitive excellence',
        content: 'Final gaming teammate memory sharing with professional codes and exceptional competitive excellence',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Gaming Black to Professional Gray)',
        buttonStyle: 'Professional gradient buttons with gaming sparkle, 8px radius',
        iconStyle: 'Contextual gaming professional teammate icons',
        tabStyle: 'Top gaming navigation with professional excellence',
        imageUsage: 'Circular gaming teammate avatars with professional competitive frames',
        placement: {
          images: 'Circular gaming teammate photos with professional frames',
          tabs: 'Top gaming teammate professional navigation',
          icons: 'Contextual gaming professional teammate icons',
          buttons: 'Professional gradient with gaming teammate sparkle'
        }
      }
    ]
  },

  // TEMPLATE 42: Study Group Partner - Text + Caring tone (15 slides)
  {
    id: 'study-group-42',
    name: 'Study Group Partner Caring Collection',
    description: 'Caring text-based messages for study group partners',
    preview: '/assets/templates/study-group.jpg',
    suitableFor: ['study group partner', 'academic companion', 'learning buddy'],
    style: 'caring',
    appTheme: 'Academic Support & Learning Together',
    screenCount: 15,
    slides: [
      {
        id: 'sg-42-1',
        slideNumber: 1,
        name: 'Template 42 — Slide 1',
        layout: 'Caring study text interface with academic themes and support focus',
        content: 'Caring study text interface with academic themes and nurturing educational support focus',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Study Blue to Academic Blue)',
        buttonStyle: 'Caring study buttons with support themes, 10px radius',
        iconStyle: 'Caring study icons with support symbols',
        tabStyle: 'Academic navigation with caring support categories',
        imageUsage: 'Study texts with caring academic support overlays',
        placement: {
          images: 'Study texts with caring academic support overlays',
          tabs: 'Academic navigation with caring support themes',
          icons: 'Caring study academic support icons',
          buttons: 'Caring study academic support button styling'
        }
      },
      {
        id: 'sg-42-2',
        slideNumber: 2,
        name: 'Template 42 — Slide 2',
        layout: 'Assignment collaboration support with caring encouragement and shared determination',
        content: 'Assignment collaboration support featuring caring encouragement and inspiring shared determination',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Collaboration Green to Support Mint)',
        buttonStyle: 'Assignment collaboration buttons with encouragement themes',
        iconStyle: 'Assignment collaboration icons with encouragement symbols',
        tabStyle: 'Assignment collaboration tabs with encouragement categories',
        imageUsage: 'Assignment collaboration texts with caring encouragement overlays',
        placement: {
          images: 'Assignment collaboration encouragement displays',
          tabs: 'Assignment collaboration navigation',
          icons: 'Assignment encouragement collaboration icons',
          buttons: 'Assignment collaboration encouragement style'
        }
      },
      {
        id: 'sg-42-3',
        slideNumber: 3,
        name: 'Template 42 — Slide 3',
        layout: 'Exam preparation comfort with caring stress relief and confidence building',
        content: 'Exam preparation comfort featuring caring stress relief techniques and powerful confidence building',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Comfort Pink to Confidence Yellow)',
        buttonStyle: 'Exam preparation buttons with comfort themes',
        iconStyle: 'Exam preparation icons with comfort symbols',
        tabStyle: 'Exam preparation tabs with comfort categories',
        imageUsage: 'Exam preparation texts with caring comfort overlays',
        placement: {
          images: 'Exam preparation comfort displays',
          tabs: 'Exam preparation navigation',
          icons: 'Exam comfort preparation icons',
          buttons: 'Exam preparation comfort style'
        }
      },
      {
        id: 'sg-42-4',
        slideNumber: 4,
        name: 'Template 42 — Slide 4',
        layout: 'Late night study sessions with caring companionship and mutual motivation',
        content: 'Late night study sessions featuring caring companionship and strengthening mutual motivation',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Night Black to Study Gray)',
        buttonStyle: 'Late night study buttons with companionship themes',
        iconStyle: 'Late night study icons with companionship symbols',
        tabStyle: 'Late night study tabs with companionship categories',
        imageUsage: 'Late night study texts with caring companionship overlays',
        placement: {
          images: 'Late night study companionship displays',
          tabs: 'Late night study navigation',
          icons: 'Late night companionship study icons',
          buttons: 'Late night study companionship style'
        }
      },
      {
        id: 'sg-42-5',
        slideNumber: 5,
        name: 'Template 42 — Slide 5',
        layout: 'Difficult concept explanations with caring patience and understanding facilitation',
        content: 'Difficult concept explanations featuring caring patience and compassionate understanding facilitation',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Patience Purple to Understanding Purple)',
        buttonStyle: 'Concept explanation buttons with patience themes',
        iconStyle: 'Concept explanation icons with patience symbols',
        tabStyle: 'Concept explanation tabs with patience categories',
        imageUsage: 'Concept explanation texts with caring patience overlays',
        placement: {
          images: 'Concept explanation patience displays',
          tabs: 'Concept explanation navigation',
          icons: 'Concept patience explanation icons',
          buttons: 'Concept explanation patience style'
        }
      },
      {
        id: 'sg-42-6',
        slideNumber: 6,
        name: 'Template 42 — Slide 6',
        layout: 'Study break encouragement with caring wellness reminders and self-care advocacy',
        content: 'Study break encouragement featuring caring wellness reminders and important self-care advocacy',
        colorPalette: 'Gradient from #55efc4 to #00b894 (Wellness Mint to Care Green)',
        buttonStyle: 'Study break buttons with wellness themes',
        iconStyle: 'Study break icons with wellness symbols',
        tabStyle: 'Study break tabs with wellness categories',
        imageUsage: 'Study break texts with caring wellness overlays',
        placement: {
          images: 'Study break wellness displays',
          tabs: 'Study break navigation',
          icons: 'Study wellness break icons',
          buttons: 'Study break wellness style'
        }
      },
      {
        id: 'sg-42-7',
        slideNumber: 7,
        name: 'Template 42 — Slide 7',
        layout: 'Resource sharing kindness with caring knowledge distribution and academic generosity',
        content: 'Resource sharing kindness featuring caring knowledge distribution and beautiful academic generosity',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Kindness Red to Generosity Orange)',
        buttonStyle: 'Resource sharing buttons with kindness themes',
        iconStyle: 'Resource sharing icons with kindness symbols',
        tabStyle: 'Resource sharing tabs with kindness categories',
        imageUsage: 'Resource sharing texts with caring kindness overlays',
        placement: {
          images: 'Resource sharing kindness displays',
          tabs: 'Resource sharing navigation',
          icons: 'Resource kindness sharing icons',
          buttons: 'Resource sharing kindness style'
        }
      },
      {
        id: 'sg-42-8',
        slideNumber: 8,
        name: 'Template 42 — Slide 8',
        layout: 'Grade celebration support with caring achievement recognition and success sharing',
        content: 'Grade celebration support featuring caring achievement recognition and joyful success sharing',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Celebration Yellow to Achievement Orange)',
        buttonStyle: 'Grade celebration buttons with achievement themes',
        iconStyle: 'Grade celebration icons with achievement symbols',
        tabStyle: 'Grade celebration tabs with achievement categories',
        imageUsage: 'Grade celebration texts with caring achievement overlays',
        placement: {
          images: 'Grade celebration achievement displays',
          tabs: 'Grade celebration navigation',
          icons: 'Grade achievement celebration icons',
          buttons: 'Grade celebration achievement style'
        }
      },
      {
        id: 'sg-42-9',
        slideNumber: 9,
        name: 'Template 42 — Slide 9',
        layout: 'Study accountability partnerships with caring commitment and progress tracking',
        content: 'Study accountability partnerships featuring caring commitment building and supportive progress tracking',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Accountability Cyan to Partnership Mint)',
        buttonStyle: 'Study accountability buttons with commitment themes',
        iconStyle: 'Study accountability icons with commitment symbols',
        tabStyle: 'Study accountability tabs with commitment categories',
        imageUsage: 'Study accountability texts with caring commitment overlays',
        placement: {
          images: 'Study accountability commitment displays',
          tabs: 'Study accountability navigation',
          icons: 'Study commitment accountability icons',
          buttons: 'Study accountability commitment style'
        }
      },
      {
        id: 'sg-42-10',
        slideNumber: 10,
        name: 'Template 42 — Slide 10',
        layout: 'Academic struggle empathy with caring emotional support and resilience building',
        content: 'Academic struggle empathy featuring caring emotional support and nurturing resilience building',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Empathy Magenta to Support Pink)',
        buttonStyle: 'Academic struggle buttons with empathy themes',
        iconStyle: 'Academic struggle icons with empathy symbols',
        tabStyle: 'Academic struggle tabs with empathy categories',
        imageUsage: 'Academic struggle texts with caring empathy overlays',
        placement: {
          images: 'Academic struggle empathy displays',
          tabs: 'Academic struggle navigation',
          icons: 'Academic empathy struggle icons',
          buttons: 'Academic struggle empathy style'
        }
      },
      {
        id: 'sg-42-11',
        slideNumber: 11,
        name: 'Template 42 — Slide 11',
        layout: 'Learning style adaptation with caring flexibility and personalized approach',
        content: 'Learning style adaptation featuring caring flexibility and thoughtfully personalized approach',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Adaptation Blue to Learning Blue)',
        buttonStyle: 'Learning style buttons with flexibility themes',
        iconStyle: 'Learning style icons with flexibility symbols',
        tabStyle: 'Learning style tabs with flexibility categories',
        imageUsage: 'Learning style texts with caring flexibility overlays',
        placement: {
          images: 'Learning style flexibility displays',
          tabs: 'Learning style navigation',
          icons: 'Learning flexibility style icons',
          buttons: 'Learning style flexibility style'
        }
      },
      {
        id: 'sg-42-12',
        slideNumber: 12,
        name: 'Template 42 — Slide 12',
        layout: 'Study motivation revival with caring inspiration and purpose rediscovery',
        content: 'Study motivation revival featuring caring inspiration and meaningful purpose rediscovery',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Revival Red to Motivation Red)',
        buttonStyle: 'Study motivation buttons with inspiration themes',
        iconStyle: 'Study motivation icons with inspiration symbols',
        tabStyle: 'Study motivation tabs with inspiration categories',
        imageUsage: 'Study motivation texts with caring inspiration overlays',
        placement: {
          images: 'Study motivation inspiration displays',
          tabs: 'Study motivation navigation',
          icons: 'Study inspiration motivation icons',
          buttons: 'Study motivation inspiration style'
        }
      },
      {
        id: 'sg-42-13',
        slideNumber: 13,
        name: 'Template 42 — Slide 13',
        layout: 'Future goals discussion with caring aspiration support and dream encouragement',
        content: 'Future goals discussion featuring caring aspiration support and powerful dream encouragement',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Goals Purple to Dreams Purple)',
        buttonStyle: 'Future goals buttons with aspiration themes',
        iconStyle: 'Future goals icons with aspiration symbols',
        tabStyle: 'Future goals tabs with aspiration categories',
        imageUsage: 'Future goals texts with caring aspiration overlays',
        placement: {
          images: 'Future goals aspiration displays',
          tabs: 'Future goals navigation',
          icons: 'Future aspiration goals icons',
          buttons: 'Future goals aspiration style'
        }
      },
      {
        id: 'sg-42-14',
        slideNumber: 14,
        name: 'Template 42 — Slide 14',
        layout: 'Study group gratitude with caring appreciation and friendship acknowledgment',
        content: 'Study group gratitude featuring caring appreciation and heartfelt friendship acknowledgment',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Gratitude Green to Appreciation Mint)',
        buttonStyle: 'Study group buttons with gratitude themes',
        iconStyle: 'Study group icons with gratitude symbols',
        tabStyle: 'Study group tabs with gratitude categories',
        imageUsage: 'Study group texts with caring gratitude overlays',
        placement: {
          images: 'Study group gratitude displays',
          tabs: 'Study group navigation',
          icons: 'Study gratitude group icons',
          buttons: 'Study group gratitude style'
        }
      },
      {
        id: 'sg-42-15',
        slideNumber: 15,
        name: 'Template 42 — Slide 15',
        layout: 'Study group partner text sharing with caring codes and academic support',
        content: 'Final study group partner text sharing with caring codes and nurturing academic support',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Study Blue to Partner Blue)',
        buttonStyle: 'Caring gradient buttons with study sparkle, 10px radius',
        iconStyle: 'Contextual study caring partner icons',
        tabStyle: 'Academic navigation with caring partnership',
        imageUsage: 'Circular study partner avatars with caring academic frames',
        placement: {
          images: 'Circular study partner photos with caring frames',
          tabs: 'Academic study partner caring navigation',
          icons: 'Contextual study caring partner icons',
          buttons: 'Caring gradient with study partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 43: Volunteer Partner - Photo + Supportive tone (15 slides)
  {
    id: 'volunteer-partner-43',
    name: 'Volunteer Partner Supportive Collection',
    description: 'Supportive photo-based messages for volunteer partners',
    preview: '/assets/templates/volunteer-partner.jpg',
    suitableFor: ['volunteer partner', 'service companion', 'community helper'],
    style: 'supportive',
    appTheme: 'Community Service & Shared Purpose',
    screenCount: 15,
    slides: [
      {
        id: 'vp-43-1',
        slideNumber: 1,
        name: 'Template 43 — Slide 1',
        layout: 'Supportive volunteer photo interface with community themes and service focus',
        content: 'Supportive volunteer photo interface with community themes and meaningful service focus',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Volunteer Green to Service Mint)',
        buttonStyle: 'Supportive volunteer buttons with service themes, 12px radius',
        iconStyle: 'Supportive volunteer icons with service symbols',
        tabStyle: 'Community navigation with supportive service categories',
        imageUsage: 'Volunteer photos with supportive community service overlays',
        placement: {
          images: 'Volunteer photos with supportive community service overlays',
          tabs: 'Community navigation with supportive service themes',
          icons: 'Supportive volunteer community service icons',
          buttons: 'Supportive volunteer community service button styling'
        }
      },
      {
        id: 'vp-43-2',
        slideNumber: 2,
        name: 'Template 43 — Slide 2',
        layout: 'Community outreach achievements with supportive impact documentation and change celebration',
        content: 'Community outreach achievements featuring supportive impact documentation and meaningful change celebration',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Outreach Yellow to Impact Orange)',
        buttonStyle: 'Community outreach buttons with impact themes',
        iconStyle: 'Community outreach icons with impact symbols',
        tabStyle: 'Community outreach tabs with impact categories',
        imageUsage: 'Community outreach photos with supportive impact overlays',
        placement: {
          images: 'Community outreach impact displays',
          tabs: 'Community outreach navigation',
          icons: 'Community impact outreach icons',
          buttons: 'Community outreach impact style'
        }
      },
      {
        id: 'vp-43-3',
        slideNumber: 3,
        name: 'Template 43 — Slide 3',
        layout: 'Charity event memories with supportive collaboration and fundraising success',
        content: 'Charity event memories featuring supportive collaboration and inspiring fundraising success',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Charity Magenta to Event Pink)',
        buttonStyle: 'Charity event buttons with collaboration themes',
        iconStyle: 'Charity event icons with collaboration symbols',
        tabStyle: 'Charity event tabs with collaboration categories',
        imageUsage: 'Charity event photos with supportive collaboration overlays',
        placement: {
          images: 'Charity event collaboration displays',
          tabs: 'Charity event navigation',
          icons: 'Charity collaboration event icons',
          buttons: 'Charity event collaboration style'
        }
      },
      {
        id: 'vp-43-4',
        slideNumber: 4,
        name: 'Template 43 — Slide 4',
        layout: 'Service project planning with supportive organization and teamwork coordination',
        content: 'Service project planning featuring supportive organization and excellent teamwork coordination',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Service Blue to Planning Blue)',
        buttonStyle: 'Service project buttons with organization themes',
        iconStyle: 'Service project icons with organization symbols',
        tabStyle: 'Service project tabs with organization categories',
        imageUsage: 'Service project photos with supportive organization overlays',
        placement: {
          images: 'Service project organization displays',
          tabs: 'Service project navigation',
          icons: 'Service organization project icons',
          buttons: 'Service project organization style'
        }
      },
      {
        id: 'vp-43-5',
        slideNumber: 5,
        name: 'Template 43 — Slide 5',
        layout: 'Beneficiary interaction moments with supportive connection and compassionate outreach',
        content: 'Beneficiary interaction moments featuring supportive connection and deeply compassionate outreach',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Connection Red to Compassion Orange)',
        buttonStyle: 'Beneficiary interaction buttons with connection themes',
        iconStyle: 'Beneficiary interaction icons with connection symbols',
        tabStyle: 'Beneficiary interaction tabs with connection categories',
        imageUsage: 'Beneficiary interaction photos with supportive connection overlays',
        placement: {
          images: 'Beneficiary interaction connection displays',
          tabs: 'Beneficiary interaction navigation',
          icons: 'Beneficiary connection interaction icons',
          buttons: 'Beneficiary interaction connection style'
        }
      },
      {
        id: 'vp-43-6',
        slideNumber: 6,
        name: 'Template 43 — Slide 6',
        layout: 'Skill sharing workshops with supportive knowledge transfer and empowerment focus',
        content: 'Skill sharing workshops featuring supportive knowledge transfer and meaningful empowerment focus',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Skills Purple to Empowerment Purple)',
        buttonStyle: 'Skill sharing buttons with empowerment themes',
        iconStyle: 'Skill sharing icons with empowerment symbols',
        tabStyle: 'Skill sharing tabs with empowerment categories',
        imageUsage: 'Skill sharing photos with supportive empowerment overlays',
        placement: {
          images: 'Skill sharing empowerment displays',
          tabs: 'Skill sharing navigation',
          icons: 'Skill empowerment sharing icons',
          buttons: 'Skill sharing empowerment style'
        }
      },
      {
        id: 'vp-43-7',
        slideNumber: 7,
        name: 'Template 43 — Slide 7',
        layout: 'Environmental conservation efforts with supportive sustainability and green initiatives',
        content: 'Environmental conservation efforts featuring supportive sustainability and important green initiatives',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Environment Cyan to Green Mint)',
        buttonStyle: 'Environmental conservation buttons with sustainability themes',
        iconStyle: 'Environmental conservation icons with sustainability symbols',
        tabStyle: 'Environmental conservation tabs with sustainability categories',
        imageUsage: 'Environmental conservation photos with supportive sustainability overlays',
        placement: {
          images: 'Environmental conservation sustainability displays',
          tabs: 'Environmental conservation navigation',
          icons: 'Environmental sustainability conservation icons',
          buttons: 'Environmental conservation sustainability style'
        }
      },
      {
        id: 'vp-43-8',
        slideNumber: 8,
        name: 'Template 43 — Slide 8',
        layout: 'Crisis response coordination with supportive emergency assistance and relief efforts',
        content: 'Crisis response coordination featuring supportive emergency assistance and vital relief efforts',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Crisis Red to Response Red)',
        buttonStyle: 'Crisis response buttons with assistance themes',
        iconStyle: 'Crisis response icons with assistance symbols',
        tabStyle: 'Crisis response tabs with assistance categories',
        imageUsage: 'Crisis response photos with supportive assistance overlays',
        placement: {
          images: 'Crisis response assistance displays',
          tabs: 'Crisis response navigation',
          icons: 'Crisis assistance response icons',
          buttons: 'Crisis response assistance style'
        }
      },
      {
        id: 'vp-43-9',
        slideNumber: 9,
        name: 'Template 43 — Slide 9',
        layout: 'Youth mentoring programs with supportive guidance and development encouragement',
        content: 'Youth mentoring programs featuring supportive guidance and inspiring development encouragement',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Mentoring Yellow to Development Orange)',
        buttonStyle: 'Youth mentoring buttons with guidance themes',
        iconStyle: 'Youth mentoring icons with guidance symbols',
        tabStyle: 'Youth mentoring tabs with guidance categories',
        imageUsage: 'Youth mentoring photos with supportive guidance overlays',
        placement: {
          images: 'Youth mentoring guidance displays',
          tabs: 'Youth mentoring navigation',
          icons: 'Youth guidance mentoring icons',
          buttons: 'Youth mentoring guidance style'
        }
      },
      {
        id: 'vp-43-10',
        slideNumber: 10,
        name: 'Template 43 — Slide 10',
        layout: 'Healthcare support initiatives with supportive wellness promotion and care assistance',
        content: 'Healthcare support initiatives featuring supportive wellness promotion and compassionate care assistance',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Healthcare Green to Wellness Mint)',
        buttonStyle: 'Healthcare support buttons with wellness themes',
        iconStyle: 'Healthcare support icons with wellness symbols',
        tabStyle: 'Healthcare support tabs with wellness categories',
        imageUsage: 'Healthcare support photos with supportive wellness overlays',
        placement: {
          images: 'Healthcare support wellness displays',
          tabs: 'Healthcare support navigation',
          icons: 'Healthcare wellness support icons',
          buttons: 'Healthcare support wellness style'
        }
      },
      {
        id: 'vp-43-11',
        slideNumber: 11,
        name: 'Template 43 — Slide 11',
        layout: 'Educational program assistance with supportive learning facilitation and knowledge sharing',
        content: 'Educational program assistance featuring supportive learning facilitation and valuable knowledge sharing',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Education Blue to Learning Blue)',
        buttonStyle: 'Educational program buttons with learning themes',
        iconStyle: 'Educational program icons with learning symbols',
        tabStyle: 'Educational program tabs with learning categories',
        imageUsage: 'Educational program photos with supportive learning overlays',
        placement: {
          images: 'Educational program learning displays',
          tabs: 'Educational program navigation',
          icons: 'Educational learning program icons',
          buttons: 'Educational program learning style'
        }
      },
      {
        id: 'vp-43-12',
        slideNumber: 12,
        name: 'Template 43 — Slide 12',
        layout: 'Senior citizen engagement with supportive intergenerational connection and respect',
        content: 'Senior citizen engagement featuring supportive intergenerational connection and deep respect',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Engagement Magenta to Respect Pink)',
        buttonStyle: 'Senior citizen buttons with respect themes',
        iconStyle: 'Senior citizen icons with respect symbols',
        tabStyle: 'Senior citizen tabs with respect categories',
        imageUsage: 'Senior citizen photos with supportive respect overlays',
        placement: {
          images: 'Senior citizen respect displays',
          tabs: 'Senior citizen navigation',
          icons: 'Senior respect citizen icons',
          buttons: 'Senior citizen respect style'
        }
      },
      {
        id: 'vp-43-13',
        slideNumber: 13,
        name: 'Template 43 — Slide 13',
        layout: 'Animal welfare advocacy with supportive care and protection efforts',
        content: 'Animal welfare advocacy featuring supportive care and dedicated protection efforts',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Welfare Red to Care Orange)',
        buttonStyle: 'Animal welfare buttons with care themes',
        iconStyle: 'Animal welfare icons with care symbols',
        tabStyle: 'Animal welfare tabs with care categories',
        imageUsage: 'Animal welfare photos with supportive care overlays',
        placement: {
          images: 'Animal welfare care displays',
          tabs: 'Animal welfare navigation',
          icons: 'Animal care welfare icons',
          buttons: 'Animal welfare care style'
        }
      },
      {
        id: 'vp-43-14',
        slideNumber: 14,
        name: 'Template 43 — Slide 14',
        layout: 'Social justice campaigns with supportive advocacy and equality promotion',
        content: 'Social justice campaigns featuring supportive advocacy and powerful equality promotion',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Justice Purple to Equality Purple)',
        buttonStyle: 'Social justice buttons with advocacy themes',
        iconStyle: 'Social justice icons with advocacy symbols',
        tabStyle: 'Social justice tabs with advocacy categories',
        imageUsage: 'Social justice photos with supportive advocacy overlays',
        placement: {
          images: 'Social justice advocacy displays',
          tabs: 'Social justice navigation',
          icons: 'Social advocacy justice icons',
          buttons: 'Social justice advocacy style'
        }
      },
      {
        id: 'vp-43-15',
        slideNumber: 15,
        name: 'Template 43 — Slide 15',
        layout: 'Volunteer partner photo sharing with supportive codes and community service',
        content: 'Final volunteer partner photo sharing with supportive codes and meaningful community service',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Volunteer Green to Service Mint)',
        buttonStyle: 'Supportive gradient buttons with volunteer sparkle, 12px radius',
        iconStyle: 'Contextual volunteer supportive partner icons',
        tabStyle: 'Community navigation with supportive partnership',
        imageUsage: 'Circular volunteer partner avatars with supportive service frames',
        placement: {
          images: 'Circular volunteer partner photos with supportive frames',
          tabs: 'Community volunteer partner supportive navigation',
          icons: 'Contextual volunteer supportive partner icons',
          buttons: 'Supportive gradient with volunteer partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 44: Business Mentor - Video + Formal tone (15 slides)
  {
    id: 'business-mentor-44',
    name: 'Business Mentor Formal Collection',
    description: 'Formal video-based messages for business mentors',
    preview: '/assets/templates/business-mentor.jpg',
    suitableFor: ['business mentor', 'professional advisor', 'career guide'],
    style: 'formal',
    appTheme: 'Professional Development & Business Guidance',
    screenCount: 15,
    slides: [
      {
        id: 'bm-44-1',
        slideNumber: 1,
        name: 'Template 44 — Slide 1',
        layout: 'Formal business video interface with mentorship themes and professional focus',
        content: 'Formal business video interface with mentorship themes and strategic professional focus',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Business Black to Professional Gray)',
        buttonStyle: 'Formal business buttons with mentorship themes, 6px radius',
        iconStyle: 'Formal business icons with mentorship symbols',
        tabStyle: 'Professional navigation with formal mentorship categories',
        imageUsage: 'Business videos with formal mentorship overlays',
        placement: {
          images: 'Business videos with formal mentorship overlays',
          tabs: 'Professional navigation with formal mentorship themes',
          icons: 'Formal business mentorship icons',
          buttons: 'Formal business mentorship button styling'
        }
      },
      {
        id: 'bm-44-2',
        slideNumber: 2,
        name: 'Template 44 — Slide 2',
        layout: 'Strategic planning sessions with formal methodology and business excellence',
        content: 'Strategic planning sessions featuring formal methodology and comprehensive business excellence',
        colorPalette: 'Gradient from #0984e3 to #74b9ff (Strategy Blue to Planning Blue)',
        buttonStyle: 'Strategic planning buttons with methodology themes',
        iconStyle: 'Strategic planning icons with methodology symbols',
        tabStyle: 'Strategic planning tabs with methodology categories',
        imageUsage: 'Strategic planning videos with formal methodology overlays',
        placement: {
          images: 'Strategic planning methodology displays',
          tabs: 'Strategic planning navigation',
          icons: 'Strategic methodology planning icons',
          buttons: 'Strategic planning methodology style'
        }
      },
      {
        id: 'bm-44-3',
        slideNumber: 3,
        name: 'Template 44 — Slide 3',
        layout: 'Leadership development programs with formal training and executive coaching',
        content: 'Leadership development programs featuring formal training and advanced executive coaching',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Leadership Gold to Executive Orange)',
        buttonStyle: 'Leadership development buttons with coaching themes',
        iconStyle: 'Leadership development icons with coaching symbols',
        tabStyle: 'Leadership development tabs with coaching categories',
        imageUsage: 'Leadership development videos with formal coaching overlays',
        placement: {
          images: 'Leadership development coaching displays',
          tabs: 'Leadership development navigation',
          icons: 'Leadership coaching development icons',
          buttons: 'Leadership development coaching style'
        }
      },
      {
        id: 'bm-44-4',
        slideNumber: 4,
        name: 'Template 44 — Slide 4',
        layout: 'Market analysis discussions with formal research and competitive intelligence',
        content: 'Market analysis discussions featuring formal research and strategic competitive intelligence',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Market Green to Analysis Mint)',
        buttonStyle: 'Market analysis buttons with research themes',
        iconStyle: 'Market analysis icons with research symbols',
        tabStyle: 'Market analysis tabs with research categories',
        imageUsage: 'Market analysis videos with formal research overlays',
        placement: {
          images: 'Market analysis research displays',
          tabs: 'Market analysis navigation',
          icons: 'Market research analysis icons',
          buttons: 'Market analysis research style'
        }
      },
      {
        id: 'bm-44-5',
        slideNumber: 5,
        name: 'Template 44 — Slide 5',
        layout: 'Financial planning guidance with formal investment strategies and wealth management',
        content: 'Financial planning guidance featuring formal investment strategies and professional wealth management',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Financial Purple to Wealth Purple)',
        buttonStyle: 'Financial planning buttons with investment themes',
        iconStyle: 'Financial planning icons with investment symbols',
        tabStyle: 'Financial planning tabs with investment categories',
        imageUsage: 'Financial planning videos with formal investment overlays',
        placement: {
          images: 'Financial planning investment displays',
          tabs: 'Financial planning navigation',
          icons: 'Financial investment planning icons',
          buttons: 'Financial planning investment style'
        }
      },
      {
        id: 'bm-44-6',
        slideNumber: 6,
        name: 'Template 44 — Slide 6',
        layout: 'Network expansion strategies with formal relationship building and professional connections',
        content: 'Network expansion strategies featuring formal relationship building and valuable professional connections',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Network Magenta to Connection Pink)',
        buttonStyle: 'Network expansion buttons with relationship themes',
        iconStyle: 'Network expansion icons with relationship symbols',
        tabStyle: 'Network expansion tabs with relationship categories',
        imageUsage: 'Network expansion videos with formal relationship overlays',
        placement: {
          images: 'Network expansion relationship displays',
          tabs: 'Network expansion navigation',
          icons: 'Network relationship expansion icons',
          buttons: 'Network expansion relationship style'
        }
      },
      {
        id: 'bm-44-7',
        slideNumber: 7,
        name: 'Template 44 — Slide 7',
        layout: 'Innovation workshops with formal creativity methodologies and breakthrough thinking',
        content: 'Innovation workshops featuring formal creativity methodologies and revolutionary breakthrough thinking',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Innovation Red to Creativity Orange)',
        buttonStyle: 'Innovation workshop buttons with creativity themes',
        iconStyle: 'Innovation workshop icons with creativity symbols',
        tabStyle: 'Innovation workshop tabs with creativity categories',
        imageUsage: 'Innovation workshop videos with formal creativity overlays',
        placement: {
          images: 'Innovation workshop creativity displays',
          tabs: 'Innovation workshop navigation',
          icons: 'Innovation creativity workshop icons',
          buttons: 'Innovation workshop creativity style'
        }
      },
      {
        id: 'bm-44-8',
        slideNumber: 8,
        name: 'Template 44 — Slide 8',
        layout: 'Performance optimization reviews with formal metrics analysis and goal achievement',
        content: 'Performance optimization reviews featuring formal metrics analysis and systematic goal achievement',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Performance Cyan to Optimization Mint)',
        buttonStyle: 'Performance optimization buttons with metrics themes',
        iconStyle: 'Performance optimization icons with metrics symbols',
        tabStyle: 'Performance optimization tabs with metrics categories',
        imageUsage: 'Performance optimization videos with formal metrics overlays',
        placement: {
          images: 'Performance optimization metrics displays',
          tabs: 'Performance optimization navigation',
          icons: 'Performance metrics optimization icons',
          buttons: 'Performance optimization metrics style'
        }
      },
      {
        id: 'bm-44-9',
        slideNumber: 9,
        name: 'Template 44 — Slide 9',
        layout: 'Risk management protocols with formal assessment and mitigation strategies',
        content: 'Risk management protocols featuring formal assessment and comprehensive mitigation strategies',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Risk Red to Management Red)',
        buttonStyle: 'Risk management buttons with assessment themes',
        iconStyle: 'Risk management icons with assessment symbols',
        tabStyle: 'Risk management tabs with assessment categories',
        imageUsage: 'Risk management videos with formal assessment overlays',
        placement: {
          images: 'Risk management assessment displays',
          tabs: 'Risk management navigation',
          icons: 'Risk assessment management icons',
          buttons: 'Risk management assessment style'
        }
      },
      {
        id: 'bm-44-10',
        slideNumber: 10,
        name: 'Template 44 — Slide 10',
        layout: 'Corporate governance training with formal compliance and ethical leadership',
        content: 'Corporate governance training featuring formal compliance and exemplary ethical leadership',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Corporate Black to Governance Gray)',
        buttonStyle: 'Corporate governance buttons with compliance themes',
        iconStyle: 'Corporate governance icons with compliance symbols',
        tabStyle: 'Corporate governance tabs with compliance categories',
        imageUsage: 'Corporate governance videos with formal compliance overlays',
        placement: {
          images: 'Corporate governance compliance displays',
          tabs: 'Corporate governance navigation',
          icons: 'Corporate compliance governance icons',
          buttons: 'Corporate governance compliance style'
        }
      },
      {
        id: 'bm-44-11',
        slideNumber: 11,
        name: 'Template 44 — Slide 11',
        layout: 'International expansion planning with formal market entry and global strategies',
        content: 'International expansion planning featuring formal market entry and sophisticated global strategies',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (International Blue to Global Blue)',
        buttonStyle: 'International expansion buttons with global themes',
        iconStyle: 'International expansion icons with global symbols',
        tabStyle: 'International expansion tabs with global categories',
        imageUsage: 'International expansion videos with formal global overlays',
        placement: {
          images: 'International expansion global displays',
          tabs: 'International expansion navigation',
          icons: 'International global expansion icons',
          buttons: 'International expansion global style'
        }
      },
      {
        id: 'bm-44-12',
        slideNumber: 12,
        name: 'Template 44 — Slide 12',
        layout: 'Succession planning frameworks with formal transition and continuity management',
        content: 'Succession planning frameworks featuring formal transition and seamless continuity management',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Succession Yellow to Transition Orange)',
        buttonStyle: 'Succession planning buttons with transition themes',
        iconStyle: 'Succession planning icons with transition symbols',
        tabStyle: 'Succession planning tabs with transition categories',
        imageUsage: 'Succession planning videos with formal transition overlays',
        placement: {
          images: 'Succession planning transition displays',
          tabs: 'Succession planning navigation',
          icons: 'Succession transition planning icons',
          buttons: 'Succession planning transition style'
        }
      },
      {
        id: 'bm-44-13',
        slideNumber: 13,
        name: 'Template 44 — Slide 13',
        layout: 'Digital transformation initiatives with formal technology adoption and change management',
        content: 'Digital transformation initiatives featuring formal technology adoption and systematic change management',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Digital Purple to Transformation Purple)',
        buttonStyle: 'Digital transformation buttons with technology themes',
        iconStyle: 'Digital transformation icons with technology symbols',
        tabStyle: 'Digital transformation tabs with technology categories',
        imageUsage: 'Digital transformation videos with formal technology overlays',
        placement: {
          images: 'Digital transformation technology displays',
          tabs: 'Digital transformation navigation',
          icons: 'Digital technology transformation icons',
          buttons: 'Digital transformation technology style'
        }
      },
      {
        id: 'bm-44-14',
        slideNumber: 14,
        name: 'Template 44 — Slide 14',
        layout: 'Merger and acquisition guidance with formal due diligence and integration planning',
        content: 'Merger and acquisition guidance featuring formal due diligence and comprehensive integration planning',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Merger Green to Acquisition Mint)',
        buttonStyle: 'Merger acquisition buttons with diligence themes',
        iconStyle: 'Merger acquisition icons with diligence symbols',
        tabStyle: 'Merger acquisition tabs with diligence categories',
        imageUsage: 'Merger acquisition videos with formal diligence overlays',
        placement: {
          images: 'Merger acquisition diligence displays',
          tabs: 'Merger acquisition navigation',
          icons: 'Merger diligence acquisition icons',
          buttons: 'Merger acquisition diligence style'
        }
      },
      {
        id: 'bm-44-15',
        slideNumber: 15,
        name: 'Template 44 — Slide 15',
        layout: 'Business mentor video sharing with formal codes and professional excellence',
        content: 'Final business mentor video sharing with formal codes and exceptional professional excellence',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Business Black to Mentor Gray)',
        buttonStyle: 'Formal gradient buttons with mentor sparkle, 6px radius',
        iconStyle: 'Contextual business formal mentor icons',
        tabStyle: 'Professional navigation with formal excellence',
        imageUsage: 'Circular business mentor avatars with formal professional frames',
        placement: {
          images: 'Circular business mentor photos with formal frames',
          tabs: 'Professional business mentor formal navigation',
          icons: 'Contextual business formal mentor icons',
          buttons: 'Formal gradient with business mentor sparkle'
        }
      }
    ]
  },

  // TEMPLATE 45: Research Partner - Audio + Fun tone (15 slides)
  {
    id: 'research-partner-45',
    name: 'Research Partner Fun Collection',
    description: 'Fun audio-based messages for research partners',
    preview: '/assets/templates/research-partner.jpg',
    suitableFor: ['research partner', 'academic colleague', 'study companion'],
    style: 'fun',
    appTheme: 'Scientific Discovery & Research Joy',
    screenCount: 15,
    slides: [
      {
        id: 'rp-45-1',
        slideNumber: 1,
        name: 'Template 45 — Slide 1',
        layout: 'Fun research audio interface with scientific themes and discovery focus',
        content: 'Fun research audio interface with scientific themes and exciting discovery focus',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Research Red to Discovery Red)',
        buttonStyle: 'Fun research buttons with discovery themes, 16px radius',
        iconStyle: 'Fun research icons with discovery symbols',
        tabStyle: 'Scientific navigation with fun discovery categories',
        imageUsage: 'Research audios with fun scientific discovery overlays',
        placement: {
          images: 'Research audios with fun scientific discovery overlays',
          tabs: 'Scientific navigation with fun discovery themes',
          icons: 'Fun research scientific discovery icons',
          buttons: 'Fun research scientific discovery button styling'
        }
      },
      {
        id: 'rp-45-2',
        slideNumber: 2,
        name: 'Template 45 — Slide 2',
        layout: 'Hypothesis brainstorming sessions with fun creativity and innovative thinking',
        content: 'Hypothesis brainstorming sessions featuring fun creativity and wildly innovative thinking',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Hypothesis Yellow to Innovation Orange)',
        buttonStyle: 'Hypothesis brainstorming buttons with creativity themes',
        iconStyle: 'Hypothesis brainstorming icons with creativity symbols',
        tabStyle: 'Hypothesis brainstorming tabs with creativity categories',
        imageUsage: 'Hypothesis brainstorming audios with fun creativity overlays',
        placement: {
          images: 'Hypothesis brainstorming creativity displays',
          tabs: 'Hypothesis brainstorming navigation',
          icons: 'Hypothesis creativity brainstorming icons',
          buttons: 'Hypothesis brainstorming creativity style'
        }
      },
      {
        id: 'rp-45-3',
        slideNumber: 3,
        name: 'Template 45 — Slide 3',
        layout: 'Lab experiment adventures with fun discovery and exciting breakthrough moments',
        content: 'Lab experiment adventures featuring fun discovery and absolutely exciting breakthrough moments',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Lab Purple to Experiment Purple)',
        buttonStyle: 'Lab experiment buttons with adventure themes',
        iconStyle: 'Lab experiment icons with adventure symbols',
        tabStyle: 'Lab experiment tabs with adventure categories',
        imageUsage: 'Lab experiment audios with fun adventure overlays',
        placement: {
          images: 'Lab experiment adventure displays',
          tabs: 'Lab experiment navigation',
          icons: 'Lab adventure experiment icons',
          buttons: 'Lab experiment adventure style'
        }
      },
      {
        id: 'rp-45-4',
        slideNumber: 4,
        name: 'Template 45 — Slide 4',
        layout: 'Data analysis parties with fun interpretation and exciting pattern recognition',
        content: 'Data analysis parties featuring fun interpretation and thrilling exciting pattern recognition',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Data Green to Analysis Mint)',
        buttonStyle: 'Data analysis buttons with party themes',
        iconStyle: 'Data analysis icons with party symbols',
        tabStyle: 'Data analysis tabs with party categories',
        imageUsage: 'Data analysis audios with fun party overlays',
        placement: {
          images: 'Data analysis party displays',
          tabs: 'Data analysis navigation',
          icons: 'Data party analysis icons',
          buttons: 'Data analysis party style'
        }
      },
      {
        id: 'rp-45-5',
        slideNumber: 5,
        name: 'Template 45 — Slide 5',
        layout: 'Literature review marathons with fun knowledge compilation and insight gathering',
        content: 'Literature review marathons featuring fun knowledge compilation and amazing insight gathering',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Literature Blue to Review Blue)',
        buttonStyle: 'Literature review buttons with marathon themes',
        iconStyle: 'Literature review icons with marathon symbols',
        tabStyle: 'Literature review tabs with marathon categories',
        imageUsage: 'Literature review audios with fun marathon overlays',
        placement: {
          images: 'Literature review marathon displays',
          tabs: 'Literature review navigation',
          icons: 'Literature marathon review icons',
          buttons: 'Literature review marathon style'
        }
      },
      {
        id: 'rp-45-6',
        slideNumber: 6,
        name: 'Template 45 — Slide 6',
        layout: 'Conference presentation prep with fun performance and engaging delivery',
        content: 'Conference presentation prep featuring fun performance and incredibly engaging delivery',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Conference Magenta to Presentation Pink)',
        buttonStyle: 'Conference presentation buttons with performance themes',
        iconStyle: 'Conference presentation icons with performance symbols',
        tabStyle: 'Conference presentation tabs with performance categories',
        imageUsage: 'Conference presentation audios with fun performance overlays',
        placement: {
          images: 'Conference presentation performance displays',
          tabs: 'Conference presentation navigation',
          icons: 'Conference performance presentation icons',
          buttons: 'Conference presentation performance style'
        }
      },
      {
        id: 'rp-45-7',
        slideNumber: 7,
        name: 'Template 45 — Slide 7',
        layout: 'Peer review celebrations with fun feedback and constructive collaboration',
        content: 'Peer review celebrations featuring fun feedback and wonderfully constructive collaboration',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Peer Red to Review Orange)',
        buttonStyle: 'Peer review buttons with celebration themes',
        iconStyle: 'Peer review icons with celebration symbols',
        tabStyle: 'Peer review tabs with celebration categories',
        imageUsage: 'Peer review audios with fun celebration overlays',
        placement: {
          images: 'Peer review celebration displays',
          tabs: 'Peer review navigation',
          icons: 'Peer celebration review icons',
          buttons: 'Peer review celebration style'
        }
      },
      {
        id: 'rp-45-8',
        slideNumber: 8,
        name: 'Template 45 — Slide 8',
        layout: 'Research methodology games with fun approach design and experimental creativity',
        content: 'Research methodology games featuring fun approach design and brilliant experimental creativity',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Methodology Cyan to Games Mint)',
        buttonStyle: 'Research methodology buttons with games themes',
        iconStyle: 'Research methodology icons with games symbols',
        tabStyle: 'Research methodology tabs with games categories',
        imageUsage: 'Research methodology audios with fun games overlays',
        placement: {
          images: 'Research methodology games displays',
          tabs: 'Research methodology navigation',
          icons: 'Research games methodology icons',
          buttons: 'Research methodology games style'
        }
      },
      {
        id: 'rp-45-9',
        slideNumber: 9,
        name: 'Template 45 — Slide 9',
        layout: 'Grant application adventures with fun proposal writing and funding excitement',
        content: 'Grant application adventures featuring fun proposal writing and incredible funding excitement',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Grant Yellow to Funding Orange)',
        buttonStyle: 'Grant application buttons with adventure themes',
        iconStyle: 'Grant application icons with adventure symbols',
        tabStyle: 'Grant application tabs with adventure categories',
        imageUsage: 'Grant application audios with fun adventure overlays',
        placement: {
          images: 'Grant application adventure displays',
          tabs: 'Grant application navigation',
          icons: 'Grant adventure application icons',
          buttons: 'Grant application adventure style'
        }
      },
      {
        id: 'rp-45-10',
        slideNumber: 10,
        name: 'Template 45 — Slide 10',
        layout: 'Publication milestone parties with fun achievement and success celebration',
        content: 'Publication milestone parties featuring fun achievement and amazing success celebration',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Publication Red to Milestone Red)',
        buttonStyle: 'Publication milestone buttons with party themes',
        iconStyle: 'Publication milestone icons with party symbols',
        tabStyle: 'Publication milestone tabs with party categories',
        imageUsage: 'Publication milestone audios with fun party overlays',
        placement: {
          images: 'Publication milestone party displays',
          tabs: 'Publication milestone navigation',
          icons: 'Publication party milestone icons',
          buttons: 'Publication milestone party style'
        }
      },
      {
        id: 'rp-45-11',
        slideNumber: 11,
        name: 'Template 45 — Slide 11',
        layout: 'Equipment troubleshooting fun with playful problem solving and creative fixes',
        content: 'Equipment troubleshooting fun featuring playful problem solving and ingenious creative fixes',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Equipment Purple to Troubleshooting Purple)',
        buttonStyle: 'Equipment troubleshooting buttons with fun themes',
        iconStyle: 'Equipment troubleshooting icons with fun symbols',
        tabStyle: 'Equipment troubleshooting tabs with fun categories',
        imageUsage: 'Equipment troubleshooting audios with fun overlays',
        placement: {
          images: 'Equipment troubleshooting fun displays',
          tabs: 'Equipment troubleshooting navigation',
          icons: 'Equipment fun troubleshooting icons',
          buttons: 'Equipment troubleshooting fun style'
        }
      },
      {
        id: 'rp-45-12',
        slideNumber: 12,
        name: 'Template 45 — Slide 12',
        layout: 'Research ethics discussions with fun moral exploration and value alignment',
        content: 'Research ethics discussions featuring fun moral exploration and meaningful value alignment',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Ethics Green to Discussion Mint)',
        buttonStyle: 'Research ethics buttons with exploration themes',
        iconStyle: 'Research ethics icons with exploration symbols',
        tabStyle: 'Research ethics tabs with exploration categories',
        imageUsage: 'Research ethics audios with fun exploration overlays',
        placement: {
          images: 'Research ethics exploration displays',
          tabs: 'Research ethics navigation',
          icons: 'Research exploration ethics icons',
          buttons: 'Research ethics exploration style'
        }
      },
      {
        id: 'rp-45-13',
        slideNumber: 13,
        name: 'Template 45 — Slide 13',
        layout: 'Collaboration network building with fun relationship development and academic bonding',
        content: 'Collaboration network building featuring fun relationship development and wonderful academic bonding',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Collaboration Magenta to Network Pink)',
        buttonStyle: 'Collaboration network buttons with bonding themes',
        iconStyle: 'Collaboration network icons with bonding symbols',
        tabStyle: 'Collaboration network tabs with bonding categories',
        imageUsage: 'Collaboration network audios with fun bonding overlays',
        placement: {
          images: 'Collaboration network bonding displays',
          tabs: 'Collaboration network navigation',
          icons: 'Collaboration bonding network icons',
          buttons: 'Collaboration network bonding style'
        }
      },
      {
        id: 'rp-45-14',
        slideNumber: 14,
        name: 'Template 45 — Slide 14',
        layout: 'Future research planning with fun vision casting and dream project design',
        content: 'Future research planning featuring fun vision casting and incredible dream project design',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Future Blue to Research Blue)',
        buttonStyle: 'Future research buttons with vision themes',
        iconStyle: 'Future research icons with vision symbols',
        tabStyle: 'Future research tabs with vision categories',
        imageUsage: 'Future research audios with fun vision overlays',
        placement: {
          images: 'Future research vision displays',
          tabs: 'Future research navigation',
          icons: 'Future vision research icons',
          buttons: 'Future research vision style'
        }
      },
      {
        id: 'rp-45-15',
        slideNumber: 15,
        name: 'Template 45 — Slide 15',
        layout: 'Research partner audio sharing with fun codes and scientific discovery',
        content: 'Final research partner audio sharing with fun codes and exciting scientific discovery',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Research Red to Partner Red)',
        buttonStyle: 'Fun gradient buttons with research sparkle, 16px radius',
        iconStyle: 'Contextual research fun partner icons',
        tabStyle: 'Scientific navigation with fun partnership',
        imageUsage: 'Circular research partner avatars with fun discovery frames',
        placement: {
          images: 'Circular research partner photos with fun frames',
          tabs: 'Scientific research partner fun navigation',
          icons: 'Contextual research fun partner icons',
          buttons: 'Fun gradient with research partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 46: Travel Companion - Song + Nostalgic tone (15 slides)
  {
    id: 'travel-companion-46',
    name: 'Travel Companion Nostalgic Collection',
    description: 'Nostalgic song-based messages for travel companions',
    preview: '/assets/templates/travel-companion.jpg',
    suitableFor: ['travel companion', 'adventure partner', 'journey friend'],
    style: 'nostalgic',
    appTheme: 'Journey Memories & Travel Adventures',
    screenCount: 15,
    slides: [
      {
        id: 'tc-46-1',
        slideNumber: 1,
        name: 'Template 46 — Slide 1',
        layout: 'Nostalgic travel song interface with journey themes and adventure focus',
        content: 'Nostalgic travel song interface with journey themes and heartfelt adventure focus',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Travel Pink to Journey Yellow)',
        buttonStyle: 'Nostalgic travel buttons with journey themes, 14px radius',
        iconStyle: 'Nostalgic travel icons with journey symbols',
        tabStyle: 'Adventure navigation with nostalgic journey categories',
        imageUsage: 'Travel songs with nostalgic journey adventure overlays',
        placement: {
          images: 'Travel songs with nostalgic journey adventure overlays',
          tabs: 'Adventure navigation with nostalgic journey themes',
          icons: 'Nostalgic travel journey adventure icons',
          buttons: 'Nostalgic travel journey adventure button styling'
        }
      },
      {
        id: 'tc-46-2',
        slideNumber: 2,
        name: 'Template 46 — Slide 2',
        layout: 'Road trip memories with nostalgic soundtrack and scenic journey moments',
        content: 'Road trip memories featuring nostalgic soundtrack and beautiful scenic journey moments',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Road Blue to Trip Blue)',
        buttonStyle: 'Road trip buttons with memory themes',
        iconStyle: 'Road trip icons with memory symbols',
        tabStyle: 'Road trip tabs with memory categories',
        imageUsage: 'Road trip songs with nostalgic memory overlays',
        placement: {
          images: 'Road trip memory displays',
          tabs: 'Road trip navigation',
          icons: 'Road memory trip icons',
          buttons: 'Road trip memory style'
        }
      },
      {
        id: 'tc-46-3',
        slideNumber: 3,
        name: 'Template 46 — Slide 3',
        layout: 'Cultural exploration discoveries with nostalgic wonder and meaningful connections',
        content: 'Cultural exploration discoveries featuring nostalgic wonder and deeply meaningful connections',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Culture Green to Exploration Mint)',
        buttonStyle: 'Cultural exploration buttons with wonder themes',
        iconStyle: 'Cultural exploration icons with wonder symbols',
        tabStyle: 'Cultural exploration tabs with wonder categories',
        imageUsage: 'Cultural exploration songs with nostalgic wonder overlays',
        placement: {
          images: 'Cultural exploration wonder displays',
          tabs: 'Cultural exploration navigation',
          icons: 'Cultural wonder exploration icons',
          buttons: 'Cultural exploration wonder style'
        }
      },
      {
        id: 'tc-46-4',
        slideNumber: 4,
        name: 'Template 46 — Slide 4',
        layout: 'Accommodation adventures with nostalgic comfort and shared space bonding',
        content: 'Accommodation adventures featuring nostalgic comfort and heartwarming shared space bonding',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Accommodation Magenta to Adventure Pink)',
        buttonStyle: 'Accommodation adventure buttons with comfort themes',
        iconStyle: 'Accommodation adventure icons with comfort symbols',
        tabStyle: 'Accommodation adventure tabs with comfort categories',
        imageUsage: 'Accommodation adventure songs with nostalgic comfort overlays',
        placement: {
          images: 'Accommodation adventure comfort displays',
          tabs: 'Accommodation adventure navigation',
          icons: 'Accommodation comfort adventure icons',
          buttons: 'Accommodation adventure comfort style'
        }
      },
      {
        id: 'tc-46-5',
        slideNumber: 5,
        name: 'Template 46 — Slide 5',
        layout: 'Local cuisine experiences with nostalgic flavors and culinary discovery',
        content: 'Local cuisine experiences featuring nostalgic flavors and delightful culinary discovery',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Cuisine Red to Flavor Orange)',
        buttonStyle: 'Local cuisine buttons with flavor themes',
        iconStyle: 'Local cuisine icons with flavor symbols',
        tabStyle: 'Local cuisine tabs with flavor categories',
        imageUsage: 'Local cuisine songs with nostalgic flavor overlays',
        placement: {
          images: 'Local cuisine flavor displays',
          tabs: 'Local cuisine navigation',
          icons: 'Local flavor cuisine icons',
          buttons: 'Local cuisine flavor style'
        }
      },
      {
        id: 'tc-46-6',
        slideNumber: 6,
        name: 'Template 46 — Slide 6',
        layout: 'Transportation tales with nostalgic journey stories and travel camaraderie',
        content: 'Transportation tales featuring nostalgic journey stories and wonderful travel camaraderie',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Transportation Purple to Journey Purple)',
        buttonStyle: 'Transportation tale buttons with story themes',
        iconStyle: 'Transportation tale icons with story symbols',
        tabStyle: 'Transportation tale tabs with story categories',
        imageUsage: 'Transportation tale songs with nostalgic story overlays',
        placement: {
          images: 'Transportation tale story displays',
          tabs: 'Transportation tale navigation',
          icons: 'Transportation story tale icons',
          buttons: 'Transportation tale story style'
        }
      },
      {
        id: 'tc-46-7',
        slideNumber: 7,
        name: 'Template 46 — Slide 7',
        layout: 'Weather adventure stories with nostalgic elements and natural beauty',
        content: 'Weather adventure stories featuring nostalgic elements and breathtaking natural beauty',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Weather Cyan to Adventure Mint)',
        buttonStyle: 'Weather adventure buttons with nature themes',
        iconStyle: 'Weather adventure icons with nature symbols',
        tabStyle: 'Weather adventure tabs with nature categories',
        imageUsage: 'Weather adventure songs with nostalgic nature overlays',
        placement: {
          images: 'Weather adventure nature displays',
          tabs: 'Weather adventure navigation',
          icons: 'Weather nature adventure icons',
          buttons: 'Weather adventure nature style'
        }
      },
      {
        id: 'tc-46-8',
        slideNumber: 8,
        name: 'Template 46 — Slide 8',
        layout: 'Photography session memories with nostalgic capture and moment preservation',
        content: 'Photography session memories featuring nostalgic capture and precious moment preservation',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Photography Yellow to Memory Orange)',
        buttonStyle: 'Photography session buttons with capture themes',
        iconStyle: 'Photography session icons with capture symbols',
        tabStyle: 'Photography session tabs with capture categories',
        imageUsage: 'Photography session songs with nostalgic capture overlays',
        placement: {
          images: 'Photography session capture displays',
          tabs: 'Photography session navigation',
          icons: 'Photography capture session icons',
          buttons: 'Photography session capture style'
        }
      },
      {
        id: 'tc-46-9',
        slideNumber: 9,
        name: 'Template 46 — Slide 9',
        layout: 'Souvenir collection adventures with nostalgic treasure hunting and memory keeping',
        content: 'Souvenir collection adventures featuring nostalgic treasure hunting and cherished memory keeping',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Souvenir Red to Collection Red)',
        buttonStyle: 'Souvenir collection buttons with treasure themes',
        iconStyle: 'Souvenir collection icons with treasure symbols',
        tabStyle: 'Souvenir collection tabs with treasure categories',
        imageUsage: 'Souvenir collection songs with nostalgic treasure overlays',
        placement: {
          images: 'Souvenir collection treasure displays',
          tabs: 'Souvenir collection navigation',
          icons: 'Souvenir treasure collection icons',
          buttons: 'Souvenir collection treasure style'
        }
      },
      {
        id: 'tc-46-10',
        slideNumber: 10,
        name: 'Template 46 — Slide 10',
        layout: 'Language learning moments with nostalgic communication and cultural exchange',
        content: 'Language learning moments featuring nostalgic communication and beautiful cultural exchange',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Language Blue to Learning Blue)',
        buttonStyle: 'Language learning buttons with communication themes',
        iconStyle: 'Language learning icons with communication symbols',
        tabStyle: 'Language learning tabs with communication categories',
        imageUsage: 'Language learning songs with nostalgic communication overlays',
        placement: {
          images: 'Language learning communication displays',
          tabs: 'Language learning navigation',
          icons: 'Language communication learning icons',
          buttons: 'Language learning communication style'
        }
      },
      {
        id: 'tc-46-11',
        slideNumber: 11,
        name: 'Template 46 — Slide 11',
        layout: 'Navigation challenges with nostalgic problem solving and teamwork triumph',
        content: 'Navigation challenges featuring nostalgic problem solving and inspiring teamwork triumph',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Navigation Green to Challenge Mint)',
        buttonStyle: 'Navigation challenge buttons with triumph themes',
        iconStyle: 'Navigation challenge icons with triumph symbols',
        tabStyle: 'Navigation challenge tabs with triumph categories',
        imageUsage: 'Navigation challenge songs with nostalgic triumph overlays',
        placement: {
          images: 'Navigation challenge triumph displays',
          tabs: 'Navigation challenge navigation',
          icons: 'Navigation triumph challenge icons',
          buttons: 'Navigation challenge triumph style'
        }
      },
      {
        id: 'tc-46-12',
        slideNumber: 12,
        name: 'Template 46 — Slide 12',
        layout: 'Budget adventure creativity with nostalgic resourcefulness and shared economy',
        content: 'Budget adventure creativity featuring nostalgic resourcefulness and clever shared economy',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Budget Magenta to Adventure Pink)',
        buttonStyle: 'Budget adventure buttons with creativity themes',
        iconStyle: 'Budget adventure icons with creativity symbols',
        tabStyle: 'Budget adventure tabs with creativity categories',
        imageUsage: 'Budget adventure songs with nostalgic creativity overlays',
        placement: {
          images: 'Budget adventure creativity displays',
          tabs: 'Budget adventure navigation',
          icons: 'Budget creativity adventure icons',
          buttons: 'Budget adventure creativity style'
        }
      },
      {
        id: 'tc-46-13',
        slideNumber: 13,
        name: 'Template 46 — Slide 13',
        layout: 'Unexpected discoveries with nostalgic serendipity and magical moments',
        content: 'Unexpected discoveries featuring nostalgic serendipity and absolutely magical moments',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Discovery Purple to Serendipity Purple)',
        buttonStyle: 'Unexpected discovery buttons with magic themes',
        iconStyle: 'Unexpected discovery icons with magic symbols',
        tabStyle: 'Unexpected discovery tabs with magic categories',
        imageUsage: 'Unexpected discovery songs with nostalgic magic overlays',
        placement: {
          images: 'Unexpected discovery magic displays',
          tabs: 'Unexpected discovery navigation',
          icons: 'Unexpected magic discovery icons',
          buttons: 'Unexpected discovery magic style'
        }
      },
      {
        id: 'tc-46-14',
        slideNumber: 14,
        name: 'Template 46 — Slide 14',
        layout: 'Homecoming reflections with nostalgic gratitude and journey appreciation',
        content: 'Homecoming reflections featuring nostalgic gratitude and profound journey appreciation',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Homecoming Red to Reflection Orange)',
        buttonStyle: 'Homecoming reflection buttons with gratitude themes',
        iconStyle: 'Homecoming reflection icons with gratitude symbols',
        tabStyle: 'Homecoming reflection tabs with gratitude categories',
        imageUsage: 'Homecoming reflection songs with nostalgic gratitude overlays',
        placement: {
          images: 'Homecoming reflection gratitude displays',
          tabs: 'Homecoming reflection navigation',
          icons: 'Homecoming gratitude reflection icons',
          buttons: 'Homecoming reflection gratitude style'
        }
      },
      {
        id: 'tc-46-15',
        slideNumber: 15,
        name: 'Template 46 — Slide 15',
        layout: 'Travel companion song sharing with nostalgic codes and journey memories',
        content: 'Final travel companion song sharing with nostalgic codes and treasured journey memories',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Travel Pink to Companion Yellow)',
        buttonStyle: 'Nostalgic gradient buttons with travel sparkle, 14px radius',
        iconStyle: 'Contextual travel nostalgic companion icons',
        tabStyle: 'Adventure navigation with nostalgic companionship',
        imageUsage: 'Circular travel companion avatars with nostalgic journey frames',
        placement: {
          images: 'Circular travel companion photos with nostalgic frames',
          tabs: 'Adventure travel companion nostalgic navigation',
          icons: 'Contextual travel nostalgic companion icons',
          buttons: 'Nostalgic gradient with travel companion sparkle'
        }
      }
    ]
  },

  // TEMPLATE 47: Hobby Group Member - Memory + Motivational tone (15 slides) 
  {
    id: 'hobby-group-47',
    name: 'Hobby Group Member Motivational Collection',
    description: 'Motivational memory-based messages for hobby group members',
    preview: '/assets/templates/hobby-group.jpg',
    suitableFor: ['hobby group member', 'interest partner', 'activity companion'],
    style: 'motivational',
    appTheme: 'Shared Passions & Hobby Excellence',
    screenCount: 15,
    slides: [
      {
        id: 'hg-47-1',
        slideNumber: 1,
        name: 'Template 47 — Slide 1',
        layout: 'Motivational hobby memory interface with passion themes and excellence focus',
        content: 'Motivational hobby memory interface with passion themes and inspiring excellence focus',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Hobby Yellow to Passion Orange)',
        buttonStyle: 'Motivational hobby buttons with passion themes, 12px radius',
        iconStyle: 'Motivational hobby icons with passion symbols',
        tabStyle: 'Hobby navigation with motivational passion categories',
        imageUsage: 'Hobby memories with motivational passion excellence overlays',
        placement: {
          images: 'Hobby memories with motivational passion excellence overlays',
          tabs: 'Hobby navigation with motivational passion themes',
          icons: 'Motivational hobby passion excellence icons',
          buttons: 'Motivational hobby passion excellence button styling'
        }
      },
      {
        id: 'hg-47-2',
        slideNumber: 2,
        name: 'Template 47 — Slide 2',
        layout: 'Skill mastery journeys with motivational progress and achievement celebration',
        content: 'Skill mastery journeys featuring motivational progress and inspiring achievement celebration',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Skill Green to Mastery Mint)',
        buttonStyle: 'Skill mastery buttons with progress themes',
        iconStyle: 'Skill mastery icons with progress symbols',
        tabStyle: 'Skill mastery tabs with progress categories',
        imageUsage: 'Skill mastery memories with motivational progress overlays',
        placement: {
          images: 'Skill mastery progress displays',
          tabs: 'Skill mastery navigation',
          icons: 'Skill progress mastery icons',
          buttons: 'Skill mastery progress style'
        }
      },
      {
        id: 'hg-47-3',
        slideNumber: 3,
        name: 'Template 47 — Slide 3',
        layout: 'Creative project collaborations with motivational innovation and artistic breakthrough',
        content: 'Creative project collaborations featuring motivational innovation and spectacular artistic breakthrough',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Creative Purple to Innovation Purple)',
        buttonStyle: 'Creative project buttons with innovation themes',
        iconStyle: 'Creative project icons with innovation symbols',
        tabStyle: 'Creative project tabs with innovation categories',
        imageUsage: 'Creative project memories with motivational innovation overlays',
        placement: {
          images: 'Creative project innovation displays',
          tabs: 'Creative project navigation',
          icons: 'Creative innovation project icons',
          buttons: 'Creative project innovation style'
        }
      },
      {
        id: 'hg-47-4',
        slideNumber: 4,
        name: 'Template 47 — Slide 4',
        layout: 'Competition participation with motivational determination and victory pursuit',
        content: 'Competition participation featuring motivational determination and relentless victory pursuit',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Competition Red to Victory Red)',
        buttonStyle: 'Competition participation buttons with victory themes',
        iconStyle: 'Competition participation icons with victory symbols',
        tabStyle: 'Competition participation tabs with victory categories',
        imageUsage: 'Competition participation memories with motivational victory overlays',
        placement: {
          images: 'Competition participation victory displays',
          tabs: 'Competition participation navigation',
          icons: 'Competition victory participation icons',
          buttons: 'Competition participation victory style'
        }
      },
      {
        id: 'hg-47-5',
        slideNumber: 5,
        name: 'Template 47 — Slide 5',
        layout: 'Workshop attendance inspiration with motivational learning and knowledge expansion',
        content: 'Workshop attendance inspiration featuring motivational learning and exponential knowledge expansion',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Workshop Blue to Learning Blue)',
        buttonStyle: 'Workshop attendance buttons with learning themes',
        iconStyle: 'Workshop attendance icons with learning symbols',
        tabStyle: 'Workshop attendance tabs with learning categories',
        imageUsage: 'Workshop attendance memories with motivational learning overlays',
        placement: {
          images: 'Workshop attendance learning displays',
          tabs: 'Workshop attendance navigation',
          icons: 'Workshop learning attendance icons',
          buttons: 'Workshop attendance learning style'
        }
      },
      {
        id: 'hg-47-6',
        slideNumber: 6,
        name: 'Template 47 — Slide 6',
        layout: 'Equipment investment milestones with motivational upgrade and technology advancement',
        content: 'Equipment investment milestones featuring motivational upgrade and cutting-edge technology advancement',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Equipment Black to Technology Gray)',
        buttonStyle: 'Equipment investment buttons with upgrade themes',
        iconStyle: 'Equipment investment icons with upgrade symbols',
        tabStyle: 'Equipment investment tabs with upgrade categories',
        imageUsage: 'Equipment investment memories with motivational upgrade overlays',
        placement: {
          images: 'Equipment investment upgrade displays',
          tabs: 'Equipment investment navigation',
          icons: 'Equipment upgrade investment icons',
          buttons: 'Equipment investment upgrade style'
        }
      },
      {
        id: 'hg-47-7',
        slideNumber: 7,
        name: 'Template 47 — Slide 7',
        layout: 'Technique refinement sessions with motivational precision and mastery development',
        content: 'Technique refinement sessions featuring motivational precision and exceptional mastery development',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Technique Magenta to Refinement Pink)',
        buttonStyle: 'Technique refinement buttons with precision themes',
        iconStyle: 'Technique refinement icons with precision symbols',
        tabStyle: 'Technique refinement tabs with precision categories',
        imageUsage: 'Technique refinement memories with motivational precision overlays',
        placement: {
          images: 'Technique refinement precision displays',
          tabs: 'Technique refinement navigation',
          icons: 'Technique precision refinement icons',
          buttons: 'Technique refinement precision style'
        }
      },
      {
        id: 'hg-47-8',
        slideNumber: 8,
        name: 'Template 47 — Slide 8',
        layout: 'Community showcase events with motivational recognition and talent celebration',
        content: 'Community showcase events featuring motivational recognition and extraordinary talent celebration',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Showcase Red to Recognition Orange)',
        buttonStyle: 'Community showcase buttons with recognition themes',
        iconStyle: 'Community showcase icons with recognition symbols',
        tabStyle: 'Community showcase tabs with recognition categories',
        imageUsage: 'Community showcase memories with motivational recognition overlays',
        placement: {
          images: 'Community showcase recognition displays',
          tabs: 'Community showcase navigation',
          icons: 'Community recognition showcase icons',
          buttons: 'Community showcase recognition style'
        }
      },
      {
        id: 'hg-47-9',
        slideNumber: 9,
        name: 'Template 47 — Slide 9',
        layout: 'Mentorship exchange programs with motivational guidance and wisdom sharing',
        content: 'Mentorship exchange programs featuring motivational guidance and invaluable wisdom sharing',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Mentorship Cyan to Wisdom Mint)',
        buttonStyle: 'Mentorship exchange buttons with wisdom themes',
        iconStyle: 'Mentorship exchange icons with wisdom symbols',
        tabStyle: 'Mentorship exchange tabs with wisdom categories',
        imageUsage: 'Mentorship exchange memories with motivational wisdom overlays',
        placement: {
          images: 'Mentorship exchange wisdom displays',
          tabs: 'Mentorship exchange navigation',
          icons: 'Mentorship wisdom exchange icons',
          buttons: 'Mentorship exchange wisdom style'
        }
      },
      {
        id: 'hg-47-10',
        slideNumber: 10,
        name: 'Template 47 — Slide 10',
        layout: 'Goal achievement celebrations with motivational triumph and success documentation',
        content: 'Goal achievement celebrations featuring motivational triumph and comprehensive success documentation',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Goal Yellow to Achievement Orange)',
        buttonStyle: 'Goal achievement buttons with triumph themes',
        iconStyle: 'Goal achievement icons with triumph symbols',
        tabStyle: 'Goal achievement tabs with triumph categories',
        imageUsage: 'Goal achievement memories with motivational triumph overlays',
        placement: {
          images: 'Goal achievement triumph displays',
          tabs: 'Goal achievement navigation',
          icons: 'Goal triumph achievement icons',
          buttons: 'Goal achievement triumph style'
        }
      },
      {
        id: 'hg-47-11',
        slideNumber: 11,
        name: 'Template 47 — Slide 11',
        layout: 'Challenge overcome stories with motivational resilience and personal growth',
        content: 'Challenge overcome stories featuring motivational resilience and transformative personal growth',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Challenge Purple to Resilience Purple)',
        buttonStyle: 'Challenge overcome buttons with resilience themes',
        iconStyle: 'Challenge overcome icons with resilience symbols',
        tabStyle: 'Challenge overcome tabs with resilience categories',
        imageUsage: 'Challenge overcome memories with motivational resilience overlays',
        placement: {
          images: 'Challenge overcome resilience displays',
          tabs: 'Challenge overcome navigation',
          icons: 'Challenge resilience overcome icons',
          buttons: 'Challenge overcome resilience style'
        }
      },
      {
        id: 'hg-47-12',
        slideNumber: 12,
        name: 'Template 47 — Slide 12',
        layout: 'Innovation breakthrough moments with motivational creativity and revolutionary thinking',
        content: 'Innovation breakthrough moments featuring motivational creativity and groundbreaking revolutionary thinking',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Innovation Green to Breakthrough Mint)',
        buttonStyle: 'Innovation breakthrough buttons with creativity themes',
        iconStyle: 'Innovation breakthrough icons with creativity symbols',
        tabStyle: 'Innovation breakthrough tabs with creativity categories',
        imageUsage: 'Innovation breakthrough memories with motivational creativity overlays',
        placement: {
          images: 'Innovation breakthrough creativity displays',
          tabs: 'Innovation breakthrough navigation',
          icons: 'Innovation creativity breakthrough icons',
          buttons: 'Innovation breakthrough creativity style'
        }
      },
      {
        id: 'hg-47-13',
        slideNumber: 13,
        name: 'Template 47 — Slide 13',
        layout: 'Legacy project foundations with motivational vision and future impact',
        content: 'Legacy project foundations featuring motivational vision and powerful future impact creation',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Legacy Blue to Vision Blue)',
        buttonStyle: 'Legacy project buttons with vision themes',
        iconStyle: 'Legacy project icons with vision symbols',
        tabStyle: 'Legacy project tabs with vision categories',
        imageUsage: 'Legacy project memories with motivational vision overlays',
        placement: {
          images: 'Legacy project vision displays',
          tabs: 'Legacy project navigation',
          icons: 'Legacy vision project icons',
          buttons: 'Legacy project vision style'
        }
      },
      {
        id: 'hg-47-14',
        slideNumber: 14,
        name: 'Template 47 — Slide 14',
        layout: 'Passion evolution tracking with motivational growth and interest expansion',
        content: 'Passion evolution tracking featuring motivational growth and exponential interest expansion',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Passion Magenta to Evolution Pink)',
        buttonStyle: 'Passion evolution buttons with growth themes',
        iconStyle: 'Passion evolution icons with growth symbols',
        tabStyle: 'Passion evolution tabs with growth categories',
        imageUsage: 'Passion evolution memories with motivational growth overlays',
        placement: {
          images: 'Passion evolution growth displays',
          tabs: 'Passion evolution navigation',
          icons: 'Passion growth evolution icons',
          buttons: 'Passion evolution growth style'
        }
      },
      {
        id: 'hg-47-15',
        slideNumber: 15,
        name: 'Template 47 — Slide 15',
        layout: 'Hobby group member memory sharing with motivational codes and passion excellence',
        content: 'Final hobby group member memory sharing with motivational codes and inspiring passion excellence',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Hobby Yellow to Member Orange)',
        buttonStyle: 'Motivational gradient buttons with hobby sparkle, 12px radius',
        iconStyle: 'Contextual hobby motivational member icons',
        tabStyle: 'Hobby navigation with motivational excellence',
        imageUsage: 'Circular hobby member avatars with motivational passion frames',
        placement: {
          images: 'Circular hobby member photos with motivational frames',
          tabs: 'Hobby group member motivational navigation',
          icons: 'Contextual hobby motivational member icons',
          buttons: 'Motivational gradient with hobby member sparkle'
        }
      }
    ]
  },

  // TEMPLATE 48: Language Exchange Partner - Text + Romantic tone (15 slides)
  {
    id: 'language-exchange-48',
    name: 'Language Exchange Partner Romantic Collection',
    description: 'Romantic text-based messages for language exchange partners',
    preview: '/assets/templates/language-exchange.jpg',
    suitableFor: ['language exchange partner', 'linguistic companion', 'cultural bridge'],
    style: 'romantic',
    appTheme: 'Linguistic Romance & Cultural Connection',
    screenCount: 15,
    slides: [
      {
        id: 'le-48-1',
        slideNumber: 1,
        name: 'Template 48 — Slide 1',
        layout: 'Romantic language text interface with linguistic themes and connection focus',
        content: 'Romantic language text interface with linguistic themes and heartfelt connection focus',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Language Pink to Exchange Yellow)',
        buttonStyle: 'Romantic language buttons with connection themes, 16px radius',
        iconStyle: 'Romantic language icons with connection symbols',
        tabStyle: 'Linguistic navigation with romantic connection categories',
        imageUsage: 'Language texts with romantic linguistic connection overlays',
        placement: {
          images: 'Language texts with romantic linguistic connection overlays',
          tabs: 'Linguistic navigation with romantic connection themes',
          icons: 'Romantic language linguistic connection icons',
          buttons: 'Romantic language linguistic connection button styling'
        }
      },
      {
        id: 'le-48-2',
        slideNumber: 2,
        name: 'Template 48 — Slide 2',
        layout: 'Vocabulary learning adventures with romantic discovery and word enchantment',
        content: 'Vocabulary learning adventures featuring romantic discovery and magical word enchantment',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Vocabulary Magenta to Learning Pink)',
        buttonStyle: 'Vocabulary learning buttons with enchantment themes',
        iconStyle: 'Vocabulary learning icons with enchantment symbols',
        tabStyle: 'Vocabulary learning tabs with enchantment categories',
        imageUsage: 'Vocabulary learning texts with romantic enchantment overlays',
        placement: {
          images: 'Vocabulary learning enchantment displays',
          tabs: 'Vocabulary learning navigation',
          icons: 'Vocabulary enchantment learning icons',
          buttons: 'Vocabulary learning enchantment style'
        }
      },
      {
        id: 'le-48-3',
        slideNumber: 3,
        name: 'Template 48 — Slide 3',
        layout: 'Grammar correction moments with romantic patience and gentle guidance',
        content: 'Grammar correction moments featuring romantic patience and tenderly gentle guidance',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Grammar Blue to Correction Blue)',
        buttonStyle: 'Grammar correction buttons with patience themes',
        iconStyle: 'Grammar correction icons with patience symbols',
        tabStyle: 'Grammar correction tabs with patience categories',
        imageUsage: 'Grammar correction texts with romantic patience overlays',
        placement: {
          images: 'Grammar correction patience displays',
          tabs: 'Grammar correction navigation',
          icons: 'Grammar patience correction icons',
          buttons: 'Grammar correction patience style'
        }
      },
      {
        id: 'le-48-4',
        slideNumber: 4,
        name: 'Template 48 — Slide 4',
        layout: 'Cultural idiom explorations with romantic fascination and meaning discovery',
        content: 'Cultural idiom explorations featuring romantic fascination and beautiful meaning discovery',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Cultural Green to Idiom Mint)',
        buttonStyle: 'Cultural idiom buttons with fascination themes',
        iconStyle: 'Cultural idiom icons with fascination symbols',
        tabStyle: 'Cultural idiom tabs with fascination categories',
        imageUsage: 'Cultural idiom texts with romantic fascination overlays',
        placement: {
          images: 'Cultural idiom fascination displays',
          tabs: 'Cultural idiom navigation',
          icons: 'Cultural fascination idiom icons',
          buttons: 'Cultural idiom fascination style'
        }
      },
      {
        id: 'le-48-5',
        slideNumber: 5,
        name: 'Template 48 — Slide 5',
        layout: 'Pronunciation practice sessions with romantic dedication and melodic improvement',
        content: 'Pronunciation practice sessions featuring romantic dedication and beautifully melodic improvement',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Pronunciation Purple to Practice Purple)',
        buttonStyle: 'Pronunciation practice buttons with dedication themes',
        iconStyle: 'Pronunciation practice icons with dedication symbols',
        tabStyle: 'Pronunciation practice tabs with dedication categories',
        imageUsage: 'Pronunciation practice texts with romantic dedication overlays',
        placement: {
          images: 'Pronunciation practice dedication displays',
          tabs: 'Pronunciation practice navigation',
          icons: 'Pronunciation dedication practice icons',
          buttons: 'Pronunciation practice dedication style'
        }
      },
      {
        id: 'le-48-6',
        slideNumber: 6,
        name: 'Template 48 — Slide 6',
        layout: 'Translation challenges with romantic collaboration and linguistic harmony',
        content: 'Translation challenges featuring romantic collaboration and perfect linguistic harmony',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Translation Red to Challenge Orange)',
        buttonStyle: 'Translation challenge buttons with harmony themes',
        iconStyle: 'Translation challenge icons with harmony symbols',
        tabStyle: 'Translation challenge tabs with harmony categories',
        imageUsage: 'Translation challenge texts with romantic harmony overlays',
        placement: {
          images: 'Translation challenge harmony displays',
          tabs: 'Translation challenge navigation',
          icons: 'Translation harmony challenge icons',
          buttons: 'Translation challenge harmony style'
        }
      },
      {
        id: 'le-48-7',
        slideNumber: 7,
        name: 'Template 48 — Slide 7',
        layout: 'Literature sharing experiences with romantic storytelling and narrative passion',
        content: 'Literature sharing experiences featuring romantic storytelling and captivating narrative passion',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Literature Cyan to Sharing Mint)',
        buttonStyle: 'Literature sharing buttons with storytelling themes',
        iconStyle: 'Literature sharing icons with storytelling symbols',
        tabStyle: 'Literature sharing tabs with storytelling categories',
        imageUsage: 'Literature sharing texts with romantic storytelling overlays',
        placement: {
          images: 'Literature sharing storytelling displays',
          tabs: 'Literature sharing navigation',
          icons: 'Literature storytelling sharing icons',
          buttons: 'Literature sharing storytelling style'
        }
      },
      {
        id: 'le-48-8',
        slideNumber: 8,
        name: 'Template 48 — Slide 8',
        layout: 'Poetry translation projects with romantic verse and emotional interpretation',
        content: 'Poetry translation projects featuring romantic verse and deeply emotional interpretation',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Poetry Yellow to Translation Orange)',
        buttonStyle: 'Poetry translation buttons with verse themes',
        iconStyle: 'Poetry translation icons with verse symbols',
        tabStyle: 'Poetry translation tabs with verse categories',
        imageUsage: 'Poetry translation texts with romantic verse overlays',
        placement: {
          images: 'Poetry translation verse displays',
          tabs: 'Poetry translation navigation',
          icons: 'Poetry verse translation icons',
          buttons: 'Poetry translation verse style'
        }
      },
      {
        id: 'le-48-9',
        slideNumber: 9,
        name: 'Template 48 — Slide 9',
        layout: 'Language milestone celebrations with romantic achievement and progress appreciation',
        content: 'Language milestone celebrations featuring romantic achievement and heartfelt progress appreciation',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Milestone Red to Language Red)',
        buttonStyle: 'Language milestone buttons with achievement themes',
        iconStyle: 'Language milestone icons with achievement symbols',
        tabStyle: 'Language milestone tabs with achievement categories',
        imageUsage: 'Language milestone texts with romantic achievement overlays',
        placement: {
          images: 'Language milestone achievement displays',
          tabs: 'Language milestone navigation',
          icons: 'Language achievement milestone icons',
          buttons: 'Language milestone achievement style'
        }
      },
      {
        id: 'le-48-10',
        slideNumber: 10,
        name: 'Template 48 — Slide 10',
        layout: 'Cultural festival discussions with romantic celebration and tradition sharing',
        content: 'Cultural festival discussions featuring romantic celebration and beautiful tradition sharing',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Cultural Magenta to Festival Pink)',
        buttonStyle: 'Cultural festival buttons with celebration themes',
        iconStyle: 'Cultural festival icons with celebration symbols',
        tabStyle: 'Cultural festival tabs with celebration categories',
        imageUsage: 'Cultural festival texts with romantic celebration overlays',
        placement: {
          images: 'Cultural festival celebration displays',
          tabs: 'Cultural festival navigation',
          icons: 'Cultural celebration festival icons',
          buttons: 'Cultural festival celebration style'
        }
      },
      {
        id: 'le-48-11',
        slideNumber: 11,
        name: 'Template 48 — Slide 11',
        layout: 'Conversation flow improvements with romantic fluency and natural expression',
        content: 'Conversation flow improvements featuring romantic fluency and gracefully natural expression',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Conversation Blue to Flow Blue)',
        buttonStyle: 'Conversation flow buttons with fluency themes',
        iconStyle: 'Conversation flow icons with fluency symbols',
        tabStyle: 'Conversation flow tabs with fluency categories',
        imageUsage: 'Conversation flow texts with romantic fluency overlays',
        placement: {
          images: 'Conversation flow fluency displays',
          tabs: 'Conversation flow navigation',
          icons: 'Conversation fluency flow icons',
          buttons: 'Conversation flow fluency style'
        }
      },
      {
        id: 'le-48-12',
        slideNumber: 12,
        name: 'Template 48 — Slide 12',
        layout: 'Accent appreciation moments with romantic uniqueness and vocal charm',
        content: 'Accent appreciation moments featuring romantic uniqueness and absolutely charming vocal charm',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Accent Green to Appreciation Mint)',
        buttonStyle: 'Accent appreciation buttons with charm themes',
        iconStyle: 'Accent appreciation icons with charm symbols',
        tabStyle: 'Accent appreciation tabs with charm categories',
        imageUsage: 'Accent appreciation texts with romantic charm overlays',
        placement: {
          images: 'Accent appreciation charm displays',
          tabs: 'Accent appreciation navigation',
          icons: 'Accent charm appreciation icons',
          buttons: 'Accent appreciation charm style'
        }
      },
      {
        id: 'le-48-13',
        slideNumber: 13,
        name: 'Template 48 — Slide 13',
        layout: 'Future language plans with romantic aspiration and learning journey vision',
        content: 'Future language plans featuring romantic aspiration and inspiring learning journey vision',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Future Purple to Language Purple)',
        buttonStyle: 'Future language buttons with aspiration themes',
        iconStyle: 'Future language icons with aspiration symbols',
        tabStyle: 'Future language tabs with aspiration categories',
        imageUsage: 'Future language texts with romantic aspiration overlays',
        placement: {
          images: 'Future language aspiration displays',
          tabs: 'Future language navigation',
          icons: 'Future aspiration language icons',
          buttons: 'Future language aspiration style'
        }
      },
      {
        id: 'le-48-14',
        slideNumber: 14,
        name: 'Template 48 — Slide 14',
        layout: 'Language barrier breakthroughs with romantic connection and communication triumph',
        content: 'Language barrier breakthroughs featuring romantic connection and beautiful communication triumph',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Barrier Red to Breakthrough Orange)',
        buttonStyle: 'Language barrier buttons with connection themes',
        iconStyle: 'Language barrier icons with connection symbols',
        tabStyle: 'Language barrier tabs with connection categories',
        imageUsage: 'Language barrier texts with romantic connection overlays',
        placement: {
          images: 'Language barrier connection displays',
          tabs: 'Language barrier navigation',
          icons: 'Language connection barrier icons',
          buttons: 'Language barrier connection style'
        }
      },
      {
        id: 'le-48-15',
        slideNumber: 15,
        name: 'Template 48 — Slide 15',
        layout: 'Language exchange partner text sharing with romantic codes and linguistic love',
        content: 'Final language exchange partner text sharing with romantic codes and beautiful linguistic love',
        colorPalette: 'Gradient from #fd79a8 to #fdcb6e (Language Pink to Exchange Yellow)',
        buttonStyle: 'Romantic gradient buttons with language sparkle, 16px radius',
        iconStyle: 'Contextual language romantic partner icons',
        tabStyle: 'Linguistic navigation with romantic partnership',
        imageUsage: 'Circular language partner avatars with romantic linguistic frames',
        placement: {
          images: 'Circular language partner photos with romantic frames',
          tabs: 'Linguistic language partner romantic navigation',
          icons: 'Contextual language romantic partner icons',
          buttons: 'Romantic gradient with language partner sparkle'
        }
      }
    ]
  },

  // TEMPLATE 49: Online Course Buddy - Photo + Caring tone (15 slides)
  {
    id: 'online-course-49',
    name: 'Online Course Buddy Caring Collection',
    description: 'Caring photo-based messages for online course buddies',
    preview: '/assets/templates/online-course.jpg',
    suitableFor: ['online course buddy', 'digital learning companion', 'study partner'],
    style: 'caring',
    appTheme: 'Digital Learning & Educational Support',
    screenCount: 15,
    slides: [
      {
        id: 'oc-49-1',
        slideNumber: 1,
        name: 'Template 49 — Slide 1',
        layout: 'Caring online course photo interface with learning themes and support focus',
        content: 'Caring online course photo interface with learning themes and nurturing educational support focus',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Course Blue to Learning Blue)',
        buttonStyle: 'Caring course buttons with support themes, 12px radius',
        iconStyle: 'Caring course icons with support symbols',
        tabStyle: 'Educational navigation with caring support categories',
        imageUsage: 'Course photos with caring educational support overlays',
        placement: {
          images: 'Course photos with caring educational support overlays',
          tabs: 'Educational navigation with caring support themes',
          icons: 'Caring course educational support icons',
          buttons: 'Caring course educational support button styling'
        }
      },
      {
        id: 'oc-49-2',
        slideNumber: 2,
        name: 'Template 49 — Slide 2',
        layout: 'Assignment collaboration support with caring encouragement and shared learning',
        content: 'Assignment collaboration support featuring caring encouragement and meaningful shared learning',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Assignment Green to Collaboration Mint)',
        buttonStyle: 'Assignment collaboration buttons with encouragement themes',
        iconStyle: 'Assignment collaboration icons with encouragement symbols',
        tabStyle: 'Assignment collaboration tabs with encouragement categories',
        imageUsage: 'Assignment collaboration photos with caring encouragement overlays',
        placement: {
          images: 'Assignment collaboration encouragement displays',
          tabs: 'Assignment collaboration navigation',
          icons: 'Assignment encouragement collaboration icons',
          buttons: 'Assignment collaboration encouragement style'
        }
      },
      {
        id: 'oc-49-3',
        slideNumber: 3,
        name: 'Template 49 — Slide 3',
        layout: 'Discussion forum participation with caring insight sharing and community building',
        content: 'Discussion forum participation featuring caring insight sharing and nurturing community building',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Discussion Magenta to Forum Pink)',
        buttonStyle: 'Discussion forum buttons with community themes',
        iconStyle: 'Discussion forum icons with community symbols',
        tabStyle: 'Discussion forum tabs with community categories',
        imageUsage: 'Discussion forum photos with caring community overlays',
        placement: {
          images: 'Discussion forum community displays',
          tabs: 'Discussion forum navigation',
          icons: 'Discussion community forum icons',
          buttons: 'Discussion forum community style'
        }
      },
      {
        id: 'oc-49-4',
        slideNumber: 4,
        name: 'Template 49 — Slide 4',
        layout: 'Video lecture note sharing with caring organization and study efficiency',
        content: 'Video lecture note sharing featuring caring organization and enhanced study efficiency',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Video Yellow to Lecture Orange)',
        buttonStyle: 'Video lecture buttons with organization themes',
        iconStyle: 'Video lecture icons with organization symbols',
        tabStyle: 'Video lecture tabs with organization categories',
        imageUsage: 'Video lecture photos with caring organization overlays',
        placement: {
          images: 'Video lecture organization displays',
          tabs: 'Video lecture navigation',
          icons: 'Video organization lecture icons',
          buttons: 'Video lecture organization style'
        }
      },
      {
        id: 'oc-49-5',
        slideNumber: 5,
        name: 'Template 49 — Slide 5',
        layout: 'Quiz preparation sessions with caring study strategies and confidence building',
        content: 'Quiz preparation sessions featuring caring study strategies and empowering confidence building',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Quiz Purple to Preparation Purple)',
        buttonStyle: 'Quiz preparation buttons with confidence themes',
        iconStyle: 'Quiz preparation icons with confidence symbols',
        tabStyle: 'Quiz preparation tabs with confidence categories',
        imageUsage: 'Quiz preparation photos with caring confidence overlays',
        placement: {
          images: 'Quiz preparation confidence displays',
          tabs: 'Quiz preparation navigation',
          icons: 'Quiz confidence preparation icons',
          buttons: 'Quiz preparation confidence style'
        }
      },
      {
        id: 'oc-49-6',
        slideNumber: 6,
        name: 'Template 49 — Slide 6',
        layout: 'Technical difficulties support with caring patience and problem solving',
        content: 'Technical difficulties support featuring caring patience and collaborative problem solving',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Technical Red to Support Red)',
        buttonStyle: 'Technical support buttons with patience themes',
        iconStyle: 'Technical support icons with patience symbols',
        tabStyle: 'Technical support tabs with patience categories',
        imageUsage: 'Technical support photos with caring patience overlays',
        placement: {
          images: 'Technical support patience displays',
          tabs: 'Technical support navigation',
          icons: 'Technical patience support icons',
          buttons: 'Technical support patience style'
        }
      },
      {
        id: 'oc-49-7',
        slideNumber: 7,
        name: 'Template 49 — Slide 7',
        layout: 'Project milestone celebrations with caring achievement recognition and progress appreciation',
        content: 'Project milestone celebrations featuring caring achievement recognition and heartfelt progress appreciation',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Project Cyan to Milestone Mint)',
        buttonStyle: 'Project milestone buttons with achievement themes',
        iconStyle: 'Project milestone icons with achievement symbols',
        tabStyle: 'Project milestone tabs with achievement categories',
        imageUsage: 'Project milestone photos with caring achievement overlays',
        placement: {
          images: 'Project milestone achievement displays',
          tabs: 'Project milestone navigation',
          icons: 'Project achievement milestone icons',
          buttons: 'Project milestone achievement style'
        }
      },
      {
        id: 'oc-49-8',
        slideNumber: 8,
        name: 'Template 49 — Slide 8',
        layout: 'Study schedule coordination with caring time management and mutual accountability',
        content: 'Study schedule coordination featuring caring time management and supportive mutual accountability',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Schedule Red to Coordination Orange)',
        buttonStyle: 'Study schedule buttons with management themes',
        iconStyle: 'Study schedule icons with management symbols',
        tabStyle: 'Study schedule tabs with management categories',
        imageUsage: 'Study schedule photos with caring management overlays',
        placement: {
          images: 'Study schedule management displays',
          tabs: 'Study schedule navigation',
          icons: 'Study management schedule icons',
          buttons: 'Study schedule management style'
        }
      },
      {
        id: 'oc-49-9',
        slideNumber: 9,
        name: 'Template 49 — Slide 9',
        layout: 'Resource discovery sharing with caring curation and learning enhancement',
        content: 'Resource discovery sharing featuring caring curation and valuable learning enhancement',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Resource Blue to Discovery Blue)',
        buttonStyle: 'Resource discovery buttons with curation themes',
        iconStyle: 'Resource discovery icons with curation symbols',
        tabStyle: 'Resource discovery tabs with curation categories',
        imageUsage: 'Resource discovery photos with caring curation overlays',
        placement: {
          images: 'Resource discovery curation displays',
          tabs: 'Resource discovery navigation',
          icons: 'Resource curation discovery icons',
          buttons: 'Resource discovery curation style'
        }
      },
      {
        id: 'oc-49-10',
        slideNumber: 10,
        name: 'Template 49 — Slide 10',
        layout: 'Motivation check-ins with caring emotional support and inspiration sharing',
        content: 'Motivation check-ins featuring caring emotional support and uplifting inspiration sharing',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Motivation Green to Support Mint)',
        buttonStyle: 'Motivation support buttons with inspiration themes',
        iconStyle: 'Motivation support icons with inspiration symbols',
        tabStyle: 'Motivation support tabs with inspiration categories',
        imageUsage: 'Motivation support photos with caring inspiration overlays',
        placement: {
          images: 'Motivation support inspiration displays',
          tabs: 'Motivation support navigation',
          icons: 'Motivation inspiration support icons',
          buttons: 'Motivation support inspiration style'
        }
      },
      {
        id: 'oc-49-11',
        slideNumber: 11,
        name: 'Template 49 — Slide 11',
        layout: 'Certificate achievement celebrations with caring pride and accomplishment recognition',
        content: 'Certificate achievement celebrations featuring caring pride and wonderful accomplishment recognition',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Certificate Yellow to Achievement Orange)',
        buttonStyle: 'Certificate achievement buttons with pride themes',
        iconStyle: 'Certificate achievement icons with pride symbols',
        tabStyle: 'Certificate achievement tabs with pride categories',
        imageUsage: 'Certificate achievement photos with caring pride overlays',
        placement: {
          images: 'Certificate achievement pride displays',
          tabs: 'Certificate achievement navigation',
          icons: 'Certificate pride achievement icons',
          buttons: 'Certificate achievement pride style'
        }
      },
      {
        id: 'oc-49-12',
        slideNumber: 12,
        name: 'Template 49 — Slide 12',
        layout: 'Learning style adaptation with caring flexibility and personalized approach',
        content: 'Learning style adaptation featuring caring flexibility and thoughtfully personalized approach',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Learning Magenta to Style Pink)',
        buttonStyle: 'Learning style buttons with flexibility themes',
        iconStyle: 'Learning style icons with flexibility symbols',
        tabStyle: 'Learning style tabs with flexibility categories',
        imageUsage: 'Learning style photos with caring flexibility overlays',
        placement: {
          images: 'Learning style flexibility displays',
          tabs: 'Learning style navigation',
          icons: 'Learning flexibility style icons',
          buttons: 'Learning style flexibility style'
        }
      },
      {
        id: 'oc-49-13',
        slideNumber: 13,
        name: 'Template 49 — Slide 13',
        layout: 'Course completion reflection with caring growth appreciation and journey acknowledgment',
        content: 'Course completion reflection featuring caring growth appreciation and meaningful journey acknowledgment',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Course Purple to Completion Purple)',
        buttonStyle: 'Course completion buttons with growth themes',
        iconStyle: 'Course completion icons with growth symbols',
        tabStyle: 'Course completion tabs with growth categories',
        imageUsage: 'Course completion photos with caring growth overlays',
        placement: {
          images: 'Course completion growth displays',
          tabs: 'Course completion navigation',
          icons: 'Course growth completion icons',
          buttons: 'Course completion growth style'
        }
      },
      {
        id: 'oc-49-14',
        slideNumber: 14,
        name: 'Template 49 — Slide 14',
        layout: 'Future learning planning with caring aspiration and educational goal setting',
        content: 'Future learning planning featuring caring aspiration and inspiring educational goal setting',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Future Cyan to Learning Mint)',
        buttonStyle: 'Future learning buttons with aspiration themes',
        iconStyle: 'Future learning icons with aspiration symbols',
        tabStyle: 'Future learning tabs with aspiration categories',
        imageUsage: 'Future learning photos with caring aspiration overlays',
        placement: {
          images: 'Future learning aspiration displays',
          tabs: 'Future learning navigation',
          icons: 'Future aspiration learning icons',
          buttons: 'Future learning aspiration style'
        }
      },
      {
        id: 'oc-49-15',
        slideNumber: 15,
        name: 'Template 49 — Slide 15',
        layout: 'Online course buddy photo sharing with caring codes and educational support',
        content: 'Final online course buddy photo sharing with caring codes and nurturing educational support',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Course Blue to Buddy Blue)',
        buttonStyle: 'Caring gradient buttons with course sparkle, 12px radius',
        iconStyle: 'Contextual course caring buddy icons',
        tabStyle: 'Educational navigation with caring partnership',
        imageUsage: 'Circular course buddy avatars with caring educational frames',
        placement: {
          images: 'Circular course buddy photos with caring frames',
          tabs: 'Educational course buddy caring navigation',
          icons: 'Contextual course caring buddy icons',
          buttons: 'Caring gradient with course buddy sparkle'
        }
      }
    ]
  },

  // TEMPLATE 50: Fitness Challenge Partner - Video + Motivational tone (15 slides)
  {
    id: 'fitness-challenge-50',
    name: 'Fitness Challenge Partner Motivational Collection',
    description: 'Motivational video-based messages for fitness challenge partners',
    preview: '/assets/templates/fitness-challenge.jpg',
    suitableFor: ['fitness challenge partner', 'workout companion', 'health journey buddy'],
    style: 'motivational',
    appTheme: 'Fitness Excellence & Health Achievement',
    screenCount: 15,
    slides: [
      {
        id: 'fc-50-1',
        slideNumber: 1,
        name: 'Template 50 — Slide 1',
        layout: 'Motivational fitness video interface with challenge themes and excellence focus',
        content: 'Motivational fitness video interface with challenge themes and inspiring excellence focus',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Fitness Red to Challenge Red)',
        buttonStyle: 'Motivational fitness buttons with challenge themes, 14px radius',
        iconStyle: 'Motivational fitness icons with challenge symbols',
        tabStyle: 'Fitness navigation with motivational challenge categories',
        imageUsage: 'Fitness videos with motivational challenge excellence overlays',
        placement: {
          images: 'Fitness videos with motivational challenge excellence overlays',
          tabs: 'Fitness navigation with motivational challenge themes',
          icons: 'Motivational fitness challenge excellence icons',
          buttons: 'Motivational fitness challenge excellence button styling'
        }
      },
      {
        id: 'fc-50-2',
        slideNumber: 2,
        name: 'Template 50 — Slide 2',
        layout: 'Workout routine innovations with motivational creativity and exercise evolution',
        content: 'Workout routine innovations featuring motivational creativity and revolutionary exercise evolution',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Workout Green to Innovation Mint)',
        buttonStyle: 'Workout innovation buttons with creativity themes',
        iconStyle: 'Workout innovation icons with creativity symbols',
        tabStyle: 'Workout innovation tabs with creativity categories',
        imageUsage: 'Workout innovation videos with motivational creativity overlays',
        placement: {
          images: 'Workout innovation creativity displays',
          tabs: 'Workout innovation navigation',
          icons: 'Workout creativity innovation icons',
          buttons: 'Workout innovation creativity style'
        }
      },
      {
        id: 'fc-50-3',
        slideNumber: 3,
        name: 'Template 50 — Slide 3',
        layout: 'Personal record breakthroughs with motivational triumph and achievement celebration',
        content: 'Personal record breakthroughs featuring motivational triumph and extraordinary achievement celebration',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Record Yellow to Breakthrough Orange)',
        buttonStyle: 'Personal record buttons with triumph themes',
        iconStyle: 'Personal record icons with triumph symbols',
        tabStyle: 'Personal record tabs with triumph categories',
        imageUsage: 'Personal record videos with motivational triumph overlays',
        placement: {
          images: 'Personal record triumph displays',
          tabs: 'Personal record navigation',
          icons: 'Personal triumph record icons',
          buttons: 'Personal record triumph style'
        }
      },
      {
        id: 'fc-50-4',
        slideNumber: 4,
        name: 'Template 50 — Slide 4',
        layout: 'Challenge milestone tracking with motivational progress and goal visualization',
        content: 'Challenge milestone tracking featuring motivational progress and powerful goal visualization',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Challenge Blue to Milestone Blue)',
        buttonStyle: 'Challenge milestone buttons with progress themes',
        iconStyle: 'Challenge milestone icons with progress symbols',
        tabStyle: 'Challenge milestone tabs with progress categories',
        imageUsage: 'Challenge milestone videos with motivational progress overlays',
        placement: {
          images: 'Challenge milestone progress displays',
          tabs: 'Challenge milestone navigation',
          icons: 'Challenge progress milestone icons',
          buttons: 'Challenge milestone progress style'
        }
      },
      {
        id: 'fc-50-5',
        slideNumber: 5,
        name: 'Template 50 — Slide 5',
        layout: 'Nutrition optimization strategies with motivational health and performance enhancement',
        content: 'Nutrition optimization strategies featuring motivational health and exceptional performance enhancement',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Nutrition Purple to Optimization Purple)',
        buttonStyle: 'Nutrition optimization buttons with health themes',
        iconStyle: 'Nutrition optimization icons with health symbols',
        tabStyle: 'Nutrition optimization tabs with health categories',
        imageUsage: 'Nutrition optimization videos with motivational health overlays',
        placement: {
          images: 'Nutrition optimization health displays',
          tabs: 'Nutrition optimization navigation',
          icons: 'Nutrition health optimization icons',
          buttons: 'Nutrition optimization health style'
        }
      },
      {
        id: 'fc-50-6',
        slideNumber: 6,
        name: 'Template 50 — Slide 6',
        layout: 'Recovery protocol mastery with motivational restoration and body wisdom',
        content: 'Recovery protocol mastery featuring motivational restoration and profound body wisdom',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Recovery Cyan to Protocol Mint)',
        buttonStyle: 'Recovery protocol buttons with restoration themes',
        iconStyle: 'Recovery protocol icons with restoration symbols',
        tabStyle: 'Recovery protocol tabs with restoration categories',
        imageUsage: 'Recovery protocol videos with motivational restoration overlays',
        placement: {
          images: 'Recovery protocol restoration displays',
          tabs: 'Recovery protocol navigation',
          icons: 'Recovery restoration protocol icons',
          buttons: 'Recovery protocol restoration style'
        }
      },
      {
        id: 'fc-50-7',
        slideNumber: 7,
        name: 'Template 50 — Slide 7',
        layout: 'Mental toughness development with motivational resilience and strength building',
        content: 'Mental toughness development featuring motivational resilience and unwavering strength building',
        colorPalette: 'Gradient from #e84393 to #fd79a8 (Mental Magenta to Toughness Pink)',
        buttonStyle: 'Mental toughness buttons with resilience themes',
        iconStyle: 'Mental toughness icons with resilience symbols',
        tabStyle: 'Mental toughness tabs with resilience categories',
        imageUsage: 'Mental toughness videos with motivational resilience overlays',
        placement: {
          images: 'Mental toughness resilience displays',
          tabs: 'Mental toughness navigation',
          icons: 'Mental resilience toughness icons',
          buttons: 'Mental toughness resilience style'
        }
      },
      {
        id: 'fc-50-8',
        slideNumber: 8,
        name: 'Template 50 — Slide 8',
        layout: 'Equipment mastery sessions with motivational technique and skill advancement',
        content: 'Equipment mastery sessions featuring motivational technique and exceptional skill advancement',
        colorPalette: 'Gradient from #ff7675 to #fab1a0 (Equipment Red to Mastery Orange)',
        buttonStyle: 'Equipment mastery buttons with technique themes',
        iconStyle: 'Equipment mastery icons with technique symbols',
        tabStyle: 'Equipment mastery tabs with technique categories',
        imageUsage: 'Equipment mastery videos with motivational technique overlays',
        placement: {
          images: 'Equipment mastery technique displays',
          tabs: 'Equipment mastery navigation',
          icons: 'Equipment technique mastery icons',
          buttons: 'Equipment mastery technique style'
        }
      },
      {
        id: 'fc-50-9',
        slideNumber: 9,
        name: 'Template 50 — Slide 9',
        layout: 'Competition preparation intensity with motivational focus and performance optimization',
        content: 'Competition preparation intensity featuring motivational focus and systematic performance optimization',
        colorPalette: 'Gradient from #2d3436 to #636e72 (Competition Black to Preparation Gray)',
        buttonStyle: 'Competition preparation buttons with focus themes',
        iconStyle: 'Competition preparation icons with focus symbols',
        tabStyle: 'Competition preparation tabs with focus categories',
        imageUsage: 'Competition preparation videos with motivational focus overlays',
        placement: {
          images: 'Competition preparation focus displays',
          tabs: 'Competition preparation navigation',
          icons: 'Competition focus preparation icons',
          buttons: 'Competition preparation focus style'
        }
      },
      {
        id: 'fc-50-10',
        slideNumber: 10,
        name: 'Template 50 — Slide 10',
        layout: 'Injury prevention strategies with motivational care and longevity planning',
        content: 'Injury prevention strategies featuring motivational care and comprehensive longevity planning',
        colorPalette: 'Gradient from #00b894 to #55efc4 (Injury Green to Prevention Mint)',
        buttonStyle: 'Injury prevention buttons with care themes',
        iconStyle: 'Injury prevention icons with care symbols',
        tabStyle: 'Injury prevention tabs with care categories',
        imageUsage: 'Injury prevention videos with motivational care overlays',
        placement: {
          images: 'Injury prevention care displays',
          tabs: 'Injury prevention navigation',
          icons: 'Injury care prevention icons',
          buttons: 'Injury prevention care style'
        }
      },
      {
        id: 'fc-50-11',
        slideNumber: 11,
        name: 'Template 50 — Slide 11',
        layout: 'Transformation documentation with motivational progress and change celebration',
        content: 'Transformation documentation featuring motivational progress and incredible change celebration',
        colorPalette: 'Gradient from #fdcb6e to #e17055 (Transformation Yellow to Change Orange)',
        buttonStyle: 'Transformation documentation buttons with progress themes',
        iconStyle: 'Transformation documentation icons with progress symbols',
        tabStyle: 'Transformation documentation tabs with progress categories',
        imageUsage: 'Transformation documentation videos with motivational progress overlays',
        placement: {
          images: 'Transformation documentation progress displays',
          tabs: 'Transformation documentation navigation',
          icons: 'Transformation progress documentation icons',
          buttons: 'Transformation documentation progress style'
        }
      },
      {
        id: 'fc-50-12',
        slideNumber: 12,
        name: 'Template 50 — Slide 12',
        layout: 'Habit formation mastery with motivational consistency and lifestyle integration',
        content: 'Habit formation mastery featuring motivational consistency and seamless lifestyle integration',
        colorPalette: 'Gradient from #a29bfe to #6c5ce7 (Habit Purple to Formation Purple)',
        buttonStyle: 'Habit formation buttons with consistency themes',
        iconStyle: 'Habit formation icons with consistency symbols',
        tabStyle: 'Habit formation tabs with consistency categories',
        imageUsage: 'Habit formation videos with motivational consistency overlays',
        placement: {
          images: 'Habit formation consistency displays',
          tabs: 'Habit formation navigation',
          icons: 'Habit consistency formation icons',
          buttons: 'Habit formation consistency style'
        }
      },
      {
        id: 'fc-50-13',
        slideNumber: 13,
        name: 'Template 50 — Slide 13',
        layout: 'Community support networks with motivational encouragement and collective strength',
        content: 'Community support networks featuring motivational encouragement and powerful collective strength',
        colorPalette: 'Gradient from #74b9ff to #0984e3 (Community Blue to Support Blue)',
        buttonStyle: 'Community support buttons with encouragement themes',
        iconStyle: 'Community support icons with encouragement symbols',
        tabStyle: 'Community support tabs with encouragement categories',
        imageUsage: 'Community support videos with motivational encouragement overlays',
        placement: {
          images: 'Community support encouragement displays',
          tabs: 'Community support navigation',
          icons: 'Community encouragement support icons',
          buttons: 'Community support encouragement style'
        }
      },
      {
        id: 'fc-50-14',
        slideNumber: 14,
        name: 'Template 50 — Slide 14',
        layout: 'Legacy fitness planning with motivational vision and long-term health goals',
        content: 'Legacy fitness planning featuring motivational vision and comprehensive long-term health goals',
        colorPalette: 'Gradient from #00cec9 to #55efc4 (Legacy Cyan to Fitness Mint)',
        buttonStyle: 'Legacy fitness buttons with vision themes',
        iconStyle: 'Legacy fitness icons with vision symbols',
        tabStyle: 'Legacy fitness tabs with vision categories',
        imageUsage: 'Legacy fitness videos with motivational vision overlays',
        placement: {
          images: 'Legacy fitness vision displays',
          tabs: 'Legacy fitness navigation',
          icons: 'Legacy vision fitness icons',
          buttons: 'Legacy fitness vision style'
        }
      },
      {
        id: 'fc-50-15',
        slideNumber: 15,
        name: 'Template 50 — Slide 15',
        layout: 'Fitness challenge partner video sharing with motivational codes and excellence achievement',
        content: 'Final fitness challenge partner video sharing with motivational codes and inspiring excellence achievement',
        colorPalette: 'Gradient from #ff6b6b to #ee5a52 (Fitness Red to Partner Red)',
        buttonStyle: 'Motivational gradient buttons with fitness sparkle, 14px radius',
        iconStyle: 'Contextual fitness motivational partner icons',
        tabStyle: 'Fitness navigation with motivational excellence',
        imageUsage: 'Circular fitness partner avatars with motivational challenge frames',
        placement: {
          images: 'Circular fitness partner photos with motivational frames',
          tabs: 'Fitness challenge partner motivational navigation',
          icons: 'Contextual fitness motivational partner icons',
          buttons: 'Motivational gradient with fitness partner sparkle'
        }
      }
    ]
  }
];

export default defaultTemplates;