<script lang="ts">
  export let secondary: boolean,
    link: boolean,
    href: string,
    onClick: () => {} | null;
</script>

{#if link}
  <a class={secondary && "secondary"} {href}>
    <slot />
  </a>
{:else}
  <button class={secondary && "secondary"} {onClick}>
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
