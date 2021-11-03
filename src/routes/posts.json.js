import getMarkdown from '$lib/utils/getMarkdown'

export async function get() {
  return {
    body: getMarkdown('posts')
  }
}
