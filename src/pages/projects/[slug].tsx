import Layout from "@/components/layout";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

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

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <Layout title={project.data.title} description={project.data.summary}>
      <section className='mt-12'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold'>{project.data.title}</h1>
          <p>{project.data.summary}</p>

          <div className='flex justify-between items-center'>
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
            src={project.data.image}
            alt={project.data.imageAlt}
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
          />

          <article
            className='mt-12 prose prose-invert'
            dangerouslySetInnerHTML={{ __html: project.content }}
          ></article>
        </div>
      </section>
    </Layout>
  );
}
