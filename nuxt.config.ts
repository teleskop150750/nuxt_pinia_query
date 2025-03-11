// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  experimental: {
    typedPages: true,
  },

  modules: ["@pinia/nuxt", "@pinia/colada-nuxt"],
});
