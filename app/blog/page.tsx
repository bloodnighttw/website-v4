import { getAllMetadata } from "@/utils/posts/metadata";

export default async function Blog() {
    const posts = await getAllMetadata();

    return posts.map((post) => (
        <div key={post.path}>
            <h1>{post.title}</h1>
            <p>{post.date.toString()}</p>
            <p>{post.summery}</p>
        </div>
    ));
}
