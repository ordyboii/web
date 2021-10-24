import marked from 'marked'
import { base, minifyRecord } from 'app/airtable'

import Head from 'next/head'
import ContactCard from 'components/ContactCard'

export async function getStaticPaths() {
  const postsRecords = await base.table('Posts').select().all()
  const posts = postsRecords.map(post => minifyRecord(post))

  return {
    paths: posts.map(post => ({
      params: { id: post.id }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const record = await base.table('Posts').find(params.id)
  const post = minifyRecord(record)

  return {
    props: {
      data: post.data,
      content: marked(post.data.content)
    }
  }
}

export default function Post({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name='description' content={data.summary} />
      </Head>

      <section className='relative bg-blue-900 pt-8 pb-48 text-white'>
        <div className='container space-y-8 animate-slide'>
          <h1>{data.title}</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className='space-y-8'>
              <p>{data.date}</p>
              <p>{data.keywords}</p>
            </div>
            <div className='space-y-4'>
              <h4>Summary:</h4>
              <p>{data.summary}</p>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 w-full rotate-180'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='fill-current text-white'
            />
          </svg>
        </div>
      </section>

      <section className='py-20'>
        <article
          dangerouslySetInnerHTML={{ __html: data.content }}
          className='container p-8 mb-8  shadow-md'
        ></article>
      </section>

      <ContactCard />
    </>
  )
}
