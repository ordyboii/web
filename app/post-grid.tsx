import type { getPosts } from "@content/parse";
import Image from "next/image";
import Link from "next/link";
import { HeadingThree, Text } from "./typography";

type Props = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export default function PostGrid({ posts }: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {posts.map((post, idx) => (
        <Link
          key={idx}
          href={`/thoughts/${post.slug}`}
          className='cursor-pointer rounded-sm border-2 border-gray-900 bg-white 
          transition hover:rotate-2 hover:scale-105 focus:rotate-2 focus:scale-105'
          aria-label={`Link to ${post.frontmatter.title}`}
        >
          <Image
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            width={1200}
            height={800}
            className='max-h-96 w-full object-cover transition'
          />

          <div className='space-y-6 p-8'>
            <Text>
              Published: {new Date(post.frontmatter.date).toLocaleDateString()}
            </Text>
            <HeadingThree>{post.frontmatter.title}</HeadingThree>
            <hr className='w-20 border-gray-900' />
            <Text>{post.frontmatter.summary}</Text>
          </div>
        </Link>
      ))}
    </div>
  );
}
