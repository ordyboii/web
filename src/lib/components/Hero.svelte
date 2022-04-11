<script>
  import Button from "./Button.svelte";
</script>

<section>
  <div class="container space-y-6 animate-slide-up">
    <p>Hi I'm Jake Ord</p>
    <h1>
      An aloud <span>thinker</span> & <span>creative</span> go-getter
    </h1>
    <p>
      A UX designer based in Newcastle-Upon-Tyne. I focus on creating
      experiences that matter, that are both accessible and easy to use. I love
      solving problems and creating products that deliver value.
    </p>
    <div class="buttons">
      <Button link secondary href="#work" onClick={null}>View my work</Button>
      <a rel="norefferer" target="_blank" href="/Jake_Ord_Design_CV.pdf">
        Or view my CV
      </a>
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
  }
</style>
