import { base, minifyRecord } from '$lib/airtable'
import marked from 'marked'

export async function get({ params }) {
  const record = await base.table('Posts').find(params.slug)
  const post = minifyRecord(record)

  return {
    body: {
      data: post.data,
      content: marked(post.data.content)
    }
  }
}
