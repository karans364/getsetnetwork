<template>
  <div class="page-banner">
    <div class="max-w-7xl mx-auto px-4">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true }
})
</script>
