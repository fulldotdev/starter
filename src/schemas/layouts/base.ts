import { z, type SchemaContext } from "astro:content"

import { seoSchema } from "@/schemas/shared"

export const baseLayoutSchema = (ctx: SchemaContext) =>
  z.object({
    name: z.string().min(1),
    slug: z
      .string()
      .trim()
      .regex(/^[a-z0-9]+(?:\/[a-z0-9-]+)*$/, {
        message:
          "Slug must be lowercase and may contain path segments separated by '/'.",
      })
      .optional(),
    seo: seoSchema(ctx),
  })

export type BaseLayoutSchema = z.infer<ReturnType<typeof baseLayoutSchema>>
