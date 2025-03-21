---
layout: default
title: Areas Tutorial
nav_order: 5
description: Areas Tutorial
last_modified_date: "25 August 2024"
---

# Areas Tutorial

### Areas information

1. Get information about the `areas` mod configuration
- `/areas_info` (no params accepted)


### Protect an area

1. Specify the corner positions of the area you would like to protect
- `/area_pos1` and `/area_pos2` set the two corner positions to your current positions.
- `/area_pos set` punch the two corner positions to set them.

2. Protect the selected area
- `/protect <Areaname>`

The area name is used only for informational purposes and has no functional importance.


### Add an owner to your area

1. Select the area to which you want to add an owner
- `/select_area <ID>` `ID` is the number you can see at the bottom left in square brackets (`[]`).

2. Create a new area with new owner
- `/add_owner <ID> <Name> <Areaname>` Use for `ID` the same as in 1., `Name` is the player you want to give owner rights, choose for `Areaname` a name you want.


### Open an area temporary

1. Open a specified area for all players
- `/area_open <ID>` `ID` is the number you can see at the bottom left in square brackets (`[]`).


### Change the owner of an area

1. Change the owner of an specified area
- `/change_owner <ID> <Name>` Gives `Name` control over the specified area.


### List areas

1. List all areas you own
- `/list_areas` (no params accepted)


### Change the size of an area (staff only)

1. Set new positions
- See `Protect an area -> 1`.

2. Change the size
- `/move_area <ID>` `ID` is the number you can see at the bottom left in square brackets (`[]`).


### Remove an area/areas

1. Remove an area
- `/remove_area <ID>` `ID` is the number you can see at the bottom left in square brackets (`[]`).

2. Removes an areas and all sub-areas of it
- `/recursive_remove_areas <ID>` `ID` is the number you can see at the bottom left in square brackets (`[]`).


### Rename an area

1. Rename a specified area
- `/rename_area <ID> <Areaname>` `ID` is the number you can see at the bottom left in square brackets (`[]`), choose for `Areaname` a name you want.
