<template>
  <div>
    <PageBanner title="Our Products" />

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-12">
          <span>We package the products with best services to make you a happy customer.</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="product in products" :key="product.name" class="product-card">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <span>{{ product.price }}</span>
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
