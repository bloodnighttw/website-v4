// This module is to handle markdown content generation, which is related to blog
// post.
// We use unified and its plugin, to convert Markdown to AST, and using AST to
// generate content metadata, content's html,etc.
//
// hast = the AST of html, mdast = the AST of markdown,
// markdown -> mdast by using rehype
// mdast -> content metadata by using our function
// mdast -> hast by using remark2rehype
// hast -> table of content by using our function
// hast -> html by using rehype
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import fs from "node:fs";
import path from "node:path";
import { Root as MDRoot, RootContent } from "mdast";
import yaml from "yaml";
import remark2rehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { Element, ElementContent, Root as HRoot } from "hast";
import { h } from "hastscript";

// when calling this function, it will return the AST of the markdown file
// with GFM (GitHub Flavored Markdown) and frontmatter enabled.
// The AST contains the metadata and the content of the markdown file, which will be used later.
// This function is internal and should not be used outside of this module.
const markdown2astUnified = unified()
    .use(remarkParse) // Convert markdown into AST
    .use(remarkGfm) // Enable GFM
    .use(frontmatter); // Parse frontmatter
// You can add more remark plugins here by calling .use(pluginName)

// This function will return the AST of the markdown file.
// you should pass the file name with the extension to this function.
// This function is exported and can be used in other modules.
export async function markdown2ast(file: string) {
    const content = await fs.promises.readFile(
        path.join(process.cwd(), "posts", `${file}.md`),
        "utf8",
    );
    return markdown2astUnified.parse(content);
}

// The max length of content summary.
const MAX_SUMMERY_LENGTH = 500;

// This defined the metadata field in the markdown file
export interface ContentMetadata {
    title: string;
    date: string;
    category: string[];
}

// This defined the metadata field in the metadata object, which is used in the app
export interface Metadata {
    path: string;
    title: string;
    date: Date;
    category: string[];
    summery: string;
    previewImage: string | undefined;
}

// This defined the text node in the AST
interface TextNode {
    type: "text";
    value: string;
}

// This function will flat all the children of the AST and filter the text type
function decodeMDAST(ast: RootContent[] | undefined): [TextNode[],string | undefined] {
    if (ast === undefined) return [[],undefined];

    const previewText: TextNode[] = [];
    let previewImage: string | undefined = undefined;

    for (const node of ast) {
        // @ts-expect-error node["children"] might be undefined,
        // but we don't care since we will instantly return if it's undefined
        const [temp,img] = decodeMDAST(node["children"]); // Recursively decode children
        previewImage = previewImage ?? img;

        previewText.push(...temp);

        if (node.type === "text") {
            previewText.push(node as TextNode);
        } else if (node.type === "image" && previewImage === undefined) {
            previewImage = node.url;
        }

    }

    return [previewText,previewImage];
}

// This function will parse the yaml metadata in the markdown file
function yamlParse(ast: RootContent[]) {
    for (const node of ast) {
        if (node.type === "yaml") {
            const decode: ContentMetadata = yaml.parse(node.value);
            return decode;
        }
    }
}

// This function will decode the metadata of the markdown file
export async function decodePostMetadata(file: string): Promise<Metadata> {

    const ast = await markdown2ast(file);
    const [flat,img] = decodeMDAST(ast.children);
    const metadata = yamlParse(ast.children);

    return {
        category: metadata?.category ?? [],
        path: file,
        title: metadata?.title ?? "Untitled",
        date: new Date(metadata?.date ?? "1970-1-1"),
        summery: flat
            .map((node) => node.value)
            .join(" ")
            .slice(0, MAX_SUMMERY_LENGTH),
        previewImage: img,
    };
}

// get all file path.
export async function getPostPaths(): Promise<string[]> {
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));
    return files
        .filter((file) => file.endsWith(".md"))
        // remove file extension
        .map((file)=>file.replace(/\.[^/.]+$/, ""));
}

// This function will return all the metadata of the markdown files in the posts directory
export async function getAllMetadata() {

    // filter the markdownX files
    const markdownFiles = await getPostPaths();

    // decode the metadata of each file
    return await Promise.all(markdownFiles.map(decodePostMetadata));
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

// flat header content
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
function generateTOC(ast: HRoot) {
    // we insert a root node into the stack to prevent the stack from being empty
    // ( which will cause stackPeek return undefined and
    // collectSameDepthOnTopAsChild will throw an error since we defined root node as a dummy node)
    // the root node is a dummy node

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

    const filteredContents = astAnalyze(ast);

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
    for (const node of filteredContents) {
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

export interface Post{
    rawHTML: string;
    rawTableOfContent: string;
}

// Convert the AST to HTML
// This function will return the HTML string from the AST of the markdown file
export async function ast2post(ast: MDRoot):Promise<Post>{
    const result = await ast2htmlAst.run(ast);
    const tocAst = generateTOC(result);
    const toc = TOCNode2Element(tocAst);
    return {
        rawHTML:htmlAst2htmlUnified.stringify(result),
        rawTableOfContent:htmlAst2htmlUnified.stringify(toc),
    }
}
