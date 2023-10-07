<template>
  <button
    v-if="type !== 'link'"
    class="btn"
    :class="classes"
    :disabled="disabled || undefined"
    :type="type"
    :title="title"
    @click="$emit('click')"
  >
    <slot />
  </button>
  <NuxtLink
    v-else
    role="button"
    class="btn"
    :to="to"
    :target="target"
    :class="classes"
    :disabled="disabled || undefined"
    :title="title"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  type?: "submit" | "reset" | "link";
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  size?: "xs" | "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  ghost?: boolean;
  link?: boolean;
  outline?: boolean;
  active?: boolean;
  disabled?: boolean;
  glass?: boolean;
  noAnimation?: boolean;
  wide?: boolean;
  block?: boolean;
  shape?: "circle" | "square";
}>();
defineEmits<{
  (eventName: "click", value: void): void;
}>();

const classes = computed(() => ({
  "btn-xs": props.size === "xs",
  "btn-sm": props.size === "sm",
  "btn-md": props.size === "md",
  "btn-lg": props.size === "lg",
  "btn-primary": props.color === "primary" && !props.link,
  "btn-secondary": props.color === "secondary" && !props.link,
  "btn-accent": props.color === "accent" && !props.link,
  "btn-info": props.color === "info" && !props.link,
  "btn-success": props.color === "success" && !props.link,
  "btn-warning": props.color === "warning" && !props.link,
  "btn-error": props.color === "error" && !props.link,
  "text-primary": props.color === "primary" && props.link,
  "text-secondary": props.color === "secondary" && props.link,
  "text-accent": props.color === "accent" && props.link,
  "text-info": props.color === "info" && props.link,
  "text-success": props.color === "success" && props.link,
  "text-warning": props.color === "warning" && props.link,
  "text-error": props.color === "error" && props.link,
  "btn-ghost": props.ghost,
  "btn-link": props.link,
  "btn-outline": props.outline,
  "btn-active": props.active,
  "btn-disabled": props.disabled,
  "glass": props.glass,
  "no-animation": props.noAnimation,
  "btn-wide": props.wide,
  "btn-block": props.block,
  "btn-circle": props.shape === "circle",
  "btn-square": props.shape === "square",
}));
</script>
