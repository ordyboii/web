import type { getProjects } from "@content/parse";
import Image from "next/image";
import Link from "next/link";
import { HeadingThree, Text } from "./typography";

type Props = {
  projects: Awaited<ReturnType<typeof getProjects>>;
};

export default function WorkGrid({ projects }: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <Link
          key={idx}
          href={`/client-work/${project.slug}`}
          className='cursor-pointer rounded-sm border-2 border-gray-900 bg-white 
          transition hover:rotate-2 hover:scale-105 focus:rotate-2 focus:scale-105'
          aria-label={`Link to ${project.frontmatter.title}`}
        >
          <Image
            src={project.frontmatter.image}
            alt={project.frontmatter.title}
            width={1000}
            height={500}
            className='max-h-96 w-full object-cover transition'
          />

          <div className='space-y-6 p-8'>
            <Text>Client: {project.frontmatter.client}</Text>
            <HeadingThree>{project.frontmatter.title}</HeadingThree>
            <hr className='w-20 border-gray-900' />
            <Text>{project.frontmatter.summary}</Text>
          </div>
        </Link>
      ))}
    </div>
  );
}
