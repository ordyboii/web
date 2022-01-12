interface Props {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: Props) {
  return (
    <article className='skill-card space-y'>
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
