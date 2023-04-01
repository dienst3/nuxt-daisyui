<template>
  <h2>Table</h2>
  <DaisyTable bordered>
    <template #head>
      <th class="w-32">#</th>
      <th class="w-2/5">Name</th>
      <th>Description</th>
    </template>
    <tr class="hover">
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr class="hover">
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </DaisyTable>
</template>
