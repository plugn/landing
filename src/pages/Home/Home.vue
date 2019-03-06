<template>
  <section class="home">
    <h2 class="sr-only">
      Home
    </h2>
    <MainBanner />
    <div class="home__row">
      <CategoriesRow
        :categories="categories"
      />
    </div>

    <Banner
      title="Скидки до 30:"
      description="на модные платьешки от китайских кутюрье"
    />

    <Goods
      url-id="1"
      name="dresses"
    />

    <div class="home__banner">
      <div class="home__banner-text">
        <div class="home__banner-title">
          Скидки до 30:
        </div>
        <div class="home__banner-description">
          на модные платьешки от китайских кутюрье
        </div>
      </div>
      <picture>
        <source
          srcset="@/assets/img/home/banner2.png"
          media="(min-width: 1200px)"
        >
        <source
          srcset="@/assets/img/home/banner2.png"
          media="(min-width: 992px)"
        >
        <source
          srcset="@/assets/img/home/banner2.png"
          media="(min-width: 768px)"
        >
        <source
          srcset="@/assets/img/home/banner2-small.png"
          media="(min-width: 576px)"
        >
        <img
          src="@/assets/img/home/banner2-small.png"
          alt="banner 1"
        >
      </picture>
    </div>

    <Goods
      name="suits"
      url-id="2"
    />

    <div class="home__banner">
      <div class="home__banner-text">
        <div class="home__banner-title">
          Налетай! Дешево!
        </div>
        <div class="home__banner-description">
          Комбинзоны для активных мамочек!
        </div>
      </div>
      <picture>
        <source
          srcset="@/assets/img/home/banner3.png"
          media="(min-width: 1200px)"
        >
        <source
          srcset="@/assets/img/home/banner3.png"
          media="(min-width: 992px)"
        >
        <source
          srcset="@/assets/img/home/banner3.png"
          media="(min-width: 768px)"
        >
        <!-- <source
          srcset="@/assets/img/home/banner3-small.png"
          media="(min-width: 576px)"
        > -->
        <img
          src="@/assets/img/home/banner1-small.png"
          alt="banner 1"
        >
      </picture>
    </div>

    <section id="accessories">
      <h3 class="home__row-title">
        Accessories
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
    </section>

    <div
      class="home__load-more"
      role="button"
    >
      Load more
    </div>

    <div class="home__banner">
      <div class="home__banner-text">
        <div class="home__banner-title">
          Одежка для матрешки
        </div>
        <div class="home__banner-description">
          Как стать королевой панели? У нас есть ответ!
        </div>
      </div>
      <picture>
        <source
          srcset="@/assets/img/home/banner4.png"
          media="(min-width: 1200px)"
        >
        <source
          srcset="@/assets/img/home/banner4.png"
          media="(min-width: 992px)"
        >
        <source
          srcset="@/assets/img/home/banner4.png"
          media="(min-width: 768px)"
        >
        <source
          srcset="@/assets/img/home/banner1-small.png"
          media="(min-width: 576px)"
        >
        <img
          src="@/assets/img/home/banner1-small.png"
          alt="banner 1"
        >
      </picture>
    </div>

    <section id="electronics">
      <h3 class="home__row-title">
        Electronics
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
    </section>

    <div
      class="home__load-more"
      role="button"
    >
      Load more
    </div>
  </section>
</template>

<script>
import ProductCard from 'components/shared/ProductCard';

import CategoriesRow from './CategoriesRow';
import Goods from './Goods';
import Banner from './Banner';
import MainBanner from './MainBanner';

export default {
  name: 'Home',
  components: {
    Banner,
    MainBanner,
    ProductCard,
    CategoriesRow,
    Goods,
  },
  data() {
    return {
      heading: 'Alabom',
      // TODO: there are no such images
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
      productsList: Array.from(Array(10)),
      newProducts: Array.from(Array(25)),
    };
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  $main-banner-height: px-to-rem(300);

  .home {
    padding-top: 0;
    @include media($lg) {
      padding-top: px-to-rem(40);
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

    @include element(banner) {
      margin-bottom: px-to-rem(40);
      overflow: hidden;
      position: relative;
      border-top-right-radius: px-to-rem(4);
      border-bottom-right-radius: px-to-rem(4);

      @include media($xl) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

    }

    @include element(banner-text) {
      position: absolute;
      top: px-to-rem(54);
      left: px-to-rem(10);
      color: var(--white);

      @include media($md) {
        top: px-to-rem(54);
        left: px-to-rem(74);
      }
    }

    @include element(banner-title) {
      font-weight: 900;
      line-height: 40px;
      font-size: 26px;

      @include media($md) {
        line-height: 60px;
        font-size: 40px;
      }
    }

    @include element(banner-description) {
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
