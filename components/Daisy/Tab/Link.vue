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
interface Props {
  title: string;
  disabled?: boolean;
  exact?: boolean;
}

const props = defineProps<Props>();
const classes = computed(() => ({
  "tab-disabled": props.disabled,
}));
</script>
