import fs from 'fs';
import path from 'path';
import fm from 'frontmatter';
import { marked } from 'marked';

export const get = async ({ params }) => {
  const file = fs.readFileSync(path.resolve(`content/${params.slug}.md`), 'utf-8');
  const parsedMarkdown = fm(file);

  return {
    body: {
      slug: params.slug,
      data: parsedMarkdown.data,
      content: marked.parse(parsedMarkdown.content)
    }
  };
};
