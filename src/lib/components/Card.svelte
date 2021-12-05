<script>
  import Image from './Image.svelte';
  export let fields;
</script>

<a href={`work/${fields.slug}`} aria-label={`Link to ${fields.title}`}>
  <article>
    <Image source={fields.image} />
    <div class="space-y">
      <h3>{fields.title}</h3>
      <div>
        <p>
          <span>Client:</span>
          {fields.client}
        </p>
        <p>
          <span>Roles:</span>
          {fields.role}
        </p>
      </div>
      <p>{fields.summary}</p>
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
