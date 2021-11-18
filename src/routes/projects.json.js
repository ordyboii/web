import getMarkdown from '$lib/getMarkdown'

export async function get() {
  return {
    body: await getMarkdown('projects')
  }
}
