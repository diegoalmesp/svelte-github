<script lang="ts">
  import Icons from "./Icons.svelte";
  export let repos: [] = [];
</script>

{#if repos.length}
  <div class="border border-green-950 p-6">
    {#each repos as repo}
      <div class="flex flex-col justify-center items-center pb-6 hover:bg-green-950">
        <div class="flex gap-2">
          <a
            class="text-green-300 hover:underline font-mono"
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name} {"::"}
          </a>
          <Icons icons={
            [
              {name: "direction-fork", value: repo.allow_forking},
              {name: "fork", value: repo.forks},
              {name: "dot-mark", value: repo.has_issues ? 'has issues' : 'no issues'},
              {name: "star-filled", value: repo.stargazers_count}
            ]
          } />
        </div>
        <p class="text-sm text-gray-500">{repo.description}</p>
      </div>
    {/each}
  </div>
{/if}
