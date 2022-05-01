<script lang="ts">
  import Hero from "$lib/components/hero.svelte";
  import Bio from "$lib/components/bio.svelte";
  import Featured from "$lib/components/featured.svelte";
  import Skills from "$lib/components/skills.svelte";
  import ContactCard from "$lib/components/contact-card.svelte";

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
