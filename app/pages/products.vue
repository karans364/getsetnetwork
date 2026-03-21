<template>
  <div class="bg-gray-100 min-h-screen pb-10">
    <!-- Hero Banner -->
    <div class="w-full bg-gray-900 text-white relative flex items-center justify-center overflow-hidden h-40 sm:h-56 lg:h-72 mb-4 group cursor-pointer border-b">
      <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80" alt="Special Offer Banner" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition duration-500" />
      <div class="relative z-10 text-center px-4">
        <h1 class="text-3xl sm:text-5xl font-extrabold mb-2 drop-shadow-lg text-[#f08804]">Mega Tech Sale</h1>
        <p class="text-base sm:text-xl font-medium drop-shadow-md text-white">Up to 40% Off on Top Brands</p>
        <button class="mt-4 bg-[#f08804] hover:bg-[#d87a03] text-gray-900 font-bold py-2 px-6 rounded-sm shadow transition">Shop Now</button>
      </div>
    </div>

    <!-- Main Content Layout -->
    <div class="max-w-[1400px] mx-auto px-2 sm:px-4 flex flex-col md:flex-row gap-4">
      <!-- Sidebar Filters: Amazon Style -->
      <aside class="hidden md:block w-64 flex-shrink-0 bg-transparent self-start pr-4">
        <div class="mb-4">
          <h3 class="font-bold text-sm mb-2 text-gray-900">Department</h3>
          <ul class="space-y-1.5 text-sm text-gray-800">
            <li><a href="#" class="hover:text-[#c45500] hover:underline font-bold text-gray-900">&lt; Any Department</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline ml-2 text-gray-700">Computers & Accessories</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline ml-2 text-gray-700">Mobiles</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline ml-2 text-gray-700">Fashion</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline ml-2 text-gray-700">Home & Kitchen</a></li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="font-bold text-sm mb-2 text-gray-900">Customer Review</h3>
          <ul class="space-y-1.5 text-sm text-gray-800">
            <li class="flex items-center gap-1 cursor-pointer group">
              <span class="text-[#f08804] tracking-widest text-lg leading-none">★★★★☆</span>
              <span class="group-hover:text-[#c45500] group-hover:underline">& Up</span>
            </li>
            <li class="flex items-center gap-1 cursor-pointer group">
              <span class="text-[#f08804] tracking-widest text-lg leading-none">★★★☆☆</span>
              <span class="group-hover:text-[#c45500] group-hover:underline">& Up</span>
            </li>
          </ul>
        </div>

        <div class="mb-4">
          <h3 class="font-bold text-sm mb-2 text-gray-900">Price</h3>
          <ul class="space-y-1.5 text-sm text-gray-800">
            <li><a href="#" class="hover:text-[#c45500] hover:underline">Under ₹1,000</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline">₹1,000 - ₹5,000</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline">₹5,000 - ₹10,000</a></li>
            <li><a href="#" class="hover:text-[#c45500] hover:underline">Over ₹10,000</a></li>
          </ul>
        </div>
      </aside>

      <!-- Products Grid -->
      <div class="flex-grow">
        <div class="bg-white p-3 border border-gray-200 rounded-sm shadow-sm mb-4 flex justify-between items-center text-sm">
          <span class="text-gray-900">1-{{ products?.length || 0 }} of over {{ products?.length || 0 }} results for <span class="text-[#c45500] font-bold">"All Products"</span></span>
          <select class="border border-gray-300 p-1.5 rounded-md bg-gray-50 outline-none hover:bg-gray-100 cursor-pointer shadow-sm text-xs">
             <option>Sort by: Featured</option>
             <option>Price: Low to High</option>
             <option>Price: High to Low</option>
             <option>Newest Arrivals</option>
          </select>
        </div>

        <!-- Loading State -->
        <div v-if="pending" class="flex items-center justify-center h-64 bg-white border border-gray-200 rounded-sm shadow-sm">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-[#f08804]"></div>
        </div>
          
        <div v-else-if="products && products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div v-for="product in products" :key="product.id" class="group bg-white flex flex-col p-4 border border-gray-200 rounded-sm hover:shadow-lg transition-shadow cursor-pointer relative overflow-hidden">
            <!-- Product Image -->
            <div class="relative w-full h-48 bg-gray-50 mb-4 flex items-center justify-center mix-blend-multiply transition-transform duration-300">
               <img :src="product.image" :alt="product.name" class="max-h-full max-w-full object-contain mix-blend-multiply" />
            </div>
            
            <div class="flex flex-col flex-grow">
              <!-- Title -->
              <h3 class="text-[15px] text-gray-900 group-hover:text-[#c45500] line-clamp-2 leading-snug mb-1">{{ product.name }}</h3>
              
              <!-- Fake Reviews -->
              <div class="flex items-center gap-1 mb-2">
                <span class="text-[#f08804] text-sm tracking-widest -ml-0.5">★★★★<span class="text-gray-300">★</span></span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[#007185] cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                <span class="text-[#007185] text-xs hover:underline cursor-pointer hover:text-[#c45500]">842</span>
              </div>

              <!-- Price -->
              <div class="flex items-start gap-0.5 mb-1">
                <span class="text-[11px] text-gray-900 font-medium mt-0.5">₹</span>
                <span class="text-2xl font-medium text-gray-900 leading-none">{{ product.price }}</span>
              </div>
              
              <!-- Prime placeholder -->
              <div class="text-xs text-gray-600 mb-3 flex items-center gap-1">
                <span class="text-[#00a8e1] font-bold italic">&#10003; prime</span>
                <span>Get it by <span class="font-bold text-gray-900">Tomorrow</span></span>
              </div>

              <div class="mt-auto">
                <button @click.stop="addToCart(product)" class="w-full bg-[#ffd814] hover:bg-[#f7ca00] active:bg-[#f2c200] text-gray-900 text-[13px] font-medium py-1.5 px-4 rounded-full shadow-sm transition-colors border border-transparent hover:border-[#F2C200]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="bg-white p-10 border border-gray-200 rounded-sm shadow-sm text-center text-gray-600 font-medium">
          No products match your filters.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { addToCart } = useCart()

useHead({ title: 'Amazon.in: Buy Electronics, Apparel, Books & More' })

const { data: products, pending } = useFetch('/api/products')
</script>
