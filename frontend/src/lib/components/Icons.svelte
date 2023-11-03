<script lang="ts">
  import "iconify-icon";
  import Tooltip from "../library/Tooltip.svelte";
  export let icons: [] = []
</script>

<div class="flex">
  {#each icons as icon}
    <Tooltip text={icon.value}>
      <iconify-icon icon={`carbon:${icon.name}`} class={`${icon.value ? 'text-green-700' : 'text-red-700'} pr-1`}></iconify-icon>
    </Tooltip>
  {/each}
</div>
