<template>
  <NuxtLink
    class="tab"
    :class="classes"
    :active-class="exact ? '' : 'tab-active'"
    :exact-active-class="exact ? 'tab-active' : ''"
    :disabled="disabled ? 'disabled' : undefined"
  >
    {{ title }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { TabsSettings } from "./Index.vue";

interface Props {
  title: string;
  disabled?: boolean;
  exact?: boolean;
}

const props = defineProps<Props>();
const settings = inject<TabsSettings>("daisy-tabs");

const classes = computed(() => ({
  "tab-bordered": settings?.bordered.value,
  "tab-lifted": settings?.lifted.value,
  "tab-disabled": props.disabled,
  "tab-xs": settings?.size.value === "xs",
  "tab-sm": settings?.size.value === "sm",
  "tab-md": settings?.size.value === "md",
  "tab-lg": settings?.size.value === "lg",
}));
</script>
