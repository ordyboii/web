<script>
  export let source;
  const { url, alt, dimensions } = source;
  const src = url.replace(',format', '');
</script>

<picture>
  <source srcset={`${src}&fm=avif`} type="image/avif" />
  <source srcset={`${src}&fm=webp`} type="image/webp" />
  <img
    src={url}
    {alt}
    width={dimensions?.width}
    height={dimensions?.height}
    loading="lazy"
    decoding="async"
  />
</picture>
