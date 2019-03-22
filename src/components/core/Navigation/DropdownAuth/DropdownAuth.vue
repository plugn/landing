<i18n src="./dropdownAuth.i18n.json"></i18n>

<template>
  <Dropdown
    icon="enter-black"
    :text="title"
    :has-popup="isLoggedIn"
    hide-text-mobile
    @on-click="onEnter"
  >
    <img
      slot="icon"
      :src="`/static/svg/icons/${isLoggedIn ? 'user': 'enter'}-black.svg`"
      class="dropdown-icon"
    >
    <div v-if="isLoggedIn">
      <DropdownList
        :items="items"
        @on-click="handleClick"
      />
    </div>
  </Dropdown>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Dropdown from '@/components/base/Dropdown';
import DropdownList from '@/components/base/DropdownList';

const { mapGetters, mapActions } = createNamespacedHelpers('profile');

export default {
  name: 'DropdownAuth',
  components: {
    Dropdown,
    DropdownList,
  },
  data() {
    return {
      items: [
        {
          id: 0,
          text: this.$t('myOrders'),
          href: '/profile/',
        },
        {
          id: 1,
          text: this.$t('myProfile'),
          href: '/settings/',

        },
        {
          id: 2,
          text: this.$t('logOut'),
          action: 'logout',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'userName',
      'userProfile',
      'isLoggedIn',
    ]),
    title() {
      return this.isLoggedIn ? this.userName : this.$t('signIn');
    },
  },
  methods: {
    ...mapActions([
      'doLogout',
    ]),
    onEnter() {
      if (!this.isLoggedIn) {
        this.doLogin();
      }
    },
    handleClick(item) {
      if (item.href) {
        // eslint-disable-next-line no-restricted-globals
        location.href = item.href;
      } else if (item.action) {
        if (item.action === 'logout') {
          this.doLogout();
        }
      }
    },
    doLogin() {
      if (this.userProfile) { return; }
      // eslint-disable-next-line
      localStorage.setItem('LANDING_URL', location.href);
      localStorage.removeItem('LANDING_ACTION_SHOWN');
      localStorage.setItem('LANDING_ACTION', 'auth');
      // eslint-disable-next-line
      location.href = '/';
    },
  },
};
</script>
