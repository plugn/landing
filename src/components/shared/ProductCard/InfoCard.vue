<i18n src="./productCard.i18n.json"></i18n>

<template>
  <div class="info-card">
    <div class="info-card__left">
      <div
        v-if="price"
        class="info-card__price"
        :class="{ 'info-card__price--red': hasDiscount}"
      >
        {{ hasDiscount ? this.$t('from') : '' }} {{ roundPrice(price) }} ₽
      </div>
      <div
        v-if="oldPrice && hasDiscount"
        class="info-card__old-price"
      >
        <div class="info-card__text">
          {{ roundPrice(oldPrice) }} ₽
        </div>
        <div class="info-card__price-cross" />
      </div>
    </div>
    <div
      v-if="rating"
      class="info-card__rating"
    >
      <img
        src="/static/svg/icons/rating-star.svg"
        class="info-card__star"
      >
      <span class="info-card__rate">
        {{ calcRating(rating) }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    hasDiscount: {
      type: Boolean,
      default: false,
    },
    price: {
      type: [Number, String],
      default: 0,
    },
    oldPrice: {
      type: [Number, String],
      default: 0,
    },
    rating: {
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    calcRating(rate) {
      return Number.parseFloat(rate).toFixed(1);
    },
    roundPrice(price) {
      return Math.floor(price);
    },
  },
};
</script>


<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .info-card {
    display: flex;
    justify-content: space-between;

    @include element(left) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      flex: 1;
      float: left;
    }

    @include element(price) {
      font-size: 16px;
      font-weight: 500;
      line-height: px-to-rem(20);
      margin-right: px-to-rem(10);
      @include modifier(red) {
        color: var(--red);
      }
    }

    @include element(old-price) {
      align-items: center;
      color: var(--light-gray);
      display: flex;
      font-size: 12px;
      justify-content: center;
      position: relative;
    }

    @include element(text) {

    }

    @include element(price-cross) {
      background-color: var(--light-gray);
      border-radius: px-to-rem(5);
      height: 1px;
      position: absolute;
      transform: rotate(-10deg);
      width: 100%;
    }

    @include element(rating) {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }

    @include element(star) {
      margin-right: px-to-rem(3.6);
      margin-top: px-to-rem(-2);
    }

    @include element(rate) {
      color: var(--light-gray);
    }

  }

</style>
