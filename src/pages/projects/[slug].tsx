import Image from "next/future/image";
import SEO from "components/seo";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType
} from "next";
import { type FormEvent, useRef, useState } from "react";
import { getContent, type Project } from "utils/markdown";
import { HeadingOne, Text } from "components/typography";
import { Button } from "components/button";

type ProjectBodyProps = InferGetStaticPropsType<typeof getStaticProps>;

const ProjectBody = ({ project }: ProjectBodyProps) => {
  return (
    <>
      <SEO title={project.data.title} description={project?.data.summary} />
      <section className='space-y-12 py-16'>
        <div className='space-y-6'>
          <Text>{project.data.client}</Text>
          <HeadingOne>{project.data.title}</HeadingOne>
          <Text>{project.data.summary}</Text>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={project.data.image}
          alt={project.data.title}
          width={1000}
          height={1000}
          className='h-96 w-full object-cover'
        />

        <article
          className='prose prose-stone max-w-full marker:text-slate-900 
          prose-p:text-lg prose-blockquote:border-slate-900 prose-li:text-lg'
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: getContent<Project["data"]>("projects").map(project => ({
      params: { slug: project.slug }
    })),
    fallback: false
  };
};

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const project = getContent<Project["data"]>("projects").find(
    project => project!.slug === params?.slug
  );
  if (!project) throw new Error("Project not found");

  return {
    props: { project }
  };
};

type ProjectProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Project({ project }: ProjectProps) {
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
      <section className='space-y-6 py-12'>
        <SEO
          title={`${project.data.title} - Jake Ord`}
          description={project.data.summary}
        />
        <HeadingOne>This project is protected</HeadingOne>
        <Text>
          If you are hitting this page it is likely because this project is
          still ongoing and contains sensitive information. Unfortunately, I
          cannot share the token to access this page. If you are a
          recruiter/hiring manager and wanting to see this project, please get
          in touch with me and we can work something out.
        </Text>
        <form
          onSubmit={handleAuth}
          className='flex flex-col justify-center gap-4'
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
          <Button type='submit'>Submit token</Button>
        </form>
      </section>
    );
  }

  return <ProjectBody project={project} />;
}
