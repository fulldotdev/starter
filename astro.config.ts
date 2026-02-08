import { defineConfig } from "astro/config"

import fulldevIntegration from "./src/lib/integration"

export default defineConfig({
  integrations: [
    fulldevIntegration({
      site: "https://ui.full.dev",
      name: "fulldev/ui",
      favicon: "src/assets/logo-fulldev.svg",
      i18n: {
        defaultLocale: "en",
        locales: ["en", "nl", "de"],
      },
    }),
  ],
})
