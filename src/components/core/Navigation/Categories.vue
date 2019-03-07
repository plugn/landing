<template>
  <nav
    class="categories"
    :class="{ 'categories--open': isOpen }"
  >
    <h2 class="sr-only">
      Categories Navigation
    </h2>
    <div class="container p-0">
      <div
        tabindex="-1"
        role="button"
        class="categories__close"
        @click="handleClick"
      >
        <img
          src="@/assets/svg/icons/x-black.svg"
          alt="close categories menu"
        >
      </div>
      <h6 class="categories__title">
        All categories
      </h6>
      <div class="row mx-0">
        <div
          v-for="(group, idx) in categories"
          :key="idx"
          class="col categories__column"
        >
          <div
            v-for="category in group"
            :key="category.href"
            class="categories__item-wrapper"
          >
            <a
              :href="category.href"
              class="categories__link"
            >
              <span class="categories__icon">
                <Icon :src="imgSrc(category.icon)" />
              </span>
              <div
                class="categories__text"
              >
                {{ category.text }}
              </div>
            </a>
            <img
              class="categories__chevron"
              src="@/assets/svg/icons/chevron-right--black.svg"
              alt="close categories menu"
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';
import imgSrc from 'components/base/Icon/imgSrc';

const { mapState, mapActions } = createNamespacedHelpers('categories');

export default {
  name: 'CategoriesList',
  components: {
    Icon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  computed: mapState(['categories']),
  created() {
    this.fetchCategories(6);
  },

  methods: {
    imgSrc,
    handleClick() {
      this.$emit('onClose');
    },
    ...mapActions(['fetchCategories']),
  },
};

</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .categories {
    background: #ddd;
    display: none;
    height: 100%;
    min-width: 100%;
    margin-top: 0;
    position: fixed;

    @include media($lg) {
      height: initial;
      margin-top: 70px;
      position: absolute;
    }

    @include element(title) {
      display: block;
      font-weight: 500;

      @include media($lg) {
        display: none;
      }

    }

    @include element(close) {
      cursor: pointer;
      display: block;
      @include size(px-to-rem(30));
      margin: px-to-rem(-3) 0 px-to-rem(19) px-to-rem(3);

      @include media($lg) {
        display: none;
      }

    }

    @include element(column) {
      padding: 0 px-to-rem(10);
      width: 25%;

      @include media($lg) {
        // padding: initial;
        // width: initial;
      }
    }

    @include element(item-wrapper) {
      display: flex;
      justify-content: space-between;
      padding: px-to-rem(8) 0;

      @include media($lg) {
        padding: px-to-rem(10) 0;
      }

    }

    @include element(link) {
      align-items: center;
      border-bottom: 1px solid rgba(24, 25, 32, .1);
      display: flex;
      justify-content: flex-start;
      padding: 16px 16px 16px 0;
      line-height: 24px;

      // @include flex($justify-content: flex-start);
      &:hover {
        opacity: .8;
      }

      @include media($lg) {
        border-bottom: none;
        padding: 0;
      }

    }

    @include element(text) {
      color: var(--body-font);
      text-decoration: none !important;
      font-size: 16px;
      width: 5.9rem;

      &:hover {
        color: var(--body-font);
      }

      @include media($lg) {
        font-size: 1rem;
        width: initial;
      }

    }

    @include element(icon) {
      margin-right: px-to-rem(16);
      position: relative;
      top: -1px;
      @include size(px-to-rem(24));

      @include media($lg) {
        margin-right: px-to-rem(10);
      }
    }

    @include element(chevron) {
      display: block;
      opacity: .3;

      @include media($lg) {
        display: none;
      }

    }

    @include modifier(open) {
      background-color: #fff;
      border-radius: 1px;
      border-top: 1px solid rgba(24,25,32,.1);
      box-shadow: 0 20px 30px 0 rgba(24,25,32,.05), 0 0 0 1px hsla(0,0%,100%,.5);
      display: block;
      left: 0;
      padding: 20px 30px;
      right: 0;
      top: 0;
    }
  }
</style>
