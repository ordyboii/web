import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type Project = {
  slug: string;
  content: string;
  data: {
    title: string;
    summary: string;
    image: string;
    date: string;
    client: string;
    protected: boolean;
  };
};

export type Side = {
  content: string;
  data: {
    title: string;
    image: string;
    link?: string;
  };
};

export const getProjects = (): Project[] => {
  const files = fs.readdirSync(path.join("content/projects"));

  return files.map(file => {
    const slug = file.replace(".md", "");

    const markdown = fs.readFileSync(
      path.join(`content/projects/${file}`),
      "utf-8"
    );

    const parsed = matter(markdown);

    return {
      slug,
      content: marked.parse(parsed.content),
      data: parsed.data as Project["data"]
    };
  });
};

export const getSides = (): Side[] => {
  const files = fs.readdirSync(path.join("content/sides"));

  return files.map(file => {
    const slug = file.replace(".md", "");

    const markdown = fs.readFileSync(
      path.join(`content/sides/${file}`),
      "utf-8"
    );

    const parsed = matter(markdown);

    return {
      slug,
      content: marked.parse(parsed.content),
      data: parsed.data as Side["data"]
    };
  });
};
