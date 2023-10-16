<template>
  <PageTitle>Swap</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="model" description="The value of the model.">
        <DaisyInputToggle v-model="model" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="effect"
        description="Add an effect to the swapping animation."
      >
        <DaisyInputSelect v-model="swapEffect" bordered size="sm">
          <option value="">None</option>
          <option value="rotate">Rotate</option>
          <option value="flip">Flip</option>
        </DaisyInputSelect>
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisySwap v-model="model" :effect="swapEffect">
        <template #on>ON</template>
        <template #off>OFF</template>
        <template #indeterminate>???</template>
      </DaisySwap>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const model = ref(false);
const swapEffect = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    "effect": swapEffect,
  });

  return `\
<DaisySwap${attrs.value}>
  <template #on>ON</template>
  <template #off>OFF</template>
  <template #indeterminate>???</template>
</DaisySwap>`;
});
</script>
