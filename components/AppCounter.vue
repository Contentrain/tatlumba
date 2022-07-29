<template>
  <section class="app-cards">
    <div
      v-for="(number, numberKey) in cards"
      :key="numberKey"
      class="app-card text-center"
    >
      <h1 class="font-semibold text-5xl mb-4">
        +{{ animatedNumbers[numberKey] }}k
      </h1>
      <p class="font-medium text-xl max-w-xs mx-auto">
        {{ number.description }}
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  cards: {
    type: Object,
    default () {
      return {
        first: {
          value: 22,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        second: {
          value: 4,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        third: {
          value: 58,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
      }
    }
  }

})
const counters = {
  first: props.cards.first.value,
  second: props.cards.second.value,
  third: props.cards.third.value
}
const animatedNumbers = reactive(Object.keys(counters).reduce((acc, key) => {
  acc[key] = 0
  return acc
}, {}))
onMounted(() => {
  Object.keys(counters).forEach((key) => {
    setInterval(() => {
      if (animatedNumbers[key] < counters[key]) {
        animatedNumbers[key] += 1
      }
      if (animatedNumbers[key] === counters[key]) {
        clearInterval([key])
      }
    }, 1000 / counters[key])
  })
})
</script>
