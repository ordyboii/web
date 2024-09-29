<script setup>
useSeoMeta({
  title: "Jake Ord - Interaction Designer",
  description:
    "Interaction designer based in Newcastle Upon Tyne, UK working at HMRC.",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: "ordyboii-template",
  },
  link: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <a class="ordyboii-skip-link" href="#template-main"> Skip to content </a>
  <header class="ordyboii-flex">
    <NuxtImg src="/logo.svg" width="40" height="50" aria-hidden="true" />
    <h1 class="ordyboii-heading">
      Jake Ord
      <br />
      <span class="ordyboii-caption">Interaction Designer</span>
    </h1>
  </header>
  <main class="ordyboii-template__main" id="template-main">
    <section
      class="ordyboii-template__section ordyboii-flow"
      aria-label="Introduction"
    >
      <h2 class="ordyboii-heading">Hey, I am Jake 🐉</h2>
      <p class="ordyboii-body">
        I am an interaction designer and accessibility advocate. I have been
        working at
        <a
          class="ordyboii-link"
          href="https://www.gov.uk/government/organisations/hm-revenue-customs"
          >HMRC</a
        >
        where I help build accessible, interactive services for the UK.
      </p>
    </section>

    <section
      class="ordyboii-template__section ordyboii-flow"
      aria-label="Work history"
    >
      <h2 class="ordyboii-heading">Work</h2>
      <p class="ordyboii-body">
        I have contributed and helped design a lot of services throughout my
        career. I have a deep knowledge of interaction and UX design, WCAG
        guidelines, accessibility and designing for the right users. Here is a
        summary of my work.
      </p>

      <h3 class="ordyboii-heading">
        HMRC
        <br />
        <span class="ordyboii-caption">Interaction designer</span>
      </h3>

      <p class="ordyboii-body">
        From 2023, I joined HMRC, the UK Tax Authority. I have helped design and
        test a lot of internal and external services. Most work was done agile
        and prototyping was done using the
        <a
          class="ordyboii-link"
          href="https://prototype-kit.service.gov.uk/docs/"
          >GOV.UK Prototype Kit</a
        >
        in code, also reviewing services using tools like
        <a
          class="ordyboii-link"
          href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"
          >Axe DevTools</a
        >
        against the
        <a class="ordyboii-link" href="https://www.w3.org/TR/WCAG22/">WCAG</a>
        guidelines
      </p>

      <h3 class="ordyboii-heading">
        DEF Software
        <br />
        <span class="ordyboii-caption">UX designer</span>
      </h3>

      <p class="ordyboii-body">
        A software company who provide solutions to local authorities in the UK,
        for planning development. From 2020, I led the design of their main
        back-office product. During my process, I designed in visual tools like
        Adobe CC, but transitioned to C# prototyping. Using this with the
        development team to create richer, more accessible designs for user
        research.
      </p>

      <p class="ordyboii-body">
        Throughout my 3 years at
        <a class="ordyboii-link" href="https://www.def.co.uk/">DEF</a>, I
        designed marketing kits and templates for the consulting staff, led
        are-design of the website, led user testing, created working groups with
        customers and grew a UX culture within the wider team.
      </p>
    </section>

    <section
      class="ordyboii-template__section ordyboii-flow"
      aria-label="More from Jake Ord"
    >
      <h2 class="ordyboii-heading">More</h2>
      <p class="ordyboii-body">
        You can see my work on
        <a class="ordyboii-link" href="https://github.com/ordyboii">Github</a>
        or get in contact with me by
        <a class="ordyboii-link" href="mailto:jake.ord345@gmail.com">email</a>.
      </p>
    </section>
  </main>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --colourFocus: #ffdd00;
  --colourBlack: #0a0a0a;
  --colourMidBlack: #d4d4d8;
  --colourWhite: #f5f5f5;
  --fsBody: 19px;
  --fwBold: 600;
  --fwRegular: 400;
}

.ordyboii-template {
  font-family: "Inter", Arial, sans-serif;
  line-height: 1.5;
  background-color: var(--colourBlack);
  color: var(--colourWhite);
  max-width: 36rem;
  margin-inline: auto;
  padding: 1rem;
  padding-top: 4rem;
  font-size: var(--fsBody);

  &__section {
    padding-block: 2rem;
  }
}

.ordyboii-link {
  color: var(--colourMidBlack);

  &:hover {
    color: var(--colourFocus);
  }

  &:visited {
    color: var(--colourMidBlack);
  }

  &:focus {
    background-color: var(--colourFocus);
    color: var(--colourBlack);
  }
}

.ordyboii-heading {
  font-weight: 600;
  font-size: var(--fsBody);
}

.ordyboii-flex {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.ordyboii-flow > * + * {
  margin-top: 1.6rem;
}

.ordyboii-body {
  font-size: var(--fsBody);
}

.ordyboii-caption {
  font-size: 16px;
  color: var(--colourMidBlack);
}

.ordyboii-skip-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--colourFocus);
  color: var(--colourBlack);
  padding: 1rem;
  opacity: 0;

  &:focus {
    opacity: 1;
  }
}

.ordyboii-profile {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
