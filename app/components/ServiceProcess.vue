<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2>Service <strong>Process</strong></h2>
        <span>Easy and effective way to get your device repaired.</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in services" :key="item.title" class="service-card">
          <img :src="item.icon" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '/icon/service1.png', title: 'Fast service', description: 'Quickie rapid, speedy, service is only a call away.' },
  { icon: '/icon/service2.png', title: 'Secure payments', description: 'The payment method is very secure & trustworthy.' },
  { icon: '/icon/service3.png', title: 'Expert team', description: 'We have a team full of experts in the market.' },
  { icon: '/icon/service4.png', title: 'Affordable services', description: 'As compared to the market the prices are very cheap.' },
  { icon: '/icon/service5.png', title: '30 Days warranty', description: 'One month warranty period for the product.' },
  { icon: '/icon/service6.png', title: 'Award winning', description: 'The services provided by GET SET NETWORK are award winning.' },
]
</script>
