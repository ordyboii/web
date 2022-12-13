import Animate from "@app/animate";
import { HeadingOne, Text } from "@app/typography";
import { getPost } from "@content/parse";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <Animate>
      <section className='space-y-12 py-16'>
        <div className='space-y-6'>
          <Text>
            Published: {new Date(post.frontmatter.date).toLocaleDateString()}
          </Text>
          <HeadingOne>{post.frontmatter.title}</HeadingOne>
          <Text>{post.frontmatter.summary}</Text>
          <hr className='border border-gray-900' />
        </div>

        <Image
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          width={1000}
          height={1000}
          className='h-96 w-full object-cover'
        />

        <article
          className='prose prose-stone max-w-full marker:text-slate-900 prose-p:text-lg 
      prose-blockquote:border-slate-900 prose-li:text-lg'
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></article>
      </section>
    </Animate>
  );
}
