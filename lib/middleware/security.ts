import { NextRequest, NextResponse } from 'next/server'

// Rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function createRateLimit(windowMs: number, max: number) {
  return (req: NextRequest) => {
    const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const key = `${ip}-${req.nextUrl.pathname}`
    
    const record = rateLimitStore.get(key)
    
    if (!record || now > record.resetTime) {
      rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
      return true
    }
    
    if (record.count >= max) {
      return false
    }
    
    record.count++
    return true
  }
}

export const apiRateLimit = createRateLimit(15 * 60 * 1000, 100) // 100 requests per 15 minutes
export const authRateLimit = createRateLimit(15 * 60 * 1000, 5) // 5 auth attempts per 15 minutes
export const uploadRateLimit = createRateLimit(60 * 60 * 1000, 20) // 20 uploads per hour

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return { valid: errors.length === 0, errors }
}

export function withRateLimit(handler: Function, limiter: (req: NextRequest) => boolean) {
  return async (request: NextRequest, ...args: any[]) => {
    if (!limiter(request)) {
      return NextResponse.json({
        error: 'Too many requests. Please try again later.'
      }, { status: 429 })
    }
    
    return handler(request, ...args)
  }
}

export function withSecurity(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    // Add security headers
    const response = await handler(request, ...args)
    
    if (response instanceof NextResponse) {
      response.headers.set('X-Content-Type-Options', 'nosniff')
      response.headers.set('X-Frame-Options', 'DENY')
      response.headers.set('X-XSS-Protection', '1; mode=block')
      response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    }
    
    return response
  }
}