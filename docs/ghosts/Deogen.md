<div class="wraith-container">
  <img src="/images/Deogen_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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

## Mechanics
- Always knows player's location

## Hunting
- Chooses closest player
- Speed: if the distance is greater than 6m between ghost and the targeted player, clamp to 3.0 m/s, if less, the speed is calculated by this formula: `direct distance * 0.15`, clamped at 0.4 m/s
- Attempts to reselect targeted player every `5 - 10` seconds, chooses closest possible