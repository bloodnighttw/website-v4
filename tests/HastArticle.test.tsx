import { test, expect } from "vitest";
import HastArticle from "@/utils/posts/HastArticle";
import { testHAST } from "@/tests/cases/testHAST";

test("HastArticle", () => {
    const component = <HastArticle hast={testHAST} />;
    expect(component).toMatchSnapshot();
});
