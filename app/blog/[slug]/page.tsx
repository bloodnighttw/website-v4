"use server";

import {ast2html, postExists} from "@/utils/posts/content";
import {notFound} from "next/navigation";
import {markdown2ast} from "@/utils/post";

interface BlogProps {
	slug: string;
}

export default async function Blog({params} :{ params:Promise<BlogProps> }) {

	const name = (await params).slug

	if(!await postExists(name)){
		return notFound();
	}

	const [ast] = await Promise.all([markdown2ast(`${name}.mdx`)]);
	const [content] = await Promise.all([ast2html(ast)]);

	return (
		<div>
			<article
				className="prose prose-invert prose-stone sm:prose-lg m-auto p-4"
				dangerouslySetInnerHTML={{__html: content}}
			/>
		</div>
	);
}