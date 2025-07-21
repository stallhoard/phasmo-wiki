## Enter
- If there is no player within `15m` of the ghost, fail
- Otherwise, pick the closest player
- Choose a random point inside the main collider of the room (or closest possible walking point, in that case the ghost may end up outside the targeted player's room) and teleport to the player
- If the ghost is a Banshee, roll `1/3` chance for [Singing event](#singing-event), otherwise random selection
- Randomly choose one of the following event types (`1/5` chance)

## Sanity drain
- If one of the events described below collides with the targeted player (<2m), sanity of the player will drop by `10%`
- If the ghost is an Oni, it will drop by `20%` instead

## Airball
- If the ghost is an Oni, replace with [Walking event](#walking-event)
- Moves towards the targeted player for the duration of up to `10` seconds

## Walking event
- Ghost walks to the targeted player (usually continues to do so even after event ends)

## Singing event
- Ghost stands at the place for `13` / `18` seconds (female / male) and sings, replace with [Airball](#airball) if Shade
- If the targeted player is Banshee's target, drain `15%` sanity instead of `10%`

## Standing event
Mare:
- If the ghost is a Mare, roll `1/3` chance for light-breaking event
- Otherwise, normal logic


Normal logic:
- Choose one of the following events:
  - Standing
  - Light-breaking
  - Red room

## Appear state aka one frame event
- Currently broken

::: tip NOTE
Because of the bugged Appear state, I'll use event chances only considering 4 event types
:::