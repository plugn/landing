<i18n src="./categoriesRow.i18n.json"></i18n>

<template>
  <div class="row categories-row">
    <div
      v-for="(cat, idx) in categories"
      :key="idx"
      class="col text-center"
    >
      <a
        v-smooth-scroll
        :href="cat.anchor"
      >
        <figure class="categories-row__category">
          <img
            class="img-fluid"
            :src="cat.img"
            :alt="cat.name"
          >
          <figcaption
            v-t="cat.name"
            class="categories-row__text"
          />
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
import imgSrc from '@/components/base/Icon/imgSrc';

export default {
  name: 'CategoriesRow',
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
  methods: {
    imgSrc,
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .categories-row {
    overflow-x: scroll;
    min-width: px-to-rem(500);

    @include media($md) {
      overflow-x: initial;
      width: 100%;
    }

    @include element(category) {
      margin: 0;
    }

    @include element(text) {
      color: var(--light-gray);
      margin-top: px-to-rem(10);
    }

  }
</style>
