<template>
  <div class="navigation-elements">
    <div
      v-if="navigationElements.isLoaded"
      class="row m-0 flex-nowrap"
    >
      <div
        v-for="(cat, idx) in navigationElements.navigationElementsList"
        :key="idx"
        class="col text-center"
      >
        <NavigationElement :cat="cat" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import NavigationElement from './NavigationElement';

const { mapState, mapActions } = createNamespacedHelpers('landing');

export default {
  name: 'NavigationElements',
  components: {
    NavigationElement,
  },
  props: {
    landingId: {
      type: [Number, String],
      default: '1',
    },
  },
  computed: mapState(['navigationElements']),
  created() {
    this.fetchNavigationElements({
      landingId: this.landingId,
    });
  },
  methods: {
    ...mapActions(['fetchNavigationElements']),
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .navigation-elements {
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-x: scroll;
    min-width: px-to-rem(500);

    @include media($md) {
      overflow-x: initial;
      width: 100%;
    }

  }
</style>
