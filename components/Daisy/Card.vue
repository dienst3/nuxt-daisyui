<template>
  <div class="card w-96 bg-base-100 shadow-xl" :class="classes">
    <figure v-if="imgSrc && !imgEnd">
      <img :src="imgSrc" :alt="imgAlt" />
    </figure>
    <div class="card-body">
      <h2 v-if="$slots.title" class="card-title">
        <slot name="title" />
      </h2>
      <slot />
      <div v-if="$slots.actions" class="card-actions">
        <slot name="actions" />
      </div>
    </div>
    <figure v-if="imgSrc && imgEnd">
      <img :src="imgSrc" :alt="imgAlt" />
    </figure>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  compact?: boolean;
  bordered?: boolean;
  responsive?: boolean;
  imgSrc?: string;
  imgAlt?: string;
  imgEnd?: boolean;
  imgFull?: boolean;
  imgSide?: boolean;
}

const props = defineProps<Props>();

const classes = computed(() => ({
  "card-compact": props.compact,
  "card-bordered": props.bordered,
  "image-full": props.imgFull,
  "card-side": props.imgSide,
  "lg:card-side": props.responsive,
}));
</script>
