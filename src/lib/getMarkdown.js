import fs from 'fs'
import path from 'path'
import frontmatter from 'frontmatter'
import { marked } from 'marked'

export default folder => {
  const files = fs.readdirSync(path.join(`static/${folder}`))

  return files.map(file => {
    const slug = file.replace('.md', '')

    const markdownFile = fs.readFileSync(path.join(`static/${folder}/${file}`), 'utf-8')
    const markdown = frontmatter(markdownFile)

    return {
      slug,
      data: markdown.data,
      content: marked.parse(markdown.content)
    }
  })
}
