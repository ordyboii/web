import contentful from '$lib/contentful';

export const get = async () => {
  const projects = await contentful.getEntries({ content_type: 'projects' });
  return {
    body: projects.items
  };
};
