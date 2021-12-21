<script context="module">
  export const prerender = true;
  export const load = async ({ fetch, page }) => {
    const project = await fetch(`/work/${page.params.slug}.json`);
    return {
      props: { project: await project.json() }
    };
  };
</script>

<script>
  import ContactCard from '$lib/ContactCard.svelte';
  import Divider from '$lib/Divider.svelte';
  export let project;
</script>

<svelte:head>
  <title>{project.data.title}</title>
  <meta name="description" content={project.data.summary} />
</svelte:head>

<section>
  <div class="container space-y animate-slide-up">
    <h1>{project.data.title}</h1>
    <div class="grid">
      <div class="space-y">
        <p><strong>Client:</strong> {project.data.client}</p>
        <p><strong>Role:</strong> {project.data.role}</p>
      </div>
      <div class="space-y">
        <h4>Summary:</h4>
        <p>{project.data.summary}</p>
      </div>
    </div>
  </div>

  <Divider />
</section>

<section class="article">
  <article class="container">
    {@html project.content}
  </article>
</section>

<ContactCard />

<style>
  section {
    position: relative;
    padding-top: 1.4rem;
    background: var(--clrBlue);
    padding-bottom: 14rem;
    color: var(--clrWhite);
  }
  section > .space-y {
    --y: 1.4rem;
  }

  .grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
  }
  .grid > .space-y {
    --y: 1.4rem;
  }

  @media (min-width: 40em) {
    .grid {
      --cols: 4;
    }
  }

  .article {
    padding: 3rem 0;
    background-color: var(--clrWhite);
    color: var(--clrBlack);
  }
  .article > article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    box-shadow: var(--elevation);
  }
</style>
