<i18n src="./dropdownCart.i18n.json"></i18n>

<template>
  <Dropdown
    :has-popup="!cartCount"
    icon="cart-black"
    :text="$t('shoppingCart')"
    hide-text-mobile
    @on-click="handleClick"
  >
    <img
      slot="icon"
      src="/static/svg/icons/cart-black.svg"
      class="dropdown-icon"
    >

    <div
      v-if="Number(cartCount)"
      slot="counter"
      class="cart-counter"
    >
      {{ cartCount }}
    </div>
    <div v-else>
      <div style="margin-bottom: 10px; font-weight: 500;">
        {{ $t('yourShoppingCartIsStillEmpty') }}
      </div>
      <div>{{ $t('chooseAProductAndOrderIt') }}</div>
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
    handleClick() {
      // eslint-disable-next-line
      location.href = '/cart/';
    },
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
