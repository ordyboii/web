import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";
import { Project } from "./types";

const notion = new Client({ auth: process.env.NOTION_KEY });
const n2m = new NotionToMarkdown({ notionClient: notion });

function parseResponse(data: any): Project {
  return {
    title: data.properties.Name.title[0].plain_text,
    date: data.created_time,
    image: data.cover?.external.url ?? null,
    summary: data.properties.Summary.rich_text[0]?.plain_text ?? null,
    client: data.properties.Notion.rich_text[0]?.plain_text ?? null,
    tags: data.properties.Tags.multi_select.map(
      (tag: { name: string }) => tag.name
    )
  };
}

export async function getProjects() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE!
  });

  return results.map(result => parseResponse(result));
}

export async function getProject(id: string) {
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
}
