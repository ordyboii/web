<script context="module">
  export async function load({ fetch }) {
    const projectsRes = await fetch('/projects.json')
    const postsRes = await fetch('/posts.json')

    const projects = await projectsRes.json()
    const posts = await postsRes.json()

    return {
      props: { projects, posts }
    }
  }
</script>

<script>
  import Button from '$lib/components/Button.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import SectionTag from '$lib/components/SectionTag.svelte'
  import Card from '$lib/components/Card.svelte'
  import SkillCard from '$lib/components/SkillCard.svelte'
  import ContactCard from '$lib/components/ContactCard.svelte'

  export let projects = []
  export let posts = []
</script>

<section class="relative bg-blue-900 text-white pt-8 pb-52">
  <div class="container space-y-6 animate-slide">
    <p>Hi I'm Jake Ord</p>
    <h1 class="max-w-2xl">
      An aloud <span class="text-yellow-200">thinker</span> &
      <span class="text-yellow-200">creative</span> go-getter
    </h1>
    <p class="max-w-2xl">
      A UX designer based in Newcastle-Upon-Tyne. I focus on creating experiences that matter, that
      are both accessible and easy to use. I love solving problems and creating products that
      deliver value.
    </p>
    <Button link secondary href="#work">View my work</Button>
  </div>

  <div class="absolute bottom-0 w-full rotate-180">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-current text-white"
      />
    </svg>
  </div>
</section>

<section class="container py-20 grid grid-cols-1 gap-24 md:grid-cols-4">
  <div class="space-y-12">
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

  <div class="col-span-2 space-y-4">
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

  <img
    src="https://dl.airtable.com/.attachmentThumbnails/7f37d3112b4e1aa581625fe77fc766f7/9bcae35a"
    alt=""
  />
</section>

<section id="work" class="bg-gray-100 py-20">
  <div class="container space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-4">
      <SectionTag>Work</SectionTag>
      <div class="col-span-2 my-4 md:my-0 space-y-4">
        <h2>Featured projects</h2>
        <p>Some of my recent projects I've worked on in my career</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      {#each projects as project}
        <Card data={project.data} slug={project.id} />
      {/each}
    </div>
  </div>
</section>

<section class="py-20 container">
  <div class="grid grid-cols-1 md:grid-cols-4 mb-8">
    <SectionTag>Skills</SectionTag>
    <div class="col-span-2 my-4 md:my-0 space-y-4">
      <h2>Skills and Experience</h2>
      <p>I've worked with many projects over the years. Here's the skills I've picked up</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <SkillCard
      title="Design"
      skills={[
        'User Experience & journey mapping',
        'Adobe Suite',
        'Facilitating UX workshops',
        'Experience in accessible design',
        'Creating and maintaining design systems'
      ]}
    />
    <SkillCard
      title="Other"
      skills={[
        'CSS, HTML & JS',
        'Knowledgeable about the development process',
        'Managing expectations and time on projects',
        'Experience in mobile apps, built some on the side'
      ]}
    />
  </div>
</section>

<section class="bg-gray-100 py-20">
  <div class="container space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-4">
      <SectionTag>Writing</SectionTag>
      <div class="col-span-2 my-4 md:my-0 space-y-4">
        <h2>Featured posts</h2>
        <p>Have a read through some of the things I've said about design and development</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      {#each posts as post}
        <Card post data={post.data} slug={post.id} />
      {/each}
    </div>
  </div>
</section>

<ContactCard />
