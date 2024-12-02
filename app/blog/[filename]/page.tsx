"use server"

import {getPostByPath} from "@/utils/post";
import { unified } from 'unified'
import remarkGfm from 'remark-gfm'
import remarkToc from "remark-toc";
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export default async function Blog() {

	const content = await getPostByPath("example");

	const rawHtml = await unified()
		.use(remarkParse) // Convert into markdown AST
		.use(remarkGfm) // Enable GFM
		.use(remarkToc) // Generate table of contents
		.use(remarkRehype) // Transform to HTML AST
		.use(rehypeSanitize) // Sanitize HTML input
		.use(rehypeStringify) // Convert AST into serialized HTML
		.process(content)

	return (
		<article
			className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white"
			dangerouslySetInnerHTML={{__html: rawHtml.toString()}}
		>
		</article>
	);
}