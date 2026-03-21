<template>
  <div class="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
    <!-- Premium Deep Space Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-0"></div>
    
    <!-- Abstract Glowing Orbs -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-[60%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen"></div>
      <div class="absolute top-[30%] right-[0%] w-[50%] h-[60%] rounded-full bg-fuchsia-500/20 blur-[120px] mix-blend-screen"></div>
    </div>
    
    <!-- Glassmorphic Login Panel -->
    <div class="w-full max-w-[420px] bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_4px_80px_rgba(79,70,229,0.2)] border border-white/50 overflow-hidden relative z-10 px-8 py-10 sm:p-12">
      
      <!-- Header -->
      <div class="text-center mb-10">
         <div class="mx-auto w-14 h-14 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40 mb-6">
           <span class="text-white font-black text-2xl tracking-tighter">GS</span>
         </div>
         <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight mb-2">Welcome Back</h1>
         <p class="text-gray-500 text-sm font-semibold">Sign in to your administrator portal</p>
      </div>
      
      <!-- Form -->
      <div>
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Error Alert -->
          <div v-if="errorMsg" class="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm border border-red-100 flex items-start gap-2 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">{{ errorMsg }}</span>
          </div>
          
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 pl-1">Username</label>
              <input 
                v-model="username" 
                type="text" 
                required
                class="w-full px-5 py-3.5 bg-white/70 rounded-2xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                placeholder="Enter admin username"
              />
            </div>
            
            <div>
              <div class="flex items-center justify-between mb-2 pl-1 pr-1">
                 <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                 <a href="#" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition">Forgot?</a>
              </div>
              <input 
                v-model="password" 
                type="password" 
                required
                class="w-full px-5 py-3.5 bg-white/70 rounded-2xl border border-gray-200 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 outline-none transition-all text-gray-900 font-medium placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-[0.98] text-white font-bold py-4 px-4 rounded-2xl shadow-xl shadow-indigo-500/30 transition-all flex justify-center items-center gap-2 group"
          >
            <span v-if="isLoading" class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
            <span v-else>{{ 'Sign In to Dashboard' }}</span>
            <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </form>
        
        <div class="mt-8 text-center text-sm">
          <NuxtLink to="/" class="group flex items-center justify-center gap-1 text-gray-500 hover:text-indigo-600 font-semibold transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Storefront
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  layout: false // Don't use the admin layout for the login page
})

useHead({ title: 'Admin Login - Get Set Network' })

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)
const router = useRouter()

const handleLogin = async () => {
  errorMsg.value = ''
  isLoading.value = true
  
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })
    
    // Redirect to dashboard on success
    router.push('/admin')
  } catch (err) {
    if (err.data && err.data.message) {
      errorMsg.value = err.data.message
    } else {
      errorMsg.value = 'Invalid credentials. Please try again.'
    }
    console.error('Login error:', err)
  } finally {
    isLoading.value = false
  }
}
</script>
