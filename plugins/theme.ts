import { _themes as availableThemes } from "#tailwind-config/daisyui";

export default defineNuxtPlugin((nuxtApp) => {
  const theme = ref<string>();

  nuxtApp.hook("app:mounted", () => {
    const doc = document.documentElement;

    new MutationObserver(() => {
      const newTheme = doc.getAttribute("data-theme") ?? undefined;
      if (theme.value === newTheme) return;

      theme.value = newTheme;
    }).observe(doc, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    watch(theme, (newTheme) => {
      if (newTheme !== (localStorage.getItem("daisy-theme") ?? undefined)) {
        if (newTheme) {
          localStorage.setItem("daisy-theme", newTheme);
        } else {
          localStorage.removeItem("daisy-theme");
        }
      }

      if (newTheme !== (doc.getAttribute("data-theme") ?? undefined)) {
        if (newTheme) {
          doc.setAttribute("data-theme", newTheme);
        } else {
          doc.removeAttribute("data-theme");
        }
      }
    });

    theme.value = localStorage.getItem("daisy-theme") ?? undefined;
  });

  const setTheme = (newTheme: string) => {
    theme.value = newTheme;
  };

  return {
    provide: {
      daisyTheme: {
        theme,
        availableThemes,
        setTheme,
      },
    },
  };
});
