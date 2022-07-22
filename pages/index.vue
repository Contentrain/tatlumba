<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <section
      class="home-hero app-section mt-12 pb-16"
    >
      <div class="content md:max-w-lg p-0 md:pr-2">
        <h1 class="text-6xl font-semibold mb-6">
          {{ homePage.hero.title }}
        </h1>
        <p class="mb-8 text-xl">
          {{ homePage.hero.description }}
        </p>
        <button class="btn-primary flex items-center">
          <nuxt-link :to="homePage.hero.button.link">
            {{ homePage.hero.button.label }}<i class="ml-3" :class="homePage.hero.button.icon" />
          </nuxt-link>
        </button>
      </div>
      <div class="media p-0 md:pl-2">
        <img
          class="w-full h-auto rounded-2xl mt-12 md:mt-0"
          :src="homePage.hero.media.src"
          :alt="homePage.hero.media.alt"
        >
      </div>
    </section>
    <section class="references py-16 grid grid-cols-2  md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center justify-between">
      <div class="reference-trusted-logo-container flex justify-center col-span-2 md:col-span-1">
        <img
          src="/img/logoipsum-1.svg"
          alt="Reference logo"
          class="reference-logo w-1/2 md:w-full h-auto"
        >
      </div>
      <div v-for="logo in homePage.references.media" :key="logo" class="reference-logo-container">
        <img
          :src="logo.src"
          :alt="logo.alt"
          class="reference-logo w-full h-auto"
        >
      </div>
    </section>
    <section class="features py-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          {{ homePage.features.title }}
        </h2>
        <p>
          {{ homePage.features.description }}
        </p>
      </div>
      <div class="app-cards py-16">
        <div v-for="service in homePage.features.cards" :key="service" class="app-card p-6">
          <div class="icon">
            <i
              class="text-6xl text-violet-500"
              :class="service.icon"
            />
          </div>
          <div class="content mt-6">
            <h3 class="font-semibold text-lg mb-2">
              {{ service.title }}
            </h3>
            <p>
              {{ service.description }}
            </p>
          </div>
          <div class="link mt-6">
            <nuxt-link class="app-link" :to="service.button.link">
              {{ service.button.label }} <i class="ml-3" :class="service.button.icon" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          {{ homePage.banner.title }}
        </h2>
        <p class="text-white text-lg">
          {{ homePage.banner.description }}
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          <nuxt-link :to="homePage.banner.button.link">
            {{ homePage.banner.button.label }}<i class="ml-3" :class="homePage.banner.button.icon" />
          </nuxt-link>
        </button>
      </div>
    </section>
    <section class="studies py-16 mt-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          {{ homePage.studies.title }}
        </h2>
        <p>
          {{ homePage.studies.description }}
        </p>
      </div>
      <div class="app-cards pb-16 pt-4">
        <div v-for="study in homePage.studies.cards" :key="study" class="app-card p-6">
          <div class="image">
            <img
              class="w-full h-auto rounded-2xl"
              :src="study.media.src"
              :alt="study.media.alt"
            >
          </div>
          <div class="content mt-3">
            <h3 class="font-semibold text-lg mb-2">
              {{ study.title }}
            </h3>
          </div>
          <div class="button mt-6">
            <nuxt-link class="btn-primary-outline" :to="study.button.link">
              {{ study.button.label }}
              <i class="ml-3 align-middle" :class="study.button.icon" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="testimonials pb-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          {{ homePage.testimonials.title }}
        </h2>
        <p>
          {{ homePage.testimonials.description }}
        </p>
      </div>
      <div class="app-cards pb-32 pt-4">
        <div v-for="quote in homePage.testimonials.cards" :key="quote" class="app-card p-6">
          <div class="icon">
            <i class="text-5xl" :class="quote.icon" />
          </div>
          <div class="content mt-3">
            <h3 class="font-medium">
              {{ quote.description }}
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-sm flex items-center">
              <span class="w-4 border-b border-2 border-violet-500 mr-2" />{{ quote.name }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('home', () =>
  queryContent('contentrain', 'home').findOne()
)
const homePage = data.value.body[0]

</script>

<style scoped></style>
