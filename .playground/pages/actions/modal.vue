<template>
  <PageTitle>Modal</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="title"
        description="The title of the modal to display."
        required
      >
        <DaisyInputText
          v-model="title"
          placeholder="Hello modal!"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="location"
        description="Where the modal should be placed on the screen."
      >
        <DaisyInputSelect v-model="location" bordered size="sm">
          <option value="">Unset</option>
          <option value="top">Top</option>
          <option value="middle">Middle</option>
          <option value="bottom">Bottom</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="responsive"
        description="Make the modal responsive."
      >
        <DaisyInputToggle v-model="responsive" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="uncloseable"
        description="Mark the modal as not closeable."
      >
        <DaisyInputToggle v-model="uncloseable" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="close-title"
        description="The title of the close button."
      >
        <DaisyInputText
          v-model="closeTitle"
          placeholder="Dismiss dialog"
          size="sm"
          bordered
        />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyModal
        ref="modal"
        :title="title"
        :location="location"
        :responsive="responsive"
        :uncloseable="uncloseable"
        :close-title="closeTitle"
      >
        <p>This is the modal content!</p>
        <template #actions>
          <button class="btn">Close</button>
        </template>
      </DaisyModal>
      <p class="my-2">
        <span class="font-bold">Visible:</span>
        {{ modal?.visible ? "Yes" : "No" }}
      </p>
      <DaisyButton title="Open modal" color="primary" @click="modal?.show()">
        Open modal
      </DaisyButton>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const modal = ref();
const title = ref("Hello modal!");
const location = ref();
const responsive = ref(false);
const uncloseable = ref(false);
const closeTitle = ref("Dismiss dialog");

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "ref": ref("modal"),
    title,
    location,
    responsive,
    uncloseable,
    "close-title": closeTitle,
  });

  return `\
<DaisyModal${attrs.value}>
  <p>This is the modal content!</p>
  <template #actions>
    <button class="btn">Close</button>
  </template>
</DaisyModal>

<DaisyButton title="Open modal" @click="modal?.show()">
  Open modal
</DaisyButton>`;
});
</script>
