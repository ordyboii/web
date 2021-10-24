import Airtable from 'airtable'

const airtable = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY })
export const base = airtable.base(import.meta.env.VITE_BASE_ID)

export const minifyRecord = record => {
  return {
    id: record.id,
    data: record.fields
  }
}
