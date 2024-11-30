import * as fs from "node:fs";
import path from "node:path";
import matter from 'gray-matter';

interface PostMeta {
	path: string;
	title: string;
	date: string;
}

export async function getPostMeta() {
	// read the file under the posts directory /posts

	const posts = await fs.promises.readdir(path.join(process.cwd(), 'posts'));

	const mdxPosts = posts.filter((post) => post.endsWith('.mdx'));

	const ouo:Array<PostMeta> = [];

	for(const post of mdxPosts) {
		const postContent = await fs.promises.readFile(path.join(process.cwd(), 'posts', post), 'utf8');
		const { data } = matter(postContent);
		ouo.push({
			date: "1970-01-01",
			title: "This article is missing a title",
			path: post.replace(/\.[^/.]+$/, ""), // remove the file extension
			...data,
		});
	}

	return ouo;
}

export default getPostMeta;