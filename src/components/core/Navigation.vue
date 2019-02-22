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
    <nav
      class="categories"
      :class="{ 'categories--open': isCategoriesOpen }"
    >
      <div class="container p-0">
        <div class="row">
          <div
            v-for="(group, idx) in categories"
            :key="idx"
            class="col"
          >
            <div
              v-for="category in group"
              :key="category.href"
              class="categories__item"
            >
              <Icon :src="category.icon" />
              <a
                :href="category.href"
                class="categories__link"
              >
                {{ category.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';

const { mapState, mapActions } = createNamespacedHelpers('categories');

export default {
  name: 'Navigation',
  components: {
    Icon,
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
  computed: mapState(['categories']),
  created() {
    this.fetchCategories(6);
  },
  methods: {
    handleCategoriesClick() {
      this.isCategoriesOpen = !this.isCategoriesOpen;
    },
    ...mapActions(['fetchCategories']),
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

  .categories {
    background: #ddd;
    display: none;
    min-width: 100%;
    position: absolute;
    @include element(item) {
      padding-top: px-to-rem(10);
      padding-bottom: px-to-rem(10);
      &:hover {
        opacity: .8;
      }
    }
    @include element(link) {
      color: var(--body-font);
      text-decoration: none !important;
      &:hover {
        color: var(--body-font);
      }
    }
    @include modifier(open) {
      background-color: #fff;
      border-radius: 1px;
      border-top: 1px solid rgba(24,25,32,.1);
      box-shadow: 0 20px 30px 0 rgba(24,25,32,.05), 0 0 0 1px hsla(0,0%,100%,.5);
      display: block;
      left: 0;
      margin-top: 70px;
      padding: 20px 30px;
      right: 0;
      top: 0;
    }
  }
</style>
