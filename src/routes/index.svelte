<script context="module">
  export const load = async ({ fetch }) => {
    const projects = await fetch('/projects.json');
    const posts = await fetch('/posts.json');

    return {
      props: {
        projects: await projects.json(),
        posts: await posts.json()
      }
    };
  };
</script>

<script>
  import Hero from '$lib/components/Hero.svelte';
  import Bio from '$lib/components/Bio.svelte';
  import Featured from '$lib/components/Featured.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import ContactCard from '$lib/components/ContactCard.svelte';

  export let projects = [];
  export let posts = [];
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

<Featured
  posts
  data={posts}
  tag="writing"
  title="Featured posts"
  subtitle="Have a read through some of the things I've said about design and development"
/>

<ContactCard />
