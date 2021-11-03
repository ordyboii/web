import getSingleMarkdown from '$lib/utils/getSingleMarkdown'

export async function get({ params }) {
  return {
    body: getSingleMarkdown('projects', params.slug)
  }
}
