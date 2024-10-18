import { defineCollection } from 'astro:content'
import page from 'fulldev-ui/schemas/page.ts'
import preset from 'fulldev-ui/schemas/preset.js'
import record from 'fulldev-ui/schemas/record.ts'

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: page,
  }),
  records: defineCollection({
    type: 'data',
    schema: record,
  }),
  presets: defineCollection({
    type: 'data',
    schema: preset,
  }),
}
