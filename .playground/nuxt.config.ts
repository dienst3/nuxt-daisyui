export default defineNuxtConfig({
  extends: "..",
  modules: ["@vueuse/nuxt", "@nuxt/image"],
  typescript: {
    includeWorkspace: true,
  },
});
