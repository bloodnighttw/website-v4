import { expect, test } from "vitest";
import HastTOC from "@/utils/posts/HastTableOfContent";
import { testHAST } from "@/tests/cases/testHAST";

test("HastTableOfContent", async () => {
    const tocComponent = <HastTOC ast={testHAST} />;
    expect(tocComponent).toMatchSnapshot();
});
