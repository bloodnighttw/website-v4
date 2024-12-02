import {unified} from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import frontmatter from "remark-frontmatter";
import fs from "node:fs";
import path from "node:path";

// when calling this function, it will return the AST of the markdown file
// with GFM (Github Flavored Markdown) and frontmatter enabled.
// The AST contains the metadata and the content of the markdown file, which will be used later.
// This function is internal and should not be used outside of this module.
const markdown2astUnified = unified()
	.use(remarkParse) // Convert markdown into AST
	.use(remarkGfm) // Enable GFM
	.use(frontmatter) // Parse frontmatter
	// You can add more remark plugins here by calling .use(pluginName)

// This function will return the AST of the markdown file.
// you should pass the file name with the extension to this function.
// This function is exported and can be used in other modules.
export const markdown2ast = async (file: string) => {
	const content = await fs.promises.readFile(path.join(process.cwd(), "posts", file), "utf8");
	return markdown2astUnified.parse(content);
}
