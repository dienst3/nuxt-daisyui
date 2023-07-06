<template>
  <h2>Drawer</h2>
  <DaisyDrawer v-model="drawerOpen" class="h-96">
    <template #side>
      <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </template>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin
    tempor id eu nisl. Convallis aenean et tortor at risus viverra adipiscing
    at. Rhoncus aenean vel elit scelerisque mauris. Pretium fusce id velit ut
    tortor pretium viverra. At augue eget arcu dictum varius duis at consectetur
    lorem. Est ullamcorper eget nulla facilisi. Odio euismod lacinia at quis
    risus sed vulputate odio. Gravida quis blandit turpis cursus in. Faucibus a
    pellentesque sit amet porttitor eget. Nunc pulvinar sapien et ligula. Erat
    nam at lectus urna duis convallis convallis tellus.

    <div class="flex flex-col items-center justify-center">
      <DaisyButton
        @click="drawerOpen = true"
        title="Click to open Drawer"
        color="primary"
        class="relative"
      >
        Open Drawer
      </DaisyButton>
    </div>
  </DaisyDrawer>
</template>

<script setup lang="ts">
const drawerOpen = ref(false);
</script>
