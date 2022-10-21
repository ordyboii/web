import Image from "next/future/image";
import SEO from "components/seo";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from "next";
import { getContent, type Post } from "utils/markdown";
import { HeadingOne, Text } from "components/typography";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getContent<Post["data"]>("posts").map(post => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
};

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const post = getContent<Post["data"]>("posts").find(
    post => post!.slug === params?.slug
  );
  if (!post) throw new Error("Post not found");

  return {
    props: { post }
  };
};

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Post({ post }: PostProps) {
  return (
    <>
      <SEO
        title={`${post.data.title} - Jake Ord`}
        description={post?.data.summary}
      />
      <section className='space-y-12 py-16'>
        <div className='space-y-6'>
          <Text>
            Published: {new Date(post.data.date).toLocaleDateString()}
          </Text>
          <HeadingOne>{post.data.title}</HeadingOne>
          <Text>{post.data.summary}</Text>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={post.data.image}
          alt={post.data.title}
          width={1000}
          height={1000}
          className='h-96 w-full object-cover'
        />

        <article
          className='prose prose-stone max-w-full marker:text-slate-900 
          prose-p:text-lg prose-blockquote:border-slate-900 prose-li:text-lg'
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>
    </>
  );
}
