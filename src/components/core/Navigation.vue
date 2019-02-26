<template>
  <nav class="navigation">
    <div class="navigation__left-side">
      <router-link
        class="logo"
        to="/"
      >
        <img
          height="30"
          class="logo__img"
          src="assets/svg/icons/alabom-logo-beta.svg"
        >
      </router-link>
      <div
        class="button-categories"
        role="button"
        @click="handleCategoriesClick"
      >
        <img
          class="button-categories__icon"
          src="assets/svg/icons/burger-black.svg"
          alt="burger-menu"
        >
        <span class="button-categories__text">
          All categories
        </span>
      </div>
      <div class="navigation__search">
        <InputSearch />
      </div>
    </div>
    <div class="navigation__right-side">
      <Dropdown
        icon="cart-black"
        text="Shopping cart"
      >
        <div
          slot="count"
          class="cart-counter"
        >
          2
        </div>
        <div class="h4 h4-mb10">
          Your shopping cart is still empty
        </div>
        <div class="text text-grey">
          Choose a product and order it for a few
          minutes
        </div>
      </Dropdown>
      <Dropdown
        icon="enter-black"
        text="Sign In"
      />
      <button @click="toggleModal">
        text
      </button>
    </div>
    <Modal>
      <LoginForm />
    </Modal>
    <Categories :is-open="isCategoriesOpen" />
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import InputSearch from 'components/base/InputSearch';
import Dropdown from 'components/base/Dropdown';
import Modal from 'components/shared/Modal';
import LoginForm from 'components/shared/LoginForm';

import Categories from './Categories';

const { mapActions } = createNamespacedHelpers('modal');

export default {
  name: 'Navigation',
  components: {
    Dropdown,
    Categories,
    InputSearch,
    Modal,
    LoginForm,
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
    ...mapActions(['toggleModal']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .navigation {
    @include flex($justify-content: space-between);
    align-items: center;
    height: 100%;
    @include element(search) {
      width: 32.1%;
    }
    @include element(left-side) {
      display: flex;
      flex-grow: 1;
    }
    @include element(right-side) {
      display: flex;
    }
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    cursor: pointer;
    height: px-to-rem(40);
    margin-right: px-to-rem(10);
    padding: 10px 15px;
    transition: all .1s ease-in-out;

    @include element(icon) {
      @include size(px-to-rem(24));
      margin-right: px-to-rem(10);
    }

    @include element(text) {
      text-align: left;
    }
  }

</style>
