<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  import { fly } from "svelte/transition";
  let menuOpen = false;
</script>

<header>
  <div class="container">
    <a href="/">
      <img
        src="/images/logo.svg"
        alt="Jake Ord Logo"
        loading="lazy"
        decoding="async"
      />
    </a>
    <nav>
      <ul>
        <li>
          <SocialLinks inverse />
        </li>
        <li>
          <Button
            link
            secondary
            href="mailto:jake.ord345@gmail.com"
            onClick={null}
          >
            Get in touch
          </Button>
        </li>
      </ul>
      <button on:click={() => (menuOpen = !menuOpen)}>
        <Icon type="Menu" fill="white" />
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
          <Button
            link
            secondary
            href="mailto:jake.ord345@gmail.com"
            onClick={null}
          >
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
    top: 5rem;
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
