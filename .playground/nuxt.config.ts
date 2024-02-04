export default defineNuxtConfig({
  extends: "..",
  modules: ["@vueuse/nuxt", "@nuxt/image"],
  ssr: false,
  typescript: {
    includeWorkspace: true,
  },
});
