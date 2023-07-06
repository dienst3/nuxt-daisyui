<template>
  <ul class="menu not-prose" :class="classes">
    <li v-if="title" class="menu-title">{{ title }}</li>
    <slot />
  </ul>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  size?: "xs" | "sm" | "md" | "lg";
  horizontal?: boolean;
  responsive?: boolean;
  rounded?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "menu-xs": props.size === "xs",
  "menu-sm": props.size === "sm",
  "menu-md": props.size === "md",
  "menu-lg": props.size === "lg",
  "menu-horizontal": props.horizontal === true,
  "lg:menu-horizontal": props.responsive === true,
  "rounded-box": props.rounded === true,
}));
</script>
