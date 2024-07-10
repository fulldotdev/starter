import { defineCollection, reference, z, type AnyEntryMap } from 'astro:content'

const pathSchema = <C extends keyof AnyEntryMap>(collection: C) =>
  z
    .string()
    .transform((value) => {
      const fullpath = value.split(`${collection}/`).pop()
      const slug = fullpath?.split('.').shift()
      return slug
    })
    .pipe(reference(collection))

const references = {
  page: pathSchema('pages'),
  pages: pathSchema('pages').array(),
}

export const buttonSchema = z
  .object({
    text: z.string(),
    html: z.string(),
    href: z.string(),
  })
  .partial()
  .passthrough()

const baseSchema = z
  .object({
    image: z.string(),
    images: z.string().array(),
    icon: z.string(),
    rating: z.number(),
    badge: z.string(),
    tagline: z.string(),
    heading: z.string(),
    text: z.string(),
    list: z.string().array(),
    price: z.string().or(z.number()),
    button: buttonSchema,
    buttons: buttonSchema.array(),
  })
  .partial()
  .passthrough()

export const blockSchema = baseSchema
  .extend({
    card: baseSchema,
    cards: baseSchema.array(),
  })
  .extend(references)
  .partial()
  .passthrough()

export const pageSchema = baseSchema
  .extend({
    title: z.string(),
    description: z.string(),
    hero: blockSchema,
    content: blockSchema,
    blocks: blockSchema.array(),
    head: z
      .object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
      .partial(),
  })
  .extend(references)
  .partial()
  .passthrough()

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pageSchema,
  }),
  globals: defineCollection({
    type: 'data',
    schema: z.any(),
  }),
}
