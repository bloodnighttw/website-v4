import { test, expect } from "vitest";
import { generateTOC } from "@/utils/posts/HastTableOfContent";
import { testHAST } from "@/tests/cases/testHAST";

test("HastTableOfContent | generateTOC", async () => {
    const TOCNode = generateTOC(testHAST);
    console.log(JSON.stringify(TOCNode, null, 4));
});
