import fs from 'fs';
import path from 'path';
import fm from 'frontmatter';

export const get = async () => {
  const files = fs.readdirSync(path.resolve('content'));

  const projects = files.map(file => {
    const slug = file.replace('.md', '');
    const rawFile = fs.readFileSync(path.resolve(`content/${file}`), 'utf-8');
    const parsedMarkdown = fm(rawFile);

    return {
      slug,
      data: parsedMarkdown.data
    };
  });

  return {
    body: projects
  };
};
