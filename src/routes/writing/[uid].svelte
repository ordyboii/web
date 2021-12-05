<script context="module">
  export const load = async ({ fetch, page }) => {
    const post = await fetch(`/writing/${page.params.uid}.json`);
    return {
      props: { post: await post.json() }
    };
  };
</script>

<script>
  import ContactCard from '$lib/components/ContactCard.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import { asHTML } from '@prismicio/helpers';
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.summary} />
</svelte:head>

<section>
  <div class="container space-y animate-slide-up">
    <h1>{post.title}</h1>
    <div class="grid">
      <div class="space-y">
        <p>{new Date(post.date).toLocaleDateString()}</p>
        <p>
          {post.keywords.map(({ keyword }) => keyword).join(', ')}
        </p>
      </div>
      <div class="space-y">
        <h4>Summary:</h4>
        <p>{post.summary}</p>
      </div>
    </div>
  </div>

  <Divider />
</section>

<section class="article">
  <article class="container">
    {@html asHTML(post.content)}
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
