<template>
  <div>
    <!-- Hero Carousel -->
    <section class="carousel-container relative">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        :class="{ active: currentSlide === index }"
      >
        <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
        <div class="carousel-caption">
          <h1>
            Our<br />
            <span class="black-bold">Latest</span><br />
            <span class="yellow-bold">Product</span>
          </h1>
          <p class="font-semibold">{{ slide.text }}</p>
          <NuxtLink :to="slide.link" class="btn-cta">{{ slide.linkText }}</NuxtLink>
        </div>
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/30"></div>
      </div>
      <button class="carousel-arrow prev" @click="prevSlide"><i class="fa fa-angle-left"></i></button>
      <button class="carousel-arrow next" @click="nextSlide"><i class="fa fa-angle-right"></i></button>
    </section>

    <!-- Why Choose Us -->
    <WhyChooseUs />

    <!-- Service Process -->
    <ServiceProcess />

    <!-- Our Products -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-12">
          <h2>Our <strong>Products</strong></h2>
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

    <!-- Client Testimonials -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-10">
          <h2>What Clients <strong>Say?</strong></h2>
        </div>
        <div class="relative">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            :class="['testimonial-card transition-opacity duration-500', currentReview === index ? 'block' : 'hidden']"
          >
            <img :src="review.avatar" :alt="review.name" />
            <div class="name">{{ review.name }}</div>
            <div class="date">{{ review.date }}</div>
            <p class="max-w-2xl mx-auto">{{ review.text }}</p>
          </div>
          <div class="flex justify-center gap-2 mt-6">
            <button
              v-for="(_, index) in reviews"
              :key="index"
              @click="currentReview = index"
              :class="['w-3 h-3 rounded-full transition', currentReview === index ? 'bg-primary' : 'bg-gray-300']"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Request a Free Quote -->
    <section class="quote-banner">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="flex items-center gap-3">
            REQUEST A FREE QUOTE
            <img src="/icon/calll.png" alt="call" class="w-8 inline" />
          </h3>
          <p>Get answers and advice from people you want it from.</p>
        </div>
        <a href="#" class="btn-quote">Get Quote</a>
      </div>
    </section>

    <!-- Google Map -->
    <section class="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.25905229412!2d75.49101766428608!3d31.322518085838063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1714632445943!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Get Set Network - Home' })

const currentSlide = ref(0)
const currentReview = ref(0)

const slides = [
  { image: '/images/banner1.jpg', text: 'We have a vast range of products to do your daily hustle at an ease.', link: '/products', linkText: 'See More Products' },
  { image: '/images/banner2.jpg', text: 'Pocket friendly and cost efficient products are just a click away.', link: '/products', linkText: 'See More Products' },
  { image: '/images/banner3.jpg', text: 'Need computer service - we are here to serve you.', link: '/contact', linkText: 'Contact Us' },
]

const products = [
  { image: '/icon/p1.jpg', name: 'Board', price: '₹ 5000' },
  { image: '/icon/p2.jpg', name: 'Cable', price: '₹ 50' },
  { image: '/icon/p3.jpg', name: 'Pen drive', price: '₹ 400' },
  { image: '/icon/p4.jpg', name: 'RAM', price: '₹ 1800' },
  { image: '/icon/p5.jpg', name: 'CPU', price: '₹ 8500' },
  { image: '/icon/p6.jpg', name: 'Hard drive', price: '₹ 3200' },
  { image: '/icon/p7.jpg', name: 'Cabinet', price: '₹ 3000' },
  { image: '/icon/p8.jpg', name: 'Combo', price: '₹ 10000' },
]

const reviews = [
  {
    avatar: '/images/karan_sm_pick.jpg',
    name: 'Roohan',
    date: '12/02/2021',
    text: 'You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.'
  },
  {
    avatar: '/images/karan_sm_pic1.jpg',
    name: 'Vinayak',
    date: '22/07/2022',
    text: "I recently discovered GET SET NETWORK while searching for a specific product. Not only did they have the item I was looking for, but their selection was vast, and the prices were competitive. I'm super happy with my purchase and will continue to shop at GET SET NETWORK."
  },
  {
    avatar: '/images/karan_sm_pic2.jpg',
    name: 'Venketesh',
    date: '07/05/2024',
    text: "I couldn't be happier with my experience. Their website was user-friendly, making it easy to find the perfect item. I received my order promptly. The product arrived in excellent condition, exactly as described. Highly recommended!"
  },
]

const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % slides.length }
const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }

let slideInterval
onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})
onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>
