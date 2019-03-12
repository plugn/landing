<template>
  <section class="home">
    <h2 class="sr-only">
      Home
    </h2>
    <MainBanner :mainBanner="landingPage" />
    <div class="container px-lg-0">
      <div class="home__row overflow-auto">
        <NavigationElements />
      </div>
      <div v-if="landingPage.isLoaded">
        <div
          v-for="kit in landingPage.kits"
          :key="kit"
          class="home__row"
        >
          <GoodsKit
            :kit-id="`${kit}`"
            :name="`${kit}`"
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

export default {
  name: 'Home',
  components: {
    MainBanner,
    NavigationElements,
    GoodsKit,
  },
  computed: mapState(['landingPage']),
  created() {
    this.fetchLandingPage({
      id: 1,
    });
  },
  methods: mapActions(['fetchLandingPage']),
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
