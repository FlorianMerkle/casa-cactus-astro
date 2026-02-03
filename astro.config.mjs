// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual domain when deploying
  site: 'https://casa-cactus-sagres.com',
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});