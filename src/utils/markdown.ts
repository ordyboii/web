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
    client: string;
    protected: boolean;
  };
};

export type Side = {
  title: string;
  image: string;
  link?: string;
};

export type Post = {
  slug: string;
  content: string;
  data: {
    title: string;
    summary: string;
    image: string;
    date: string;
  };
};

type Content = "projects" | "posts" | "sides";

export const getContent = <TContentData>(content: Content) => {
  const files = fs.readdirSync(path.join(`content/${content}`));

  return files.map(file => {
    const slug = file.replace(".md", "");
    const markdown = fs.readFileSync(
      path.join(`content/${content}/${file}`),
      "utf-8"
    );
    const parsed = matter(markdown);

    return {
      slug,
      content: marked.parse(parsed.content),
      data: parsed.data as TContentData
    };
  });
};
