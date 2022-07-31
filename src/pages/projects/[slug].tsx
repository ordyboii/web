import Image from "next/image";
import SEO from "@/components/seo";
import { FC, FormEvent, useRef, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";

export const getStaticPaths: GetStaticPaths = () => {
  const projects = getMarkdown();
  const slugs = projects.map(project => {
    return { params: { slug: project.slug } };
  });

  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = getSingleMarkdown(params?.slug as string);
  return { props: { project } };
};

type Props = {
  project: Project;
};

export default function ProjectPage({ project }: Props) {
  const [authed, setAuthed] = useState(false);
  console.log(authed);

  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/token-check?token=${input.current?.value}`);

    if (res.ok) {
      const data = (await res.json()) as {
        auth: boolean;
      };

      if (data.auth) {
        setAuthed(true);
      }
    }
    setError("Invalid token");
  };

  if (!authed) {
    return (
      <section className='py-12 space-y-8 animate-fade'>
        <SEO title={project.data.title} description={project.data.summary} />
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
      <SEO title={project.data.title} description={project.data.summary} />
      <section className='mt-12 animate-fade'>
        <div className='space-y-6'>
          <p className='text-lg font-bold'>{project.data.client}</p>
          <h1>{project.data.title}</h1>
          <p className='text-lg'>{project.data.summary}</p>

          <div className='flex gap-2'>
            {project.data.tags.map(tag => (
              <p key={tag} className='tag'>
                {tag}
              </p>
            ))}
          </div>
          <hr className='border-gray-900' />
        </div>

        <div className='pt-12 animate-fade'>
          <div className='relative w-full h-96'>
            <Image
              className='object-cover'
              src={project.data.image}
              alt={project.data.imageAlt}
              layout='fill'
            />
          </div>

          <article
            className='mt-12 space-y-8 max-w-full'
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </section>
    </>
  );
}
