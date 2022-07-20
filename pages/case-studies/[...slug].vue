<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <AppHero class="mt-12 mb-32" />
    <article class="prose mx-auto">
      <ContentDoc />
    </article>
    <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap mb-40"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          Let’s spark conversations together
        </h2>
        <p class="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          Schedule a call <i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
