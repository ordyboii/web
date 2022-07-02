import Image from "next/future/image";
import Link from "next/link";
import { FC } from "react";
import { Post } from "@/utils/types";

const PostsGrid: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {posts.map((post, idx) => (
        <Link key={idx} href={`/blog/${post.slug}`}>
          <article
            className='bg-gray-900 rounded-sm border-4 border-gray-900 shadow-md 
            transition cursor-pointer group hover:scale-105 hover:rotate-2'
          >
            <Image
              className='object-cover w-full max-h-64 transition group-hover:opacity-20'
              src={post.data.image}
              alt={post.data.imageAlt}
            />

            <div className='p-8 space-y-4'>
              <div>
                <h3 className='text-lg font-semibold'>{post.data.title}</h3>
              </div>
              <hr className='w-4 bg-blue-400' />
              <p>{post.data.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default PostsGrid;
