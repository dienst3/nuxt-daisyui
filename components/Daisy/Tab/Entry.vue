<template>
  <a class="tab" :class="classes" @click.prevent="select">
    {{ title ?? name }}
  </a>
</template>

<script lang="ts" setup>
import type { TabSettings } from "./Index.vue";

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
  "tab-active": settings?.selected.value === props.name,
  "tab-disabled": props.disabled,
}));
</script>
