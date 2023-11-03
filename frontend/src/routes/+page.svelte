<script lang="ts">
  import Input from '$lib/components/Input.svelte'
  import { getGithubRepoInfo } from '$lib/server'

  let search: string = ''
</script>

<section class="w-full flex justify-center mb-6">
  <Input bind:search />
</section>

<h2 class="text-lg">Repos with the keyword: [{search}]</h2>
