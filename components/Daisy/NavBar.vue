<template>
  <div class="navbar" :class="classes">
    <div v-if="$slots.start" class="navbar-start">
      <slot name="start" />
    </div>
    <div v-if="$slots.start || $slots.end" class="navbar-center">
      <slot />
    </div>
    <slot v-else />
    <div v-if="$slots.end" class="navbar-end">
      <slot name="end" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "base"
    | "info"
    | "success"
    | "warning"
    | "error";
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "bg-primary": props.color === "primary",
  "text-primary-content": props.color === "primary",
  "bg-secondary": props.color === "secondary",
  "text-secondary-content": props.color === "secondary",
  "bg-accent": props.color === "accent",
  "text-accent-content": props.color === "accent",
  "bg-neutral": props.color === "neutral",
  "text-neutral-content": props.color === "neutral",
  "bg-base-300": props.color === "base",
  "text-base-content": props.color === "base",
  "bg-info": props.color === "info",
  "text-info-content": props.color === "info",
  "bg-success": props.color === "success",
  "text-success-content": props.color === "success",
  "bg-warning": props.color === "warning",
  "text-warning-content": props.color === "warning",
  "bg-error": props.color === "error",
  "text-error-content": props.color === "error",
}));
</script>
