<template>
  <PageTitle>Card</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="compact" description="Make the card more compact.">
        <DaisyInputToggle v-model="compact" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="bordered"
        description="Add a border around the card."
      >
        <DaisyInputToggle v-model="bordered" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="responsive"
        description="Put the image on the side on larger screens."
      >
        <DaisyInputToggle v-model="responsive" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="img-src" description="Source of the image.">
        <DaisyInputText
          v-model="imgSrc"
          placeholder="https://daisyui.com/images/stock/photo-1481026469463-66327c86e544.jpg"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="img-alt"
        description="Alternative title for the image."
      >
        <DaisyInputText
          v-model="imgAlt"
          placeholder="Some image"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="img-end"
        description="Put the image at the end of the card."
      >
        <DaisyInputToggle v-model="imgEnd" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="img-full"
        description="Use the image as the background of the card."
      >
        <DaisyInputToggle v-model="imgFull" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="img-side"
        description="Put the image on the side of the card."
      >
        <DaisyInputToggle v-model="imgSide" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyCard
        :compact="compact"
        :bordered="bordered"
        :responsive="responsive"
        :img-src="imgSrc"
        :img-alt="imgAlt"
        :img-end="imgEnd"
        :img-full="imgFull"
        :img-side="imgSide"
      >
        <template #title>This is the title</template>
        This is a card!
        <template #actions>
          <DaisyButton title="Button">Button</DaisyButton>
        </template>
      </DaisyCard>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const compact = ref(false);
const bordered = ref(false);
const responsive = ref(false);
const imgSrc = ref(
  "https://daisyui.com/images/stock/photo-1481026469463-66327c86e544.jpg",
);
const imgAlt = ref("Some image.");
const imgEnd = ref(false);
const imgFull = ref(false);
const imgSide = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    compact,
    bordered,
    responsive,
    "img-src": imgSrc,
    "img-alt": imgAlt,
    "img-end": imgEnd,
    "img-full": imgFull,
    "img-side": imgSide,
  });

  return `\
<DaisyCard${attrs.value}>
  <template #title>This is the title</template>
  This is a card!
  <template #actions>
    <DaisyButton title="Button">Button</DaisyButton>
  </template>
</DaisyCard>`;
});
</script>
