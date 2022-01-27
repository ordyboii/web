<script>
  import Button from "./Button.svelte";
</script>

<aside class="space-y" aria-labelledby="Contact me">
  <h4>Want to contact me!</h4>
  <p>
    Get in touch with me below and I&apos;ll aim to respond back as soon as I
    can
  </p>
  <Button secondary link href="mailto:jake.ord345@gmail.com">
    Get in touch!
  </Button>
</aside>

<style>
  aside {
    display: grid;
    place-items: center;

    max-width: 56rem;
    margin: 3rem auto;
    padding: 2.4rem;

    background-color: var(--clrBlue);
    border-radius: var(--brRadius);
    box-shadow: var(--elevation);
    text-align: center;
    color: var(--clrWhite);
  }
</style>
