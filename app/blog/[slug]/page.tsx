import { decodePostMetadata, getPostPaths, ast2post,markdown2ast } from "@/utils/blog";
import { Metadata } from "next";

export async function generateStaticParams(){
    let posts = await getPostPaths();

    return posts.map((post_path) => {
        return {
            slug: post_path
        }
    })
}

// if not on the list of generateStaticParams, return 404.
export const dynamicParams = false

interface BlogProps {
    slug: string;
}

async function getTOCAndContent(name: string) {
    const ast = await markdown2ast(name);
    return await ast2post(ast);
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
            ] : [],
        },
        alternates:{
            canonical: `https://bntw.dev/blog/${name}`
        }
    }
}

export default async function Blog({ params }: { params: Promise<BlogProps> }) {
    const name = (await params).slug;

    const post = await getTOCAndContent(name);
    const metadata = await decodePostMetadata(name);

    return (
        <div className="my-4 justify-center flex">
            <div className="article w-full">
                <h1 className="text-ellipsis text-balance my-0 text-5xl" id="title">
                    {metadata.title}
                </h1>
                <hr className="my-4"/>
                <article dangerouslySetInnerHTML={{ __html: post.rawHTML }} />
            </div>
            <div
                className="article-sidebar">
                <h1 className="truncate text-2xl">{metadata.title}</h1>
                <h1 className="text-sm text-stone-400 mt-0.5">{metadata.date.toDateString()}</h1>

                <h1 className="text-xl mt-8 text-stone-200">Table of Content</h1>
                <hr className="text-stone-100 my-2"/>

                <div
                    className="toc"
                    dangerouslySetInnerHTML={{ __html: post.rawTableOfContent }}
                />

            </div>
        </div>
    );
}
