<script lang="ts">
  import Card from "$lib/components/card.svelte";
  import SectionTag from "$lib/components/section-tag.svelte";

  export let data: Project[];
  export let tag: string;
  export let title: string;
  export let subtitle: string;
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
      {#each data as item}
        <Card {item} />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--clrWhite-20);
    padding: 5rem 0;
  }

  .grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
  }

  .intro {
    grid-column: span 2;
    margin: 1rem 0;
  }

  .item-grid {
    gap: 1.4rem;
  }

  @media (min-width: 40em) {
    .grid {
      --cols: 4;
    }
    .item-grid {
      --cols: 3;
    }
  }
</style>
