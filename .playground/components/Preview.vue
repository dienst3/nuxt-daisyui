<template>
  <DaisyTab v-model="activeTab" lifted class="-mb-px relative z-10">
    <DaisyTabEntry name="preview" title="Preview" />
    <DaisyTabEntry v-if="$slots.vue" name="vue" title="Vue" />
  </DaisyTab>
  <div class="relative bg-base-300 rounded-b-box rounded-tr-box">
    <div
      class="flex preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box min-h-[8rem] w-4xl border p-4 not-prose"
    >
      <slot v-if="activeTab === 'preview'" />
      <slot v-if="activeTab === 'vue'" name="vue" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeTab = ref<"preview" | "vue">("preview");
</script>

<style scoped>
.preview {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(var(--b1)),
    hsl(var(--b1)) 13px,
    hsl(var(--b2)) 13px,
    hsl(var(--b2)) 14px
  );
}
</style>
