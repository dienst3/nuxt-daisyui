<template>
  <label class="swap" :class="classes">
    <input
      type="checkbox"
      :checked="modelValue && modelValue !== 'indeterminate'"
      :indeterminate="modelValue === 'indeterminate'"
      @change="toggle"
    />
    <div v-if="$slots.on" class="swap-on">
      <slot name="on">ON</slot>
    </div>
    <div v-if="$slots.off" class="swap-off">
      <slot name="off">OFF</slot>
    </div>
    <div v-if="$slots.indeterminate" class="swap-indeterminate">
      <slot name="indeterminate" />
    </div>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean | "indeterminate";
  effect?: "rotate" | "flip";
}>();

const emit = defineEmits<{
  (eventName: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  emit("update:modelValue", props.modelValue === false);
};

const classes = computed(() => ({
  "swap-rotate": props.effect === "rotate",
  "swap-flip": props.effect === "flip",
}));
</script>
