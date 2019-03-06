<template>
  <nav class="navigation">
    <h2 class="sr-only">
      Main Navigation
    </h2>
    <div class="navigation__left">
      <div
        v-click-outside="handleBurgerOutsideClick"
        role="button"
        class="navigation__burger"
      >
        <img
          role="button"
          class="navigation__burger-icon"
          src="assets/svg/icons/burger-black.svg"
          alt="burger-menu"
          @click="handleBurgerClick"
        >
        <Categories
          :is-open="isTabletCategoriesOpened"
          @onClose="handleBurgerClick"
        />
      </div>
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
        v-click-outside="handleOutsideClick"
      >
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
        <Categories
          :is-open="isCategoriesOpened"
          @onClose="handleCategoriesClick"
        />
      </div>
      <div class="navigation__search">
        <InputSearch />
      </div>
    </div>
    <div class="navigation__right">
      <div class="navigation__tablet-search navigation__right-item">
        <ModalSearch />
      </div>
      <div class="navigation__cart">
        <Dropdown
          icon="cart-black"
          text="Shopping cart"
          hide-text-mobile
        >
          <div
            slot="count"
            class="cart-counter"
          >
            2
          </div>
          <div>
            Your shopping cart is still empty
          </div>
          <div>
            Choose a product and order it for a few
            minutes
          </div>
        </Dropdown>
      </div>
      <div class="navigation__right-item">
        <Dropdown
          icon="enter-black"
          text="Sign In"
          hide-text-mobile
        />
      </div>
    </div>
    <!-- <button @click="handleLoginClick">
      text
    </button> -->
    <Modal
      :is-open="isLoginFormOpened"
      @on-close="handleLoginClick"
    >
      <LoginForm />
    </Modal>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import InputSearch from 'components/base/InputSearch';
import Dropdown from 'components/base/Dropdown';
import Modal from 'components/shared/Modal';
import LoginForm from 'components/shared/LoginForm/_LoginForm';
import clickOutside from 'directives/clickOutside';

import Categories from './Categories';
import ModalSearch from './ModalSearch';

const { mapActions } = createNamespacedHelpers('modal');

export default {
  name: 'Navigation',
  directives: {
    clickOutside,
  },
  components: {
    Dropdown,
    Categories,
    InputSearch,
    Modal,
    LoginForm,
    ModalSearch,
  },
  data() {
    return {
      isTabletSearchOpened: false,
      isLoginFormOpened: false,
      links: [
        {
          id: 'Home',
          name: 'Home',
          to: '/',
        },
      ],
      isCategoriesOpened: false,
      isTabletCategoriesOpened: false,
    };
  },
  methods: {
    handleLoginClick() {
      this.isLoginFormOpened = !this.isLoginFormOpened;
    },
    handleTabletSearchClick() {
      this.isTabletSearchOpened = !this.isTabletSearchOpened;
    },
    handleCategoriesClick() {
      this.isCategoriesOpened = !this.isCategoriesOpened;
    },
    handleBurgerClick() {
      this.isTabletCategoriesOpened = !this.isTabletCategoriesOpened;
    },
    handleOutsideClick() {
      if (this.isCategoriesOpened) {
        this.isCategoriesOpened = false;
      }
    },
    handleBurgerOutsideClick() {
      if (this.isTabletCategoriesOpened) {
        this.isTabletCategoriesOpened = false;
      }
    },
    ...mapActions(['toggleModal']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .navigation {
    @include flex($justify-content: space-between);
    align-items: center;
    height: 100%;
    padding-left: 0.4rem;
    padding-right: 0.2rem;

    @include media($lg) {
      padding: 0;
    }

    @include element(left) {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      @include media($md) {
        justify-content: initial;
      }
    }

    @include element(right) {
      display: none;
      @include media($md) {
        display: flex;
      }
    }

    @include element(right-item) {
      margin-right: px-to-rem(6);

      @include media($lg) {
        margin-right: 0;
      }

    }

    @include element(burger) {
      align-items: center;
      display: none;
      cursor: pointer;
      float: left;
      justify-content: center;
      margin-right: px-to-rem(11);
      padding: px-to-rem(5);
      @include size(px-to-rem(30));

      @include media($md) {
        display: flex;
      }

      @include media($lg) {
        display: none;
      }

    }

    @include element(burger-icon) {
      @include size(px-to-rem(20));
    }

    @include element(cart) {
      margin-right: px-to-rem(6);
      @include media($lg) {
        margin-right: px-to-rem(45);
      }
    }

    @include element(tablet-search) {
      align-items: center;
      display: flex;
    }

    @include element(search) {
      display: none;
      width: 31.6%;

      @include media($lg) {
       display: block;
      }
    }

  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: -0.3rem;
    margin-right: 0;
    position: relative;
    width: px-to-rem(132);

    @include element(img) {
      width: 100%;
    }

    @include media($md) {
      margin-right: px-to-rem(20);
      width: px-to-rem(170);
    }
  }

  .button-categories {
    align-items: center;
    background-color: #f7f8fa;
    border-radius: 4px;
    color: var(--light-black);
    cursor: pointer;
    display: none;
    height: px-to-rem(40);
    margin-right: px-to-rem(10);
    padding: 10px 15px;
    transition: all .1s ease-in-out;

    @include media($lg) {
      display: flex;
    }

    @include element(icon) {
      @include size(px-to-rem(24));
      margin-right: px-to-rem(10);
      opacity: .8;
    }

    @include element(text) {
      text-align: left;
    }
  }

</style>
