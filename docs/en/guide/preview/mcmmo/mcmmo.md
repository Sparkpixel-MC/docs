---
title: MCMMO Gameplay Guide
tags:
  - minecraft
  - mcmmo
  - Detailed
permalink: /en/guide/preview/mcmmo/
writer: Azureheru
createTime: 2026/02/04 16:03:25
---
:::warning
This article has been translated by AI and has not yet been manually proofread. Please prioritize viewing the Chinese Wiki and submit issues.
:::

The `MCMMO` plugin provides players with **leveling up**, **special skills**, **rare items**, **new mechanics**, and **deeper PvP experience**, giving Minecraft **MMORPG-style gameplay fun**.

---
##catalogue
[[toc]]
## Common Commands

- `/mcmmo`: Display MCMMO plugin description
- `/mctop`: View global skill level leaderboard
- `/mcrank`: View your own skill level rankings
- `/mcstats`: View all your skill stats and experience
- `/<skill>`: View details of a specific skill (e.g., `/swords`)
- `/party create` / `/party invite <player>` / `/party accept` / `/party quit` / `/party rename <name>` / `/party kick <player>`: Party-related operations
- `/party chat on` / `/party chat off`: Enable/disable party chat
- `/partychat` / `/pc` / `/p`: Switch to party chat mode
- `/party teleport <option>`: Set party teleportation permissions
- `/ptp`: Send teleport request to party members

---

## General Mechanics

- Each skill has a maximum level of **1000**, but **no level cap**
- Skills are divided into **active skills** and **passive skills**:
  - **Active skills** are typically triggered by **right-clicking**, with a prompt displayed above the experience bar when triggered
  - **Passive skills** take effect automatically and unlock gradually as levels increase
- Experience for each skill is calculated independently and **is unrelated to the vanilla experience system**
- On this server, all **limit break** skills work on **both players and monsters**

---

## Skill Details

### **Tridents** (tridents)
- **Experience Gain**: Attack monsters with tridents
- **Passive Skills**:
  - **Piercing**: Increase trident damage
  - **Trident Limit Break**: Further increase damage

---

### **Swords** (swords)
- **Experience Gain**: Attack monsters or players with a sword
- **Passive Skills**:
  - **Serrated Strikes**: Causes enemies to take damage every 2 seconds until death or effect ends
  - **Sword Limit Break**: Increase damage
  - **Piercing**: Increase damage
- **Active Skills**:
  - **Serrated Strikes**: Deal area damage, add **25% extra damage**, and may trigger **bleeding**
  - **Counter Attack**: When hit, has a chance to reflect **50% of damage taken** back to the attacker

---

### **Crossbows** (crossbows)
- **Experience Gain**: Shoot monsters with a crossbow
- **Passive Skills**:
  - **Crossbow Limit Break**: Increase damage
  - **Skill Shot**: Arrows may bounce off blocks at small angles and hit enemies
  - **Power Shot**: Increase damage

---

### **Axes** (axes)
- **Experience Gain**: Attack enemies with an axe
- **Passive Skills**:
  - **Armor Impact**: Causes **extra durability loss** to enemy armor when attacking
  - **Axe Mastery** / **Axe Limit Break** / **Critical Strike**: Increase damage
  - **Greater Impact**: Causes knockback effect
- **Active Skills**:
  - **Skull Splitter**: Deals damage to the main target and **50% area damage** to surrounding enemies

---

### **Unarmed** (unarmed)
- **Experience Gain**: Deal damage with bare hands
- **Passive Skills**:
  - **Iron Arm** / **Unarmed Limit Break**: Increase damage
  - **Arrow Deflect**: Has a chance to intercept flying arrows, causing them to land harmlessly
  - **Iron Grip**: Reduce the chance of being **disarmed**
  - **Disarm**: Has a chance to cause enemy weapons to drop when attacking
  - **Block Cracker**: Can quickly break weak blocks in berserk mode
- **Active Skills**:
  - **Berserk**: Deal **50% extra damage** when bare-handed, and can instantly break weak blocks

---

### **Archery** (archery)
- **Experience Gain**: Shoot enemies with a bow and arrow
- **Passive Skills**:
  - **Arrow Retrieval**: Has a chance to retrieve arrows from enemy corpses
  - **Daze**: Has a chance to stun enemies and deal extra damage, with vision locked during stun
  - **Skill Shot** / **Archery Limit Break**: Increase damage

---

### **Maces** (maces)
- **Experience Gain**: Attack enemies with a mace
- **Passive Skills**:
  - **Mace Limit Break** / **Crush**: Increase damage
  - **Cripple**: Has a chance to apply **slow** effect to enemies

---

### **Woodcutting** (woodcutting)
- **Experience Gain**: Break wood-type blocks
- **Passive Skills**:
  - **Leaf Blower**: Obtain extra drops when using **Tree Feller**
  - **Double Drops** / **Harvest**: Increase wood drop quantity
  - **Nature's Bounty**: Can instantly break leaves when holding an axe
- **Active Skills**:
  - **Tree Feller**: Automatically destroys the entire tree when chopping the trunk

---

### **Excavation** (excavation)
- **Experience Gain**: Dig grass blocks, dirt, sand, clay, gravel, mycelium, soul sand, snow, and other blocks, with a chance to obtain **treasures**
- **Passive Skills**:
  - **Archaeology**: Increase the chance of obtaining treasures
- **Active Skills**:
  - **Giga Drill Breaker**: Increase treasure drop chance to **3 times**, and instantly destroy diggable blocks

---

### **Mining** (mining)
- **Experience Gain**: Use a pickaxe to mine ore-type blocks
- **Passive Skills**:
  - **Bigger Bombs**: Expand TNT explosion range
  - **Blast Mining**: Reduce TNT damage taken by yourself
  - **Double Drops** / **Mother Lode**: Increase ore drop quantity
- **Active Skills**:
  - **Blast Mining**: Sneak + right-click TNT with flint and steel to detonate remotely, instantly obtaining surrounding ores
  - **Super Breaker**: Obtain **3 times ore drops** and increase mining speed

---

### **Repair** (repair)
- **Experience Gain**: Repair tools or armor on placed iron blocks
- **Passive Skills**:
  - **Arcane Forging**: Has a chance to **keep enchantments** when repairing, avoiding loss or downgrade
  - **Repair Mastery** / **Super Repair**: Increase repair efficiency

---

### **Smelting** (smelting)
- **Description**: A sub-skill of **Mining** and **Repair**, level = average of both
- **Passive Skills**:
  - **Fuel Efficiency**: Extend furnace fuel burning time
  - **Second Smelt**: Has a chance to obtain **double products** when smelting
  - **Smelting Mastery**: Increase overall smelting efficiency

---

### **Alchemy** (alchemy)
- **Experience Gain**: Successfully brew potions or unlock new recipes
- **Passive Skills**:
  - **Catalysis**: Speed up brewing
  - **Concoctions**: Unlock more potion recipes

---

### **Herbalism** (herbalism)
- **Experience Gain**: Harvest plants (such as wheat, carrots, mushrooms, etc.)
- **Passive Skills**:
  - **Double Drops** / **Green Terra**: Increase crop drop quantity
  - **Farmer's Diet**: Increase saturation gained from eating crops
  - **Hylian Luck**: Has a chance to obtain rare items when breaking specific plants with a sword
  - **Green Thumb**: Can convert dirt to mycelium
- **Active Skills**:
  - **Green Terra**: Obtain **3 times drops** when harvesting, automatically replant seeds in inventory and advance growth stage
  - **Shroom Thumb**: Right-click dirt/cobblestone/stone bricks with seeds in hand to convert them to grass blocks/mossy cobblestone/mossy stone bricks, with a chance to automatically replant when harvesting

---

### **Taming** (taming)
- **Experience Gain**: Command tamed wolves to attack enemies
- **Passive Skills**:
  - **Beast Lore**: Left-click a wolf/cat with a bone to view its attributes
  - **Environmentally Aware**: Wolf automatically teleports to player when approaching danger (lava, cactus)
  - **Fast Food Service**: Wolf has a chance to recover health when attacking
  - **Gore**: Wolf attacks may cause enemies to **bleed**
  - **Holy Hound**: Wolf recovers health when taking magic damage
  - **Shockproof**: Wolf attacks cause knockback
  - **Sharp Claws**: Increase wolf damage
  - **Thick Fur**: Reduce wolf damage taken and provide fire resistance
- **Active Skills**:
  - **Call of the Wild**: Sneak + left-click with bone (wolf)/fish (cat) to summon a tamed animal at current location

---

### **Fishing** (fishing)
- **Experience Gain**: Fishing
- **Passive Skills**:
  - **Fisherman's Diet**: Increase saturation gained from eating fish
  - **Ice Fishing**: Allow fishing on frozen water surfaces
  - **Treasure Hunter** / **Magic Hunter**: Increase chance of catching treasures (including enchanted items)
  - **Master Angler**: Increase fish bite chance
- **Active Skills**:
  - **Shake**: Use fishing rod to pull items from enemies (including monster skulls), dealing massive damage

---

### **Salvage** (salvage)
- **Description**: A sub-skill of **Repair** and **Fishing**, level = average of both
- **Experience Gain**: Salvage tools/equipment into raw materials on placed gold blocks
- **Passive Skills**:
  - **Scrap Collector**: Allow salvaging **damaged durability** items (before unlocking, only intact items can be salvaged)
  - **Arcane Salvaging**: Has a chance to obtain corresponding level **enchanted books** when salvaging enchanted items

---

### **Acrobatics** (acrobatics)
- **Experience Gain**: Gain experience through **falling**, **rolling**, **dodging attacks**
- **Passive Skills**:
  - **Dodge**: Has a chance to **halve** non-fatal damage
- **Active Skills**:
  - **Roll**: Has a chance to **completely immune** or **halve** fall damage when falling; **sneak falling** can trigger **double roll effect**
