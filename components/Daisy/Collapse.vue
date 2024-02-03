<template>
  <div
    :tabindex="!toggle ? 0 : undefined"
    class="collapse my-4"
    :class="classes"
  >
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
  state?: "opened" | "closed";
  bordered?: boolean;
  background?: boolean;
  rounded?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "collapse-open": props.state === "opened",
  "collapse-close": props.state === "closed",
  "collapse-plus": props.indicator && props.toggle,
  "collapse-arrow": props.indicator && !props.toggle,
  "border": props.bordered,
  "border-[color-mix(in_oklab,oklch(var(--p)),black_7%)]": props.bordered,
  "bg-primary": props.background,
  "text-primary-content": props.background,
  "rounded-box": props.rounded,
}));
</script>
