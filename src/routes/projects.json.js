import prismic, { predicates } from '$lib/utils/prismic'
import p from '@prismicio/client'

export async function get() {
  const projects = await prismic.query(p.predicates.at('document.type', 'project'))

  return {
    body: projects.results
  }
}
