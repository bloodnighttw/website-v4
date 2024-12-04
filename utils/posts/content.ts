import fs from "node:fs";
import path from "node:path";
import {unified} from "unified";

import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from 'rehype-slug'
import {Root as MDRoot} from "mdast";
import {Root as HRoot, ElementContent} from "hast";


// To check if a post exists, note postName should be the name of the file without the extension
export async function postExists(postName: string) {
	return fs.promises.access(path.join(process.cwd(), "posts", `${postName}.mdx`), fs.constants.F_OK)
		.then(() => true)
		.catch(() => false);
}

const ast2htmlAst = unified()
	.use(remark2rehype)
	.use(rehypeSlug);

const htmlAst2htmlUnified = unified()
	.use(rehypeStringify);

const TableOfContentFilter = [
	"h1",
	"h2",
	"h3",
	"h4",
	'h5',
	"h6"
]

const Mapping = new Map(TableOfContentFilter.map((value,index) => [value, index+1]));

interface TOCNode {
	title: ElementContent[],
	id: string,
	depth: number
}

// Convert the ast to table content with depth, title, and link id
function* astAnalyze(ast: HRoot):Generator<TOCNode> {
	for (const node of ast.children){
		if(node.type === "element" && Mapping.has(node.tagName) && node.properties.id){
			yield {
				title: node.children,
				id: node.properties.id as string,
				depth: Mapping.get(node.tagName)!
			}
		}
	}
}

interface TOC {
	// id of the element
	// if the id is null, it means the element is a container, and we don't need to generate a link nor an id for it
	id: string | null,
	sectionTitle?: string,
	children: TOC[],
	depth: number
}

function contentAst2TOC(arr:Generator<TOCNode>):TOC[] {

	const stack:TOC[] = [{
		id: null,
		children: [],
		depth: 0
	}]

	// get the top of the stack
	const stackPeek = () => stack.at(-1);

	// collect the same depth node on top of the stack ( we will remove from the stack)
	const collectSameDepthOnTopAsChild = () => {
		const temp = [stack.pop()!];
		while ( temp[0].depth === stackPeek()!.depth){
			temp.push(stack.pop()!)
		}

		// that depth of the tree is continuous
		while(temp[0].depth !== stackPeek()!.depth + 1){
			stack.push({
				id: null,
				children: [],
				depth: stackPeek()!.depth + 1
			})
		}

		stackPeek()!.children.push(...temp.reverse());
	}

	for (const node of arr){
		if(node.depth < stackPeek()!.depth){
			do{
				collectSameDepthOnTopAsChild()
			}while (node.depth < stackPeek()!.depth)
		}

		stack.push(
			{
				id: node.id,
				children: [],
				depth: node.depth
			}
		)
	}

	while (stack.length > 1){
		collectSameDepthOnTopAsChild()
	}

	return stack[0].children;
}



// Convert the AST to HTML
// This function will return the HTML string from the AST of the markdown file
export const ast2html = async (ast: MDRoot) => {
	const result = await ast2htmlAst.run(ast);
	const TOCAst = astAnalyze(result);
	const toc = contentAst2TOC(TOCAst);
	console.log(toc);
	return htmlAst2htmlUnified.stringify(result);
};

