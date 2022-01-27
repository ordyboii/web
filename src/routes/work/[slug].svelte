<script lang="ts" context="module">
  import ContactCard from "$lib/components/ContactCard.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch, params }) => {
    const res = await fetch(`/work/${params.slug}.json`);
    const data = await res.json();
    return { props: { project: data } };
  };
</script>

<script lang="ts">
  export let project: Project;
</script>

<svelte:head>
  <title>{project.data.title}</title>
  <meta name="description" content={project.data.summary} />
</svelte:head>

<section class="project">
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

  <Divider />
</section>

<section class="project-article">
  <article class="container">
    {@html project.content}
  </article>
</section>

<ContactCard />

<style>
  .project {
    position: relative;
    padding-top: 1.4rem;
    background: var(--clrBlue);
    padding-bottom: 14rem;
    color: var(--clrWhite);
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
    gap: 1rem;
    padding: 3rem;
    box-shadow: var(--elevation);
  }
</style>
