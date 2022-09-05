import Image from "next/future/image";
import SEO from "@/components/seo";
import { FormEvent, useRef, useState } from "react";
import { GetServerSideProps } from "next";
import { getProject, Project } from "@/utils/notion";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params?.slug) {
    return { props: {} };
  }

  const project = await getProject(params.slug[1]);

  return {
    props: { project }
  };
};

const ProjectPage = (props: { project?: Project }) => {
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

  if (!props.project || !props.project.content) {
    return null;
  }

  if (!authed) {
    return (
      <section className='py-12 space-y-8'>
        <SEO title={props.project.title} description={props.project.summary} />
        <h1>This project is locked</h1>
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
            Submit
          </button>
        </form>
      </section>
    );
  }

  return (
    <>
      <SEO title={props.project.title} description={props.project.summary} />
      <section className='py-16 space-y-12 animate-fade-up'>
        <div className='space-y-6'>
          <p className='text-lg font-bold'>{props.project.client}</p>
          <h1>{props.project.title}</h1>
          <p className='text-lg'>{props.project.summary}</p>

          <div className='flex gap-2'>
            {props.project.tags.map(tag => (
              <p key={tag} className='tag'>
                {tag}
              </p>
            ))}
          </div>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={props.project.image}
          alt={props.project.title}
          width={1000}
          height={1000}
          className='object-cover w-full h-96'
        />

        <article
          className='space-y-8 max-w-full'
          dangerouslySetInnerHTML={{ __html: props.project.content }}
        />
      </section>
    </>
  );
};

export default ProjectPage;
