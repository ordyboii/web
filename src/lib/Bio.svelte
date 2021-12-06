<script>
  import SectionTag from './SectionTag.svelte';
  import SocialLinks from './SocialLinks.svelte';
</script>

<section class="container">
  <div class="space-y">
    <SectionTag>About</SectionTag>
    <div>
      <p>
        <strong>Current Location</strong>
      </p>
      <p>Newcastle, UK</p>
    </div>
    <div>
      <p>
        <strong>Education</strong>
      </p>
      <p>BA Hons in Graphic Design at Northumbria</p>
    </div>
    <div>
      <p>
        <strong>Interests</strong>
      </p>
      <p>Motorcycling, cooking, design, building apps, cinema, anime, figure collecting</p>
    </div>
  </div>

  <div class="right space-y">
    <h2>
      Welcome to my humble corner of the interent. If your curious to find out more about me, read
      on...
    </h2>
    <p>
      I'm a UX designer currently living in Newcastle, UK working at DEF Software Ltd. Prior to that
      I was studying a BA Hons in Graphic Design at Northumbria University.
      <br />
      <br />
      In the past few years I've taken a greater interest in learning how to build what I design and
      developed a new interest in coding and building out apps from ideas that I've had.
      <br />
      <br />
      If I'm not tinkering with code or working on a side-project you'll usually find me catch me watching
      the latest film or collecting more figures. The best way to follow my work is on Github and Instagram
      which you can find the links to below.
    </p>
    <SocialLinks />
  </div>

  <img src="/me.jpeg" alt="Jake Ord standing in front of a gate" loading="lazy" decoding="async" />
</section>

<style>
  section {
    --cols: 1;
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 3rem;
    padding: 5rem 0;
  }
  section > .space-y {
    --y: 2rem;
  }

  .right {
    grid-column: span 2;
  }

  @media (min-width: 40em) {
    section {
      --cols: 4;
    }
  }
</style>
