<script lang="ts">
  import Icon from "$lib/components/icon.svelte";
  export let inverse = false;
</script>

<ul>
  <li>
    <a
      aria-label="Link to my Linkedin"
      rel="noreferrer"
      href="https://www.linkedin.com/in/jake-o-853626196"
      target="_blank"
    >
      <Icon
        name="linkedin"
        colour={inverse ? "var(--clrWhite)" : "var(--clrLightBlue)"}
      />
    </a>
  </li>
  <li>
    <a
      aria-label="Link to my Github"
      rel="noreferrer"
      href="https://github.com/jorddy"
      target="_blank"
    >
      <Icon
        name="github"
        colour={inverse ? "var(--clrWhite)" : "var(--clrLightBlue)"}
      />
    </a>
  </li>
</ul>

<style>
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
</style>
