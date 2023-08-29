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
      .filter((v) => !!v);
    const totalLength = attrs.reduce(
      (prev, item) => (item ? prev + item.length : prev),
      0,
    );
    const merged = attrs.join(totalLength > 50 ? "\n  " : " ");
    const prefix = totalLength > 50 ? "\n  " : totalLength > 0 ? " " : "";
    const suffix = totalLength > 50 ? "\n" : "";
    return prefix + merged + suffix;
  });
