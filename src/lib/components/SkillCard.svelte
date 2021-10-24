<script>
  export let title = ''
  export let skills = []
</script>

<article class="bg-gray-50 p-12 space-y-4">
  <h3>{title}</h3>
  <ul class="list-disc pl-4">
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</article>
