---
title: Getting Started with VuePress
tags:
  - vuepress
  - tutorial
createTime: 2026/01/01 10:00:00
permalink: /en/blog/9fzyqwku/
---

# Getting Started with VuePress

VuePress is a Markdown-centered static site generator. You can use it to create documentation, blogs, personal websites, and more.

## Features

- 📝 **Markdown First**: Write content in Markdown
- 🎨 **Vue Powered**: Use Vue components in Markdown
- 🚀 **High Performance**: Generate static HTML with SPA support
- 💅 **Customizable**: Rich theme and plugin ecosystem

## Quick Installation

```bash
# Using npm
npm init vuepress@latest my-blog

# Using pnpm
pnpm init vuepress@latest my-blog

# Using yarn
yarn init vuepress@latest my-blog
```

## Project Structure

```
my-blog/
├── .vuepress/       # Configuration directory
│   └── config.ts    # Configuration file
├── docs/            # Documentation directory
│   ├── README.md    # Homepage
│   └── guide/       # Guide docs
└── package.json
```

## Writing Content

Create Markdown files in the `docs` directory, and VuePress will automatically convert them to web pages.

```markdown
# My Article

This is the content of an article.

## Subheading

More content...
```

## Start Development Server

```bash
npm run dev
```

Visit `http://localhost:8080` to see the result.

## Build for Production

```bash
npm run build
```

The built files are in the `docs/.vuepress/dist` directory.

## Next Steps

- Check out the [VuePress official docs](https://vuepress.vuejs.org/)
- Try the [vuepress-theme-plume](https://theme-plume.vuejs.press/) theme
- Explore more plugins and components