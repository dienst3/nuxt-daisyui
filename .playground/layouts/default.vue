<template>
  <DaisyDrawer v-model="drawer" responsive>
    <template #side>
      <div class="min-h-full w-full md:w-2/3 lg:w-96 bg-base-100">
        <DaisyNavBar class="sticky top-0 bg-base-200 z-10">
          <DaisyButton
            @click="drawer = !drawer"
            title="Click to close drawer"
            color="secondary"
            class="mr-4 lg:hidden"
          >
            <Icon
              name="material-symbols:close-rounded"
              size="24px"
              class="text-secondary-content"
            />
          </DaisyButton>
          <h1 class="text-primary text-2xl font-bold px-2">Nuxt DaisyUI</h1>
        </DaisyNavBar>

        <DaisyMenu class="px-4 pb-2">
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
              <DaisyMenuItem to="/display/avatar" disabled>
                Avatar
              </DaisyMenuItem>
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
              <DaisyMenuItem to="/display/radialprogress" disabled>
                Radial Progress
              </DaisyMenuItem>
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
              <DaisyMenuItem to="/input/file" disabled>
                File input
              </DaisyMenuItem>
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
              <DaisyMenuItem to="/layout/divider" disabled>
                Divider
              </DaisyMenuItem>
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
              <DaisyMenuItem to="/navigation/navbar">Navbar</DaisyMenuItem>
              <DaisyMenuItem to="/navigation/pagination" disabled>
                Pagination
              </DaisyMenuItem>
              <DaisyMenuItem to="/navigation/steps" disabled>
                Steps
              </DaisyMenuItem>
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
      </div>
    </template>

    <DaisyNavBar class="sticky top-0 bg-base-200">
      <template #start>
        <DaisyButton
          @click="drawer = !drawer"
          title="Click to close drawer"
          outline
          ghost
          class="mr-4 lg:hidden"
        >
          <Icon name="material-symbols:menu" size="24px" />
        </DaisyButton>
      </template>
      <template #end>
        <div class="join mx-3">
          <DaisyButton
            type="link"
            to="https://github.com/dienst3/nuxt-daisyui"
            title="Find us on GitHub"
            target="_blank"
            shape="circle"
            color="secondary"
            class="join-item"
          >
            <Icon name="mdi:github" size="24px" />
          </DaisyButton>
          <DaisyButton
            type="link"
            to="https://www.npmjs.com/@dienst3/nuxt-daisyui"
            title="Find us on NPM"
            target="_blank"
            shape="circle"
            color="secondary"
            class="join-item"
          >
            <Icon name="mdi:npm-variant" size="24px" />
          </DaisyButton>
        </div>
        <DaisyInputSelect v-model="theme" size="md" color="primary">
          <option value="" disabled>Select a theme</option>
          <option v-for="theme in availableThemes" :value="theme">
            {{ theme }}
          </option>
        </DaisyInputSelect>
      </template>
    </DaisyNavBar>

    <div class="mx-2 my-6">
      <slot />
    </div>
  </DaisyDrawer>
</template>

<script setup lang="ts">
const drawer = ref(false);
const router = useRouter();
const { theme, availableThemes } = useDaisyTheme();

router.afterEach(() => {
  drawer.value = false;
});
</script>
