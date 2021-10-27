<script>
  import { page } from '$app/stores'
  import { blur } from 'svelte/transition'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>Jake Ord | UX Designer</title>
  <meta
    name="description"
    content="UX/UI designer based in Newcastle-Upon-Tyne.  focus on creating experiences that matter, that
    are both accessible and easy to use. I love solving problems and creating products that
    deliver value. An aloud thinker and creative go-getter."
  />
  <meta
    name="keywords"
    content="UX/UI, designer, Newcastle, Newcastle-Upon-Tyne, graphics, web, code"
  />
</svelte:head>

{#key $page.path}
  <div class="app" in:blur>
    <a href="#content" class="skip-link">Skip to content</a>

    <Header />
    <main id="content">
      <slot />
    </main>
    <Footer />
  </div>
{/key}

<style>
  @import '@fontsource/fira-sans/700.css';
  @import '@fontsource/fira-sans/500.css';
  @import '@fontsource/public-sans/500.css';
  @import '@fontsource/public-sans/400.css';

  :global(html) {
    box-sizing: border-box;
    font-size: 100%;
  }

  :global(:root) {
    /* Colors */
    --clrBlue: hsl(224, 64%, 33%);
    --clrBlue-20: hsl(224, 64%, 43%);
    --clrYellow: hsl(46, 97%, 75%);
    --clrYellow-20: hsl(46, 97%, 65%);
    --clrWhite: hsl(0, 0%, 100%);
    --clrWhite-20: hsl(0, 0%, 96%);
    --clrBlack: hsl(0, 0%, 4%);

    /* Typography */
    --ffHeading: 'Fira Sans', sans-serif;
    --ffBody: 'Public Sans', sans-serif;

    --fsBase: 1rem;
    --fsResize: calc(4vw + var(--fsBase));
    --fsHeading-1: clamp(3.052rem, var(--fsResize), 3.815rem);
    --fsHeading-2: 1.953rem;
    --fsHeading-3: 1.563rem;
    --fsHeading-4: 1.25rem;
    --fsSmall: 0.8rem;

    --fwMedium: 500;
    --fwBold: 700;

    /* Utilities */
    --spacer: 1rem; /* Margin/Padding/Positioning, use calc() * function to adjust */
    --scaleUp: 1.05; /* Transform Scale */
    --scaleDown: 0.95; /* Transform Scale */
    --fade: 0.7; /* Opacity */
    --brRadius: 0.4rem; /* Border Radius */
    --elevation: 0 0.2rem 1.4rem hsla(0, 0%, 0%, 0.1); /* Box Shadow */
    --overlay: 10; /* z-index */
    --delay: 0.15s; /* Timing delay (transitions, animations etc.) */
  }

  :global(*, *::before, *::after) {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family: var(--ffBody);
    line-height: 1.5;
  }
  :global(a) {
    color: inherit;
    text-decoration: none;
  }
  :global(ul) {
    list-style: none;
  }
  :global(button) {
    border: none;
    background: none;
  }
  :global(img) {
    width: 100%;
    height: auto;
  }

  /* Headings */
  :global(h1, h2, h3, h4, h5) {
    font-family: var(--ffHeading);
    font-weight: var(--fwMedium);
    line-height: 1.2;
  }
  :global(h1) {
    font-size: var(--fsHeading-1);
    font-weight: var(--fwBold);
  }
  :global(h2) {
    font-size: var(--fsHeading-2);
  }
  :global(h3) {
    font-size: var(--fsHeading-3);
  }
  :global(h4) {
    font-size: var(--fsHeading-4);
  }
  :global(h5) {
    font-size: var(--fsHeading-5);
  }

  /* Utilities */
  :global(.container) {
    width: min(90%, 80em);
    margin: 0 auto;
  }
  :global(.space-y > * + *) {
    --y: calc(1.2 * var(--spacer));
    margin-top: var(--y);
  }
  :global(.space-x > * + *) {
    --x: calc(1.2 * var(--spacer));
    margin-left: var(--x);
  }

  /* Animations */
  :global(.animate-slide-up) {
    animation: slideUp 0.4s ease-in;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(calc(6 * var(--spacer)));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Layout styles */
  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .skip-link {
    position: absolute;
    top: calc(0.6 * var(--spacer));
    left: calc(0.6 * var(--spacer));
    background-color: var(--clrYellow-20);
    padding: calc(0.8 * var(--spacer));
    opacity: 0;
    transition: var(--delay) ease-in;
  }
  .skip-link:focus {
    opacity: 1;
  }
</style>
