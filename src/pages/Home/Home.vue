<template>
  <section class="home">
    <div class="row">
      <div
        v-for="banner in banners"
        :key="banner"
        class="col-6"
      >
        <figure>
          <img 
            :src="banner"
            :alt="banner"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  name: 'Home',
  data() {
    return {
      heading: 'Alabom',
      banners: [
        'assets/img/banner1.png',           
        'assets/img/banner2.png', 
      ],
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

  .home {
    padding: px-to-rem(40) 0 0 0;
  }
</style>

