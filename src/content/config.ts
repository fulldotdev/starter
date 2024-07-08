import { defineCollection } from 'astro:content'
import { pageSchema } from 'fulldev-ui'

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: pageSchema({}),
  }),
}