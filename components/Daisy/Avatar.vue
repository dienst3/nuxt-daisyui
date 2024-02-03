<template>
  <div class="avatar" :class="classes">
    <div v-if="src" :class="innerClasses">
      <img :src="src" />
    </div>
    <div v-else :class="innerClasses">
      <span>{{ placeholder }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src?: string;
  placeholder: string;
  status?: "online" | "offline";
  color?: "primary" | "secondary" | "accent";
  round?: boolean;
  width?: string;
}>();

const classes = computed(() => ({
  online: props.status === "online",
  offline: props.status === "offline",
  placeholder: !props.src,
}));

const innerClasses = computed(() => ({
  "rounded-xl": props.round !== true,
  "rounded-full": props.round === true,
  [`w-${props.width || "24"}`]: true,
  "bg-[color-mix(in_oklab,oklch(var(--n)),black_7%)]": !props.color,
  "bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]":
    props.color === "primary",
  "bg-[color-mix(in_oklab,oklch(var(--s)),black_7%)]":
    props.color === "secondary",
  "bg-[color-mix(in_oklab,oklch(var(--a)),black_7%)]": props.color === "accent",
  "text-neutral-content": !props.color,
  "text-primary-content": props.color === "primary",
  "text-secondary-content": props.color === "secondary",
  "text-accent-content": props.color === "accent",
}));
</script>
