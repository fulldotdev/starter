import { defineConfig } from 'astro/config'
import fulldevBlocks from 'fulldev-blocks/integration'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [UnoCSS(), fulldevBlocks()],
})
