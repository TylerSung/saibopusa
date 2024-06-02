import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  css: {
    global: ["src/pages/global.css"]
  },
  integrations: [icon()]
});