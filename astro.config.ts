import { defineConfig } from 'astro/config'
import fulldevBlocks from 'fulldev-blocks/integration'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [
    UnoCSS(),
    fulldevBlocks({
      css: '/src/css/custom.css',
      colors: {
        theme: 'light',
        light: {
          background: '#F9FAFB',
          base: '#F9FAFB',
          brand: '#f50',
        },
      },
    }),
  ],
})
