// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/google-fonts", "@nuxt/image-edge"],
  googleFonts: {
    download: true,
    families: {
      "Noto+Sans": [400, 700],
      "Noto+Serif": [400, 700],
    },
  },
});
