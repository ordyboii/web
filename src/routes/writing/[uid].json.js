import prismic from '$lib/prismic';

export const get = async ({ params }) => {
  const post = await prismic.getByUID('post', params.uid);
  return {
    body: post.data
  };
};
