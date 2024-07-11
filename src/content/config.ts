import { defineCollection, z } from 'astro:content'
import { pageSchema, pathSchema } from 'fulldev-blocks'

const references = {
  page: pathSchema('pages'),
  pages: pathSchema('pages').array(),
  category: pathSchema('categories'),
  categories: pathSchema('categories').array(),
  product: pathSchema('products'),
  products: pathSchema('products').array(),
}

const collection = defineCollection({
  type: 'content',
  schema: pageSchema(references),
})

export const collections = {
  pages: collection,
  categories: collection,
  products: collection,
  globals: defineCollection({
    type: 'data',
    schema: z.any(),
  }),
}
