<script lang="ts">
  import Input from '$lib/components/Input.svelte'
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
  {#each repos as repo}
    <div class="flex flex-col justify-center items-center mb-4">
      <a
        class="text-green-300 hover:underline font-mono"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repo.name}
      </a>
      <p class="text-sm text-gray-500">{repo.description}</p>
    </div>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}
