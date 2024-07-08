import { defineCollection, reference } from 'astro:content'
import { blockSchema, pageSchema, pathSchema } from 'fulldev-ui'

const references = {
  page: pathSchema.pipe(reference('pages')),
  pages: pathSchema.pipe(reference('pages')).array(),
}

const block = blockSchema.extend(references).partial().passthrough()

const page = pageSchema
  .extend(references)
  .extend({
    hero: block,
    blocks: block.array(),
  })
  .partial()
  .passthrough()

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: page,
  }),
}
