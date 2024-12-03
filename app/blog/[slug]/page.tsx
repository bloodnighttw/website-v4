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
				className="
				prose prose-invert prose-stone sm:prose-lg p-4 m-auto
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
				pt-96
				"
				dangerouslySetInnerHTML={{__html: content}}
			/>
		</div>
	);
}