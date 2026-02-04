/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  {
    text: '指南',
    items: [
      { text: 'Towny 插件使用指南', items: [
      { text: '详尽', link: '/guide/preview/Towny/Guide-Detailed/' },
      { text: '简单', link: '/guide/preview/Towny/Guide-Simple/' },
    ]},
      { text: 'MCMMO 游玩说明', link: '/guide/preview/mcmmo/' },
      { text: '管理文档', link: '/admin/' }
    ]
  },
 
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  {
    text: 'Guide',
    items: [
     { text: 'Towny Plugin Guide',  items: [
      { text: 'Detailed', link: '/en/guide/preview/Towny/Guide-Detailed/' },
      { text: 'Simple', link: '/en/guide/preview/Towny/Guide-Simple/' },] },
    { text: 'MCMMO Gameplay Guide', link: '/en/guide/preview/mcmmo/' },
    ]
  },
  
])

