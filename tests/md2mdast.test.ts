import fs from "node:fs";
import path from "node:path";
import { inspect } from "unist-util-inspect";
import { markdown2ast } from "@/utils/blog";

test("print all markdown ast", async () => {
    console.log("hello world");

    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

    const mdFileWithoutExt = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));

    for (const file of mdFileWithoutExt) {
        console.log("Reading file:", file);
        const ast = await markdown2ast(file);
        console.log(inspect(ast));
    }
});
