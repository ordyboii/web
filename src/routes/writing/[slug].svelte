<script context="module">
  export async function load({ fetch, page }) {
    const post = await fetch(`/writing/${page.params.slug}.json`)

    return {
      props: {
        post: await post.json()
      }
    }
  }
</script>

<script>
  import ContactCard from '$lib/components/ContactCard.svelte'
  import Divider from '$lib/components/Divider.svelte'
  export let post = {}
</script>

<svelte:head>
  <title>{post.data.title}</title>
  <meta name="description" content={post.data.summary} />
</svelte:head>

<section>
  <div class="container space-y animate-slide-up">
    <h1>{post.data.title}</h1>
    <div class="grid">
      <div class="space-y">
        <p>{new Date(post.data.date).toLocaleDateString()}</p>
        <p>{post.data.keywords.join(', ')}</p>
      </div>
      <div class="space-y">
        <h4>Summary:</h4>
        <p>{post.data.summary}</p>
      </div>
    </div>
  </div>

  <Divider />
</section>

<section class="article">
  <article class="container">
    {@html post.content}
  </article>
</section>

<ContactCard />

<style>
  section {
    position: relative;
    background-color: var(--clrBlue);
    padding-top: calc(1.4 * var(--spacer));
    padding-bottom: calc(14 * var(--spacer));
    color: var(--clrWhite);
  }
  section > .space-y {
    --y: calc(1.4 * var(--spacer));
  }

  .grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: var(--spacer);
  }
  .grid > .space-y {
    --y: calc(1.4 * var(--spacer));
  }

  @media (min-width: 40em) {
    .grid {
      --cols: 4;
    }
  }

  .article {
    padding: calc(3 * var(--spacer)) 0;
    background-color: var(--clrWhite);
    color: var(--clrBlack);
  }
  .article > article {
    padding: calc(1.4 * var(--spacer));
    margin-bottom: calc(1.4 * var(--spacer));
    box-shadow: var(--elevation);
  }
</style>
