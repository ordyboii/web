import Animate from "@app/animate";
import AnnotatedText from "@app/annotated-text";
import ProjectGrid from "@app/project-grid";
import { getProjects } from "@content/parse";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <Animate>
      <section className='grid gap-6 py-16'>
        <AnnotatedText
          component='HeadingOne'
          type='underline'
          content='My Work'
        />
        <ProjectGrid projects={projects} />
      </section>
    </Animate>
  );
}
