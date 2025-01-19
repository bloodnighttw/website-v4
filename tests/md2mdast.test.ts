import { describe, it } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { inspect } from "unist-util-inspect";

describe("md2mdast", () => {
    it("list md and show as ast", async () => {
        console.log("hell world");
        const { default: markdown2ast } = await import(
            // @ts-expect-error just ignore it
            "../utils/posts/md2mdast.ts"
        );

        const files = await fs.promises.readdir(
            path.join(process.cwd(), "posts"),
        );

        const mdFileWithoutExt = files
            .filter((file) => file.endsWith(".md"))
            .map((file) => file.replace(/\.md$/, ""));

        for (const file of mdFileWithoutExt) {
            console.log("Reading file:", file);
            const ast = await markdown2ast(file);
            console.log(inspect(ast));
        }
    });
});
