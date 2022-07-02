import Image from "next/future/image";
import SEO from "@/components/seo";
import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getMarkdown("projects");
  const slugs = projects.map(project => {
    return { params: { slug: project.slug } };
  });

  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = getSingleMarkdown("projects", params?.slug as string);
  return { props: { project } };
};

const ProjectPage: FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <SEO title={project.data.title} description={project.data.summary} />
      <section className='mt-12'>
        <div className='space-y-6'>
          <h1 className='text-4xl font-bold'>{project.data.title}</h1>
          <p>{project.data.summary}</p>

          <div className='flex flex-wrap gap-4 justify-between items-center'>
            <p>{new Date(project.data.date).toLocaleDateString()}</p>
            <div>
              <p>
                <strong>Client:</strong> {project.data.client}
              </p>
              <p>
                <strong>Role:</strong> {project.data.role}
              </p>
            </div>
          </div>
          <hr />
        </div>

        <div className='mt-12'>
          <Image
            className='object-cover'
            src={project.data.image}
            alt={project.data.imageAlt}
          />

          <article
            className='mt-12 prose prose-invert'
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></article>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
