import contentful from '$lib/contentful';

export const get = async ({ params }) => {
  const { items } = await contentful.getEntries({
    content_type: 'projects',
    'fields.slug': params.slug
  });

  return {
    body: items[0].fields
  };
};
