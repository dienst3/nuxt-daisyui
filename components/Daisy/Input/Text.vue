<template>
  <div class="form-control mb-4">
    <label v-if="title" class="label">
      <span class="label-text text-base font-bold">{{ title }}</span>
      <span v-if="required" class="label-text-alt text-error text-lg">*</span>
    </label>
    <input
      class="input"
      :class="classes"
      :title="title"
      :type="type"
      :maxlength="maxLength"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :value="modelValue"
      :autofocus="autofocus"
      :autocomplete="autocomplete ? 'on' : 'off'"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      @invalid.prevent="(e) => (validationError = (e.target as HTMLTextAreaElement).validationMessage)"
      @focus="() => (validationError = '')"
    />
    <label v-if="error || validationError" class="label">
      <span class="label-text-alt text-error font-bold">{{
        error || validationError
      }}</span>
    </label>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  placeholder: string;
  type?: "text" | "email" | "password";
  modelValue?: string;
  title?: string;
  error?: string;
  maxLength?: number;
  size?: "xs" | "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "info"
    | "success"
    | "warning"
    | "error";
  bordered?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  required?: boolean;
  autofocus?: boolean;
  autocomplete?: boolean;
}>();
defineEmits<{
  (eventName: "update:modelValue", value: string): void;
}>();

const validationError = ref("");

const classes = computed(() => ({
  "input-xs": props.size === "xs",
  "input-sm": props.size === "sm",
  "input-md": props.size === "md",
  "input-lg": props.size === "lg",
  "input-primary": props.color === "primary",
  "input-secondary": props.color === "secondary",
  "input-accent": props.color === "accent",
  "input-info": props.color === "info",
  "input-success": props.color === "success",
  "input-warning": props.color === "warning",
  "input-error":
    props.color === "error" || props.error || validationError.value !== "",
  "input-bordered": props.bordered,
  "input-ghost": props.ghost,
}));
</script>
