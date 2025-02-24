---
title: 將 react + vite 整合進 Springboot
date: 2025-02-25
categories:
  - springboot
  - react
  - frontend
  - vite
---


# 前言
最近我在寫一個短網址專案，使用springboot作為後端連接資料庫，前端則打算使用React進行開發（因為我熟這個）。

一般而言，我們可以用reverse proxy，把request是 `/api` 開頭的流量導入至後端，其他的request則導向React的程式，這不難實現
，我們藉由reverse proxy去使用一些特定功能，像是let's encrypt簽 SSL達成Https。

然而，作為一個短網址的程式，我們一定希望 ``https://<domain>/xxxxxx``能直接導向目標連結的，如果要使用reverse proxy的話
，我們必須得在react這端才進行重新導向，而React這端也必須重新在跟後端要資料，才能知道要導向哪裡，這太多此一舉對吧。

所以我就在想，能不能整合vite build好的檔案，讓springboot傳送react的程式給前端，並在特定情況下，會自動達成一個短網址服務要作的事情。

# 作法簡介
一般而言，這是springboot專案建立之後的檔案結構這邊com.example.demo其實是com/example/demo，不過因為是java的package所以用`.`表示。
```
.
├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── HELP.md
├── settings.gradle
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com.example.demo
│   │   │               └── DemoApplication.java
│   │   └── resources
│   │       ├── application.properties
│   │       ├── static
│   │       └── templates
│   └── test
......
```

而我們透過vite 創建新的react專案後，檔案路徑會長這樣：

```
my-vue-app/
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```


而我想要``src/main/backend``底下包含後端的邏輯，``src/main/frontend``包含backend的邏輯。

## 修改gradle java存放位置
1. 修改 ``src/main/java`` -> ``src/main/backend`` 
2. 進入 ``gradle.build.kts`` （我用kotlin dsl） 新增這個東西，來修改java的位置。

```kts
...
sourceSets {
    main {
        java {
            srcDir("src/main/backend")
        }
    }
}
...
```

## 把前端的程式導入專案
1. 首先把 ``public/`` 底下的資料改放到 ``src/assets``，順便修改程式（調位置過後記得改程式寫的位置），接著把`public/`刪除。
2. 把`index.html`移到`src/`底下。
3. 把``src/``底下的所有東西匯入到 ``src/main/frontend/``。
4. 把其餘資料匯入到 project root （包含`package.json`與其他設定檔）。
5. 進入 ``vite.config.ts``修改root，並修改 build的output path
    ```json lines
    {
    ...
      root: 'src/main/frontend',
      build: {
        outDir: "../resources/frontend-generated",
      },
    ...
    }
    ```
6. 在.gitignore中忽略掉 `src/main/frontend` 不然build出來檔案上版本控制就糟糕了
7. 設定springboot，讓伺服器可以給user這些資料，並將部分request forward到react.
    ```java
    package dev.bntw.shurl;

   import org.springframework.context.annotation.Configuration;
   import org.springframework.util.AntPathMatcher;
   import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
   import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
   import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
   import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
   
   @Configuration
   public class FrontendConfig implements WebMvcConfigurer {
   @Override
   public void addResourceHandlers(ResourceHandlerRegistry registry) {
   
           registry.addResourceHandler("/**")
                   .addResourceLocations("classpath:/frontend-generated/")
                   .resourceChain(true);
       }
   
       @Override
       public void addViewControllers(ViewControllerRegistry registry) {
           registry.addViewController("/{spring:[a-zA-Z\\-_]+}")
                   .setViewName("forward:/index.html");
           registry.addViewController("/**/{spring:[a-zA-Z\\-_]+}")
                   .setViewName("forward:/index.html");
       }
   
       @Override
       public void configurePathMatch(PathMatchConfigurer configurer) {
           configurer.setPathMatcher(new AntPathMatcher());
       }
   }

    ``` 

你可以參考 [我的專案](https://github.com/bloodnighttw/shurl) 來看設定是如做的。

![project image](https://r2.bntw.dev/Screenshot%20from%202025-02-25%2001-52-41.png)

# 需要注意的事項
1. 之後在build springboot前記得要把frontend build起來。
2. 沒辦法享受到 vite 的 HMR，需要的話還是用vite開dev server會比較好。