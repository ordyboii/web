import Animate from "@app/animate";
import AnnotatedText from "@app/annotated-text";
import WorkGrid from "@app/work-grid";
import { getProjects } from "@content/parse";

export default async function ClientWorkPage() {
  const projects = await getProjects();

  return (
    <Animate>
      <section className='grid gap-6 py-16'>
        <AnnotatedText
          component='HeadingOne'
          type='underline'
          content='Client Work'
        />
        <WorkGrid projects={projects} />
      </section>
    </Animate>
  );
}
