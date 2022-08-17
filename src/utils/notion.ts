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
  tags: string[];
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

const parseResponse = (data: any): Project => {
  return {
    id: data.id,
    slug: slugify(data.properties.Name.title[0].plain_text),
    title: data.properties.Name.title[0].plain_text,
    date: data.created_time,
    image: data.cover?.file.url ?? null,
    summary: data.properties.Summary.rich_text[0]?.plain_text ?? null,
    client: data.properties.Client.rich_text[0]?.plain_text ?? null,
    tags: data.properties.Tags.multi_select.map(
      (tag: { name: string }) => tag.name
    )
  };
};

export const getProjects = async () => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE!
  });

  return results.map(result => parseResponse(result));
};

export const getProject = async (id: string) => {
  const project = await notion.pages.retrieve({
    page_id: id
  });

  const projectContent = await notion.blocks.children.list({
    block_id: id
  });

  const convertResponse = parseResponse(project);
  const convertedBlocks = await n2m.blocksToMarkdown(projectContent.results);
  const convertedMarkdown = n2m.toMarkdownString(convertedBlocks);

  return { ...convertResponse, content: marked(convertedMarkdown) };
};
