import { defineContentConfig, defineCollection, z } from '@nuxt/content';

const packageSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  category: z.enum(['adonisjs']),
  repo: z.string(),
  version: z.string().optional(),
  docs: z.boolean().default(false),
  featured: z.boolean().default(false),
});

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md', 'data/**'],
      },
    }),
    packages: defineCollection({
      type: 'data',
      source: 'data/packages.json',
      schema: z.object({ packages: z.array(packageSchema) }),
    }),
  },
});
