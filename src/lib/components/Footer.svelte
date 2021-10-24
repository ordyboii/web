<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte'
</script>

<footer class="bg-blue-900 py-8">
  <div class="container flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
    <div class="flex items-center">
      <p class="text-white">© Jake Ord, {new Date().getFullYear()}</p>
    </div>
    <SocialLinks inverse />
  </div>
</footer>
