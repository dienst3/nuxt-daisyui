<template>
  <div class="badge" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  size?: "xs" | "sm" | "md" | "lg";
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
  outline?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "badge-xs": props.size === "xs",
  "badge-sm": props.size === "sm",
  "badge-md": props.size === "md",
  "badge-lg": props.size === "lg",
  "badge-primary": props.color === "primary",
  "badge-secondary": props.color === "secondary",
  "badge-accent": props.color === "accent",
  "badge-info": props.color === "info",
  "badge-success": props.color === "success",
  "badge-warning": props.color === "warning",
  "badge-error": props.color === "error",
  "badge-outline": props.outline,
}));
</script>
