import { getAllMetadata } from "@/utils/blog";
import Link from "next/link";
import { Nav } from "@/app/nav";

export const metadata = {
    title: "Bloodnighttw's Blog",
    description: "A collection of blog posts",
    alternates: {
        canonical: `https://bntw.dev/blog`,
    },
};

export default async function Blog() {
    const posts = await getAllMetadata();

    return (
        <div className="mx-auto">
            <div className="override-nav">
                <div className="mx-auto max-w-4xl">
                    <Nav title={"blog"} />
                </div>
            </div>


            <div className="mx-auto max-w-4xl mt-8">
                {posts
                    .sort((a, b) =>
                        a.date < b.date ? 1 : a.date == b.date ? 0 : -1,
                    )
                    .map((post) => (
                        <Link href={`/blog/${post.path}`} key={post.path}>
                            <div
                                className="mx-auto w-full rounded border border-stone-700 p-4 duration-200 hover:bg-stone-800 sm:hover:scale-105"
                                key={post.path}
                            >
                                <h1 className="line-clamp-1 text-3xl">
                                    {post.title}
                                </h1>
                                <p className="pt-1 text-gray-400">
                                    {post.date.toISOString().slice(0, 10)}
                                </p>
                                <p className="line-clamp-3 pt-2 text-gray-300">
                                    {post.summery}
                                </p>
                            </div>
                            <br />
                        </Link>
                    ))}
            </div>
        </div>
    );
}
