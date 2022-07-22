<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <AppHero
      class="mt-12 mb-32"
      :title="servicesPage.appHero.title"
      :subtitle="servicesPage.appHero.subtitle"
      :description="servicesPage.appHero.description"
      :media="servicesPage.appHero.media"
      :logo="servicesPage.appHero.logo"
    />
    <AppCounter class="mb-32" :cards="servicesPage.details" />
    <AppSection
      v-for="section in servicesPage.sections"
      :key="section"
      :reverse="section.index % 2 === 0"
      class="mb-40"
      :section="section"
    />
    <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap mb-40"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          {{ servicesPage.banner.title }}
        </h2>
        <p class="text-white text-lg">
          {{ servicesPage.banner.description }}
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          <nuxt-link :to="servicesPage.banner.button.link">
            {{ servicesPage.banner.button.label }}<i class="ml-3" :class="servicesPage.banner.button.icon" />
          </nuxt-link>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('services', () =>
  queryContent('contentrain', 'services').findOne()
)
const servicesPage = data.value.body[0]

</script>
