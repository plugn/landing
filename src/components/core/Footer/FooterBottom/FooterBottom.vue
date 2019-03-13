<i18n src="@/components/core/Navigation/Categories/categories.i18n.json"></i18n>
<i18n src="./footerBottom.i18n.json"></i18n>

<template>
  <div class="footer-bottom">
    <h5 class="footer-bottom__left-title">
      <strong
        v-t="'buyGoodsOnAlabom'"
      />
    </h5>
    <div class="row">
      <div
        v-for="(group, idx) in categories"
        :key="idx"
        class="col footer-bottom__column"
      >
        <div
          v-for="category in group"
          :key="category.href"
          class="footer-bottom__item-wrapper"
        >
          <a
            :href="category.href"
            class="footer-bottom__link"
          >
            <span class="footer-bottom__icon">
              <Icon :src="category.icon" />
            </span>
            <div
              v-t="category.name"
              class="footer-bottom__text"
            />
          </a>
        </div>
      </div>
      <div class="col footer-bottom__column">
        <!-- <h5 class="footer-bottom__right-title">
          <strong>
            Подписаться на обновления
          </strong>
        </h5>
        <div class="form-group">
          <input
            class="form-control footer-bottom__signup"
            type="input"
            placeholder="Введите ваш E-mail"
          >
        </div>
        <div class="footer-bottom__button">
          <button class="btn btn-primary btn-block btn-lg">
            Подписаться
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';
import imgSrc from 'components/base/Icon/imgSrc';

const { mapState, mapActions } = createNamespacedHelpers('categories');

export default {
  name: 'FooterBottom',
  components: {
    Icon,
  },
  computed: mapState(['categories']),
  created() {
    this.fetchCategories(8);
  },
  methods: {
    imgSrc,
    ...mapActions(['fetchCategories']),
  },
};
</script>

<style lang="scss">

  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .footer-bottom {
    margin-top: px-to-rem(30);

    @include element(column) {
      padding: 0 0.71429rem;
      width: 25%;
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

    @include element(item-wrapper) {
      display: flex;
      justify-content: space-between;
      margin-bottom: px-to-rem(20);
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

    @include element(left-title) {
      margin-bottom: px-to-rem(25);
    }

    @include element(right-title) {
      margin-bottom: px-to-rem(25);
      // position: relative;
      margin-top: 0;

      @include media($lg) {
        margin-top: -3.3rem;
      }
    }

    @include element(signup) {
      border: 1px solid rgba(24, 25, 32, 0.1) !important;
      border-radius: 4px;
    }

    @include element(button) {
      max-width: px-to-rem(127);
      & > button {
        font-size: 1rem !important;
        height: px-to-rem(50);
      }
    }
  }
</style>
