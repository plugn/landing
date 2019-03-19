<i18n src="./navigation.i18n.json"></i18n>

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
          src="/static/svg/icons/burger-black.svg"
          alt="burger-menu"
          @click="handleBurgerClick"
        >
        <Categories
          :is-open="isTabletCategoriesOpened"
          @onClose="handleBurgerClick"
        />
      </div>
      <a
        href="/"
        class="logo no-decoration"
      >
        <img
          style="height: 30px; border: none;"
          class="logo__img"
          src="/static/svg/icons/alabom-logo-new3.svg"
        >
      </a>
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
            src="/static/svg/icons/burger-black.svg"
            alt="burger-menu"
          >
          <span
            v-t="'allCategories'"
            class="button-categories__text"
          />
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
      <div
        v-if="false"
        class="navigation__cart"
      >
        <DropdownCart />
      </div>
      <div
        v-if="false"
        class="navigation__right-item"
      >
        <Dropdown
          icon="enter-black"
          :text="$t('signIn')"
          hide-text-mobile
        >
          <img
            slot="icon"
            src="/static/svg/icons/enter-black.svg"
            class="dropdown-icon"
          >
        </Dropdown>
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

import InputSearch from '@/components/base/InputSearch';
<<<<<<< HEAD
import Dropdown from '@/components/base/Dropdown';
import Modal from '@/components/shared/Modal';
import LoginForm from '@/components/shared/LoginForm/_LoginForm';
import clickOutside from '@/directives/clickOutside';
=======
// import Dropdown from 'components/base/Dropdown';
// import DropdownEmpty from 'components/base/Dropdown/DropdownEmpty';
import Modal from '@/components/shared/Modal';
import LoginForm from 'components/shared/LoginForm/_LoginForm';
import clickOutside from 'directives/clickOutside';
>>>>>>> 890c7e9... chore(eslint): aliases, formatting

import Categories from './Categories';
import ModalSearch from './ModalSearch';
import DropdownCart from './DropdownCart';

const { mapActions } = createNamespacedHelpers('modal');
const profileJson = localStorage.getItem('LANDING_PROFILE');
const userProfile = profileJson ? JSON.parse(profileJson) : null;

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
    DropdownCart,
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
      profile: userProfile,
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

  a.no-decoration {
    text-decoration: none;
  }

  .button-categories {
    align-items: center;
    background-color: #f7f8fa;
    border-radius: 4px;
    color: var(--black-08);
    cursor: pointer;
    display: none;
    height: 40px;
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
