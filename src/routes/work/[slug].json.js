import { base, minifyRecord } from '$lib/airtable'
import marked from 'marked'

export async function get({ params }) {
  const record = await base.table('Projects').find(params.slug)
  const project = minifyRecord(record)

  return {
    body: {
      data: project.data,
      content: marked(project.data.content)
    }
  }
}
