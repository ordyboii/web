<script>
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { page } from "$app/stores";
  import { blur } from "svelte/transition";
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

<a href="#content" class="skip-link">Skip to content</a>

{#key $page.url?.pathname}
  <div class="app" in:blur>
    <Header />
    <main id="content">
      <slot />
    </main>
    <Footer />
  </div>
{/key}

<style global>
  @import "@fontsource/fira-sans/700.css";
  @import "@fontsource/fira-sans/500.css";
  @import "@fontsource/public-sans/500.css";
  @import "@fontsource/public-sans/400.css";
  /* GLOBAL */
  :root {
    /* Colors */
    --clrBlue: hsl(225, 5%, 15%);
    --clrBlue-20: hsl(225, 5%, 25%);
    --clrLightBlue: hsl(190, 49%, 60%);
    --clrLightBlue-20: hsl(190, 49%, 50%);
    --clrWhite: hsl(0, 0%, 100%);
    --clrWhite-20: hsl(0, 0%, 96%);
    --clrBlack: hsl(0, 0%, 4%);

    --ffHeading: "Fira Sans", sans-serif;
    --ffBody: "Public Sans", sans-serif;

    --fsBase: 1rem;
    --fsResize: calc(4vw + var(--fsBase));
    --fsHeading-1: clamp(3.052rem, var(--fsResize), 3.815rem);
    --fsHeading-2: 1.953rem;
    --fsHeading-3: 1.563rem;
    --fsHeading-4: 1.25rem;
    --fsSmall: 0.8rem;

    --fwMedium: 500;
    --fwBold: 700;

    --scaleUp: 1.05; /* Transform Scale */
    --scaleDown: 0.95; /* Transform Scale */
    --fade: 0.7; /* Opacity */
    --brRadius: 0.4rem; /* Border Radius */
    --elevation: 0.2rem 0.2rem 4rem 0.5rem hsla(190, 49%, 60%, 0.6); /* Box Shadow */
    --overlay: 10; /* z-index */
    --delay: 0.15s; /* Timing delay (transitions, animations etc.) */
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--ffHeading);
    font-weight: var(--fwMedium);
    line-height: 1.2;
  }
  h1 {
    font-size: var(--fsHeading-1);
    font-weight: var(--fwBold);
  }
  h2 {
    font-size: var(--fsHeading-2);
  }
  h3 {
    font-size: var(--fsHeading-3);
  }
  h4 {
    font-size: var(--fsHeading-4);
  }
  h5 {
    font-size: var(--fsHeading-5);
  }

  .app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  .skip-link {
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    background-color: var(--clrLightBlue-20);
    padding: 0.8rem;
    opacity: 0;
    transition: var(--delay) ease-in;
  }
  .skip-link:focus {
    opacity: 1;
  }

  .container {
    width: min(90%, 80em);
    margin: 0 auto;
  }

  .space-y > * + * {
    --y: 1.2rem;
    margin-top: var(--y);
  }
  .space-x > * + * {
    --x: 1.2rem;
    margin-left: var(--x);
  }

  /* ANIMATIONS */
  .animate-slide-up {
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

  /* PREFERENCES */
  @media (prefers-reduced-motion) {
    html {
      scroll-behavior: auto;
    }
  }

  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    font-family: var(--ffBody);
    line-height: 1.6;
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
</style>
