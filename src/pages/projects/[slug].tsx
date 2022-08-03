import Image from "next/future/image";
import SEO from "@/components/seo";
import { FormEvent, useRef, useState } from "react";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult
} from "next";
import { getMarkdown, getSingleMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";

export function getStaticPaths(): GetStaticPathsResult {
  const projects = getMarkdown();
  const slugs = projects.map(project => {
    return {
      params: { slug: project.slug }
    };
  });

  return {
    paths: slugs,
    fallback: false
  };
}

type Props = {
  project: Project;
};

export async function getStaticProps({
  params
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> {
  const project = getSingleMarkdown(params?.slug as string);
  return {
    props: { project }
  };
}

export default function ProjectPage({ project }: Props) {
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

  if (!authed) {
    return (
      <section className='py-12 space-y-8'>
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
      <section className='py-16 space-y-12 animate-fade-up'>
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
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={project.data.image}
          alt={project.data.imageAlt}
          width={1000}
          height={1000}
          className='object-cover w-full h-96'
        />

        <article
          className='space-y-8 max-w-full'
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </section>
    </>
  );
}
