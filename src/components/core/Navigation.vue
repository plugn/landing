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
      class="button-categories"
      role="button"
      @click="handleCategoriesClick"
    >
      <img
        src="assets/svg/icons/burger-black.svg"
        alt="burger-menu"
      >
      <p class="button-categories__text">
        All categories
      </p>
    </div>
    <Categories :is-open="isCategoriesOpen" />
  </nav>
</template>

<script>
import Categories from './Categories';

export default {
  name: 'Navigation',
  components: {
    Categories,
  },
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
      isCategoriesOpen: false,
    };
  },
  methods: {
    handleCategoriesClick() {
      this.isCategoriesOpen = !this.isCategoriesOpen;
    },
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
  .button-categories {
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
