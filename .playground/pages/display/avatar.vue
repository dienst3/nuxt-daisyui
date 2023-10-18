<template>
  <PageTitle>Avatar</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="src" description="Source of the image.">
        <DaisyInputText
          v-model="src"
          placeholder="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="placeholder"
        description="Placeholder text to use."
        required
      >
        <DaisyInputText
          v-model="placeholder"
          placeholder="JD"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="status"
        description="Add a status indicator to the avatar."
      >
        <DaisyInputSelect v-model="status" bordered size="sm">
          <option value="">None</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry name="round" description="Make the avatar round.">
        <DaisyInputToggle v-model="round" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="width" description="Tailwind width of the avatar.">
        <DaisyInputText v-model="width" placeholder="24" size="sm" bordered />
      </PropsTableEntry>
      <PropsTableEntry
        name="color"
        description="Set the color when using a placeholder."
      >
        <PropsTableCommonColor v-model="color" simplified />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyAvatar
        :src="src"
        :placeholder="placeholder"
        :status="status"
        :round="round"
        :width="width"
        :color="color"
      />
    </Preview>
  </div>
</template>

<script setup lang="ts">
const src = ref(
  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
);
const placeholder = ref("JD");
const status = ref();
const round = ref(false);
const width = ref("24");
const color = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    src,
    placeholder,
    status,
    round,
    width,
    color,
  });

  return `\
<DaisyAvatar${attrs.value} />`;
});
</script>
