<template>
  <div class="card">{{ title }}</div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped>
.card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 12px;
  font-size: 14px;
  color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.card:hover {
  background: rgba(189, 52, 254, 0.2);
  border-color: rgba(189, 52, 254, 0.3);
}
</style>