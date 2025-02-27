import { test } from "vitest";
import { Content, defineContent } from "@/utils/mkblog";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { inspect } from "unist-util-inspect";
import remarkGfm from "remark-gfm";

declare module "@/utils/mkblog/index" {
    interface Content {
        say: () => Promise<void>;
    }
}

Content.prototype.say = async function () {
    const hast = await this.hast();
    console.log(inspect(hast));
};

test("test content", async () => {
    const content = await defineContent({
        root: "/posts",
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
    });
    // const tree = await content.posts[0].html();
    await content.posts[0].say();
    // console.log(inspect(tree));
});
