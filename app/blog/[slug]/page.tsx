"use server";

import {ast2html, postExists} from "@/utils/posts/content";
import {notFound} from "next/navigation";
import {markdown2ast} from "@/utils/post";
import {unstable_cache} from "next/cache";

interface BlogProps {
	slug: string;
}

async function getTOCAndContent(name: string) {
	const ast = await markdown2ast(`${name}.mdx`);
	return await ast2html(ast);
}

const cacheTOCAndContent = unstable_cache(
	getTOCAndContent,
	[],
	{
		tags: ["blog"],
		revalidate: 60
	}
);

export default async function Blog({params}: { params: Promise<BlogProps> }) {

	const name = (await params).slug

	if (!await postExists(name)) {
		return notFound();
	}

	const [table, content] = await cacheTOCAndContent(name);

	return (
		<div className="flex p-4 justify-center gap-4 pb-0 border-gray-50 xl:h-[calc(100vh-0.5em)]">

			<div
				className="article w-full"
			>
				<h1
					className="text-ellipsis text-balance"
					id="title"
				>This is a very long-long-long-long-long-long-long-long-long-long title-long-long</h1>
				<hr/>
				<hr />
				<article
					dangerouslySetInnerHTML={{__html: content}}
				/>
			</div>
			<div
				className="hidden xl:flex overflow-y-auto no-scrollbar hover:scrollbar h-full w-72  flex-col gap-2 duration-200"
			>
				<h1 className="text-xl truncate">This is a very long long</h1>
				<hr/>
				<h1 className="text-xl text-green-400">Table of Content</h1>
				<hr/>
				<div
					className="toc"
					dangerouslySetInnerHTML={{__html: table}}
				/>
				<hr/>

				<div className="text-xl text-cyan-400">Categories:</div>
				<hr/>
				<div className="text-xl text-rose-400">Comment</div>
				<hr/>
				<div className="text-xl mt-auto text-orange-400">
					GOTO:
					<div className="flex text-white text-base">Back / Home / Contact / Blog / About </div>
				</div>
				<div className=""/>
			</div>
		</div>
	);
}