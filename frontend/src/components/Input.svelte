<script lang="ts">
  export let search: string = '';
</script>

<input
  bind:value={search}
  type="text" 
  class="block w-80 h-9 px-3 rounded"
  placeholder="enter your search..." />


