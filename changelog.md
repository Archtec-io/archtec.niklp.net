---
layout: default
title: Changelog
nav_order: 4
description: Changelog
last_modified_date: "25 August 2024"
---

# Changelog

{: .note }
> This page is maybe not up-to-date, Discord has the most recent changelogs.
> Scroll down to get the latest changes.

{: .highlight }
> Fast jump by year:
> [2022]({{site.base_url}}/changelog/#2022),
> [2023]({{site.base_url}}/changelog/#2023),
> [2024]({{site.base_url}}/changelog/#2024)

## 2022

### 2022-09-20
- Added `drawers` mod
- Refactored some functions in `hudbars`
- updated `darkage` (ABM speedup)
- updated `ethereal` (ABM speedup)
- Added a Skin button in the inventory
- Increased spawn rate of some animals (+25%)
- Removed the unused `Clear inv` button in `unified_inventory`
- Disabled armor drop on death

### 2022-09-21
- Fixed not visible recipes with stairs

### 2022-09-22
- Removed `nss_helicopter`
- Added `streets`
- Updated `bees` (ABM speedup)
- Fixed not working crafting recipes in `xdecor`
- Reduced spawn chance of `sequoia` trees
- Added jump and speed multiplier to mithril boots

### 2022-09-23
- Fixed crash in forceload restriction
- Notify staff when a player joins with VPN
- Updated `dummies` (fixed undecleared var warnings)

### 2022-09-24
- Fixed crash when digging `techage:cooler`
- Increased spawn rate of monsters (+50%)
- Updated `lcdlib`
- Updated `caverealms_lite` (new obsidian glass recipe)
- Updated `moretrees`
- Updated `moreblocks` (More recipe related fixes)
- Fixed a crash in `chatplus`

### 2022-09-25
- Decreased max forceload blocks per player to 3
- Removed unused `Beech` nodes in `moretrees`
- Added `Dry ice`

### 2022-09-27
- Updated `titanium` (crafting recipes)
- Override `digiline:chest`
- Updated `ethereal` (spong recipe)
- Added crafting recipe for `Dry ice`

### 2022-09-28
- Updated the server to Minetest 5.6.1 (including MTG)
- Updated LuaJIT to latest master
- Updated `farming`

### 2022-09-29
- Fixed crash in `archtec_teleport`
- Fixed crash in `pride_flags`
- Updated `travelnet`
- Updated `mobs_redo`
- Updated `mob_horse`

### 2022-10-01
- Give every new player a `Techage construction board`
- Added cheat logger function
- Updated `mobs_monster` (cleanup)
- Updated `mobs_animal` (cleanup)
- Updated `abriglass` (LBM performance)
- Updated `futil`
- Updared `unified_inventory` (removed unused buttons)
- Updated `technic_chests` (removed locked chest recipe)
- Updated `moreblocks` (removed unused category)
- Updated `ethereal`(cleanup [2000 lines])
- Updated `techage` (ingame documentation fixes)

### 2022-10-02
- Removed not working stairs recipes

### 2022-10-03
- Fixed 28 of 31 not working crafting recipes
- Refactored some things in `archtec_xx` mods
- Updated `castle_mansonry` (LBM performance)
- Updated `colored_concrete` (translations)
- Updated `xdecor` (removed packed ice/new rune recipe)
- Disabled a globalstep in the `ts_furniture` mod (performance)

### 2022-10-05
- Better xban notification handler
- Updated `cblocks` (code tidy)
- Updated `moreblocks` (circular saw fixes)

### 2022-10-07
- Grant the `forceload` priv automatically when placing a drillbox
- Improved `/playtime` command
- Updated `ethereal` (moretrees compat)
- Updated `farming` (faster cocoa generate code)
- Updated `smartshop` (fixes)
- Updated `mobs_redo` (tidy code)

### 2022-10-08
- Increased active block range to 4
- Fixed some recipes
- Added a join ratelimiter
- Updated `unified_inventory` (tidy code)
- Updated `xban2` (fix not working discord integration)
- Updated `mesecons` (hydroturbine recipe fix)

### 2022-10-09
- Fixed crafting recipe of palace glas
- Re-enabled darkage Lua mapgen

### 2022-10-10
- Added custom /status message
- Improved some functions in `archtec` mod
- Added delay param to `/sd` command

### 2022-10-11
- Added `bushes:BushLeaves_xx` to `group:leaves` group
- Updated `abriglass` (pattern recipes)

### 2022-10-14
- Added `mapserver` mod to see players on the server map
- Added some help messages
- Fixed crash when sending to long messages
- Updated `colored_concrete` (redo)
- Updated `drawers` (allow controller to store item when drawers are full)
- Updated `ethereal` (changed bush texture)
- Updated `farming` (changed melone texture)
- Updated `futil` (performance, mod storage api)
- Updated `item_drop` (handle old node defs)
- Updated `smartshop` (futil compat)
- Updated `mobs_npc` (screwdriver fix)
- Updated `node_entity_queue` (groups support)
- Updated `techage` (ethereal leaves support)

### 2022-10-15
- Added shortcommands for areas
- Block to put invisible armor into armor stands
- Updated `colored_concrete` (fix broken translations)
- Updated `futil` (fixes; new functions)
- Updated `letters` (code cleanup)

### 2022-10-15 2
- Fixed broken invisible armor
- Updated `drawers` (reverted last update; idk why)

### 2022-10-16
- Added a performance patch to darkage mapgen

### 2022-10-22
- Implemented a function to cache privs
- Implemented a function to get online_players faster
- Improved `item_drop` mod
- Updated `archtec_pvp` (fixed wrong message formatting)
- Updated `customskins` (cleanup; performance)
- Updated `3d_armor_ui` (new model based player preview in armor tab)
- Updated `farming` (fixed drops and recipes)
- Updated `homedecor` (fixed wrong aligned door textures)
- Updated `mobs_redo` (improved smooth rotation)
- Updated `techage` (new isobutane recipe)
- Removed `player_monoids` (it was too buggy)

### 2022-10-22 2
- Fixed not working VPN blocker

### 2022-10-29
- Added a new hunger system based on stamina
- Removed `hbhunger and `hudbars`
- Added `/watch` command (staff only)
- Added `/joined` (get first join date of a player)
- Improved `/privs_cache` command
- Added `archtec_physic` mod
- Added new help messages
- Full redo of `archtec_vpn_blocker`
- Updated `action_queues` (bump needed futil version)
- Updated `customskins` (fixed preview in /skin)
- Updated `bees` (abm descriptions)
- Updated `bonemeal` (support for new farming redo plants)
- Updated `chatplus` (code cleanup)
- Updated `display_modpack` (on_blast callback)
- Updated `ethereal` (fixed plant generation)
- Updated `farming` (added ginger)
- Updated `futil` (many things)
- Updated `mobs_animal` (ABM speedup)
- Updated `mobs_monster` (ABM speedup; new textures)
- Updated `mobs_npc` (added dialogs)
- Updated `mobs_redo` (fixed peaceful mode)
- Updated `moretrees` (no biome lib depend, crafting improvements)
- Updated `node_entity_queue` (bump needed futil version)
- Updated `signs_lib` (on_blast callback; custom edit priv)
- Updated `unified_inventory` (hide disabled buttons)
- Updated `minetest_game` (disabled not needed LBMs)

### 2022-10-29 2
- Fixed a crash in `archtec_stamina`

### 2022-10-30
- Fixed not updating hudbar in `archtec_stamina`
- Improved /watch and /unwatch

### 2022-10-30 2
- Fixed broken healing

### 2022-10-31
- Enabled monitoring for lag detection

### 2022-11-01
- Improved and refactored the Archtec bot

### 2022-11-06
- Added `/geoip` command (staff only)
- Improved placing of dry ice
- Ratelimited joins to 1 every 3 seconds
- Changed `biome_lib` elevation range to 0-48
- Updated `basic_materials` (stripped materials)
- Updated `bonemeal` (helper functions)
- Updated `castle_masonry (remove intllib support)
- Updated `colored_concrete` (fixed translations; maintenance)
- Updated `digicolor` (mod.conf)
- Updated `emote` (eye offset)
- Updated `ethereal` (crystal shovel improvements)
- Updated `facade` (compressed media files)
- Updated `farming` (esperanto translations)
- Updated `futil` (mod.conf)
- Updated `smartshop` (mof.conf)
- Updated `mobs_redo` (luacheck)
- Updated `node_entity_queue` (mod.conf)
- Updated `plantlife` (things without changes for the server)
- Updated `ropes` (recipe fix for wood ladder)
- Updated `techage` (many fixes)
- Updated `towercrane` (esperanto translations)

### 2022-11-13
- Untamed Mobs will not be removed once a map chunk is out of view
- Updated `itemframes` (logging)
- Updated `farming` (sugar cube)
- Updated `areas` (translation fixes)
- Updated `plantlife` (vines upside down fix)
- Updated `techage` (documentation)
- Updated `technic_cnc` (compressed obj files)
- Updated `archtec_stamina` (fixed healing, try no. 4)
- Updated `ethereal` (lilac, leaves fix)
- Updated `futil` (many things)
- Updated `smartshop` (higher res entity rendering)

### 2022-11-16
- Fixed healing
- Disabled `darkage` lua mapgen (performance)

### 2022-11-17
- Updated LuaJIT to latest master
- Added some improvements for the healing system (thx Juri)

### 2022-11-19
- Remade `bridger` mod
- Updated `abriglass` (crafting fixes)
- Removed some `abriglass` nodes
- Updated `bonemeal` (support for new plants)
- Updated `darkage` (ix glas recipes)
- Updated `farming` (increase barley steps to 8)
- Updated `homedecor` (fake fire restarts automatically)
- Updated `mobs_animal` (fix sheeps losing their protection)
- Updated `mobs_redo` (meta for extra drops)
- Updated `quartz` (ore is not longer in group:stone)
- Updated `signs_bot` (fix bot movement)
- Updated `techage` (detect mesecons correctly)
- Updated `tubelib2` (fix translations)
- Updated `xdecor` (move changes into archtec mod)

### 2022-11-27
- Added some debug tools for performance
- Updated `moreores` (fix hoe recipes)
- Updated `drawers` (techage support)
- Updated `wine` (new textures)
- Updated `farming` (new textures)
- Updated `techage` (updated ingame manuals)
- Updated `mobs_redo` (new textures, meat block)
- Updated `hopper` (license)
- Updated `signs_bot` (crash fixes)
- Updated `bakedclay` (license)
- Updated `tubelib2` (chinese translation)
- Updated `signs_lib` (fix wrong usage of default global)

### 2022-12-02
- Updated LuaJIT
- Prematurely pulled `/help` privs fix

### 2022-12-03
- Added skinned hands in 1st person
- Added some more lag values to `/status`
- Enabled `3d_armor` fire mode
- Reworked `notifyTeam` function
- Updated `action_queues` (fmod)
- Updated `bonemeal` (fix usage)
- Updated `chatplus` (localize functions)
- Updated `digicolor` (fmod)
- Updated `ethereal` (new textures)
- Updated `futil` (too much for this changelog)
- Updated `mesecons` (translation support)
- Updated `smartshop` (fmod, currency)
- Updated `mobs_redo` (yaw climbing fix)
- Updated `node_entity_queue` (fmod)
- Updated `ts_furniture` (ignore `tree` group)

### 2022-12-03 2
- Enabled `cherrytree` mod

### 2022-12-08
- Added `christmastree`
- Added `mymillwork`
- Added `castle_storage`
- Added stairs for `moreblocks:empty_shelf`
- Added `3d_armor` upstream changes

### 2022-12-09
- Enabled `bushed_classic, `poisonivy`
- Re-added dates and digital clocks
- Updated `christmastree` (fix crafting recipe)

### 2022-12-09 2
- Added `cottages` mod
- Changed some `telemosaic` settings

### 2022-12-13
- Added `/request_lava` and `/request_areas_high_limit` chatcommands
- Added some new help messages
- Added a special `mymillwork` node (base_)
- Disabled bed spawn at death
- Disabled torch damage
- Updated `techage` (many fixes)
- Updated `mesecons` (unittests)
- Updated `xban2` (fix ingame chat message)
- Updated `signs_lib` (logging)
- Updated `tubelib2` (tube placement)
- Updated `chatplus` (logging)
- Updated `mobs_npc` (new textures)
- Updated `unified_inventory` (farming as opt-depend)

### 2022-12-21
- Added `/spawn_old` and `/s_o`
- Added `/vote_day` and `/vote_night`
- Refactored the voting api
- Improved returns of many chatcommands
- Block self vote-kicks
- Fixed not working TA growlight
- Removed `mesecons_wireless` and `claycrafter`
- Updated `mobs_redo` (fix userdata crash)
- Updated `mesecons` (FPGA metadata fix)
- Updated `anvil` (portuguese Brazilian translation)
- Updated `smartshop` (currency support)
- Updated `itemframes` (mod loaded msg)
- Updated `farming` (new textures)
- Updated `bakedclay` (better cnc register)
- Updated `bonemeal` (small poplar sapling)
- Updated `mob_horse` (loaded msg)
- Updated `digilines` (fix Z-fighting LCD text)

### 2022-12-22
- Vote automatically `yes` if you start a vote
- Updated `mobs_animal` (fix evil bunny)
- Updated `ethereal` (new fish textures)
- Updated `dummies` (spawn other players)

### 2022-12-22 2
- Added `choppy` mod
- Updated `mobs_redo` (userdata crash fix no.2)
- Removed unused `/memory` command

### 2022-12-24
- Added choppy support to more axes
- Golden apple fills hunger now completely
- Updated `3d_armor` (Qol)
- Updated `ethereal` (new textures)
- Updated `mesecons` (removed log message at server startup)

### 2022-12-25
- Updated `farming` (missing textures)
- Updated `bakedclay` (fixed CNC)

### 2022-12-30
- Improved /vote_day and /vote_night
- Removed black namecolor
- Updated `drawers` (transalations)
- Updated `networks` (fix crash)
- Updated `safer_lua` (limit code execution time)

### 2022-12-30 2
- Added some debug infos for staff members
- Updated `techage` (doc KI2 chip)
- Played with some mesecons_dbug settings
- Reduced `biome_lib` handle mapblocks per second setting
- Updated LuaJIT

### 2022-12-31
- Improved behavior of `/tpr` and `/tp2me`
- Improved discord -> ingame chat messages
- Updated `technic_chests` (TA tubes support)
- Updated `techage` (silicon recipe)
- Updated `unified_inventory` (scroll height calculation)

## 2023

### 2023-01-01
- Fixed broken towercrane with heights <42
- Enabled far mobs removing
- Updated `mydoors` (mesecons support)

### 2023-01-03
- Increased max players from 15 to 20

### 2023-01-07
- Cleaned-up votes code
- Fixed `cottages` recipes
- Removed Ironman skin
- Added a hot fix for `drawers` crashes
- Updated `customskins` (cleanup)
- Updated `smartshop` (sprite fixes)
- Updated `minecart` (command interface)
- Updated `unified_inventory` (centre page label)
- Updated `hangglider` (cleanup)
- Updated `ethereal` (new textures, license things)
- Updated `techage` (countdown mode, growlight fix, recipes)
- Disabled `mesecons_commandblock` mod

### 2023-01-10
- Fixed signs_bot MTG flower support
- Updated `atm` (critical: fix missing io.close)
- Updated `techage` (fix wafer recipe)
- Updated `chatplus` (fix crash)
- Updated `digilines` (ES locales)
- Updated `unified_inventory` (improve group matching)

### 2023-01-14
- Improved vote handling a bit
- Improved archtecs crafting fix system
- Default chest and furnance can be moved with pistons
- Christmas stocking can be moved by piston anymore
- Updated `mobs_monster` (remove old mese monster)
- Updated `futil` (many things)
- Updated `fireworkz (respect protections)
- Updated `travelnet` (new datastorage system)
- Updated `unified_inventory` (new CC sounds)

### 2023-01-15
- Fixed black sky
- Cleaned-up archtec server mod
- Updated `techage` (fix cement recipe)
- Updated `smartshop` (secure formspec)

### 2023-01-15 2
- Re-enabled mapserver map.archtec.freemyip.com:8585

### 2023-01-21
- Removed blue namecolor
- Updated `travelnet` (check above node)
- Updated `drawers` (fix crash)
- Updated `signs_bot` (fix crash)
- Cleaned-up our `3d_armor` fork
- Cleaned-up our `display_modpack` fork

### 2023-01-22
- Fixed double registered armor crafts
- Removed nether shield
- Updated `minecart` (fix disappearing hopper items)
- Updated `wine` (fix crash)

### 2023-01-23
- Updated `cottages` (crash fix)
- Updated `farming` (abm labels)

### 2023-01-28
- Fixed a crash in `/watch`
- Updated `choppy` (fix /toggle_choppy) - thx drokenforge
- Updated `cool_trees` (general mod cleanup)
- Updated `ethereal` (add some biomes to mapgen)
- Updated `mesecons_debug` (mod cleanup)
- Updated `smartshop` (fix crash)
- Updated `stairsplus/moreblocks` (improve mtg stairs compat)
- Updated `moreores` (tool groups)
- Updated `mydoors` (fence support)
- Updated `plantlife` (fix texture issues)
- Updated `techage` (fix crash)
- Updated `unified_inventory` (fix not working search bar)

### 2023-01-28 2
- Enabled `stairs` replacement mod
- Disabled `monitoring`

### 2023-01-31
- Added data api: (thanks for testing drokenforge and Juri/debagos)
- Folowing stats are currently enabled: nodes dug, nodes placed, items crafted, 
  death counter, playtime, average playtime, sent chatmessages, 
  account creation date, join counter. Have fun:)
- Watch the stats of a player with `/stats <name>`
- Removed choppy function from axes, use the chainsaw now (I forgot the recipe, shame on me)
- Enabled ethereal`s coral and sponge generation
- Updated `wine` (fix old barrel fs)
- Updated `ethereal` (upstream)
- Updated `minecart` (beduino support)
- Updated `techage` (fix digtron crash)

### 2023-02-02
- Fixed a crash in all `/request_*` commands
- Updated `signs_bot` (fix fall_down on rail)

### 2023-02-04
- Added a recipe for the chainsaw
- Added new stats (what a player can do)
- Enabled Iluushroom generation
- Updated `mobs_animal` (fix black sheep)
- Updated `techage` (flycontroller fixes)

### 2023-02-07
- Fixed a crash when using the chainsaw
- Improved /stats backend api
- Fixed a crash in `chatplus`
- Updated `techage` (move controller improvements)
- Updated `minecart` (removed EOL blanks)
- Updated `biofuel` (add esperanto transaltions)

### 2023-02-11
- Starting vote day/night now costs 3 etherium dust
- Added colors to `/stats`
- Added new help messages
- Updated `techage` (fix multiple crashes)
- Updated `3d_armor` (better fire protection)
- Updated `mobs_redo` (better water avoidance)
- Updated `mobs_animal` (better water avoidance)
- Updated `signs_bot` (set_param2 sign)

### 2023-02-11 2
- Updated mapserver
- Added ingame notification if someone runs !status

### 2023-02-13
- Updated `techage` (add empty_spool as fab output)
- Updated `futil` (resolve_itemstack; sort_keys)
- Updated `fmod` (parse flags settings)

### 2023-02-18
- Migrated the chat bridge from my old `chatplus_discord` mod to my new Matterbridge implementation
- Improved chat bridge handling in many situations
- Added nice color effects to some chatcommands
- Added `/network_info` command (staff only)
- Updated all mods which interact with the discord/matterbridge api
- Updated `farming` (fix onion blur)
- Updated `choppy` (fix enabled cache after toggle)
- Updated `glass_stained` (fix warnings)
- Updazed `wine` (dye recipe for agave->cyan)
- Updated `futil` (random_unit_vector and is_indoors)
- Updated `minecart` (hopper support for signs bot)
- Updated `graystone` (new free textures)
- Updated `techage` (expand sequencer wrench menu)
- Updated `autobahn` (fix physics with mihtril boots)

### 2023-02-20
- Added `/thankyou <name>` command
- Removed fire damage from torches (again)
- Updated `techage` (bug fixes)
- Updated `networks` (bug fixes)

### 2023-02-21
- Fixed ugly looking fakegrass blocks
- Improved kick notification handler
- Improved matterbridge anti leak system
- Updated `techage` (fix alpha texture issue)
- Updated `homedecor` (fix translation issue)

### 2023-02-26
- Enabled all moreblocks aliases (fixes some crafts)
- Enabled cottages feldweg
- Updated `mesecons` (disable LuaC print -> actionstream)
- Updated `minecart` (paramtype instructions)
- Updated `moretrees` (merge with upstream)
- Updated `quartz` (translations)
- Improved server settings for mesecons
- Improved matterbridge code
- Improved help messages
- Removed `invisible_wall`

### 2023-02-27
- Fixed a crash with falling nodes and playerdata api
- Fixed a crash when using `/watch`

### 2023-02-28
- Updated `mobs_redo` (A*/AStar pathfinder support (faster pathfinder); animals behave less like robots)
- Updated `unified_inventory_all` ("Craft All" now supports on_craft callbacks)
- Updated `techage` (fix crashes, rework door controller)
- Updated `futil` (FakeInventory)

### 2023-03-04
- Re-enabled `archtec_mapserver` (added some lag checks)

### 2023-03-04 2
- Improved death messages
- Improved way to get the `adv_buckets` priv
- Cleanup some internal code
- Updated `techage` (Reduce the number of necessary exp points)

### 2023-03-05
- Fixed broken vote-kick
- Improved coloring of votes
- Improved coloring of death messages
- Updated `techage` (fix possible bug in techage:ta4_display)
- Updated `mobs_redo` (turn/animate mob on knockback)
- Updated `xban2` (fix typo in discord support)

### 2023-03-06
- Fixed a crash in `archtec_matterbridge`
- Updated `techage` (Improve transformer and electricmeter)
- Updated `signs_bot` (fix crash)
- Updated `towercrane` (make nodes undropable)

### 2023-03-08
- Increased max forceload blocks per player to 4
- Improved vote-kick security
- Fixed a crash in `facade`

### 2023-03-09
- Reverted last `mobs_redo` update
- Added player pos to `/report`
- Added a broken recipe checker

### 2023-03-10
- Updated `farming` (fix plant names)

### 2023-03-14
- Migrated all remaining `joinDateV2` to `joinDateV3`

### 2023-03-25
- Improved matterbridge settings (block @everyone; disabled sending of edits to mt)

{: .new }
> Switch to monthly feature updates (e.g. 23.04)

### 2023-03-30
- Added GitHub support to `/report`
- Added `(idle)` to idle player names
- Added a new ranks api
- Added a new death messages api
- Added a new music api
- Added a new privs grant/revoke api
- Added tool breakage warnings
- Added `/recipe_check` command
- Added support for translatable join/leave messages
- Improved playerdata player join handler
- Improved cheat reports
- Improved `chainsaw` repair method
- Improved `choppy` speed (x2.1)
- Fix command pattern matching from Discord
- Fix crashes in `/sd`
- Updated `anvil` (improve german translations)
- Updated `auroras` (fix black sky)
- Updated `bakedclay` (option to disable aliases)
- Updated `basic_materials` (techage aluminium support)
- Updated `bees` (fix nil ItemStack crash)
- Updated `bonemeal` (code tidy)
- Updated `chatplus` (new storage system)
- Updated `choppy` (new hud/waypoint system)
- Updated `ethereal` (improve textures)
- Updated `facade` (fix crash)
- Updated `farming` (improve pea textures)
- Updated `fmod` (new get_settings function)
- Updated `futil` (many improvements)
- Updated `greek` (fix nil ItemStack crash)
- Updated `hangglider (fix fly upwards; configurable areas warning time)
- Updated `home_workshop_modpack` (fix nil ItemStack crash(es))
- Updated `mesecons` (new noteblock sounds)
- Updated `smartshop` (testing suite)
- Updated `mobs_monster` (new textures and models)
- Updated `mobs_npc` (mcl2 support)
- Updated `mobs_redo` (fix crashes)
- Updated `moreblocks` (fix crafting conflict)
- Updated `mydoors` (add saloon door recipes)
- Updated `signs_bot` (improve compost)
- Updated `techage` (move controller and logic fixes)
- Updated `telemosaic` (fix nil ItemStack crash; protect beacons)
- Updated `titanium` (improve google detection)
- Updated `travelnet` (fix many crashes due ItemStacks; support for custom privs)
- Updated `unifieddyes` (syntax formatting)
- Updated `xban2` (code tidy)
And much more...

### 2023-03-30 2
- Fixed not updating idlekick nametag (add movement detection)

### 2023-04-01
- Added a chainsaw repair recipe with gasoline
- Added more chatcommand logging
- Improved cheat logging
- Fixed that chatmessages don`t remove the `(idle)` nametag

### 2023-04-09
- Added a hopper limit (10 in a 24 nodes radius)
- Added a TA quarry limit (3 in a 24 nodes radius)
- Re-enabled the engine profiler

### 2023-04-10
- Enabled Techage Meridium
- Added a new `Google Glas` light api (support for other glowing tools/nodes)
- Re-added ghost crystal glass
- Disabled the atm automatic income
- Updated `atm` (new storage handler)
- Updated `mobs_redo` (staticdata clean function)
- Updated `mobs_animal` (new sheep textures)
- Updated `itemframes` (new pedestral textures)
- Updated `techage` (better mesecons converter)
- Updated `biofuel` (new recipes)
- Updated `farming` (seed improvements)

### 2023-04-11
- Fixed unknown item drops of basalt/bauxit stairs
- Added `sound_api` (this enables more homedecor node sounds)
- Updated `techage` (teleport mode for flycontroller)

### 2023-04-14
- Updated the server to Minetest 5.7.0 (including MTG)
- Updated LuaJIT to latest master
- Added a formspec to prevent unintentional vote-kicks
- Added new help messages
- Added a drawers limit (to prevent server bugs due too many entities)
- Updated `techage` (deleted teleport mode)
- Updated `atm` (fix not loading transactions)
- Updated `ethereal` (schematic fixes, fish textures)
- Updated `bones` (fix in void bone placement)
- Updated `titanium` (disable light when it`s bright enough)
- Updated `fmod` (fix negetation)
- Updated `smartshop` (improve private stuff)
- Updated `futil` (vector improvements)
- Updated `choppy` (pausin mechanics)

### 2023-04-15
- Fixed sometimes not working node limiters
- Removed long msg-splitter (not needed anymore)

### 2023-04-16
- Added `/news` command (will be executed at every join)
- Added a signs_bot limit (7 in a 24 nodes radius)
- Added an anti-lag on join patch to `unified_inventory` (for testing in production)
- Enabled lightweight LuaController interrupts

### 2023-04-22
- Fixed 2 bugs in the playerdata api
- Fixed server wide tool_breakage sounds
- Do not print `<player> left the game` messages on-kick
- Added a server lock mode
- Added `/lagometer` command (staff only)
- Added a check to prevent playing music without file

### 2023-04-30
- Added `/ignore` command (please read the tutorial)
- Added `castle_gates` portcullis without moving function
- Added `/falling_nodes_cleanup` command (staff only)
- Added `/vn` and `/vd` commands (aliases to `/vote_night` and `/vote_day`)
- Added the `markers` mod
- Titanium won`t drop in TA sieves anymore
- Matterbridge now replaces newlines with spaces
- Added some mt 5.8 changes to prevent hard engine crashes and speedup crafting
- Fixed some homedecor lamp crafting recipes
- Updated `3d_armor` (don`t trigger punch sounds when max_hp changes)
- Updated `atm` (option to disable startbalance)
- Updated `bonemeal` (support for new plants)
- Updated `castle_gates` (fix 2 crashes)
- Updated `choppy` (better tree detection)
- Updated `cottages` (fix recipe issues)
- Updated `ethereal` (new fishes and textures)
- Updated `farming` (waving crops, new seeds)
- Updated `fmod` (settings api)
- Updated `futil` (vector revision)
- Updated `itemframes` (fix pedestal removal on_blast)
- Updated `smartshop` (tweak entity offsets)
- Updated `mobs_animal` (add hairball item)
- Updated `mobs_npc` (tweak punch animation)
- Updated `mobs_redo` (attempt to stop spinny mobs)
- Updated `moretrees` (spanish translation, fix date drops)
- Updated `pride_flags` (german and french translation)
- Updated `techage` (fix multiple formspec bugs)
- Updated `technic_chests` (support for pulling specific stacks)
- Updated `wine` (fill barrel with water sources)
- Updated all flux mods (new license)

### 2023-05-01
- Added a hotifx for broken `moretrees` generation
- Fixed a crash in `/ignore`
- Staff members can now query the ignore list of other players

### 2023-05-01 2
- Added a hotfix LBM to grow broken moretrees saplings

### 2023-05-19
- Updated `ethereal` (revert force_place commits)
- Updated `moretrees` (fix typos in tree names)

### 2023-05-30
- Added `/c` command (channel based chat mod, please read the tutorial)
- Added per placer settings (gear in inventory)
- Added `rhotator` (new screwdriver with better UX)
- Added a new replacer mod (faster, safer, better)
- Added some internal lag detection tools
- Added a spawn waypoint
- Added a VPN blocker cache
- Added stamine poisson
- Improved many server sent messages
- Improved tool breakage sounds
- Improved the node limiter
- Fixed players not re-spawning on join
- Updated `anvil` (fix assignment to undeclared global)
- Updated `bonemeal` (only take item when used on node)
- Updated `bridger` (fix all crafts)
- Updated `castle_tapestripes` (add collision boxes)
- Updated `caverealms` (obsidian glass slab)
- Updated `choppy` (many improvements, help formspec)
- Updated `cottages` (api improvements)
- Updated `crafting_bench` (disallow TNT blasts)
- Updated `digilines` (do not report protection violations)
- Updated `ethereal` (revert ALL force_place changes)
- Updated `farming` (fix fix turkish delight recipe)
- Updated `futil` (new vector functions)
- Updated `greek` (fix infinite fire bowls)
- Updated `homedecor` (fix cabinet crafts)
- Updated `hoppers` (hoppers can now be placed in itemframes)
- Updated `itemframes` (items can rotate inside itemframes)
- Updated `jonez` (add persian styled nodes)
- Updated `smartshop` (add on_blast functions to entities)
- Updated `mobs_animal` (better sheep spawning, fix evil bunny attributes)
- Updated `mobs_monster` (remember mese monster type)
- Updated `mobs_npc` (order traders to stand/wander/follow)
- Updated `mobs_redo` (many internal improvements)
- Updated `mydoors` (enable all doors, fix labels)
- Updated `pride_flags` (fix logic error)
- Updated `sings_bot` (fix timer triggers bot)
- Updated `techage` (add TA4 chargedetector, add bigger energy storages, documentation improvements)
- Updated `technic_chests` (fix malformed translations)
- Updated `unified_invenntory_plus` (improve logging)

### 2023-05-30 2
- Allow more and bigger areas

### 2023-06-17
- Updated `replacer` (fix crash when hitting an entity with replacer)

### 2023-06-23
- Updated LuaJIT to latest master
- Applied a patch to fix PvP crashes

### 2023-06-25
- Applied a patch to fix /tpr crashes
- Fixed the last PvP patch so player interactions are working again

### 2023-06-30
- Added `omnidriver` (even better scredriver)
- Added `tape_measure` (a tape to measure distances)
- Added an option to disable automatic item pickup
- Added 5 free night/day votings per player
- Added `/ignore` support to main chat
- Added logging to LuaC code
- Added more tools breakage warnings
- Added LBM and NodeTimer anti-lag tools
- Added a check to prevent traps via `/tpr`
- Added a longer bones waypoint timeout time (1 day instead of 1h)
- Added a window to prevent players from changing their homepos by accident
- Improved chainsaw stats help
- Improved the archtec_playerdata backend
- Updated `3d_armor` (support more sounds)
- Updated `bonemeal` (support new plants)
- Updated `caverealms` (code and texture fixes)
- Updated `choppy` (improved target finder)
- Updated `colored_concrete` (chinese translation)
- Updated `cottages` (sounds for water-fillable items)
- Updated `display_modpack` (mt 5 translation support, 4 bugfixes)
- Updated `ethereal` (liquid filled caves, new plants)
- Updated `fachwerk` (fix nodes let light pass through them)
- Updated `farming` (fix pineapple drops)
- Updated `futil` (many improvements, as always)
- Updated `homedecor` (replace ABMs with NodeTimers, crafting fixes)
- Updated `itemframes` (support custom item textures)
- Updated `mesecons` (LuaC string.split, pressure plates improvements)
- Updated `mesecons_debug` (fix crashes)
- Updated `mobs_monster` (new fireball texture)
- Updated `mobs_redo` (code improvements)
- Updated `stairsplus` (support for more aliases)
- Updated `pride_flags` (new polyamorous flag)
- Updated `signs_bot` (beduino support, disable heavy LBM)
- Updated `ta_addons` (fix logic error)
- Updated `techage` (fixes, TA4 node detecor, gaze sensor, flipflop)
- Updated `travelnet` (new storage, fixes)
- Updated `unified_inventory` (crash fix, staff teleport)
- Removed the `/toggle_choppy` command (was never in use)
- Removed the `/c move` command
- Removed `rhotator` (replaced by `omnidriver`)

### 2023-07-03
- Fixed multiple `archtec_playerdata` crashes
- Fixed a crash the using the `chainsaw`

### 2023-07-08
- Applied a patch to fix the broken chainsaw
- Applied a patch to fix not working tool breakage warnings

### 2023-07-09
- Applied a patch to fix negative free-votes counters

### 2023-07-18
- Applied a patch to let Matterbridge show Display names with higher priority than User names

### 2023-07-26
- Added an ingame FAQ/Wiki (chatcommand: `/faq`) thanks to miz and EDWIR
- Added translation support for `archtec_` mods
- Added a way for players to create public chat channels (see `/faq`)
- Added undigable nodes for an unrestricted post office
- Added automatic priv cleanup and removed some not needed default privs
- Added `adv_keys` (multiple-use skeleton key)
- `/stats` shows now if a player fulfills the criterias to gain a priv
- Refactored big parts of the `archtec_` mods
- Updated `abriglass` (add ghost crystal recipe, improve upgrade code)
- Updated `action_queues` (serverstep queue fixes)
- Updated `atm` (rename currency to `MG`, better formspec, german translation)
- Updated `basic_signs` (cleanup, update german translation)
- Updated `bees` (smoker node check)
- Updated `bonemeal` (add support for `bushes_classic` nodes)
- Updated `customskins` (remove `/skin` command)
- Updated `digicolor` (add save button)
- Updated `display_modpack` (fix digital clock nodebox, code quality)
- Updated `drawers` (fix weird lokking drawer formspec)
- Updated `dreambuilder_hotbar` (new storage backend, fixes)
- Updated `ethereal` (fix rod uses, rework ABM overrides)
- Updated `facade` (fix use of deprecated functions)
- Updated `farming` (add mayonnaise and gingerbread man)
- Updated `fireworkz` (fix use of deprecated functions)
- Updated `fmod` (add async env support)
- Updated `futil` (many improvements)
- Updated `jonez` (fix use of deprecated functions, remove unused logging)
- Updated `led_marquee` (maintenance, add german translation)
- Updated `mobs_animal` (fix broken sheep dye`ing)
- Updated `mobs_redo` (mono sounds, add custom runaway nodes)
- Updated `moreblocks` (add whitelist mode)
- Updated `moretrees` (run NodeTimer LBM only once)
- Updated `mydoors` (add sliding door crafts, fix garage door not opening)
- Updated `nixie_tubes` (maintenance, add german translation)
- Updated `plantlife` (replace `biome_lib` part 1, cleanup codebase, fixes)
- Updated `replacer` (fix crash if to_plac_node does not exist)
- Updated `signs_bot` (fix crash when bot is dug by fake player)
- Updated `signs_lib` (add spanish translation, improve german translation)
- Updated `smartshop` (fix node orientation, cleanup)
- Updated `techage` (fix quarry dig depth, fix meltingpot rendering)
- Updated `telemosaic` (add logging)
- Updated `titanium` (more mtg like crafts)
- Updated `travelnet` (improve german translation)
- Updated `unified_inventory` (fix existence check when itemstring contains meta)
- Updated `xdecor` (major overhaul, use floss textures)

### 2023-07-27
- Fixed broken chainsaw condition detection
- Fixed death messages were sent to Discord with escape sequences

### 2023-08-18
- Added a chatbridge from #general on Discord to #archtec on Libera.chat (IRC)
- Updated LuaJIT to 72efc42e

### 2023-08-19
- Downgraded LuaJIT to version 8635cbab

### 2023-08-26
- Added a formspec to warn players about the upcoming server address change

### 2023-08-30
- Added `ambience` (adds maney environment sounds)
- Added `ta_apiary` (add automated honey and wax production), thx Olesya
- Added new FAQ entries (Areas, TNT and explosions, Biofuel)
- Added "Empty Canister of Biofuel" for TA usage
- Added `doclib` (new TA & Signs Bot depend for docs)
- All TenPlus1 mods dropped 0.4 support
- Updated `3d_armor` (add german translation, fix crash)
- Updated `areas` (fix orthography)
- Updated `castle_farming` (cleanup repo)
- Updated `castle_gates` (fix spanish translation)
- Updated `castle_storage` (cleanup repo)
- Updated `compost` (fix node drops)
- Updated `cottages` (fix simple table recipe)
- Updated `display_modpack` (add french translation, escape content)
- Updated `drawers` (fix broken translations)
- Updated `ethereal` (update translation)
- Updated `farming` (update translations)
- Updated `fmod` (better version check)
- Updated `futil` (add pattern matcher)
- Updated `hangglider` (full redo, fix many physics bugs)
- Updated `homedecor` (update translations)
- Updated `hopper` (update translations)
- Updated `itemframes` (add translation support)
- Updated `lcdlib` (change the horizontal alignment behavior)
- Updated `led_marquee` (document settings, tweak settings a bit)
- Updated `mesecons` (add german translation)
- Updated `minecart` (add doclib manual)
- Updated `mob_horse` (code tidy)
- Updated `mobs_animal` (code tidy)
- Updated `mobs_monster` (code tidy)
- Updated `mobs_npc` (code tidy)
- Updated `mobs_redo` (code improvements)
- Updated `mymillwork` (fix client side warnings)
- Updated `plantlife` (add `attached_node` group to poisonivy nodes)
- Updated `signs_bot` (add doclib manual)
- Updated `techage` (add TA2 clutch, use doclib manual)
- Updated `technic_chests` (add locked chests recipe using padlocks)
- Updated `travelnet` (make sounds mono, mcl support)
- Updated `wine` (fix kefir recipe)
- Updated `xdecor` (fix stone tile recipe conflict)
- Removed `intllib` (not needed anymore, yay!)

### 2023-09-11
- Added ingame chat and Discord #general bridges to Matrix and IRC
- Updated `bones` (fix that items are sometimes dropped instead of kept)

### 2023-09-28
- Updated the mapserver nodecolor database (shows almost all nodes on the mapserver correctly colored)

### 2023-10-01
- Changed the server address from "archtec.freemyip.com:30803" to "archtec.niklp.net:30803"

### 2023-10-01 2
- Added a player XP ranking (`/rank`)
- Added a playerlist (visible by pressing the `Zoom` key)
- Added default channels (`/c default <channel name>`)
- Added persistent channels (you will automatically rejoin channels after login)
- Added a fake mailbox for the spawn post
- Updated `anvil` (fix a way to steal items of other players, cleanup)
- Updated `areas` (`areas_high_limit` is now automatically requested)
- Updated `autobahn` (fix speed bug)
- Updated `bakedclay` (add spanish translation)
- Updated `bees` (prevent bee damage glitches)
- Updated `castle_gates` (cleanup, fix wrong translation)
- Updated `compost` (proper creative check)
- Updated `display_modpack` (change font button in boards)
- Updated `ethereal` (fix crystal ingot recipe)
- Updated `farming` (better nodetimers)
- Updated `mobs_animal` (chickens eat seeds on ground)
- Updated `networks` (support for unifieddyes nodes)
- Updated `plantlife` (protection check for vines, proper creative mode check)
- Updated `signs_bot` (TA assembly tool support)
- Updated `techage` (add TA assembly tool, fix TA 3 mesecon converter)
- Updated `techpack_stairway` (add stairways without handrails)
- Updated `xban2` (use new json storage backend)
- Updated `xdecor` (enchant more tools (techage, mopreores, ethereal))
- Changed the color of all grey chatmessages to be better readable
- Fixed sometimes not working teleport requests
- Fixed the (broken) VPN blocker
- Removed `prefab:boat`

### 2023-10-03
- Fixed not updating list in `/rank`
- Changed the min XP to be in `/rank` to 10,000

### 2023-10-04
- Enable `ta_apiary` (sorry, I had a typo in the config)

### 2023-10-30
- Added a server monitoring system (https://archtec.niklp.net/monitoring)
- Added halloween monsters (can be placed by staff members)
- Added an emoji parser to replace often used emojis by their names
- Increased cart speed a bit
- Increased idlekick time to 1h
- Reduced visible player range to 1000 nodes
- Updated `ambience` (add esperanto translation)
- Updated `bees` (add french translation)
- Updated `bonemeal` (tweak sapling chance a bit)
- Updated `ethereal` (add french translation)
- Updated `farming` (improve scythe, add french translation)
- Updated `homedecor` (fix fancy fire particlespawner)
- Updated `mob_horse` (increase stepheight to 1.2)
- Updated `mobs_redo` (tweak mob behavior in fire)
- Updated `mydoors` (fix locked door protection)
- Updated `plantlife` (remove biome_lib usage from some mods, please report bugs!)
- Updated `signs_bot` (fix copy pattern)
- Updated `techage` (fix burn and concentrator bugs)
- Updated `travelnet` (add `/travelnet` command to search for travelnets (staff only))
- Updated `unified_inventory` (don`t show too long item names)
- Updated `wine` (add french translation)

### 2023-10-31
- Fixed broken player detectors
- Enabled unlimited visible player range (again)

### 2023-11-11
- Fixed crash when placing `minecart:manual` (replaced by `techage:construction_board`)

{: .new }
> Introduction of new player-oriented changelogs (much shorter and less technical)

### 2023-12-01
- !!! New changelog format, please give feedback !!!
- Added Shared Armor Stands
- Added configurable dummies (currently for spawnbuilders only)
- Replacers can now handle more nodeteypes
- Smartshops now accept items w/ metadata as payment
- Improved techage collider documentation (+ improved collider behavior)
- Improved unifieddyes behavior w/ special nodes
- Fixed farming hemp fibre recipe
- Fixed fireworkz rocket collisionbox (to collide w/ nodes)
- Usual translation updates and bugfixes

### 2023-12-03
- Fixed a denial-of-service attack vector in display_modpack

### 2023-12-10
- Added snow particles effect (can be disabled in the player settings menu)
- Fixed broken `castle_masonry:stonewall` recipe
- Improved denial-of-service fix in display_modpack

### 2023-12-16
- Updated Minetest to version 5.8.0 (including MTG)
- Updated LuaJIT to latest master

### 2023-12-21
- Dummies are now available for all players (spawn one via `/spawndummy`)
- Deleted chatplus namecolors for players who didn`t join for over a year now

### 2023-12-22
- Fixed that dummies have not been assigned to the correct owner

### 2023-12-26
- Restored old mtg 5.7 water textures (the new ones are very ugly)

### 2023-12-27
- Updated mapserver to version 4.8.0 (latest release)

## 2024

### 2024-01-01
- Added an overhauled darkage mapgen (all darkage items generate again in the world)
- Added `default:dry_dirt` + `group:water_bucket` -> `default:dirt` as a recipe
- Improved dummies (limited nametag length, protection checks, "Name Tag" instead of "Nametag")
- Made `ethereal:glostone` sawable
- Increased the `signs_bot` accu capacity from 600 to 900 units (+50%)
- Increased speed of `carts` by 1 node per second (8 -> 9 nodes)
- Fixed many node transparency issues when using minetest 5.9.0-dev clients
- Fixed douglas/fir trees sizes recorded by choppy (the chainsaw backend)
- Fixed mesecons pistons could destroy beds
- Fixed techage assembly tool didn`t respect non-empty chests
- Tweaked chicken drops (chance of dropping a feather)
- Tweaked sliding door groups (can be dug by axes now)
- Usual translation updates and minor bugfixes

### 2024-01-09
- Upgraded PostgreSQL database connections to unix sockets (much faster and less latency connection)
- Disabled snow mode

### 2024-01-20
- Disabled the inventory circular saw (invsaw) due to item duplication issues caused by the Minetest engine

### 2024-01-24
- Fixed a crash caused by broken string-formatting in the `smartshop` mod

### 2024-02-01
- Reworked the player teleport commands `/tpr` and `/tp2me` (better position finder, players which are attached to something won`t get teleported anymore)
- Reworked the settings UI (new design, moved namecolor setting to here)
- Improved the `/faq` UI (the content got many improvements too!)
- Improved the `/news` UI (design with colors, clickable links)
- Added reverse mode to TA5 pump
- Added support for comma-seperated list of nodes in node detectors
- Fixed mesecons delayer got stuck on 1-tick pulses
- Fixed items in techage tubes could be lost when the player inventory was full
- Fixed `jump` command of `signs_bot` when a colon (:) was in the command
- Fixed some texture alpha issues
- Improved  automatic categorization of `unified_inventory` -- REVERTED DUE TO SOME ISSUES
- Reworked the `/watch` and `/unwatch` commands (staff only)
- Disabled builtin profiler (small performance boost)
- Usual translation updates and minor bugfixes

### 2024-02-01 2
- Fixed a crash caused by not loaded namecolor data
- Reverted `unified_inventory` update due to some categorization issues and a crash

### 2024-02-03
- Added an "auto-vote `YES` for day votes" setting (can be found in the player settings UI)
- Increased `signs_bot` limit to 10 bots in a radius of 16 nodes
- Fixed tpr/tp2me bugs which wre introduced by the last update

### 2024-03-02
- Corals and seaweed by ethereal are now rendered without air bubbles underwater
- Made screwdriver repairable by anvil
- Fixed players being able to vote twice due to auto-vote
- Fixed crash in `streets` when placing a sign in creative mode with the replacer
- Drawers don`t accept items with metadata anymore
- Improved tpr position finder
- Usual translation updates and minor bugfixes

### 2024-03-05
- Fixed IRC/Libera bot charset (non ascii -> discord/matrix works now)

### 2024-04-03
- Reworked the UIs of `/stats` and `/rank` (new design, top 3 get trophies)
- Added support for dummy animations (sit, stand, lay)
- Added new kick message for idle players
- Enabled xdecor chess game
- Fixed TA energy storage spawns infinitely red gravel
- Fixed jonez `Ancient Wrought Lattice` recipe
- Fixed missing texture in itemframes on newer clients
- Fixed digiline crashes when NaN values were sent
- Removed moreblocks/stairsplus translations as most were incorrect
- Usual translation updates and minor bugfixes

### 2024-04-30
- Add `/tell <name> <msg>` chatcommand to send messages to offline players
- Add searchbox to the ingame FAQ
- Add UI with drafts function to `/report`
- Add enchanted Titanium tools
- Add `[Builder]` tag/rank for spawnbuilders
- Add `/forceload_verify` chatcommand to check if your forceload blocks work
- Dummies now collide with players and mobs
- Modify XP calculation (playtime gives much less XP now)
- Pebbles (by plantlife) can now be dug by hand
- Fix that enchanted Meridium tools were not glowing
- Fix sometimes visible escape sequences on posters
- Fix recipes of `Blue Door 1` and `Blue Shutters 1`
- Fix TA3 screwdriver couldn`t be repaired by anvil
- Fix crash when using `/stats` with certain long inactive players
- Preserve color of hangglider on repair

### 2024-05-01
- Fix `/report` didn`t work

### 2024-05-06
- Fix crafting bench item duplication bug

### 2024-05-25
- Fixed random crash in PvP checks when hit by a mob

### 2024-06-01
- Added speed boost when pressing the `E` key (aux1)
- Added food particles when eating things
- Added pressure plate support to all `mydoors` locked door variants
- Added Ukrainian-specific Cyrillic letters to `signs_lib`
- Added new special mailbox type (expect cool stuff soon!)
- Added new Techage command buttons
- Using the Chainsaw does not exhaust the hunger anymore
- Fixed that the underground was visible through `building_blocks` glass nodes
- Fixed "Straw" -> "Bound Straw" recipe
- Fixed rendering issue in the TA Forceload Block UI
- Fixed Admins got the "[Builder]" rank
- Reduced speed boost by Mithril Boots
- Increased required time to dig Banners and Labels

### 2024-06-29
- Fixed displayed required time for placing buckets
- Fixed displayed required time for creating areas

### 2024-07-01
- Added rideable & colorizable bikes
- Added new brown mushroom biome
- Added safe variants of `string.rep()` and `string.find()` to `Techage Lua Controller`
- Added TA4 Doser recipe for Water -> River Water + Salt Crystal
- Improved the look of `Mesecon Delayer`, `Mesecon Piston(s)` and `Mesecon Torch`
- Fixed enchanted `Crystal Shovels` losing their silktouch capabilities
- Fixed broken physics after sitting on `ts_furniture` seats
- Reduced stamina impact of crafting and sprinting
- Removed Libera.Chat/IRC chatbridge
- Ported `Vines` generation to Minetest API (the generated stuff should mostly look like before)
- Ported `caverealms`, `farming` and `ethereal` mapgen to new API which allows more performant mapgen in the future
- Usual translation updates and minor bugfixes

### 2024-07-03
- Fixed crash when accepting a teleport-request (`/ok`)
- Fixed crash when stripping a trunk node

### 2024-07-15
- Added debug code to fix bugtracker#195

### 2024-07-22
- Enabled Ethereal ABMs for Water to Ice, Snow/Ice to Water, Dry Dirt to Dirt (near Water)
- Added particle effect and sound when Lava Pickaxe cooks node
- Added Signs Bot Connection Tool invertation when pressing Aux1 (usually E)
- Added new HUD to indicate PvP status
- Made Stripped Tree nodes accessible -> Use `Chisel for Trunks`
- Made FAQ Search Case insensitive
- Fixed players can get into walls while riding Bikes
- Fixed some Skins with pixels on the "Cape" layer
- Fixed own Travelnets can't be removed from Areas protected by others
- Fixed Corals can't be placed on `ethereal:sandy`
- Fixed alpha rendering of Fachwerk Windows
- Fixed TA2 Boiler works without Boiler Base
- Fixed `cblocks` nodes get rotated when placed
- Fixed players who initiated Votes can vote a second time
- Made Biofuel unusable for Techage purposes (again)
- Disallowed rotation of various `mydoors` Doors
- Usual translation updates and minor bugfixes

### 2024-07-22 2
- Fixed crash when using `/no` or `/yes`

### 2024-08-08
- Fixed crash when using `/no` or `/yes` (this time actually)
- Updated LuaJIT to latest master

### 2024-08-12
- Updated to Minetest 5.9.0
- Serverside Hightlights:
  - Multithreaded Custom (Lua) Mapgen -> much less Mapgen lag
  - The "Invsaw" is back (Item duplication bugs have been fixed in this release)

### 2024-09-09
- Replaced many farming 32x32 textures with similar 16x16 textures
- Added arrow overlay to `ropes` ladders
- Added relative coordinates support for areas commands
- Added sounds to `telemosaic` nodes
- Added rotation support to `xdecor` Painting
- Limited use of `/thankyou` to 1 per hour
- Fixed font rendering issues in `signs_lib` and `display_modpack` by converting CRLFs to LFs
- Disabled idlekick for staff
- Increased entity visibility by 32 nodes (2 blocks)
- Usual translation updates and minor bugfixes
