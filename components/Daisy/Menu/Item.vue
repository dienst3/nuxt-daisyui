<template>
  <li v-if="!collapsible" :class="classes">
    <NuxtLink
      :to="to"
      :target="target"
      :rel="rel"
      :class="classes"
      :disabled="disabled ? 'disabled' : undefined"
      :style="disabled ? 'pointer-events: none' : ''"
      :active-class="!exact ? 'active' : ''"
      exact-active-class="active"
    >
      <slot />
    </NuxtLink>
    <template v-if="$slots.children">
      <ul>
        <slot name="children" />
      </ul>
    </template>
  </li>
  <li v-else :class="classes">
    <details :open="open">
      <summary><slot /></summary>
      <template v-if="$slots.children">
        <ul>
          <slot name="children" />
        </ul>
      </template>
    </details>
  </li>
</template>

<script lang="ts" setup>
interface Props {
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
