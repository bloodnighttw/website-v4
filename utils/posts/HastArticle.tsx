import { Root } from "hast";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";

const htmlAst2htmlUnified = unified().use(rehypeStringify);

interface HastArticleProps {
    hast: Root;
}

// create a component from the hast
export default function HastArticle({ hast }: HastArticleProps) {
    const rawHtml = htmlAst2htmlUnified.stringify(hast);

    return <article dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
