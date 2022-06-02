<script lang="ts">
  import "$lib/styles/global.css";
  import { page } from "$app/stores";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import SkipLink from "$lib/components/skip-link.svelte";
  import Transition from "$lib/components/transition.svelte";
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
  <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<SkipLink />

<Transition trigger={$page.url.pathname}>
  <div class="app">
    <Header />
    <main id="content">
      <slot />
    </main>
    <Footer />
  </div>
</Transition>
