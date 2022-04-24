import type { GetStaticProps } from "next";
import type { Project } from "types";
import { getMarkdown } from "utils/markdown";
import Layout from "components/layout";
import Hero from "components/hero";
import Bio from "components/bio";
import Featured from "components/featured";
import Skills from "components/skills";
import ContactCard from "components/contact-card";

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown();
  return { props: { projects } };
};

interface Props {
  projects: Project[];
}

export default function Home({ projects }: Props) {
  return (
    <Layout>
      <Hero />
      <Bio />
      <Featured
        data={projects}
        tag='work'
        title='Featured projects'
        subtitle="Some of my recent projects I've worked on in my career"
      />
      <Skills />
      <ContactCard />
    </Layout>
  );
}
