<template>
  <DaisyInputSelect bordered size="sm">
    <option value="">Default</option>
    <option value="primary">Primary</option>
    <option value="secondary">Secondary</option>
    <option value="accent">Accent</option>
    <option v-if="!simplified" value="info">Info</option>
    <option v-if="!simplified" value="success">Success</option>
    <option v-if="!simplified" value="warning">Warning</option>
    <option v-if="!simplified" value="error">Error</option>
  </DaisyInputSelect>
</template>

<script setup lang="ts">
defineProps<{
  simplified?: boolean;
}>();
</script>
