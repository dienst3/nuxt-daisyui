<template>
  <a class="tab" :class="classes" @click.prevent="select">
    {{ title ?? name }}
  </a>
</template>

<script lang="ts" setup>
import { TabSettings } from "./Index.vue";

interface Props {
  name: string;
  title?: string;
  disabled?: boolean;
}

const props = defineProps<Props>();
const settings = inject<TabSettings>("daisy-tab");

const select = () => {
  if (props.disabled) {
    return;
  }

  settings?.select(props.name);
};

const classes = computed(() => ({
  "tab-bordered": settings?.bordered.value,
  "tab-lifted": settings?.lifted.value,
  "tab-active": settings?.selected.value === props.name,
  "tab-disabled": props.disabled,
  "tab-xs": settings?.size.value === "xs",
  "tab-sm": settings?.size.value === "sm",
  "tab-md": settings?.size.value === "md",
  "tab-lg": settings?.size.value === "lg",
}));
</script>
