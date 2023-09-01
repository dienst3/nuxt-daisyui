<template>
  <div class="flex-1">
    <DaisyTab v-model="activeTab" type="lifted" class="-mb-px relative z-10">
      <DaisyTabEntry name="preview" title="Preview" />
      <DaisyTabEntry v-if="code" name="vue" title="Vue" />
    </DaisyTab>
    <div class="grid relative bg-base-300 rounded-b-box rounded-tr-box">
      <div
        v-if="activeTab === 'preview'"
        class="flex preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box min-h-[8rem] w-4xl border p-4 flex-wrap items-center justify-center flex-col"
      >
        <slot />
      </div>
      <div
        v-if="activeTab === 'vue'"
        class="mockup-code flex relative w-full rounded-tl-none mt-px"
      >
        <DaisyButton
          @click="copy(code)"
          v-if="supportsCopy"
          title="Click to copy code"
          :color="copied ? 'success' : 'primary'"
          size="sm"
          class="absolute right-0 top-0 mr-4 mt-2"
          shape="square"
        >
          <Icon
            :name="
              copied
                ? 'material-symbols:check-circle-outline'
                : 'material-symbols:content-copy-outline'
            "
            size="20px"
            class="text-neutral-content"
          />
        </DaisyButton>
        <highlightjs language="xml" :code="code" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeTab = ref<"preview" | "vue">("preview");

const props = defineProps<{
  code?: string;
}>();

const {
  copy,
  copied,
  isSupported: supportsCopy,
} = useClipboard({
  source: props.code,
});
</script>

<style scoped>
.preview {
  background-image: repeating-linear-gradient(
    45deg,
    hsl(var(--b1)),
    hsl(var(--b1)) 13px,
    hsl(var(--b2)) 13px,
    hsl(var(--b2)) 14px
  );
}
</style>

<style>
.hljs {
  padding: 0 !important;
  background-color: hsl(var(--n) / var(--tw-bg-opacity));
}

.hljs,
.hljs-subst {
  color: hsl(var(--nc));
}

.hljs-name {
  color: hsl(var(--p));
}

.hljs-attr {
  color: hsl(var(--sf));
}

.hljs-string,
.hljs-section,
.hljs-selector-class,
.hljs-template-variable,
.hljs-deletion {
  color: hsl(var(--s));
}
</style>
