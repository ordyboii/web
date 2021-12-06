import prismic from '$lib/prismic';

export const get = async ({ params }) => {
  const projects = await prismic.getByUID('project', params.uid);
  return {
    body: projects.data
  };
};
