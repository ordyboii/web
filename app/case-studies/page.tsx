import Image from "next/image";
import Link from "next/link";
import { allProjects, allSides } from "~/.contentlayer/generated";

export default function CaseStudiesPage() {
  return (
    <section className='case-studies flow'>
      <h1>Case Studies</h1>

      <div className='grid'>
        <div className='flow'>
          <h2>Client Work</h2>
          <ul className='flow'>
            {allProjects.map(project => (
              <li key={project._id}>
                <Link className='card' href={project.url}>
                  <Image
                    src={project.image}
                    alt={`${project.title} hero image`}
                    width={1600}
                    height={900}
                  />
                  <div className='flow'>
                    <h3>{project.title}</h3>
                    <p>
                      <strong>Client:</strong> {project.client}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flow'>
          <h2>On The Side</h2>
          <ul className='flow'>
            {allSides.map(side => (
              <li key={side._id} className='card'>
                <Image
                  src={side.image}
                  alt={`${side.title} hero image`}
                  width={1600}
                  height={900}
                />
                <div className='flow'>
                  <h3>{side.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: side.body.html }} />
                  <a href={side.link}>View Project</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
