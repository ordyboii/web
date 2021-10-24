export default function Card({ data, slug, post }) {
  return (
    <>
      {post ? (
        <a href={`writing/${slug}`} aria-label={`Link to ${data.title}`}>
          <article className='bg-white shadow-md rounded-md my-10 hover:scale-105 transition'>
            <img
              className='w-full object-cover overflow-hidden'
              src={data.image[0].url}
              alt={data.title}
            />
            <div className='space-y-4 p-8'>
              <h3>{data.title}</h3>
              <p>{data.date}</p>
              <p>{data.keywords}</p>
              <p>{data.summary}</p>
              <p>Read More</p>
            </div>
          </article>
        </a>
      ) : (
        <a href={`work/${slug}`} aria-label={`Link to ${data.title}`}>
          <article className='bg-white shadow-md rounded-md my-10 hover:scale-105 transition'>
            <img
              className='w-full object-cover h-96 overflow-hidden'
              src={data.image[0].url}
              alt={data.title}
            />
            <div className='space-y-4 p-8'>
              <h3>{data.title}</h3>
              <div>
                <p>
                  <span className='font-semibold'>Client:</span>
                  {data.client}
                </p>
                <p>
                  <span className='font-semibold'>Roles:</span>
                  {data.role}
                </p>
              </div>
              <p>{data.summary}</p>
              <p>Read Case Study</p>
            </div>
          </article>
        </a>
      )}
    </>
  )
}
