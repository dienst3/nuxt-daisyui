<template>
  <div class="dropdown" :class="classes">
    <label tabindex="0">
      <slot name="label" />
    </label>
    <div tabindex="0" class="dropdown-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  end?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
  hover?: boolean;
  open?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "dropdown-end": props.end,
  "dropdown-top": props.direction === "top",
  "dropdown-bottom": props.direction === "bottom",
  "dropdown-left": props.direction === "left",
  "dropdown-right": props.direction === "right",
  "dropdown-hover": props.hover,
  "dropdown-open": props.open,
}));
</script>
