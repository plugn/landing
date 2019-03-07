<template>
  <section class="home">
    <h2 class="sr-only">
      Home
    </h2>
    <MainBanner />
    <div class="container px-lg-0">

      <div class="home__row">
        <CategoriesRow
          :categories="categories"
        />
      </div>

      <Banner
        url-id="1"
        name="dresses"
        title="Скидки до 30:"
        description="на модные платьешки от китайских кутюрье"
      />

      <Goods
        url-id="1"
        name="dresses"
      />

      <Banner
        url-id="2"
        name="suits"
        title="Скидки до 30:"
        description="на модные платьешки от китайских кутюрье"
      />

      <Goods
        name="suits"
        url-id="2"
      />

      <Banner
        url-id="3"
        name="womansClothesAndAccessories"
        title="Налетай! Дешево!"
        description="Комбинзоны для активных мамочек!"
      />

      <Goods
        url-id="3"
        name="womansClothesAndAccessories"
      />

      <Banner
        url-id="4"
        name="electronics"
        title="Одежка для матрешки"
        description=" Как стать королевой панели? У нас есть ответ!"
      />

      <Goods
        url-id="4"
        name="electronics"
      />
    </div>
  </section>
</template>

<script>

import CategoriesRow from './CategoriesRow';
import Goods from './Goods';
import Banner from './Banner';
import MainBanner from './MainBanner';

export default {
  name: 'Home',
  components: {
    Banner,
    MainBanner,
    CategoriesRow,
    Goods,
  },
  data() {
    return {
      heading: 'Alabom',
      banners: [
        'assets/img/banner.png',
        'assets/img/banner2.png',
      ],
      categories: [
        {
          anchor: '#dressess',
        },
        {
          anchor: '#combinations',
        },
        {
          anchor: '#accessories',
        },
        {
          anchor: '#electronics',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .home {

    @include element(row) {
      margin-bottom: px-to-rem(50);
      overflow-x: scroll;
    }

    @include element(row-title) {
      font-size: 26px;
      font-weight: bold;
      line-height: 40px;
      margin-bottom: px-to-rem(20);
    }
  }
</style>
