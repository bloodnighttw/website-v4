---
title: 我是如何打造一個部落格系統的
date: 2025-01-07
categories:
    - draft
---

# 前言

我原先一直使用medium來寫文章，但畢竟還是別人的平台，是在幫別人打工，所以我決定自己來寫部落格系統。

原先我有個僅使用tailwindcss的個人網站，上面放了聯絡資訊，但是後來發現這樣的網站沒有什麼意義，所以我決定把他改成部落格，並採用下列技術。

## 用到的技術

1. Next.js
    - 一個React的框架，他提供了很多好用的功能，像是SSR, SSG, ISR等等，讓我不太需要去擔心SEO的問題。
2. Tailwindcss
    - 一個css框架，讓我可以直接用現有的design system直接實作就好了。
3. Markdown
    - 我使用markdown來寫文章，這邊使用``unified.js``來做到把markdown->html的部分，未來有機會可以改用WHSIWHG的編輯器與呈現方式。
4. Github
    - 用於版本管理，以及區分production 和 development的分支。
5. Vercel
    - 輕鬆的deploy我的部落格，最主要是免費。
6. Cloudflare R2
    - 我的圖片是用Cloudflare的R2來存放的，這樣可以讓我的圖片不用放在github上，這樣可以讓我的repo比較乾淨，同時享受到Cloudflare CDN的優勢。

## 設計目標
1. 不要太醜
2. 簡潔
3. lighthouse 100分

---

# 實作

這個網站的部分程式是我[之前的專案](https://github.com/bloodnighttw/website-v3)拿過來改的，也是一個基於tailwind的專案，不同的點是，他沒有用到`react`/`nextjs`。

剛開始我是找到了 [contentlayer](https://contentlayer.dev/)這個套件，但是這個套件有幾個問題:
1. 我要怎麼獲取markdown的預覽內容？
2. 我要怎麼從這個套件生成table of content？


# 結果

下面這張是在無痕模式下的lighthouse分數，可以看到四個指標都是100分。
![lighthouse score with arc browser](https://r2.bntw.dev/lighthouse.png)

# 未來可加入的功能
1. MDX
    - 未來可以加入mdx，這樣可以讓我在markdown中加入react component。
2. WYSIWYG
    - 未來可以加入WYSIWYG，這樣可以讓我在寫文章時更方便。
3. RSS
    - 未來可以加入RSS，這樣可以讓訂閱者可以更方便的訂閱我的文章。
4. 留言系統
    - 未來可以加入留言系統，這樣可以讓讀者可以更方便的與我互動。
5. 亮色/暗色模式
    - 目前我只用了個暗色系的主題，未來可以加入亮色/暗色模式，這樣可以讓讀者可以根據自己的喜好來選擇。