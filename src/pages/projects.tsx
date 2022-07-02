import SEO from "@/components/seo";
import ProjectsGrid from "@/components/projects-grid";
import FilterBar from "@/components/filter-bar";
import { FC, useState } from "react";
import { GetStaticProps } from "next";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { useFilter } from "@/hooks/use-filter";

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown("projects");
  return { props: { projects } };
};

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
  const [filterQuery, setFilterQuery] = useState("");
  const filteredProjects = useFilter(filterQuery, projects) as Project[];

  return (
    <>
      <SEO title='Projects - Jake Ord' />
      <section className='mt-12 space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>Projects</h1>
          <p className='text-lg'>
            Cultivation of my best projects working as a UX designer.
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
    </>
  );
};

export default Projects;
