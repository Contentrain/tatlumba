<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <section
      class="home-hero app-section mt-12 pb-16"
    >
      <div class="content md:max-w-lg p-0 md:pr-2">
        <h1 class="text-6xl font-semibold mb-6">
          Your Businness needs a Voice
        </h1>
        <p class="mb-8 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
          quas dolorem, nostrum esse quisquam!
        </p>
        <button class="btn-primary flex items-center">
          Scedule a call <i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
      <div class="media p-0 md:pl-2">
        <img
          class="w-full h-auto rounded-2xl mt-12 md:mt-0"
          src="https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Hero image"
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
      <div v-for="logo in 4" :key="logo" class="reference-logo-container">
        <img
          v-if="logo !== 0"
          :src="'/img/logoipsum-' + (logo + 1) + '.svg'"
          alt="Reference logo"
          class="reference-logo w-full h-auto"
        >
      </div>
    </section>
    <section class="services py-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          Marketing strategy has to be the easies Tatlumbaa has to be the best.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sequi temporibus corrupti, minus, inventore dolorem ipsum officia
          ducimus omnis saepe explicabo dolore ipsam minima non magni dolorum
          architecto optio. Optio?
        </p>
      </div>
      <div class="app-cards py-16">
        <div v-for="service in 3" :key="service" class="app-card p-6">
          <div class="icon">
            <i
              v-if="service === 1"
              class="ri-chat-voice-fill text-6xl text-violet-500"
            />
            <i
              v-if="service === 2"
              class="ri-voiceprint-line text-6xl text-violet-500"
            />
            <i
              v-if="service === 3"
              class="ri-global-fill text-6xl text-violet-500"
            />
          </div>
          <div class="content mt-6">
            <h3 class="font-semibold text-lg mb-2">
              Marketing Strategy
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              repellendus officia reiciendis? Iusto numquam culpa, iste, tenetur
              officiis eius deleniti hic quam error eum voluptatibus iure
              excepturi animi repellat optio!
            </p>
          </div>
          <div class="link mt-6">
            <nuxt-link class="app-link" to="/services">
              Learn More <i class="ri-arrow-right-line ml-3" />
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
    <section class="services py-16 mt-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          We help marketing teams and start-ups raise dollars
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          sequi temporibus corrupti, minus, inventore dolorem ipsum officia
          ducimus .
        </p>
      </div>
      <div class="app-cards pb-16 pt-4">
        <div v-for="study in 3" :key="study" class="app-card p-6">
          <div class="image">
            <img
              class="w-full h-auto rounded-2xl"
              src="https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Stategy one"
            >
          </div>
          <div class="content mt-3">
            <h3 class="font-semibold text-lg mb-2">
              Case Study amet consectetur adipisicing elit {{ study }}
            </h3>
          </div>
          <div class="button mt-6">
            <nuxt-link class="btn-primary-outline" to="/">
              Read case study
              <i class="ri-arrow-right-up-line ml-3 align-middle" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="services pb-16">
      <div class="content max-w-2xl mx-auto text-center mt-8 mb-8">
        <h2 class="font-semibold text-4xl mb-6">
          Quality is no accident
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          inventore.
        </p>
      </div>
      <div class="app-cards pb-32 pt-4">
        <div v-for="study in 3" :key="study" class="app-card p-6">
          <div class="icon">
            <i class="ri-double-quotes-l text-5xl" />
          </div>
          <div class="content mt-3">
            <h3 class="font-medium">
              Wordify is fast, reliable, and passionate. They actually care
              about creating good content.
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-sm flex items-center">
              <span class="w-4 border-b border-2 border-violet-500 mr-2" />Evan Ferguson,
              Shopify
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
