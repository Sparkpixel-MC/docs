---
title: Towny 插件使用指南（简要）
tags:
  - minecraft
  - towny
  - simple
  - Guide
permalink: /guide/preview/Towny/Guide-Simple/
writer: Azureheru
createTime: 2026/02/04 15:57:08
---

# Towny Plugin Usage Guide

**Towny** is a **land protection** and **town/nation simulation** plugin that allows players to create, protect, and manage their own territories and communities.
:::tip
💡 **提示**：以下命令中 `town` 可缩写为 `t`，`nation` 可缩写为 `n`，`resident` 可缩写为 `res`。  
游戏中输入 ` /townygui ` 可打开快速配置界面。  
领地按 **区块**（chunk）进行保护，按下 `F3+G` 可显示区块边界。
:::

## Table of Contents
[[toc]]
---

## 城镇创建与管理

### 创建城镇
` /town new <名字> ` 或 ` /town create <名字> `  
- 创建新城镇并自动认领脚下区块，成为该城镇 **市长**（mayor）  
- 城镇名称仅支持 **英文**、**数字** 和 **下划线**（`_`）

### 城镇经济
- **存款**：` /town deposit <金额> `  
- **维护机制**：城镇需银行余额支付 **每日维护费** 与 **区块认领费**  
- **破产规则**：余额 ≤ 0 的城镇将进入破产状态，**30 天后自动删除**

---

## Land Operations

### Claiming Chunks
- **Adjacent chunk**: Stand in the target chunk and run ` /town claim `  
- **Distant chunk** (outpost): Stand in the target chunk and run ` /town claim outpost `  
- **Fill internal gaps**: ` /town claim fill ` — automatically claims all unclaimed chunks within the town's borders

### Unclaiming Chunks
- ` /town unclaim ` — Stand in the target chunk to unclaim the land (**no refund**)

### Continuous Operation Mode
- ` /res toggle townclaim ` — Enable "walk-to-auto-claim" mode  
- ` /res toggle townunclaim ` — Enable "walk-to-auto-unclaim" mode  
- Run the same command again to disable the mode

### Chunk Trading
- **Put up for sale**: ` /town forsale <price> ` (stand in the target chunk)  
- **Cancel sale**: ` /town notforsale ` (stand in the target chunk)

---

## 传送与传送点

- **传送到城镇**：` /town spawn <城镇名> `（省略名称则传送到自己所属城镇）  
- **设置传送点**：` /town set spawn `  
  - 传送点必须位于 **HOME 区块** 内  
  - 修改 HOME 区块：` /town set homeblock `（在目标区块执行）

---

## Member Management

### Inviting and Joining
- **Invite resident**: ` /town add <player name> `  
- **Kick resident**: ` /town kick <player name> `  
- **Join an open town**:
  1. ` /town list open ` — View all towns open for joining  
  2. ` /town join <town name> ` — Join the specified open town (verify trustworthiness)

### Invitation Response
- ` /accept ` — Accept town invitation  
- ` /deny ` — Deny town invitation

### Rank Assignment
- ` /town ranklist ` — View available ranks (e.g., `assistant`, `guard`, etc.)  
- ` /town rank add|remove <player> <rank> ` — Assign or remove a rank

### Trust Mechanism
- ` /town trust add|remove <player> ` — Trust/untrust a resident (grants extra permissions)

---

## 城镇设置

### 公开性设置
- ` /town toggle public ` —— 切换城镇是否允许**外部玩家传送**  
- ` /town toggle open ` —— 切换城镇是否允许**任何人自由加入**

### 权限管理
- ` /town toggle <权限名> ` —— 修改城镇公共权限（如 `pvp`, `explosion`, `fire` 等）  
  示例：` /town toggle pvp ` 可开启/关闭城镇内 PvP

---
#### Appendix 1

| Permission     | Description                                     |
| -------------- | ----------------------------------------------- |
| **explosion**  | Allow/deny explosion block damage               |
| **fire**       | Allow/deny fire spread                          |
| **mobs**       | Allow/deny mob (monster) spawning               |
| **nationzone** | Control nation zone related permissions         |
| **neutral**    | Set town to neutral status (usually used to disable PvP) |
| **open**       | Control whether the town is open (allows free joining) |
| **peaceful**   | Set town to peaceful status (disables PvP)      |
| **public**     | Control whether the town is public (allows teleportation by outside players) |
| **pvp**        | Allow/deny player vs player combat              |
| **taxpercent** | Set town tax percentage (via `/town set tax` command) |