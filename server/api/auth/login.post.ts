import jwt from 'jsonwebtoken'

// Secret key for JWT (in a real app, use environment variables)
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-getset-key'

// Hardcoded admin credentials for simplicity
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'password123'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    if (body.username === ADMIN_USERNAME && body.password === ADMIN_PASSWORD) {
      // Create a JWT token valid for 24 hours
      const token = jwt.sign(
        { username: ADMIN_USERNAME, role: 'admin' }, 
        JWT_SECRET, 
        { expiresIn: '24h' }
      )
      
      // Set the token as a cookie accessible by Nuxt frontend router
      setCookie(event, 'auth_token', token, {
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      })
      
      return { success: true, message: 'Logged in successfully' }
    } else {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid username or password'
      })
    }
  } catch (error: any) {
    if (error.statusCode === 401) throw error
    
    console.error('Login error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'An error occurred during login'
    })
  }
})
