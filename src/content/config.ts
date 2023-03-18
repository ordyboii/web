import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      image: z.string(),
      client: z.string()
    })
  }),
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      image: z.string(),
      date: z.date()
    })
  }),
  sides: defineCollection({
    schema: z.object({
      title: z.string(),
      image: z.string(),
      link: z.string()
    })
  })
};
