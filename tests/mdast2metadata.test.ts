import fs from "node:fs";
import path from "node:path";
import { test } from "vitest";
import { markdown2ast } from "@/utils/blog";
import yamlParse from "@/utils/posts/mdast2hast";

test("mdast2metadata", async () => {
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

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
