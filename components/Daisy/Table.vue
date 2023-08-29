<template>
  <div class="overflow-x-auto" :class="wrapperClasses">
    <table class="table w-full" :class="classes">
      <thead>
        <tr>
          <slot name="head" />
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
      <tfoot>
        <tr>
          <slot name="footer" />
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  zebra?: boolean;
  bordered?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "table-zebra": props.zebra,
}));

const wrapperClasses = computed(() => ({
  "border": props.bordered,
  "border-base-200": props.bordered,
  "rounded-box": props.bordered,
}));
</script>
