<script>
  import Image from './Image.svelte'
  export let post = false
  export let item = []

  const { data, uid } = item
</script>

{#if post}
  <a href={`writing/${uid}`} aria-label={`Link to ${data.title}`}>
    <article>
      <Image source={data.image} />
      <div class="space-y">
        <h3>{data.title}</h3>
        <p>{new Date(data.date).toLocaleDateString()}</p>
        <p>
          {Object.values(data.keywords)
            .map(item => item.keyword)
            .join(', ')}
        </p>
        <p>{data.summary}</p>
        <p>Read More</p>
      </div>
    </article>
  </a>
{:else}
  <a href={`work/${uid}`} aria-label={`Link to ${data.title}`}>
    <article>
      <Image source={data.image} />
      <div class="space-y">
        <h3>{data.title}</h3>
        <div>
          <p>
            <span>Client:</span>
            {data.client}
          </p>
          <p>
            <span>Roles:</span>
            {data.role}
          </p>
        </div>
        <p>{data.summary}</p>
        <p>Read Case Study</p>
      </div>
    </article>
  </a>
{/if}

<style>
  article {
    margin: 1.6rem 0;
    background-color: var(--clrWhite);
    box-shadow: var(--elevation);
    border-radius: var(--brRadius);
    transition: var(--delay) ease-in-out;
  }
  article:hover {
    transform: scale(var(--scaleUp));
  }
  article > div {
    padding: 2rem;
  }
  article :is(span) {
    font-weight: var(--fwBold);
  }
</style>
