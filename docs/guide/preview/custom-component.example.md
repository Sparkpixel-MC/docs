---
title: Towny 插件使用指南(详尽)
tags:
  - minecraft
  - towny
writer: Azureheru
---

# Minecraft 合成表组件

这是一个用于显示 Minecraft 合成配方的 Vue 组件。

## 功能特性

- 支持显示 3x3 合成网格
- 支持输出物品显示
- 支持输出数量显示
- 支持任意木板（any_planks）动画切换
- 支持自定义物品名称（悬浮显示）
- 使用 Minecraft Wiki 的图标资源
- 响应式设计，支持深色模式

## 使用示例

### 合成木棍

<crafting-table
  :recipe="['', 'oak_planks', '', '', '', '', '', '', '']"
  output="stick"
  :item-names="{ 'oak_planks': '橡木木板', 'stick': '木棍' }"
/>

### 合成工作台（任意木板）

<crafting-table
  :recipe="['any_planks', 'any_planks', '', 'any_planks', 'any_planks', '', '', '', '']"
  output="crafting_table"
  :item-names="{ 'any_planks': '任意木板', 'crafting_table': '工作台' }"
/>

## 组件属性

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| recipe | Array | 是 | - | 9个格子的配方数组 |
| output | String | 是 | - | 输出物品名称 |
| outputCount | Number | 否 | 1 | 输出物品数量 |
| itemNames | Object | 否 | {} | 物品名称映射 |

## 物品名称映射

使用 `itemNames` prop 可以自定义物品的中文名称，鼠标悬浮时会显示：

```vue
<crafting-table
  :recipe="['oak_planks', 'oak_planks', '', '', '', '', '', '', '']"
  output="stick"
  :item-names="{ 'oak_planks': '橡木木板', 'stick': '木棍' }"
/>
```

## 特殊物品

### 任意木板

使用 `any_planks` 可以显示任意木板的动画效果，支持12种木板类型：
- 橡木木板
- 云杉木板
- 白桦木板
- 丛林木板
- 金合欢木板
- 深色橡木木板
- 红树木板
- 樱花木板
- 竹板
- 苍白橡木木板
- 绯红木板
- 诡异木板
