<template functional>
  <router-view />
</template>
<style lang="scss">
  @import '~styles/mixins';
  @import '~styles/variables';

  .layout {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    margin-bottom: 3rem;
    @include media($md) {
      margin-bottom: initial;
    }
  }

  .layout__content {
    flex-grow: 1;
  }

</style>
