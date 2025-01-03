import { RootContent } from "mdast";
import yaml from "yaml";
import fs from "node:fs";
import path from "node:path";
import { markdown2ast } from "@/utils/post";

const MAX_SUMMERY_LENGTH = 500;

export type category = "frontend" | "backend" | "uncategorized";

// This defined the metadata field in the markdown file
export interface ContentMetadata {
    title: string;
    date: string;
    category: category | undefined;
}

// This defined the metadata field in the metadata object, which is used in the app
export interface Metadata {
    path: string;
    title: string;
    date: Date;
    category: category;
    summery: string;
}

// This defined the text node in the AST
interface TextNode {
    type: "text";
    value: string;
}

// This function will flat all the children of the AST and filter the text type
function textFlatAndFilter(ast: RootContent[] | undefined): TextNode[] {
    if (ast === undefined) return [];

    const previewText: TextNode[] = [];

    for (const node of ast) {
        // @ts-expect-error node["children"] might be undefined,
        // but we don't care since we will instantly return if it's undefined
        const temp = textFlatAndFilter(node["children"]); // Recursively decode children

        previewText.push(...temp);

        if (node.type === "text") {
            previewText.push(node as TextNode);
        }
    }

    return previewText;
}

// This function will parse the yaml metadata in the markdown file
export function yamlParse(ast: RootContent[]) {
    for (const node of ast) {
        if (node.type === "yaml") {
            const decode: ContentMetadata = yaml.parse(node.value);
            return decode;
        }
    }
}

// This function will decode the metadata of the markdown file
export async function decodeMetadata(file: string): Promise<Metadata> {
    const ast = await markdown2ast(file);
    const flat = textFlatAndFilter(ast.children);
    const metadata = yamlParse(ast.children);

    return {
        category: metadata?.category ?? "uncategorized",
        path: file.replace(/\.[^/.]+$/, ""), // remove the file extension
        title: metadata?.title ?? "Untitled",
        date: new Date(metadata?.date ?? "1970-1-1"),
        summery: flat
            .map((node) => node.value)
            .join(" ")
            .slice(0, MAX_SUMMERY_LENGTH),
    };
}

// This function will return all the metadata of the markdown files in the posts directory
export async function getAllMetadata() {
    // list all the files in the directory
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

    // filter the markdownX files
    const markdownFiles = files.filter((file) => file.endsWith(".mdx"));

    // decode the metadata of each file
    return await Promise.all(markdownFiles.map(decodeMetadata));
}
