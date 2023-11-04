<script lang="ts">
  import "iconify-icon";
  /** @type {import('./$types').PageData} */
	export let data: any;

  let avatar: string = ''
  let contributions: number = 0
  let url: string = ''
  let repos_url: string = ''
  let username: string = ''

  function handleMouseOver(login, avatar_url, contributions_num, url_profile, url_repos) {
    username = login
    avatar = avatar_url
    contributions = contributions_num
    url = url_profile
    repos_url = url_repos
  }
</script>

<h1 class="text-4xl font-light mb-4">Contributors page</h1>

<div class="flex flex-row justify-around text-yellow-300">
  <div class="h-[inherit]">
    <div class="w-[400px] flex flex-col items-end pt-4 pr-8 sticky top-0">
      {#if url !== ''}
        <h2 class="text-lg underline">{username} Stats</h2>
        <h3>contributions: {contributions}</h3>
        <a href={url} target="_blank" rel="noopener noreferrer">go to profile page {'>'}</a><br />
        <a href={repos_url} target="_blank" rel="noopener noreferrer">repositories API {'>'}</a>
      {/if}
    </div>
  </div>
  <div>
    {#each data.contributors as contributor}
      <div class="my-4 hover:text-yellow-100 flex items-center gap-2" on:mouseover={() => handleMouseOver(
        contributor.login,
        contributor.avatar_url,
        contributor.contributions,
        contributor.html_url,
        contributor.repos_url
      )}>
        {contributor.login}
        <iconify-icon icon={`carbon:${contributor.type === 'Bot' ? 'bot' : 'user'}`}></iconify-icon>
      </div>
    {/each}
  </div>

  <div class="w-[400px] flex justify-center">
    {#if avatar !== ''}
      <img src={avatar} alt="avatar" class="w-[200px] h-[200px] sticky top-5"/>
    {/if}
  </div>
</div>

