import prismic from '$lib/utils/prismic'
import p from '@prismicio/client'

export async function get() {
  const posts = await prismic.query(p.predicates.at('document.type', 'post'))

  return {
    body: posts.results
  }
}
