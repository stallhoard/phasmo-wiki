<div class="wraith-container">
  <img src="/images/Shade_Discovered.webp" alt="Wraith Ghost" class="wraith-image" />
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

- Can't interact with an enviroment in _any_ way (this includes fuse box, ghost event, firelights, writing book) if there is at least one player in the same room as Shade
  :::tip NOTE
  This applies for hunts too, specifically firelights
  :::

## Ghost event preferences

- Can't do singing events, appear state
- `60%` chance to choose airball as an event
- `2/3 (66.7%)` chance to enter shadow form **if manifested**

## Cursed possesions manifestation
- `50%` chance to appear in shadow form during `Music Box`, `Summoning Circle` states
