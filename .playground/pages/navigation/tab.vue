<template>
  <PageTitle>Tab</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="type" description="The type of tabs to use.">
        <DaisyInputSelect v-model="type" bordered size="sm">
          <option value="">Default</option>
          <option value="bordered">Bordered</option>
          <option value="boxed">Boxed</option>
          <option value="lifted">Lifted</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry name="size" description="Set the size of the tabs.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyTab v-model="model" :type="type" :size="size">
        <DaisyTabEntry name="One" title="Tab One" />
        <DaisyTabEntry name="Two" title="Tab Two" disabled />
        <DaisyTabEntry name="Three" title="Tab Three" />
        <DaisyTabLink
          to="https://dienst3.nl"
          title="Dienst 3"
          target="_blank"
        />
      </DaisyTab>
      <span>Current tab: {{ model }}</span>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const model = ref("One");
const type = ref();
const size = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    type,
    size,
  });

  return `\
<DaisyTab${attrs.value}>
  <DaisyTabEntry name="One" title="Tab One" />
  <DaisyTabEntry name="Two" title="Tab Two" disabled />
  <DaisyTabEntry name="Three" title="Tab Three" />
  <DaisyTabLink
    to="https://dienst3.nl"
    title="Dienst 3"
    target="_blank"
  />
</DaisyTab>`;
});
</script>
