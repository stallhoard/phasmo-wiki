<template>
  <div class="calculator-container">
    <div class="calculator-header">
      <h2>Ghost Activity Calculator</h2>
      <p class="subtitle">Calculate ghost behavior probabilities based on current conditions</p>
    </div>

    <div class="calculator-grid">
      <!-- Settings Panel -->
      <div class="settings-panel">
        <div class="input-group">
          <label>
            <span class="label-text">Current Sanity</span>
            <div class="input-wrapper">
              <input v-model.number="activity" type="number" min="0" max="100" placeholder="0-100" />
              <span class="unit">%</span>
            </div>
          </label>
        </div>

        <div class="select-row">
          <label>
            <span class="label-text">Activity Setting</span>
            <select v-model="activitySettingPreset">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          
          <label>
            <span class="label-text">Ghost Event Setting</span>
            <select v-model="ghostEventSettingPreset">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
        </div>

        <div class="toggles-grid">
          <label class="toggle-item">
            <span class="toggle-label">Blood Moon</span>
            <div class="toggle-switch">
              <input v-model="isBloodMoon" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>

          <label class="toggle-item">
            <span class="toggle-label">Solo Play</span>
            <div class="toggle-switch">
              <input v-model="isSolo" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>

          <label class="toggle-item">
            <span class="toggle-label">Oni/Yokai</span>
            <div class="toggle-switch">
              <input v-model="isOniYokai" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>

          <label class="toggle-item">
            <span class="toggle-label">Shade</span>
            <div class="toggle-switch">
              <input v-model="isShade" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>

          <label class="toggle-item">
            <span class="toggle-label">Goryo</span>
            <div class="toggle-switch">
              <input v-model="isGoryo" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>

          <label class="toggle-item">
            <span class="toggle-label">Activity Wish</span>
            <div class="toggle-switch">
              <input v-model="isActivityWish" type="checkbox" />
              <span class="slider"></span>
            </div>
          </label>
        </div>

        <button @click="calculate" class="calculate-btn">
          <span class="btn-content">Calculate Probabilities</span>
          <div class="btn-glow"></div>
        </button>
      </div>

      <!-- Results Panel -->
      <div class="results-panel" :class="{ 'has-results': calculated }">
        <div v-if="!calculated" class="empty-state">
          <div class="ghost-icon">👻</div>
          <p>Enter settings and click calculate to see ghost behavior analysis</p>
        </div>

        <div v-else class="results-grid">
          <div class="result-card" v-for="(value, key) in results" :key="key">
            <div class="result-header">
              <span class="result-label">{{ formatLabel(key) }}</span>
              <span class="result-value">{{ (value * 100).toFixed(1) }}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${value * 100}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activity = ref(0)
const activitySettingPreset = ref('Low')
const ghostEventSettingPreset = ref('Low')
const isBloodMoon = ref(false)
const isSolo = ref(false)
const isOniYokai = ref(false)
const isShade = ref(false)
const isGoryo = ref(false)
const isActivityWish = ref(false)

const calculated = ref(false)
const results = ref({
  interact: 0,
  wander: 0,
  fuseBox: 0,
  power: 0,
  event: 0,
  favRoom: 0,
  dots: 0
})

const formatLabel = (key) => {
  const labels = {
    interact: 'Interaction',
    wander: 'Wander',
    fuseBox: 'Fuse Box',
    power: 'Power Ability',
    event: 'Ghost Event',
    favRoom: 'Change Room',
    dots: 'D.O.T.S.'
  }
  return labels[key] || key
}

const presetValues = {
  High: 100,
  Medium: 115,
  Low: 130
}

const ghostAbilityRatios = {
  Low: { fuseBox: 17/144, power: 17/36, event: 59/144 },
  Medium: { fuseBox: 1/12, power: 1/3, event: 7/12 },
  High: { fuseBox: 7/144, power: 28/144, event: 109/144 }
}

const activitySetting = computed(() => {
  let value = presetValues[activitySettingPreset.value]
  if (isBloodMoon.value) value -= 15
  if (isShade.value) value *= 1.5
  return value
})

const effectiveActivity = computed(() => {
  let value = 100 - activity.value
  if (isSolo.value) value += 15
  if (isOniYokai.value) value += 30
  return Math.max(1, Math.min(99, value))
})

const calculate = () => {
  let xVal = (effectiveActivity.value + 1) / activitySetting.value
  xVal = Math.min(xVal, 1)
  if (!isActivityWish.value) xVal *= 0.5

  const ratio = ghostAbilityRatios[ghostEventSettingPreset.value]
  
  if (!isGoryo.value) {
    results.value.interact = xVal * (5 / 11) + (1 - xVal) * (1 / 6)
    results.value.wander = (xVal * (2 / 11) + (1 - xVal) * (1 / 3)) * (2 / 3)
    results.value.dots = (xVal * (2 / 11) + (1 - xVal) * (1 / 3)) * (1 / 3)
    results.value.favRoom = (1 - xVal) * (1 / 2)
  } else {
    results.value.interact = xVal * (5 / 11) + (1 - xVal) * (5 / 24)
    results.value.wander = (xVal * (2 / 11) + (1 - xVal) * (1 / 6)) * (1 / 3)
    results.value.dots = (xVal * (2 / 11) + (1 - xVal) * (1 / 6)) * (2 / 3) + (1 - xVal) * 0.0625
    results.value.favRoom = (1 - xVal) * 0.5625
  }

  const ghostAbility = xVal * (4 / 11)
  results.value.fuseBox = ghostAbility * ratio.fuseBox
  results.value.power = ghostAbility * ratio.power
  results.value.event = ghostAbility * ratio.event

  calculated.value = true
}
</script>

<style scoped>
.calculator-container {
  background: var(--vp-c-bg-soft);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
  max-width: 900px;
  margin: 2rem auto;
  backdrop-filter: blur(10px);
}

.calculator-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.calculator-header h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, var(--vp-c-brand-light), var(--vp-c-brand));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: none;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

.calculator-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

@media (max-width: 768px) {
  .calculator-grid {
    grid-template-columns: 1fr;
  }
}

/* Settings Panel */
.settings-panel {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.label-text {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

input[type="number"], select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--vp-c-text-1);
  font-size: 1rem;
  transition: all 0.2s;
}

input[type="number"]:focus, select:focus {
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
  outline: none;
  background: rgba(0, 0, 0, 0.3);
}

.unit {
  position: absolute;
  right: 1rem;
  color: var(--vp-c-text-3);
}

.select-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Toggles Grid */
.toggles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 16px;
}

.toggle-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.toggle-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* Custom Toggle Switch */
.toggle-switch {
  position: relative;
  width: 44px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vp-c-bg-mute);
  transition: .3s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .3s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--vp-c-brand);
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* Calculate Button */
.calculate-btn {
  position: relative;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--vp-c-brand), var(--vp-c-brand-dark));
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s;
}

.calculate-btn:hover {
  transform: translateY(-2px);
}

.calculate-btn:active {
  transform: translateY(0);
}

/* Results Panel */
.results-panel {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
}

.empty-state {
  text-align: center;
  color: var(--vp-c-text-3);
}

.ghost-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.results-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-card {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.result-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.result-label {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.result-value {
  color: var(--vp-c-brand-light);
  font-weight: 700;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand), var(--vp-c-brand-light));
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
