<script setup>
import Calculator from '../.vitepress/theme/components/Calculator.vue'
</script>

## Overview
Ghost's activity directly affects the chances of ghost doing "useful" actions and "useless" ones. Activity can be changed in certain ways:

## Solo modifier
If you play singleplayer lobby, or multiplayer lobby alone, then the game will add `+15` to the activity value

## Sanity
Losing sanity **significantly** increases ghost's activity, the formula is ```(100 - averageSanity)```

## Ghost's unique modifiers
If conditions are met, then some ghosts have activity modifiers:
- Oni, if at least one player is **in the same room as the ghost** or within **6 meters** (`+30`)
- Yokai, if at least one player produces almost any noise volume **in the same room as the ghost**, or global chat button is used (`+30`)

## Incense modifier
If smudged, then it will choose a random number between `20 and 29 (inclusive)` <br>
Decreases by 0.5 each second.

## Action probabilities

Calculate ghost activity probabilities based on activity level and setting.
::: tip NOTE
If playing with no evidence, or DOTS isn't an evidence, add `DOTS Chance` to `Wander Chance`

Blood Moon affects Fuse Box, Power and Event chances, but it will be added soon
:::

<Calculator />
