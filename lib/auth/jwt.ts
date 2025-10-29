import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { NextRequest } from 'next/server'

const JWT_SECRET = process.env.JWT_SECRET || 'asalways-secret-key-2024'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d'

export interface JWTPayload {
  userId: string
  email: string
  role: string
  iat?: number
  exp?: number
}

export class AuthService {
  // Generate JWT token
  generateToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
  }

  // Verify JWT token
  verifyToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTPayload
    } catch (error) {
      return null
    }
  }

  // Hash password
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 12
    return await bcrypt.hash(password, saltRounds)
  }

  // Compare password
  async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }

  // Extract token from request
  extractTokenFromRequest(request: NextRequest): string | null {
    // First try Authorization header
    const authHeader = request.headers.get('authorization')
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7)
      if (this.isValidToken(token)) {
        return token
      }
    }

    // Then try cookies
    const tokenCookie = request.cookies.get('auth-token')
    if (tokenCookie && this.isValidToken(tokenCookie.value)) {
      return tokenCookie.value
    }

    return null
  }

  // Validate token format
  private isValidToken(token: string): boolean {
    return token.split('.').length === 3 // Basic JWT format check
  }

  // Middleware to verify authentication
  async authenticateRequest(request: NextRequest): Promise<JWTPayload | null> {
    const token = this.extractTokenFromRequest(request)
    if (!token) {
      return null
    }

    return this.verifyToken(token)
  }

  // Generate token pair with refresh token
  generateTokenPair(payload: Omit<JWTPayload, 'iat' | 'exp'>): { accessToken: string, refreshToken: string } {
    const accessToken = this.generateToken(payload)
    const refreshToken = jwt.sign(
      { userId: payload.userId, type: 'refresh' },
      JWT_SECRET,
      { expiresIn: '30d' }
    )
    return { accessToken, refreshToken }
  }

  // Generate refresh token
  generateRefreshToken(userId: string): string {
    return jwt.sign({ userId, type: 'refresh' }, JWT_SECRET, { expiresIn: '30d' })
  }

  // Verify refresh token
  verifyRefreshToken(token: string): { userId: string } | null {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as any
      if (payload.type === 'refresh') {
        return { userId: payload.userId }
      }
      return null
    } catch (error) {
      return null
    }
  }

  // Refresh access token using refresh token
  async refreshAccessToken(refreshToken: string): Promise<{ accessToken: string, refreshToken: string } | null> {
    const payload = this.verifyRefreshToken(refreshToken)
    if (!payload) return null

    // Get user from database to ensure they still exist
    const { dbService } = await import('../db/mongodb')
    const user = await dbService.findUserById(payload.userId)
    if (!user) return null

    return this.generateTokenPair({
      userId: user._id!.toString(),
      email: user.email!,
      role: user.role
    })
  }

  // Generate password reset token
  generateResetToken(email: string): string {
    return jwt.sign({ email, type: 'reset' }, JWT_SECRET, { expiresIn: '1h' })
  }

  // Verify password reset token
  verifyResetToken(token: string): { email: string } | null {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as any
      if (payload.type === 'reset') {
        return { email: payload.email }
      }
      return null
    } catch (error) {
      return null
    }
  }

  // Generate random code for admin access
  generateAdminCode(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  // Validate admin secret code
  validateAdminCode(code: string): boolean {
    const adminCode = process.env.ADMIN_SECRET_CODE || '306206'
    return code === adminCode
  }
}

export const authService = new AuthService()

// Auth middleware for API routes
export function withAuth(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    const user = await authService.authenticateRequest(request)
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Add user to request context
    ;(request as any).user = user
    return handler(request, ...args)
  }
}

// Admin auth middleware
export function withAdminAuth(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    const user = await authService.authenticateRequest(request)
    if (!user || user.role !== 'ADMIN') {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    ;(request as any).user = user
    return handler(request, ...args)
  }
}