<script>
  export let item;
  const { data, slug } = item;
</script>

<a href={`/work/${slug}`} aria-label={`Link to ${data.title}`}>
  <article>
    <img src={data.image} alt="Project" loading="lazy" decoding="async" />
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
