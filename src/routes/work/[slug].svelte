<script lang="ts">
  import ContactCard from "$lib/components/ContactCard.svelte";
  export let project: Project;
</script>

<svelte:head>
  <title>{project.data.title}</title>
  <meta name="description" content={project.data.summary} />
</svelte:head>

<section
  class="project"
  style:background={`linear-gradient(hsla(225, 5%, 15%, 0.9), hsla(225, 5%, 15%, 0.6)), url(${project.data.image})`}
  style:background-size="cover"
>
  <div class="container space-y animate-slide-up">
    <h1>{project.data.title}</h1>
    <div class="project-grid">
      <div class="space-y">
        <p>
          <strong>Client:</strong>
          {project.data.client}
        </p>
        <p>
          <strong>Role:</strong>
          {project.data.role}
        </p>
      </div>
      <div class="space-y">
        <h4>Summary:</h4>
        <p>{project.data.summary}</p>
      </div>
    </div>
  </div>
</section>

<section class="project-article">
  <article class="container">
    {@html project.content}
  </article>
</section>

<ContactCard />

<style>
  .project {
    padding-block: 6rem;
    color: var(--clrWhite);
    border-bottom: 6px solid var(--clrLightBlue);
  }
  .project > .space-y {
    --y: 1.4rem;
  }

  .project-grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
  }
  .project-grid > .space-y {
    --y: 1.4rem;
  }

  @media (min-width: 40em) {
    .project-grid {
      --cols: 4;
    }
  }

  .project-article {
    padding: 3rem 0;
    background-color: var(--clrWhite);
    color: var(--clrBlack);
  }
  .project-article > article {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    border: 2px solid var(--clrBlack);
  }
</style>
