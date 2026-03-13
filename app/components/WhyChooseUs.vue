<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="section-title text-center mb-12">
        <h2>Why <strong>choose us</strong></h2>
        <span>Fastest repair service at its best price!</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in features" :key="item.title" class="feature-card">
          <img :src="item.icon" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/contact" class="btn-readmore">Contact Us</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: '/icon/1.png', title: 'Data Recovery', description: "Lost data! Don't worry GET SET NETWORK is here." },
  { icon: '/icon/2.png', title: 'Computer Repair', description: "Need Repair! Don't worry GET SET NETWORK is here." },
  { icon: '/icon/3.png', title: 'PC Products', description: "Need hardware! Don't worry we are here." },
  { icon: '/icon/4.png', title: 'Network Solutions', description: "Problem in computer networking! Don't worry GET SET NETWORK is here." },
]
</script>
