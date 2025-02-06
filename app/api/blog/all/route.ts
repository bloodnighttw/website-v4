import { getAllSlugs, getMDASTBySlug } from "@/utils/blog";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export const dynamic = "force-static";

export async function GET() {
    const slug = await getAllSlugs();

    const all = slug.map(async (s) => {
        const mdast = await getMDASTBySlug(s);

        visit(mdast, "yaml", (node, index, parent) => {
            if (parent && typeof index === "number") {
                parent.children.splice(index, 1);
            }
        });

        const content = toString(mdast);

        return [s, content];
    });

    const content = await Promise.all(all);

    return Response.json(Object.fromEntries(content));
}
