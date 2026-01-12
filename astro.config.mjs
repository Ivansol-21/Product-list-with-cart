// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ivansol-21.github.io",
  // base: "/Product-list-with-cart/",
  vite: {
    plugins: [tailwindcss()],
  },
});
