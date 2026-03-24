import { z, type SchemaContext } from "astro:content"

import {
  contactMethodSchema,
  ctaSchema,
  imageSchema,
  linkSchema,
} from "@/schemas/shared"

export const globalSchema = (ctx: SchemaContext) =>
  z.object({
    locale: z.string().min(2),
    siteName: z.string().min(1),
    logo: imageSchema(ctx),
    announcement: z
      .object({
        label: z.string().min(1),
        text: z.string().min(1),
      })
      .optional(),
    navigation: z.array(linkSchema).min(1),
    cta: ctaSchema.optional(),
    tagline: z.string().min(1),
    contact: z.array(contactMethodSchema).min(1),
    social: z.array(linkSchema).default([]),
  })

export type GlobalSchema = z.infer<ReturnType<typeof globalSchema>>
