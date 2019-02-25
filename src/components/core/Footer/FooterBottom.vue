<template>
  <div class="footer-bottom">
    <h5 class="footer-bottom__left-title">
      <strong>
        Покупайте товары на Alabom.com
      </strong>
    </h5>
    <div class="row">
      <div
        v-for="(group, idx) in categories"
        :key="idx"
        class="col-3"
      >
        <div
          v-for="category in group"
          :key="category.href"
          class="categories__item"
        >
          <span class="categories__icon">
            <Icon :src="category.icon" />
          </span>
          <a
            :href="category.href"
            class="categories__link"
          >
            {{ category.text }}
          </a>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';

const { mapState, mapActions } = createNamespacedHelpers('categories');

export default {
  name: 'FooterBottom',
  components: {
    Icon,
  },
  computed: mapState(['categories']),
  created() {
    this.fetchCategories(8);
  },
  methods: {
    ...mapActions(['fetchCategories']),
  },
}
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .footer-bottom {
    margin-top: px-to-rem(30);
    @include element(left-title) {
      margin-bottom: px-to-rem(25);
    }
  }
</style>
