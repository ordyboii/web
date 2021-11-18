import fs from 'fs'
import path from 'path'
import frontmatter from 'frontmatter'
import { marked } from 'marked'

export default (folder, slug) => {
  const markdownFile = fs.readFileSync(path.join(`static/${folder}/${slug}.md`), 'utf-8')
  const markdown = frontmatter(markdownFile)

  return {
    slug,
    data: markdown.data,
    content: marked.parse(markdown.content)
  }
}
