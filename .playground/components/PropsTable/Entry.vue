<template>
  <tr>
    <td>
      <code>{{ name }}</code>
    </td>
    <td><slot /></td>
    <td>{{ description }}</td>
    <td v-if="required" class="font-bold">Yes</td>
    <td v-else>No</td>
  </tr>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  description: string;
  required?: boolean;
}>();
</script>
