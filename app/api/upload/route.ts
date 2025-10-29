import { NextRequest, NextResponse } from 'next/server'
import { dbService } from '@/lib/db/mongodb'
import { fileProcessor } from '@/lib/utils/fileProcessor'
import { withAuth } from '@/lib/auth/jwt'

export const POST = withAuth(async (request: NextRequest) => {
  try {
    const formData = await request.formData()
    
    const file = formData.get('file') as File
    const messageId = formData.get('messageId') as string
    const caption = formData.get('caption') as string
    const type = formData.get('type') as string // 'photo', 'video', 'voice'
    
    if (!file) {
      return NextResponse.json({
        success: false,
        error: 'No file provided'
      }, { status: 400 })
    }

    if (!['photo', 'video', 'voice'].includes(type)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid file type. Must be photo, video, or voice'
      }, { status: 400 })
    }

    // Process file upload
    const result = await fileProcessor.processUpload(request, type as 'photo' | 'video' | 'voice')
    
    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: result.error
      }, { status: 400 })
    }

    // Save file info to database if messageId is provided
    let memory = null
    if (messageId) {
      const existingMemories = await dbService.getMemoriesByMessageId(messageId)
      const nextOrder = existingMemories.length > 0 ? Math.max(...existingMemories.map(m => m.order)) + 1 : 0

      memory = await dbService.addMemory({
        messageId,
        type: type.toUpperCase() as 'PHOTO' | 'VIDEO' | 'VOICE',
        content: result.url!,
        filename: result.filename!,
        caption: caption || undefined,
        order: nextOrder
      })
    }

    return NextResponse.json({
      success: true,
      file: {
        id: memory?._id,
        filename: result.filename,
        originalName: file.name,
        size: result.size,
        type: type.toUpperCase(),
        url: result.url,
        caption,
        dimensions: result.dimensions
      },
      message: 'File uploaded successfully'
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to upload file'
    }, { status: 500 })
  }
})

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const memoryId = url.searchParams.get('memoryId')
    const filename = url.searchParams.get('filename')

    if (memoryId) {
      // Delete from database and file system
      const memory = await prisma.memory.findUnique({
        where: { id: memoryId }
      })

      if (!memory) {
        return NextResponse.json({
          success: false,
          error: 'Memory not found'
        }, { status: 404 })
      }

      // Delete from database
      await prisma.memory.delete({
        where: { id: memoryId }
      })

      // Delete file from disk (optional - you might want to keep files for backup)
      // const filePath = path.join(process.cwd(), 'public', memory.content)
      // if (existsSync(filePath)) {
      //   await unlink(filePath)
      // }

      return NextResponse.json({
        success: true,
        message: 'File deleted successfully'
      })
    }

    return NextResponse.json({
      success: false,
      error: 'Memory ID is required'
    }, { status: 400 })

  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to delete file'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const messageId = url.searchParams.get('messageId')

    if (!messageId) {
      return NextResponse.json({
        success: false,
        error: 'Message ID is required'
      }, { status: 400 })
    }

    const memories = await prisma.memory.findMany({
      where: { messageId },
      orderBy: { order: 'asc' }
    })

    return NextResponse.json({
      success: true,
      memories: memories.map(memory => ({
        id: memory.id,
        type: memory.type,
        url: memory.content,
        filename: memory.filename,
        caption: memory.caption,
        order: memory.order,
        createdAt: memory.createdAt
      }))
    })

  } catch (error) {
    console.error('Error fetching uploads:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch uploads'
    }, { status: 500 })
  }
}