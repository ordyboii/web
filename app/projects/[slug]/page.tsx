import Animate from "@app/animate";
import { HeadingOne, Text } from "@app/typography";
import { getProject } from "@content/parse";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <Animate>
      <section className='space-y-12 py-16'>
        <div className='space-y-6'>
          <Text>{project.frontmatter.client}</Text>
          <HeadingOne>{project.frontmatter.title}</HeadingOne>
          <Text>{project.frontmatter.summary}</Text>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={project.frontmatter.image}
          alt={project.frontmatter.title}
          width={2000}
          height={800}
          className='h-96 w-full object-cover'
        />

        <article
          className='prose prose-stone max-w-full marker:text-slate-900 prose-p:text-lg 
      prose-blockquote:border-slate-900 prose-li:text-lg'
          dangerouslySetInnerHTML={{ __html: project.body }}
        ></article>
      </section>
    </Animate>
  );
}
