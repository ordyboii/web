<script>
  export let title = ''
  export let skills = []
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

  ul {
    list-style: disc;
    padding-left: 1rem;
  }
</style>
