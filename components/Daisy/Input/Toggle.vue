<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span v-if="label" class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        class="toggle"
        :class="classes"
        :checked="modelValue && modelValue !== 'indeterminate'"
        :disabled="disabled"
        :indeterminate="modelValue === 'indeterminate'"
        @change="toggle"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean | "indeterminate";
  label?: string;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
}>();
const emit = defineEmits<{
  (eventName: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  emit("update:modelValue", props.modelValue === false);
};

const classes = computed(() => ({
  "toggle-xs": props.size === "xs",
  "toggle-sm": props.size === "sm",
  "toggle-md": props.size === "md",
  "toggle-lg": props.size === "lg",
  "toggle-primary": props.color === "primary",
  "toggle-secondary": props.color === "secondary",
  "toggle-accent": props.color === "accent",
  "toggle-info": props.color === "info",
  "toggle-success": props.color === "success",
  "toggle-warning": props.color === "warning",
  "toggle-error": props.color === "error",
}));
</script>
