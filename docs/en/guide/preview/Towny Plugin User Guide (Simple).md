---
title: Towny Plugin User Guide(Simple)
tags:
  - minecraft
  - towny
  - simple
permalink: /en/guide/preview/Town-Guide-Simple/
writer: Azureheru
createTime: 2026/02/04 16:03:25
---
:::warning
This article has been translated by AI and has not yet been manually proofread. Please prioritize viewing the Chinese Wiki and submit issues.
:::
# Towny Plugin User Guide

**Towny** is a **land protection** and **town/nation simulation** plugin that allows players to create, protect, and manage their territories and communities.
:::tip
💡 **Tip**: In the following commands, `town` can be abbreviated as `t`, `nation` can be abbreviated as `n`, and `resident` can be abbreviated as `res`.
Enter `/townygui` in the game to open the quick configuration interface.
Territories are protected by **chunks**. Press `F3+G` to display chunk boundaries.
:::

---
##catalogue
[[toc]]
## Town Creation and Management

### Creating a Town
`/town new <name>` or `/town create <name>`
- Creates a new town and automatically claims the chunk you are standing on, becoming the **mayor** of the town
- Town names only support **English letters**, **numbers**, and **underscores** (`_`)

### Town Economy
- **Deposit**: `/town deposit <amount>`
- **Maintenance Mechanism**: Towns need bank balance to pay **daily upkeep** and **chunk claiming costs**
- **Bankruptcy Rules**: Towns with balance ≤ 0 will enter bankruptcy and be **automatically deleted after 30 days**

---

## Territory Operations

### Claiming Chunks
- **Adjacent Chunks**: Stand on the target chunk and execute `/town claim`
- **Remote Chunks** (exclaves): Stand on the target chunk and execute `/town claim outpost`
- **Fill Internal Gaps**: `/town claim fill` - Automatically claims all unclaimed chunks within the town boundaries

### Abandoning Chunks
- `/town unclaim` - Abandon the territory while standing on the target chunk (**fees are not refunded**)

### Continuous Operation Mode
- `/res toggle townclaim` - Enable "walk-to-auto-claim" mode
- `/res toggle townunclaim` - Enable "walk-to-auto-abandon" mode
- Execute the same command again to disable the mode

### Chunk Trading
- **List for Sale**: `/town forsale <price>` (while standing on the target chunk)
- **Cancel Sale**: `/town notforsale` (while standing on the target chunk)

---

## Teleportation and Spawn Points

- **Teleport to Town**: `/town spawn <town name>` (omit the name to teleport to your own town)
- **Set Spawn Point**: `/town set spawn`
  - Spawn point must be within the **HOME chunk**
  - Modify HOME chunk: `/town set homeblock` (execute on the target chunk)

---

## Member Management

### Inviting and Joining
- **Invite Resident**: `/town add <player name>`
- **Kick Resident**: `/town kick <player name>`
- **Join Open Town**:
  1. `/town list open` - View all towns open for joining
  2. `/town join <town name>` - Join the specified open town (please verify credibility)

### Invitation Responses
- `/accept` - Accept town invitation
- `/deny` - Reject town invitation

### Authority Assignment
- `/town ranklist` - View available titles (such as `assistant`, `guard`, etc.)
- `/town rank add|remove <player> <title>` - Assign or remove authority

### Trust Mechanism
- `/town trust add|remove <player>` - Trust/untrust residents (grant additional permissions)

---

## Town Settings

### Publicity Settings
- `/town toggle public` - Toggle whether the town allows **external player teleportation**
- `/town toggle open` - Toggle whether the town allows **anyone to join freely**

### Permission Management
- `/town toggle <permission name>` - Modify town public permissions (such as `pvp`, `explosion`, `fire`, etc.)
  Example: `/town toggle pvp` can enable/disable PvP within the town

---
#### Appendix 1

| Permission    | Description                                    |
| ------------- | ---------------------------------------------- |
| **explosion** | Allow/prohibit explosions from breaking blocks |
| **fire**      | Allow/prohibit fire spread                    |
| **mobs**      | Allow/prohibit mob spawning                   |
| **nationzone**| Control nation zone related permissions       |
| **neutral**   | Set town to neutral status (usually for prohibiting PvP) |
| **open**      | Control whether the town is open (allow free joining) |
| **peaceful**  | Set town to peaceful status (prohibit PvP)     |
| **public**    | Control whether the town is public (allow external player teleportation) |
| **pvp**       | Allow/prohibit combat between players         |
| **taxpercent**| Set town tax percentage (via `/town set tax` command) |

Author: Azureheru

Modified by cdpyx