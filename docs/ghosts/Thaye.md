<div class="wraith-container">
  <img src="/images/Thaye_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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
- Attempts aging every 60 - 120 seconds, the timer is **always 60 seconds** at the start of the game
- Aging decreases ghost activity, event chances, hunt threshold, speed

## Speed
- 2.75m/s at the age 0, 1.0 m/s at the age 10, -0.175m/s per age, no LOS acceleration

## Hunt threshold
- **<** 75% at the age 0, **<** 15% at the age 10, -6% per age

## Activity modifier
- 200% at the age 0, 50% at the age 10, -15% per age (absolute)