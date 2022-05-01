<script lang="ts">
  import { blur, fly } from "svelte/transition";
  export let trigger: string;
</script>

{#key trigger}
  <div in:fly={{ x: 500, opacity: 1, duration: 250 }}>
    <slot />
  </div>
{/key}
