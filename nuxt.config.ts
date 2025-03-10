// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  experimental: {
    typedPages: true,
  },

  modules: ["@pinia/nuxt", "@pinia/colada-nuxt"],
});