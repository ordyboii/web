import FilterBar from "@/components/filter-bar";
import { GetStaticProps } from "next";
import { useState } from "react";
import { useFilter } from "@/hooks/use-filter";
import { Post } from "@/utils/types";
import { getMarkdown } from "@/utils/markdown";
import Layout from "@/components/layout";
import PostsGrid from "@/components/posts-grid";

export const getStaticProps: GetStaticProps = () => {
  const posts = getMarkdown("blog");
  return { props: { posts } };
};

export default function Blog({ posts }: { posts: Post[] }) {
  const [filterQuery, setFilterQuery] = useState("");
  const filteredPosts = useFilter(filterQuery, posts) as Post[];

  return (
    <Layout title='Blog - Jake Ord'>
      <section className='mt-12 space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>
            Blog <span className='font-normal'>(ブログ)</span>
          </h1>
          <p className='text-lg'>
            On my blog I share a collection of my writing, thoughts and general
            feelings on the industry and my hobbies.
          </p>
        </div>

        <FilterBar
          placeholder='Search posts'
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />

        {!filteredPosts.length ? (
          <p className='text-center font-semibold'>
            Found no posts with that search
          </p>
        ) : (
          <PostsGrid posts={filteredPosts} />
        )}
      </section>
    </Layout>
  );
}
