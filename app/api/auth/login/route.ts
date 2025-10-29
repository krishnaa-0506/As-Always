import { NextRequest, NextResponse } from 'next/server'
import { authService } from '@/lib/auth/jwt'
import { dbService } from '@/lib/db/mongodb'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: 'Email and password are required'
      }, { status: 400 })
    }

    // Find user in database
    const user = await dbService.findUserByEmail(email)
    if (!user || !user.password) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email or password'
      }, { status: 401 })
    }

    // Verify password
    const isValidPassword = await authService.comparePassword(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email or password'
      }, { status: 401 })
    }

        // Generate token pair
    const tokens = authService.generateTokenPair({
      userId: user._id.toString(),
      email: user.email!,
      role: user.role!
    })

    const response = NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      ...tokens
    })

    // Set refresh token as httpOnly cookie
    response.cookies.set('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({
      success: false,
      error: 'Login failed'
    }, { status: 500 })
  }
}