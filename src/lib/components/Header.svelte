<script>
  import Menu from 'svelte-material-icons/Menu.svelte';
  import Button from '$lib/components/Button.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import { fly } from 'svelte/transition';
  import Image from './Image.svelte';

  let menuOpen = false;
</script>

<header>
  <div class="container">
    <a href="/">
      <Image
        source={{
          url: 'https://jakeord.cdn.prismic.io/jakeord/99d6d305-6b4f-44a6-b7f5-12d1639f8388_logo.svg',
          alt: 'Jake Ord Logo'
        }}
      />
    </a>
    <nav>
      <ul>
        <li>
          <SocialLinks inverse />
        </li>
        <li>
          <Button link secondary href="mailto:jake.ord345@gmail.com">Get in touch</Button>
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
          <Button link secondary href="mailto:jake.ord345@gmail.com">Get in touch!</Button>
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
    top: 4rem;
    width: 100%;
    padding: 1.6rem;
    background-color: var(--clrWhite);
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
