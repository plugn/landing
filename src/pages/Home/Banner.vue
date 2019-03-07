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
    <picture
      v-if="banners[name]"
    >
      <source
        :srcset="banners[name].image.original"
        :media="XL"
      >
      <source
        :srcset="banners[name].image.original"
        :media="LG"
      >
      <source
        :srcset="banners[name].image.original"
        :media="MD"
      >
      <source
        :srcset="banners[name].mobile_image.original"
        :media="SM"
      >
      <img
        class="img-fluid"
        :src="banners[name].mobile_image.original"
        :alt="banners[name].mobile_image"
      >
    </picture>
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
  name: 'Banner',
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
    urlId: {
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
    };
  },
  computed: mapState(['banners']),
  created() {
    this.fetchGoodsBanner({
      id: this.urlId,
      name: this.name,
    });
  },
  methods: mapActions(['fetchGoodsBanner']),
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
