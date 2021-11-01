<script>
  import '$lib/styles/global.css'
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
