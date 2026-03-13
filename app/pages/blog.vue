<template>
  <div>
    <PageBanner title="Blog" />

    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="section-title text-center mb-12">
          <span>It is a long established fact that a reader will be distracted by the readable<br />content of a page when looking at its layout.</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="post in posts" :key="post.title + post.id" class="blog-card">
            <img :src="post.image" :alt="post.title" />
            <div class="blog-content">
              <h3>{{ post.title }}</h3>
              <div class="blog-meta">
                <span>{{ post.date }}</span>
                <span>Comment</span>
              </div>
              <p>{{ post.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Blog - Get Set Network' })

const posts = [
  { id: 1, image: '/images/1.jpg', title: 'Live With Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 2, image: '/images/2.jpg', title: 'Best Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 3, image: '/images/3.jpg', title: 'Live With Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 4, image: '/images/3.jpg', title: 'Live With Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 5, image: '/images/1.jpg', title: 'Live With Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
  { id: 6, image: '/images/2.jpg', title: 'Best Music', date: 'March 20', excerpt: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.' },
]
</script>
