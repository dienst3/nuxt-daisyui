<template>
  <PageTitle>Collapse</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="title"
        description="The title displayed on the element."
        required
      >
        <DaisyInputText
          v-model="title"
          placeholder="This is the title"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="toggle"
        description="Make the collapse toggle instead of temporarely open."
      >
        <DaisyInputToggle v-model="toggle" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="indicator"
        description="Show an indicator of the state of the collapse."
      >
        <DaisyInputToggle v-model="indicator" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="state"
        description="Force a state of the collapse."
        required
      >
        <DaisyInputSelect v-model="state" bordered size="sm">
          <option value="">Default</option>
          <option value="opened">Opened</option>
          <option value="closed">Closed</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="bordered"
        description="Show a border around the collapse."
      >
        <DaisyInputToggle v-model="bordered" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="background"
        description="Show a background on the collapse."
      >
        <DaisyInputToggle v-model="background" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="rounded"
        description="Show the collapse as rounded."
      >
        <DaisyInputToggle v-model="rounded" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyCollapse
        :title="title"
        :toggle="toggle"
        :indicator="indicator"
        :state="state"
        :bordered="bordered"
        :background="background"
        :rounded="rounded"
      >
        <span>This is inside the collapsible space.</span>
      </DaisyCollapse>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const title = ref("This is the title");
const toggle = ref(false);
const indicator = ref(false);
const state = ref();
const bordered = ref(false);
const background = ref(false);
const rounded = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    title,
    toggle,
    indicator,
    state,
    bordered,
    background,
    rounded,
  });

  return `\
<DaisyCollapse${attrs.value}>
  <span>This is inside the collapsible space.</span>
</DaisyCollapse>`;
});
</script>
