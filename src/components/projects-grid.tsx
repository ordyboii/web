import Link from "next/link";
import Image from "next/future/image";
import { Project } from "generated";

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {projects.map((project, idx) => (
        <Link key={idx} href={`/${project._raw.flattenedPath}`}>
          <article
            className='bg-white rounded-sm border-2 border-gray-900 transition 
            cursor-pointer hover:scale-105 hover:rotate-2'
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className='object-contain w-full max-h-96 transition'
            />

            <div className='p-8 space-y-6'>
              <p className='text-lg font-bold'>Client: {project.client}</p>
              <h3>{project.title}</h3>
              <hr className='w-20  border-gray-900' />
              <p>{project.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsGrid;
