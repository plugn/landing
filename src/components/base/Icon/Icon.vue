<template functional>
  <img
    class="icon"
    :src="`assets/svg/icons/${props.name}${props.selected ? '-selected' : ''}.svg`"
    :style="{
      height: props.height ? props.height : '1.5rem',
      width: props.width ? props.width : '1.5rem',
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
