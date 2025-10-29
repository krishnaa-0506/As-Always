import { NextRequest, NextResponse } from 'next/server'
import { dbService } from '@/lib/db/mongodb'
import { authService } from '@/lib/auth/jwt'
import { CSRFProtection } from '@/lib/middleware/csrf'
import { SecuritySanitizer } from '@/lib/security/sanitizer'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const REDIRECT_URI = `${process.env.NEXTAUTH_URL}/api/auth/google/callback`

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')

  if (!code) {
    // Generate CSRF state token
    const csrfToken = CSRFProtection.generateToken()
    
    // Redirect to Google OAuth with state parameter
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
      `response_type=code&` +
      `scope=email profile&` +
      `access_type=offline&` +
      `state=${csrfToken}`

    const response = NextResponse.redirect(googleAuthUrl)
    response.cookies.set('oauth_state', csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 600 // 10 minutes
    })
    return response
  }

  // Validate CSRF state
  const storedState = request.cookies.get('oauth_state')?.value
  if (!state || !storedState || state !== storedState) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth?error=csrf_failed`)
  }

  try {
    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID!,
        client_secret: GOOGLE_CLIENT_SECRET!,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI
      })
    })

    const tokens = await tokenResponse.json()

    // Get user info from Google
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` }
    })

    const googleUser = await userResponse.json()

    // Sanitize user data from Google
    const sanitizedEmail = SecuritySanitizer.sanitizeString(googleUser.email)
    const sanitizedName = SecuritySanitizer.sanitizeString(googleUser.name)

    // Check if user exists
    let user = await dbService.findUserByEmail(sanitizedEmail)

    if (!user) {
      // Create new user
      user = await dbService.createUser({
        email: sanitizedEmail,
        name: sanitizedName,
        role: 'SENDER'
      })
    }

    // Generate JWT token
    const token = authService.generateToken({
      userId: user._id!,
      email: user.email!,
      role: user.role
    })

    // Redirect to sender dashboard with token
    const response = NextResponse.redirect(`${process.env.NEXTAUTH_URL}/sender`)
    
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60
    })

    return response

  } catch (error) {
    console.error('Google OAuth error:', error)
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/auth?error=oauth_failed`)
  }
}