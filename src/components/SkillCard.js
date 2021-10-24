export default function SkillCard({ title, skills }) {
  return (
    <article className='bg-gray-50 p-12 space-y-4'>
      <h3>{title}</h3>
      <ul className='list-disc pl-4'>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}
