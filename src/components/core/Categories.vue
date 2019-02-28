<template>
  <nav
    class="categories"
    :class="{ 'categories--open': isOpen }"
  >
    <div class="container p-0">
      <div
        tabindex="-1"
        role="button"
        class="categories__close"
        @click="handleClick"
      >
        <img
          src="assets/svg/icons/x-black.svg"
          alt="close categories menu"
        >
      </div>
      <h6 class="categories__title">
        All categories
      </h6>
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
            <span class="categories__icon">
              <Icon :src="category.icon" />
            </span>
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
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';

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
    onClose: Function,
  },
  computed: mapState(['categories']),
  created() {
    this.fetchCategories(6);
  },
  methods: {
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

    @include element(item) {
      align-items: center;

      @include flex($justify-content: flex-start);
      padding-top: px-to-rem(10);
      padding-bottom: px-to-rem(10);
      &:hover {
        opacity: .8;
      }
    }

    @include element(link) {
      color: var(--body-font);
      text-decoration: none !important;
      font-size: 16px;
      &:hover {
        color: var(--body-font);
      }

      @include media($lg) {
        font-size: 1rem;
      }

    }

    @include element(icon) {
      margin-right: px-to-rem(10);
      @include size(px-to-rem(24));
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
