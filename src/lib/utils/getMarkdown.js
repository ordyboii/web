import fs from 'fs'
import path from 'path'
import fm from 'frontmatter'
import marked from 'marked'

export default folder => {
  const files = fs.readdirSync(path.resolve(`static/${folder}`))

  return files.map(file => {
    const slug = file.replace('.md', '')

    const markdownFile = fs.readFileSync(path.resolve(`static/${folder}/${file}`), 'utf-8')
    const parsedMarkdown = fm(markdownFile)

    return {
      slug,
      data: parsedMarkdown.data,
      content: marked(parsedMarkdown.content)
    }
  })
}
