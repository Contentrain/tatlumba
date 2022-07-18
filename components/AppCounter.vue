<template>
  <section class="app-cards">
    <div
      v-for="(number, numberKey) in numbers"
      :key="numberKey"
      class="app-card text-center"
    >
      <h1 class="font-semibold text-5xl mb-4">
        +{{ animatedNumbers[numberKey] }}k
      </h1>
      <p class="font-medium text-xl max-w-xs mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        inventore.
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  numbers: {
    type: Object,
    default () {
      return {
        first: 22,
        second: 4,
        third: 58
      }
    }
  }
})
const animatedNumbers = reactive(Object.keys(props.numbers).reduce((acc, key) => {
  acc[key] = 0
  return acc
}, {}))
onMounted(() => {
  Object.keys(props.numbers).forEach((key) => {
    setInterval(() => {
      if (animatedNumbers[key] < props.numbers[key]) {
        animatedNumbers[key] += 1
      }
      if (animatedNumbers[key] === props.numbers[key]) {
        clearInterval([key])
      }
    }, 1000 / props.numbers[key])
  })
})
</script>
