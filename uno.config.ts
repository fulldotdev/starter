import fulldevUI from 'fulldev-ui/unocss'
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), fulldevUI],
})
