import NextLink from "next/link";
import Image from "next/future/image";
import type { Post, Project } from "utils/markdown";
import { HeadingThree, Link, Text } from "./typography";

type ProjectGridProps = { projects: Project[] };

export const ProjectsGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <NextLink
          key={idx}
          href={{ pathname: `/projects/[slug]`, query: { slug: project.slug } }}
        >
          <Link
            className='cursor-pointer rounded-sm border-2 border-gray-900 bg-white 
            transition hover:rotate-2 hover:scale-105'
            aria-label={`Link to ${project.data.title}`}
          >
            <Image
              src={project.data.image}
              alt={project.data.title}
              width={1000}
              height={1000}
              className='max-h-96 w-full object-contain transition'
            />

            <div className='space-y-6 p-8'>
              <Text>Client: {project.data.client}</Text>
              <HeadingThree>{project.data.title}</HeadingThree>
              <hr className='w-20 border-gray-900' />
              <Text>{project.data.summary}</Text>
            </div>
          </Link>
        </NextLink>
      ))}
    </div>
  );
};

type PostsGridProps = { posts: Post[] };

export const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {posts.map((post, idx) => (
        <NextLink
          key={idx}
          href={{ pathname: `/blog/[slug]`, query: { slug: post.slug } }}
        >
          <Link
            className='cursor-pointer rounded-sm border-2 border-gray-900 bg-white 
            transition hover:rotate-2 hover:scale-105'
            aria-label={`Link to ${post.data.title}`}
          >
            <Image
              src={post.data.image}
              alt={post.data.title}
              width={1000}
              height={1000}
              className='max-h-96 w-full object-contain transition'
            />

            <div className='space-y-6 p-8'>
              <Text>
                Published: {new Date(post.data.date).toLocaleDateString()}
              </Text>
              <HeadingThree>{post.data.title}</HeadingThree>
              <hr className='w-20 border-gray-900' />
              <Text>{post.data.summary}</Text>
            </div>
          </Link>
        </NextLink>
      ))}
    </div>
  );
};
