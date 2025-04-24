import matter from "gray-matter"
import { marked } from "marked";
import { promises as fs } from "node:fs"

export default async function Home() {
  const markdown = await fs.readFile(process.cwd() + "/src/content/home.md", { encoding: "utf8" })
  const { content } = matter(markdown);

  return <div className="ob-flow" dangerouslySetInnerHTML={{ __html: marked(content) }} />;
}
