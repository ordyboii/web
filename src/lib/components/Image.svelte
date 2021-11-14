<script>
  export let source = {}
</script>

<img
  src={source.url}
  alt={source.alt}
  width={source.dimensions.width}
  height={source.dimensions.height}
  loading="lazy"
  decoding="async"
/>
