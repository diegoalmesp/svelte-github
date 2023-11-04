import { getContributorsInfo } from '../../utils/server';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const user = url.searchParams.get('user');
	const repo = url.searchParams.get('repo');
	if (!user || !repo) throw new Error('Missing user or repo');
	return {
		contributors: await getContributorsInfo(user, repo)
	};
}
