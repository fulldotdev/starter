import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"
import { logoSchema } from "@/schemas/fields/logo"
import { ratingSchema } from "@/schemas/fields/rating"

export const itemSchema = (ctx: SchemaContext) =>
  z
    .object({
      href: z.string(),
      html: z.string(),
      name: z.string(),
      title: z.string(),
      link: linkSchema,
      subtitle: z.string(),
      description: z.string(),
      tagline: z.string(),
      icon: z.string(),
      image: imageSchema(ctx),
      images: imageSchema(ctx).array(),
      logo: logoSchema(ctx),
      logos: logoSchema(ctx).array(),
      links: linkSchema.array(),
      rating: ratingSchema,
      price: z.string().or(z.number()),
      unit: z.string(),
      socials: z.string().array(),
      list: z.string().array(),
      video: z.string(),
    })
    .partial()
    .strict()
