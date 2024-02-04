/* eslint-disable import/no-internal-modules */
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import xml from "highlight.js/lib/languages/xml";

export default defineNuxtPlugin((nuxtApp) => {
  hljs.registerLanguage("xml", xml);
  nuxtApp.vueApp.use(hljsVuePlugin);
});
