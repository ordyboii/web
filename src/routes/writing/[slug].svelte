<script context="module">
  export async function load({ fetch, page }) {
    const post = await fetch(`/writing/${page.params.slug}.json`)

    return {
      props: { post: await post.json() }
    }
  }
</script>

<script>
  import ContactCard from '$lib/components/ContactCard.svelte'
  import Divider from '$lib/components/Divider.svelte'
  export let post
</script>

<svelte:head>
  <title>{post.data.title}</title>
  <meta name="description" content={post.data.description} />
</svelte:head>

<section>
  <div class="container space-y animate-slide-up">
    <h1>{post.data.title}</h1>
    <div class="grid">
      <div class="space-y">
        <p>{new Date(post.data.date).toLocaleDateString()}</p>
        <p>
          {post.data.keywords.join(', ')}
        </p>
      </div>
      <div class="space-y">
        <h4>Description:</h4>
        <p>{post.data.description}</p>
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
    background: var(--clrBlue);
    padding-top: 1.4rem;
    padding-bottom: 14rem;
    color: var(--clrWhite);
  }
  section > .space-y {
    --y: 1.4rem;
  }

  .grid {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 1rem;
  }
  .grid > .space-y {
    --y: 1.4rem;
  }

  @media (min-width: 40em) {
    .grid {
      --cols: 4;
    }
  }

  .article {
    padding: 3rem 0;
    background-color: var(--clrWhite);
    color: var(--clrBlack);
  }
  .article > article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    box-shadow: var(--elevation);
  }
</style>
