import daisyuiPlugin from "daisyui";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  tailwindcss: {
    exposeConfig: true,
    config: {
      plugins: [daisyuiPlugin],
    },
  },
});
