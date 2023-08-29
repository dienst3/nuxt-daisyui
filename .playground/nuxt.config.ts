export default defineNuxtConfig({
  extends: "..",
  modules: ["@vueuse/nuxt"],
  ssr: false,
  typescript: {
    includeWorkspace: true,
  },
});
