<template>
  <header>
    <div
      v-if="!mobileNav"
      class="header-desktop container mx-auto py-4 px-4 sm:px-0"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <nuxt-link to="/">
            <a class="text-2xl">
              <img class="w-24 md:w-36 h-auto" src="/img/logo.png" alt="Tatlumba">
            </a>
          </nuxt-link>
        </div>
        <nav class="hidden md:flex items-center">
          <nuxt-link
            to="/"
            class="nav-link px-3 py-1"
            exact-active-class="text-violet-500"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="nav-link px-3 py-1"
            exact-active-class="text-violet-500"
          >
            Services
          </nuxt-link>
          <nuxt-link
            to="/case-studies"
            class="nav-link px-3 py-1"
            exact-active-class="text-violet-500"
          >
            Case Studies
          </nuxt-link>
          <nuxt-link class="btn-primary ml-3" to="/contact">
            Contact
          </nuxt-link>
        </nav>
        <button
          class="block md:hidden btn-primary-outline"
          @click="mobileNav = true"
        >
          <i class="ri-menu-line" />
        </button>
      </div>
    </div>
    <div
      v-if="mobileNav"
      class="header-mobile flex flex-col fixed md:hidden w-screen h-screen bg-white z-10 p-4"
    >
      <div class="flex justify-between w-full">
        <div class="flex items-center">
          <nuxt-link to="/">
            <a class="text-2xl">
              <img class="w-24 h-auto" src="/img/logo.png" alt="Tatlumba">
            </a>
          </nuxt-link>
        </div>
        <button class="block md:hidden app-link" @click="mobileNav = false">
          <i class="ri-close-line text-2xl" />
        </button>
      </div>
      <nav class="flex flex-col mt-4">
        <nuxt-link
          to="/"
          class="nav-link py-1 mt-4"
          exact-active-class="text-violet-500"
        >
          Home
        </nuxt-link>
        <nuxt-link
          to="/services"
          class="nav-link py-1 mt-4"
          exact-active-class="text-violet-500"
        >
          Services
        </nuxt-link>
        <nuxt-link
          to="/case-studies"
          class="nav-link py-1 mt-4"
          exact-active-class="text-violet-500"
        >
          Case Studies
        </nuxt-link>
        <nuxt-link
          to="/contact"
          class="nav-link py-1 mt-4"
          exact-active-class="text-violet-500"
        >
          Contact
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileNav = ref(false)
watch(
  () => mobileNav.value,
  (val) => {
    if (val) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)
watch(
  () => route.path,
  (val) => {
    if (val) {
      mobileNav.value = false
    }
  }
)
</script>
