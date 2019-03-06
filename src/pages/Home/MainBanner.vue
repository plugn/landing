<template>
  <div class="main-banner">
    <div class="main-banner__image">
      <figure class="text-center m-0">
        <!-- <img
          class="img-fluid"
          src="assets/img/main-banner.png"
          alt="main banner"
        > -->
      </figure>
    </div>
    <div class="main-banner__main-separator" />
    <h3 class="main-banner__row-title text-center">
      –30% на новинки
    </h3>
    <p class="main-banner__description">
      9 и 14 февраля в кулинарной студии Юлии Высоцкой пройдет
      мастер-класс известного шеф-повара Константина Ивлева,
      посвященный главному масленичному лакомству
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'MainBanner',
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  $main-banner-height: px-to-rem(300);

  .main-banner {
    padding-top: px-to-rem(40);

    @include element(image) {
      left: 0;
      position: absolute;
      right: 0;
      top: 4rem;
      background: url('../../assets/img/home/main-banner-mobile.png') no-repeat center;
      height: px-to-rem(213);
      // background: #585bff;
      // background: -moz-linear-gradient(left, #585bff 0%, #8f25ff 100%);
      // background: -webkit-linear-gradient(left, #585bff 0%,#8f25ff 100%);
      // background: linear-gradient(to right, #585bff 0%,#8f25ff 100%);

      @include media($sm) {
        background: url('../../assets/img/home/main-banner.png') no-repeat center;
        top: 4.3rem;
      }

      @include media($md) {
        background: url('../../assets/img/home/main-banner.png') no-repeat center;
        top: 4.3rem;
      }

      @include media($xl) {
        background: url('../../assets/img/home/main-banner-big.png') no-repeat center;
        height: $main-banner-height;
        top: 5rem;
      }
    }

    @include element(main-separator) {
      height: px-to-rem(213);
      margin-bottom: px-to-rem(40);

      @include media($xl) {
        height: $main-banner-height;
      }
    }

    @include element(discount-title) {
      height: $main-banner-height;
      margin-bottom: px-to-rem(40);
    }

    @include element(description) {
      color: #000;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: px-to-rem(40);
      text-align: center;
    }
  }
</style>
