<template>
  <PageTitle>Steps</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <div>
      <PropsTable>
        <PropsTableEntry
          name="vertical"
          description="Show the steps vertically"
        >
          <DaisyInputToggle v-model="vertical" size="sm" />
        </PropsTableEntry>
      </PropsTable>
      <PropsTable class="mt-4">
        <PropsTableEntry
          name="color"
          description="Set the color of the second item."
        >
          <PropsTableCommonColor v-model="color" />
        </PropsTableEntry>
        <PropsTableEntry
          name="content"
          description="Set the content of the second item."
        >
          <DaisyInputText
            v-model="content"
            placeholder="?"
            size="sm"
            bordered
          />
        </PropsTableEntry>
      </PropsTable>
    </div>
    <Preview :code="previewCode">
      <DaisySteps :vertical="vertical" class="w-full">
        <DaisyStepsItem>Step One</DaisyStepsItem>
        <DaisyStepsItem :color="color" :content="content">
          Step Two
        </DaisyStepsItem>
        <DaisyStepsItem>Step Three</DaisyStepsItem>
      </DaisySteps>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const vertical = ref(false);
const color = ref();
const content = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    vertical,
  });

  const attrsSecond = useComponentAttrs({
    color,
    content,
  });

  return `\
<DaisySteps${attrs.value}>
  <DaisyStepsItem @click="() => clicked()">Step One</DaisyStepsItem>
  <DaisyStepsItem${attrsSecond.value}>Step Two</DaisyStepsItem>
  <DaisyStepsItem>Step Three</DaisyStepsItem>
</DaisySteps>`;
});
</script>
