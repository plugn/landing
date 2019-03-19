<i18n src="./dropdownCart.i18n.json"></i18n>

<template>
  <Dropdown
    :has-popup="!String(count)"
    icon="cart-black"
    :text="$t('shoppingCart')"
    hide-text-mobile
  >
    <img
      slot="icon"
      src="/static/svg/icons/cart-black.svg"
      class="dropdown-icon"
    >

    <div
      v-if="String(cartCount)"
      slot="counter"
      class="cart-counter"
    >
      {{ cartCount }}
    </div>
    <div v-else>
      Your shopping cart is still empty. <br>
      Choose a product and order it for a few
      minutes.
    </div>
  </Dropdown>
</template>

<script>
import Dropdown from '@/components/base/Dropdown';
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapActions } = createNamespacedHelpers('profile');

export default {
  name: 'DropdownCart',
  components: {
    Dropdown,
  },
  props: {
    count: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
      'hasCart',
      'cartCount',
    ]),
  },
  mounted() {
    if (this.isLoggedIn && !this.hasCart) {
      this.getCart();
    }
  },
  methods: {
    ...mapActions([
      'getCart',
    ]),
  },
};
</script>

<style>
.cart-counter {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -5px;
    margin-right: -10px;
    padding-top: 1px;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 50px;
    background-color: #0a5bf0;
    color: #fff;
    font-size: 11px;
    line-height: 17px
}
.dropdown-icon {
  opacity: 0.3;
}
</style>
