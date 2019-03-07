<template>
  <footer>
    <nav class="footer-mobile">
      <h2 class="sr-only">
        Mobile Navigation
      </h2>
      <button
        v-for="link in links"
        :key="link.id"
        class="footer-mobile__link"
        :class="{'footer-mobile__link--active': selected === link.id}"
        type="button"
        @click="handleClick(link)"
      >
        <img
          v-if="selected !== link.id"

          :src="imgSrc(`assets/svg/icons/${link.icon}.svg`)"
          :alt="link.name"
          class="tabbar-icon"
        >
        <img
          v-if="selected === link.id"
          :src="imgSrc(`assets/svg/icons/${link.iconActive}.svg`)"
          :alt="link.name"
          class="tabbar-icon"
        >
        <div>
          {{ link.name }}
        </div>
      </button>
    </nav>
  </footer>
</template>

<script>
import imgSrc from 'components/base/Icon/imgSrc';

import { LANG } from '@/constants';

const alabomUrl = 'https://alabom.com';

export default {
  name: 'FooterMobile',
  data() {
    return {
      selected: 0,
      links: [
        {
          id: 0,
          name: 'Main',
          icon: 'home-disabled',
          iconActive: 'home-filled',
          href: `${alabomUrl}/${LANG}/`,
        },
        {
          id: 1,
          name: 'Catalog',
          icon: 'search-grey',
          iconActive: 'search-blue',
          href: `${alabomUrl}/${LANG}/search/`,
        },
        {
          id: 2,
          name: 'Cart',
          icon: 'cart-disabled',
          iconActive: 'cart-filled',
          href: `${alabomUrl}/${LANG}/cart/`,
        },
        {
          id: 3,
          name: 'Login',
          icon: 'enter-disabled',
          iconActive: 'enter-filled',
          href: `${alabomUrl}/${LANG}/auth/`,
        },
      ],
    };
  },
  methods: {
    imgSrc,
    handleClick(link) {
      this.selected = link.id;
      window.location.href = link.href;
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .footer-mobile {
    background-color: #fff;
    bottom: 0;
    box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, .12);
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1020;

    @include element(link) {
      background: transparent;
      border: none;
      color: #87888b;
      cursor: pointer;
      float: left;
      font-size: 10px;
      line-height: 24px;
      padding: 8px 4px 0;
      text-align: center;
      width: 25%;
      text-decoration: none;
      &:focus {
        outline: none !important;
      }

      @include modifier(active) {
        color: var(--blue);
        svg {
          color: var(--blue);
        }
      }
    }

    @include media($md) {
      display: none;
    }
  }

</style>
