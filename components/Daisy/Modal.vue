<template>
  <dialog
    ref="dialog"
    class="modal"
    :class="classes"
    @cancel="cancel"
    @close="visible = false"
  >
    <div v-if="visible" class="modal-box" :class="classesBox">
      <form v-if="!uncloseable" method="dialog">
        <DaisyButton
          :title="closeTitle || 'Close dialog'"
          size="sm"
          shape="circle"
          ghost
          class="absolute right-4 top-4"
        >
          <Icon name="material-symbols:close" size="24px" />
        </DaisyButton>
      </form>
      <h3 class="font-bold text-lg">{{ title }}</h3>
      <slot />
      <div v-if="$slots.actions" class="modal-action">
        <form method="dialog">
          <slot name="actions" />
        </form>
      </div>
    </div>
    <form v-if="!uncloseable" method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
const dialog = ref<HTMLDialogElement>();
const visible = ref(false);

const props = defineProps<{
  title: string;
  location?: "top" | "middle" | "bottom";
  responsive?: boolean;
  uncloseable?: boolean;
  closeTitle?: string;
  width?: "large" | "huge";
}>();

const cancel = (e: Event) => {
  if (props.uncloseable) {
    e.preventDefault();
  }
};

const classes = computed(() => ({
  "modal-top": props.location === "top",
  "modal-middle": props.location === "middle",
  "modal-bottom": props.location === "bottom" || props.responsive,
  "sm:modal-middle": props.responsive,
}));

const classesBox = computed(() => ({
  "w-11/12": props.width === "large" || props.width === "huge",
  "max-w-4xl": props.width === "large",
  "max-w-7xl": props.width === "huge",
}));

const show = () => {
  dialog.value?.showModal();
  visible.value = true;
};

defineExpose({
  show,
  close: (returnVal?: string): void => dialog.value?.close(returnVal),
  visible,
});
</script>
