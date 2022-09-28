import Image from "next/future/image";
import SEO from "components/seo";
import { FormEvent, useRef, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Project, allProjects } from "generated";

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
          className='max-w-full prose md:prose-lg'
          dangerouslySetInnerHTML={{ __html: project.body.html! }}
        />
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allProjects.map(project => ({
      params: { slug: project._raw.flattenedPath }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      project: allProjects.find(project =>
        project._raw.flattenedPath.includes(params?.slug as string)
      )
    }
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

  if (!project || !project.body) {
    return null;
  }

  if (project.protected) {
    return authed ? (
      <ProjectBody project={project} />
    ) : (
      <section className='py-12 space-y-6'>
        <SEO title={project.title} description={project.summary} />
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
