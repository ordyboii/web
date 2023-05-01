import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { allProjects } from "~/.contentlayer/generated";

export const runtime = "edge";

export function generateStaticParams() {
  return allProjects.map(project => ({
    slug: project.slug
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.filter(
    project => project.slug === params.slug
  )[0];

  const MDXContent = useMDXComponent(project.body.code);

  return (
    <section className='flow'>
      <h1>{project.title}</h1>
      <p>{project.client}</p>
      <hr />
      <p>{project.summary}</p>
      <Image
        src={project.image}
        alt={`${project.title} hero image`}
        width={1600}
        height={900}
        className='content-image'
      />
      <article className='flow'>
        <MDXContent components={{ Image }} />
      </article>
    </section>
  );
}
