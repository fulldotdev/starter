import bookshop from '@bookshop/astro-bookshop'
import yaml from '@rollup/plugin-yaml'
import { defineConfig } from 'astro/config'
import fulldevBlocks from 'fulldev-blocks/integration'
import UnoCSS from 'unocss/astro'
// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [UnoCSS(), fulldevBlocks(), bookshop()],
  vite: {
    plugins: [yaml() as any],
  },
})
