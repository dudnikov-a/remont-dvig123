import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://remont-dvig123.pages.dev',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'always',
});
