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

  .header {
    background: var(--white);
    height: 5rem;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
  }

</style>
