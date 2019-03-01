<template functional>
  <img
    class="icon"
    :src="props.src"
    :style="{
      height: props.height ? props.height : '100%',
      width: props.width ? props.width : '100%',
    }"
    :alt="props.name"
  >
</template>
<style lang="scss">
  .icon {
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
