import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['remixicon/fonts/remixicon.css', '~/assets/css/tailwind.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  // https://content.nuxtjs.org
  content: {
    // navigation: {
    //   fields: ['navTitle']
    // },
    // highlight: {
    //   // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
    //   theme: 'dracula'
    // }
  }
})
