<script lang="ts">
  export let secondary: boolean;
  export let link: boolean;
  export let href: string;
</script>

{#if link}
  <a {href} class:secondary>
    <slot />
  </a>
{:else}
  <button class:secondary on:click>
    <slot />
  </button>
{/if}

<style>
  a,
  button {
    padding: 1rem 1.4rem;
    border-radius: var(--brRadius);
    border: 1px solid var(--clrBlue);
    color: var(--clrWhite);
    font-weight: var(--fwMedium);
    transition: var(--delay) ease-out;
    cursor: pointer;
  }

  a {
    display: inline-block;
  }

  a:hover,
  button:hover {
    background-color: var(--clrLightBlue);
    transform: scale(var(--scaleDown));
  }

  .secondary {
    border: 1px solid var(--clrLightBlue);
    color: var(--clrWhite);
  }
</style>
