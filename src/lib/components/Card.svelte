<script lang="ts">
  export let item: {
    data: {
      title: string;
      image: string;
      imageAlt: string;
      client: string;
      role: string;
      summary: string;
    };
    slug: string;
  };
  const { data, slug } = item;
</script>

<a href={`/work/${slug}`} aria-label={`Link to ${data.title}`}>
  <article>
    <img src={data.image} alt={data.imageAlt} loading="lazy" decoding="async" />
    <div class="space-y">
      <h3>{data.title}</h3>
      <div>
        <p>
          <span>Client: </span>
          {data.client}
        </p>
        <p>
          <span>Roles: </span>
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
    transition: var(--delay) ease;
  }
  article:hover {
    transform: scale(var(--scaleUp));
    animation: shake 0.4s ease-in-out 0.5s;
  }
  article > div {
    padding: 2rem;
  }
  article :is(span) {
    font-weight: var(--fwBold);
  }

  @keyframes shake {
    0% {
      transform: scale(var(--scaleUp)) rotate(5deg);
    }
    25% {
      transform: scale(var(--scaleUp)) rotate(5deg);
    }
    50% {
      transform: scale(var(--scaleUp)) rotate(0deg);
    }
    75% {
      transform: scale(var(--scaleUp)) rotate(-5deg);
    }
  }
</style>
