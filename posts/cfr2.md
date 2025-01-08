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

這部分程式是我[之前的專案](https://github.com/bloodnighttw/website-v3)拿過來改的，也是一個基於tailwind的專案，不同的點是，他沒有用到`react`/`nextjs`，另外使用的是next.js的ISR模式。

## Markdown 解析

剛開始我是找到了 [contentlayer](https://contentlayer.dev/) 這個套件，但是這個套件有幾個問題:
1. 我要怎麼獲取markdown的預覽內容？
2. 我要怎麼從這個套件生成table of content？

想解決這兩個問題，勢必得往更底層去尋找答案了。

那在研究一段時間後，我發現很多系統的markdown支援，都是依賴這幾個套件。
1. `unified.js`  ast轉換工具，下面這兩個工具部分功能可以依賴這套件。
2. `remark.js`   用於解析markdown語法的相關套件  (ast <--> markdown)
3. `rehype.js `  用於解析html語法的相關套件      (ast <--> html)

我的做法是，我先用`remark.js`把markdown轉換成ast，然後透過這個ast去產生預覽內容。

接著我用`remark2rehype`把ast轉換成rehype ast，然後再透過這個html ast去產生table of content。

最後我在把這個html ast轉換成html，顯示於網頁上。

## Cloudflare R2 作為圖床
剛開始我自己是打算把圖片放在[imgur](https://imgur.com/)上，但是後來發現imgur有可能刪除圖片，導致圖片失效，剛好想到之前拜讀的
[這篇文章](https://ivonblog.com/posts/cloudflare-r2-image-hosting/)，最後決定使用Cloudflare R2作為圖片的圖床。

使用Cloudflare R2的好處是:
1. 流量不收費 (這個是其他類似服務最難預測的費用)
2. 使用量在一定額度內是免費的
3. 有使用Cloudflare CDN的加速
4. 跟aws s3相容的API，也就是說我們可以使用相關工具操作R2。

![r2](https://r2.bntw.dev/how-i-made-my-blog/r2.png)

# 結果

下面這張是在無痕模式下的lighthouse分數，可以看到四個指標都是100分。
![lighthouse score with arc browser](https://r2.bntw.dev/how-i-made-my-blog/lighthouse.png)

# 未來可加入的功能
1. SEO 優化
    - 目前文章是不包含description與其他可以優化SEO的部分，未來會加入這些功能。
2. WYSIWYG
    - 未來可以加入WYSIWYG，並棄用markdown，這樣可以讓我在寫文章時更方便 (這功能沒有很急)。
3. RSS
    - 未來可以加入RSS，這樣可以讓訂閱者可以更方便的訂閱我的文章。
4. 留言系統
    - 未來可以加入留言系統，這樣可以讓讀者可以更方便的與我互動。
5. 亮色/暗色模式
    - 目前我只用了個暗色系的主題，未來可以加入亮色/暗色模式，這樣可以讓讀者可以根據自己的喜好來選擇。