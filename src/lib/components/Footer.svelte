<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<footer>
  <div class="container">
    <div>
      <p>© Jake Ord, {new Date().getFullYear()}</p>
      <a
        rel="external"
        target="_blank"
        href="https://assets.ctfassets.net/fn3f7hx698nb/7kpqEOhzKUsNCvMufjHI8X/48076d19d6b143829e111d2615dcf05e/Jake_Ord_Design_CV.pdf"
        >CV</a
      >
    </div>
    <SocialLinks inverse />
  </div>
</footer>

<style>
  footer {
    background-color: var(--clrBlue);
    padding: 1.4rem 0;
  }
  footer :is(div) {
    display: flex;
    align-items: center;
  }
  footer > div {
    flex-direction: column;
    gap: 2rem;
  }
  footer :is(p, a) {
    color: var(--clrWhite);
  }

  a {
    margin-left: 1rem;
    text-decoration: underline;
  }
  a:hover {
    opacity: var(--fade);
  }

  @media (min-width: 40em) {
    footer > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
