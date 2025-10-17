// Import the glob loader
import { glob } from "astro/loaders";

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const researchThemes = defineCollection({
  schema: z.object({
    title: z.string()
  }),
});

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(), // Path to image file
    publishDate: z.date().optional(),
    year: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional()
  })
});

const workshopsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
    featured: z.boolean().optional(),
  }),
});

const blogsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(), // Path to image file
    publishDate: z.date().optional(),
    year: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  research_themes: researchThemes,
  projects: projectsCollection,
  blogs: blogsCollection,
  workshops: workshopsCollection
};
