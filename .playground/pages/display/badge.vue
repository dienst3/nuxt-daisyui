<template>
  <PageTitle>Loading</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
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
      <PropsTableEntry
        name="outline"
        description="Display the badge with an outline."
      >
        <DaisyInputToggle v-model="outline" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyBadge :size="size" :color="color" :outline="outline">
        Hello Badge!
      </DaisyBadge>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const size = ref();
const color = ref();
const outline = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    size,
    color,
    outline,
  });

  return `\
<DaisyBadge${attrs.value}>Hello Badge!</DaisyBadge>`;
});
</script>
