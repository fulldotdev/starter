// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import fulldevUI from 'fulldev-ui/unocss'

export default defineConfig({
    presets: [presetUno(), fulldevUI],
})