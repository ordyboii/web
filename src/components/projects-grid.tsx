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
            className='bg-white rounded-sm border-2 border-gray-900 shadow-md 
            transition cursor-pointer group hover:scale-105 hover:rotate-2'
          >
            <div className='relative w-full h-64'>
              <Image
                className='object-cover w-full max-h-64 transition group-hover:opacity-20'
                src={project.data.image}
                alt={project.data.imageAlt}
                layout='fill'
              />
            </div>

            <div className='p-8 space-y-4'>
              <div>
                <h3 className='text-lg font-semibold'>{project.data.title}</h3>
                <p>{project.data.role}</p>
              </div>
              <hr className='w-4 bg-blue-400' />
              <p>{project.data.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
