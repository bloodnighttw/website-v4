import { Root } from "hast";

export const testHAST: Root = {
    type: "root",
    children: [
        {
            type: "element",
            tagName: "h1",
            properties: { id: "前言" },
            children: [
                {
                    type: "text",
                    value: "前言",
                    position: {
                        start: { line: 8, column: 3, offset: 74 },
                        end: { line: 8, column: 5, offset: 76 },
                    },
                },
            ],
            position: {
                start: { line: 8, column: 1, offset: 72 },
                end: { line: 8, column: 5, offset: 76 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "我原先一直使用medium來寫文章，但畢竟還是別人的平台，是在幫別人打工，所以我決定自己來寫部落格系統。",
                    position: {
                        start: { line: 10, column: 1, offset: 78 },
                        end: { line: 10, column: 53, offset: 130 },
                    },
                },
            ],
            position: {
                start: { line: 10, column: 1, offset: 78 },
                end: { line: 10, column: 53, offset: 130 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "原先我有個僅使用tailwindcss的個人網站，上面放了聯絡資訊，但是後來發現這樣的網站沒有什麼意義，所以我決定把他改成部落格，並採用下列技術。",
                    position: {
                        start: { line: 12, column: 1, offset: 132 },
                        end: { line: 12, column: 74, offset: 205 },
                    },
                },
            ],
            position: {
                start: { line: 12, column: 1, offset: 132 },
                end: { line: 12, column: 74, offset: 205 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h2",
            properties: { id: "用到的技術" },
            children: [
                {
                    type: "text",
                    value: "用到的技術",
                    position: {
                        start: { line: 14, column: 4, offset: 210 },
                        end: { line: 14, column: 9, offset: 215 },
                    },
                },
            ],
            position: {
                start: { line: 14, column: 1, offset: 207 },
                end: { line: 14, column: 9, offset: 215 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Next.js",
                            position: {
                                start: { line: 16, column: 4, offset: 220 },
                                end: { line: 16, column: 11, offset: 227 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "一個React的框架，他提供了很多好用的功能，像是SSR, SSG, ISR等等，讓我不太需要去擔心SEO的問題。",
                                            position: {
                                                start: {
                                                    line: 17,
                                                    column: 7,
                                                    offset: 234,
                                                },
                                                end: {
                                                    line: 17,
                                                    column: 64,
                                                    offset: 291,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 17,
                                            column: 5,
                                            offset: 232,
                                        },
                                        end: {
                                            line: 17,
                                            column: 64,
                                            offset: 291,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 17, column: 5, offset: 232 },
                                end: { line: 17, column: 64, offset: 291 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 16, column: 1, offset: 217 },
                        end: { line: 17, column: 64, offset: 291 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Tailwindcss",
                            position: {
                                start: { line: 18, column: 4, offset: 295 },
                                end: { line: 18, column: 15, offset: 306 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "一個css框架，讓我可以直接用現有的design system直接實作就好了。",
                                            position: {
                                                start: {
                                                    line: 19,
                                                    column: 7,
                                                    offset: 313,
                                                },
                                                end: {
                                                    line: 19,
                                                    column: 46,
                                                    offset: 352,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 19,
                                            column: 5,
                                            offset: 311,
                                        },
                                        end: {
                                            line: 19,
                                            column: 46,
                                            offset: 352,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 19, column: 5, offset: 311 },
                                end: { line: 19, column: 46, offset: 352 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 18, column: 1, offset: 292 },
                        end: { line: 19, column: 46, offset: 352 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Markdown",
                            position: {
                                start: { line: 20, column: 4, offset: 356 },
                                end: { line: 20, column: 12, offset: 364 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "我使用markdown來寫文章，這邊使用",
                                            position: {
                                                start: {
                                                    line: 21,
                                                    column: 7,
                                                    offset: 371,
                                                },
                                                end: {
                                                    line: 21,
                                                    column: 27,
                                                    offset: 391,
                                                },
                                            },
                                        },
                                        {
                                            type: "element",
                                            tagName: "code",
                                            properties: {},
                                            children: [
                                                {
                                                    type: "text",
                                                    value: "unified.js",
                                                    position: {
                                                        start: {
                                                            line: 21,
                                                            column: 27,
                                                            offset: 391,
                                                        },
                                                        end: {
                                                            line: 21,
                                                            column: 41,
                                                            offset: 405,
                                                        },
                                                    },
                                                },
                                            ],
                                            position: {
                                                start: {
                                                    line: 21,
                                                    column: 27,
                                                    offset: 391,
                                                },
                                                end: {
                                                    line: 21,
                                                    column: 41,
                                                    offset: 405,
                                                },
                                            },
                                        },
                                        {
                                            type: "text",
                                            value: "來做到把markdown->html的部分，未來有機會可以改用WHSIWHG的編輯器與呈現方式。",
                                            position: {
                                                start: {
                                                    line: 21,
                                                    column: 41,
                                                    offset: 405,
                                                },
                                                end: {
                                                    line: 21,
                                                    column: 89,
                                                    offset: 453,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 21,
                                            column: 5,
                                            offset: 369,
                                        },
                                        end: {
                                            line: 21,
                                            column: 89,
                                            offset: 453,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 21, column: 5, offset: 369 },
                                end: { line: 21, column: 89, offset: 453 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 20, column: 1, offset: 353 },
                        end: { line: 21, column: 89, offset: 453 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Github",
                            position: {
                                start: { line: 22, column: 4, offset: 457 },
                                end: { line: 22, column: 10, offset: 463 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "用於版本管理，以及區分production 和 development的分支。",
                                            position: {
                                                start: {
                                                    line: 23,
                                                    column: 7,
                                                    offset: 470,
                                                },
                                                end: {
                                                    line: 23,
                                                    column: 46,
                                                    offset: 509,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 23,
                                            column: 5,
                                            offset: 468,
                                        },
                                        end: {
                                            line: 23,
                                            column: 46,
                                            offset: 509,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 23, column: 5, offset: 468 },
                                end: { line: 23, column: 46, offset: 509 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 22, column: 1, offset: 454 },
                        end: { line: 23, column: 46, offset: 509 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Vercel",
                            position: {
                                start: { line: 24, column: 4, offset: 513 },
                                end: { line: 24, column: 10, offset: 519 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "輕鬆的deploy我的部落格，最主要是免費。",
                                            position: {
                                                start: {
                                                    line: 25,
                                                    column: 7,
                                                    offset: 526,
                                                },
                                                end: {
                                                    line: 25,
                                                    column: 29,
                                                    offset: 548,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 25,
                                            column: 5,
                                            offset: 524,
                                        },
                                        end: {
                                            line: 25,
                                            column: 29,
                                            offset: 548,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 25, column: 5, offset: 524 },
                                end: { line: 25, column: 29, offset: 548 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 24, column: 1, offset: 510 },
                        end: { line: 25, column: 29, offset: 548 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "Cloudflare R2",
                            position: {
                                start: { line: 26, column: 4, offset: 552 },
                                end: { line: 26, column: 17, offset: 565 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "我的圖片是用Cloudflare的R2來存放的，這樣可以讓我的圖片不用放在github上，這樣可以讓我的repo比較乾淨，同時享受到Cloudflare CDN的優勢。",
                                            position: {
                                                start: {
                                                    line: 27,
                                                    column: 7,
                                                    offset: 572,
                                                },
                                                end: {
                                                    line: 27,
                                                    column: 91,
                                                    offset: 656,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 27,
                                            column: 5,
                                            offset: 570,
                                        },
                                        end: {
                                            line: 27,
                                            column: 91,
                                            offset: 656,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 27, column: 5, offset: 570 },
                                end: { line: 27, column: 91, offset: 656 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 26, column: 1, offset: 549 },
                        end: { line: 27, column: 91, offset: 656 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 16, column: 1, offset: 217 },
                end: { line: 27, column: 91, offset: 656 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h2",
            properties: { id: "設計目標" },
            children: [
                {
                    type: "text",
                    value: "設計目標",
                    position: {
                        start: { line: 29, column: 4, offset: 661 },
                        end: { line: 29, column: 8, offset: 665 },
                    },
                },
            ],
            position: {
                start: { line: 29, column: 1, offset: 658 },
                end: { line: 29, column: 8, offset: 665 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "不要太醜",
                            position: {
                                start: { line: 30, column: 4, offset: 669 },
                                end: { line: 30, column: 8, offset: 673 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 30, column: 1, offset: 666 },
                        end: { line: 30, column: 8, offset: 673 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "簡潔",
                            position: {
                                start: { line: 31, column: 4, offset: 677 },
                                end: { line: 31, column: 6, offset: 679 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 31, column: 1, offset: 674 },
                        end: { line: 31, column: 6, offset: 679 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "lighthouse 100分",
                            position: {
                                start: { line: 32, column: 4, offset: 683 },
                                end: { line: 32, column: 19, offset: 698 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 32, column: 1, offset: 680 },
                        end: { line: 32, column: 19, offset: 698 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 30, column: 1, offset: 666 },
                end: { line: 32, column: 19, offset: 698 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
            position: {
                start: { line: 34, column: 1, offset: 700 },
                end: { line: 34, column: 4, offset: 703 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h1",
            properties: { id: "實作" },
            children: [
                {
                    type: "text",
                    value: "實作",
                    position: {
                        start: { line: 36, column: 3, offset: 707 },
                        end: { line: 36, column: 5, offset: 709 },
                    },
                },
            ],
            position: {
                start: { line: 36, column: 1, offset: 705 },
                end: { line: 36, column: 5, offset: 709 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "這部分程式是我",
                    position: {
                        start: { line: 38, column: 1, offset: 711 },
                        end: { line: 38, column: 8, offset: 718 },
                    },
                },
                {
                    type: "element",
                    tagName: "a",
                    properties: {
                        href: "https://github.com/bloodnighttw/website-v3",
                    },
                    children: [
                        {
                            type: "text",
                            value: "之前的專案",
                            position: {
                                start: { line: 38, column: 9, offset: 719 },
                                end: { line: 38, column: 14, offset: 724 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 38, column: 8, offset: 718 },
                        end: { line: 38, column: 59, offset: 769 },
                    },
                },
                {
                    type: "text",
                    value: "拿過來改的，也是一個基於tailwind的專案，不同的點是，他沒有用到",
                    position: {
                        start: { line: 38, column: 59, offset: 769 },
                        end: { line: 38, column: 94, offset: 804 },
                    },
                },
                {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "react",
                            position: {
                                start: { line: 38, column: 94, offset: 804 },
                                end: { line: 38, column: 101, offset: 811 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 38, column: 94, offset: 804 },
                        end: { line: 38, column: 101, offset: 811 },
                    },
                },
                {
                    type: "text",
                    value: "/",
                    position: {
                        start: { line: 38, column: 101, offset: 811 },
                        end: { line: 38, column: 102, offset: 812 },
                    },
                },
                {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "nextjs",
                            position: {
                                start: { line: 38, column: 102, offset: 812 },
                                end: { line: 38, column: 110, offset: 820 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 38, column: 102, offset: 812 },
                        end: { line: 38, column: 110, offset: 820 },
                    },
                },
                {
                    type: "text",
                    value: "，另外使用的是next.js的ISR模式。",
                    position: {
                        start: { line: 38, column: 110, offset: 820 },
                        end: { line: 38, column: 131, offset: 841 },
                    },
                },
            ],
            position: {
                start: { line: 38, column: 1, offset: 711 },
                end: { line: 38, column: 131, offset: 841 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h2",
            properties: { id: "markdown-解析" },
            children: [
                {
                    type: "text",
                    value: "Markdown 解析",
                    position: {
                        start: { line: 40, column: 4, offset: 846 },
                        end: { line: 40, column: 15, offset: 857 },
                    },
                },
            ],
            position: {
                start: { line: 40, column: 1, offset: 843 },
                end: { line: 40, column: 15, offset: 857 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "剛開始我是找到了 ",
                    position: {
                        start: { line: 42, column: 1, offset: 859 },
                        end: { line: 42, column: 10, offset: 868 },
                    },
                },
                {
                    type: "element",
                    tagName: "a",
                    properties: { href: "https://contentlayer.dev/" },
                    children: [
                        {
                            type: "text",
                            value: "contentlayer",
                            position: {
                                start: { line: 42, column: 11, offset: 869 },
                                end: { line: 42, column: 23, offset: 881 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 42, column: 10, offset: 868 },
                        end: { line: 42, column: 51, offset: 909 },
                    },
                },
                {
                    type: "text",
                    value: " 這個套件，但是這個套件有幾個問題:",
                    position: {
                        start: { line: 42, column: 51, offset: 909 },
                        end: { line: 42, column: 69, offset: 927 },
                    },
                },
            ],
            position: {
                start: { line: 42, column: 1, offset: 859 },
                end: { line: 42, column: 69, offset: 927 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "我要怎麼獲取markdown的預覽內容？",
                            position: {
                                start: { line: 43, column: 4, offset: 931 },
                                end: { line: 43, column: 24, offset: 951 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 43, column: 1, offset: 928 },
                        end: { line: 43, column: 24, offset: 951 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "我要怎麼從這個套件生成table of content？",
                            position: {
                                start: { line: 44, column: 4, offset: 955 },
                                end: { line: 44, column: 32, offset: 983 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 44, column: 1, offset: 952 },
                        end: { line: 44, column: 32, offset: 983 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 43, column: 1, offset: 928 },
                end: { line: 44, column: 32, offset: 983 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "想解決這兩個問題，勢必得往更底層去尋找答案了。",
                    position: {
                        start: { line: 46, column: 1, offset: 985 },
                        end: { line: 46, column: 24, offset: 1008 },
                    },
                },
            ],
            position: {
                start: { line: 46, column: 1, offset: 985 },
                end: { line: 46, column: 24, offset: 1008 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "那在研究一段時間後，我發現很多系統的markdown支援，都是依賴這幾個套件。",
                    position: {
                        start: { line: 48, column: 1, offset: 1010 },
                        end: { line: 48, column: 40, offset: 1049 },
                    },
                },
            ],
            position: {
                start: { line: 48, column: 1, offset: 1010 },
                end: { line: 48, column: 40, offset: 1049 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "element",
                            tagName: "code",
                            properties: {},
                            children: [
                                {
                                    type: "text",
                                    value: "unified.js",
                                    position: {
                                        start: {
                                            line: 49,
                                            column: 4,
                                            offset: 1053,
                                        },
                                        end: {
                                            line: 49,
                                            column: 16,
                                            offset: 1065,
                                        },
                                    },
                                },
                            ],
                            position: {
                                start: { line: 49, column: 4, offset: 1053 },
                                end: { line: 49, column: 16, offset: 1065 },
                            },
                        },
                        {
                            type: "text",
                            value: "  ast轉換工具，下面這兩個工具部分功能可以依賴這套件。",
                            position: {
                                start: { line: 49, column: 16, offset: 1065 },
                                end: { line: 49, column: 45, offset: 1094 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 49, column: 1, offset: 1050 },
                        end: { line: 49, column: 45, offset: 1094 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "element",
                            tagName: "code",
                            properties: {},
                            children: [
                                {
                                    type: "text",
                                    value: "remark.js",
                                    position: {
                                        start: {
                                            line: 50,
                                            column: 4,
                                            offset: 1098,
                                        },
                                        end: {
                                            line: 50,
                                            column: 15,
                                            offset: 1109,
                                        },
                                    },
                                },
                            ],
                            position: {
                                start: { line: 50, column: 4, offset: 1098 },
                                end: { line: 50, column: 15, offset: 1109 },
                            },
                        },
                        {
                            type: "text",
                            value: "   用於解析markdown語法的相關套件  (ast <--> markdown)",
                            position: {
                                start: { line: 50, column: 15, offset: 1109 },
                                end: { line: 50, column: 58, offset: 1152 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 50, column: 1, offset: 1095 },
                        end: { line: 50, column: 58, offset: 1152 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "element",
                            tagName: "code",
                            properties: {},
                            children: [
                                {
                                    type: "text",
                                    value: "rehype.js ",
                                    position: {
                                        start: {
                                            line: 51,
                                            column: 4,
                                            offset: 1156,
                                        },
                                        end: {
                                            line: 51,
                                            column: 16,
                                            offset: 1168,
                                        },
                                    },
                                },
                            ],
                            position: {
                                start: { line: 51, column: 4, offset: 1156 },
                                end: { line: 51, column: 16, offset: 1168 },
                            },
                        },
                        {
                            type: "text",
                            value: "  用於解析html語法的相關套件      (ast <--> html)",
                            position: {
                                start: { line: 51, column: 16, offset: 1168 },
                                end: { line: 51, column: 54, offset: 1206 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 51, column: 1, offset: 1153 },
                        end: { line: 51, column: 54, offset: 1206 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 49, column: 1, offset: 1050 },
                end: { line: 51, column: 54, offset: 1206 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "我的做法是，我先用",
                    position: {
                        start: { line: 53, column: 1, offset: 1208 },
                        end: { line: 53, column: 10, offset: 1217 },
                    },
                },
                {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "remark.js",
                            position: {
                                start: { line: 53, column: 10, offset: 1217 },
                                end: { line: 53, column: 21, offset: 1228 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 53, column: 10, offset: 1217 },
                        end: { line: 53, column: 21, offset: 1228 },
                    },
                },
                {
                    type: "text",
                    value: "把markdown轉換成ast，然後透過這個ast去產生預覽內容。",
                    position: {
                        start: { line: 53, column: 21, offset: 1228 },
                        end: { line: 53, column: 54, offset: 1261 },
                    },
                },
            ],
            position: {
                start: { line: 53, column: 1, offset: 1208 },
                end: { line: 53, column: 54, offset: 1261 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "接著我用",
                    position: {
                        start: { line: 55, column: 1, offset: 1263 },
                        end: { line: 55, column: 5, offset: 1267 },
                    },
                },
                {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "remark2rehype",
                            position: {
                                start: { line: 55, column: 5, offset: 1267 },
                                end: { line: 55, column: 20, offset: 1282 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 55, column: 5, offset: 1267 },
                        end: { line: 55, column: 20, offset: 1282 },
                    },
                },
                {
                    type: "text",
                    value: "把ast轉換成rehype ast，然後再透過這個html ast去產生table of content。",
                    position: {
                        start: { line: 55, column: 20, offset: 1282 },
                        end: { line: 55, column: 73, offset: 1335 },
                    },
                },
            ],
            position: {
                start: { line: 55, column: 1, offset: 1263 },
                end: { line: 55, column: 73, offset: 1335 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "最後我在把這個html ast轉換成html，顯示於網頁上。",
                    position: {
                        start: { line: 57, column: 1, offset: 1337 },
                        end: { line: 57, column: 31, offset: 1367 },
                    },
                },
            ],
            position: {
                start: { line: 57, column: 1, offset: 1337 },
                end: { line: 57, column: 31, offset: 1367 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h2",
            properties: { id: "cloudflare-r2-作為圖床" },
            children: [
                {
                    type: "text",
                    value: "Cloudflare R2 作為圖床",
                    position: {
                        start: { line: 59, column: 4, offset: 1372 },
                        end: { line: 59, column: 22, offset: 1390 },
                    },
                },
            ],
            position: {
                start: { line: 59, column: 1, offset: 1369 },
                end: { line: 59, column: 22, offset: 1390 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "剛開始我自己是打算把圖片放在",
                    position: {
                        start: { line: 60, column: 1, offset: 1391 },
                        end: { line: 60, column: 15, offset: 1405 },
                    },
                },
                {
                    type: "element",
                    tagName: "a",
                    properties: { href: "https://imgur.com/" },
                    children: [
                        {
                            type: "text",
                            value: "imgur",
                            position: {
                                start: { line: 60, column: 16, offset: 1406 },
                                end: { line: 60, column: 21, offset: 1411 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 60, column: 15, offset: 1405 },
                        end: { line: 60, column: 42, offset: 1432 },
                    },
                },
                {
                    type: "text",
                    value: "上，但是後來發現imgur有可能刪除圖片，導致圖片失效，剛好想到之前拜讀的\n",
                    position: {
                        start: { line: 60, column: 42, offset: 1432 },
                        end: { line: 61, column: 1, offset: 1470 },
                    },
                },
                {
                    type: "element",
                    tagName: "a",
                    properties: {
                        href: "https://ivonblog.com/posts/cloudflare-r2-image-hosting/",
                    },
                    children: [
                        {
                            type: "text",
                            value: "這篇文章",
                            position: {
                                start: { line: 61, column: 2, offset: 1471 },
                                end: { line: 61, column: 6, offset: 1475 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 61, column: 1, offset: 1470 },
                        end: { line: 61, column: 64, offset: 1533 },
                    },
                },
                {
                    type: "text",
                    value: "，最後決定使用Cloudflare R2作為圖片的圖床。",
                    position: {
                        start: { line: 61, column: 64, offset: 1533 },
                        end: { line: 61, column: 92, offset: 1561 },
                    },
                },
            ],
            position: {
                start: { line: 60, column: 1, offset: 1391 },
                end: { line: 61, column: 92, offset: 1561 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "使用Cloudflare R2的好處是:",
                    position: {
                        start: { line: 63, column: 1, offset: 1563 },
                        end: { line: 63, column: 21, offset: 1583 },
                    },
                },
            ],
            position: {
                start: { line: 63, column: 1, offset: 1563 },
                end: { line: 63, column: 21, offset: 1583 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "流量不收費 (這個是其他類似服務最難預測的費用)",
                            position: {
                                start: { line: 64, column: 4, offset: 1587 },
                                end: { line: 64, column: 28, offset: 1611 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 64, column: 1, offset: 1584 },
                        end: { line: 64, column: 28, offset: 1611 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "使用量在一定額度內是免費的",
                            position: {
                                start: { line: 65, column: 4, offset: 1615 },
                                end: { line: 65, column: 17, offset: 1628 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 65, column: 1, offset: 1612 },
                        end: { line: 65, column: 17, offset: 1628 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "有使用Cloudflare CDN的加速",
                            position: {
                                start: { line: 66, column: 4, offset: 1632 },
                                end: { line: 66, column: 24, offset: 1652 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 66, column: 1, offset: 1629 },
                        end: { line: 66, column: 24, offset: 1652 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "跟aws s3相容的API，也就是說我們可以使用相關工具操作R2。",
                            position: {
                                start: { line: 67, column: 4, offset: 1656 },
                                end: { line: 67, column: 37, offset: 1689 },
                            },
                        },
                    ],
                    position: {
                        start: { line: 67, column: 1, offset: 1653 },
                        end: { line: 67, column: 37, offset: 1689 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 64, column: 1, offset: 1584 },
                end: { line: 67, column: 37, offset: 1689 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "element",
                    tagName: "img",
                    properties: {
                        src: "https://r2.bntw.dev/how-i-made-my-blog/r2.png",
                        alt: "r2",
                    },
                    children: [],
                    position: {
                        start: { line: 69, column: 1, offset: 1691 },
                        end: { line: 69, column: 53, offset: 1743 },
                    },
                },
            ],
            position: {
                start: { line: 69, column: 1, offset: 1691 },
                end: { line: 69, column: 53, offset: 1743 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h1",
            properties: { id: "結果" },
            children: [
                {
                    type: "text",
                    value: "結果",
                    position: {
                        start: { line: 71, column: 3, offset: 1747 },
                        end: { line: 71, column: 5, offset: 1749 },
                    },
                },
            ],
            position: {
                start: { line: 71, column: 1, offset: 1745 },
                end: { line: 71, column: 5, offset: 1749 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "p",
            properties: {},
            children: [
                {
                    type: "text",
                    value: "下面這張是在無痕模式下的lighthouse分數，可以看到四個指標都是100分。\n",
                    position: {
                        start: { line: 73, column: 1, offset: 1751 },
                        end: { line: 74, column: 1, offset: 1792 },
                    },
                },
                {
                    type: "element",
                    tagName: "img",
                    properties: {
                        src: "https://r2.bntw.dev/how-i-made-my-blog/lighthouse.png",
                        alt: "lighthouse score with arc browser",
                    },
                    children: [],
                    position: {
                        start: { line: 74, column: 1, offset: 1792 },
                        end: { line: 74, column: 92, offset: 1883 },
                    },
                },
            ],
            position: {
                start: { line: 73, column: 1, offset: 1751 },
                end: { line: 74, column: 92, offset: 1883 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "h1",
            properties: { id: "未來可加入的功能" },
            children: [
                {
                    type: "text",
                    value: "未來可加入的功能",
                    position: {
                        start: { line: 76, column: 3, offset: 1887 },
                        end: { line: 76, column: 11, offset: 1895 },
                    },
                },
            ],
            position: {
                start: { line: 76, column: 1, offset: 1885 },
                end: { line: 76, column: 11, offset: 1895 },
            },
        },
        { type: "text", value: "\n" },
        {
            type: "element",
            tagName: "ol",
            properties: {},
            children: [
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "SEO 優化",
                            position: {
                                start: { line: 77, column: 4, offset: 1899 },
                                end: { line: 77, column: 10, offset: 1905 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "目前文章是不包含description與其他可以優化SEO的部分，未來會加入這些功能。",
                                            position: {
                                                start: {
                                                    line: 78,
                                                    column: 7,
                                                    offset: 1912,
                                                },
                                                end: {
                                                    line: 78,
                                                    column: 50,
                                                    offset: 1955,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 78,
                                            column: 5,
                                            offset: 1910,
                                        },
                                        end: {
                                            line: 78,
                                            column: 50,
                                            offset: 1955,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 78, column: 5, offset: 1910 },
                                end: { line: 78, column: 50, offset: 1955 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 77, column: 1, offset: 1896 },
                        end: { line: 78, column: 50, offset: 1955 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "WYSIWYG",
                            position: {
                                start: { line: 79, column: 4, offset: 1959 },
                                end: { line: 79, column: 11, offset: 1966 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "未來可以加入WYSIWYG，並棄用markdown，這樣可以讓我在寫文章時更方便 (這功能沒有很急)。",
                                            position: {
                                                start: {
                                                    line: 80,
                                                    column: 7,
                                                    offset: 1973,
                                                },
                                                end: {
                                                    line: 80,
                                                    column: 58,
                                                    offset: 2024,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 80,
                                            column: 5,
                                            offset: 1971,
                                        },
                                        end: {
                                            line: 80,
                                            column: 58,
                                            offset: 2024,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 80, column: 5, offset: 1971 },
                                end: { line: 80, column: 58, offset: 2024 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 79, column: 1, offset: 1956 },
                        end: { line: 80, column: 58, offset: 2024 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "RSS",
                            position: {
                                start: { line: 81, column: 4, offset: 2028 },
                                end: { line: 81, column: 7, offset: 2031 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "未來可以加入RSS，這樣可以讓訂閱者可以更方便的訂閱我的文章。",
                                            position: {
                                                start: {
                                                    line: 82,
                                                    column: 7,
                                                    offset: 2038,
                                                },
                                                end: {
                                                    line: 82,
                                                    column: 38,
                                                    offset: 2069,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 82,
                                            column: 5,
                                            offset: 2036,
                                        },
                                        end: {
                                            line: 82,
                                            column: 38,
                                            offset: 2069,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 82, column: 5, offset: 2036 },
                                end: { line: 82, column: 38, offset: 2069 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 81, column: 1, offset: 2025 },
                        end: { line: 82, column: 38, offset: 2069 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "留言系統",
                            position: {
                                start: { line: 83, column: 4, offset: 2073 },
                                end: { line: 83, column: 8, offset: 2077 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "未來可以加入留言系統，這樣可以讓讀者可以更方便的與我互動。",
                                            position: {
                                                start: {
                                                    line: 84,
                                                    column: 7,
                                                    offset: 2084,
                                                },
                                                end: {
                                                    line: 84,
                                                    column: 36,
                                                    offset: 2113,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 84,
                                            column: 5,
                                            offset: 2082,
                                        },
                                        end: {
                                            line: 84,
                                            column: 36,
                                            offset: 2113,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 84, column: 5, offset: 2082 },
                                end: { line: 84, column: 36, offset: 2113 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 83, column: 1, offset: 2070 },
                        end: { line: 84, column: 36, offset: 2113 },
                    },
                },
                { type: "text", value: "\n" },
                {
                    type: "element",
                    tagName: "li",
                    properties: {},
                    children: [
                        {
                            type: "text",
                            value: "亮色/暗色模式",
                            position: {
                                start: { line: 85, column: 4, offset: 2117 },
                                end: { line: 85, column: 11, offset: 2124 },
                            },
                        },
                        { type: "text", value: "\n" },
                        {
                            type: "element",
                            tagName: "ul",
                            properties: {},
                            children: [
                                { type: "text", value: "\n" },
                                {
                                    type: "element",
                                    tagName: "li",
                                    properties: {},
                                    children: [
                                        {
                                            type: "text",
                                            value: "目前我只用了個暗色系的主題，未來可以加入亮色/暗色模式，這樣可以讓讀者可以根據自己的喜好來選擇。",
                                            position: {
                                                start: {
                                                    line: 86,
                                                    column: 7,
                                                    offset: 2131,
                                                },
                                                end: {
                                                    line: 86,
                                                    column: 55,
                                                    offset: 2179,
                                                },
                                            },
                                        },
                                    ],
                                    position: {
                                        start: {
                                            line: 86,
                                            column: 5,
                                            offset: 2129,
                                        },
                                        end: {
                                            line: 86,
                                            column: 55,
                                            offset: 2179,
                                        },
                                    },
                                },
                                { type: "text", value: "\n" },
                            ],
                            position: {
                                start: { line: 86, column: 5, offset: 2129 },
                                end: { line: 86, column: 55, offset: 2179 },
                            },
                        },
                        { type: "text", value: "\n" },
                    ],
                    position: {
                        start: { line: 85, column: 1, offset: 2114 },
                        end: { line: 86, column: 55, offset: 2179 },
                    },
                },
                { type: "text", value: "\n" },
            ],
            position: {
                start: { line: 77, column: 1, offset: 1896 },
                end: { line: 86, column: 55, offset: 2179 },
            },
        },
    ],
    position: {
        start: { line: 1, column: 1, offset: 0 },
        end: { line: 86, column: 55, offset: 2179 },
    },
};
