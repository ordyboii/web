import { PostsGrid } from "components/grids";
import SEO from "components/seo";
import { HeadingOne } from "components/typography";
import type { InferGetStaticPropsType } from "next";
import { useRef } from "react";
import { useAnnotation } from "utils/annotation";
import { getContent, type Post } from "utils/markdown";

export const getStaticProps = () => {
  const posts = getContent<Post["data"]>("posts");

  return {
    props: { posts }
  };
};

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function BlogPage({ posts }: BlogPageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useAnnotation(headingRef, "box");

  return (
    <>
      <SEO title='Jake Ord - Blog' />
      <section className='grid gap-6 py-16'>
        <HeadingOne ref={headingRef}>Blog</HeadingOne>
        <PostsGrid posts={posts} />
      </section>
    </>
  );
}
