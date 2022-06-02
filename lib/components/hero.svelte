<script lang="ts">
  import Button from "$lib/components/button.svelte";
</script>

<section>
  <div class="container animate-slide-up">
    <div class="space-y-6">
      <p>Hi I'm Jake Ord</p>
      <h1>
        An aloud <span>thinker</span> & <span>creative</span> go-getter
      </h1>
      <p>
        A UX designer based in Newcastle-Upon-Tyne. I focus on creating
        experiences that matter, that are both accessible, approchable and easy
        to use. I love solving problems and creating products that deliver
        value. Oh, and I like dragons in case you didn't know!
      </p>
      <div class="buttons">
        <Button link secondary href="#work">View my work</Button>
        <a rel="norefferer" target="_blank" href="/Jake_Ord_Design_CV.pdf">
          Or view my CV
        </a>
      </div>
    </div>

    <div class="dragon-container">
      <div class="dragon" />
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--clrBlue);
    color: var(--clrWhite);
    padding-top: 1.4rem;
    padding-bottom: 6rem;
    border-bottom: 6px solid var(--clrLightBlue);
  }

  section > div {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
  }

  section :is(h1, p) {
    max-width: 38rem;
  }

  section :is(span) {
    color: var(--clrLightBlue);
  }

  section :is(a) {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 40em) {
    .buttons {
      flex-direction: column;
    }
    section :is(div) {
      --y: 3rem;
    }
    section > div {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .dragon-container {
    width: 100%;
    display: grid;
    place-content: center;
  }

  .dragon {
    background-image: url("http://i444.photobucket.com/albums/qq168/grandmadeb_rmvx/Dragoncrnagomi.png");
    width: 96px;
    height: 256px;
    animation: run 0.5s steps(2) infinite;
  }

  @keyframes run {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: -960px;
    }
  }
</style>
