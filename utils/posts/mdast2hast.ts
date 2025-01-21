import { unified } from "unified";
import remark2rehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import { Root } from "mdast";

const mdast2hastUnified = unified().use(remark2rehype).use(rehypeSlug);

export default async function mdast2hast(mdast: Root) {
    return await mdast2hastUnified.run(mdast);
}
