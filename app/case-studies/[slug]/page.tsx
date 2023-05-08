import Image from "next/image";
import { allProjects } from "~/.contentlayer/generated";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.filter(
    (project) => project.slug === params.slug
  )[0];

  return (
    <section className="flow">
      <h1>{project.title}</h1>
      <p>{project.client}</p>
      <hr />
      <p>{project.summary}</p>
      <Image
        src={project.image}
        alt={`${project.title} hero image`}
        width={1600}
        height={900}
        className="content-image"
      />
      <article
        className="flow"
        dangerouslySetInnerHTML={{ __html: project.body.html }}
      />
    </section>
  );
}
