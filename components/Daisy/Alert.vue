<template>
  <div v-if="content && !hidden" class="alert shadow-lg my-3" :class="classes">
    <div>
      <Icon :name="icon" size="24px" />
      <span>{{ content }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  type: "info" | "success" | "warning" | "error";
  hidden?: boolean;
  content?: string;
}

const props = defineProps<Props>();

const icon = computed(() => {
  switch (props.type) {
    case "info":
      return "material-symbols:info-outline";
    case "success":
      return "material-symbols:check-circle-outline";
    case "warning":
      return "material-symbols:warning-outline";
    case "error":
      return "material-symbols:cancel-outline";
  }
});

const classes = computed(() => ({
  "alert-info": props.type === "info",
  "alert-success": props.type === "success",
  "alert-warning": props.type === "warning",
  "alert-error": props.type === "error",
}));
</script>
