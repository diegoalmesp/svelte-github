<script lang="ts">
  export let repos: [] = [];
</script>

{#if repos.length}
  <div class="border border-green-950 p-6">
    {#each repos as repo}
      <div class="flex flex-col justify-center items-center pb-6 hover:bg-green-950">
        <a
          class="text-green-300 hover:underline font-mono"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {repo.name} ->
        </a>
        <p class="text-sm text-gray-500">{repo.description}</p>
      </div>
    {/each}
  </div>
{/if}
