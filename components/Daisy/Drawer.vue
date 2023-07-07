<template>
  <div class="drawer" :class="classes">
    <input
      :checked="modelValue"
      type="checkbox"
      class="drawer-toggle"
      @change="toggle"
    />
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side z-20">
      <label class="drawer-overlay" @click="toggle"></label>
      <slot name="side" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: boolean;
  open?: boolean;
  end?: boolean;
  responsive?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (eventName: "update:modelValue", value: boolean): void;
}>();

const toggle = () => {
  emit("update:modelValue", props.modelValue === false);
};

const classes = computed(() => ({
  "drawer-end": props.end === true,
  "drawer-open": props.open === true,
  "lg:drawer-open": props.responsive === true,
}));
</script>
