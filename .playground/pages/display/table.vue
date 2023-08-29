<template>
  <PageTitle>Table</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="zebra" description="Style the table as a zebra.">
        <DaisyInputToggle v-model="zebra" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="bordered" description="Make the table bordered.">
        <DaisyInputToggle v-model="bordered" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyTable :zebra="zebra" :bordered="bordered">
        <template #head>
          <th class="w-32">#</th>
          <th class="w-2/5">Name</th>
          <th>Description</th>
        </template>
        <tr class="hover">
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr class="hover">
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
      </DaisyTable>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const zebra = ref(false);
const bordered = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    zebra,
    bordered,
  });

  return `\
<DaisyTooltip${attrs.value}>
  <template #head>
    <th class="w-32">#</th>
    <th class="w-2/5">Name</th>
    <th>Description</th>
  </template>
  <tr class="hover">
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr class="hover">
    <td>4</td>
    <td>5</td>
    <td>6</td>
  </tr>
</DaisyTooltip>`;
});
</script>
