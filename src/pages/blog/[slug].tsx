import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Post } from "@/utils/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import SEO from "@/components/seo";

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getMarkdown("blog");
  const slugs = posts.map(post => {
    return { params: { slug: post.slug } };
  });

  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = getSingleMarkdown("blog", params?.slug as string);
  return { props: { post } };
};

export default function postPage({ post }: { post: Post }) {
  return (
    <>
      <SEO title={post.data.title} description={post.data.summary} />
      <section className='mt-12'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold'>{post.data.title}</h1>
          <p>{post.data.summary}</p>

          <div className='flex flex-wrap gap-4 justify-between items-center'>
            <p>{new Date(post.data.date).toLocaleDateString()}</p>
            <p>by Jake Ord</p>
          </div>
          <hr />
        </div>

        <div className='mt-12'>
          <Image
            src={post.data.image}
            alt={post.data.imageAlt}
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
          />

          <article
            className='mt-12 prose prose-invert'
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </div>
      </section>
    </>
  );
}
