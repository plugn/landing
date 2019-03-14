<template>
  <article
    class="product-card"
    @click="handleClick"
  >
    <h2 class="sr-only">
      {{ product.brand }}
    </h2>
    <div class="product-card__wrapper">
      <div class="product-card__cover">
        <div
          v-if="product.discount"
          class="product-card__sale"
        >
          <div class="product-card__corner-full" />
          <div class="product-card__sale-bottom">
            <div class="product-card__sale-sign">
              <div>–{{ product.discount.amount }}%</div>
            </div>
            <img
              src="/static/svg/sale-corner.svg"
              class="product-card__corner"
            >
          </div>
        </div>
        <div class="product-card__image-container">
          <img
            v-if="isNil(product.image)"
            src="/static/img/product-placeholder.jpg"
            alt="product placeholder"
            class="product-card__image"
          >
          <img
            v-if="!isNil(product.image)"
            :srcset="`
              ${product.image.image_216x216_url} 2x,
              ${product.image.image_216x216_non_retina_url} 1x,
            `"
            :src="product.image_216x216_url"
            class="product-card__image"
          >
        </div>
        <div class="product-card__image-preloader" />
      </div>
      <InfoCard
        :has-discount="product.discount"
        :price="product.min_price"
        :old-price="product.min_price_before_discount"
        :rating="product.rating"
      />
    </div>
    <div
      v-line-clamp:21="2"
      class="product-card__bottom"
      style="word-break: break-word !important"
    >
      the argument passed to the directive must be a number,
      and its used as the line-height value for non-webkit
      browsers, as part of the fallback method.
      In some upcoming version it may be able to detect
      this value automatically.
    </div>
  </article>
</template>

<script>
import isNil from 'lodash.isnil';

import { LANG } from '@/constants';
import tFrom from '@/utils/tFrom';

// import Loader from '@/components/shared/Loader';
import InfoCard from './InfoCard';

export default {
  name: 'ProductCard',
  components: {
    InfoCard,
    // Loader,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {
          id: '0',
          brand: 'some brand',
          img: '',
          imgHovered: '',
        };
      },
    },
    hasHover: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      title: '',
    };
  },
  mounted() {
    const { title } = tFrom(['title'], this.product);
    this.title = title;
  },
  methods: {
    isNil,
    tFrom,
    handleClick() {
      const { id } = this.product;
      const url = `https://alabom.com/${LANG}/goods/${id}`;
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .product-card {
    background-color: transparent;
    border-radius: px-to-rem(5);
    color: var(--body-font);
    cursor: pointer;
    display: block;
    flex-direction: column;
    flex: 1;
    height: px-to-rem(235);
    justify-content: flex-start;
    margin-bottom: px-to-rem(20);
    margin-top: px-to-rem(-10);
    padding: px-to-rem(10);
    text-decoration: none;
    transition: all .15s ease-in-out;
    &:hover {
      background-color: var(--white);
      box-shadow: 0 4px 16px 0 rgba(24,25,32,.16);

      .product-card__corner {
        transition: opacity .1s ease 0s;
        opacity: 0;
      }

      .product-card__corner-full {
        transition: opacity .1s ease 0s;
        opacity: 1;
      }

    }

    @include media($md) {
      height: px-to-rem(310);
    }

    @include element(cover) {
      border-radius: px-to-rem(5);
      margin-bottom: px-to-rem(10);
      overflow: visible;
      position: relative;
    }

    @include element(sale) {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin-left: px-to-rem(5);
      margin-top: px-to-rem(-10);
      position: absolute;
    }

    @include element(sale-bottom) {
      align-items: flex-start;
      display: flex;
      margin-top: px-to-rem(5);
    }

    @include element(sale-sign) {
      background-color: var(--red);
      border-bottom-left-radius: px-to-rem(5);
      border-bottom-right-radius: px-to-rem(5);
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      font-weight: 900;
      line-height: 24px;
      padding: 6px!important;
      text-align: center;
      z-index: 3;
    }

    @include element(image-container) {
      height: 0;
      padding-bottom: calc(214 / 214 * 100%);
      position: relative;
      // height: 214px;
      // width: 214px;
    }

    @include element(image) {
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,.1);
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
    }

    @include element(image-preloader) {
      left: 50%;
      margin-left: px-to-rem(-10);
      margin-top: px-to-rem(-10);
      position: absolute;
      top: 50%;
      z-index: 1;
    }

    @include element(bottom) {
      margin-top: px-to-rem(5);
      // text-overflow: ellipsis;
      // /* Needed to make it work */
      overflow: hidden;
      // white-space: nowrap;
    }

    @include element(corner-full) {
      background-color: #e82b3b;
      height: px-to-rem(5);
      left: 0;
      margin-left: 3px;
      margin-right: px-to-rem(2.5);
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      transform: skew(-45deg, 0deg);
    }
  }

</style>
