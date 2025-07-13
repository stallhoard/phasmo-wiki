## Overview
Wander state makes the ghost move freely across the map, without being tied to its favorite room — with some limitations, of course

## Enter
- If `canWander` is false, change state to [Favourite Room](FavRoomState)
- If DOTS is an evidence and, roll `33%` chance, if successful, check if the ghost is **not** a Goryo, then enter [DOTS State](DOTSState)
- Otherwise (`67%` chance), check if Goryo is in favorite room and there are no players in the current ghost room, if conditions are met, enter [DOTS State](DOTSState)
- If DOTS is not an evidence or `33%` chance was rolled, go through below logic

## Special cases
- If the ghost is a Mare and light state is `On`, roll `50%` chance for long roam, otherwise short roam
- If the ghost is a Banshee, roll `50%` chance for long roam, otherwise roll `2/3` chance to move towards target's position (short roam), otherwise short roam

## Normal logic
- Check if the ghost is in favorite room, roll `10%`, `20%`, `30%` chance to perform a long roam, depending on `Roaming frequency` setting
- Otherwise initiate a short roam

## Execute
- Generate a random position within a sphere with a radius of (`5 - 11` meters for **long**, constant `3` meters for **short roams**) around the ghost’s current position 
- Goryo can't set waypoints outside the favorite room if it's currently in the favorite room
- Attempt up to 10 times to find a valid NavMesh position within a sphere of radius
- If `Path Distance <= 1.5 * Direct Distance` inequality is satisfied, move towards the generated waypoint, stop when the remaining distance is **less than or equal** to 1 meter, otherwise generate a new position

## Roaming to floors restriction
- Check the floor type of the randomly selected position against the ghost’s favorite room’s floor type
- If the floor types differ and `allowGhostToRoamToOtherFloor` property of the room is false and the roam is short, change the ghost’s state to [Idle](IdleState)
- This means ghosts can't short roam between floors, the reason why Banshee can't do its ability in this case, because the ability is always considered as a short roam, exceptions are rooms that have `allowGhostToRoamToOtherFloor` property set to true

## `allowGhostToRoamToOtherFloor` rooms
- Basement on Tanglewood
- Basement on Edgefield
- Basement on Ridgeview
- Entry Hallway on Point Hope
- Kitchen on Point Hope
- Dining Room on Point Hope
- Games Room on Point Hope
- Bathroom on Point Hope
- Master Bedroom on Point Hope
- Child Bedroom on Point Hope
- Maintenance Room on Point Hope
- Lantern Room (both Top and Bottom) on Point Hope

## Example
Goryo can wander out of Basement on Tanglewood, but can't wander on the first floor of Tanglewood, since favourite room is on another floor





