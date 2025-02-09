// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  future: {
    compatibilityVersion: 4,
  },
  srcDir: "app/",
  serverDir: "server/",
});
