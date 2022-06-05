import { Post } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {posts.map((post, idx) => (
        <Link key={idx} href={`/blog/${post.slug}`}>
          <a>
            <article
              className='bg-gray-900 rounded-sm border-4 border-gray-900 shadow-md 
              transition cursor-pointer group hover:scale-105 hover:rotate-2'
            >
              <Image
                src={post.data.image}
                alt={post.data.imageAlt}
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
                className='transition group-hover:opacity-20'
              />
              <div className='p-8 space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold'>{post.data.title}</h3>
                </div>
                <hr className='w-4 bg-blue-400' />
                <p>{post.data.summary}</p>
              </div>
            </article>
          </a>
        </Link>
      ))}
    </div>
  );
}
