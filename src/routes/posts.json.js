import { base, minifyRecord } from '$lib/airtable'

export async function get() {
  const records = await base.table('Posts').select().all()

  return {
    body: records.map(record => minifyRecord(record))
  }
}
