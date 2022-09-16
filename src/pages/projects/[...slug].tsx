import Image from "next/future/image";
import SEO from "@/components/seo";
import { FormEvent, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { getProject, Project } from "@/utils/notion";

const ProjectBody = ({ project }: { project: Project }) => {
  return (
    <>
      <SEO title={project.title} description={project.summary} />
      <section className='py-16 space-y-12 animate-fade-up'>
        <div className='space-y-6'>
          <p className='text-lg font-bold'>{project.client}</p>
          <h1>{project.title}</h1>
          <p className='text-lg'>{project.summary}</p>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className='object-cover w-full h-96'
        />

        <article
          className='space-y-8 max-w-full'
          dangerouslySetInnerHTML={{ __html: project.content! }}
        />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const project = await getProject(params.slug[1]);

  return {
    props: { project }
  };
};

export default function ProjectPage({ project }: { project?: Project }) {
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

  if (project.protected) {
    return authed ? (
      <ProjectBody project={project} />
    ) : (
      <section className='py-12 space-y-6'>
        <SEO title={project.title} description={project.summary} />
        <h1>This project is locked</h1>
        <p>
          If you are hitting this page it is likely because this project
          contains sensitive data I cannot share publicly. If you are a
          recruiter/hiring manager please request the auth token below and I
          will try to get back to you as soon as I can.
        </p>
        <a
          className='button block'
          href="mailto:jake.ord345@gmail.com?subject='Request for auth token'&body='I'd like to request an auth token to view the sensitive work on your site please.'"
        >
          Request auth token
        </a>
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
