<script lang="ts">
  import debounce from 'lodash.debounce'
  export let search: string = '';

  const onSearch = debounce((e: Event) => {
    const term: string = (e.target as HTMLInputElement).value;
    search = term
  }, 800)
</script>

<input
  type="text" 
  class="block w-80 h-9 px-3 rounded"
  placeholder="enter your search..."
  on:input={onSearch}
/>

