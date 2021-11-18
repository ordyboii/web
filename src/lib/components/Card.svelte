<script>
  export let post, item
  const { data, slug } = item
</script>

{#if post}
  <a href={`writing/${slug}`} aria-label={`Link to ${data.title}`}>
    <article>
      <img src={data.main_image} alt={data.title} />
      <div class="space-y">
        <h3>{data.title}</h3>
        <p>{new Date(data.date).toLocaleDateString()}</p>
        <p>
          {data.keywords.join(', ')}
        </p>
        <p>{data.description}</p>
        <p>Read More</p>
      </div>
    </article>
  </a>
{:else}
  <a href={`work/${slug}`} aria-label={`Link to ${data.title}`}>
    <article>
      <img src={data.main_image} alt={data.title} />
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
        <p>{data.description}</p>
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
