import { z } from "astro:content"

const localeRoutesSchema = z
  .record(z.union([z.string(), z.record(z.string())]))
  .optional()

export const settingsSchema = () =>
  z
    .object({
      site: z.string().url(),
      name: z.string(),
      favicon: z.string(),
      theme: z.enum(["light", "dark", "system"]),
      i18n: z
        .object({
          defaultLocale: z.string(),
          locales: z.string().array(),
          routing: z
            .object({
              prefixDefaultLocale: z.boolean(),
              redirectToDefaultLocale: z.boolean(),
              fallbackType: z.enum(["redirect", "not-found"]),
            })
            .partial()
            .strict(),
        })
        .strict(),
      fonts: z
        .object({
          base: z.string(),
          heading: z.string().optional(),
          mono: z.string().optional(),
        })
        .strict(),
      routing: z
        .object({
          collectionSlugs: localeRoutesSchema,
        })
        .partial()
        .strict(),
    })
    .strict()

export type SettingsSchema = z.infer<ReturnType<typeof settingsSchema>>
