import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import type { AstroConfig, AstroIntegration } from "astro"
import favicons from "astro-favicons"
import robotsTxt from "astro-robots-txt"
import { fontProviders } from "astro/config"

export interface Options {
  site: string
  name: string
  i18n: AstroConfig["i18n"]
  fonts: {
    sans: string
    serif?: string
    mono?: string
  }
  favicon: string
}

export default function ({
  i18n,
  fonts,
  ...options
}: Options): AstroIntegration {
  return {
    name: "fulldev/ui",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          site: options.site,
          trailingSlash: "always",
          image: {
            responsiveStyles: true,
            breakpoints: [640, 750, 828, 1080, 1280, 1668, 2048, 2560],
            layout: "full-width",
            objectFit: "contain",
            objectPosition: "center",
          },
          prefetch: {
            prefetchAll: true,
          },
          devToolbar: {
            enabled: false,
          },
          i18n: {
            routing: {
              prefixDefaultLocale: false,
              redirectToDefaultLocale: false,
              fallbackType: "redirect",
            },
            ...i18n,
          },
          experimental: {
            fonts: [
              Object.entries(options.fonts).map(([key, value]) => ({
                provider: fontProviders.google(),
                cssVariable: `--font-${key}`,
                name: value,
                weights: [
                  "100",
                  "200",
                  "300",
                  "400",
                  "500",
                  "600",
                  "700",
                  "800",
                  "900",
                ],
              })),
            ],
          },
          integrations: [
            robotsTxt(),
            sitemap({
              changefreq: "weekly",
              lastmod: new Date(),
              i18n: {
                defaultLocale: options.defaultLocale,
                locales: Object.fromEntries(
                  options.locales.map((locale) => [locale, locale])
                ),
              },
            }),
            favicons({
              input: {
                favicons: [options.favicon],
              },
              name: options.name,
              short_name: options.name,
            }),
          ],
          vite: {
            plugins: [
              tailwindcss(),
              {
                name: "fulldev-config",
                resolveId(id) {
                  if (id === "fulldev:config") {
                    return "\0fulldev:config"
                  }
                },
                load(id) {
                  if (id === "\0fulldev:config") {
                    return `export default ${JSON.stringify(options, null, 2)}`
                  }
                },
              },
            ],
          },
        })
      },
    },
  }
}
