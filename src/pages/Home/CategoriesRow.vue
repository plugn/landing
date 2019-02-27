<template>
  <div class="row categories-row">
    <div
      v-for="(cat, idx) in categories"
      :key="idx"
      class="col text-center"
    >
      <figure class="categories-row__category">
        <img
          class="img-fluid"
          src="assets/img/ellipse.png"
          alt="cat"
        >
        <figcaption class="categories-row__text">
          lorem ipsum
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesRow',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .categories-row {
    width: 100%;

    @include element(category) {
      margin: 0;
    }

    @include element(text) {
      color: var(--light-gray);
      margin-top: px-to-rem(10);
    }

  }
</style>
