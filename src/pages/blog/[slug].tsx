import Image from "next/future/image";
import SEO from "@/components/seo";
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Post } from "@/utils/types";

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

const PostPage: FC<{ post: Post }> = ({ post }) => {
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
            className='object-cover'
            src={post.data.image}
            alt={post.data.imageAlt}
          />

          <article
            className='mt-12 prose prose-invert'
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></article>
        </div>
      </section>
    </>
  );
};

export default PostPage;
