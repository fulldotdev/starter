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
          background: '#FFFFFF',
          base: '#8E8C99',
          brand: '#E93D82',
        },
        dark: {
          background: '#121113',
          base: '#8E8C99',
          brand: '#E93D82',
        },
      },
    }),
  ],
})
