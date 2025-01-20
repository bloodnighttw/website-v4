import fs from "node:fs";
import path from "node:path";
import { test } from "vitest";
import { markdown2ast } from "@/utils/blog";
import { generateSummary, generateThumbnail, yamlParse } from "@/utils/posts/mdast2hast";

test("mdast2metadata | yaml", async () => {
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

    const mdFileWithoutExt = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));

    for (const file of mdFileWithoutExt) {
        const ast = await markdown2ast(file);
        const node = yamlParse(ast);
        console.log("Reading file:", file);
        console.log(node);
    }
});

test("mdast2metadata | summary", async () => {
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

    const mdFileWithoutExt = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));

    for (const file of mdFileWithoutExt) {
        const ast = await markdown2ast(file);
        const summary = generateSummary(ast);
        console.log("Reading file:", file);
        console.log(summary);
    }
})

test("mdast2metadata | thumbnail", async () => {
    const files = await fs.promises.readdir(path.join(process.cwd(), "posts"));

    const mdFileWithoutExt = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));

    for (const file of mdFileWithoutExt) {
        const ast = await markdown2ast(file);
        const thumbnail = generateThumbnail(ast);
        console.log("Reading file:", file);
        console.log(thumbnail);
    }
})


