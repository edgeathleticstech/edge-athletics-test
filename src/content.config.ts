import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/announcements' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    urgent: z.boolean().default(false),
    active: z.boolean().default(true),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    season: z.string(),
    ageRange: z.string().optional(),
    dates: z.string().optional(),
    tuition: z.string().optional(),
    location: z.string().optional(),
    registrationUrl: z.string().optional(),
    images: z.array(z.string()).default([]),
    videos: z.array(z.string()).default([]),
    protected: z.boolean().default(false),
    pagePassword: z.string().optional(),
    order: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

const schedules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/schedules' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    team: z.string(),
    time: z.string(),
    location: z.string(),
    type: z.enum(['practice', 'game', 'tournament', 'event']).default('practice'),
    notes: z.string().optional(),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  announcements,
  programs,
  schedules,
};
