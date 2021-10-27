<script>
  import SectionTag from './SectionTag.svelte'
  import Card from './Card.svelte'
  export let data
  export let posts = false
  export let tag = ''
  export let title = ''
  export let subtitle = ''
</script>

<section id="work">
  <div class="container space-y">
    <div class="grid">
      <SectionTag>{tag}</SectionTag>
      <div class="intro space-y">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>

    <div class="grid item-grid">
      {#if posts}
        {#each data as item}
          <Card post data={item.data} slug={item.id} />
        {/each}
      {:else}
        {#each data as item}
          <Card data={item.data} slug={item.id} />
        {/each}
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--clrWhite-20);
    padding: calc(5 * var(--spacer)) 0;
  }

  .intro {
    grid-column: span 2;
    margin: var(--spacer) 0;
  }

  .grid {
    --cols: 1;

    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
  }

  .item-grid {
    gap: calc(1.4 * var(--spacer));
  }

  @media (min-width: 40em) {
    .grid {
      --cols: 4;
    }
    .item-grid {
      --cols: 3;
    }
    .intro {
      margin: 0;
    }
  }
</style>
