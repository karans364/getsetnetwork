<template>
  <div class="font-poppins">
    <!-- Loader -->
    <div v-if="loading" class="loader_bg">
      <img src="/images/loading.gif" alt="Loading..." class="w-52" />
    </div>

    <!-- Top Bar -->
    <div class="bg-dark text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        <ul class="flex gap-4">
          <li><a href="#" class="text-white hover:text-accent transition"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#" class="text-white hover:text-accent transition"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#" class="text-white hover:text-accent transition"><i class="fa fa-instagram"></i></a></li>
          <li><a href="#" class="text-white hover:text-accent transition"><i class="fa fa-linkedin"></i></a></li>
        </ul>
        <p class="text-sm mt-2 sm:mt-0">Email Id- Admin@getsetnetwork.com</p>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NuxtLink to="/" class="flex-shrink-0">
          <img src="/images/logo.jpg" alt="Get Set Network" class="w-28" />
        </NuxtLink>

        <!-- Mobile Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-dark text-2xl focus:outline-none">
          <i :class="mobileMenuOpen ? 'fa fa-times' : 'fa fa-bars'"></i>
        </button>

        <!-- Menu -->
        <ul
          :class="[
            'lg:flex lg:items-center lg:gap-8 font-medium text-[15px]',
            mobileMenuOpen
              ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-lg px-6 py-4 gap-4 z-40'
              : 'hidden'
          ]"
        >
          <li v-for="item in menuItems" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="text-dark hover:text-primary transition"
              active-class="!text-primary font-semibold"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>

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
