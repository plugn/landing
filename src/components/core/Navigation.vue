<template>
  <nav class="navigation">
    <router-link
      class="logo"
      to="/"
    >
      <img
        height="30"
        class="logo__img"
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
    @include flex($justify-content: flex-start);
    align-items: center;
    height: 100%;
  }
  .logo {
    width: (170 / 14) + rem;
    @include element(img) {
      width: 100%;
    }
  }
</style>
