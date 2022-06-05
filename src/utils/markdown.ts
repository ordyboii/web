import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

type Folder = "projects" | "blog";

export const getMarkdown = (folder: Folder) => {
  const files = fs.readdirSync(path.resolve(`src/content/${folder}`));

  const projects = files.map(file => {
    const slug = file.replace(".md", "");
    const rawFile = fs.readFileSync(
      path.resolve(`src/content/${folder}/${file}`),
      "utf-8"
    );
    const parsedMarkdown = matter(rawFile);

    return {
      slug,
      data: parsedMarkdown.data
    };
  });

  return projects;
};

export const getSingleMarkdown = (folder: Folder, slug: string) => {
  const file = fs.readFileSync(
    path.resolve(`src/content/${folder}/${slug}.md`),
    "utf-8"
  );
  const parsedMarkdown = matter(file);

  return {
    slug,
    data: parsedMarkdown.data,
    content: marked.parse(parsedMarkdown.content)
  };
};
