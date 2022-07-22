<template>
  <section class="app-section" :class="reverse ? 'flex-row-reverse' : ''">
    <div class="media">
      <img :src="section.media.src.split('public')[1]" :alt="section.media.alt">
    </div>
    <div class="content">
      <h1 class=" text-4xl font-semibold mb-6">
        {{ section.title }}
      </h1>
      <p>{{ section.description }}</p>
      <button class="btn-primary-lighter flex items-center mt-8">
        <nuxt-link :to="section.button.link">
          {{ section.button.label }} <i class=" ml-3" :class="section.button.icon" />
        </nuxt-link>
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  section: {
    type: Array,
    default: () => []
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped></style>
