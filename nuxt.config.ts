// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  features: {
    noScripts: true
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-78YQK5LSSD"
      }
    }
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/content'
  ]
})
