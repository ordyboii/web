import Link from "next/link";
import Image from "next/future/image";
import { Project } from "@/utils/types";

type Props = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}`}>
          <article
            className='h-full bg-white rounded-sm border-2 border-gray-900 transition 
            cursor-pointer hover:scale-105 hover:rotate-2'
          >
            <Image
              src={project.data.image}
              alt={project.data.imageAlt}
              width={1000}
              height={1000}
              className='object-cover w-full max-h-64 transition'
            />

            <div className='p-8 space-y-6'>
              <p className='text-lg font-bold'>{project.data.client}</p>
              <h3>{project.data.title}</h3>
              <div className='flex gap-2'>
                {project.data.tags.map(tag => (
                  <p key={tag} className='tag'>
                    {tag}
                  </p>
                ))}
              </div>

              <hr className='w-20  border-gray-900' />
              <p>{project.data.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
