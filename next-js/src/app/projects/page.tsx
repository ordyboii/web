import { ProjectsGrid } from "components/grids";
import SEO from "components/seo";
import { HeadingOne } from "components/typography";
import type { InferGetStaticPropsType } from "next";
import { useRef } from "react";
import { useAnnotation } from "utils/annotation";
import { getContent, type Project } from "utils/markdown";

export const getStaticProps = () => {
  const projects = getContent<Project["data"]>("projects");

  return {
    props: { projects }
  };
};

type ProjectPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function ProjectPage({ projects }: ProjectPageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useAnnotation(headingRef, "box");

  return (
    <>
      <SEO title='Jake Ord - Work' />
      <section className='grid gap-6 py-16'>
        <HeadingOne ref={headingRef}>My Work</HeadingOne>
        <ProjectsGrid projects={projects} />
      </section>
    </>
  );
}
