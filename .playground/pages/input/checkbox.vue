<template>
  <PageTitle>Checkbox</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="model" description="The value of the checkbox.">
        <DaisyInputSelect v-model="model" bordered size="sm">
          <option value="false">false</option>
          <option value="true">true</option>
          <option value="indeterminate">indeterminate</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry name="label" description="The label of the checkbox.">
        <DaisyInputText
          v-model="label"
          placeholder="Add a label!"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="disabled" description="Disable the checkbox.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="size" description="Set the size of the checkbox.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry
        name="color"
        description="Set the color of the checkbox."
      >
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyInputCheckbox
        v-model="model"
        :label="label"
        :disabled="disabled"
        :size="size"
        :color="color"
      />
    </Preview>
  </div>
</template>

<script setup lang="ts">
const model = ref(false);
const label = ref();
const disabled = ref(false);
const size = ref();
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    label,
    disabled,
    size,
    color,
  });

  return `\
<DaisyInputCheckbox${attrs.value} />`;
});
</script>
