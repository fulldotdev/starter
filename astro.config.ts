import type { AstroIntegration } from 'astro'
import { defineConfig } from 'astro/config'
import fullui from 'fulldev-ui/integration'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://example.com',
  integrations: [fullui({}) as AstroIntegration],
})
