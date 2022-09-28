import Image from "next/future/image";
import SEO from "components/seo";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from "next";
import { FormEvent, useRef, useState } from "react";
import { getProjects } from "utils/markdown";

const ProjectBody = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEO title={project.data.title} description={project?.data.summary} />
      <section className='py-16 space-y-12 animate-fade-up'>
        <div className='space-y-6'>
          <p className='text-lg font-bold'>{project.data.client}</p>
          <h1>{project.data.title}</h1>
          <p className='text-lg'>{project.data.summary}</p>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={project.data.image}
          alt={project.data.title}
          width={1000}
          height={1000}
          className='object-cover w-full h-96'
        />

        <article dangerouslySetInnerHTML={{ __html: project.content }} />
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getProjects().map(project => ({
      params: { slug: project.slug }
    })),
    fallback: false
  };
};

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const project = getProjects().find(project => project.slug === params?.slug);

  if (!project) {
    throw new Error("Project not found");
  }

  return { props: { project } };
};

export default function ProjectPage({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/auth-secret?secret=${input.current?.value}`);

    if (res.ok) {
      const data = (await res.json()) as {
        auth: boolean;
      };
      if (data.auth) {
        setAuthed(true);
      }
    }
    setError("Invalid secret");
  };

  if (!project || !project.content) {
    return null;
  }

  if (project.data.protected) {
    return authed ? (
      <ProjectBody project={project} />
    ) : (
      <section className='py-12 space-y-6'>
        <SEO title={project.data.title} description={project.data.summary} />
        <h1>This project is protected</h1>
        <p>
          If you are hitting this page it is likely because this project is
          still ongoing and contains sensitive information. Unfortunately, I
          cannot share the token to access this page. If you are a
          recruiter/hiring manager and wanting to see this project, please get
          in touch with me and we can work something out.
        </p>
        <form
          onSubmit={handleAuth}
          className='flex gap-4 flex-col justify-center'
        >
          <label htmlFor='token'>Enter auth token:</label>
          <input
            ref={input}
            type='password'
            name='token'
            id='token'
            className='border border-gray-900 p-2'
          />

          {error.length > 0 && <p className='text-red-500'>{error}</p>}

          <button className='button' type='submit'>
            Submit token
          </button>
        </form>
      </section>
    );
  }

  return <ProjectBody project={project} />;
}
