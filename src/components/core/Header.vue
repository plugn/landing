<template>
  <header class="header">
    <div class="container px-0 h-100">
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .16);
    height: 4rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;

    @include media($md) {
      box-shadow: none;
      height: 5rem;
    }
  }

</style>
