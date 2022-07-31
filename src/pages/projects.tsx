import SEO from "@/components/seo";
import ProjectsGrid from "@/components/projects-grid";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { HiSearch } from "react-icons/hi";

const useFilter = (query: string, data: Project[]) => {
  const [filteredArray, setFilteredArray] = useState(data);

  useEffect(() => {
    setFilteredArray(
      data.filter(value =>
        value.data.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, data]);

  return filteredArray;
};

type FilterBarProps = {
  placeholder: string;
  filterQuery: string;
  setFilterQuery: Dispatch<SetStateAction<string>>;
};

const FilterBar = ({
  placeholder,
  filterQuery,
  setFilterQuery
}: FilterBarProps) => {
  return (
    <div
      className='bg-gray-900 flex items-center gap-2 px-4 py-2 rounded-sm 
      focus-within:outline-1 focus-within:outline-dashed focus-within:outline-yellow-400'
    >
      <input
        className='bg-transparent w-full focus:outline-none'
        type='text'
        placeholder={placeholder}
        value={filterQuery}
        onChange={e => setFilterQuery(e.target.value)}
      />
      <HiSearch size={20} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown();
  return { props: { projects } };
};

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
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
}
