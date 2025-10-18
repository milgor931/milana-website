import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://milana.fyi',
  base: '/', // important — makes Astro generate absolute URLs
  integrations: [mdx(), preact()],
  build: {
    assets: '_astro', // default folder for CSS/JS bundles
  },
  outDir: 'dist', // where the build output goes
});
