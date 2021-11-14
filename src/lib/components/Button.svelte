<script>
  export let secondary = false
  export let onClick
  export let link = false
  export let href = ''
</script>

{#if link}
  <a class:secondary {href}>
    <slot />
  </a>
{:else}
  <button class:secondary on:click={onClick}>
    <slot />
  </button>
{/if}

<style>
  a,
  button {
    padding: 1rem 1.4rem;
    border-radius: var(--brRadius);
    background-color: var(--clrBlue);
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
    box-shadow: var(--elevation);
    transform: scale(var(--scaleDown));
    opacity: var(--fade);
  }

  .secondary {
    background-color: var(--clrYellow);
    color: var(--clrBlack);
  }
</style>
