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
    <div v-if="!isLoggedIn">
      <DropdownList
        :items="items"
        @on-click="handleClick"
      />
    </div>
  </Dropdown>
</template>

<script>
import Dropdown from '@/components/base/Dropdown';
import DropdownList from '@/components/base/DropdownList';

export default {
  name: 'DropdownAuth',
  components: {
    Dropdown,
    DropdownList,
  },
  data() {
    return {
      isLoggedIn: false,
      items: [
        {
          id: 0,
          text: this.$t('myOrders'),
        },
        {
          id: 1,
          text: this.$t('myProfile'),
        },
        {
          id: 2,
          text: this.$t('logOut'),
        },
      ],
    };
  },
  methods: {
    handleClick(item) {
      // eslint-disable-next-line
      console.log('item', item);
    },
  },
};
</script>

<style lang="scss">

</style>
