<template>
  <div class="flex flex-col items-center justify-center block lg:hidden">
    <DaisyButton
      @click="drawer = !drawer"
      title="Click to toggle Drawer"
      color="primary"
      class="relative"
    >
      Toggle Drawer
    </DaisyButton>
  </div>
  <DaisyDrawer v-model="drawer" responsive>
    <template #side>
      <h1 class="text-primary text-2xl font-bold my-4 ml-6">Nuxt DaisyUI</h1>
      <DaisyMenu
        class="px-4 pb-2 w-full md:w-96 block overflow-y-auto scroll-smooth bg-base-100"
        style="scrollbar-width: thin"
      >
        <DaisyMenuItem to="/">
          <Icon name="material-symbols:download" size="24px" />
          Installation
        </DaisyMenuItem>
        <DaisyMenuItem to="/themes">
          <Icon name="material-symbols:colors" size="24px" />
          Themes
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:left-click"
            size="24px"
            class="text-fuchsia-600"
          />
          Actions
          <template #children>
            <DaisyMenuItem to="/actions/button">Button</DaisyMenuItem>
            <DaisyMenuItem to="/actions/dropdown" disabled>
              Dropdown
            </DaisyMenuItem>
            <DaisyMenuItem to="/actions/modal" disabled>Modal</DaisyMenuItem>
            <DaisyMenuItem to="/actions/swap" disabled>Swap</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:chart-data"
            size="24px"
            class="text-teal-600"
          />
          Data Display
          <template #children>
            <DaisyMenuItem to="/display/accordion" disabled>
              Accordion
            </DaisyMenuItem>
            <DaisyMenuItem to="/display/alert">Alert</DaisyMenuItem>
            <DaisyMenuItem to="/display/avatar" disabled>Avatar</DaisyMenuItem>
            <DaisyMenuItem to="/display/badge" disabled>Badge</DaisyMenuItem>
            <DaisyMenuItem to="/display/card" disabled>Card</DaisyMenuItem>
            <DaisyMenuItem to="/display/carousel" disabled>
              Carousel
            </DaisyMenuItem>
            <DaisyMenuItem to="/display/chat" disabled>
              Chat Bubble
            </DaisyMenuItem>
            <DaisyMenuItem to="/display/collapse">Collapse</DaisyMenuItem>
            <DaisyMenuItem to="/display/countdown" disabled>
              Countdown
            </DaisyMenuItem>
            <DaisyMenuItem to="/display/kbd" disabled>Kbd</DaisyMenuItem>
            <DaisyMenuItem to="/display/loading" disabled>
              Loading
            </DaisyMenuItem>
            <DaisyMenuItem to="/display/progress" disabled>
              Progress
            </DaisyMenuItem>
            <DaisyMenuItem
              title="Radial Progress"
              to="/display/radialprogress"
              disabled
            />
            <DaisyMenuItem to="/display/stat" disabled>Stat</DaisyMenuItem>
            <DaisyMenuItem to="/display/table">Table</DaisyMenuItem>
            <DaisyMenuItem to="/display/tooltip">Tooltip</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:edit"
            size="24px"
            class="text-rose-600"
          />
          Data Input
          <template #children>
            <DaisyMenuItem to="/input/checkbox">Checkbox</DaisyMenuItem>
            <DaisyMenuItem to="/input/file" disabled>File input</DaisyMenuItem>
            <DaisyMenuItem to="/input/radio" disabled>Radio</DaisyMenuItem>
            <DaisyMenuItem to="/input/range" disabled>Range</DaisyMenuItem>
            <DaisyMenuItem to="/input/rating" disabled>Rating</DaisyMenuItem>
            <DaisyMenuItem to="/input/select">Select</DaisyMenuItem>
            <DaisyMenuItem to="/input/text">Text Input</DaisyMenuItem>
            <DaisyMenuItem to="/input/textarea" disabled>
              Textarea
            </DaisyMenuItem>
            <DaisyMenuItem to="/input/toggle">Toggle</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:layers-outline"
            size="24px"
            class="text-blue-600"
          />
          Layout
          <template #children>
            <DaisyMenuItem to="/layout/artboard" disabled>
              Artboard
            </DaisyMenuItem>
            <DaisyMenuItem to="/layout/divider" disabled>Divider</DaisyMenuItem>
            <DaisyMenuItem to="/layout/drawer">Drawer</DaisyMenuItem>
            <DaisyMenuItem to="/layout/footer" disabled>Footer</DaisyMenuItem>
            <DaisyMenuItem to="/layout/hero" disabled>Hero</DaisyMenuItem>
            <DaisyMenuItem to="/layout/indicator" disabled>
              Indicator
            </DaisyMenuItem>
            <DaisyMenuItem to="/layout/join" disabled>Join</DaisyMenuItem>
            <DaisyMenuItem to="/layout/mask" disabled>Mask</DaisyMenuItem>
            <DaisyMenuItem to="/layout/stack" disabled>Stack</DaisyMenuItem>
            <DaisyMenuItem to="/layout/toast" disabled>Toast</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:navigation"
            size="24px"
            class="text-cyan-600"
          />
          Navigation
          <template #children>
            <DaisyMenuItem to="/navigation/breadcrumbs" disabled>
              Breadcrumbs
            </DaisyMenuItem>
            <DaisyMenuItem to="/navigation/bottom" disabled>
              Bottom navigation
            </DaisyMenuItem>
            <DaisyMenuItem to="/navigation/link" disabled>Link</DaisyMenuItem>
            <DaisyMenuItem to="/navigation/menu">Menu</DaisyMenuItem>
            <DaisyMenuItem to="/navigation/navbar" disabled>
              Navbar
            </DaisyMenuItem>
            <DaisyMenuItem to="/navigation/pagination" disabled>
              Pagination
            </DaisyMenuItem>
            <DaisyMenuItem to="/navigation/steps" disabled>Steps</DaisyMenuItem>
            <DaisyMenuItem to="/navigation/tab">Tab</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
        <DaisyMenuItem collapsible open>
          <Icon
            name="material-symbols:phone-android"
            size="24px"
            class="text-lime-600"
          />
          Mockup
          <template #children>
            <DaisyMenuItem to="/mockup/code" disabled>Code</DaisyMenuItem>
            <DaisyMenuItem to="/mockup/phone" disabled>Phone</DaisyMenuItem>
            <DaisyMenuItem to="/mockup/window" disabled>Window</DaisyMenuItem>
          </template>
        </DaisyMenuItem>
      </DaisyMenu>
    </template>

    <div class="mx-4 md:mx-8 my-6 prose">
      <slot />
    </div>
  </DaisyDrawer>
</template>

<script setup lang="ts">
const drawer = ref(false);
</script>
