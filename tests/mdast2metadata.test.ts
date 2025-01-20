import { describe, it } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { test } from "vitest";

test("mdast2metadata", async () => {

}

describe("mdast2metadata", () => {
    it("list md and show as ast", async () => {
        const { default: yamlParse } = await import(
            // @ts-expect-error just ignore it
            "../utils/posts/mdast2hast.ts"
        );

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
            const node = yamlParse(ast);
            console.log(node);
        }
    });
});
