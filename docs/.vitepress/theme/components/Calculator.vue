<template>
  <div class="calculator">
    <h2>Ghost Activity Calculator</h2>

    <div class="input-group">
      <label>
        Sanity:
        <input v-model.number="activity" type="number" />
      </label>
      <label>
        Activity Setting:
        <select v-model="activitySettingPreset">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label class="checkbox-label">
        Blood Moon
        <input v-model="isBloodMoon" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
      <label class="checkbox-label">
        Solo
        <input v-model="isSolo" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
      <label class="checkbox-label">
        Oni/Yokai Modifier
        <input v-model="isOniYokai" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
      <label class="checkbox-label">
        Shade
        <input v-model="isShade" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
        <label class="checkbox-label">
        Goryo
        <input v-model="isGoryo" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
      <label class="checkbox-label">
        Activity Wish/Tower Card
        <input v-model="isActivityWish" type="checkbox" class="custom-checkbox" />
        <span class="checkbox-custom"></span>
      </label>
    </div>

    <button @click="calculate">Calculate</button>

    <div v-if="calculated" class="results">
      <ul>
        <li><strong>Interact Chance:</strong> {{ (interact * 100).toFixed(2) }}%</li>
        <li><strong>Wander Chance:</strong> {{ (wander * 100).toFixed(2) }}%</li>
        <li><strong>Ghost Ability Chance:</strong> {{ (ghostAbility * 100).toFixed(2) }}%</li>
        <li><strong>Favourite Room Chance:</strong> {{ (favRoom * 100).toFixed(2) }}%</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activity = ref(100)
const activitySettingPreset = ref('Low')
const isBloodMoon = ref(false)
const isSolo = ref(false)
const isOniYokai = ref(false)
const isShade = ref(false)
const isGoryo = ref(false)
const isActivityWish = ref(false) // New reactive variable for Activity Wish/Tower Card

const x = ref(0)
const interact = ref(0)
const wander = ref(0)
const ghostAbility = ref(0)
const favRoom = ref(0)
const calculated = ref(false)

const presetValues = {
  High: 100,
  Medium: 115,
  Low: 130
}

const activitySetting = computed(() => {
  let value = presetValues[activitySettingPreset.value]
  if (isBloodMoon.value) {
    value -= 15
  }
  if (isShade.value) {
    value *= 1.5
  }
  return value
})

const effectiveActivity = computed(() => {
  let value = 100 - activity.value // Subtract Sanity from 100
  if (isSolo.value) {
    value += 15
  }
  if (isOniYokai.value) {
    value += 30
  }
  return clamp(value, 1, 99) // Clamp to ensure valid range
})

const clamp = (val, min, max) => Math.max(min, Math.min(max, val))

const calculate = () => {
  let xVal = (effectiveActivity.value + 1) / activitySetting.value
  if (!isActivityWish.value) {
    xVal *= 0.5 // Apply 0.5 multiplier only if Activity Wish/Tower Card is not checked
  }
  xVal = Math.min(xVal, 1)
  x.value = xVal
  if (!isGoryo.value) {
  interact.value = xVal * (5 / 11) + (1 - xVal) * (1 / 6)
  wander.value = xVal * (2 / 11) + (1 - xVal) * (1 / 3)
  ghostAbility.value = xVal * (4 / 11)
  favRoom.value = (1 - xVal) * (1 / 2)
  }
  else {
  interact.value = xVal * (5 / 11) + (1 - xVal) * (5 / 24)
  wander.value = xVal * (2 / 11) + (1 - xVal) * (1 / 6)
  ghostAbility.value = xVal * (4 / 11)
  favRoom.value = (1 - xVal) * 0.625
  }

  calculated.value = true
}
</script>

<style scoped>
.calculator {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 400px;
  margin: 2rem auto;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.calculator h2 {
  margin-top: 0;
  color: var(--vp-c-text-1);
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.input-group label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--vp-c-text-2);
}

input[type="number"],
select {
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

input:focus,
select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.checkbox-label {
  flex-direction: row;
  align-items: left;
  gap: 0.75rem;
  position: relative;
  cursor: pointer;
}

.custom-checkbox {
  opacity: 0;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.checkbox-custom {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  display: inline-block;
  position: relative;
  transition: all 0.2s;
}

.custom-checkbox:checked + .checkbox-custom {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.custom-checkbox:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  left: 0.35rem;
  top: 0.15rem;
  width: 0.35rem;
  height: 0.65rem;
  border: solid var(--vp-c-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-custom:hover {
  border-color: var(--vp-c-brand);
}

button {
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-white);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.5s, color 0.5s, outline 0.0s;
}

button:hover {
  background-color: transparent;
  color: var(--vp-c-brand);
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
}

.results {
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.results ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.results li {
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-2);
}

.results strong {
  color: var(--vp-c-text-1);
}
</style>