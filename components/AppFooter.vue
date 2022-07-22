<template>
  <footer class="bg-slate-50 py-12">
    <div class="container mx-auto flex justify-between flex-wrap w-full px-4 sm:px-0">
      <div class="footer-section w-full md:w-1/3 md:max-w-xs">
        <h3 class="font-semibold text-xl mb-4">
          {{ footerData.summary.title }}
        </h3>
        <div class="font-normal max-w-xs" v-html="footerData.summary.description" />
      </div>
      <div class="footer-section w-full md:w-1/3 md:max-w-xs py-12 md:py-0 text-left md:text-center">
        <h3 class="font-semibold text-xl mb-4">
          {{ footerData.socialLinks.title }}
        </h3>
        <div class="flex flex-row justify-center items-center">
          <div v-for="item in footerData.socialLinks.list" :key="item">
            <a class="social-link  mr-4 md:p-2 text-2xl" :href="item.URL" target="_blank" rel="noopener noreferrer">
              <i :class="item.icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-section w-full md:w-1/3 md:max-w-xs md:flex md:flex-col md:items-end">
        <div>
          <h3 class="font-semibold text-xl mb-4 md:w-max">
            {{ footerData.siteMap.title }}
          </h3>
          <ul class="sm:w-max">
            <li v-for="item in footerData.siteMap.list" :key="item">
              <nuxt-link :to="item.link">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const { data } = await useAsyncData('footer', () =>
  queryContent('contentrain', 'footer').findOne()
)
const footerData = data.value.body[0]

</script>

<style scoped></style>
