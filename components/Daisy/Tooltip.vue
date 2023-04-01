<template>
  <div class="tooltip" :data-tip="tip" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tip: string;
  open?: boolean;
  location?: "top" | "bottom" | "left" | "right";
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
  "tooltip-open": props.open,
  "tooltip-top": props.location === "top",
  "tooltip-bottom": props.location === "bottom",
  "tooltip-left": props.location === "left",
  "tooltip-right": props.location === "right",
  "tooltip-primary": props.color === "primary",
  "tooltip-secondary": props.color === "secondary",
  "tooltip-accent": props.color === "accent",
  "tooltip-info": props.color === "info",
  "tooltip-success": props.color === "success",
  "tooltip-warning": props.color === "warning",
  "tooltip-error": props.color === "error",
}));
</script>
