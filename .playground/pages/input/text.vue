<template>
  <PageTitle>Text</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="placeholder"
        description="A placeholder to show when no input is given."
        required
      >
        <DaisyInputText
          v-model="placeholder"
          placeholder="Sample text"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="type" description="The type of the input.">
        <DaisyInputSelect v-model="type" bordered size="sm">
          <option value="">Default</option>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
        </DaisyInputSelect>
      </PropsTableEntry>
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
        name="maxLength"
        description="The maximum length of the input."
      >
        <DaisyInputText
          v-model="maxLength"
          placeholder="40"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="size" description="Set the size of the input.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry name="color" description="Set the color of the input.">
        <PropsTableCommonColor v-model="color" />
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
      <PropsTableEntry name="disabled" description="Disable the input.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="required"
        description="Style the input to be required."
      >
        <DaisyInputToggle v-model="required" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="autofocus"
        description="Automatically focus the input on load."
      >
        <DaisyInputToggle v-model="autofocus" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="autocomplete"
        description="Enable autocomplete for the input."
      >
        <DaisyInputToggle v-model="autocomplete" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyInputText
        :placeholder="placeholder"
        :type="type"
        :title="title"
        :error="error"
        :max-length="maxLength"
        :size="size"
        :color="color"
        :bordered="bordered"
        :ghost="ghost"
        :disabled="disabled"
        :required="required"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
      />
    </Preview>
  </div>
</template>

<script setup lang="ts">
const placeholder = ref("Some demo text");
const type = ref();
const title = ref("Selection title");
const error = ref();
const maxLength = ref();
const size = ref();
const color = ref();
const bordered = ref(false);
const ghost = ref(false);
const disabled = ref(false);
const required = ref(false);
const autofocus = ref(false);
const autocomplete = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    placeholder,
    type,
    title,
    error,
    maxLength,
    size,
    color,
    bordered,
    ghost,
    disabled,
    required,
    autofocus,
    autocomplete,
  });

  return `\
<DaisyInputText${attrs.value} />`;
});
</script>
