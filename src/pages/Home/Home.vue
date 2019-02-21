<template>
  <section>
    <h1 class="display-3 text-center mt-3">
      {{ heading }}
    </h1>
    <div class="row" />
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
    };
  },
  computed: mapState(['products']),
  created() {
    this.fetchProducts();
  },
  methods: mapActions(['fetchProducts']),
};
</script>
