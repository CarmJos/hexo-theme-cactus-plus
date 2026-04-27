# Hexo Theme Cactus Plus

> An enhanced fork of [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus) with additional features and improvements.

English | [中文](README_zh-CN.md)

![screenshot](https://user-images.githubusercontent.com/2175271/137625287-24a4ac77-fbc9-4c99-a4cd-90455d93d13c.png)

## Table of Contents

- [General](#general)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Install](#install)
- [Configuration](#configuration)
  - [Color scheme](#color-scheme)
  - [Navigation](#navigation)
  - [Blog posts list on home page](#blog-posts-list-on-home-page)
  - [Projects list](#projects-list)
  - [Links list](#links-list)
  - [Social media links](#social-media-links)
  - [Copyright years](#copyright-years)
  - [Language configuration](#language-configuration)
  - [RTL support](#rtl-support)
  - [RSS](#rss)
  - [Analytics](#analytics)
  - [Comments](#comments)
  - [Code highlighting](#code-highlighting)
  - [Link underline animation](#link-underline-animation)
  - [Admonition blocks](#admonition-blocks)
  - [Tags and categories](#tags-and-categories)
  - [Local search](#local-search)
- [License](#license)

## General

- **Version**: 3.0 (Plus)
- **Base**: [hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)
- **Compatibility**: Hexo 3 or later

## Features

**Inherited from the original cactus theme:**

- Fully responsive
- Multiple color schemes (`dark`, `light`, `white`, `classic`)
- Configurable code highlighting
- Configurable navigation menu
- Projects list
- I18n support
- Disqus / Utterances comments
- Google Analytics / Baidu Tongji / Cloudflare Analytics / [Umami Analytics](https://umami.is)
- Font Awesome icons

**Added in Cactus Plus:**

- 🎨 New `carm` color scheme
- 💬 [Valine](https://valine.js.org/) comment system (LeanCloud backend) with custom emoji (Tieba / Bilibili stickers) and push notifications
- 🔤 Bundled local fonts: [FiraCode](https://github.com/tonsky/FiraCode) & [Noto Sans SC](https://fonts.google.com/noto/specimen/Noto+Sans+SC) — no CDN font dependency
- 📦 Automatic library injection from `node_modules` via `lib-assets.js`
- 🔗 Links section on the home page (`source/_data/links.json`)
- ✨ Configurable link underline animation
- 📋 Code block copy button with tooltip
- 📌 Sticky line numbers in code blocks
- ⚠️ Admonition block styles (`info`, `warning`, `error`, `failure`, etc.) in the `carm` color scheme
- 🔍 "No results" message in the search page
- 🌏 Enhanced Simplified Chinese (zh-CN) translations

## Prerequisites

1. Install [Hexo](https://hexo.io/docs/).

2. Initialise a new blog:

    ```sh
    $ hexo init my-blog
    ```

3. Navigate into the new directory:

    ```sh
    $ cd my-blog
    ```

## Install

1. Clone this theme into your `themes` directory:

    ```sh
    $ git clone https://github.com/CarmJos/hexo-theme-cactus-plus.git themes/cactus
    ```

2. Install theme dependencies:

    ```sh
    $ cd themes/cactus && npm install
    ```

3. Change the `theme` property in your site's `_config.yml`:

    ```yml
    theme: cactus
    ```

4. Create pages and articles:

    ```sh
    # "About me" page
    $ hexo new page about

    # New post
    $ hexo new post "hello world"
    ```

5. Run `hexo generate` and `hexo server`.

6. [Publish your blog](https://hexo.io/docs/one-command-deployment.html)!

## Configuration

An overview of all settings can be found in [_config.yml](_config.yml).

You can override theme defaults from your site's primary `_config.yml` using the `theme_config` variable:

```yml
# _config.yml (site)
theme_config:
  colorscheme: white
```

```yml
# themes/cactus/_config.yml (theme)
colorscheme: dark
```

The site-level `theme_config` value takes precedence.

### Color scheme

Five color schemes are available: `dark`, `light`, `white`, `classic`, and `carm` (added in Cactus Plus).

```yml
colorscheme: dark
```

You can also create your own color scheme by adding a new `.styl` file in `source/css/_colors/`.

> **Note:** The `carm` scheme also includes admonition block styles. See [Admonition blocks](#admonition-blocks).

### Navigation

Configure the navigation menu in `_config.yml`:

```yml
nav:
  home: /
  about: /about/
  articles: /archives/
  projects: http://github.com/yourname
  LINK_NAME: URL
```

### Blog posts list on home page

- Show only the most recent N posts (default):

    ```yml
    posts_overview:
      show_all_posts: false
      post_count: 5
    ```

- Show all posts:

    ```yml
    posts_overview:
      show_all_posts: true
    ```

### Projects list

Create `source/_data/projects.json` to display a projects section on the home page:

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

### Links list

> **New in Cactus Plus.**

Create `source/_data/links.json` to display a links section on the home page. You can use it to showcase your works, articles, or friendly external links:

```json
[
  {
    "name": "My GitHub",
    "url": "https://github.com/yourname",
    "desc": "My open-source projects"
  },
  {
    "name": "My Blog",
    "url": "https://yourblog.com",
    "desc": "Personal blog"
  }
]
```

You can optionally set the URL shown in the section title via `_config.yml`:

```yml
links_url: /links/
```

### Social media links

Add social media links in `_config.yml`. The `icon` value must match a [Font Awesome Brands](https://fontawesome.com/icons?d=gallery&s=brands) icon name. Use `mail` as a special value for an email link.

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

### Copyright years

```yml
copyright:
  start_year: 2020
  end_year:
```

If `end_year` is empty, the current year is used.

### Language configuration

Please read [Hexo documentation — i18n](https://hexo.io/docs/internationalization.html) if you are new to Hexo i18n.

Languages currently supported:

| Language | Code |
|---|---|
| Arabic | `ar` |
| Brazilian Portuguese | `pt-BR` |
| Catalan | `ca` |
| Chinese (Simplified) | `zh-CN` |
| Chinese (Traditional) | `zh-TW` |
| Dutch | `nl` |
| English (default) | `en` |
| French | `fr` |
| German | `de` |
| Italian | `it` |
| Korean | `kr` |
| Persian | `fa` |
| Polish | `pl` |
| Russian | `ru` |
| Spanish | `es` |
| Turkish | `tr` |
| Ukrainian | `ua` |
| Vietnamese | `vi` |

Set the language in your site's `_config.yml`:

```yml
language: zh-CN
```

To add a new language (e.g. Japanese):

1. Set `language: ja` in `_config.yml`.
2. Create `themes/cactus/languages/ja.yml`.
3. Copy `themes/cactus/languages/default.yml` into it and translate all strings.

**Note:** This theme does not support multi-language sites.

### RTL support

For Arabic and Persian, set `direction: rtl` in `_config.yml`. This also switches the font to [Vazir](https://github.com/rastikerdar/vazir-font).

```yml
direction: rtl
```

### RSS

```yml
rss: false        # disable RSS (default)
rss: atom.xml     # explicit feed link
rss:              # use hexo-generator-feed plugin
```

### Analytics

```yml
google_analytics:
  enabled: true
  id: 'UA-XXXXXXXX-X'

baidu_analytics:
  enabled: true
  id: YOUR_BAIDU_ID

cloudflare_analytics:
  enabled: true
  id: YOUR_CF_ID

umami_analytics:
  enabled: true
  id: YOUR_UMAMI_ID
  host: https://analytics.domain.com
  script_name: umami.js
```

### Comments

Three comment systems are supported: [Disqus](https://disqus.com), [Utterances](https://utteranc.es), and [Valine](https://valine.js.org/) (added in Cactus Plus).

#### Disqus

```yml
disqus:
  enabled: true
  shortname: YOUR_DISQUS_SHORTNAME
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

> **New in Cactus Plus.** Requires a [LeanCloud](https://leancloud.app/) application.

```yml
valine:
  enabled: true
  appId: YOUR_APP_ID
  appKey: YOUR_APP_KEY
  avatar: mp           # Gravatar avatar style
  placeholder: "Leave a comment..."
  guest_info: nick,mail,link
  pageSize: 15
  visitor: true        # enable article view-count statistics
  lang: zh-cn          # en or zh-cn
  pushType:            # push notification type: sc (Server酱) | qmsg | cp (CoolPush) | leave empty
  pushLink:            # full URL for the push service
```

**Push notifications:** When a visitor submits a comment, you can receive a push notification via [Server酱](https://sc.ftqq.com/), [Qmsg酱](https://qmsg.zendee.cn/), or [CoolPush](https://cp.xuthus.cc/). Set `pushType` to `sc`, `qmsg`, or `cp`, and fill in the `pushLink` with your API endpoint.

### Code highlighting

```yml
highlight: COLORSCHEME_NAME
```

Available schemes are listed in `source/css/_highlight/`.

### Link underline animation

> **New in Cactus Plus.** Controls the animated underline that appears on hover for content links.

```yml
link_underline:
  duration: 0.28s   # animation duration
  thickness: 2      # underline thickness in px
  offset: 2px       # vertical offset from text baseline
```

### Admonition blocks

> **New in Cactus Plus** — available when using the `carm` color scheme.

You can add styled callout blocks using a `<div>` with the appropriate class:

```html
<div class="admonition info">
  <p class="admonition-title">Info</p>
  <p>This is an informational note.</p>
</div>
```

Supported types: `info`, `todo`, `warning`, `attention`, `caution`, `failure`, `missing`, `fail`, `error`.

### Tags and categories

Add tags and categories in post front-matter:

```markdown
---
title: Tags and Categories
date: 2017-12-24 23:29:53
tags:
  - Foo
  - Bar
categories:
  - Baz
---
```

Create a tags page:

```sh
$ hexo new page tags
```

Add `type: tags` to `source/tags/index.md`. You can also enable a tag cloud on the home page:

```yml
tags_overview: true
```

Create a categories page:

```sh
$ hexo new page categories
```

Add `type: categories` to `source/categories/index.md`.

Link these pages from the navigation menu:

```yml
nav:
  tag: /tags/
  category: /categories/
```

### Local search

1. Install the [hexo-generator-search](https://www.npmjs.com/package/hexo-generator-search) plugin:

    ```sh
    $ npm install hexo-generator-search --save
    ```

2. Create a search page:

    ```sh
    $ hexo new page search
    ```

3. Add `type: search` to `source/search/index.md`:

    ```markdown
    ---
    title: Search
    type: search
    ---
    ```

4. Add a link in the navigation menu:

    ```yml
    nav:
      search: /search/
    ```

## License

MIT
