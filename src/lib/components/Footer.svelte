<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte'
</script>

<footer>
  <div class="container">
    <div>
      <p>© Jake Ord, {new Date().getFullYear()}</p>
      <a
        rel="external"
        target="_blank"
        href="https://prismic-io.s3.amazonaws.com/jakeord/2f8eda04-79f0-4fac-a1f1-0a3d7e271fe3_Jake_Ord_Design_CV.pdf"
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
