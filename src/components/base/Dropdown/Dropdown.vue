<template>
  <div class="dropdown">
    <div
      v-click-outside="handleOutsideClick"
      class="dropdown__toggle"
      @click="handleClick"
    >
      <div class="dropdown__icon">
        <img
          v-if="icon !== ''"
          :src="`assets/svg/icons/${icon}.svg`"
          class="dropdown-icon icondropheader-cart"
        >
        <slot name="counter" />
      </div>
      <div
        class="dropdown__text"
        :class="{
          'dropdown__text--mobile': hideTextMobile
        }"
      >
        {{ text }}
      </div>
    </div>
    <nav
      class="dropdown__list"
      :class="{'dropdown__list--open': isOpen}"
    >
      <slot />
    </nav>
  </div>
</template>

<script>
import clickOutside from 'directives/clickOutside';

export default {
  name: 'Dropdown',
  directives: {
    clickOutside,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    hideTextMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen;
    },
    handleOutsideClick() {
      if (this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .dropdown {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    float: right;
    justify-content: flex-start;
    position: relative;

    @include element(text) {
      @include modifier(mobile) {
        display: none;
        @include media($md) {
          display: block;
        }
      }
    }

    @include element(toggle) {
      align-items: center;
      border-style: none;
      color: rgba(24, 25, 32, 0.6);
      cursor: pointer;
      display: flex;
      font-size: px-to-rem(14);
      font-weight: 400;
      height: px-to-rem(40);
      justify-content: center;
      line-height: px-to-rem(20);
      padding: 13px 0;
      text-decoration: none;
      transition: all 0.1s ease-in-out;
    }

    @include element(icon) {
      margin-right: 0;
      min-width: px-to-rem(24);
      opacity: 0.3;
      width: px-to-rem(24);

      @include media($md) {
        margin-right: px-to-rem(10);
      }
    }

    @include element(toggle) {
      // margin-right: px-to-rem(10);
      position: relative;
    }

    @include element(list) {
      background-color: #fff;
      border-radius: px-to-rem(4);
      border: 1px none rgba(24, 25, 32, 0.1);
      box-shadow: 0 5px 20px 0 rgba(24, 25, 32, 0.1), 0 0 0 1px hsla(0, 0%, 100%, 0.5);
      color: #181920;
      display: none;
      margin-top: px-to-rem(70);
      min-width: px-to-rem(340);
      opacity: 1;
      overflow: auto;
      padding: px-to-rem(20);
      position: absolute;
      right: 0;
      top: 0;
      transform: translateX(0px) translateY(5px) translateZ(0px);

      @include modifier(open) {
        display: block;
        opacity: 1;
        transform: translateX(0px) translateY(0px) translateZ(0px);
        transition: opacity 100ms ease-out 0s transform 100ms ease-in-out 0s;
      }
    }
  }

  // .dropdown.logindrop-last {
  //   float: right;
  //   margin-right: px-to-rem(-15);
  // }

  .cart-counter {
    background-color: #0a5bf0;
    border-radius: px-to-rem(50);
    color: #fff;
    font-size: px-to-rem(11);
    line-height: px-to-rem(17);
    margin-right: px-to-rem(-10);
    margin-top: px-to-rem(-5);
    padding-left: px-to-rem(5);
    padding-right: px-to-rem(5);
    padding-top: px-to-rem(1);
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
