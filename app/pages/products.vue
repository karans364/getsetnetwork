<template>
  <div>
    <PageBanner title="Our Products" />

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-12">
          <span>We package the products with best services to make you a happy customer.</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative min-h-[400px]">
          <!-- Loading State -->
          <div v-if="pending" class="absolute inset-0 flex items-center justify-center col-span-full">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          
          <!-- Products -->
          <div v-else-if="products && products.length > 0" v-for="product in products" :key="product.id" class="product-card flex flex-col justify-between p-4 border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-center cursor-pointer">
            <div class="relative w-full pb-[100%] overflow-hidden bg-gray-50 rounded-lg mb-4">
               <img :src="product.image" :alt="product.name" class="absolute inset-0 w-full h-full object-contain p-2" />
            </div>
            
            <div class="flex flex-col flex-grow justify-end">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ product.name }}</h3>
              <p v-if="product.description" class="text-sm text-gray-500 mb-4 line-clamp-2 h-10">{{ product.description }}</p>
              <span class="text-2xl font-black text-gray-900 mb-4">{{ product.price }}</span>
              
              <button @click.stop="addToCart(product)" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>

          <div v-else class="col-span-full text-center py-20 text-gray-500 text-lg">
            No products available at the moment.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { addToCart } = useCart()

useHead({ title: 'Products - Get Set Network' })

const { data: products, pending } = useFetch('/api/products')
</script>
