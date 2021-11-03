import fs from 'fs'
import path from 'path'
import fm from 'frontmatter'
import marked from 'marked'

export default (folder, slug) => {
  const file = fs.readFileSync(path.resolve(`static/${folder}/${slug}.md`), 'utf-8')
  const parsedMarkdown = fm(file)

  return {
    slug,
    data: parsedMarkdown.data,
    content: marked(parsedMarkdown.content)
  }
}
