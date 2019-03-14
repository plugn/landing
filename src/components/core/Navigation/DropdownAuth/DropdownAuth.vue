<i18n src="./dropdownAuth.i18n.json"></i18n>

<template>
  <Dropdown
    icon="enter-black"
    :text="$t('signIn')"
    hide-text-mobile
  >
    <img
      slot="icon"
      src="/static/svg/icons/enter-black.svg"
      class="dropdown-icon"
    >
  </Dropdown>
</template>

<script>
import Dropdown from '@/components/base/Dropdown';

export default {
  name: 'DropdownAuth',
  components: {
    Dropdown,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style>

</style>
