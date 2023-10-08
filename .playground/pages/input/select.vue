<template>
  <PageTitle>Select</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="title"
        description="The title to show next to the input."
      >
        <DaisyInputText
          v-model="title"
          placeholder="Some title"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="error"
        description="An optional error to show at the input."
      >
        <DaisyInputText
          v-model="error"
          placeholder="Oh no!"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="required"
        description="Style the input to be required."
      >
        <DaisyInputToggle v-model="required" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="disabled" description="Disable the input.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="bordered"
        description="Add a border around the input."
      >
        <DaisyInputToggle v-model="bordered" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="ghost" description="Style the input as a ghost.">
        <DaisyInputToggle v-model="ghost" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="rounded"
        description="Add additional rounding to the input."
      >
        <DaisyInputToggle v-model="rounded" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="size" description="Set the size of the input.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry name="color" description="Set the color of the input.">
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyInputSelect
        :title="title"
        :error="error"
        :required="required"
        :disabled="disabled"
        :bordered="bordered"
        :ghost="ghost"
        :rounded="rounded"
        :size="size"
        :color="color"
      >
        <option value="" disabled>Select Something</option>
        <option value="one">One</option>
        <option value="two">Two</option>
      </DaisyInputSelect>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const title = ref("Selection title");
const error = ref();
const required = ref(false);
const disabled = ref(false);
const bordered = ref(false);
const ghost = ref(false);
const rounded = ref(false);
const size = ref();
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    title,
    error,
    required,
    disabled,
    bordered,
    ghost,
    rounded,
    size,
    color,
  });

  return `\
<DaisyInputSelect${attrs.value}>
  <option value="" disabled>Select Something</option>
  <option value="one">One</option>
  <option value="two">Two</option>
</DaisyInputSelect>`;
});
</script>
