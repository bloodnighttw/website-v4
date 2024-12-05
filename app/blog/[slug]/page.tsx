"use server";

import {ast2html, postExists} from "@/utils/posts/content";
import {notFound} from "next/navigation";
import {markdown2ast} from "@/utils/post";

interface BlogProps {
	slug: string;
}

export default async function Blog({params}: { params: Promise<BlogProps> }) {

	const name = (await params).slug

	if (!await postExists(name)) {
		return notFound();
	}

	const [ast] = await Promise.all([markdown2ast(`${name}.mdx`)]);
	const [table, content] = await ast2html(ast);

	return (
		<div className="flex p-4 justify-center gap-4 pb-0 border-gray-50 xl:h-[calc(100vh-0.5em)]">
			<div
				className="
			    prose prose-invert prose-stone sm:prose-xl xl:prose-2xl
			    prose-a:underline prose-a:font-light prose-a:duration-200 prose-a:text-stone-200 hover:prose-a:font-black hover:prose-a:text-blue-200
			    prose-img:rounded
			    prose-headings:m-0
			    prose-h1:mb-8 prose-h1:font-black
			    prose-h2:mb-8 prose-h2:font-extrabold
			    prose-h3:mb-6 prose-h3:font-bold
			    prose-h4:mb-4 prose-h4:font-semibold
			    prose-h5:mb-4 prose-h5:font-medium
			    prose-h6:mb-4 prose-h6:font-normal
			    prose-p:m-0 prose-p:mb-4 prose-p:font-light
			    prose-ul:m-0 prose-ul:mb-4
			    prose-li:m-0
			    prose-ol:m-0
			    prose-hr:my-8
			    scroll-smooth
				h-full
				overflow-y-scroll
				no-scrollbar
			    "
			>
				<article
					className="xl:pr-2"
					dangerouslySetInnerHTML={{__html: content}}
				/>
				<div className="w-2">
					123
				</div>
			</div>
			<div
				className="hidden xl:flex overflow-y-auto no-scrollbar hover:scrollbar h-full w-72  flex-col gap-2 duration-200"
			>
				<h1 className="text-2xl text-green-400">Table of Content</h1>
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