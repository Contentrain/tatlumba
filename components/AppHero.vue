<template>
  <section class="p-24 relative app-banner" :style="cssVars">
    <div class="hero-background-image" />
    <div class="flex justify-between flex-wrap relative">
      <div class="content w-full lg:w-1/2">
        <h3 class="font-medium text-2xl text-violet-300 mb-4">
          {{ subtitle }}
        </h3>
        <h1 class="font-semibold text-5xl text-white mb-6">
          {{ title }}
        </h1>
        <p class="text-slate-50 text-lg">
          {{ description }}
        </p>
      </div>
      <div v-if="logo?.src" class="media flex justify-end items-end w-full lg:w-1/2 pt-12">
        <nuxt-link :to="logo.link">
          <img class="w-24 md:w-36 h-auto" :src="logo.src.split('public')[1]" :alt="logo.alt">
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    default: 'We are a team of creative people.',
    type: String
  },
  subtitle: {
    default: 'Our services',
    type: String
  },
  description: {
    default:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo libero laboriosam? Illum, nam. Repellendus aliquid, soluta, recusandae rem eaque dignissimos velit voluptatem tenetur?',
    type: String
  },
  media: {
    type: Object,
    default: () => {}
  },
  logo: {
    type: Object,
    default: () => {}
  }
})
const cssVars = computed(() => {
  return {
    '--background-url': `url(${props.media.src.split('public')[1]})`
  }
})
</script>

<style lang="postcss" scoped>
.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-5;
  background-image: var(--background-url);
}
</style>
