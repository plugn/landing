<i18n src="./goodsKit.i18n.json"></i18n>

<template>
  <section
    :id="`kit-${kit.id}`"
  >
    <!-- <Banner
      :url-id="`${kit.id}`"
      :name="`${kit.id}`"
    /> -->
    <h3 class="goods-kit__row-title">
      {{ kit.title }}
    </h3>
    <div
      v-if="kit.good_list.length"
      class="row goods-kit__row"
    >
      <div
        v-for="(good, idx) in kit.good_list"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard
          :product="good"
        />
      </div>
    </div>
    <div
      v-if="kit.count > kit.good_list.length"
      v-t="'loadMore'"
      class="goods-kit__load-more"
      role="button"
      @click="handleLoadMore"
    />
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import ProductCard from '@/components/shared/ProductCard';
// import Banner from '@/pages/Home/Banner';

const { mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'GoodsKit',
  components: {
    ProductCard,
    // Banner,
  },
  props: {
    kit: {
      type: Object,
      default() {
        return {
          good_list: [],
        };
      },
    },
  },
  data() {
    return {
      limit: 10,
      offset: 0,
    };
  },
  methods: {
    handleLoadMore() {
      this.loadMoreGoodsKit({
        id: this.kit.id,
        offset: this.offset += this.limit,
      });
    },
    ...mapActions(['loadMoreGoodsKit']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .goods-kit {
    @include element(row) {
      padding-top: 1rem;
    }

    @include element(load-more) {
      align-items: center;
      background: #F7F9FA;
      border-radius: px-to-rem(4);
      color: var(--black-06);
      cursor: pointer;
      display: flex;
      height: px-to-rem(50);
      justify-content: center;
      margin-bottom: px-to-rem(40);
      width: 100%;
    }

  }
</style>
