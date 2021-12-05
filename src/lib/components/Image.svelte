<script>
  export let source;
  const { fields } = source;
</script>

<picture>
  <source srcset={`${source.url || fields?.file?.url}?fm=avif&q=50`} type="image/avif" />
  <source srcset={`${source.url || fields?.file?.url}?fm=webp&q=50`} type="image/webp" />
  <img
    src={`${source.url || fields?.file?.url}?q=50`}
    alt={source.alt || fields?.title}
    width={fields?.file?.details.width}
    height={fields?.file?.details.height}
    loading="lazy"
    decoding="async"
  />
</picture>
