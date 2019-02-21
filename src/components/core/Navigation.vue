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
    <div
      class="categories-button"
      role="button"
    >
      <img
        src="assets/svg/icons/burger-black.svg"
        alt="burger-menu"
      >
      <p class="categories-button__text">
        All categories
      </p>
    </div>
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
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  .navigation {
    @include flex($justify-content: flex-start);
    align-items: center;
    height: 100%;
  }
  .logo {
    margin-right: px-to-rem(20);
    width: px-to-rem(170);
    @include element(img) {
      width: 100%;
    }
  }
  .categories-button {
    align-items: center;
    background-color: #f7f8fa;
    border-radius: 4px;
    cursor: pointer;
    height: px-to-rem(40);
    padding: 10px 15px;
    transition: all .1s ease-in-out;
    width: px-to-rem(158);
    @include flex();
    @include element(text) {
      display: block;
      margin: 0;
    }
  }
</style>
