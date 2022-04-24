import styles from "styles/components/card.module.css";
import Link from "next/link";

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
        <article className={styles.article}>
          <img
            src={data.image}
            alt={data.imageAlt}
            loading='lazy'
            decoding='async'
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
