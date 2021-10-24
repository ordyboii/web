<script>
  import Github from 'svelte-material-icons/GithubCircle.svelte'
  import Linkedin from 'svelte-material-icons/Linkedin.svelte'
  import Instagram from 'svelte-material-icons/Instagram.svelte'
  export let inverse = false
</script>

<ul class="flex items-center gap-4">
  <li>
    <a rel="external" href="https://www.linkedin.com/in/jake-o-853626196" target="_blank">
      <Linkedin size={28} color={inverse ? 'white' : 'black'} />
    </a>
  </li>
  <li>
    <a rel="external" href="https://www.instagram.com/jakeorddesign" target="_blank">
      <Instagram size={28} color={inverse ? 'white' : 'black'} />
    </a>
  </li>
  <li>
    <a rel="external" href="https://github.com/jorddy" target="_blank">
      <Github size={28} color={inverse ? 'white' : 'black'} />
    </a>
  </li>
</ul>
