import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import fulldev from 'fulldev-ui/integration'
import favicons from 'astro-favicons'

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
      generateImageEntries: true, // set to true if you want to use records for you alt texts with the image-component, documented here: https://ui.full.dev/overview/content-layer/#image-alt-collection
      // TODO: choose default theme and colors, documented here: https://ui.full.dev/overview/theming#colors
      colors: {
        theme: 'dark',
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
    }),
    favicons({
      path: 'src/images/favicon.svg',
      masterPicture: 'src/images/favicon.svg',
      appName: 'Fulldev Starter',
      appShortName: 'Fulldev Starter',
    }),
  ],
})
