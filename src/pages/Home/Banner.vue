<template>
  <div class="banner">
    <div class="banner__text">
      <div class="banner__title">
        Скидки до 30:
      </div>
      <div class="banner__description">
        на модные платьешки от китайских кутюрье
      </div>
    </div>
    <picture>
      <source
        srcset="assets/img/home/banner1.png"
        media="(min-width: 1200px)"
      >
      <source
        srcset="assets/img/home/banner1.png"
        media="(min-width: 992px)"
      >
      <source
        srcset="assets/img/home/banner1.png"
        media="(min-width: 768px)"
      >
      <source
        srcset="assets/img/home/banner1-small.png"
        media="(min-width: 576px)"
      >
      <img
        src="assets/img/home/banner1-small.png"
        alt="banner 1"
      >
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .banner {
    margin-bottom: px-to-rem(40);
    overflow: hidden;
    position: relative;
    border-top-right-radius: px-to-rem(4);
    border-bottom-right-radius: px-to-rem(4);

    @include media($xl) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    @include element(text) {
      position: absolute;
      top: px-to-rem(54);
      left: px-to-rem(10);
      color: var(--white);

      @include media($md) {
        top: px-to-rem(54);
        left: px-to-rem(74);
      }
    }

    @include element(title) {
      font-weight: 900;
      line-height: 40px;
      font-size: 26px;

      @include media($md) {
        line-height: 60px;
        font-size: 40px;
      }
    }

    @include element(description) {
      font-weight: 500;
      line-height: 24px;
      font-size: 16px;
      max-width: px-to-rem(184);

      @include media($md) {
        line-height: 32px;
        font-size: 22px;
        max-width: 100%;
      }
    }
  }

</style>
