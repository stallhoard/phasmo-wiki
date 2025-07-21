## Mechanics
- All fire sources have their own *individual* timer
- Timer starts from the ignition (activation) of the flame

## Timer
- **Always** `30` seconds for each fire source at the start of the game
- Then, chosen randomly between `20` and `80` seconds
- When the timer expires, roll `2/3 (66.7%)` chance to blow it out if [conditions](#conditions) are met, if failed, start a new timer

## Onryo exception
- Onryo can bypass the minimum cooldown (20, or 30 at the start of the game) by attempting a hunt
- Each dead player decreases the max cooldown (80) by `20` seconds
- Chance to blowout changes too with the amout of dead players:
  - 0: `2/3 (66.7%)` 
  - 1: `3/4 (75%)`
  - 2: `4/5 (80%)`
  - 3: `5/6 (83.3%)`

## Conditions
- Ghost is within 5m of the flame
- If the ghost is a Shade, check if there is no player in the same room as the ghost (even during hunts)

::: tip NOTE
Tier 3 Firelight does **not** reset the timer if extinguished by a player
:::

