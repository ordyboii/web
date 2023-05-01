import { MetadataRoute } from "next";
import { allPosts, allProjects, config } from "~/.contentlayer/generated";

export const runtime = "edge";

export default function Sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map(post => ({
    url: `${config.siteName}/${post._raw.flattenedPath}`,
    lastModified: new Date()
  }));

  const projects = allProjects.map(project => ({
    url: `${config.siteName}/${project._raw.flattenedPath}`,
    lastModified: new Date()
  }));

  return [{ url: "/", lastModified: new Date() }].concat(projects, posts);
}
