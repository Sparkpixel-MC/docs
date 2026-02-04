/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情�? *
 * Collections 配置文件，它�?`.vuepress/plume.config.ts` 中被导入�? *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启�?vuepress 时，
 * 读取这里配置�?Collections，然后在�?Collection 相关�?Markdown 文件中，自动生成 permalink�? *
 * collection �? type �?`post` 时，表示�?文档列表类型（即没有侧边导航栏，有文档列表页�? * 可用于实现如 博客、专�?等以文章列表聚合形式的文档集�?（内容相对碎片化的）
 *
 * collection �?type �?`doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集�?（内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应�?Collection 配置�?link 的前缀开头�?是否展示侧边栏是根据 页面链接 的前缀 �?`collection.link`
 * 的前缀是否匹配来决定�? */

/**
 * 在受支持�?IDE 中会智能提示配置项�? *
 * - `defineCollections` 是用于定�?collection 集合的帮助函�? * - `defineCollection` 是用于定义单�?collection 配置的帮助函�? *
 * 通过 `defineCollection` 定义�?collection 配置，应该填�?`defineCollections` �? */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhBlog = defineCollection({
  // post 类型，这里用于实�?博客功能
  type: 'post',
  // 文档集合所在目录，相对�?`docs/`
  dir: 'blog',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: 'Blog',
  // 文章列表页的链接，如�?`linkPrefix` 未定义，它也将作�?相关的文章的 permalink 的前缀
  link: '/blog/',
  postList: true, // 是否启用文章列表�?  tags: true, // 是否启用标签�?  archives: true, // 是否启用归档�?  categories: true, // 是否启用分类�?  pagination: 15, // 每页显示文章数量
})

const zhDemoDoc = defineCollection({
  // doc 类型，该类型带有侧边�?  type: 'doc',
  // 文档集合所在目录，相对�?`docs/`
  dir: 'guide',
  // `dir` 所指向的目录中的所�?markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏�?  // 所以请确保  markdown 文件�?permalink 都以 `/` + `linkPrefix` 开�?  linkPrefix: '/guide',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: 'guide',
  // 手动配置侧边栏结�?
  // 根据文件结构自动生成侧边�?  sidebar: 'auto',
})

const zhGuideDoc = defineCollection({
  // doc 类型，该类型带有侧边�?  type: 'doc',
  // 文档集合所在目录，相对�?`docs/`
  dir: 'guide',
  // `dir` 所指向的目录中的所�?markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏�?  // 所以请确保  markdown 文件�?permalink 都以 `/` + `linkPrefix` 开�?  linkPrefix: '/guide',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: '指南',
  // 根据文件结构自动生成侧边�?  sidebar: 'auto',
  tags: true, // 是否启用标签�?})

/**
 * 导出所有的 collections
 *  (zhBlog 为博客示例，如果不需要博客功能，请删�?
 *  (zhDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const zhCollections = defineCollections([
  zhBlog,
  zhDemoDoc,
  zhGuideDoc,
])

/* =================== locale: en-US ======================= */

const enBlog = defineCollection({
  // post 类型，这里用于实�?博客功能
  type: 'post',
  // 文档集合所在目录，相对�?`docs/en/`
  dir: 'blog',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: 'Blog',
  // 文章列表页的链接，如�?`linkPrefix` 未定义，它也将作�?相关的文章的 permalink 的前缀
  link: '/blog/',
  postList: true, // 是否启用文章列表�?  tags: true, // 是否启用标签�?  archives: true, // 是否启用归档�?  categories: true, // 是否启用分类�?  pagination: 15, // 每页显示文章数量
})

const enDemoDoc = defineCollection({
  // doc 类型，该类型带有侧边�?  type: 'doc',
  // 文档集合所在目录，相对�?`docs/en/`
  dir: 'demo',
  // `dir` 所指向的目录中的所�?markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏�?  // 所以请确保  markdown 文件�?permalink 都以 `/en/` + `linkPrefix` 开�?  linkPrefix: '/demo',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: 'Demo',
  // 手动配置侧边栏结�?  sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边�?  // sidebar: 'auto',
})

const enGuideDoc = defineCollection({
  // doc 类型，该类型带有侧边�?  type: 'doc',
  // 文档集合所在目录，相关�?docs/en/
  dir: 'guide',
  // dir 所指向的目录中的所�?markdown 文件，其 permalink 需要以 linkPrefix 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏�?  // 所以请确保  markdown 文件�?permalink 都以 /en/ + linkPrefix 开�?  linkPrefix: '/guide',
  // 文档标题，它将用于在页面的面包屑导航中显�?  title: 'Guide',
  // 文章列表页的链接，如�?linkPrefix 朮�义，它也将作�?相关的文章的 permalink 的前缀
  link: '/guide/',
  // 根据文��结构臊�生成侧边�?  sidebar: 'auto',
})

/**
 * 导出所有的 collections
 *  (enBlog 为博客示例，如果不需要博客功能，请删�?
 *  (enDemoDoc 为参考示例，如果不需要它，请删除)
 */
export const enCollections = defineCollections([
  enBlog,
  enDemoDoc,
  enGuideDoc,
])


