<script>
  export let post = false
  export let item = []

  const { data, slug } = item
</script>

{#if post}
  <a href={`writing/${slug}`} aria-label={`Link to ${data.title}`}>
    <article>
      <img src={data.image} alt={data.title} loading="lazy" decoding="async" />
      <div class="space-y">
        <h3>{data.title}</h3>
        <p>{new Date(data.date).toLocaleDateString()}</p>
        <p>{data.keywords.join(', ')}</p>
        <p>{data.summary}</p>
        <p>Read More</p>
      </div>
    </article>
  </a>
{:else}
  <a href={`work/${slug}`} aria-label={`Link to ${data.title}`}>
    <article>
      <img src={data.image} alt={data.title} loading="lazy" decoding="async" />
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
    margin: calc(1.6 * var(--spacer)) 0;
    background-color: var(--clrWhite);
    box-shadow: var(--elevation);
    border-radius: var(--brRadius);
    transition: var(--delay) ease-in-out;
  }
  article:hover {
    transform: scale(var(--scaleUp));
  }
  article > img {
    height: 24rem;
    object-fit: cover;
  }
  article > div {
    padding: calc(2 * var(--spacer));
  }
  article :is(span) {
    font-weight: var(--fwBold);
  }
</style>
