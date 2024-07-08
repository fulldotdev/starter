import { pageSchema } from '@schemas/page'
import { defineCollection } from 'astro:content'

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pageSchema,
  }),
}
