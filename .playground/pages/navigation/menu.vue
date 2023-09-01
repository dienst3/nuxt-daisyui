<template>
  <PageTitle>Menu</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="title" description="The title of the menu.">
        <DaisyInputText
          v-model="title"
          placeholder="Menu Title"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry name="size" description="The size of the menu.">
        <PropsTableCommonSize v-model="size" />
      </PropsTableEntry>
      <PropsTableEntry
        name="horizontal"
        description="Make the menu horizontal."
      >
        <DaisyInputToggle v-model="horizontal" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="responsive"
        description="Make the menu horizontal on larger devices."
      >
        <DaisyInputToggle v-model="responsive" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyMenu
        :title="title"
        :size="size"
        :horizontal="horizontal"
        :responsive="responsive"
      >
        <DaisyMenuItem>Home</DaisyMenuItem>
        <DaisyMenuItem collapsible>
          Two
          <template #children>
            <DaisyMenuItem>Two-One</DaisyMenuItem>
            <DaisyMenuItem>Two-Two</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
      </DaisyMenu>
    </Preview>
  </div>
  <PageTitle>Menu - Item</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry
        name="collapsible"
        description="Mark the item as collapsible."
      >
        <DaisyInputToggle v-model="collapsible" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="disabled" description="Make the item disabled.">
        <DaisyInputToggle v-model="disabled" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="active" description="Style the item as active.">
        <DaisyInputToggle v-model="active" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="focus" description="Style the item as focussed.">
        <DaisyInputToggle v-model="focus" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="open" description="Set the collapsible as open.">
        <DaisyInputToggle v-model="open" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="to" description="The destination of the link.">
        <DaisyInputText
          v-model="to"
          placeholder="https://dienst3.nl"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="target"
        description="The target of the link."
        required
      >
        <DaisyInputSelect v-model="target" bordered size="sm">
          <option value="">Default</option>
          <option value="_blank">Blank</option>
          <option value="_self">Self</option>
          <option value="_parent">Parent</option>
          <option value="_top">Top</option>
        </DaisyInputSelect>
      </PropsTableEntry>
      <PropsTableEntry
        name="rel"
        description="The rel propery of the link in the item."
      >
        <DaisyInputText
          v-model="rel"
          placeholder="noopener"
          size="sm"
          bordered
        />
      </PropsTableEntry>
      <PropsTableEntry
        name="exact"
        description="Enable exact matching for link highlights."
      >
        <DaisyInputToggle v-model="exact" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="itemPreviewCode">
      <DaisyMenu>
        <DaisyMenuItem
          :collapsible="collapsible"
          :disabled="disabled"
          :active="active"
          :focus="focus"
          :open="open"
          :to="to"
          :target="target"
          :rel="rel"
          :exact="exact"
        >
          Item
          <template #children>
            <DaisyMenuItem>Subitem One</DaisyMenuItem>
            <DaisyMenuItem>Subitem Two</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
      </DaisyMenu>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const title = ref("Menu Title");
const size = ref();
const horizontal = ref(false);
const responsive = ref(false);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    title,
    size,
    horizontal,
    responsive,
  });

  return `\
<DaisyMenu${attrs.value}>
  <DaisyMenuItem>Home</DaisyMenuItem>
  <DaisyMenuItem collapsible>
    Two
    <template #children>
      <DaisyMenuItem>Two-One</DaisyMenuItem>
      <DaisyMenuItem>Two-Two</DaisyMenuItem>
    </template>
  </DaisyMenuItem>
</DaisyMenu>`;
});

const collapsible = ref(false);
const disabled = ref(false);
const active = ref(false);
const focus = ref(false);
const open = ref(false);
const to = ref("https://dienst3.nl");
const target = ref("_blank");
const rel = ref();
const exact = ref(false);

const itemPreviewCode = computed(() => {
  const attrs = useComponentAttrs({
    collapsible,
    disabled,
    active,
    focus,
    open,
    to,
    target,
    rel,
    exact,
  });

  return `\
<DaisyMenuItem${attrs.value}>
  Item
  <template #children>
    <DaisyMenuItem>Subitem One</DaisyMenuItem>
    <DaisyMenuItem>Subitem Two</DaisyMenuItem>
  </template>
</DaisyMenuItem>`;
});
</script>
