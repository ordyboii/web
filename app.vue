<script setup lang="ts">
useServerSeoMeta({
  title: "Jake Ord - Interaction Designer",
  description:
    "Interaction designer based in Newcastle Upon Tyne, UK working at HMRC.",
});

useServerHead({
  link: [{ rel: "icon", href: "/favicon.svg" }],
});
</script>

<template>
  <a class="ob-skip-link" href="#main-content"> Skip to main content </a>
  <div class="ob-container">
    <header class="ob-cluster">
      <NuxtImg
        src="/logo.svg"
        alt=""
        width="40"
        height="50"
        aria-hidden="true"
      />
      <h1>
        Jake Ord
        <br />
        <span style="color: var(--colour-grey)"> Interaction Designer </span>
      </h1>
    </header>
    <main id="main-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss">
// DESIGN TOKENS

:root {
  --colour-grey: #ced4da;
  --colour-grey-1: color-mix(in oklch, var(--colour-grey) 10%, white);
  --colour-grey-8: color-mix(in oklch, var(--colour-grey) 20%, black);

  --colour-yellow: #ffd43b;

  --spacing: 0.25rem;
  --radius: 0.3rem;
  --resize: 4vw;

  --font-inter: "Inter", Arial, sans-serif;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --font-size-xxl: clamp(3.815rem, var(--resize), 3.052rem);
  --font-size-xl: clamp(3.052rem, var(--resize), 2.441rem);
  --font-size-lg: clamp(2.441rem, var(--resize), 1.953rem);
  --font-size-md: clamp(1.953rem, var(--resize), 1.563rem);
  --font-size-sm: clamp(1.563rem, var(--resize), 1.25rem);
}

@mixin ob-spacing($property, $value, $variable: null) {
  @if ($variable) {
    #{$property}: var(#{$variable}, calc(var(--spacing) * #{$value}));
  } @else {
    #{$property}: calc(var(--spacing) * #{$value});
  }
}

// GLOBALS

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  font: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

body {
  font-family: var(--font-inter);
  line-height: 1.6;
  background-color: var(--colour-grey-8);
  color: var(--colour-grey-1);
  @include ob-spacing("padding-block", 8);
}

img {
  max-width: 100%;
  height: auto;
}

p {
  max-width: 60ch;
}

h1,
h2 {
  line-height: 1.1;
}

[role="list"] {
  list-style: none;
}

h1 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

h2 {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
}

h3 {
  font-weight: var(--font-weight-bold);
}

a {
  color: var(--colour-grey);

  &:focus {
    background-color: var(--colour-yellow);
    outline: 2px solid var(--colour-grey-1);
    color: var(--colour-grey-8);
  }
}

// LAYOUT

.ob-cluster {
  display: flex;
  flex-direction: var(--cluster-direction, row);
  align-items: var(--cluster-align, center);
  @include ob-spacing("gap", 4, "--cluster-gap");
}

.ob-flow {
  display: grid;
  @include ob-spacing("gap", 4, "--flow-gap");
}

.ob-region {
  @include ob-spacing("padding-block", 8, "--region-padding");
}

.ob-container {
  max-width: 600px;
  margin-inline: auto;
}

// COMPONENTS

.ob-skip-link {
  @include ob-spacing("padding", 1);
  position: absolute;
  top: -100%;
  left: 0;
  background-color: var(--colour-grey-9);
  color: var(--colour-grey-1);
  text-decoration: none;

  &:focus {
    top: 0;
  }
}
</style>
