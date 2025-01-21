import { expect, test } from "vitest";
import {
    generateSummary,
    generateThumbnail,
    yamlParse,
} from "@/utils/posts/mdast2metadata";
import { testMDAST } from "@/tests/cases/testMDAST";

test("mdast2metadata | yaml", async () => {
    const yaml = yamlParse(testMDAST);

    const expectResult = {
        title: "我是如何打造一個部落格系統的",
        date: "2025-01-07",
        categories: ["draft"],
    };

    expect(yaml).toEqual(expectResult);
});

test("mdast2metadata | summary", async () => {
    const expectResult =
        "前言 我原先一直使用medium來寫文章，但畢竟還是別人的平台，是在幫別人打工，所以我決定自己來寫部落格系統。 原先我有個僅使用tailwindcss的個人網站，上面放了聯絡資訊，但是後來發現這樣的網站沒有什麼意義，所以我決定把他改成部落格，並採用下列技術。 用到的技術 Next.js 一個React的框架，他提供了很多好用的功能，像是SSR, SSG, ISR等等，讓我不太需要去擔心SEO的問題。 Tailwindcss 一個css框架，讓我可以直接用現有的design system直接實作就好了。 Markdown 我使用markdown來寫文章，這邊使用 來做到把markdown->html的部分，未來有機會可以改用WHSIWHG的編輯器與呈現方式。 Github 用於版本管理，以及區分production 和 development的分支。 Vercel 輕鬆的deploy我的部落格，最主要是免費。 Cloudflare R2 我的圖片是用Cloudflare的R2來存放的，這樣可以讓我的圖片不用放在github上，這樣可以讓我的repo比較乾淨，同時享受到Cloudflare";
    const summary = generateSummary(testMDAST);

    expect(summary).toEqual(expectResult);
});

test("mdast2metadata | thumbnail", async () => {
    const expectResult = "https://r2.bntw.dev/how-i-made-my-blog/r2.png";

    const thumbnail = generateThumbnail(testMDAST);

    expect(thumbnail).toEqual(expectResult);
});
