<template>
  <section class="app-section" :class="reverse ? 'flex-row-reverse' : ''">
    <div class="media">
      <img :src="imageUrl" :alt="title">
    </div>
    <div class="content">
      <h1 class=" text-4xl font-semibold mb-6">
        {{ title }}
      </h1>
      <p>{{ description }}</p>
      <button class="btn-primary-lighter flex items-center mt-8">
        {{ buttonText }} <i class="ri-arrow-right-up-line ml-3" />
      </button>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'A Amazing Title for here'
  },
  description: {
    type: String,
    default:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nesciunt temporibus, modi delectus illo blanditiis laudantium sed soluta consequatur voluptatum, molestiae consectetur voluptas officiis harum. Nesciunt, odio? Commodi, veniam nobis?'
  },
  buttonText: {
    type: String,
    default: 'Scedule Call'
  },
  imageUrl: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="postcss" scoped></style>
