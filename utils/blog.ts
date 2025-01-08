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
import { RootContent } from "mdast";
import yaml from "yaml";

// when calling this function, it will return the AST of the markdown file
// with GFM (Github Flavored Markdown) and frontmatter enabled.
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
        path.join(process.cwd(), "posts", file),
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

    const ast = await markdown2ast(`${file}.md`);
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
