<div class="wraith-container">
  <img src="/images/The_Mimic_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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
- Changes ghost type every 30 - 120 seconds, the timer is **always 60 seconds** at the start of the game
- Always has ghost orbs
- Chooses random age if copies Thaye

## Desync
- Non-host can't see Hantu's breath, Obake's shapeshifting, Phantom's/Oni's/Deogen's blinking
- Incense blind duration is 5 seconds for Mimic-Moroi
- Mimic-Raiju causes heartbeat at 10m distance instead of the usual 15m (Raiju)