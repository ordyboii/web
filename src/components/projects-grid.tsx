import Link from "next/link";
import { Project } from "@/utils/notion";

const ProjectsGrid = (props: { projects: Project[] }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {props.projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}/${project.id}`}>
          <article
            className='h-full bg-white rounded-sm border-2 border-gray-900 transition 
            cursor-pointer hover:scale-105 hover:rotate-2'
          >
            <img
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className='object-cover w-full max-h-64 transition'
              loading='lazy'
            />

            <div className='p-8 space-y-6'>
              <p className='text-lg font-bold'>{project.client}</p>
              <h3>{project.title}</h3>
              <div className='flex gap-2 flex-col sm:flex-row'>
                {project.tags.map(tag => (
                  <p key={tag} className='tag'>
                    {tag}
                  </p>
                ))}
              </div>

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
