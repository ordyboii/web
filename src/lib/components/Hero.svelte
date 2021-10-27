<script>
  import Button from '$lib/components/Button.svelte'
  import Divider from './Divider.svelte'
</script>

<section>
  <div class="container space-y animate-slide-up">
    <p>Hi I'm Jake Ord</p>
    <h1>
      An aloud <span>thinker</span> &
      <span>creative</span> go-getter
    </h1>
    <p>
      A UX designer based in Newcastle-Upon-Tyne. I focus on creating experiences that matter, that
      are both accessible and easy to use. I love solving problems and creating products that
      deliver value.
    </p>
    <Button link secondary href="#work">View my work</Button>
  </div>

  <Divider />
</section>

<style>
  section {
    position: relative;
    background-color: var(--clrBlue);
    color: var(--clrWhite);
    padding-top: calc(1.4 * var(--spacer));
    padding-bottom: calc(14 * var(--spacer));
  }
  section :is(h1, p) {
    max-width: 38rem;
  }
  section :is(span) {
    color: var(--clrYellow);
  }
</style>
