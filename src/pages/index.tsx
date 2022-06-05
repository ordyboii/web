import { GetStaticProps } from "next";
import { HiArrowNarrowRight } from "react-icons/hi";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import ProjectsGrid from "@/components/projects-grid";
import About from "@/components/about";
import Link from "next/link";

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown("projects");
  return { props: { projects } };
};

export default function Index({ projects }: { projects: Project[] }) {
  return (
    <Layout>
      <Hero />

      <section className='mt-12 md:mt-24 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <p>Some of the work I&apos;m working on / been involved in:</p>
        </div>

        <ProjectsGrid projects={projects} />

        <Link href='/projects'>
          <a className='flex items-center gap-2 underline hover:text-blue-400'>
            Or see all my projects <HiArrowNarrowRight size={24} />
          </a>
        </Link>
      </section>

      <About />
    </Layout>
  );
}
