/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '指南',
    items: [
      { text: '快速开始', link: '/guide/getting-started.md' },
      { text: '前端技巧', link: '/guide/frontend-tips.md' },
      { text: 'Minecraft基础', link: '/guide/minecraft-basics.md' }
    ]
  },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/demo/README.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/en/guide/getting-started.md' },
      { text: 'Frontend Tips', link: '/en/guide/frontend-tips.md' },
      { text: 'Minecraft Basics', link: '/en/guide/minecraft-basics.md' }
    ]
  },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

