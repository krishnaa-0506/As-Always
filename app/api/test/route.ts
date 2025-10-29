import { NextResponse } from 'next/server'
import { dbService } from '@/lib/db/mongodb'
import { fallbackAuth } from '@/lib/auth/fallback'

export async function GET() {
  try {
    // Test MongoDB connection
    let mongoStatus = 'disconnected'
    let mongoError = null
    
    try {
      await dbService.connect()
      mongoStatus = 'connected'
    } catch (error) {
      mongoError = error.message
    }

    // Test fallback auth
    const fallbackUsers = await fallbackAuth.findByEmail('test@example.com')
    
    return NextResponse.json({
      success: true,
      status: {
        mongodb: mongoStatus,
        mongoError,
        fallbackAuth: fallbackUsers ? 'working' : 'not working',
        server: 'running'
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
      status: {
        server: 'error'
      }
    }, { status: 500 })
  }
}