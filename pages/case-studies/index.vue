<template>
  <div class="container px-4 sm:px-0 mx-auto">
    <AppHero
      class="mt-12 mb-32"
      :title="caseStudiesPage.appHero.title"
      :subtitle="caseStudiesPage.appHero.subtitle"
      :description="caseStudiesPage.appHero.description"
      :media="caseStudiesPage.appHero.media"
      :logo="caseStudiesPage.appHero.logo"
    />
    <AppSection
      v-for="section in caseStudiesPage.sections"
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
          {{ caseStudiesPage.banner.title }}
        </h2>
        <p class="text-white text-lg">
          {{ caseStudiesPage.banner.description }}
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          <a :href="caseStudiesPage.banner.button.link">
            {{ caseStudiesPage.banner.button.label }} <i class="ml-3" :class="caseStudiesPage.banner.button.icon" />
          </a>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data } = await useAsyncData('studies', () =>
  queryContent('contentrain', 'studies').findOne()
)
const caseStudiesPage = data.value.body[0]

</script>
