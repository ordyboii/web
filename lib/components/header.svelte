<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import SocialLinks from "$lib/components/social-links.svelte";
  import Icon from "$lib/components/icon.svelte";
  import { fly } from "svelte/transition";

  let menuOpen = false;
</script>

<header>
  <div class="container">
    <a href="/" aria-label="Link to home page">
      <img
        src="/images/logo.svg"
        alt="Jake Ord Logo"
        width="100%"
        height="100%"
        loading="lazy"
      />
    </a>
    <nav class="mobile-nav">
      <ul>
        <li>
          <SocialLinks inverse />
        </li>
        <li>
          <Button link secondary href="mailto:jake.ord345@gmail.com">
            Get in touch
          </Button>
        </li>
      </ul>
      <button on:click={() => (menuOpen = !menuOpen)}>
        <Icon name="menu" width={32} height={32} colour="var(--clrWhite)" />
      </button>
    </nav>
  </div>

  {#if menuOpen}
    <nav transition:fly={{ y: 30 }} class="mobile">
      <ul>
        <li>
          <SocialLinks inverse={false} />
        </li>
        <li>
          <Button link secondary href="mailto:jake.ord345@gmail.com">
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
    padding: 2rem 0;
  }

  header > div {
    display: flex;
    justify-content: space-between;
  }

  header > div :is(ul) {
    display: none;
    align-items: center;
    gap: 1.4rem;
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
    transition: var(--delay) ease;
  }

  header :is(button):hover {
    transform: rotate(15deg);
  }

  @media (min-width: 40em) {
    header > div :is(ul) {
      display: flex;
    }
    header :is(button) {
      display: none;
    }
  }

  .mobile-nav {
    display: flex;
    align-items: center;
  }

  .mobile {
    position: absolute;
    width: 100%;
    padding: 1.6rem;
    background-color: var(--clrBlue);
    box-shadow: var(--elevation);
    z-index: var(--overlay);
  }

  .mobile > ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    color: var(--clrBlack);
  }
</style>
