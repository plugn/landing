<template>
  <div class="navigation-elements">
    <div
      v-if="navigationElements.isLoaded"
      class="row m-0 flex-nowrap"
    >
      <div
        v-for="(cat, idx) in navigationElements.navigationElementsList"
        :key="idx"
        class="col text-center"
      >
        <a
          v-smooth-scroll
          :href="`#kit-${cat.kit}`"
          class="navigation-elements__link"
        >
          <figure class="navigation-elements__image-wrapper">
            <img
              class="navigation-elements__image"
              :src="cat.image.image_98x98"
              :alt="cat.kit"
            >
            <figcaption
              class="navigation-elements__text"
            >
              {{ cat.title }}
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import imgSrc from '@/components/base/Icon/imgSrc';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'NavigationElements',
  props: {
    landingId: {
      type: [Number, String],
      default: '1',
    },
  },
  data() {
    return {
      categories: [
        {
          anchor: '#dresses',
          img: '/static/img/home/navigation-dresses.png',
          name: 'dresses',
        },
        {
          anchor: '#suits',
          img: '/static/img/home/navigation-suits.png',
          name: 'suits',
        },
        {
          anchor: '#womansClothesAndAccessories',
          img: '/static/img/home/navigation-woman-clothes-and-accessories.png',
          name: 'womansClothesAndAccessories',
        },
        {
          anchor: '#electronics',
          img: '/static/img/home/navigation-electronic.png',
          name: 'electronic',
        },
      ],
    };
  },
  computed: mapState(['navigationElements']),
  created() {
    this.fetchNavigationElements({
      landingId: this.landingId,
    });
  },
  methods: {
    imgSrc,
    ...mapActions(['fetchNavigationElements']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .navigation-elements {
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-x: scroll;
    min-width: px-to-rem(500);

    @include media($md) {
      overflow-x: initial;
      width: 100%;
    }

    @include element(link) {
      &:hover {
        text-decoration: none;
      }
    }

    @include element(image-wrapper) {
      margin: 0;
    }

    @include element(image) {
      border: 1px solid var(--black-01);
      border-radius: 50%;
      width: px-to-rem(98);
    }

    @include element(text) {
      color: var(--light-gray);
      margin-top: px-to-rem(10);
    }

  }
</style>
