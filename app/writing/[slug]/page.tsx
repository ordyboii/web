import Image from "next/image";
import { allPosts } from "~/.contentlayer/generated";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.filter((post) => post.slug === params.slug)[0];

  return (
    <section className="flow">
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
        className="content-image"
      />
      <article
        className="flow"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </section>
  );
}
