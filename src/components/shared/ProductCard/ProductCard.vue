<template>
  <article
    href="/en/goods/796ebb9c-058d-40a6-af27-9c41aba61c69/"
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
            srcset="https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216.jpg 2x,
            https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216_non_retina.jpg 1x"
            src="https://good-s.alabom.com/goods_image/38/8c/cdc3a05515af48229ff153419f2b3b33_953956507_kd3raCE.image_216x216.jpg"
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
    <div class="product-card__bottom">
      Zircon bowknot earrings can female ins g...
    </div>
  </article>
</template>

<script>
import { LANG } from '@/constants';

import InfoCard from './InfoCard';

export default {
  name: 'ProductCard',
  components: {
    InfoCard,
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
      image: this.product.img,
    };
  },
  methods: {
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

  .product-card {
    background-color: transparent;
    border-radius: px-to-rem(5);
    color: var(--body-font);
    cursor: pointer;
    display: block;
    flex-direction: column;
    flex: 1;
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
      padding-bottom: 100%;
      position: relative;
    }

    @include element(image) {
      border-radius: 4px;
      border: 1px solid rgba(0,0,0,.1);
      display: block;
      height: 100%;
      position: absolute;
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
