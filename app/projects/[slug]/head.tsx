import DefaultTags from "@app/seo";
import { getProject } from "@content/parse";

type Props = {
  params: { slug: string };
};

export default async function ProjectHead({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <>
      <DefaultTags />
      <title>{project.frontmatter.title}</title>
      <meta name='description' content={project.frontmatter.summary} />
    </>
  );
}
