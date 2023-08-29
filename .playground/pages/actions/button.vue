<template>
  <PageTitle>Button</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="title"
        description="The title to display when hovering the button."
        required
      >
        <DaisyInputText
          v-model="title"
          placeholder="title"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="type" description="The function of the button.">
        <DaisyInputSelect v-model="type" bordered size="sm">
          <option value="">Default</option>
          <option value="submit">Submit</option>
          <option value="reset">Reset</option>
          <option value="link">Link</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="to"
        description="The destination of the button if the type is 'link'."
      >
        <DaisyInputText
          v-model="to"
          placeholder="https://dienst3.nl"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="target"
        description="The target of the button if the type is 'link'."
      >
        <DaisyInputSelect v-model="target" bordered size="sm">
          <option value="">Default</option>
          <option value="_blank">_blank</option>
          <option value="_self">_self</option>
          <option value="_parent">_parent</option>
          <option value="_top">_top</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry name="size" description="The size of the button.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry name="color" description="The color of the button.">
        <PropsTableCommonColor v-model="color" />
      </PropsTableEntry>

      <PropsTableEntry
        name="ghost"
        description="Use the 'ghost' style for the button"
      >
        <DaisyInputToggle v-model="ghost" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="link"
        description="Style the button as a link. This does not change it's behaviour!"
      >
        <DaisyInputToggle v-model="link" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="outline"
        description="Display an outline around the button."
      >
        <DaisyInputToggle v-model="outline" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="active"
        description="Force the style of the button as active."
      >
        <DaisyInputToggle v-model="active" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="disabled" description="Make the button disabled.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="glass"
        description="Apply glass styling to the button."
      >
        <DaisyInputToggle v-model="glass" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="noAnimation"
        description="Disable animations for the button."
      >
        <DaisyInputToggle v-model="noAnimation" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="wide" description="Make the button wider.">
        <DaisyInputToggle v-model="wide" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="block" description="Make the button a block.">
        <DaisyInputToggle v-model="block" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="shape" description="Set the shape of the button.">
        <DaisyInputSelect v-model="shape" bordered size="sm">
          <option value="">Default</option>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
        </DaisyInputSelect>
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyButton
        :title="title"
        :type="type"
        :to="to"
        :target="target"
        :size="size"
        :color="color"
        :ghost="ghost"
        :link="link"
        :outline="outline"
        :active="active"
        :disabled="disabled"
        :glass="glass"
        :no-animation="noAnimation"
        :wide="wide"
        :block="link"
        :shape="shape"
      >
        Click me!
      </DaisyButton>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const title = ref("Hover me!");
const type = ref();
const to = ref("https://dienst3.nl");
const target = ref();
const size = ref();
const color = ref();
const ghost = ref(false);
const link = ref(false);
const outline = ref(false);
const active = ref(false);
const disabled = ref(false);
const glass = ref(false);
const noAnimation = ref(false);
const wide = ref(false);
const block = ref(false);
const shape = ref();

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "@click": ref("doSomething()"),
    title,
    type,
    to,
    target,
    size,
    color,
    ghost,
    link,
    outline,
    active,
    disabled,
    glass,
    noAnimation,
    wide,
    block,
    shape,
  });

  return `\
<DaisyButton${attrs.value}>
  Click me!
</DaisyButton>`;
});
</script>
