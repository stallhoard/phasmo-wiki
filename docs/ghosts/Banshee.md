<div class="wraith-container">
  <img src="/images/Banshee_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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

## Roaming
- `50%` chance for long roam
- `1/3` chance to select target's position as destination (ability)
- Otherwise, normal logic

## Mechanics
- Selects a target **randomly** at the start of the game, reselects if the player left the game or died
- Reselection has its priority: host > 2 > 3 > 4 (based on the order in the lobby)
- Sanity threshold and activity *always* based on target's sanity, threshold is 50%

## Hunting
- If target is inside the investigation area, `playerToCheck` and `playerToChase` can only be applied to its target

## Ghost event preferences
- `7/13 (~53.8%)` chance to choose singing event