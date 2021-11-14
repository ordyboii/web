import prismic from '$lib/utils/prismic'

export async function get({ params }) {
  const project = await prismic.getByUID('project', params.slug)

  return {
    body: project.data
  }
}
