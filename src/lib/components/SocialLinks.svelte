<script lang="ts">
  import Icon from "./Icon.svelte";
  export let inverse: boolean;
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
        type="Linkedin"
        fill={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
      />
    </a>
  </li>
  <li>
    <a
      aria-label="Link to my Instagram"
      rel="noreferrer"
      href="https://www.instagram.com/jakeorddesign"
      target="_blank"
    >
      <Icon
        type="Instagram"
        fill={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
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
        type="Github"
        fill={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
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
