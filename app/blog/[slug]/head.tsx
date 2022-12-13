import DefaultTags from "@app/seo";
import { getPost } from "@content/parse";

type Props = {
  params: { slug: string };
};

export default async function PostHead({ params }: Props) {
  const project = await getPost(params.slug);

  return (
    <>
      <DefaultTags />
      <title>{project.frontmatter.title}</title>
      <meta name='description' content={project.frontmatter.summary} />
    </>
  );
}
