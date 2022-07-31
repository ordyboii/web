import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Project } from "@/utils/types";

const ProjectsGrid: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}`}>
          <article
            className='bg-white rounded-sm border-2 border-gray-900 transition 
            cursor-pointer hover:scale-105 hover:rotate-2'
          >
            <div className='relative w-full h-64'>
              <Image
                className='object-cover w-full max-h-64 transition'
                src={project.data.image}
                alt={project.data.imageAlt}
                layout='fill'
              />
            </div>

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
};

export default ProjectsGrid;
