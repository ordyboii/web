import { defineCollection, image, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      image: image(),
      client: z.string()
    })
  }),
  posts: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      image: image(),
      date: z.date()
    })
  }),
  sides: defineCollection({
    schema: z.object({
      title: z.string(),
      image: image(),
      link: z.string()
    })
  })
};
