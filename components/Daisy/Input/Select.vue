<template>
  <div class="form-control">
    <label v-if="title" class="label">
      <span class="label-text text-base font-bold">{{ title }}</span>
      <span v-if="required" class="label-text-alt text-error text-lg">*</span>
    </label>
    <select
      class="select"
      :class="classes"
      :disabled="disabled"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
    >
      <slot />
    </select>
    <label v-if="error" class="label">
      <span class="label-text-alt text-error font-bold">{{ error }}</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: unknown;
  title?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  bordered?: boolean;
  ghost?: boolean;
  rounded?: boolean;
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
defineEmits<{
  (eventName: "update:modelValue", value: unknown): void;
}>();

const classes = computed(() => ({
  "select-xs": props.size === "xs",
  "select-sm": props.size === "sm",
  "select-md": props.size === "md",
  "select-lg": props.size === "lg",
  "rounded-box": props.rounded,
  "select-bordered": props.bordered,
  "select-ghost": props.ghost,
  "select-primary": props.color === "primary",
  "select-secondary": props.color === "secondary",
  "select-accent": props.color === "accent",
  "select-info": props.color === "info",
  "select-success": props.color === "success",
  "select-warning": props.color === "warning",
  "select-error": props.color === "error" || props.error,
}));
</script>
