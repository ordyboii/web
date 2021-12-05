import prismic from '$lib/prismic';

export const get = async ({ params }) => {
  const project = await prismic.getByUID('project', params.uid);
  return {
    body: project.data
  };
};
