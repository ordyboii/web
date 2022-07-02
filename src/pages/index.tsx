import Link from "next/link";
import SEO from "@/components/seo";
import Hero from "@/components/hero";
import ProjectsGrid from "@/components/projects-grid";
import About from "@/components/about";
import { FC } from "react";
import { GetStaticProps } from "next";
import { HiArrowNarrowRight } from "react-icons/hi";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown("projects");
  return { props: { projects } };
};

const Index: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Hero />
      <SEO />

      <section className='mt-12 md:mt-24 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <p>Some of the work I&apos;m working on / been involved in:</p>
        </div>

        <ProjectsGrid projects={projects} />

        <Link
          href='/projects'
          className='flex items-center gap-2 underline hover:text-blue-400'
        >
          Or see all my projects <HiArrowNarrowRight size={24} />
        </Link>
      </section>

      <About />
    </>
  );
};

export default Index;
