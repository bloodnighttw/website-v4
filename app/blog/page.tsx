import { getAllMetadata } from "@/utils/posts/metadata";
import Link from "next/link";

export default async function Blog() {
    let  posts = await getAllMetadata();

    return <div
        className="mx-auto max-w-3xl"
    >
        <div className="py-8">
            <h1 className="text-4xl text-center">Blog</h1>
            <div className="flex text-base text-stone-100 space-x-1 justify-center">
                <Link href="/">Home</Link>
                <p>/</p>
                <Link href="/contact">Contact</Link>
                <p>/</p>
                <Link href="/blog">Blog</Link>
                <p>/</p>
                <Link href="/about">About</Link>
            </div>
        </div>

        <div className="space-y-2">
            {posts.sort((a, b) => a.date < b.date ? 1 : a.date == b.date ? 0 : -1)
                .map((post) => (
                <Link
                    href={`/blog/${post.path}`}
                    key={post.path}
                >
                    <div
                        className="p-4 rounded w-full border border-stone-700 hover:bg-stone-800 duration-200 mx-auto sm:hover:scale-105"
                        key={post.path}
                    >

                    <h1 className="text-3xl line-clamp-1">{post.title}</h1>
                        <p className="text-gray-400 pt-1">{post.date.toISOString().slice(0, 10)}</p>
                        <p className="text-gray-300 pt-2 line-clamp-3">{post.summery}</p>
                    </div>
                    <br/>
                </Link>


            ))}
        </div>


    </div>
}
