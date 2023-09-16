<template>
  <PageTitle>Loading</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="type"
        description="The type of the loading icon."
        required
      >
        <DaisyInputSelect v-model="type" bordered size="sm">
          <option value="spinner">Spinner</option>
          <option value="dots">Dots</option>
          <option value="ring">Ring</option>
          <option value="ball">Ball</option>
          <option value="bars">Bars</option>
          <option value="infinity">Infinity</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="size"
        description="The size of the loading icon."
        required
      >
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry
        name="color"
        description="The color of the loading icon."
        required
      >
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyLoading :type="type" :size="size" :color="color" />
    </Preview>
  </div>
</template>

<script setup lang="ts">
const type = ref<"spinner" | "dots" | "ring" | "ball" | "bars" | "infinity">(
  "spinner",
);
const size = ref();
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    type,
    size,
    color,
  });

  return `\
<DaisyLoading${attrs.value} />`;
});
</script>
