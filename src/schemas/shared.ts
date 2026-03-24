import { z, type SchemaContext } from "astro:content"

export const buttonVariantSchema = z.enum([
  "default",
  "secondary",
  "outline",
  "ghost",
])

export const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
})

export const ctaSchema = linkSchema.extend({
  variant: buttonVariantSchema.default("default"),
})

export const imageSchema = ({ image }: SchemaContext) =>
  z.object({
    src: image(),
    alt: z.string().min(1),
  })

export const seoSchema = (ctx: SchemaContext) =>
  z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    image: imageSchema(ctx).optional(),
    canonical: z.string().optional(),
    noindex: z.boolean().default(false),
    nofollow: z.boolean().default(false),
  })

export const sectionIntroSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
})

export const heroSchema = (ctx: SchemaContext) =>
  sectionIntroSchema.extend({
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema.optional(),
    image: imageSchema(ctx).optional(),
  })

export const highlightSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
})

export const contactMethodSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  href: z.string().min(1).optional(),
})

export const ctaPanelSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  cta: ctaSchema,
})
