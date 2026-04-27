# Hexo Theme Cactus Plus

> 基于 [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus) 的增强版，新增了更多功能与优化。

[English](README.md) | 中文

![screenshot](https://user-images.githubusercontent.com/2175271/137625287-24a4ac77-fbc9-4c99-a4cd-90455d93d13c.png)

## 目录

- [基本信息](#基本信息)
- [功能特性](#功能特性)
- [前置条件](#前置条件)
- [安装](#安装)
- [配置说明](#配置说明)
  - [配色方案](#配色方案)
  - [导航菜单](#导航菜单)
  - [首页文章列表](#首页文章列表)
  - [项目列表](#项目列表)
  - [友链列表](#友链列表)
  - [社交媒体链接](#社交媒体链接)
  - [版权年份](#版权年份)
  - [语言配置](#语言配置)
  - [RTL 支持](#rtl-支持)
  - [RSS](#rss)
  - [统计分析](#统计分析)
  - [评论系统](#评论系统)
  - [代码高亮](#代码高亮)
  - [链接下划线动画](#链接下划线动画)
  - [提示块](#提示块)
  - [标签与分类](#标签与分类)
  - [本地搜索](#本地搜索)
- [许可证](#许可证)

## 基本信息

- **版本**：3.0 (Plus)
- **基础主题**：[hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)
- **兼容性**：Hexo 3 及以上版本

## 功能特性

**继承自原版 cactus 主题：**

- 完全响应式布局
- 多种配色方案（`dark`、`light`、`white`、`classic`）
- 可自定义代码高亮方案
- 可配置导航菜单
- 项目列表展示
- i18n 国际化支持
- Disqus / Utterances 评论系统
- Google Analytics / 百度统计 / Cloudflare Analytics / [Umami Analytics](https://umami.is)
- Font Awesome 图标

**Cactus Plus 新增特性：**

- 🎨 新增 `carm` 配色方案
- 💬 支持 [Valine](https://valine.js.org/) 评论系统（基于 LeanCloud），内置贴吧 / 哔哩哔哩表情包，支持评论推送通知
- 🔤 内置本地字体：[FiraCode](https://github.com/tonsky/FiraCode)（代码字体）与 [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC)（中文字体），无需 CDN
- 📦 通过 `lib-assets.js` 自动从 `node_modules` 注入前端库文件，无需单独的 gulp 步骤
- 🔗 首页支持友链/链接列表（`source/_data/links.json`）
- ✨ 可配置链接悬停下划线动画
- 📋 代码块一键复制按钮（含气泡提示）
- 📌 代码块行号固定（横向滚动时行号保持可见）
- ⚠️ 支持提示块样式（`info`、`warning`、`error`、`failure` 等），在 `carm` 配色方案下生效
- 🔍 搜索页面添加"无结果"提示
- 🌏 优化简体中文（zh-CN）翻译

## 前置条件

1. 安装 [Hexo](https://hexo.io/docs/)。

2. 初始化博客目录：

    ```sh
    $ hexo init my-blog
    ```

3. 进入目录：

    ```sh
    $ cd my-blog
    ```

## 安装

1. 将主题克隆到 `themes` 目录：

    ```sh
    $ git clone https://github.com/CarmJos/hexo-theme-cactus-plus.git themes/cactus
    ```

2. 安装主题依赖：

    ```sh
    $ cd themes/cactus && npm install
    ```

3. 修改站点 `_config.yml` 中的 `theme` 配置：

    ```yml
    theme: cactus
    ```

4. 创建页面与文章：

    ```sh
    # 创建"关于"页
    $ hexo new page about

    # 创建新文章
    $ hexo new post "hello world"
    ```

5. 运行 `hexo generate` 和 `hexo server`。

6. [发布博客](https://hexo.io/docs/one-command-deployment.html)！

## 配置说明

所有配置项的概览可参考 [_config.yml](_config.yml)。

你可以在站点的 `_config.yml` 中通过 `theme_config` 字段覆盖主题默认配置：

```yml
# _config.yml（站点配置）
theme_config:
  colorscheme: white
```

```yml
# themes/cactus/_config.yml（主题配置）
colorscheme: dark
```

站点配置中的 `theme_config` 优先级更高。

### 配色方案

目前提供五种配色方案：`dark`、`light`、`white`、`classic` 以及 Cactus Plus 新增的 `carm`。

```yml
colorscheme: dark
```

你也可以在 `source/css/_colors/` 目录下创建新的 `.styl` 文件，自定义配色方案。

> **注意：** `carm` 配色方案还包含提示块（admonition）样式。详见[提示块](#提示块)。

### 导航菜单

在 `_config.yml` 中配置导航菜单：

```yml
nav:
  home: /
  about: /about/
  articles: /archives/
  projects: http://github.com/yourname
  LINK_NAME: URL
```

### 首页文章列表

- 仅显示最近 N 篇文章（默认）：

    ```yml
    posts_overview:
      show_all_posts: false
      post_count: 5
    ```

- 显示全部文章：

    ```yml
    posts_overview:
      show_all_posts: true
    ```

### 项目列表

创建 `source/_data/projects.json`，在首页显示项目列表：

```json
[
  {
    "name": "Hexo",
    "url": "https://hexo.io/",
    "desc": "A fast, simple & powerful blog framework"
  },
  {
    "name": "Font Awesome",
    "url": "http://fontawesome.io/",
    "desc": "The iconic font and CSS toolkit"
  }
]
```

### 友链列表

> **Cactus Plus 新增功能。**

创建 `source/_data/links.json`，在首页展示友链或外链，可用于展示你的作品、文章或友情链接：

```json
[
  {
    "name": "我的 GitHub",
    "url": "https://github.com/yourname",
    "desc": "我的开源项目"
  },
  {
    "name": "我的博客",
    "url": "https://yourblog.com",
    "desc": "个人博客"
  }
]
```

可在 `_config.yml` 中设置该区域标题链接指向的 URL：

```yml
links_url: /links/
```

### 社交媒体链接

在 `_config.yml` 中配置社交媒体链接。`icon` 的值需对应 [Font Awesome Brands](https://fontawesome.com/icons?d=gallery&s=brands) 图标名称，`mail` 为邮箱链接的特殊值。

```yml
social_links:
  - icon: github
    link: https://github.com/yourname
  - icon: twitter
    label: "@your-twitter-handle"
    link: https://twitter.com/yourname
  - icon: mail
    link: mailto:name@email.com
```

### 版权年份

```yml
copyright:
  start_year: 2020
  end_year:
```

`end_year` 为空时，自动使用当前年份。

### 语言配置

如果你不熟悉 Hexo 国际化（i18n），请参阅 [Hexo 文档 — 国际化](https://hexo.io/docs/internationalization.html)。

目前支持的语言：

| 语言 | 代码 |
|---|---|
| 阿拉伯语 | `ar` |
| 巴西葡萄牙语 | `pt-BR` |
| 加泰罗尼亚语 | `ca` |
| 简体中文 | `zh-CN` |
| 繁体中文 | `zh-TW` |
| 荷兰语 | `nl` |
| 英语（默认） | `en` |
| 法语 | `fr` |
| 德语 | `de` |
| 意大利语 | `it` |
| 韩语 | `kr` |
| 波斯语 | `fa` |
| 波兰语 | `pl` |
| 俄语 | `ru` |
| 西班牙语 | `es` |
| 土耳其语 | `tr` |
| 乌克兰语 | `ua` |
| 越南语 | `vi` |

在站点 `_config.yml` 中设置语言：

```yml
language: zh-CN
```

添加新语言（以日语为例）：

1. 在 `_config.yml` 中设置 `language: ja`。
2. 在 `themes/cactus/languages/` 目录创建 `ja.yml`。
3. 将 `default.yml` 的内容复制进去，并翻译所有字符串。

**注意：本主题不支持多语言网站。**

### RTL 支持

对于阿拉伯语和波斯语，在 `_config.yml` 中设置 `direction: rtl`，同时字体将切换为 [Vazir](https://github.com/rastikerdar/vazir-font)。

```yml
direction: rtl
```

### RSS

```yml
rss: false      # 禁用 RSS（默认）
rss: atom.xml   # 指定 feed 链接
rss:            # 使用 hexo-generator-feed 插件
```

### 统计分析

```yml
google_analytics:
  enabled: true
  id: 'UA-XXXXXXXX-X'

baidu_analytics:
  enabled: true
  id: 你的百度统计ID

cloudflare_analytics:
  enabled: true
  id: 你的CF_ID

umami_analytics:
  enabled: true
  id: 你的Umami_ID
  host: https://analytics.domain.com
  script_name: umami.js
```

### 评论系统

支持三种评论系统：[Disqus](https://disqus.com)、[Utterances](https://utteranc.es) 和 [Valine](https://valine.js.org/)（Cactus Plus 新增）。

#### Disqus

```yml
disqus:
  enabled: true
  shortname: 你的DISQUS_SHORTNAME
```

#### Utterances

```yml
utterances:
  enabled: true
  repo: owner/githubrepo
  issue_term: pathname
  label: Comment
  theme: github-dark
```

#### Valine

> **Cactus Plus 新增功能。** 需要 [LeanCloud](https://leancloud.app/) 应用。

```yml
valine:
  enabled: true
  appId: 你的APP_ID
  appKey: 你的APP_KEY
  avatar: mp           # Gravatar 头像风格
  placeholder: "说点什么..."
  guest_info: nick,mail,link
  pageSize: 15
  visitor: true        # 开启文章阅读量统计
  lang: zh-cn          # en 或 zh-cn
  pushType:            # 推送类型：sc（Server酱）| qmsg | cp（CoolPush）| 留空关闭
  pushLink:            # 推送服务的完整 API 地址
```

**评论推送通知：** 当有访客提交评论时，你可以通过 [Server酱](https://sc.ftqq.com/)、[Qmsg酱](https://qmsg.zendee.cn/) 或 [CoolPush](https://cp.xuthus.cc/) 接收推送通知。将 `pushType` 设为 `sc`、`qmsg` 或 `cp`，并在 `pushLink` 中填写对应的 API 地址。

### 代码高亮

```yml
highlight: 高亮方案名称
```

可用的方案列在 `source/css/_highlight/` 目录下。

### 链接下划线动画

> **Cactus Plus 新增功能。** 控制内容链接悬停时出现的下划线动画。

```yml
link_underline:
  duration: 0.28s   # 动画时长
  thickness: 2      # 下划线厚度（px）
  offset: 2px       # 与文字基线的垂直偏移量
```

### 提示块

> **Cactus Plus 新增功能** — 在使用 `carm` 配色方案时生效。

使用带有相应 class 的 `<div>` 元素可以创建有样式的提示块：

```html
<div class="admonition info">
  <p class="admonition-title">提示</p>
  <p>这是一条信息提示。</p>
</div>
```

支持的类型：`info`、`todo`、`warning`、`attention`、`caution`、`failure`、`missing`、`fail`、`error`。

### 标签与分类

在文章 Front Matter 中添加标签和分类：

```markdown
---
title: 标签与分类示例
date: 2017-12-24 23:29:53
tags:
  - Foo
  - Bar
categories:
  - Baz
---
```

创建标签页：

```sh
$ hexo new page tags
```

在 `source/tags/index.md` 的 Front Matter 中添加 `type: tags`。还可以在首页开启标签云：

```yml
tags_overview: true
```

创建分类页：

```sh
$ hexo new page categories
```

在 `source/categories/index.md` 的 Front Matter 中添加 `type: categories`。

在导航菜单中链接这些页面：

```yml
nav:
  tag: /tags/
  category: /categories/
```

### 本地搜索

1. 安装 [hexo-generator-search](https://www.npmjs.com/package/hexo-generator-search) 插件：

    ```sh
    $ npm install hexo-generator-search --save
    ```

2. 创建搜索页面：

    ```sh
    $ hexo new page search
    ```

3. 在 `source/search/index.md` 的 Front Matter 中添加 `type: search`：

    ```markdown
    ---
    title: 搜索
    type: search
    ---
    ```

4. 在导航菜单中添加链接：

    ```yml
    nav:
      search: /search/
    ```

## 许可证

MIT
