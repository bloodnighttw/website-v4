// what is `mdast`?
// mdast is a markdown abstract syntax tree.
// It is a tree representation of a markdown documentation.
// that can be used to manipulate the markdown content programmatically.
// we use `remark` to convert markdown to mdast, which is part of the unified ecosystem.

import remarkParse from "remark-parse";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import fs from "node:fs";
import path from "node:path";

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
export default async function markdown2ast(file: string) {
    const content = await fs.promises.readFile(
        path.join(process.cwd(), "posts", `${file}.md`),
        "utf8",
    );
    return markdown2astUnified.parse(content);
}
