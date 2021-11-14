import prismic from '$lib/utils/prismic'

export async function get({ params }) {
  const post = await prismic.getByUID('post', params.slug)

  return {
    body: post.data
  }
}
