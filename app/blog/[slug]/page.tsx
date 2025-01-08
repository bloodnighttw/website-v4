import { ast2html } from "@/utils/posts/content";
import { markdown2ast } from "@/utils/blog";
import Link from "next/link";
import { decodePostMetadata, getPostPaths } from "@/utils/blog";
import Image from "next/image";
import { Metadata } from "next";

export async function generateStaticParams(){
    let posts = await getPostPaths();

    return posts.map((postpath) => {
        return {
            slug: postpath
        }
    })
}

// if not on the list of generateStaticParams, return 404.
export const dynamicParams = false

interface BlogProps {
    slug: string;
}

async function getTOCAndContent(name: string) {
    const ast = await markdown2ast(`${name}.md`);
    return await ast2html(ast);
}

export async function generateMetadata({ params }: { params: Promise<BlogProps> } ):Promise<Metadata> {
    const name = (await params).slug;

    const metadata = await decodePostMetadata(name);

    return {
        title: metadata.title,
        description: metadata.summery,
        authors: [
            {
                name: "bloodnighttw",
            }
        ],
        openGraph:{
            title: metadata.title,
            description: metadata.summery,
            type: "article",
            images: metadata.previewImage ? [
                {
                    url: metadata.previewImage,
                    alt: metadata.title
                }
            ] : []
        },
        twitter: {
            title: metadata.title,
            description: metadata.summery,
            site: "@bloodnighttw",
            card: "summary_large_image",
            images: metadata.previewImage ? [
                {
                    url: metadata.previewImage,
                    alt: metadata.title
                }
            ] : []
        }

    }
}

export default async function Blog({ params }: { params: Promise<BlogProps> }) {
    const name = (await params).slug;

    const [table, content] = await getTOCAndContent(name);
    const metadata = await decodePostMetadata(name);

    return (
        <div className="flex justify-center gap-4 border-gray-50 p-4 pb-0 xl:h-[calc(100vh-0.5em)]">
            <div className="article w-full">
                <h1 className="text-ellipsis text-balance my-0 text-5xl" id="title">
                    {metadata.title}
                </h1>
                <hr className="my-4"/>
                <article dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div
                className="hidden h-full w-72 flex-col overflow-y-auto duration-200 xl:flex">
                <h1 className="truncate text-2xl">{metadata.title}</h1>
                <h1 className="text-sm text-stone-400 mt-0.5">{metadata.date.toDateString()}</h1>

                <h1 className="text-xl mt-8 text-stone-200">Table of Content</h1>

                <div
                    className="toc"
                    dangerouslySetInnerHTML={{ __html: table }}
                />

                <div className="flex mt-auto p-4 bg-stone-800 gap-2 rounded">
                    <Image
                        alt="View bloodnighttw's full-sized avatar"
                        src="https://avatars.githubusercontent.com/u/44264182?s=460&u=b59e580f37ab7e6a3979ab8a6df1f12ba6588069&v=4"
                        className="w-6 h-6 rounded-full items-center"
                        width={24}
                        height={24}
                        loading="eager"
                    />
                    <p>bloodnighttw</p>
                </div>
                <div className="mt-2 text-stone-300 rounded bg-stone-800 p-4 space-y-2">
                    <div className="flex text-base text-stone-100 space-x-1">
                        <Link href="/">Home</Link>
                        <p>/</p>
                        <Link href="/contact">Contact</Link>
                        <p>/</p>
                        <Link href="/blog">Blog</Link>
                        <p>/</p>
                        <Link href="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
