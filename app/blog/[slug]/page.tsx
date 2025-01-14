import {
    decodePostMetadata,
    getPostPaths,
    ast2post,
    markdown2ast,
} from "@/utils/blog";
import { Metadata } from "next";

export async function generateStaticParams() {
    const posts = await getPostPaths();

    return posts.map((post_path) => {
        return {
            slug: post_path,
        };
    });
}

// if not on the list of generateStaticParams, return 404.
export const dynamicParams = false;

interface BlogProps {
    slug: string;
}

async function getTOCAndContent(name: string) {
    const ast = await markdown2ast(name);
    return await ast2post(ast);
}

export async function generateMetadata({
    params,
}: {
    params: Promise<BlogProps>;
}): Promise<Metadata> {
    const name = (await params).slug;

    const metadata = await decodePostMetadata(name);

    return {
        title: metadata.title,
        description: metadata.summery,
        authors: [
            {
                name: "bloodnighttw",
            },
        ],
        openGraph: {
            title: metadata.title,
            description: metadata.summery,
            type: "article",
            images: metadata.previewImage
                ? [
                      {
                          url: metadata.previewImage,
                          alt: metadata.title,
                      },
                  ]
                : [],
        },
        twitter: {
            title: metadata.title,
            description: metadata.summery,
            site: "@bloodnighttw",
            card: "summary_large_image",
            images: metadata.previewImage
                ? [
                      {
                          url: metadata.previewImage,
                          alt: metadata.title,
                      },
                  ]
                : [],
        },
        alternates: {
            canonical: `https://bntw.dev/blog/${name}`,
        },
    };
}

export default async function Blog({ params }: { params: Promise<BlogProps> }) {
    const name = (await params).slug;

    const post = await getTOCAndContent(name);
    const metadata = await decodePostMetadata(name);

    return (
        <div className="my-4 flex justify-center">
            <div className="article w-full">
                <h1
                    className="my-0 text-ellipsis text-balance text-5xl"
                    id="title"
                >
                    {metadata.title}
                </h1>
                <hr className="my-4" />
                <article dangerouslySetInnerHTML={{ __html: post.rawHTML }} />
            </div>
            <div className="article-sidebar">
                <h1 className="truncate text-2xl">{metadata.title}</h1>
                <h1 className="mt-0.5 text-sm text-stone-400">
                    {metadata.date.toDateString()}
                </h1>

                <h1 className="mt-8 text-xl text-stone-200">
                    Table of Content
                </h1>
                <hr className="my-2 text-stone-100" />

                <div
                    className="toc"
                    dangerouslySetInnerHTML={{ __html: post.rawTableOfContent }}
                />
            </div>
        </div>
    );
}
