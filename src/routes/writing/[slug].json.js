import getSingleMarkdown from '$lib/utils/getSingleMarkdown'

export async function get({ params }) {
  return {
    body: getSingleMarkdown('posts', params.slug)
  }
}
