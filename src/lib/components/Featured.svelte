<script lang="ts">
  import Card from "./Card.svelte";
  import SectionTag from "./SectionTag.svelte";
  export let data: any[], tag: string, title: string, subtitle: string;
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
    .intro {
      margin: 0;
    }
  }
</style>
