<template>
  <section id="dressess">
    <h3 class="goods__row-title">
      Dressess
    </h3>
    <div
      class="row goods__row"
    >
      <div
        v-for="(i, idx) in list"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard />
      </div>
    </div>
    <div
      class="goods__load-more"
      role="button"
    >
      Load more
    </div>
  </section>
</template>

<script>
import ProductCard from 'components/shared/ProductCard';

export default {
  name: 'Goods',
  components: {
    ProductCard,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .goods {
    @include element(row) {
      margin-bottom: px-to-rem(50);
      overflow-x: scroll;
    }

    @include element(load-more) {
      align-items: center;
      background: #F7F9FA;
      border-radius: px-to-rem(4);
      color: rgba(24, 25, 32, 0.6);
      cursor: pointer;
      display: flex;
      height: px-to-rem(50);
      justify-content: center;
      margin-bottom: px-to-rem(40);
      width: 100%;
    }

  }
</style>
