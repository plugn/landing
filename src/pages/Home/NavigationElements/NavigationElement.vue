<template>
  <a
    v-smooth-scroll
    :href="`#kit-${cat.kit}`"
    class="navigation-element"
  >
    <figure class="navigation-element__image-wrapper">
      <img
        v-show="isImageLoaded"
        class="navigation-element__image content-image"
        :src="cat.image.image_98x98"
        :alt="cat.kit"
        @load="handleImageLoad"
        @error="handleImageError"
      >
      <figcaption
        v-show="isImageLoaded"
        class="navigation-element__text"
      >
        {{ cat.title }}
      </figcaption>
      <div
        v-if="!isImageLoaded"
        class="navigation-element__loader content-image"
      >
        <Loader />
      </div>
    </figure>
  </a>
</template>

<script>
import Loader from '@/components/shared/Loader';

export default {
  name: 'NavigationElement',
  components: {
    Loader,
  },
  props: {
    cat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isImageLoaded: false,
    };
  },
  created() {
    this.loadImg();
  },
  methods: {
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

  .navigation-element {
    &:hover {
      text-decoration: none;
    }
    @include element(image-wrapper) {
      margin: 0;
      @include aspect-ratio(98, 98);
    }

    @include element(image) {
      border: 1px solid var(--black-01);
      border-radius: 50%;
      // width: px-to-rem(98);
    }

    @include element(text) {
      color: var(--light-gray);
      margin-top: px-to-rem(10);
    }
  }
</style>
