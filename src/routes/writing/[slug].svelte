<script context="module">
  export async function load({ fetch, page }) {
    const postRecord = await fetch(`/work/${page.params.slug}.json`)

    return {
      props: {
        post: await postRecord.json()
      }
    }
  }
</script>

<script>
  import ContactCard from '$lib/components/ContactCard.svelte'
  export let post = {}
</script>

<svelte:head>
  <title>{post.data.title}</title>
  <meta name="description" content={post.data.summary} />
</svelte:head>

<section class="relative bg-blue-900 pt-8 pb-48 text-white">
  <div class="container space-y-8 animate-slide">
    <h1>{post.data.title}</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="space-y-8">
        <p>{post.data.date}</p>
        <p>{post.data.keywords}</p>
      </div>
      <div class="space-y-4">
        <h4>Summary:</h4>
        <p>{post.data.summary}</p>
      </div>
    </div>
  </div>

  <div class="absolute bottom-0 w-full rotate-180">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-current text-white"
      />
    </svg>
  </div>
</section>

<section class="py-20">
  <article class="container p-8 mb-8  shadow-md">
    {@html post.content}
  </article>
</section>

<ContactCard />
