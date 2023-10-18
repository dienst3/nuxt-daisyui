<template>
  <div class="avatar" :class="classes">
    <div v-if="src" class="rounded" :class="innerClasses">
      <img :src="src" />
    </div>
    <div v-else :class="innerClasses">
      <span class="text-3xl">{{ placeholder }}</span>
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
  "bg-neutral-focus": !props.color,
  "bg-primary-focus": props.color === "primary",
  "bg-secondary-focus": props.color === "secondary",
  "bg-accent-focus": props.color === "accent",
  "text-neutral-content": !props.color,
  "text-primary-content": props.color === "primary",
  "text-secondary-content": props.color === "secondary",
  "text-accent-content": props.color === "accent",
}));
</script>
