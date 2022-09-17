import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";

export type Project = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  client: string;
  protected: boolean;
  content?: string;
};

export type Side = {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  link: string;
  content?: string;
};

const notion = new Client({ auth: process.env.NOTION_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

const slugify = (url: string) => {
  return url
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const parseProjectResponse = (data: any): Project => {
  return {
    id: data.id,
    slug: slugify(data.properties.Name.title[0].plain_text),
    title: data.properties.Name.title[0].plain_text,
    date: data.created_time,
    image: data.cover?.file.url ?? null,
    summary: data.properties.Summary.rich_text[0]?.plain_text ?? null,
    client: data.properties.Client.rich_text[0]?.plain_text ?? null,
    protected: data.properties.Protected.checkbox
  };
};

export const getProjects = async () => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DATABASE!
  });

  return results.map(result => parseProjectResponse(result));
};

export const getProject = async (id: string) => {
  const project = await notion.pages.retrieve({
    page_id: id
  });

  const projectContent = await notion.blocks.children.list({
    block_id: id
  });

  const convertResponse = parseProjectResponse(project);
  const convertedBlocks = await n2m.blocksToMarkdown(projectContent.results);
  const convertedMarkdown = n2m.toMarkdownString(convertedBlocks);

  return { ...convertResponse, content: marked(convertedMarkdown) };
};

const parseSideResponse = (data: any): Side => {
  return {
    id: data.id,
    slug: slugify(data.properties.Name.title[0].plain_text),
    title: data.properties.Name.title[0].plain_text,
    date: data.created_time,
    image: data.cover?.file.url ?? null,
    summary: data.properties.Summary.rich_text[0]?.plain_text ?? null,
    link: data.properties.Weblink.url ?? null
  };
};

export const getSides = async () => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_SIDE_DATABASE!
  });

  return results.map(result => parseSideResponse(result));
};

export const getSide = async (id: string) => {
  const side = await notion.pages.retrieve({
    page_id: id
  });

  const sideContent = await notion.blocks.children.list({
    block_id: id
  });

  const convertResponse = parseSideResponse(side);
  const convertedBlocks = await n2m.blocksToMarkdown(sideContent.results);
  const convertedMarkdown = n2m.toMarkdownString(convertedBlocks);

  return { ...convertResponse, content: marked(convertedMarkdown) };
};
