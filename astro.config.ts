import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import fulldev from 'fulldev-ui/integration'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://full.dev',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    UnoCSS(),
    fulldev({
      css: '/src/css/custom.css',
      injectRoutes: true,
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
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})