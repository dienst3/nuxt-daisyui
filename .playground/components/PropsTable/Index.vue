<template>
  <DaisyTable bordered class="flex-1">
    <template #head>
      <th class="w-1/6">Prop</th>
      <th class="w-2/6">Value</th>
      <th>Description</th>
      <th class="w-8">Required</th>
    </template>
    <slot />
  </DaisyTable>
</template>
