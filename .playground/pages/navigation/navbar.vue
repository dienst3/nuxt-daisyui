<template>
  <PageTitle>NavBar</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="color" description="The color of the NavBar.">
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyNavBar :color="color">
        <template #start>Start</template>
        <div>Middle</div>
        <template #end>End</template>
      </DaisyNavBar>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    color,
  });

  return `\
<DaisyNavBar${attrs.value}>
  <template #start>Start</template>
  <div>Middle</div>
  <template #end>End</template>
</DaisyNavBar>
`;
});
</script>
