import { expect, test } from "vitest";
import { testMDAST } from "@/tests/cases/testMDAST";
import mdast2hast from "@/utils/posts/mdast2hast";
import { testHAST } from "@/tests/cases/testHAST";

test("mdast2hast", async () => {
    const hast = await mdast2hast(testMDAST);
    expect(hast).toMatchObject(testHAST);
});
