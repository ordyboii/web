import NextLink from "next/link";
import Image from "next/future/image";
import type { Project } from "utils/markdown";
import { HeadingThree, Link, Text } from "./typography";

type ProjectGridProps = { projects: Project[] };

export default function ProjectsGrid({ projects }: ProjectGridProps) {
  return (
    <div className='flex flex-col gap-4'>
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
}
