<template>
  <div>
    <PageBanner title="About" />

    <!-- About Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="about-img">
          <img src="/images/pc_layout.jpg" alt="About Get Set Network" />
        </div>
        <div class="about-text">
          <h3>Who is GET SET NETWORK</h3>
          <p>A broad range of advanced hardware and equipment, ranging from personal computers and laptop to printers and networking tools.</p>
          <p>All of these tech hardware which we have are light years ahead of earlier products and are packed with the latest technology.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <WhyChooseUs />

    <!-- Service Process -->
    <ServiceProcess />
  </div>
</template>

<script setup>
useHead({ title: 'About Us - Get Set Network' })
</script>
