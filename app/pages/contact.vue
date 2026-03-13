<template>
  <div>
    <PageBanner title="Contact Us" />

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 max-w-3xl">
        <form class="contact-form space-y-5" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <div class="text-center">
            <button type="submit" class="btn-send">Send</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Contact Us - Get Set Network' })

const handleSubmit = () => {
  alert('Thank you for contacting us! We will get back to you soon.')
}
</script>
