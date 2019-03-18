<template>
  <div class="banner">
    <div class="banner__text">
      <div
        v-if="title"
        class="banner__title"
      >
        {{ title }}
      </div>
      <div
        v-if="description"
        class="banner__description"
      >
        {{ description }}
      </div>
    </div>
    <picture>
      <img
        v-show="isImageLoaded"
        :srcset="`
          ${banner.image.image_1160x200} 1160w,
          ${banner.mobile_image.image_360x240} 360w,
        `"
        :sizes="`
          (min-width: ${LG}) 100vw
          (min-width: ${SM}) 100vw
          `
        "
        :src="banner.mobile_image.original"
        class="img-fluid"
        @load="handleImageLoad"
        @error="handleImageError"
      >
      <div
        v-if="!isImageLoaded"
        class="banner__loader"
      >
        <Loader />
      </div>
    </picture>
  </div>
</template>

<script>
import isEmpty from 'lodash.isempty';
import isNil from 'lodash.isnil';
import { createNamespacedHelpers } from 'vuex';

import {
  XL,
  LG,
  MD,
  SM,
} from 'constants';

import Loader from '@/components/shared/Loader';

const { mapState } = createNamespacedHelpers('landing');

export default {
  name: 'Banner',
  components: {
    Loader,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'bannersSection',
    },
    kitId: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      XL,
      LG,
      MD,
      SM,
      banner: {},
      isImageLoaded: false,
    };
  },
  computed: mapState(['kitBanners']),
  created() {
    const { banners } = this.kitBanners;
    if (banners.length) {
      const banner = banners.find(b => `${b.kit}` === this.kitId);
      if (!this.isNil(banner)) {
        this.loadImg();
        this.banner = banner;
      }
    }
  },
  methods: {
    isEmpty,
    isNil,
    loadImg() {
      this.isImageLoaded = false;
    },
    handleImageLoad() {
      this.isImageLoaded = true;
    },
    handleImageError() {
      this.isImageLoaded = false;
    },
  },
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

    @include element(loader) {
      text-align: center;
    }
  }

</style>
