import styles from "styles/pages/project.module.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Project } from "types";
import Head from "next/head";
import { getMarkdown, getSingleMarkdown } from "utils/markdown";
import Layout from "components/layout";
import ContactCard from "components/contact-card";

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getMarkdown();
  return {
    fallback: false,
    paths: projects.map(project => ({
      params: { slug: project.slug }
    }))
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = getSingleMarkdown(params?.slug as string);
  return { props: { project } };
};

interface Props {
  project: Project;
}

export default function Project({ project }: Props) {
  return (
    <Layout>
      <Head>
        <title>{project.data.title}</title>
        <meta name='description' content={project.data.summary} />
      </Head>

      <section
        className={styles.project}
        style={{
          background: `linear-gradient(hsla(225, 5%, 15%, 0.9), hsla(225, 5%, 15%, 0.6)), url(${project.data.image})`,
          backgroundSize: "cover"
        }}
      >
        <div className='container space-y animate-slide-up'>
          <h1>{project.data.title}</h1>
          <div className={styles.projectGrid}>
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
      </section>

      <section className={styles.projectArticle}>
        <article
          className='container'
          dangerouslySetInnerHTML={{ __html: project.content }}
        ></article>
      </section>

      <ContactCard />
    </Layout>
  );
}
