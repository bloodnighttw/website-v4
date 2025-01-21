import markdown2ast from "@/utils/posts/md2mdast";
import { expect } from "vitest";
import { testMDAST } from "@/tests/cases/testMDAST";

test("md2mdast", async () => {
    const mdast = await markdown2ast("posts/cfr2.md");
    expect(mdast).toMatchObject(testMDAST);
});
