<script context="module">
  export const load = async ({ fetch }) => {
    const projects = await fetch('/projects.json');
    return {
      props: { projects: await projects.json() }
    };
  };
</script>

<script>
  import Hero from '$lib/Hero.svelte';
  import Bio from '$lib/Bio.svelte';
  import Featured from '$lib/Featured.svelte';
  import Skills from '$lib/Skills.svelte';
  import ContactCard from '$lib/ContactCard.svelte';
  export let projects = [];
</script>

<Hero />
<Bio />
<Featured
  data={projects}
  tag="work"
  title="Featured projects"
  subtitle="Some of my recent projects I've worked on in my career"
/>
<Skills />
<ContactCard />
