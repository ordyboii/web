import { PostsGrid } from "../grids";
import SEO from "../seo";
import { HeadingOne } from "../typography";
import { useRef } from "react";
import { useAnnotation } from "utils/annotation";
import { getContent, type Post } from "utils/markdown";

export default function BlogPage() {
  const posts = getContent<Post["data"]>("posts");
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
