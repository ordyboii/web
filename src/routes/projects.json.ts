import { getMarkdown } from "$lib/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  const projects = getMarkdown();
  return { body: projects };
};
