import Hero from "components/Hero";
import Bio from "components/Bio";
import Featured from "components/Featured";
import Skills from "components/Skills";
import ContactCard from "components/ContactCard";
import { GetStaticProps } from "next";
import { getMarkdown } from "lib/markdown";

interface Props {
  projects: any[];
}

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown();
  return { props: { projects } };
};

export default function Home({ projects }: Props) {
  return (
    <>
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
    </>
  );
}
