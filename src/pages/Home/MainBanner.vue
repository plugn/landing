<template>
  <div class="main-banner">
    <div class="main-banner__wrapper">
      <!-- <figure class="text-center m-0" /> -->
      <picture
        v-if="mainBanner.isLoaded"
        class="main-banner__image"
      >
        <source
          :srcset="mainBanner.banner.image.original"
          :media="XL"
        >
        <source
          :srcset="mainBanner.banner.image.original"
          :media="LG"
        >
        <source
          :srcset="mainBanner.banner.image.original"
          :media="MD"
        >
        <source
          :srcset="mainBanner.banner.mobile_image.original"
          :media="SM"
        >
        <img
          :src="mainBanner.banner.mobile_image.original"
          alt="banner 1"
        >
      </picture>
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

import {
  XL,
  LG,
  MD,
  SM,
} from 'constants';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'MainBanner',
  data() {
    return {
      XL,
      LG,
      MD,
      SM,
    };
  },
  computed: mapState(['mainBanner']),
  created() {
    this.fetchMainBanner({
      id: 1,
    });
  },
  methods: mapActions(['fetchMainBanner']),
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  $main-banner-height: px-to-rem(300);

  .main-banner {

    @include element(image) {
      display: block;
      height: 100%;
      overflow: hidden;
      width: 100%;
    }

    @include element(wrapper) {
      left: 0;
      position: absolute;
      right: 0;
      top: 4rem;

      @include media($sm) {
        top: 4.3rem;
      }

      @include media($md) {
        top: 4.3rem;
      }

      @include media($xl) {
        height: $main-banner-height;
        top: 5rem;
      }
    }

    @include element(main-separator) {
      height: px-to-rem(214);
      margin-bottom: px-to-rem(20);

      @include media($md) {
        height: $main-banner-height;
        margin-bottom: px-to-rem(40);
      }

      @include media($xl) {
        height: $main-banner-height;
        margin-bottom: px-to-rem(40);
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
