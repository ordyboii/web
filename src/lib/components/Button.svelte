<script>
  export let secondary = false
  export let onClick
  export let link = false
  export let href = ''
</script>

{#if link}
  <a
    class={`inline-block px-6 py-4 rounded-md font-medium hover:shadow-lg hover:scale-95 hover:opacity-70 transition ${
      secondary ? 'bg-yellow-200 text-black' : 'bg-blue-900 text-white'
    }`}
    {href}
  >
    <slot />
  </a>
{:else}
  <button
    class={`px-6 py-4 rounded-md font-medium hover:shadow-lg hover:scale-95 hover:opacity-70 transition cursor-pointer ${
      secondary ? 'bg-yellow-200 text-black' : 'bg-blue-900 text-white'
    }`}
    on:click={onClick}
  >
    <slot />
  </button>
{/if}
