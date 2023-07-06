<template>
  <h1>Checkbox</h1>
  <DaisyInputCheckbox />
  <DaisyInputCheckbox
    label="I'm disabled and checked"
    disabled
    :model-value="true"
  />
  <DaisyInputCheckbox
    label="I don't know what I am"
    :model-value="'indeterminate'"
  />
  <DaisyInputCheckbox label="Click me!" color="primary" size="lg" />
</template>
