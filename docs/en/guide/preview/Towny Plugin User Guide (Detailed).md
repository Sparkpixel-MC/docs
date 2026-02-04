---
title: Towny Plugin User Guide(Detailed)
tags:
  - minecraft
  - towny
  - Detailed
permalink: /en/guide/preview/Town-Guide-Detailed/
writer: Azureheru
createTime: 2026/02/04 16:03:25
---
:::warning
This article has been translated by AI and has not yet been manually proofread. Please prioritize viewing the Chinese Wiki and submit issues.
:::


Towny is a land protection and town/nation simulation plugin that allows players to create, protect, and manage towns, own land, and form nations and alliances. This guide aims to comprehensively describe all the functions of the Towny plugin. The first part of the guide ("**Town Basics**") serves as an introduction to Towny, describing the initial steps of creating a town, how to purchase land, and various basic functions. Land protection and its configuration methods are described in the second part ("**Permissions**"). Other sections relate to all other functions of the Towny plugin, involving towns, nations, and settings provided by the plugin.
##catalogue
[[toc]]


## Basic Concepts

To understand how Towny works, you need to know the concepts of "Chunk & Towny Day", "Town", "Resident", "Bank & Taxes", and "Nation".

**Chunk** is a 16x16 part of the world that extends infinitely in the vertical direction. To view chunk boundaries in the world, you can use F3+G to display chunk borders. All chunks in the world are by default "Wilderness", where all players on the server can build, destroy, access doors, chests, etc. PvP is enabled in the wilderness.

**Towny Day** is a real-world day. Towny operates by town days. The start of each town day is displayed in the chat bar.



**Town** is a collection of players (called residents, at least <u>1</u> person) under a certain town name. A town can enclose chunks from the wilderness as its own to protect them from other players. The chunks that a town takes from the wilderness are called territories or town plots. Town plots can be unowned by any resident - these are called unowned town plots, or owned by residents - these are called resident plots.



**Resident** refers to a player who belongs to any town. The first player to create a town is called the Mayor. Each town has a mayor, who is the owner of the town and can access all town plots within their town as well as all related commands. The mayor can also let other residents help handle town affairs by granting them town ranks.



Town **Bank** is a virtual storage repository for town funds; only the mayor and vice mayor can withdraw funds from the town bank, but all residents can deposit funds into it. The mayor and vice mayor can also view the bank transaction history of their town bank for the current town day by entering `/t bankhistory`.

The normal operation of a town requires "**paying taxes**". The server will charge fees to all town banks at the beginning of each town day to allow the town to continue operating. On this server, if the town's bank balance is insufficient to maintain its existence, the town will enter a "**bankrupt**" state, and the bank will start to incur debt. After entering bankruptcy, some functions of the town will be restricted. Any resident can deposit money into the bank during this period to lift the bankruptcy state. A town can remain in bankruptcy for a maximum of <u>30</u> days. After this period or if the debt reaches the maximum limit, the town will be deleted.

In addition to taxes required by the server, towns that join a nation must pay nation taxes to the affiliated nation; residents who own town plots must pay plot taxes to the town mayor; any resident must pay town taxes to the town.

Towns that cannot pay nation taxes will be removed from the nation; residents who cannot pay plot taxes will lose their plots; residents who cannot pay town taxes (**except assistants**) will be removed from the town.



**Nation** is a collection of towns (at least <u>1</u>), and all residents of all towns in the nation are members of that nation.



## Town Creation and Player Management

To create your town, use `/t new (your town name)` or `/t create (your town name)`. This operation will deduct funds from your balance. Town names only accept <u>English letters, numbers, and English underscores</u>.



After creating a town, you will also be appointed as the town's mayor. You can change the town name at **any time** using `/t set name (new name)`.



Use `/t add (player name)` to invite another player to join your town. They can enter `/accept (your town name)` to join. To cancel the invitation to a player, use `/t invite -(player name)`.



**Any** resident (<u>except the mayor</u>) can leave the town by entering `/t leave`. As mayor, you can also use `/t kick (player name)` to kick residents from the town.



A town **does not allow** **anyone** outside the town to access its territory, <u>only</u> residents of your own town can. If you also **do not want** <u>residents</u> to use the town freely, you can now **prevent** them from accessing by simply executing `/t set perm off`. <u>Your residents and you</u> can purchase your own land to use, **separate** from public town space and others!



### Territory Claiming



Claiming is the process of <u>taking a chunk</u> from the wilderness and **adding** it to <u>your town</u> to expand and protect your land. All chunks occupied by your town are called territories or town plots. When you create a town, you claim the chunk you are standing on.



To claim a chunk, stand on a wilderness chunk adjacent to your existing territory and enter `/t claim`. This operation will **deduct funds** from the <u>town bank</u>.



To claim a chunk not adjacent to your existing territory, enter `/t claim outpost`. This operation deducts more funds from the <u>town bank</u> than claiming adjacent chunks.



Then you can enter `/t claim` as usual to claim adjacent chunks. Each separate territory group is called a "**town outpost**". The first chunk claimed in a town outpost is called the "**town outpost home chunk**", and your position in the claimed chunk is called the "**town outpost spawn point**".



To remove/give up (or "**abandon**") the chunk you are standing on from your town, use `/t unclaim`. Giving up the last chunk of a town outpost will also delete that town outpost.



There is a limit on the number of territories a town can have at any time. This limit is determined by <u>town size</u>.



Town Size



Town size is the ratio of the number of territories a town owns to the maximum number of territories it may have. You can view town size on the town info screen ("/t"). The number of available chunks your town can claim can be increased through three territory bonuses.



Losing town residents and losing nation members means you will also lose the corresponding territory bonuses in town size.



The exact values of town size and territory bonuses are listed at the bottom of this guide.



### Town Upkeep Costs



Town upkeep is the amount automatically deducted from your town bank at the <u>beginning</u> of each **Towny day** to allow the town to continue existing. Not having enough funds in the town bank to pay upkeep means your town will **fall**. The <u>more</u> town plots, the <u>higher</u> the town **upkeep will be<u> per day</u>**.



In Towny, residents can manually transfer funds from their balance to the town bank at any time using `/t deposit (amount)`.

:::tip

In a nation, the above command can only be used on your town's home chunk or bank plot.

 :::

Generally, it is **important** to consider town upkeep when <u>planning a town</u>. A very large town with unnecessary territories will be unnecessarily expensive compared to a smaller, well-organized town.



### Buying and Owning Plots



Each resident of your town (including the mayor) can own town plots, where they can have their own building and usage space, the size of which <u>depends on</u> what the mayor can or wants to give, and other residents usually cannot access. Town plots owned by residents are called their resident plots. Residents have full access to their own resident plots and all related commands. Residents can **own multiple and separate** resident plots.



Residents **must** purchase town plots first to make them their own resident plots.



**Mayor** to withdraw plot sales, can enter `/plot notforsale`.



Residents can use `/plot unclaim` while standing on one of their owned resident plots to **remove** their ownership ("**abandon**" their resident plot).



Residents owning their own land is a necessary function of any town, as the land residents use for building and protecting items is separated from public town land. Well-organized towns usually allow each resident to have resident plots in convenient locations around the town, and all resident plots are close to or adjacent to each other. This is strongly recommended for easier town management!



### Town Spawn Point



Each town has a home chunk, which exists because a town must always own <u>at least</u> one claimed chunk. When you create a town, the chunk you are standing on becomes the first home chunk, and your exact position becomes the first town spawn point. The town spawn point is located within the home chunk and is indicated by particles on the ground.



The location of the home chunk and town spawn point can be changed by the mayor. To change the location of the home chunk and where people teleport when using `/t spawn`, you need to first execute `/t set homeblock`, then execute `/t set spawn`. Your exact position will be the new town spawn point.



The home chunk is equivalent to the concept of "**town center**". The location of the town spawn point and home chunk is best placed in the center of the town, where residents can quickly access the rest of the town.



### Joining a Nation



Being part of a nation has many benefits for a town. Towns that join a nation can obtain more claimable chunks and gain various other gameplay benefits related to economy, influence, communication, and community. Towns that join a nation may also have to pay daily town nation taxes from their town banks - in addition to upkeep. The town nation taxes your town pays each day are set by the **nation leader** and can be viewed by entering `towny prices` (at the bottom).

Generally, your town can join a nation after being <u>invited</u>. The mayor can accept the nation invitation by entering `/accept (name of inviting nation)` or **reject** the invitation by entering `/deny (name of inviting nation)`.

 :::tip

On the other hand, if you don't want to join other nations, you can also create your own nation! Creating and managing nations will be introduced later in this guide (this section is to be completed)

 :::

Each plot has permissions, which <u>allow or deny</u> certain players from performing certain actions in it. In wilderness chunks, all permissions are enabled for every player on the server, and this cannot be changed. Permissions are the reason why Towny as a plugin can protect your buildings, chests, etc. within towns. Correctly configuring the permissions of town plots is important so that only those you want to access the town plot can have these permissions.

You can view your town's permission settings on the town info screen. You can view the permission settings of individual plots on the plot info screen (`/plot info`).

When viewing permissions, if a group is denied that permission type, it will display as a dash **"-"**. If the group is allowed that permission type, it will display the first letter of its name. These groups are called "**permission levels**".



#### Configuring Permissions



The permission types, permission levels, and permission categories are explained below.



##### Permission Types



Each of the 4 permission types is related to different actions.



###### Permission Levels



Permission levels are similar to the concept of groups, and they have a hierarchy. Unowned town plots and resident plots (owned town plots) have different permission levels.

Town permission levels apply to unowned town plots:
- Mayor (M)
- Vice Mayor (A)
- Assistant (s)
- Resident (r)
- Ally (a)
- Outsider (o)



Plot permission levels apply to resident plots:
- Plot Owner (f)
- Mayor (M)
- Vice Mayor (A)
- Assistant (s)
- Resident (r)
- Ally (a)
- Outsider (o)



###### Permission Categories



There are **4 categories** of permissions that need to be configured. Each category applies to certain town plots.

General town permissions and individual town permissions apply to unowned town plots.

Resident permissions and plot permissions apply to resident plots. When a resident buys a town plot, town permissions become its resident/plot permissions; when a resident's plot ownership is removed, resident/plot permissions become its town permissions again.
- To configure general town permissions for all unowned town plots in the town, use `/t set perm (town permission level) (permission type) (on/off)`
- To configure individual town permissions for the unowned town plot you are standing on, use `/plot set perm (town permission level) (permission type) (on/off)`
- To configure resident permissions for all resident plots you own, use `/res set perm (plot permission level) (permission type) (on/off)`
- To configure plot permissions for the resident plot you are standing on, use `/plot set perm (plot permission level) (permission type) (on/off)`



### Trust (Trust)



Trust allows you to grant all permission types (build, destroy, switch, item use) to any player on the server for any plot in your town.

- Town trust: To trust players using all plots in the town, use `/t trust add (player name)`. To revoke player trust from the **town**, use `/t trust remove (player name)`.

- Plot trust: To trust players for the town plot you are standing on, use "/plot trust add (player name)". To revoke player trust from the plot, use "/plot trust remove (player name)".

Removing a player from trusted people does **not necessarily** mean they stop accessing the town or town plot. It means that the permissions you configured for the town plot will apply to them again.

### Player Permissions



You can also allow specific players in the server to have certain permissions in town plots, or deny specific players from having certain permissions in town plots. Town plots can be unowned town plots or resident plots.



To add a player to this configuration, enter `/plot perm add (player name)`. To remove a player from this configuration, enter `/plot perm remove (player name)`.



After adding a player, you can use `/plot perm gui` and click on the player's head in the menu to configure their permissions. The menu allows you to configure each permission type individually for the player by clicking the **4 middle** buttons in the menu.

After editing permissions, you can click the save button in the bottom left to save the configuration. Instead clicking the delete button in the bottom right will remove the player from each player permission in the plot.



Removing a player from each player permission does not necessarily deny them all permission types in the town plot. It means that the permissions you configured for the town plot will apply to them again.



### Resetting Permissions



You can use `/t set perm reset` to apply your current general town permissions to **every unowned town plot in the town**. This operation revokes permission overrides of individual town permissions on all unowned town plots, in case they changed from their default general town permissions after claiming.



You can use `/res set perm reset` to apply your current resident permission settings to **every resident plot <u>you own</u>**. This operation revokes permission overrides of plot permissions on any of your resident plots, in case they changed from their default resident permissions after purchase.



You can use `/plot set perm reset` to apply your current resident permission settings (<u>if the plot is owned by a resident or you</u>) or current town permission settings (<u>if the town plot is unowned</u>) to the plot you are standing on. This operation:

1.  For unowned town plots, revokes permission overrides of individual town permissions, in case they changed from their default general town permissions after claiming, and applies general town permissions to it;
2.  For resident plots, revokes permission overrides of manual plot permissions, in case they changed from their default resident permissions after purchase, and applies your resident permissions to it.



Resetting permissions does not remove trusted players, nor does it reset per-player permission settings.



### Town Information



Use `/t (town name)` to view the town information screen of a town. The town information screen of **your own** town can be viewed by entering `/t`.



Town information screen:

- Town name

- Number of territories

- Territory bonuses

- Maximum number of territories

- Number of residents (online/total)

- Mayor

- Town ranks

- Town type (open/closed, public/private)

- Town bank balance

- Town tax type and amount

- Town upkeep costs

In a nation, the town information screen will also display:

- Nation name

- Nation rank



### Town Ranks



In a town, residents can have ranks to indicate their relative position in the town. Each rank has different powers.

When a resident joins a town, they have no town rank. All residents of a town can deposit funds to the town bank, own town plots, change plot permissions of their own resident plots, and rename their own resident plots.

The mayor and vice mayor have the ability to use `/t rank (add/remove) (player name) (rank)` to give a resident a rank or remove it.

:::tip

This section is to be completed

:::

- Mayor:

- Donor:

- Sheriff:

- Assistant:

Certain ranks have **unique powers**:

- Tax Exempt: Exempt from town taxes

- Admin: Has all town permissions



### Town Board



You can set a custom message for your town, called the town board. Use `/t set board (message)"` to change your town's **town board**.



To remove the town board, enter `/t set board none`. This command also removes the message displayed when town residents join the server.



### Closing/Opening Towns



All towns are closed by default (**invite only**). Players can only join a closed town after being invited by a resident of the town. If a town is open, any player can join the town using `/t join (town name)`. If a town is open, it is indicated by "(Open)" in its town information screen.



To toggle between your town being open or closed, use `/t toggle open`.



#### Private/Public Towns



All towns are <u>private</u> by default. Private towns only allow their residents, nation members, and ally members to teleport to their town spawn point. If a town is public, any player on the server can teleport to its town spawn point. If a town is public, it is indicated by "(<u>Public</u>)" in its town information screen, and displays the **chunk coordinates** of its <u>home chunk</u>.



To toggle between your town being private or public, use `/t toggle public`.



You can use `/t set spawncost (price)` to set the **cost** for **outsiders** to teleport to the <u>town spawn point</u> of a public town.



Residents, nation members, and ally members of the town do not pay this town spawn cost. Spawn cost funds are <u>transferred</u> from the teleporting player's balance to the town bank.

In Towny-only, players can use `t spawn (town name)` to teleport to the town spawn point of a public town.



### Town Taxes



Town taxes are amounts collected from residents at the beginning of each Towny day. Funds are transferred from residents (**excluding residents with tax-exempt, assistant, vice mayor, and mayor ranks**) to the **town bank**. Residents can view the taxes they pay each Towny day by entering `/res tax`.



1) Resident taxes: Resident taxes are taxes on residents as part of your town. Set using `/t set taxes (percentage/amount)`.

The type of resident taxes collected can be toggled using `/t toggle taxpercent`.

2) Resident plot taxes: Resident plot taxes (or simply "**plot taxes**") are taxes on each resident plot owned by a resident. Set using `/t set plottax (amount)`. Residents who do not have sufficient funds to pay resident plot taxes will lose ownership of their resident plots (**depending on the number of plots they cannot pay taxes for**), and lost plots will be sold.

3) Shop plot taxes: Shop plot taxes are taxes on each shop plot owned by a resident. Set using `/t set shoptax (amount)`. Residents who do not have sufficient funds to pay shop plot taxes will lose ownership of their shop plots (depending on the number of plots they cannot pay taxes for), and their shop signs will be removed.

4) Embassy plot taxes: Embassy plot taxes are additional taxes on each embassy plot owned by players in your town. Set using `/t set embassytax (amount)`. Players who do not have sufficient funds to pay embassy plot taxes will lose ownership of their plots (depending on the number of plots they cannot pay taxes for).

Resident plot taxes are **separate** from shop plot taxes and embassy plot taxes. Embassy plot owners pay resident plot taxes and embassy plot taxes to your town. Shop plot owners pay resident plot taxes and shop plot taxes to your town.



### Town and Plot Toggles



Toggles change game rules for the plots they apply to.



To enable or disable a toggle type in all plots in the town (town toggle), use `/t toggle (toggle type)`. To enable or disable a toggle type in a single plot (plot toggle) - owned or unowned by a resident - use `/plot toggle (toggle type)`.



Toggle types:

- pvp - Enable/disable PvP

- fire - Enable/disable fire spread

- explosion - Enable/disable explosions

- mobs - Enable/disable mob spawning



You can view town toggles on the town information screen. You can view plot toggles for individual town plots by entering `/plot perm`.



### Resident Toggles



Resident toggles are plot toggles that are automatically applied to your resident plots after you purchase a resident plot. You can change your resident toggles using `/res toggle (toggle type)`.



### Plot Types



You can have different types of plots in your town with various uses. By default, when you claim a chunk from the wilderness, it becomes the default plot: a town plot with no special purpose other than being claimed by the town.



To set the plot type of an unowned town plot in your town, use `/plot set (plot type)`.



Plot types:

- default - Default plot

- shop - Shop plot

- embassy - Embassy plot

- arena - Arena plot

- wilds - Wilderness plot

- farm - Farm plot

- bank - Bank plot

- *jail* - *Jail plot*

- inn - Inn plot



To reset a plot to **default plot**, use `/plot set reset`.



You can view the plot types of your town (as well as other information such as town size, estimated daily income of town plots, etc.) by entering `/t plots`.



**This server does not enable jail settings, so all instructions regarding jail sections are invalid.**



### Transferring Mayor Position



The mayor can step down from their high position and grant the title and powers of the mayor rank to another resident of the town using `/t set mayor (new mayor name)`.



The former mayor will have no town rank after stepping down as mayor.



### Town Deletion



Deleting a town means removing the town's name, territories, residents, funds in the town bank, and everything related to the town from the server.



Only the mayor can delete their town. As mayor, you can use `/t delete` then `/confirm` to delete your town.



### Town Bankruptcy



When the town bank funds reach 0 (due to upkeep/nation taxes), it will enter bankruptcy mode. The town bank balance can **continue below 0** because funds are deducted from it due to upkeep or nation taxes. The value of the town bank below 0 during bankruptcy mode is called its "**debt**". The debt limit or debt cap is the maximum possible debt a town can have in bankruptcy mode before being deleted, and it is calculated based on the number of territories the town owns. The debt cap can be viewed on the town information screen.

During bankruptcy mode, the town faces some **restrictions**.

To exit bankruptcy mode, sufficient funds must be deposited into the town bank to eliminate the debt (`/t deposit`). When the town bank exceeds 0, the town will recover with all its residents. However, if the debt reaches the maximum (**which depends on the total cost of town plots claimed and purchased by the town**), then the town will be **deleted** by the server.



## Plot Information



There are some commands and features that are strictly related to non-specific individual plots.



Use `/plot perm` to view the plot information screen of the chunk you are standing on. You can also display a **real-time updated version** of the plot information screen on your scoreboard by entering `/plot perm hud`.



Plot information screen:

- Plot type

- Plot owner

- Plot price

- Plot permissions

- Plot toggles



Wilderness chunks have a separate plot information screen called the Towny World screen, which displays game rules and enabled permissions applied to all players in the wilderness, war settings of the world, and various other server settings related to Towny. The Towny World screen can be viewed at any time using `/tw`. All other (claimed) chunks display the above plot information screen.



#### Plot Groups



Plot groups allow residents to easily manage multiple town plots at once, such as permissions and plot sales. Town staff can create plot groups and include any town plots in them, as well as manage any plot groups within the town. Other residents can only include their own resident plots in plot groups and manage plot groups that contain only their resident plots.



Multiple plot groups can exist in a town. You can view a list of all plot groups in the town by entering `/t plotgrouplist`.



All plot group commands only work when you are standing on any plot within the plot group (**exception is adding plots to a plot group**).



### General



To include your town's town plots in a plot group, use `/plot group add (plot group name)`. If the plot group does not exist, it will also be created with the name you entered. You can also use the same command to transfer town plots from their current plot group to another plot group.



The name of an existing plot group can be changed by using `/plot group rename (new plot group name)` while standing on a plot within the plot group.



To remove the town plot you are standing on from a plot group, use `/plot group remove`. To instead remove all plots from a plot group, enter `/plot group delete` while standing on any town plot of the plot group. This operation deletes the plot group; removing the last plot in a plot group also deletes the plot group.



### Management



Plot group management commands are equivalent to plot commands and work in a similar way. However, plot group management commands apply to all plots in the plot group you are standing on (as opposed to just the **single town plot** you are standing on).



Sales: Use `/plot group forsale (price)` to set all plots in the plot group for sale. The price is the price of all plots in the plot group, calculated separately for each plot. Use `/plot group notforsale` to **withdraw** the sale of the plot group.



Plot types: Use `/plot group set (plot type)` to set the plot type of all plots in the plot group, or use `/plot group set reset` to **set** them all to <u>default plots</u>.

When adding unowned and resident plots to the same group, please note the following about plot types:

- If the plot group contains both unowned and resident plots, the plot type set using `/plot group set` will **only apply to unowned plots**.

:::tip

To prevent the above caveat explained by the asterisk, it is strongly recommended to avoid grouping unowned town plots with resident plots in the same plot group.

:::

- Toggles: Use `/plot group toggle (toggle type)` to configure toggles for all plots in the plot group.

- Permissions: Use `/plot group set perm (permission level) (permission type) (on/off)` to configure permissions for all plots in the plot group.



## Advanced Commands

- `res toggle MODE`

- `t claim`

Author: Azureheru

Modified by cdpyx