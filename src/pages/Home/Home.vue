<template>
  <section class="home">
    <div class="row home__banners">
      <div
        v-for="banner in banners"
        :key="banner"
        class="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5"
      >
        <figure>
          <img
            class="img-fluid"
            :src="banner"
            :alt="banner"
          >
        </figure>
      </div>
    </div>
    <h3 class="home__row-title">
      New Goods
    </h3>
    <div class="row home__row">
      <div
        v-for="(i, idx) in productsList"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard />
      </div>
    </div>
    <h3 class="home__row-title">
      New Goods
    </h3>
    <div class="row home__row">
      <div
        v-for="(i, idx) in productsList"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard />
      </div>
    </div>
    <h3 class="home__row-title">
      New Goods
    </h3>
    <div class="row home__row">
      <div
        v-for="(i, idx) in newProducts"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from 'components/shared/ProductCard';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      heading: 'Alabom',
      banners: [
        'assets/img/banner1.png',
        'assets/img/banner2.png',
      ],
      productsList: Array.from(Array(5)),
      newProducts: Array.from(Array(25)),
    };
  },
  computed: mapState(['products']),
  created() {
    this.fetchProducts();
  },
  methods: mapActions(['fetchProducts']),
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .home {
    padding-top: px-to-rem(40);
    @include element(banners) {
      margin-bottom: px-to-rem(40);
    }
    @include element(row) {
      margin-bottom: px-to-rem(50);
    }
    @include element(row-title) {
      margin-bottom: px-to-rem(20);
    }
  }
</style>
