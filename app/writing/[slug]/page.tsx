import Image from "next/image";
import { allPosts } from "~/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const runtime = "edge";

export function generateStaticParams() {
  return allPosts.map(post => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.filter(post => post.slug === params.slug)[0];
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className='flow'>
      <h1>{post.title}</h1>
      <p>
        {new Date(post.date).toLocaleDateString("en-gb", { dateStyle: "long" })}
      </p>
      <hr />
      <p>{post.summary}</p>
      <Image
        src={post.image}
        alt={`${post.title} hero image`}
        width={1600}
        height={900}
        className='content-image'
      />
      <article className='flow'>
        <MDXContent components={{ Image }} />
      </article>
    </section>
  );
}
