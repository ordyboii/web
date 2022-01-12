import Link from "next/link";
import Image from "next/image";

interface Props {
  item: {
    data: {
      title: string;
      image: string;
      imageAlt: string;
      client: string;
      role: string;
      summary: string;
    };
    slug: string;
  };
}

export default function Card({ item }: Props) {
  const { data, slug } = item;

  return (
    <Link href={`/work/${slug}`}>
      <a aria-label={`Link to ${data.title}`}>
        <article className='card'>
          <Image
            src={data.image}
            alt={data.imageAlt}
            height='100%'
            width='100%'
            objectFit='cover'
            layout='responsive'
          />
          <div className='space-y'>
            <h3>{data.title}</h3>
            <div>
              <p>
                <span>Client: </span>
                {data.client}
              </p>
              <p>
                <span>Roles: </span>
                {data.role}
              </p>
            </div>
            <p>{data.summary}</p>
            <p>Read Case Study</p>
          </div>
        </article>
      </a>
    </Link>
  );
}
