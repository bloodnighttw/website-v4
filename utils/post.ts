import * as fs from "node:fs";
import path from "node:path";
import matter from 'gray-matter';

export interface PostMeta {
	path: string;
	title: string;
	date: string;
}

// cache the data, so we don't have to read the file every time
// if the data has new posts, the server will need to be restarted,
// so we don't have to worry about the cache being outdated.
// We might use a database in the future to store the data.
// For now, this is good enough.
let dataCache: PostMeta[] | null = null;

// read the file under the posts directory /posts
export async function getPostMeta() {

	if(dataCache) {
		return dataCache
	}

	const posts = await fs.promises.readdir(path.join(process.cwd(), 'posts'));

	const mdxPosts = posts.filter((post) => post.endsWith('.mdx'));

	const postMetas:Array<PostMeta> = [];

	for(const post of mdxPosts) {
		const postContent = await fs.promises.readFile(path.join(process.cwd(), 'posts', post), 'utf8');
		const { data } = matter(postContent);
		postMetas.push({
			date: "1970-01-01",
			title: "This article is missing a title",
			path: post.replace(/\.[^/.]+$/, ""), // remove the file extension
			...data,
		});
	}

	dataCache = postMetas;

	return postMetas;
}

export default getPostMeta;