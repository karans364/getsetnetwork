<template>
  <div>
    <PageBanner title="Our Products" />

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-12">
          <span>We package the products with best services to make you a happy customer.</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="product in products" :key="product.name" class="product-card flex flex-col justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-center">
            <img :src="product.image" :alt="product.name" class="w-full h-48 object-contain mb-4" />
            
            <div class="flex flex-col flex-grow justify-end">
              <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ product.name }}</h3>
              <span class="text-xl font-bold text-gray-900 mb-4">{{ product.price }}</span>
              
              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Products - Get Set Network' })

const products = [
  { image: '/icon/p1.jpg', name: 'Board', price: '₹ 5000' },
  { image: '/icon/p2.jpg', name: 'Cable', price: '₹ 50' },
  { image: '/icon/p3.jpg', name: 'Pen drive', price: '₹ 400' },
  { image: '/icon/p4.jpg', name: 'RAM', price: '₹ 1800' },
  { image: '/icon/p5.jpg', name: 'CPU', price: '₹ 8500' },
  { image: '/icon/p6.jpg', name: 'Hard drive', price: '₹ 3200' },
  { image: '/icon/p7.jpg', name: 'Cabinet', price: '₹ 3000' },
  { image: '/icon/p8.jpg', name: 'Combo', price: '₹ 10000' },
  { image: '/icon/p9.jpg', name: 'Graphic Card', price: '₹ 2500' },
  { image: '/icon/p10.jpg', name: 'Cartridge', price: '₹ 3800' },
  { image: '/icon/p11.jpg', name: 'UPS', price: '₹ 5000' },
  { image: '/icon/p12.jpg', name: 'Mouse', price: '₹ 350' },
]
</script>
