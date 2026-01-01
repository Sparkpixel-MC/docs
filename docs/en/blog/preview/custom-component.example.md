---
title: Minecraft Crafting Table Component
tags:
  - minecraft
  - vue
createTime: 2026/01/01 01:04:50
permalink: /en/blog/gm712daw/
---

# Minecraft Crafting Table Component

A Vue component for displaying Minecraft crafting recipes.

## Features

- Support for 3x3 crafting grid
- Support for output item display
- Support for output count display
- Support for any planks (any_planks) animation
- Support for custom item names (hover tooltip)
- Uses Minecraft Wiki icon resources
- Responsive design with dark mode support

## Usage Examples

### Crafting Sticks

<crafting-table
  :recipe="['', 'oak_planks', '', '', '', '', '', '', '']"
  output="stick"
  :item-names="{ 'oak_planks': 'Oak Planks', 'stick': 'Stick' }"
/>

### Crafting Table (Any Planks)

<crafting-table
  :recipe="['any_planks', 'any_planks', '', 'any_planks', 'any_planks', '', '', '', '']"
  output="crafting_table"
  :item-names="{ 'any_planks': 'Any Planks', 'crafting_table': 'Crafting Table' }"
/>

## Component Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| recipe | Array | Yes | - | Array of 9 grid slots |
| output | String | Yes | - | Output item name |
| outputCount | Number | No | 1 | Output item count |
| itemNames | Object | No | {} | Item name mapping |

## Item Name Mapping

Use the `itemNames` prop to customize item names, which will be shown on hover:

```vue
<crafting-table
  :recipe="['oak_planks', 'oak_planks', '', '', '', '', '', '', '']"
  output="stick"
  :item-names="{ 'oak_planks': 'Oak Planks', 'stick': 'Stick' }"
/>
```

## Special Items

### Any Planks

Using `any_planks` displays an animated effect of random planks, supporting 12 plank types:
- Oak Planks
- Spruce Planks
- Birch Planks
- Jungle Planks
- Acacia Planks
- Dark Oak Planks
- Mangrove Planks
- Cherry Planks
- Bamboo Planks
- Pale Oak Planks
- Crimson Planks
- Warped Planks
