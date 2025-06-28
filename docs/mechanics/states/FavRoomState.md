## Overview
Favourite room state keeps the ghost anchored to its designated room, setting waypoints within it

## Enter
- Selects a random collider from the favourite room's `roomColliders` list
- Gets a random position within the collider's bounds
- Finds the nearest valid NavMesh point within 1.5 units

## Execute
- Moves to it and stops if the distance is **less than or equal to** 1 meter
- Forced to enter [Idle State](IdleState) if it's in the Favourite Room state more than **30 seconds** (stuckTimer)

## Unintended feature
If the waypoint is somewhere it can’t actually walk to (objects), the game picks the closest walkable spot instead — even if that means the ghost ends up just outside its favorite room. This may make Yurei's elimination test **slightly** unreliable, happens rare though and depends on the room


