<template>
  <PageTitle>Tooltip</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="tip"
        description="The text to display in the tooltip."
        required
      >
        <DaisyInputText v-model="tip" placeholder="tip" size="sm" bordered />
      </PropsTableEntry>
      <PropsTableEntry
        name="open"
        description="Force the tooltip to be opened."
      >
        <DaisyInputToggle v-model="open" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="location"
        description="The location of the tooltip relative to the content."
      >
        <PropsTableCommonLocation v-model="location" />
      </PropsTableEntry>
      <PropsTableEntry
        name="color"
        description="The color of the tooltip."
        required
      >
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyTooltip :tip="tip" :open="open" :location="location" :color="color">
        Hover me!
      </DaisyTooltip>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const tip = ref("This is a tooltip!");
const open = ref(false);
const location = ref();
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    tip,
    open,
    location,
    color,
  });

  return `\
<DaisyTooltip${attrs.value}>
  Hover me!
</DaisyTooltip>`;
});
</script>
