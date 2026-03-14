import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-getset-key'

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  // Define protected API routes (mutations for products, and uploads)
  const isProtectedApi = 
    (url.pathname.startsWith('/api/products') && event.method !== 'GET') ||
    url.pathname.startsWith('/api/upload')
    
  if (isProtectedApi) {
    const token = getCookie(event, 'auth_token')
    
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized. Please log in.',
      })
    }
    
    try {
      // Verify JWT
      jwt.verify(token, JWT_SECRET)
    } catch (error) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid or expired token.',
      })
    }
  }
})
