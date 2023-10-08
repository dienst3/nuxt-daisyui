<template>
  <PageTitle>Drawer</PageTitle>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <PropsTable>
      <PropsTableEntry name="open" description="Fixes the drawer open.">
        <DaisyInputToggle v-model="open" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry name="end" description="Move the drawer to the end.">
        <DaisyInputToggle v-model="end" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="responsive"
        description="Fixes the drawer open on larger screens."
      >
        <DaisyInputToggle v-model="responsive" size="sm" />
      </PropsTableEntry>
      <PropsTableEntry
        name="absolute"
        description="Position the drawer absolutely."
      >
        <DaisyInputToggle v-model="absolute" size="sm" />
      </PropsTableEntry>
    </PropsTable>
    <Preview :code="previewCode">
      <DaisyDrawer
        v-model="model"
        class="h-96"
        :open="open"
        :end="end"
        :responsive="responsive"
        :absolute="absolute"
      >
        <template #side>
          <div class="w-80 h-full bg-base-200 text-base-content">
            <DaisyMenu>
              <DaisyMenuItem>One</DaisyMenuItem>
              <DaisyMenuItem>Two</DaisyMenuItem>
            </DaisyMenu>
          </div>
        </template>
        <div class="flex justify-center mt-8">
          <DaisyButton
            @click="model = true"
            title="Click to open Drawer"
            color="primary"
            class="relative"
          >
            Open Drawer
          </DaisyButton>
        </div>
      </DaisyDrawer>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const model = ref(false);
const open = ref(false);
const end = ref(false);
const responsive = ref(false);
const absolute = ref(true);

const previewCode = computed(() => {
  const attrs = useComponentAttrs({
    "v-model": ref("model"),
    open,
    end,
    responsive,
    absolute,
  });

  return `\
<DaisyDrawer${attrs.value}>
  <template #side>
    <div class="w-80 h-full bg-base-200 text-base-content">
      <DaisyMenu>
        <DaisyMenuItem>One</DaisyMenuItem>
        <DaisyMenuItem>Two</DaisyMenuItem>
      </DaisyMenu>
    </div>
  </template>
  <DaisyButton
    @click="model = true"
    title="Click to open Drawer"
    color="primary"
    class="relative"
  >
    Open Drawer
  </DaisyButton>
</DaisyDrawer>`;
});
</script>
