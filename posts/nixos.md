---
title: NixOs Setup
date: 2025-01-03
---

# 前言

最近被nixos的聲明式配置吸引到了，所以決定著手來設定一下自己的設定。

# TL;DR
這是我的Dotfiles: [dotfiles](https://github.com/bloodnighttw/dotfile)

# 我被吸引的優點
1. 聲明式的配置
   1. 我不用擔心我在哪裡改了什麼，只要我改了設定，我就可以重新build一次，然後就可以得到我想要的結果。
2. Flakes
   1. 我可以直接用`nix flake`來build我想要的東西，而不用去寫一堆的`nix`文件，也不用擔這東西未來跑不起來，因為
   flake 會鎖定好版本。
3. Home Manager
   1. 我可以直接用`home-manager`來管理我的home目錄，而不用使用其他工具，而且home manager還提供一堆好用的東西。

# 但是他的缺點
1. 她的學習曲線很陡
   1. 他的學習曲線很陡，所以我花很多時間來學習相關設定，實際上我自己寫相關設定也寫得蠻吃力的。
2. FHS
   1. 因為他不支援FHS，所以很多東西得打上補丁，或是用相關的套件(nix-ld)，舉個例子，我常用的工具jetbrains-toolbox就需要這個東西才能正常開。

# 安裝
進入nixos的官網
