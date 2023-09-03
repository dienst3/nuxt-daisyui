<template>
  <PageTitle>Dropdown</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="label"
        description="The label to show before the dropdown."
        required
      >
        <DaisyInputText
          v-model="label"
          placeholder="Some label"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="end"
        description="Align to the end of the opening."
      >
        <DaisyInputToggle v-model="end" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="direction"
        description="Set the direction of the dropdown."
      >
        <PropsTableCommonLocation v-model="direction" />
      </PropsTableEntry>
      <PropsTableEntry name="hover" description="Open the dropdown on hover.">
        <DaisyInputToggle v-model="hover" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="open" description="Force the dropdown to be open.">
        <DaisyInputToggle v-model="open" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyDropdown
        :label="label"
        :end="end"
        :direction="direction"
        :hover="hover"
        :open="open"
      >
        <DaisyMenu class="p-2 shadow bg-base-100 rounded-box w-52">
          <DaisyMenuItem>Item 1</DaisyMenuItem>
          <DaisyMenuItem>Item 2</DaisyMenuItem>
        </DaisyMenu>
      </DaisyDropdown>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const label = ref("Click me!");
const end = ref(false);
const direction = ref();
const hover = ref(false);
const open = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({ label, end, direction, hover, open });

  return `\
<DaisyDropdown${attrs.value}>
  <DaisyMenu class="p-2 shadow bg-base-100 rounded-box w-52">
    <DaisyMenuItem>Item 1</DaisyMenuItem>
    <DaisyMenuItem>Item 2</DaisyMenuItem>
  </DaisyMenu>
</DaisyDropdown>`;
});
</script>
