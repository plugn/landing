<i18n src="./dropdownAuth.i18n.json"></i18n>

<template>
  <Dropdown
    icon="enter-black"
    :text="title"
    :has-popup="true"
    hide-text-mobile
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
import Dropdown from '@/components/base/Dropdown';
import DropdownList from '@/components/base/DropdownList';
// import { apiLogout } from '@/api/api';

const profileJson = localStorage.getItem('LANDING_PROFILE');
const userProfile = profileJson ? JSON.parse(profileJson) : null;

export default {
  name: 'DropdownAuth',
  components: {
    Dropdown,
    DropdownList,
  },
  data() {
    return {
      profile: userProfile,
      isLoggedIn: Boolean(userProfile),
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
    userName() {
      return this.profile ? (this.profile.first_name || this.profile.last_name || this.profile.email || 'Гость') : 'Гость';
    },
    title() {
      return this.profile ? this.userName : this.$t('signIn');
    },
  },
  methods: {
    handleClick(item) {
      // eslint-disable-next-line
      console.log('item', item);
      if (item.href) {
        // eslint-disable-next-line no-restricted-globals
        location.href = item.href;
      } else if (item.action) {
        if (item.action === 'login') {
          this.doLogin();
        } else {
          this.doLogout();
        }
      }
    },
    doLogin() {
      // eslint-disable-next-line
      console.info('DropdownAuth::doLogin()', this.profile);

      if (this.profile) { return; }
      // eslint-disable-next-line
      localStorage.setItem('LANDING_URL', location.href);
      localStorage.setItem('LANDING_ACTION', 'auth');
      // eslint-disable-next-line
      location.href = '/';
    },
  },
  doLogout() {
    // eslint-disable-next-line
    console.info('DropdownAuth::doLogout()');
    // apiLogout();
  },
};
</script>
