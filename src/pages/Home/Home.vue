<template>
  <section class="home">
    <div class="home__main-banner">
      <figure class="text-center m-0">
        <!-- <img
          class="img-fluid"
          src="assets/img/main-banner.png"
          alt="main banner"
        > -->
      </figure>
    </div>
    <div class="home__main-separator" />
    <h3 class="home__row-title text-center">
      –30% на новинки
    </h3>
    <p class="home__description">
      9 и 14 февраля в кулинарной студии Юлии Высоцкой пройдет
      мастер-класс известного шеф-повара Константина Ивлева,
      посвященный главному масленичному лакомству
    </p>
    <div class="row home__row">
      <CategoriesRow
        :categories="categories"
      />
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
import { createNamespacedHelpers } from 'vuex';
import ProductCard from 'components/shared/ProductCard';

import CategoriesRow from './CategoriesRow';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  name: 'Home',
  components: {
    ProductCard,
    CategoriesRow,
  },
  data() {
    return {
      heading: 'Alabom',
      banners: [
        'assets/img/banner.png',
        'assets/img/banner2.png',
      ],
      categories: Array.from(Array(4)),
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
  @import '~styles/variables';

  $main-banner-height: px-to-rem(300);

  .home {
    padding-top: px-to-rem(40);
    @include element(main-separator) {
      height: $main-banner-height;
      margin-bottom: px-to-rem(40);
    }

    @include element(discount-title) {
      height: $main-banner-height;
      margin-bottom: px-to-rem(40);
    }

    @include element(description) {
      color: #000;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: px-to-rem(40);
      text-align: center;
    }

    @include element(main-banner) {
      left: 0;
      position: absolute;
      right: 0;
      top: 8rem;
      background: url('../../assets/img/main-banner.png') no-repeat center;
      height: $main-banner-height;
      // background: #585bff;
      // background: -moz-linear-gradient(left, #585bff 0%, #8f25ff 100%);
      // background: -webkit-linear-gradient(left, #585bff 0%,#8f25ff 100%);
      // background: linear-gradient(to right, #585bff 0%,#8f25ff 100%);

      @include media($xl) {
        background: url('../../assets/img/main-banner-big.png') no-repeat center;
      }
    }

    @include element(row) {
      margin-bottom: px-to-rem(50);
    }

    @include element(row-title) {
      font-size: 26px;
      font-weight: bold;
      line-height: 40px;
      margin-bottom: px-to-rem(20);
    }
  }
</style>
