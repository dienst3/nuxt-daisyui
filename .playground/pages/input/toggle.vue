<template>
  <PageTitle>Toggle</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="model" description="The value of the toggle.">
        <DaisyInputSelect v-model="model" bordered size="sm">
          <option value="false">false</option>
          <option value="true">true</option>
          <option value="indeterminate">indeterminate</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry name="label" description="The label of the toggle.">
        <DaisyInputText
          v-model="label"
          placeholder="Add a label!"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="disabled" description="Disable the toggle.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="size" description="Set the size of the toggle.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry name="color" description="Set the color of the toggle.">
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyInputToggle
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
const model = ref<boolean | "indeterminate">("indeterminate");
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
<DaisyInputToggle${attrs.value} />`;
});
</script>
