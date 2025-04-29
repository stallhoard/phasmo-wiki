<div class="wraith-container">
  <img src="/images/Mare_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
</div>

<style>
.wraith-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  position: relative;
  overflow: hidden;
}

.wraith-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0,0,0,0) 30%, var(--vp-c-bg) 100%);
  pointer-events: none;
  z-index: 2;
}

.wraith-image {
  max-width: 400px;
  width: 100%;
  height: auto;
  filter: brightness(0.9) contrast(1.1);
  transition: all 0.3s ease;
}

.wraith-image:hover {
  filter: brightness(1) contrast(1.2);
  transform: scale(1.02);
}
</style>

## Ability (pseudo)

- If a player turns on a light that is within 4 metres of a Mare, it has a 1/7 (~14%) chance of turning the light off almost immediately (delay 0.05 - 1s)

## Sanity threshold

- ≤40% if main light's position is "On"
- ≤60% if main light's position is "Off"

## Interactions

- Can't turn on a light naturally

::: danger BUG
Can't turn on TVs and computer monitors
:::

## Roaming

- 50% for long roam if the room's main light's position is "On"

More: [Wander State](/mechanics/states/WanderState)

## Ghost event preferences

- Mare has 1/9 (11%) chance to choose light-breaking event

More: [Event State](/mechanics/states/EventState)

## Link to shattered lights

::: tip NOTE
If the lights are shattered, that room will _always_ be considered dark. This means the Mare can no longer interact with the light switch there in _any_ way (including its ability) and will always use the ≤60% sanity threshold
:::
