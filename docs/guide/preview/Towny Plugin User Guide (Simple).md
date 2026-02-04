---
title: Towny 插件使用指南
tags:
  - minecraft
  - towny
  - simple
permalink: /guide/preview/town-Guide-simple/
writer: Azureheru
---

# Towny 插件使用指南

**Towny** 是一个 **土地保护** 和 **城镇/国家模拟** 插件，允许玩家创建、保护和管理自己的领地与社群。
:::tip
💡 **提示**：以下命令中 `town` 可缩写为 `t`，`nation` 可缩写为 `n`，`resident` 可缩写为 `res`。  
游戏中输入 ` /townygui ` 可打开快速配置界面。  
领地按 **区块**（chunk）进行保护，按下 `F3+G` 可显示区块边界。
:::

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

## 领地操作

### 认领区块
- **相邻区块**：站在目标区块执行 ` /town claim `  
- **远距离区块**（飞地）：站在目标区块执行 ` /town claim outpost `  
- **填充内部空地**：` /town claim fill ` —— 自动认领城镇边界内所有未认领区块

### 放弃区块
- ` /town unclaim ` —— 站在目标区块放弃领地（**不退还费用**）

### 连续操作模式
- ` /res toggle townclaim ` —— 启用“行走自动认领”模式  
- ` /res toggle townunclaim ` —— 启用“行走自动放弃”模式  
- 再次执行相同命令可关闭该模式

### 区块交易
- **挂牌出售**：` /town forsale <价格> `（站在目标区块）  
- **取消出售**：` /town notforsale `（站在目标区块）

---

## 传送与传送点

- **传送到城镇**：` /town spawn <城镇名> `（省略名称则传送到自己所属城镇）  
- **设置传送点**：` /town set spawn `  
  - 传送点必须位于 **HOME 区块** 内  
  - 修改 HOME 区块：` /town set homeblock `（在目标区块执行）

---

## 成员管理

### 邀请与加入
- **邀请居民**：` /town add <玩家名> `  
- **踢出居民**：` /town kick <玩家名> `  
- **加入开放城镇**：
  1. ` /town list open ` —— 查看所有开放加入的城镇  
  2. ` /town join <城镇名> ` —— 加入指定开放城镇（请确认可信度）

### 邀请响应
- ` /accept ` —— 接受城镇邀请  
- ` /deny ` —— 拒绝城镇邀请

### 职权分配
- ` /town ranklist ` —— 查看可用职称（如 `assistant`, `guard` 等）  
- ` /town rank add|remove <玩家> <职称> ` —— 分配或移除职权

### 信任机制
- ` /town trust add|remove <玩家> ` —— 信任/取消信任居民（赋予额外权限）

---

## 城镇设置

### 公开性设置
- ` /town toggle public ` —— 切换城镇是否允许**外部玩家传送**  
- ` /town toggle open ` —— 切换城镇是否允许**任何人自由加入**

### 权限管理
- ` /town toggle <权限名> ` —— 修改城镇公共权限（如 `pvp`, `explosion`, `fire` 等）  
  示例：` /town toggle pvp ` 可开启/关闭城镇内 PvP

---
####附录1

| 权限           | 说明                                            |
| -------------- | ----------------------------------------------- |
| **explosion**  | 允许/禁止爆炸破坏方块                           |
| **fire**       | 允许/禁止火蔓延                                 |
| **mobs**       | 允许/禁止生物（怪物）生成                       |
| **nationzone** | 控制国家区域相关权限                            |
| **neutral**    | 设置城镇为中立状态（通常用于禁止PVP）           |
| **open**       | 控制城镇是否开放（允许自由加入）                |
| **peaceful**   | 设置城镇为和平状态（禁止PVP）                   |
| **public**     | 控制城镇是否公开（允许外部玩家传送）            |
| **pvp**        | 允许/禁止玩家间战斗                             |
| **taxpercent** | 设置城镇税收百分比（通过 `/town set tax` 命令） |
本文作者：Azureheru
cdpyx部分修改