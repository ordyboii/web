import { readdir, readFile } from "fs/promises";
import { resolve } from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { cache } from "react";

export const getProjects = cache(async () => {
  const files = await readdir(resolve("content/projects"));

  return Promise.all(
    files.map(async file => {
      const contents = await readFile(
        resolve(`content/projects/${file}`),
        "utf-8"
      );

      const parsed = matter(contents);
      const html = marked(parsed.content);

      return {
        slug: file.replace(".md", ""),
        body: html,
        frontmatter: parsed.data as {
          title: string;
          summary: string;
          image: string;
          client: string;
        }
      };
    })
  );
});

export const getProject = cache(async (slug: string) => {
  const contents = await readFile(
    resolve(`content/projects/${slug}.md`),
    "utf-8"
  );

  const parsed = matter(contents);
  const html = marked(parsed.content);

  return {
    slug,
    body: html,
    frontmatter: parsed.data as {
      title: string;
      summary: string;
      image: string;
      client: string;
    }
  };
});

export const getPosts = cache(async () => {
  const files = await readdir(resolve("content/posts"));

  return Promise.all(
    files.map(async file => {
      const contents = await readFile(
        resolve(`content/posts/${file}`),
        "utf-8"
      );

      const parsed = matter(contents);
      const html = marked(parsed.content);

      return {
        slug: file.replace(".md", ""),
        body: html,
        frontmatter: parsed.data as {
          title: string;
          summary: string;
          image: string;
          date: string;
        }
      };
    })
  );
});

export const getPost = cache(async (slug: string) => {
  const contents = await readFile(resolve(`content/posts/${slug}.md`), "utf-8");

  const parsed = matter(contents);
  const html = marked(parsed.content);

  return {
    slug,
    body: html,
    frontmatter: parsed.data as {
      title: string;
      summary: string;
      image: string;
      date: string;
    }
  };
});

export const getSides = cache(async () => {
  const files = await readdir(resolve("content/sides"));

  return Promise.all(
    files.map(async file => {
      const contents = await readFile(
        resolve(`content/sides/${file}`),
        "utf-8"
      );

      const parsed = matter(contents);

      return {
        slug: file.replace(".md", ""),
        frontmatter: parsed.data as {
          title: string;
          image: string;
          description: string;
          link: string;
        }
      };
    })
  );
});
