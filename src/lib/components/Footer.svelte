<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<footer>
  <div class="container">
    <div>
      <p>© Jake Ord, {new Date().getFullYear()}</p>
      <a rel="norefferer" target="_blank" href="/Jake_Ord_Design_CV.pdf">
        CV
      </a>
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

  footer a {
    margin-left: 1rem;
    text-decoration: underline;
  }
  footer a:hover {
    opacity: var(--fade);
  }

  @media (min-width: 40em) {
    footer > div {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
