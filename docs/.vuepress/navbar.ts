/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '指南',
    items: [
      { text: 'Towny 插件使用指南', link: '/guide/preview/town-guide-detailed/' },
      { text: 'MCMMO 游玩说明', link: '/guide/preview/mcmmo/' },
      { text: '管理文档', link: '/admin/' }
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
     { text: 'Towny Plugin Guide(Chinese)', link: '/guide/preview/town-guide-detailed/' },
    { text: 'MCMMO Gameplay Guide(Chinese)', link: '/guide/preview/mcmmo/' },
    { text: 'Admin Documentation(Chinese)', link: '/admin/' }
    ]
  },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/demo/README.md' }]
  },
])

