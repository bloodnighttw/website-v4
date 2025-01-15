import {
    ast2post,
    decodePostMetadata,
    getPostPaths,
    markdown2ast,
} from "@/utils/blog";
import { Metadata } from "next";
import { Nav, NavSize } from "@/app/nav";

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
        <>
            <Nav title={metadata.title} size={NavSize.xl} />
            <div className="m-auto flex w-full max-w-[75rem] flex-row-reverse gap-4 p-2">
                <div className="sidebar">
                    <div className="toc-card">
                        <h1 className="text-xl text-stone-200">
                            Table of Content
                        </h1>
                        <hr className="my-2 text-stone-100" />

                        <div
                            className="toc"
                            dangerouslySetInnerHTML={{
                                __html: post.rawTableOfContent,
                            }}
                        />
                    </div>
                </div>
                <div className="article mx-auto">
                    <p className="m-0 text-4xl sm:hidden">{metadata.title}</p>
                    <p className="mt-2 text-sm text-stone-400">
                        {metadata.date.toDateString()}
                    </p>
                    <article
                        dangerouslySetInnerHTML={{ __html: post.rawHTML }}
                        className=" "
                    />
                </div>
            </div>
        </>
    );
}
