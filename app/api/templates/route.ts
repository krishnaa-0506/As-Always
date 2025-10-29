import { NextRequest, NextResponse } from 'next/server'
import { dbService } from '@/lib/db/mongodb'
import { defaultTemplates as importedTemplates, type Template as AppTemplate } from '@/lib/data/templates'
import { type Template as DBTemplate } from '@/lib/db/types'

// Use explicit variable to avoid any import confusion
const defaultTemplates = importedTemplates;

function convertToAppTemplate(dbTemplate: DBTemplate): AppTemplate {
  return {
    id: dbTemplate._id.toString(),
    name: dbTemplate.name,
    description: dbTemplate.description,
    preview: dbTemplate.previewImages[0] || '/assets/templates/default.jpg',
    suitableFor: dbTemplate.suitableFor,
    style: dbTemplate.category.toLowerCase(),
    appTheme: dbTemplate.name,
    screenCount: dbTemplate.layouts.length,
    slides: dbTemplate.layouts.map((layout, index) => ({
      id: `${dbTemplate._id}-slide-${index + 1}`,
      slideNumber: index + 1,
      name: layout.name,
      layout: layout.structure,
      content: layout.structure,
      colorPalette: dbTemplate.colorSchemes[0] || 'Gradient from #74b9ff to #0984e3',
      buttonStyle: 'Modern rounded buttons with gradient, 12px radius',
      iconStyle: 'Modern minimalist icons',
      tabStyle: 'Clean navigation tabs',
      imageUsage: 'Circular photo frames with gradient borders',
      placement: {
        images: 'Circular photo frames with gradient borders',
        tabs: 'Top navigation with clean design',
        icons: 'Contextual icons throughout interface',
        buttons: 'Gradient buttons with hover effects'
      }
    }))
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const category = url.searchParams.get('category') || undefined
    
    // Always use default templates for now since they are comprehensive
    const templates = getDefaultTemplates(category)
    
    console.log(`Serving ${templates.length} templates, first template has ${templates[0]?.slides?.length || 0} slides`)
    console.log(`First template name: ${templates[0]?.name}`)
    console.log(`First template id: ${templates[0]?.id}`)
    console.log(`Total defaultTemplates imported: ${defaultTemplates.length}`)
    
    return NextResponse.json({
      success: true,
      templates,
      total: templates.length
    })
  } catch (error) {
    console.error('Error fetching templates:', error)
    // Return default templates as fallback
    return NextResponse.json({
      success: true,
      templates: getDefaultTemplates(),
      total: getDefaultTemplates().length
    })
  }
}

function getDefaultTemplates(category?: string): AppTemplate[] {
  return category 
    ? defaultTemplates.filter((t: AppTemplate) => t.suitableFor.includes(category))
    : defaultTemplates;
}

export async function POST(request: NextRequest) {
  try {
    const templateData = await request.json()
    
    const template = await dbService.createTemplate(templateData)
    
    return NextResponse.json({
      success: true,
      template
    })
  } catch (error) {
    console.error('Error creating template:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to create template'
    }, { status: 500 })
  }
}