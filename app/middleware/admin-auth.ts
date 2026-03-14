export default defineNuxtRouteMiddleware((to, from) => {
  // We only run this on the client side to avoid SSR hydration issues with cookies
  if (process.client) {
    const authCookie = useCookie('auth_token')
    
    // If there's no token and we're trying to access an admin route (but not the login page)
    if (!authCookie.value && to.path.startsWith('/admin') && to.path !== '/login') {
      return navigateTo('/login')
    }
  }
})
