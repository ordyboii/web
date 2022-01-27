<script lang="ts">
  export let title: string, skills: string[];
</script>

<article class="space-y">
  <h3>{title}</h3>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</article>

<style>
  article {
    background-color: var(--clrWhite-20);
    padding: 3rem;
  }

  article ul {
    list-style: disc;
    padding-left: 1rem;
  }
</style>
