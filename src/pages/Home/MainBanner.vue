<template>
  <div class="main-banner">
    <div class="main-banner__content">
      <picture
        v-if="mainBanner.isLoaded"
        class="main-banner__image-wrapper"
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
          class="main-banner__image"
          :src="mainBanner.banner.mobile_image.original"
          alt="banner 1"
        >
      </picture>
    </div>
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

    @include element(content) {
      margin-bottom: px-to-rem(20);

      @include media($md) {
        margin-bottom: px-to-rem(40);
      }

    }

    @include element(image-wrapper) {
      display: block;
      height: initial;
      max-width: 100%;
      overflow: hidden;

      @include media($md) {
        height: px-to-rem(300);
        max-width: px-to-rem(1920);
      }

    }

    @include element(image) {
      height: initial;
      object-fit: initial;
      width: initial;

      @include media($md) {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

    }

    @include element(discount-title) {
      height: $main-banner-height;
      margin-bottom: px-to-rem(40);
    }

    @include element(description) {
      color: var(--black);
      font-size: 16px;
      line-height: 24px;
      margin: 0 auto;
      margin-bottom: px-to-rem(40);
      max-width: px-to-rem(924);
      text-align: center;
    }
  }
</style>
