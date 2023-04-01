<template>
  <div :tabindex="!toggle ? 0 : undefined" class="collapse" :class="classes">
    <input v-if="toggle" type="checkbox" />
    <div class="collapse-title text-xl font-medium">
      {{ title }}
    </div>
    <div class="collapse-content bg-base-100 text-base-content">
      <span class="block h-2 w-full" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  toggle?: boolean;
  indicator?: boolean;
  forceOpen?: boolean;
  forceClose?: boolean;
  bordered?: boolean;
  background?: boolean;
  rounded?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "collapse-open": props.forceOpen,
  "collapse-close": props.forceClose,
  "collapse-plus": props.indicator && props.toggle,
  "collapse-arrow": props.indicator && !props.toggle,
  "border": props.bordered,
  "border-primary-focus": props.bordered,
  "bg-primary": props.background,
  "text-primary-content": props.background,
  "rounded-box": props.rounded,
}));
</script>
