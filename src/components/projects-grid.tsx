import { Project } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}`}>
          <a>
            <article
              className='bg-gray-900 rounded-sm shadow-xl transition 
                  cursor-pointer group hover:scale-105 hover:rotate-2'
            >
              <Image
                src={project.data.image}
                alt={project.data.imageAlt}
                width='100%'
                height='100%'
                layout='responsive'
                objectFit='cover'
                className='transition group-hover:opacity-20'
              />
              <div className='p-8 space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold'>
                    {project.data.title}
                  </h3>
                  <p>{project.data.role}</p>
                </div>
                <hr className='w-4 bg-blue-400' />
                <p>{project.data.summary}</p>
              </div>
            </article>
          </a>
        </Link>
      ))}
    </div>
  );
}
