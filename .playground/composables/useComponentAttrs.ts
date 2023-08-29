export const useComponentAttrs = (input: { [k: string]: Ref<any> }) =>
  computed(() => {
    const attrs = Object.entries(input)
      .map(([k, v]) => {
        if (v.value === undefined) {
          return undefined;
        }

        if (v.value === true) {
          return k;
        }

        if (v.value === false) {
          return undefined;
        }

        if (v.value === "") {
          return undefined;
        }

        return `${k}="${v.value}"`;
      })
      .filter((v) => !!v)
      .join(" ");
    const prefix = attrs.length > 0 ? " " : "";
    return prefix + attrs;
  });
