import { test } from "vitest";
import { getMetadatasWithSlug } from "@/utils/blog";

test("blog", async () => {
    const metadata = await getMetadatasWithSlug();
    console.log(metadata);
});
