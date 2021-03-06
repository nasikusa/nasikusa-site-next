import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  components: false,
  ssr: false,
  // buildModules: ["@nuxtjs/tailwindcss"],
  css: [
    "@/assets/css/reset.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/global.css",
  ], // <= ドキュメントからさらに追加
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
