// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Use the Firebase URL until www.sunshinerubberph.com is connected in Hosting.
  site: 'https://sunshinerubbertech.web.app',
  output: 'static',
  integrations: [react(), sitemap()],
  // This machine's inotify watch limit is exhausted; use polling (no inotify) for
  // dev and skip watching large static dirs. Verification primarily uses build+preview.
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
        ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**', '**/.vercel/**', '**/public/**'],
      },
    },
  },
});
