import Airtable from 'airtable'

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })

export const base = airtable.base(process.env.BASE_ID)

export const minifyRecord = record => ({
  id: record.id,
  data: record.fields
})
