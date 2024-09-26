import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import fulldev from 'fulldev-ui/integration'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // TODO: change this to your site's URL
  site: 'https://full.dev',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    UnoCSS(),
    fulldev({
      css: '/src/css/custom.css',
      injectRoutes: true,
      // TODO: choose default theme and colors, documented here: https://ui.full.dev/overview/theming#colors
      colors: {
        theme: 'light',
        light: {
          background: '#FDFDFD',
          base: '#EBEBEB',
          brand: '#f50',
        },
        dark: {
          background: '#111',
          base: '#222',
          brand: '#f50',
        },
      },
    }) as any,
  ],
})
