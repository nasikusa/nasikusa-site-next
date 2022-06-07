import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: "node",
  },
  ssr: false,
  // buildModules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/tailwind.css", "@/assets/css/global.css"], // <= ドキュメントからさらに追加
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
