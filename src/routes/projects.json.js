import prismic from '$lib/prismic';

export const get = async () => {
  return {
    body: await prismic.getAllByType('project')
  };
};
