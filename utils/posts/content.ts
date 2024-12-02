import fs from "node:fs";
import path from "node:path";
import {unified} from "unified";

import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import {Root} from "mdast";

// To check if a post exists, note postName should be the name of the file without the extension
export async function postExists(postName: string) {
	return fs.promises.access(path.join(process.cwd(), "posts", `${postName}.mdx`), fs.constants.F_OK)
		.then(() => true)
		.catch(() => false);
}

const ast2htmlAst = unified()
	.use(remark2rehype)

const htmlAst2htmlUnified = unified()
	.use(rehypeStringify);

// Convert the AST to HTML
// This function will return the HTML string from the AST of the markdown file
export const ast2html = async (ast: Root) => {
	const result = await ast2htmlAst.run(ast);
	return htmlAst2htmlUnified.stringify(result);
};

