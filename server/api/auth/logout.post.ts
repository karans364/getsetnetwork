export default defineEventHandler((event) => {
  // Clear the authentication cookie
  deleteCookie(event, 'auth_token')
  return { success: true, message: 'Logged out successfully' }
})
