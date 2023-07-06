<template>
  <div class="tabs py-2" :class="classes">
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
  boxed?: boolean;
  bordered?: boolean;
  lifted?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}>();
const emit = defineEmits<{
  (eventName: "update:modelValue", value: string): void;
}>();

const classes = computed(() => ({
  "tabs-boxed": props.boxed,
}));

provide<TabSettings>("daisy-tab", {
  bordered: computed(() => props.bordered ?? false),
  lifted: computed(() => props.lifted ?? false),
  size: computed(() => props.size ?? "md"),
  selected: computed(() => props.modelValue ?? ""),
  select: (name) => emit("update:modelValue", name),
});
</script>
