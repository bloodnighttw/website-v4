// what is hast?
// Hypertext Abstract Syntax Tree
// It is a tree representation of an HTML.
// that can be used to manipulate the HTML content programmatically.

// This function will parse the yaml metadata in the markdown file
import { Root } from "mdast";
import yaml from "yaml";
import { select, selectAll } from "unist-util-select";

const MAX_SUMMARY_LENGTH = 500;

interface YAMLNode {
    type: "yaml";
    value: string;
}

export function yamlParse<T>(ast: Root): T | null {
    const yamlContent = select("yaml", ast) as YAMLNode;

    if (yamlContent) {
        return yaml.parse(yamlContent.value) as T;
    }

    return null;
}

interface TextNode {
    type: "text";
    value: string;
}

export function generateSummary(ast: Root): string {
    const text = selectAll("text", ast) as TextNode[];
    return text
        .map((node) => node.value)
        .join(" ")
        .slice(0, MAX_SUMMARY_LENGTH);
}

interface ImageNode {
    type: "image";
    url: string;
}

export function generateThumbnail(ast: Root): string | null {
    const image = select("image", ast) as ImageNode | undefined;
    return image ? image.url : null;
}
