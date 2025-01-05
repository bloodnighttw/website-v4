import fs from "node:fs";
import path from "node:path";
import { unified } from "unified";

import remark2rehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import { Root as MDRoot } from "mdast";
import { Element, ElementContent, Root as HRoot } from "hast";

import { h } from "hastscript";

// To check if a post exists, note postName should be the name of the file without the extension
export async function postExists(postName: string) {
    return fs.promises
        .access(
            path.join(process.cwd(), "posts", `${postName}.md`),
            fs.constants.F_OK,
        )
        .then(() => true)
        .catch(() => false);
}

const ast2htmlAst = unified().use(remark2rehype).use(rehypeSlug);

const htmlAst2htmlUnified = unified().use(rehypeStringify);

// The html tag name that we want to filter
// Order by the depth of the value we want to filter
const TableOfContentFilter = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Mapping = new Map(
    TableOfContentFilter.map((value, index) => [
        value,
        index + 1 /* depth == 0 mean root, we don't create root here */,
    ]),
);

interface FilteredContent {
    title: ElementContent[];
    id: string;
    depth: number;
}

// It iterates over the AST then filter,returns the Header content we need.
function* astAnalyze(ast: HRoot): Generator<FilteredContent> {
    for (const node of ast.children) {
        if (
            node.type === "element" &&
            Mapping.has(node.tagName) &&
            node.properties.id
        ) {
            yield {
                title: node.children,
                id: node.properties.id as string,
                depth: Mapping.get(node.tagName)!,
            };
        }
    }
}

function flatText(node: ElementContent[]): string {
    return node.reduce((acc, value) => {
        if (value.type === "text") {
            return acc + value.value;
        }

        if (value.type === "element") {
            return acc + flatText(value.children);
        }

        return acc;
    }, "");
}

// TOC, a.k.a Table of Content, is a tree structure that represents the table of content in the html.
// The TOCNode is the node of the TOC tree.
interface TOCNode {
    // id of the element
    // if the id is null, it means the element is a container, and we don't need to generate a link nor an id for it
    id?: string;
    sectionTitle?: string;
    children: TOCNode[];
    depth: number;
}

// Create the TOCNode tree from the array of FilteredContent
function generateTOC(arr: Generator<FilteredContent>) {
    // we insert a root node into the stack to prevent the stack from being empty
    // ( which will cause stackPeek return undefined and
    // collectSameDepthOnTopAsChild will throw an error since we defined root node as a dummy node)
    // the root node is a dummy node

    const stack: TOCNode[] = [
        {
            children: [],
            sectionTitle: "root",
            depth: 0,
        },
    ];

    // get the top of the stack
    const stackPeek = () => stack.at(-1);

    // collect the same depth node on top of the stack ( we will remove from the stack)
    const collectSameDepthOnTopAsChild = () => {
        const temp = [stack.pop()!];
        while (temp[0].depth === stackPeek()?.depth) {
            temp.push(stack.pop()!);
        }

        // that depth of the tree is continuous
        while (temp[0].depth !== stackPeek()!.depth + 1) {
            stack.push({
                children: [],
                sectionTitle: "",
                depth: stackPeek()!.depth + 1,
            });
        }

        stackPeek()!.children.push(...temp.reverse());
    };

    // iterate over the array of FilteredContent, then put it into the stack
    // if the depth of the node is less than the top of the stack, we will collect the same depth node on top of the stack
    // then push the node into the children of the top stack element
    for (const node of arr) {
        if (node.depth < stackPeek()!.depth) {
            do {
                collectSameDepthOnTopAsChild();
            } while (node.depth < stackPeek()!.depth);
        }

        stack.push({
            id: node.id,
            children: [],
            sectionTitle: flatText(node.title),
            depth: node.depth,
        });
    }

    // currently, the stack is having an array of TOCNode
    // we will need to merge the array of TOCNode into a single root TOCNode
    while (stack.length > 1) {
        collectSameDepthOnTopAsChild();
    }

    return stack[0].children;
}

function TOCNode2Element(node: TOCNode[]) {
    const liTree = (node: TOCNode): Element => {
        const a = node.id
            ? h("a", { href: `#${node.id}` }, node.sectionTitle)
            : h("span", node.sectionTitle);

        // leaf node
        if (node.children.length === 0) {
            return h("li", a);
        }

        const children = node.children.map(liTree);
        return h("li", a, [h("ul", children)]);
    };

    // we will need to convert the TOCNode into a list
    const children = node.map(liTree);

    // create the ul element on the top of the children ( which is the list of li element)
    const ul = h("ul", children);

    // we need to wrap ul with root
    return h(null, ul);
}

// Convert the AST to HTML
// This function will return the HTML string from the AST of the markdown file
export const ast2html = async (ast: MDRoot) => {
    const result = await ast2htmlAst.run(ast);
    const filteredContents = astAnalyze(result);
    const tocAst = generateTOC(filteredContents);
    const toc = TOCNode2Element(tocAst);
    return [
        htmlAst2htmlUnified.stringify(toc),
        htmlAst2htmlUnified.stringify(result),
    ];
};
