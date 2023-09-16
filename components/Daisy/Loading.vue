<template>
  <span class="loading" :class="classes"></span>
</template>

<script lang="ts" setup>
interface Props {
  type: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
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
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "loading-spinner": props.type === "spinner",
  "loading-dots": props.type === "dots",
  "loading-ring": props.type === "ring",
  "loading-ball": props.type === "ball",
  "loading-bars": props.type === "bars",
  "loading-infinity": props.type === "infinity",
  "loading-xs": props.size === "xs",
  "loading-sm": props.size === "sm",
  "loading-md": props.size === "md",
  "loading-lg": props.size === "lg",
  "text-primary": props.color === "primary",
  "text-secondary": props.color === "secondary",
  "text-accent": props.color === "accent",
  "text-info": props.color === "info",
  "text-success": props.color === "success",
  "text-warning": props.color === "warning",
  "text-error": props.color === "error",
}));
</script>
