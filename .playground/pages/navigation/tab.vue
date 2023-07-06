<template>
  <h1>Tab</h1>
  <DaisyTab v-model="activeTab" lifted>
    <DaisyTabEntry name="one" title="Tab One" />
    <DaisyTabEntry name="two" title="Tab Two" disabled />
    <DaisyTabEntry name="three" title="Tab Three" />
  </DaisyTab>
  <span>{{ activeTab }}</span>
  <DaisyTab lifted>
    <DaisyTabLink to="/" title="Tab One" />
    <DaisyTabLink to="/two" title="Link Two" disabled />
    <DaisyTabLink to="/three" title="Tab Three" />
  </DaisyTab>
</template>

<script lang="ts" setup>
const activeTab = ref("one");
</script>
