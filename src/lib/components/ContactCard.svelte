<script>
  import Button from '$lib/components/Button.svelte'
</script>

<aside class="space-y">
  <h4>Want to contact me!</h4>
  <p>Get in touch with me below and I'll aim to respond back as soon as I can</p>
  <Button secondary link href="https://airtable.com/shrPxJaKvGIqSoD2A">Get in touch!</Button>
</aside>

<style>
  aside {
    display: grid;
    place-items: center;

    max-width: 56rem;
    margin: calc(3 * var(--spacer)) auto;
    padding: calc(2.4 * var(--spacer));

    background-color: var(--clrBlue);
    border-radius: var(--brRadius);
    box-shadow: var(--elevation);
    text-align: center;
    color: var(--clrWhite);
  }
</style>
