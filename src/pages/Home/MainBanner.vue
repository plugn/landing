<template>
  <div class="main-banner">
    <div class="main-banner__content">
      <picture
        v-show="isLoad"
        class="main-banner__image-wrapper"
      >
        <img
          :srcset="`
            ${mainBanner.banner.image.image_1920x300} 1920w,
            ${mainBanner.banner.mobile_image.image_360x240} 360w,
          `"
          :sizes="`
            ${LG} 100vw
            ${SM} 100vw
            `
          "
          :src="mainBanner.banner.mobile_image.original"
          class="main-banner__image"
          @load="handleLoad"
          @error="handleError"
        >
      </picture>
      <div
        v-if="!isLoad"
        class="text-center"
      >
        <Loader />
      </div>
    </div>
    <h3 class="main-banner__row-title text-center">
      {{ mainBanner.title }}
    </h3>
    <p class="main-banner__description">
      {{ mainBanner.text }}
    </p>
  </div>
</template>

<script>
// import vueloadImage from 'vue-load-image';

import Loader from '@/components/shared/Loader';

import {
  XL,
  LG,
  MD,
  SM,
} from 'constants';

export default {
  name: 'MainBanner',
  components: {
    // vueloadImage,
    Loader,
  },
  props: {
    mainBanner: {
      type: Object,
      default() {
        return {
          // isLoaded: false,
        };
      },
    },
  },
  data() {
    return {
      XL,
      LG,
      MD,
      SM,
      isLoad: false,
    };
  },
  created() {
    this.loadImg();
  },
  methods: {
    loadImg() {
      this.isLoad = false;
    },
    handleLoad() {
      this.isLoad = true;
    },
    handleError() {
      this.isLoad = false;
    },
  },
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
      margin: 0 auto;
      max-width: 100%;
      overflow: hidden;

      @include media($md) {
        height: px-to-rem(300);
        max-width: px-to-rem(1920);
      }

    }

    @include element(image) {
      height: 100%;
      object-fit: cover;
      width: 100%;
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
