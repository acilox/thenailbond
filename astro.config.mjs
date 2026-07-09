import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Hosted as a project page under the acilox org:
//   https://acilox.github.io/thenailbond/
// The `base` is required so every asset/link resolves under the subpath.
// At handoff / custom domain, set base to '/' and update `site`.
export default defineConfig({
  site: 'https://acilox.github.io',
  base: '/thenailbond',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
