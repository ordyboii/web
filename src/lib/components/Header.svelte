<script>
  import Menu from 'svelte-material-icons/Menu.svelte'
  import Button from '$lib/components/Button.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'

  let menuOpen = false
</script>

<header role="banner" class="relative bg-blue-900 text-white py-8">
  <div class="container flex items-center justify-between">
    <a href="/" class="hover:opacity-70 hover:scale-95 transition">
      <img
        src="https://dl.airtable.com/.attachmentThumbnails/a07bb5df94edb43a811ea0c145acbaa5/1114de19.png"
        alt="Jake Ord logo"
      />
    </a>
    <nav>
      <ul class="hidden md:flex items-center gap-8">
        <li>
          <SocialLinks inverse />
        </li>
        <li>
          <Button link secondary href="https://airtable.com/shrPxJaKvGIqSoD2A">Get in touch</Button>
        </li>
      </ul>
      <button class="md:hidden" on:click={() => (menuOpen = !menuOpen)}>
        <Menu size={28} color="white" />
      </button>
    </nav>
  </div>

  {#if menuOpen}
    <nav class="absolute top-20 bg-white w-full p-8 shadow-md z-10">
      <ul class="flex flex-col justify-center items-center text-black gap-6">
        <li>
          <SocialLinks />
        </li>
        <li>
          <Button link secondary href="https://airtable.com/shrPxJaKvGIqSoD2A">
            Get in touch!
          </Button>
        </li>
      </ul>
    </nav>
  {/if}
</header>
