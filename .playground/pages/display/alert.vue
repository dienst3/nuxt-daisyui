<template>
  <PageTitle>Alert</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="type"
        description="The type of the alert."
        required
      >
        <DaisyInputSelect v-model="type" bordered size="sm">
          <option value="info">Info</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="hidden"
        description="Force the alert to be hidden."
      >
        <DaisyInputToggle v-model="hidden" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="content"
        description="The text to display in the alert."
      >
        <DaisyInputText
          v-model="content"
          placeholder="This is an alert!"
          size="sm"
          bordered
        />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyAlert :type="type" :hidden="hidden" :content="content" />
    </Preview>
  </div>
</template>

<script setup lang="ts">
const type = ref<"info" | "success" | "warning" | "error">("info");
const hidden = ref(false);
const content = ref("This is an alert!");

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    type,
    hidden,
    content,
  });

  return `\
<DaisyAlert${attrs.value} />`;
});
</script>
