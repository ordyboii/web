<script setup>
const route = useRoute();

const { data: config } = await useAsyncData(() =>
  queryContent("config").findOne()
);

useServerSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} | ${config.value.siteTitle}`
      : config.value.siteTitle;
  },
  description: config.siteDescription,
  ogType: "website",
  ogTitle: config.value.siteTitle,
  ogDescription: config.value.siteDescription,
  ogImage: config.value.siteImage,
  ogImageAlt: config.value.siteTitle,
  twitterTitle: config.value.siteTitle,
  twitterDescription: config.value.siteDescription,
  twitterImage: config.value.siteImage,
  twitterImageAlt: config.value.siteTitle,
  twitterCard: "summary",
});
</script>

<template>
  <a class="skip-link" href="#content"> Skip to content </a>
  <header class="header stack">
    <svg
      class="flex-shrink-none"
      fill="white"
      width="50"
      height="80"
      min-width="50"
    >
      <title>
        Logo for Jake Ord, features the katakana ジェイク in a square
      </title>
      <use fill="currentColor" href="/logo.svg#logo"></use>
    </svg>
    <nav class="stack" aria-label="Website navigation">
      <ul class="nav stack">
        <li>
          <NuxtLink to="/" :aria-current="route.path === '/' ? 'page' : false">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/case-studies"
            :aria-current="pathname === '/case-studies' ? 'page' : false"
          >
            Case Studies
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/writing"
            :aria-current="pathname === '/writing' ? 'page' : false"
          >
            Writing
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="content grid">
    <nav aria-label="Social links">
      <ul class="social-links stack">
        <li>
          <a :href="config.twitter" aria-label="Link to my Twitter page">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/twitter.svg#twitter"></use>
            </svg>
          </a>
        </li>
        <li>
          <a :href="config.linkedin" aria-label="Link to my LinkedIn page">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/linkedin.svg#linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a :href="config.github" aria-label="Link to my Github page">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/github.svg#github"></use>
            </svg>
          </a>
        </li>
        <li>
          <a :href="`mailto:${config.email}`" aria-label="Email me!">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/mail.svg#mail"></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <div id="content"><NuxtPage /></div>
  </main>
</template>

<style>
/* TOKENS & RESET */

:root {
  --colour-primary: hsl(50, 20%, 77%);
  --colour-secondary: hsl(200, 42%, 14%);

  --font-sans: "Noto Sans", sans-serif;
  --font-serif: "Noto Serif", serif;
  --font-bold: 700;
  --font-regular: 400;

  --font-base: 1rem;
  --font-scale: 4vw;
  --font-l: clamp(
    1.25 * var(--font-base),
    var(--font-scale),
    1.5 * var(--font-base)
  );
  --font-xl: clamp(
    1.5 * var(--font-base),
    var(--font-scale),
    1.9 * var(--font-base)
  );
  --font-2xl: clamp(
    1.9 * var(--font-base),
    var(--font-scale),
    3 * var(--font-base)
  );

  --radius: 0.8rem;
}

* {
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  min-height: 100%;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select,
a {
  font: inherit;
  color: inherit;
}

/* BASE */

html {
  scroll-behavior: smooth;
}

body {
  --flow: 2.4rem;

  font-family: var(--font-sans);
  line-height: 1.6;
  letter-spacing: 0.03ch;
  background-color: var(--colour-secondary);
  color: var(--colour-primary);
  max-width: 1000px;
  margin-inline: auto;
  padding: 1.2rem;
  isolation: isolate;
  overflow-x: hidden;
}

#__nuxt > * + * {
  margin-top: var(--flow, 1rem);
}

h1,
h2,
h3 {
  font-family: var(--font-serif);
  font-weight: var(--font-bold);
  line-height: 1.2;
}

h1 {
  font-size: var(--font-2xl);
}

h2 {
  font-size: var(--font-xl);
}

h3 {
  font-size: var(--font-l);
}

p {
  max-width: var(--measure, 60ch);
}

p[data-width="wide"] {
  --measure: 100%;
}

hr {
  border: 0.5px solid var(--colour-primary);
}

ul[class] {
  list-style: none;
  padding: 0;
}

a {
  color: currentColor;
}

a:where(:hover, :focus, :active) {
  text-decoration: none;
}

img {
  max-width: 100%;
  object-fit: cover;
  height: auto;
}

details {
  cursor: pointer;
}

::selection {
  background-color: var(--colour-primary);
  color: var(--colour-secondary);
}

/* COMPOSITION */

.stack {
  display: flex;
  gap: var(--gutter, 1rem);
  align-items: var(--stack-vertical-alignment, center);
  justify-content: var(--stack-horizontal-alignment, flex-start);
  flex-wrap: var(--stack-wrap, wrap);
  flex-direction: var(--stack-direction, row);
}

.grid {
  display: grid;
  gap: var(--gutter, 3rem);
  grid-template-columns: var(--grid-columns, auto);
  grid-template-rows: var(--grid-rows, auto);
}

@media (min-width: 50em) {
  .grid[data-cols="even"] {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}

:where(.flow > :not(:first-child)) {
  margin-top: var(--flow, 1rem);
}

/* BLOCKS */

@media (min-width: 50em) {
  .content {
    --grid-columns: auto 1fr;
  }
}

.skip-link {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.8rem 1.2rem;
  background-color: var(--colour-primary);
  color: var(--colour-secondary);
  opacity: 0;
}

.skip-link:focus {
  opacity: 1;
}

@media (min-width: 50em) {
  .social-links {
    --stack-direction: column;
  }
}

.nav a {
  padding: 0.4rem 0.8rem;
}

@media (min-width: 50em) {
  .nav a {
    padding: 0.8rem 1.2rem;
  }
}

.nav a:is(:hover, :focus),
.nav a[aria-current="page"] {
  background-color: var(--colour-primary);
  color: var(--colour-secondary);
  border-radius: var(--radius);
  text-decoration: none;
}

.home > div {
  --stack-wrap: nowrap;
}

.avatar > img {
  flex-shrink: none;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 100vmax;
  object-fit: cover;
  border: 3px solid var(--colour-primary);
}

.writing {
  --flow: 2rem;
}

.writing a {
  --flow: 1rem;
}

@media (min-width: 50em) {
  .case-studies > div {
    --grid-columns: 1fr 1fr;
  }
}

.card {
  display: block;
  background-color: var(--colour-primary);
  color: var(--colour-secondary);
  box-shadow: 0 8px 16px hsl(0 0% 0% / 0.1);
  border-radius: var(--radius);
  overflow: hidden;
}

.card > div {
  padding: 1.2rem 2rem;
}

.card img {
  max-height: 14rem;
}

.card a {
  display: inline-block;
}

.toc {
  background-color: var(--colour-primary);
  color: var(--colour-secondary);
  border-radius: var(--radius);
  padding: 1.8rem 2rem;
}

/* UTILITIES */

.flex-shrink-none {
  flex-shrink: 0;
}

.content-image {
  max-height: 500px;
}
</style>
