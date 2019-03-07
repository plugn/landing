<template>
  <section class="home">
    <h2 class="sr-only">
      Home
    </h2>
    <MainBanner />
    <div class="container px-lg-0">
      <div class="home__row overflow-auto">
        <CategoriesRow />
      </div>
      <div
        v-for="content in contents"
        :key="content.urlId"
        class="home__row"
      >
        <Banner
          :url-id="content.urlId"
          :name="content.name"
        />
        <Goods
          :url-id="content.urlId"
          :name="content.name"
        />
      </div>
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
      contents: [
        {
          urlId: '1',
          name: 'dresses',
        },
        {
          urlId: '2',
          name: 'suits',
        },
        {
          urlId: '3',
          name: 'womansClothesAndAccessories',
        },
        {
          urlId: '4',
          name: 'electronics',
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
      // overflow-x: scroll;
    }

    @include element(row-title) {
      font-size: 26px;
      font-weight: bold;
      line-height: 40px;
      margin-bottom: px-to-rem(20);
    }
  }
</style>
