<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span v-if="label" class="label-text">{{ label }}</span>
      <input
        type="checkbox"
        class="checkbox"
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
  "checkbox-xs": props.size === "xs",
  "checkbox-sm": props.size === "sm",
  "checkbox-md": props.size === "md",
  "checkbox-lg": props.size === "lg",
  "checkbox-primary": props.color === "primary",
  "checkbox-secondary": props.color === "secondary",
  "checkbox-accent": props.color === "accent",
  "checkbox-info": props.color === "info",
  "checkbox-success": props.color === "success",
  "checkbox-warning": props.color === "warning",
  "checkbox-error": props.color === "error",
}));
</script>
