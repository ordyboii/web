import { getMarkdown } from "$lib/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const projects = getMarkdown();
  return { body: projects };
};
