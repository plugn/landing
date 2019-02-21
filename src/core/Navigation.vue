<template>
  <nav class="navigation">
    <router-link
      to="/"
    >
      <img
        class="d-inline-block align-top"
        src="assets/svg/icons/alabom-logo-beta.svg"
        alt="logo"
      >
    </router-link>
  </nav>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      isActive: false,
      isMenuToggled: false,
      links: [
        {
          id: 'Home',
          name: 'Home',
          to: '/',
        },
      ],
    };
  },
};

</script>

<style lang="scss">
 @import '~styles/mixins';
 .navigation {
  @include flex();
 }
</style>
