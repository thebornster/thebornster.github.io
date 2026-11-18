import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      type: z.enum(['software', 'hardware', 'hackathon']),
      summary: z.string(),
      learned: z.string().optional(),
      featured: z.boolean().default(false),
      award: z.string().optional(),
      role: z.string().optional(),
      team: z.string().optional(),
      outcome: z.string().optional(),
      stack: z.array(z.string()).default([]),
      image: image().optional(),
      imageAlt: z.string().optional(),
      links: z.record(z.string(), z.string()).default({}),
    }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    topic: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
