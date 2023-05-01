import { MetadataRoute } from "next";
import { config } from "~/.contentlayer/generated";

export const runtime = "edge";

export default function Robots(): MetadataRoute.Robots {
  return {
    rules: { allow: "/", userAgent: "*" },
    sitemap: `${config.siteName}/sitemap.xml`
  };
}
