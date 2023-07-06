<template>
  <h2>Menu</h2>
  <DaisyMenu rounded>
    <DaisyMenuItem title="Home" to="/" />
    <DaisyMenuItem title="Two">
      <DaisyMenuItem title="Two-One" to="/two/one" disabled />
      <DaisyMenuItem title="Two-Two" to="/two/two" active />
    </DaisyMenuItem>
    <DaisyMenuItem title="Three" collapsible open>
      <DaisyMenuItem title="Three-One" to="/three/one" />
      <DaisyMenuItem title="Three-Two" to="/three/two" />
    </DaisyMenuItem>
  </DaisyMenu>
</template>
