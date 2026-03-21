<template>
  <div class="font-poppins">
    <!-- Loader -->
    <div v-if="loading" class="loader_bg">
      <img src="/images/loading.gif" alt="Loading..." class="w-52" />
    </div>

    <!-- Modern Glassmorphic Nav Header -->
    <header class="w-full relative z-50 sticky top-0 backdrop-blur-xl bg-white/80 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div class="max-w-[1500px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        
        <!-- Logo -->
        <NuxtLink to="/" class="flex-shrink-0 group">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-shadow">
              <span class="text-white font-black text-xl tracking-tighter">GS</span>
            </div>
            <span class="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">GetSet<span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Network</span></span>
          </div>
        </NuxtLink>

        <!-- Search Bar (Pill shaped, modern) -->
        <div class="hidden md:flex flex-grow max-w-2xl mx-8 relative group">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input type="text" placeholder="Search for products, brands and more..." class="w-full pl-12 pr-4 py-3 bg-gray-100/50 hover:bg-gray-100 focus:bg-white text-gray-900 rounded-full outline-none border border-transparent focus:border-indigo-200 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm font-medium" />
        </div>

        <!-- Right Side Nav -->
        <div class="flex items-center gap-2 sm:gap-6">
          <NuxtLink to="/products" class="hidden lg:block text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors">Shop</NuxtLink>
          <NuxtLink to="/about" class="hidden lg:block text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors">Discover</NuxtLink>
          
          <div class="w-px h-6 bg-gray-200 hidden lg:block"></div>

          <NuxtLink to="/login" class="group flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
            <div class="w-9 h-9 bg-gray-100 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <span class="hidden sm:block">Sign In</span>
          </NuxtLink>

          <!-- Cart Button -->
          <button @click="isCartOpen = true" class="group flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
            <div class="relative w-9 h-9 bg-gray-100 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <!-- Glowing Badge -->
              <span v-if="cart.length > 0" class="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-black w-4.5 h-4.5 p-1 flex items-center justify-center rounded-full shadow-lg shadow-pink-500/40 border border-white">
                {{ cart.length }}
              </span>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile Search -->
      <div class="md:hidden px-4 pb-4">
        <div class="relative group">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input type="text" placeholder="Search products..." class="w-full pl-10 pr-4 py-2.5 bg-gray-100 text-gray-900 rounded-xl outline-none border border-transparent focus:border-indigo-200 focus:bg-white transition-all text-sm" />
        </div>
      </div>
    </header>

    <!-- Cart Sidebar Overlay -->
    <div v-if="isCartOpen" @click="isCartOpen = false" class="fixed inset-0 bg-black/50 z-[60] transition-opacity"></div>
    
    <!-- Cart Sidebar -->
    <div :class="`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`">
      <div class="p-6 border-b flex justify-between items-center bg-gray-50">
        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Your Cart
        </h2>
        <button @click="isCartOpen = false" class="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-grow overflow-y-auto p-6">
        <div v-if="cart.length === 0" class="text-center text-gray-500 mt-10 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p>Your cart is empty.</p>
          <button @click="isCartOpen = false" class="mt-4 text-blue-600 font-medium hover:underline">Continue Shopping</button>
        </div>
        
        <div v-else class="space-y-4">
          <div v-for="(item, index) in cart" :key="index" class="flex gap-4 border-b pb-4 items-center">
            <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-md border" />
            <div class="flex-grow">
              <h4 class="font-medium text-gray-800">{{ item.name }}</h4>
              <p class="text-blue-600 font-bold">{{ item.price }}</p>
            </div>
            <button @click="removeFromCart(index)" class="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors" title="Remove item">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="cart.length > 0" class="p-6 border-t bg-gray-50 border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-600 font-medium">Subtotal ({{ cart.length }} items)</span>
          <span class="text-xl font-bold text-gray-900">₹ {{ cartTotal }}</span>
        </div>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow transition-colors flex justify-center items-center gap-2">
          Proceed to Checkout
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300">
      <!-- Social Icons -->
      <div class="border-b border-gray-700">
        <div class="max-w-7xl mx-auto px-4 py-6 flex justify-center">
          <ul class="flex gap-5">
            <li><a href="#" class="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-white transition"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#" class="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-white transition"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#" class="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-white transition"><i class="fa fa-instagram"></i></a></li>
            <li><a href="#" class="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center text-white transition"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Content -->
      <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Contact Info -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <div class="mb-4">
            <p class="font-semibold text-white text-sm">Head Office</p>
            <p class="text-sm leading-relaxed">170 sector 2 pocket 4, Rohini Delhi 110085</p>
            <p class="text-sm">+919560876732</p>
          </div>
          <div>
            <p class="font-semibold text-white text-sm">Branch Office</p>
            <p class="text-sm leading-relaxed">2, Mand Complex, Kapurthala road - Jalandhar Road, Sangat Colony, Kapurthala chowk, Jalandhar, Punjab 144008</p>
            <p class="text-sm">+919899811344</p>
          </div>
        </div>

        <!-- Additional Links -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Additional Links</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/about" class="hover:text-primary transition">About Us</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-primary transition">Contact Us</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">Service</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-primary transition">Data Recovery</a></li>
            <li><a href="#" class="hover:text-primary transition">Computer Repair</a></li>
            <li><a href="#" class="hover:text-primary transition">Computer Hardware</a></li>
            <li><a href="#" class="hover:text-primary transition">Network Solutions</a></li>
            <li><a href="#" class="hover:text-primary transition">Technical Support</a></li>
          </ul>
        </div>

        <!-- About -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">About Get Set Network</h3>
          <p class="text-sm leading-relaxed">GET SET NETWORK is a desktop or laptop related problem solver and provide hardware solutions.</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 py-4 text-center text-sm">
        <p>Copyright 2021 All Right Reserved By <a href="#" class="text-primary hover:text-accent transition">Digi Code Solutions</a></p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { cart, isCartOpen, removeFromCart, cartTotal } = useCart()

const mobileMenuOpen = ref(false)

const menuItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact Us' },
]

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
