<template>
  <header class="header">
    <div class="container h-100">
      <Navigation />
    </div>
  </header>
</template>

<script>
import Navigation from 'core/Navigation';

export default {
  name: 'Header',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .header {
    background: var(--white);
    border-bottom: 1px solid var(--black-01);
    height: 4rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;

    @include media($md) {
      height: px-to-rem(60);
    }

    @include media($lg) {
      height: px-to-rem(60);
    }

    @include media($xl) {
      height: 5rem;
    }
  }

</style>
