<script lang="ts">
  import Bio from "$lib/components/Bio.svelte";
  import ContactCard from "$lib/components/ContactCard.svelte";
  import Featured from "$lib/components/Featured.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Skills from "$lib/components/Skills.svelte";

  export let projects: Project[];
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
