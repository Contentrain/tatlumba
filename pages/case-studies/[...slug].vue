<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <ContentDoc v-slot="{doc}">
      <AppHero
        class="mt-12 mb-32"
        :title="doc.appHero.title"
        :subtitle="doc.appHero.subtitle"
        :description="doc.appHero.description"
        :media="doc.appHero.media"
        :logo="doc.appHero.logo"
      />
      <article class="prose mx-auto">
        <ContentDoc />
      </article>
      <section
        class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap mb-40"
      >
        <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
          <h2 class="text-white text-4xl font-semibold mb-4">
            {{ doc.banner.title }}
          </h2>
          <p class="text-white text-lg">
            {{ doc.banner.description }}
          </p>
        </div>
        <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
          <button class="btn-primary">
            <nuxt-link :to="doc.banner.button.link">
              {{ doc.banner.button.label }} <i class="ml-3" :class="doc.banner.button.icon" />
            </nuxt-link>
          </button>
        </div>
      </section>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
