<script>
  import Menu from 'svelte-material-icons/Menu.svelte'
  import Button from '$lib/components/Button.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { fly } from 'svelte/transition'

  let menuOpen = false
</script>

<header>
  <div class="container">
    <a href="/">
      <img src="/logo.svg" alt="Jake Ord logo" loading="lazy" decoding="async" />
    </a>
    <nav>
      <ul>
        <li>
          <SocialLinks inverse />
        </li>
        <li>
          <Button link secondary href="https://airtable.com/shrPxJaKvGIqSoD2A">Get in touch</Button>
        </li>
      </ul>
      <button on:click={() => (menuOpen = !menuOpen)}>
        <Menu size={28} color="white" />
      </button>
    </nav>
  </div>

  {#if menuOpen}
    <nav class="mobile" transition:fly={{ y: 60 }}>
      <ul>
        <li>
          <SocialLinks />
        </li>
        <li>
          <Button link secondary href="https://airtable.com/shrPxJaKvGIqSoD2A">
            Get in touch!
          </Button>
        </li>
      </ul>
    </nav>
  {/if}
</header>

<style>
  header {
    position: relative;
    background-color: var(--clrBlue);
    color: var(--clrWhite);
    padding: calc(2 * var(--spacer)) 0;
  }
  header > div {
    display: flex;
    justify-content: space-between;
  }
  header > div :is(ul) {
    display: none;
    align-items: center;
    gap: calc(1.4 * var(--spacer));
  }

  header :is(a) {
    transition: var(--delay) ease-out;
  }
  header :is(a:hover) {
    transform: scale(var(--scaleDown));
    opacity: var(--fade);
  }
  header :is(button) {
    cursor: pointer;
  }

  @media (min-width: 40em) {
    header > div :is(ul) {
      display: flex;
    }
    header :is(button) {
      display: none;
    }
  }

  .mobile {
    position: absolute;
    top: calc(4 * var(--spacer));
    width: 100%;
    padding: calc(1.6 * var(--spacer));
    background-color: var(--clrWhite);
    box-shadow: var(--elevation);
    z-index: var(--overlay);
  }
  .mobile > ul {
    display: flex;
    flex-direction: column;
    gap: calc(1.2 * var(--spacer));
    justify-content: center;
    align-items: center;
    color: var(--clrBlack);
  }
</style>
