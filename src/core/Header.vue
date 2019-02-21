<template>
  <header class="header">
    <Navigation />
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

  .header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

</style>
