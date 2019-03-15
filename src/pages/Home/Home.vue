<template>
  <section class="home">
    <h2 class="sr-only">
      Home
    </h2>
    <MainBanner
      v-if="landingPage.isLoaded"
      :main-banner="landingPage"
    />
    <div class="container px-lg-0">
      <div class="home__row overflow-auto">
        <NavigationElements
          :landing-id="landingId"
        />
      </div>
      <div v-if="kits.isLoaded">
        <div
          v-for="kit in kits.goodsKit"
          :key="kit.id"
          class="home__row"
        >
          <GoodsKit
            :kit="kit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import NavigationElements from './NavigationElements';
import GoodsKit from './GoodsKit';
import MainBanner from './MainBanner';

const { mapState, mapActions } = createNamespacedHelpers('landing');

// eslint-disable-next-line
const landingId = String(/^\/landing\/\d+/.test(location.pathname) ? location.pathname : '/landing/1-a/' )
  .split('/')
  .filter(Boolean)
  .pop()
  .split('-')[0];

export default {
  name: 'Home',
  components: {
    MainBanner,
    NavigationElements,
    GoodsKit,
  },
  data() {
    return {
      landingId,
    };
  },
  computed: mapState(['landingPage', 'kits']),
  created() {
    this.fetchLandingPage({
      id: landingId,
    });
    this.fetchKitBanners({
      landingId,
    });
    this.fetchGoodsKit({
      landingId,
    });
  },
  methods: mapActions([
    'fetchLandingPage',
    'fetchGoodsKit',
    'fetchKitBanners',
  ]),
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .home {

    @include element(row) {
      ::-webkit-scrollbar{
        display: none !important;
      }
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
