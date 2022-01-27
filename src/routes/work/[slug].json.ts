import { getSingleMarkdown } from "$lib/markdown";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = ({ params }) => {
  const project = getSingleMarkdown(params.slug);
  return { body: project };
};
