<script>
  import SectionTag from "./SectionTag.svelte";
  import SkillCard from "./SkillCard.svelte";
</script>

<section class="container">
  <div>
    <SectionTag>Skills</SectionTag>
    <div class="intro space-y">
      <h2>Skills and Experience</h2>
      <p>
        I&apos;ve worked with many projects over the years. Here&apos;s the
        skills I&apos;ve picked up
      </p>
    </div>
  </div>

  <div class="skills-grid">
    <SkillCard
      title="Design"
      skills={[
        "User Experience & journey mapping",
        "Adobe Suite",
        "Facilitating UX workshops",
        "Experience in accessible design",
        "Creating and maintaining design systems"
      ]}
    />
    <SkillCard
      title="Other"
      skills={[
        "CSS, HTML & JS",
        "Knowledgeable about the development process",
        "Managing expectations and time on projects",
        "Experience in mobile apps, built some on the side"
      ]}
    />
  </div>
</section>

<style>
  section {
    padding: 5rem 0;
  }
  section > :first-child {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .intro {
    grid-column: span 2;
    margin: 1rem 0;
  }

  .skills-grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
  }

  @media (min-width: 40em) {
    section > :first-child {
      --cols: 4;
    }
    .intro {
      margin: 0;
    }
    .skills-grid {
      --cols: 2;
    }
  }
</style>
