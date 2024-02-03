<template>
  <div class="tabs" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface TabSettings {
  selected: Ref<string>;
  select: (name: string) => void;
}

const props = defineProps<{
  modelValue?: string;
  type?: "boxed" | "bordered" | "lifted";
  size?: "xs" | "sm" | "md" | "lg";
}>();
const emit = defineEmits<{
  (eventName: "update:modelValue", value: string): void;
}>();

const classes = computed(() => ({
  "tabs-boxed": props.type === "boxed",
  "tabs-bordered": props.type === "bordered",
  "tabs-lifted": props.type === "lifted",
  "tabs-lg": props.size === "lg",
  "tabs-md": props.size === "md",
  "tabs-sm": props.size === "sm",
  "tabs-xs": props.size === "xs",
}));

provide<TabSettings>("daisy-tab", {
  selected: computed(() => props.modelValue ?? ""),
  select: (name) => emit("update:modelValue", name),
});
</script>
