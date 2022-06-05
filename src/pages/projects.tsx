import { GetStaticProps } from "next";
import { useState } from "react";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import Layout from "@/components/layout";
import ProjectsGrid from "@/components/projects-grid";
import { useFilter } from "@/hooks/use-filter";
import FilterBar from "@/components/filter-bar";

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown("projects");
  return { props: { projects } };
};

export default function Projects({ projects }: { projects: Project[] }) {
  const [filterQuery, setFilterQuery] = useState("");
  const filteredProjects = useFilter(filterQuery, projects);

  return (
    <Layout title='Projects - Jake Ord'>
      <section className='mt-12 space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>Projects</h1>
          <p className='text-lg'>
            Cultivation of my best projects working as a UX designer
          </p>
        </div>

        <FilterBar
          placeholder='Search projects'
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
        />

        {!filteredProjects.length ? (
          <p className='text-center font-semibold'>
            Found no projects with that search
          </p>
        ) : (
          <ProjectsGrid projects={filteredProjects} />
        )}
      </section>
    </Layout>
  );
}
