<div class="wraith-container">
  <img src="/images/The_Twins_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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
Everytime the ghost tries to interact there is:
- 50% chance for normal interaction
- 30% chance for extended interaction
- 20% chance for double interaction (delay 1 - 2s), that will add +1 to the 'Abilities used' stat

## Hunt
- 50% chance to start a hunt from current location, 1.5m/s speed
- 50% chance to start a hunt from last extended interaction place (random point in 2m radius sphere), 1.9m/s speed

## Extended interaction range
- 12m x 12m interaction box with the ghost in the center on small maps
- 24m x 24m interaction box with the ghost in the center on medium/large maps