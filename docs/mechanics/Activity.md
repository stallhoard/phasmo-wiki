<script setup>
import Calculator from '../.vitepress/theme/components/Calculator.vue'
</script>

## Overview
Ghost's activity directly affects the chances of ghost doing "useful" actions and "useless" ones. Activity can be changed in certain ways:

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
::: tip REMINDER
Activity = (100 - averageSanity) + ghost's unique modifiers + smudge modifier
:::

<Calculator />

::: warning NOTE
- For every ghost except Goryo/Shade
- Tower card/Activity wish is not considered
:::
