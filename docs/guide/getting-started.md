---
title: VuePress 快速开始
tags:
  - vuepress
  - tutorial
createTime: 2026/01/01 10:00:00
permalink: /guide/getting-started/
---

# VuePress 快速开始

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以用它来制作文档、博客、个人网站等。

## 特性

- 📝 **Markdown 优先**：使用 Markdown 编写内容
- 🎨 **Vue 驱动**：在 Markdown 中使用 Vue 组件
- 🚀 **高性能**：生成静态 HTML，支持 SPA
- 💅 **可定制**：丰富的主题和插件生态

## 快速安装

```bash
# 使用 npm
npm init vuepress@latest my-blog

# 使用 pnpm
pnpm init vuepress@latest my-blog

# 使用 yarn
yarn init vuepress@latest my-blog
```

## 项目结构

```
my-blog/
├── .vuepress/       # 配置目录
│   └── config.ts    # 配置文件
├── docs/            # 文档目录
│   ├── README.md    # 首页
│   └── guide/       # 指南文档
└── package.json
```

## 编写内容

在 `docs` 目录下创建 Markdown 文件，VuePress 会自动将其转换为网页。

```markdown
# 我的文章

这是一篇文章的内容。

## 子标题

更多内容...
```

## 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:8080` 查看效果。

## 构建生产版本

```bash
npm run build
```

构建后的文件在 `docs/.vuepress/dist` 目录。

## 下一步

- 查看 [VuePress 官方文档](https://vuepress.vuejs.org/)
- 尝试使用 [vuepress-theme-plume](https://theme-plume.vuejs.press/) 主题
- 探索更多插件和组件