<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte'
</script>

<footer>
  <div class="container">
    <div>
      <p>© Jake Ord, {new Date().getFullYear()}</p>
    </div>
    <SocialLinks inverse />
  </div>
</footer>

<style>
  footer {
    background-color: var(--clrBlue);
    padding: calc(1.4 * var(--spacer)) 0;
  }
  footer :is(div) {
    display: flex;
    align-items: center;
  }
  footer > div {
    flex-direction: column;
    gap: calc(2 * var(--spacer));
  }
  footer :is(p) {
    color: var(--clrWhite);
  }

  @media (min-width: 40em) {
    footer > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
