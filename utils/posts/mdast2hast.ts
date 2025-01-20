// what is hast?
// Hypertext Abstract Syntax Tree
// It is a tree representation of an HTML.
// that can be used to manipulate the HTML content programmatically.

// This function will parse the yaml metadata in the markdown file
import { Root } from "mdast";
import { find } from "unist-util-find";
import yaml from "yaml";

interface YAMLNode {
    type: "yaml";
    value: string;
}

export default function yamlParse<T>(ast: Root): T | null {
    const yamlContent = find(ast, { type: "yaml" }) as YAMLNode;

    if (yamlContent) {
        return yaml.parse(yamlContent.value) as T;
    }

    return null;
}
