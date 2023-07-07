<template>
  <h1>Tooltip</h1>
  <div class="flex flex-col 2xl:flex-row gap-8">
    <DaisyTable bordered class="flex-1">
      <template #head>
        <th class="w-1/6">Prop</th>
        <th class="w-2/6">Value</th>
        <th>Description</th>
        <th class="w-8">Required</th>
      </template>
      <tr>
        <td><code>tip</code></td>
        <td>
          <DaisyInputText v-model="tip" placeholder="tip" size="sm" bordered />
        </td>
        <td>The text to display in the tooltip.</td>
        <td class="font-bold">Yes</td>
      </tr>
      <tr>
        <td><code>open</code></td>
        <td>
          <DaisyInputToggle v-model="open" size="sm" />
        </td>
        <td>Force the tooltip to be opened.</td>
        <td>No</td>
      </tr>
      <tr>
        <td><code>location</code></td>
        <td>
          <DaisyInputSelect v-model="location" bordered size="sm">
            <option value="">Default</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </DaisyInputSelect>
        </td>
        <td>The location of the tooltip relative to the content.</td>
        <td>No</td>
      </tr>
      <tr>
        <td><code>color</code></td>
        <td>
          <DaisyInputSelect v-model="color" bordered size="sm">
            <option value="">Default</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="accent">Accent</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </DaisyInputSelect>
        </td>
        <td>The color of the tooltip.</td>
        <td>No</td>
      </tr>
    </DaisyTable>
    <Preview class="flex-1">
      <template #vue>//todo Vue code</template>

      <DaisyTooltip :tip="tip" :open="open" :location="location" :color="color">
        Hover me!
      </DaisyTooltip>
    </Preview>
  </div>
</template>

<script setup lang="ts">
const tip = ref("This is a tooltip!");
const open = ref(false);
const location = ref();
const color = ref();
</script>
