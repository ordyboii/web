<script>
  export let source;
</script>

<picture>
  <source srcset={`${source.url}?fm=avif&q=50`} type="image/avif" />
  <source srcset={`${source.url}?fm=webp&q=50`} type="image/webp" />
  <img
    src={`${source.url}?q=50`}
    alt={source?.title || source?.description}
    width={source?.width}
    height={source?.height}
    loading="lazy"
    decoding="async"
  />
</picture>
