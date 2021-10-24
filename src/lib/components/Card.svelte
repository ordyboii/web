<script>
  export let post = false
  export let data = []
  export let slug = ''
</script>

{#if post}
  <a href={`writing/${slug}`} aria-label={`Link to ${data.title}`}>
    <article class="bg-white shadow-md rounded-md my-10 hover:scale-105 transition cursor-pointer">
      <img class="w-full object-cover overflow-hidden" src={data.image[0].url} alt={data.title} />
      <div class="space-y-4 p-8">
        <h3>{data.title}</h3>
        <p>{data.date}</p>
        <p>{data.keywords}</p>
        <p>{data.summary}</p>
        <p>Read More</p>
      </div>
    </article>
  </a>
{:else}
  <a href={`work/${slug}`} aria-label={`Link to ${data.title}`}>
    <article class="bg-white shadow-md rounded-md my-10 hover:scale-105 transition">
      <img
        class="w-full object-cover h-96 overflow-hidden"
        src={data.image[0].url}
        alt={data.title}
      />
      <div class="space-y-4 p-8">
        <h3>{data.title}</h3>
        <div>
          <p>
            <span class="font-semibold">Client:</span>
            {data.client}
          </p>
          <p>
            <span class="font-semibold">Roles:</span>
            {data.role}
          </p>
        </div>
        <p>{data.summary}</p>
        <p>Read Case Study</p>
      </div>
    </article>
  </a>
{/if}
