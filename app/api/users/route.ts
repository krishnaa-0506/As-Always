import { NextRequest, NextResponse } from 'next/server'
import { dbService } from '@/lib/db/mongodb'
import { SecuritySanitizer } from '@/lib/security/sanitizer'

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const email = url.searchParams.get('email')
    const id = url.searchParams.get('id')
    const limit = parseInt(url.searchParams.get('limit') || '50')
    const offset = parseInt(url.searchParams.get('offset') || '0')

    if (id) {
      const user = await dbService.findUserById(id)
      if (!user) {
        return NextResponse.json({
          success: false,
          error: 'User not found'
        }, { status: 404 })
      }

      return NextResponse.json({
        success: true,
        user: {
          id: user._id,
          email: SecuritySanitizer.sanitizeString(user.email || ''),
          name: SecuritySanitizer.sanitizeString(user.name || ''),
          role: user.role,
          createdAt: user.createdAt
        }
      })
    }

    if (email) {
      const user = await dbService.findUserByEmail(email)
      return NextResponse.json({
        success: true,
        user: user ? {
          id: user._id,
          email: SecuritySanitizer.sanitizeString(user.email || ''),
          name: SecuritySanitizer.sanitizeString(user.name || ''),
          role: user.role,
          createdAt: user.createdAt
        } : null
      })
    }

    // Get all users with pagination
    const db = await dbService.connect()
    const users = await db.collection('users')
      .find({}, { projection: { password: 0 } })
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray()

    const totalUsers = await db.collection('users').countDocuments()

    return NextResponse.json({
      success: true,
      users: users.map(user => ({
        id: user._id,
        email: SecuritySanitizer.sanitizeString(user.email || ''),
        name: SecuritySanitizer.sanitizeString(user.name || ''),
        role: user.role,
        createdAt: user.createdAt
      })),
      total: totalUsers,
      hasMore: offset + limit < totalUsers
    })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch users'
    }, { status: 500 })
  }
}