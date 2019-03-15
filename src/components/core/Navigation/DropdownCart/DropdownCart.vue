<i18n src="./dropdownCart.i18n.json"></i18n>

<template>
  <Dropdown
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
      slot="count"
      class="cart-counter"
    >
      2
    </div>
    <div>
      Your shopping cart is still empty
    </div>
    <div>
      Choose a product and order it for a few
      minutes
    </div>
  </Dropdown>
</template>

<script>
import Dropdown from '@/components/base/Dropdown';

export default {
  name: 'DropdownCart',
  components: {
    Dropdown,
  },
};
</script>

<style>

</style>
