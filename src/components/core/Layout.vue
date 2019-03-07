<template functional>
  <router-view />
</template>
<style lang="scss">
  @import '~styles/mixins';
  @import '~styles/variables';

  .layout {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    margin-bottom: 3rem;
    @include media($md) {
      margin-bottom: initial;
    }

    @include media($lg) {
      padding-top: 5rem;
    }
  }

  .layout__content {
    flex-grow: 1;
  }

</style>
