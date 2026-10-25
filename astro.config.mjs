// @ts-check
import {defineConfig} from 'astro/config';
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://iworb.github.io',
  base: '/portfolio',
  trailingSlash: 'never',
  integrations: [icon(), preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
