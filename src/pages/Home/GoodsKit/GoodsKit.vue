<i18n src="./goodsKit.i18n.json"></i18n>

<template>
  <section
    :id="`kit-${kitId}`"
  >
    <Banner
      :url-id="kitId"
      :name="name"
    />
    <h3 class="goods-kit__row-title">
      {{ kits.isLoaded && kits[name] ? kits[name].title : '' }}
    </h3>
    <div
      v-if="kits.isLoaded && kits[name]"
      class="row goods-kit__row"
    >
      <div
        v-for="(good, idx) in kits[name].good_list"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard
          :product="good"
        />
      </div>
    </div>
    <div
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
import Banner from '@/pages/Home/Banner';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'GoodsKit',
  components: {
    ProductCard,
    Banner,
  },
  props: {
    name: {
      type: [String, Number],
      default: 'goodsSection',
    },
    kitId: {
      type: [String, Number],
      default: '1',
    },
  },
  data() {
    return {
      limit: 10,
      offset: 0,
    };
  },
  computed: mapState(['kits']),
  created() {
    this.startFetch();
  },
  methods: {
    startFetch({ loadMore } = { loadMore: false }) {
      this.fetchGoodsKit({
        id: this.kitId,
        limit: this.limit,
        offset: this.offset,
        loadMore,
      });
    },
    handleLoadMore() {
      this.loadMoreGoodsKit({
        id: this.kitId,
        offset: this.offset += this.limit,
      });
    },
    ...mapActions(['fetchGoodsKit', 'loadMoreGoodsKit']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .goods-kit {
    @include element(row) {
      // overflow-x: scroll;
      padding-top: 1rem;
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
