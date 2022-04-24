import styles from "styles/components/skill-card.module.css";

interface Props {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: Props) {
  return (
    <article className={`${styles.article} space-y`}>
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
