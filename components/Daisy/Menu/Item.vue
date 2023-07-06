<template>
  <li v-if="!collapsible" :class="classes">
    <NuxtLink
      :to="to"
      :target="target"
      :rel="rel"
      :disabled="disabled ? 'disabled' : undefined"
      :style="disabled ? 'pointer-events: none' : ''"
      :active-class="!exact ? 'active' : ''"
      exact-active-class="active"
    >
      {{ title }}
    </NuxtLink>
    <template v-if="$slots.default">
      <ul>
        <slot />
      </ul>
    </template>
  </li>
  <li v-else :class="classes">
    <details :open="open">
      <summary>{{ title }}</summary>
      <template v-if="$slots.default">
        <ul>
          <slot />
        </ul>
      </template>
    </details>
  </li>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  collapsible?: boolean;
  disabled?: boolean;
  active?: boolean;
  focus?: boolean;
  open?: boolean;
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
  rel?: string;
  exact?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  disabled: props.disabled === true,
  active: props.active === true,
  focus: props.focus === true,
}));
</script>
