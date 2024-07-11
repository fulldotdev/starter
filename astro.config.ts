import react from '@astrojs/react'
import yaml from '@rollup/plugin-yaml'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [UnoCSS(), react()],
  vite: {
    plugins: [yaml()],
  },
})
