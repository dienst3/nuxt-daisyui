<template>
  <h2>Tabs</h2>
  <DaisyTabs v-model="activeTab" lifted>
    <DaisyTabsEntry name="one" title="Tab One" />
    <DaisyTabsEntry name="two" title="Tab Two" disabled />
    <DaisyTabsEntry name="three" title="Tab Three" />
  </DaisyTabs>
  <span>{{ activeTab }}</span>
</template>

<script lang="ts" setup>
const activeTab = ref("one");
</script>
