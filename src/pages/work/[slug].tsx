import Head from "next/head";
import ContactCard from "components/ContactCard";
import Divider from "components/Divider";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "lib/markdown";

interface Props {
  project: any;
}

export const getStaticPaths: GetStaticPaths = ({}) => {
  const projects = getMarkdown();
  return {
    paths: projects.map(project => ({
      params: { slug: project.slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = getSingleMarkdown(params?.slug as string);
  return { props: { project } };
};

export default function Project({ project }: Props) {
  return (
    <>
      <Head>
        <title>{project.data.title}</title>
        <meta name='description' content={project.data.summary} />
      </Head>

      <section className='project'>
        <div className='container space-y animate-slide-up'>
          <h1>{project.data.title}</h1>
          <div className='project-grid'>
            <div className='space-y'>
              <p>
                <strong>Client:</strong> {project.data.client}
              </p>
              <p>
                <strong>Role:</strong> {project.data.role}
              </p>
            </div>
            <div className='space-y'>
              <h4>Summary:</h4>
              <p>{project.data.summary}</p>
            </div>
          </div>
        </div>

        <Divider />
      </section>

      <section className='project-article'>
        <article
          className='container'
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></article>
      </section>

      <ContactCard />
    </>
  );
}
