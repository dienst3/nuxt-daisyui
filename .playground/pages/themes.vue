<template>
  <h1>Theme</h1>
  <DaisyInputSelect
    v-model="theme"
    title="Select a theme to preview"
    color="primary"
  >
    <option value="" disabled>Select a theme</option>
    <option v-for="theme in availableThemes" :value="theme">{{ theme }}</option>
  </DaisyInputSelect>
</template>

<script setup lang="ts">
const { theme, availableThemes } = useDaisyTheme();
</script>
