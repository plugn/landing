<template>
  <section
    :id="name"
  >
    <h3 class="goods__row-title">
      {{ isLoaded && sections[name] ? sections[name].title.ru : '' }}
    </h3>
    <div
      v-if="isLoaded && sections[name]"
      class="row goods__row"
    >
      <div
        v-for="(good, idx) in sections[name].good_list"
        :key="idx"
        class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 p-0"
      >
        <ProductCard
          :product="good"
        />
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
import { createNamespacedHelpers } from 'vuex';

import ProductCard from 'components/shared/ProductCard';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'Goods',
  components: {
    ProductCard,
  },
  props: {
    name: {
      type: String,
      default: 'goodsSection',
    },
    urlId: {
      type: String,
      default: '1',
    },
  },
  computed: mapState(['sections', 'isLoaded']),
  created() {
    this.fetchGoods({
      id: this.urlId,
      name: this.name,
    });
  },
  methods: mapActions(['fetchGoods']),
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .goods {
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
