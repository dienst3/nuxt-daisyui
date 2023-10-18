<template>
  <li class="step" :data-content="content || undefined" :class="classes">
    <slot />
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  content?: string;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
}>();

const classes = computed(() => ({
  "step-primary": props.color === "primary",
  "step-secondary": props.color === "secondary",
  "step-accent": props.color === "accent",
  "step-info": props.color === "info",
  "step-success": props.color === "success",
  "step-warning": props.color === "warning",
  "step-error": props.color === "error",
}));
</script>
