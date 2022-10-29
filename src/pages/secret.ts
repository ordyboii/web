import type { APIRoute } from "astro";

export const get: APIRoute = ({ url }) => {
  if (url.searchParams.get("secret") === process.env.SECRET) {
    return {
      body: JSON.stringify({ auth: true })
    };
  }

  return {
    body: JSON.stringify({ auth: false })
  };
};
