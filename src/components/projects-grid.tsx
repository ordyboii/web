import Link from "next/link";
import Image from "next/future/image";
import type { Project } from "utils/markdown";

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}`}>
          <article
            className='bg-white rounded-sm border-2 border-gray-900 transition 
            cursor-pointer hover:scale-105 hover:rotate-2'
          >
            <Image
              src={project.data.image}
              alt={project.data.title}
              width={1000}
              height={1000}
              className='object-contain w-full max-h-96 transition'
            />

            <div className='p-8 space-y-6'>
              <p className='text-lg font-bold'>Client: {project.data.client}</p>
              <h3>{project.data.title}</h3>
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
