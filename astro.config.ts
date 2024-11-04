import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import fulldev from 'fulldev-ui/integration'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // TODO: change this to your site's URL
  site: 'https://full.dev',
  devToolbar: {
    enabled: false,
  },
  experimental: {
    contentLayer: true,
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    fulldev({
      company: 'Fulldev Starter',
      favicon: 'src/images/favicon.svg',
      css: '/src/css/custom.css',
      injectRoutes: true,
      basePreset: 'base',
    }),
  ],
})
