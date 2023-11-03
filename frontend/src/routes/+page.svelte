<script lang="ts">
  import Input from '$lib/components/Input.svelte'
  import ReposList from '$lib/components/ReposList.svelte'
  import { getGithubRepoInfo } from '../utils/server'

  let search: string = ''

  $: repos = getGithubRepoInfo(search)
</script>

<section class="w-full flex justify-center mb-6">
  <Input bind:search />
</section>

<h2 class="text-lg mb-8">Repos with the keyword: [{search}]</h2>

{#await repos}
  <p>Loading...</p>
{:then repos}
  <ReposList repos={repos} />
{:catch error}
  <p>{error.message}</p>
{/await}
