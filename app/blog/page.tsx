import getPostMeta from "@/utils/post";

export default async function Blog() {

	const posts = await getPostMeta();

	return (
		posts.map((post) => (
			<div key={post.path}>
				<h1>{post.title}</h1>
				<p>{post.date.toString()}</p>
			</div>
		))
	);
}