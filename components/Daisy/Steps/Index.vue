<template>
  <ul class="steps" :class="classes">
    <slot />
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  vertical?: boolean;
}>();

const classes = computed(() => ({
  "steps-vertical": props.vertical,
}));
</script>
