<template>
  <div class="tabs" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface TabSettings {
  bordered: Ref<boolean>;
  lifted: Ref<boolean>;
  selected: Ref<string>;
  size: Ref<"xs" | "sm" | "md" | "lg">;
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
}));

provide<TabSettings>("daisy-tab", {
  bordered: computed(() => props.type === "bordered"),
  lifted: computed(() => props.type === "lifted"),
  size: computed(() => props.size ?? "md"),
  selected: computed(() => props.modelValue ?? ""),
  select: (name) => emit("update:modelValue", name),
});
</script>
