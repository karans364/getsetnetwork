<template>
  <div class="bg-[#f8fafc] min-h-screen pb-20 font-sans selection:bg-indigo-500 selection:text-white">
    <!-- Premium Hero Banner -->
    <div class="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden bg-gray-900">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black z-0"></div>
      
      <!-- Abstract Animated Shapes -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-screen"></div>
        <div class="absolute top-[40%] right-[10%] w-[40%] h-[60%] rounded-full bg-fuchsia-500/20 blur-[120px] mix-blend-screen"></div>
      </div>
      
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span class="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 text-sm font-bold tracking-widest uppercase mb-6">Next Gen Tech</span>
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-white drop-shadow-sm leading-tight">Elevate Your Lifestyle</h1>
        <p class="text-lg sm:text-xl font-medium text-indigo-100/80 mb-10 max-w-2xl">Discover unparalleled performance and stunning design with our expertly curated collection.</p>
        <button class="group relative px-8 py-4 bg-white text-indigo-900 font-bold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
           <span class="relative z-10 flex items-center gap-2">Explore Collection <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
           <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="max-w-[1500px] mx-auto px-4 sm:px-8 mt-12 flex flex-col lg:flex-row gap-10">
      
      <!-- Modern Sidebar -->
      <aside class="hidden lg:block w-72 flex-shrink-0">
        <div class="sticky top-28 bg-white/60 backdrop-blur-xl border border-white shadow-xl shadow-indigo-100/50 rounded-3xl p-6">
          <div class="mb-8">
             <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Categories</h3>
             <ul class="space-y-3 font-semibold text-gray-600">
               <li><a href="#" class="flex items-center justify-between hover:text-indigo-600 transition-colors bg-indigo-50/50 text-indigo-700 px-4 py-2 rounded-xl">All Products <span class="bg-indigo-100 px-2 py-0.5 rounded text-xs">24</span></a></li>
               <li><a href="#" class="flex items-center justify-between hover:text-indigo-600 transition-colors px-4 py-2 rounded-xl hover:bg-gray-50">Laptops <span class="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500">8</span></a></li>
               <li><a href="#" class="flex items-center justify-between hover:text-indigo-600 transition-colors px-4 py-2 rounded-xl hover:bg-gray-50">Smartphones <span class="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500">12</span></a></li>
               <li><a href="#" class="flex items-center justify-between hover:text-indigo-600 transition-colors px-4 py-2 rounded-xl hover:bg-gray-50">Accessories <span class="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-500">4</span></a></li>
             </ul>
          </div>
          
          <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
          
          <div>
            <h3 class="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Price Range</h3>
            <div class="space-y-4">
               <input type="range" min="0" max="1000" class="w-full accent-indigo-600" />
               <div class="flex items-center justify-between text-sm font-semibold text-gray-500">
                 <span>₹0</span>
                 <span>₹1,00,000+</span>
               </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Products Grid -->
      <div class="flex-grow">
        <!-- Control Bar -->
        <div class="flex flex-col sm:flex-row justify-between items-center bg-white/60 backdrop-blur-md border border-white shadow-sm rounded-2xl p-4 mb-8">
          <p class="font-medium text-gray-500 text-sm mb-4 sm:mb-0">Showing <span class="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">{{ products?.length || 0 }}</span> exclusive items</p>
          <div class="flex items-center gap-3">
             <span class="text-sm font-semibold text-gray-400">Sort by Option:</span>
             <select class="bg-white border-none shadow-sm text-gray-700 font-medium text-sm rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer transition">
               <option>Latest Arrivals</option>
               <option>Trending Popularity</option>
               <option>Price: High to Low</option>
               <option>Price: Low to High</option>
             </select>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex flex-col items-center justify-center py-32 bg-white/40 rounded-3xl border border-white shadow-xl shadow-indigo-100/20">
          <div class="relative w-20 h-20 mb-6">
            <div class="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
            <div class="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p class="text-indigo-900 font-semibold animate-pulse tracking-wide">Curating catalog...</p>
        </div>
          
        <!-- Premium Product Grid -->
        <div v-else-if="products && products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          <div v-for="product in products" :key="product.id" class="group relative bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-indigo-100 transition-all duration-500 ease-out flex flex-col cursor-pointer overflow-hidden pb-6">
            
            <!-- Optional Top Badge -->
            <div class="absolute top-4 left-4 z-10">
              <span class="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-pink-500/30">Hot</span>
            </div>

            <!-- Image Area -->
            <div class="relative w-full aspect-square mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 mix-blend-multiply overflow-hidden group-hover:bg-indigo-50/50 transition-colors">
               <img :src="product.image" :alt="product.name" class="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-700 ease-out" />
            </div>
            
            <!-- Details -->
            <div class="flex flex-col flex-grow px-1">
              <h3 class="text-lg font-bold text-gray-900 leading-tight mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors">{{ product.name }}</h3>
              
              <div class="flex items-center gap-1.5 mb-5">
                <div class="flex items-center text-amber-400">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-200" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <span class="text-xs font-bold text-gray-400 pl-1 border-l border-gray-200">4.8</span>
              </div>

              <div class="mt-auto flex items-end justify-between">
                <div>
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Price</span>
                  <div class="flex items-start gap-0.5">
                    <span class="text-sm font-semibold text-gray-900 mt-1">₹</span>
                    <span class="text-3xl font-black text-gray-900 tracking-tight">{{ product.price }}</span>
                  </div>
                </div>
                
                <button @click.stop="addToCart(product)" class="flex items-center justify-center w-12 h-12 bg-gray-50 text-gray-900 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-500/40 group-active:scale-95 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:-rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="flex flex-col items-center justify-center py-32 bg-white/40 rounded-3xl border border-white shadow-xl shadow-indigo-100/20 text-center px-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
          <p class="text-gray-500 max-w-sm mx-auto">We couldn't find any products matching your current filters. Try adjusting your search criteria.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { addToCart } = useCart()

useHead({ title: 'GetSetNetwork - Premium E-Commerce Store' })

const { data: products, pending } = useFetch('/api/products')
</script>
