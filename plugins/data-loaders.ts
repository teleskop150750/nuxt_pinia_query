import { DataLoaderPlugin } from "unplugin-vue-router/data-loaders";

export default defineNuxtPlugin({
  name: "data-loaders",
  dependsOn: ["nuxt:router"],
  setup(nuxtApp) {
    const appConfig = useAppConfig();

    nuxtApp.vueApp.use(DataLoaderPlugin, {
      router: nuxtApp.vueApp.config.globalProperties.$router,
      isSSR: import.meta.server,
      // other options...
    });
  },
});
