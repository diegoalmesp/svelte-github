export async function getGithubRepoInfo(name: string, language = 'typescript', results = 30) {
	if (!name || name === '') return [];

	// https://api.github.com/search/repositories?q=${name}+language:${language}&sort=${sort}&order=desc&per_page=${perPage}&page=${pageNum}
	return fetch(
		`https://api.github.com/search/repositories?q=${name}+language:${language}&sort=stars&order=desc&per_page=${results}&page=1`
	)
		.then((res) => res.json())
		.then((data) => {
			return data.items;
		});
}

export async function getContributorsInfo(user: string, repo: string) {
	return fetch(`https://api.github.com/repos/${user}/${repo}/contributors`)
		.then((res) => res.json())
		.then((data) => {
			return data;
		});
}
