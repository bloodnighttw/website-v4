import { Metadata } from "next";
import { NavXLWarp } from "@/utils/warp/navwarp";

import mdast2hast from "@/utils/posts/mdast2hast";
import HastArticle from "@/utils/posts/HastArticle";
import HastTOC from "@/utils/posts/HastTableOfContent";
import { getAllSlugs, getMDASTBySlug, getMetadata } from "@/utils/blog";

export async function generateStaticParams() {
    const posts = await getAllSlugs();

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

export async function generateMetadata({
    params,
}: {
    params: Promise<BlogProps>;
}): Promise<Metadata> {
    const name = (await params).slug;

    const mdast = await getMDASTBySlug(name);
    const metadata = getMetadata(mdast);

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

    const nav = await NavXLWarp({ title: "blog" });

    const mdast = await getMDASTBySlug(name);
    const hast = await mdast2hast(mdast);
    const metadata = getMetadata(mdast);

    return (
        <>
            {nav}
            <div className="m-auto flex w-full max-w-[75rem] flex-row-reverse gap-4 p-2">
                <div className="sidebar">
                    <div className="toc-card">
                        <h1 className="text-xl text-stone-200">
                            Table of Content
                        </h1>
                        <hr className="my-2 text-stone-100" />

                        <HastTOC ast={hast} />
                    </div>
                </div>
                <div className="article mx-auto">
                    <p className="m-0 text-4xl sm:hidden">{metadata.title}</p>
                    <p className="mt-2 text-sm text-stone-400">
                        {metadata.date.toDateString()}
                    </p>
                    <HastArticle hast={hast} />
                </div>
            </div>
        </>
    );
}
