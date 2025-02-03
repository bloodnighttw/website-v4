---
title: Tailwind v3 to v4
date: 2025-02-03
categories:
    - tailwind
---

# 前言

最近Tailwindcss升級到了v4，這次的升級帶來許多的改變，我的個人網站是使用tailwind製作的，這篇文章我會紀錄一下我是如何把v3的專案升級到v4的。

![cover](https://r2.bntw.dev/tailwindcssv32v4/conver2.png)

# V4的改變

## tailwind.config.js 消失了

現在的tailwindcss不再需要`tailwind.config.js`，設定檔是透過`vite`的plugin來設定的，或是使用postcss的plugin來設定。

## 自動偵測需要監聽的檔案

在過往的版本，我們需要在`tailwind.config.js`裡面設定需要監聽是否些改的檔案，但是在v4中，tailwindcss會自動偵測需要監聽的檔案，像是從 ``.gitignore``得知哪些檔案不需要監聽，這樣讓我們更方便地去使用tailwindcss，而不需要煩惱哪些檔案需要被查看。

## 更快的build時間

tailwindcss v4 使用rust撰寫的engine Oxide，這個engine可以讓build時間更快。

## 動態的class name
在過往的版本，雖然有像是 ``w-16`` 這樣的class name，但是像``w-15``這樣的class name是沒有的，只能透過自己去設定，或是使用``w-[15rem]``這樣的方式，但是在v4中，我們可以直接使用``w-15``，讓我們更方便地去設定class name。

## not-* 類別

現在tailwindcss提供了``not-hover:`` 、 ``not-focus:``這樣的東西使用，讓我們可以更方便地去設定class name。

## 色彩改採用 OKLSH 色彩系統

過往的版本，tailwindcss使用的是RGB色彩系統，但是在v4中，改採用OKLSH色彩系統，這部分可以參考[這篇文章](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)。

## 更多的功能

前面提到的功能，只是一部份，更多內容請參閱[官方文件](https://tailwindcss.com/blog/tailwindcss-v4)


# 但他同時移除了一些功能

## \*-opacity-\* 移除

在v4中，``*-opacity-*``被移除了，現在要使用，搭配顏色使用modifiers，像是``bg-black/20``，這樣就可以達到背景透明度的效果。

## 命名上的改變

v3 中的shadow-sm 變成了 shadow-xs, rounded-sm 變成了 rounded-xs，rounded 變成了 rounded-sm，改變的不只這些，可以參考[這個章節](https://tailwindcss.com/docs/upgrade-guide#renamed-utilities)。

# 升級
官方提供了升級工具，在終端機下
```bash
npx @tailwindcss/upgrade@next
```
就可以升級到v4了，這個工具會幫你把class name改成v4的class name，不過需要注意，一些被deprecated的class name是不會被改的（例如``bg-opacity-50``），這部分需要自己去改。

# 我自己遇到的問題

我自己除了遇到前面所述的問題，還有遇到另外一個問題，我自己的個人網站，有使用到tailwind-typography，但是在v4中，這個套件在v4中的``prose-invert``顏色會跑掉，目前我是自己把顏色填進去，這部分希望官方可以盡快修復。