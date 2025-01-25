import { unified } from "unified";
import remark2rehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Root } from "mdast";

const mdast2hastUnified = unified()
    .use(remark2rehype)
    .use(rehypeSlug)
    .use(rehypeHighlight);

export default async function mdast2hast(mdast: Root) {
    return await mdast2hastUnified.run(mdast);
}
