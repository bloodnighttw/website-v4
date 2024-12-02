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

	console.log(content);

	return (
		<div>
			<article
				dangerouslySetInnerHTML={{__html: content}}
			/>
		</div>
	);
}