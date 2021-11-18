import getSingleMarkdown from '$lib/getSingleMarkdown'

export async function get({ params }) {
  return {
    body: await getSingleMarkdown('posts', params.slug)
  }
}
