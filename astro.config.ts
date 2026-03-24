import { defineConfig } from "astro/config"

import starterIntegration from "./src/lib/integration"

export default defineConfig({
  integrations: [
    starterIntegration({
      site: "https://example.com",
      name: "Fulldev Starter",
      favicon: "src/assets/fulldev-mark.svg",
      i18n: {
        defaultLocale: "en",
        locales: ["en", "nl"],
      },
    }),
  ],
})
