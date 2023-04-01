declare module "@nuxt/schema" {
  interface AppConfig {
    nuxtIcon?: {
      size?: string | false;
      class?: string;
      aliases?: { [alias: string]: string };
    };
  }
}

export {};
