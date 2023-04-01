<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span v-if="label" class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        class="toggle"
        :class="classes"
        :checked="modelValue"
        :disabled="disabled"
        @change="
          $emit(
            'update:modelValue',
            ($event.target as HTMLInputElement).checked,
          )
        "
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue?: boolean;
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
defineEmits<{
  (eventName: "update:modelValue", value: boolean): void;
}>();

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
