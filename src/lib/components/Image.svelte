<script>
  export let source;
  const { url, alt, dimensions } = source;
</script>

<img
  src={url}
  {alt}
  width={dimensions?.width}
  height={dimensions?.height}
  loading="lazy"
  decoding="async"
/>
