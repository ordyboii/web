import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export const getMarkdown = () => {
  const files = fs.readdirSync(path.resolve("content"));

  const projects = files.map(file => {
    const slug = file.replace(".md", "");
    const rawFile = fs.readFileSync(path.resolve(`content/${file}`), "utf-8");
    const parsedMarkdown = matter(rawFile);

    return {
      slug,
      data: parsedMarkdown.data
    };
  });

  return projects;
};

export const getSingleMarkdown = (slug: string) => {
  const file = fs.readFileSync(path.resolve(`content/${slug}.md`), "utf-8");
  const parsedMarkdown = matter(file);

  return {
    slug,
    data: parsedMarkdown.data,
    content: marked.parse(parsedMarkdown.content)
  };
};
