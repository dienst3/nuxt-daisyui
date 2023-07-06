<template>
  <h1>Menu</h1>
  <DaisyMenu rounded>
    <DaisyMenuItem to="/">Home</DaisyMenuItem>
    <DaisyMenuItem>
      Two
      <template #children>
        <DaisyMenuItem to="/two/one" disabled>Two-One</DaisyMenuItem>
        <DaisyMenuItem to="/two/two" active>Two-Two</DaisyMenuItem>
      </template>
    </DaisyMenuItem>
    <DaisyMenuItem collapsible open>
      Three
      <template #children>
        <DaisyMenuItem to="/three/one">Three-One</DaisyMenuItem>
        <DaisyMenuItem to="/three/two">Three-Two</DaisyMenuItem>
      </template>
    </DaisyMenuItem>
  </DaisyMenu>
</template>
