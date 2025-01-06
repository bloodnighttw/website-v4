---
title: NixOs Setup
date: 2025-01-03
categories:
    - linux
---

# 前言

最近被nixos的聲明式配置吸引到了，所以決定著手來設定一下自己的設定。

# TL;DR

這是我的Dotfiles: [dotfiles](https://github.com/bloodnighttw/dotfile)

# 為什麼要使用NixOs

## 我被吸引的點
1. 聲明式的配置
   1. 方便管理，使用git來管理設定檔，並且可以很方便的rollback。
2. Rollback
   1. NixOs會記錄以前的設定，如果不小心搞崩系統了，可以輕鬆地在grub選擇之前的版本。
3. Reproducible
   1. Nix提供flake，可以輕鬆鎖定版本，安裝套件時，不太用擔心Ａ電腦跑得起來B電腦卻不行，聲明一次，成功build一次，基本上都能一直成功build。
4. Home Manager
   1. 我可以直接用`home-manager`來管理我的home目錄，而不用使用其他工具，而且home manager還提供一堆好用的東西。

## 缺點
1. 她的學習曲線很陡
   1. 他的學習曲線很陡，所以我花很多時間來學習相關設定，實際上我自己寫相關設定也寫得蠻吃力的。
2. FHS
   1. 因為他不支援FHS，所以很多東西得打上補丁，或是用相關的套件(nix-ld)才能開啟，舉個例子，我常用的工具jetbrains-toolbox就需要這個東西才能正常開。

# 安裝
進入nixos的[官網](https://nixos.org/)下載iso，然後開始安裝，這邊我就不多說了，因為他的安裝方式跟其他常見的linux差不多。

安裝的過程應該會叫你選擇Desktop環境，我選擇的設定是不含Desktop的設定，因為我想要自己來設定我的桌面環境，我自己主要使用 bspwm。

# 設定

## 系統設定
設定檔位於 `/etc/nixos/configuration.nix`，設定檔會含有你要安裝的binary，這邊我就不多說了，我從這邊複製到統一的資料夾，並使用flake來保證版本的一致性。

我順便還寫了個在tty1自動在登入後啟動startx的腳本，這樣我就不用再去手動啟動xorg了。

[設定檔案在這](https://github.com/bloodnighttw/dotfile/blob/main/nixos/configuration.nix)

## Home Manager
Home Manager 是一個管理user設定的工具，他可以幫你管理你的home目錄，並且可以幫你安裝一些套件，這邊我也是使用flake來管理。

這個設定檔包含了每個設定檔案的位置，以及userspace的package，這邊我是把除了x11以及非system 的套件，像是picom, rofi, polybar等套件，全部放在這，這樣可以快速更新的同時也不會影響到系統的穩定性。

[設定檔案在這](https://github.com/bloodnighttw/dotfile/blob/main/home-manager/home.nix)

## 其他設定

我得其他設定，像是picom的設定檔、rofi的設定檔、bspwm的設定檔等等，`我都放在我的config裡面`，並讓 home manager下去管理他要去的位置。
![bspwm](https://i.imgur.com/5k5zpxH.jpeg)
[你可以參考這裡](https://github.com/bloodnighttw/dotfile/tree/main/config)，並參考上一個章節說的home manager設定檔案。

## Nvidia
還沒處理，遇到再說，反正可以參考[這篇](https://nixos.wiki/wiki/Nvidia)說明。
![so nvidia, fuck you](https://i.imgur.com/NqhBNru.jpeg)
