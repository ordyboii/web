import { getMarkdown } from "$lib/utils/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () => {
  const projects = getMarkdown();
  return { body: { projects } };
};
